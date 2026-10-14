// Resolves a photo URL for every item in every category and writes src/data/images.json.
// Incremental: keys already present are skipped. Run with: node scripts/resolve-images.ts [--retry-misses]
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { artistCatalogs, getCategory, tabs } from '../src/data/index.ts'
import { imageKey, imageQuery, type CategoryDef } from '../src/data/types.ts'

const OUT = new URL('../src/data/images.json', import.meta.url)
const AUDIT = new URL('../scripts/.image-audit.json', import.meta.url)
const WIKI = 'https://en.wikipedia.org/w/api.php'
const UA = 'BlindBidGame/1.0 (https://github.com/forrestgump2000/blind-bid)'

type Job = { key: string; src: string; name: string; sub?: string; explicit?: string; query: string; hint?: string; exactFirst: boolean }

// Titles of films, shows and games collide with everyday words ("Heat", "Up", "Cars"),
// so those search with a hint. Everything else (people, foods, places) tries the exact title first.
const SEARCH_FIRST = new Set([
  'tv-shows', 'movies', 'disney-shows', 'nick-shows', 'cn-shows', 'netflix-originals', 'reality-tv', 'disney-movies',
  'pixar-movies', 'disney-pixar', 'marvel-movies', 'dc-movies', 'marvel-shows', 'dc-shows', 'documentaries',
  'nolan-movies', 'spielberg-movies', 'biopics', 'comedies', 'kids-shows', 'video-games', '2k-games', 'ea-games', 'board-games',
])

const images: Record<string, string | null> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {}
const audit: Record<string, string> = existsSync(AUDIT) ? JSON.parse(readFileSync(AUDIT, 'utf8')) : {}
const retryMisses = process.argv.includes('--retry-misses')

function jobsFor(cat: CategoryDef): Job[] {
  const out: Job[] = []
  for (const raw of cat.items.split('\n')) {
    const line = raw.trim()
    if (!line) continue
    const [name, sub, explicit] = line.split('|').map((s) => s.trim())
    out.push({ key: imageKey(cat, line), src: cat.src ?? 'wiki', name, sub: sub || undefined, explicit: explicit || undefined, query: imageQuery(cat, line), hint: cat.hint, exactFirst: !SEARCH_FIRST.has(cat.id) })
  }
  return out
}

const jobs = new Map<string, Job>()
const cats: CategoryDef[] = tabs.flatMap((t) => t.categories)
for (const artist of Object.keys(artistCatalogs)) cats.push(getCategory(`artist:${artist}`)!)
for (const c of cats) for (const j of jobsFor(c)) if (!jobs.has(j.key)) jobs.set(j.key, j)

// Batched exact-title lookups, 50 titles per request. Returns how many images changed.
async function exactBatch(list: Job[]): Promise<number> {
  let changed = 0
  for (let i = 0; i < list.length; i += 50) {
    const chunk = list.slice(i, i + 50)
    const titleOf = (j: Job) => j.explicit ?? j.query
    const titles = [...new Set(chunk.map(titleOf))].join('|')
    const data = await getJSON(
      `${WIKI}?action=query&format=json&redirects=1&prop=pageimages|pageprops&ppprop=disambiguation&piprop=thumbnail&pithumbsize=480&pilicense=any&titles=${encodeURIComponent(titles)}`,
    )
    const q = data?.query
    if (!q) continue
    const follow = (t: string) => {
      for (const n of q.normalized ?? []) if (n.from === t) t = n.to
      for (const r of q.redirects ?? []) if (r.from === t) t = r.to
      return t
    }
    const byTitle = new Map<string, any>()
    for (const p of Object.values<any>(q.pages ?? {})) byTitle.set(p.title, p)
    for (const j of chunk) {
      const p = byTitle.get(follow(titleOf(j)))
      if (!p || p.missing !== undefined || p.pageprops?.disambiguation !== undefined || !p.thumbnail?.source) continue
      if (images[j.key] !== p.thumbnail.source) changed++
      images[j.key] = p.thumbnail.source
      audit[j.key] = `exact:${p.title}`
    }
  }
  save()
  return changed
}


const todo = [...jobs.values()].filter((j) => j.src !== 'none' && (!(j.key in images) || (retryMisses && images[j.key] === null)))
console.log(`${jobs.size} unique images, ${todo.length} to resolve`)


const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function getJSON(url: string, tries = 8): Promise<any> {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } })
      if (res.status === 429 || res.status >= 500) {
        await sleep(1500 * (i + 1))
        continue
      }
      if (!res.ok) return null
      const json = await res.json()
      // Deezer reports rate limiting as a 200 with an error body.
      if (json?.error?.code === 4) {
        await sleep(5500)
        continue
      }
      return json
    } catch {
      await sleep(1000 * (i + 1))
    }
  }
  return null
}

const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

type Hit = { url: string; title: string } | null

async function mediawikiTitle(api: string, title: string): Promise<Hit> {
  const u = `${api}?action=query&format=json&redirects=1&prop=pageimages|pageprops&ppprop=disambiguation&piprop=thumbnail&pithumbsize=480&pilicense=any&titles=${encodeURIComponent(title)}`
  const data = await getJSON(u)
  const pages = data?.query?.pages
  if (!pages) return null
  for (const p of Object.values<any>(pages)) {
    if (p.missing !== undefined || p.pageprops?.disambiguation !== undefined) continue
    if (p.thumbnail?.source) return { url: p.thumbnail.source, title: p.title }
  }
  return null
}

async function mediawikiSearch(api: string, query: string, name: string): Promise<Hit> {
  const u = `${api}?action=query&format=json&generator=search&gsrlimit=4&gsrsearch=${encodeURIComponent(query)}&prop=pageimages|pageprops&ppprop=disambiguation&piprop=thumbnail&pithumbsize=480&pilicense=any`
  const data = await getJSON(u)
  const pages = data?.query?.pages
  if (!pages) return null
  const sorted = Object.values<any>(pages).sort((a, b) => a.index - b.index)
  const n = norm(name)
  for (const p of sorted) {
    if (p.pageprops?.disambiguation !== undefined || !p.thumbnail?.source) continue
    // Top hit is trusted; lower hits need to actually look like the thing we searched for.
    if (p.index === 1 || norm(p.title).includes(n) || n.includes(norm(p.title))) return { url: p.thumbnail.source, title: p.title }
  }
  return null
}


async function resolveWiki(j: Job): Promise<Hit> {
  if (j.explicit) {
    const hit = await mediawikiTitle(WIKI, j.explicit)
    if (hit) return hit
    // Season articles rarely carry an image; the franchise article has the crest.
    const season = j.explicit.match(/^\d{4}(?:–\d{2,4})? (.+?) season$/)
    if (season) {
      const team = await mediawikiTitle(WIKI, season[1])
      if (team) return team
    }
    return mediawikiSearch(WIKI, j.explicit, j.explicit)
  }
  const q = j.hint ? `${j.query} ${j.hint}` : j.query
  if (j.exactFirst) return (await mediawikiTitle(WIKI, j.query)) ?? (await mediawikiSearch(WIKI, q, j.query))
  return (await mediawikiSearch(WIKI, q, j.query)) ?? (await mediawikiTitle(WIKI, j.query))
}

const ARTIST_ALIAS: Record<string, string> = { Tupac: '2Pac' }

async function resolveSong(j: Job): Promise<Hit> {
  const first = (j.sub ?? '').split(/ ft\.| & |,/)[0].trim()
  const artist = ARTIST_ALIAS[first] ?? first
  const tryQ = async (q: string) => {
    const data = await getJSON(`https://api.deezer.com/search?limit=8&q=${encodeURIComponent(q)}`)
    const list: any[] = data?.data ?? []
    const want = norm(artist)
    const pick = list.find((t) => norm(t.artist?.name ?? '').includes(want) || want.includes(norm(t.artist?.name ?? ''))) ?? (artist ? null : list[0])
    if (pick?.album?.cover_big) return { url: pick.album.cover_big as string, title: `${pick.title} — ${pick.artist.name}` }
    return null
  }
  const hit = (await tryQ(`artist:"${artist}" track:"${j.name}"`)) ?? (await tryQ(`${j.name} ${artist}`))
  if (hit) return hit
  // iTunes allows ~20 calls a minute, so it's only the fallback.
  await sleep(3200)
  const it = await getJSON(`https://itunes.apple.com/search?entity=song&limit=5&term=${encodeURIComponent(`${j.name} ${artist}`)}`)
  const want = norm(artist)
  const t = (it?.results ?? []).find((r: any) => norm(r.artistName ?? '').includes(want) || want.includes(norm(r.artistName ?? '')))
  if (t?.artworkUrl100) return { url: String(t.artworkUrl100).replace('100x100bb', '600x600bb'), title: `itunes:${t.trackName} — ${t.artistName}` }
  return null
}

async function resolveArtist(j: Job): Promise<Hit> {
  const name = j.explicit ?? j.name
  const data = await getJSON(`https://api.deezer.com/search/artist?limit=5&q=${encodeURIComponent(name)}`)
  const list: any[] = data?.data ?? []
  const pick = list.find((a) => norm(a.name) === norm(j.name) || norm(a.name) === norm(name))
  if (pick?.picture_big && !String(pick.picture_big).includes('/artist//')) return { url: pick.picture_big, title: `deezer:${pick.name}` }
  return resolveWiki(j)
}

async function resolveFortnite(j: Job): Promise<Hit> {
  const name = j.explicit ?? j.name
  for (const extra of ['&type=outfit', '']) {
    const data = await getJSON(`https://fortnite-api.com/v2/cosmetics/br/search?name=${encodeURIComponent(name)}${extra}`)
    const img = data?.data?.images?.icon ?? data?.data?.images?.smallIcon
    if (img) return { url: img, title: data.data.name }
  }
  return null
}

async function resolveFandom(api: string, j: Job): Promise<Hit> {
  const name = j.explicit ?? j.name
  return (await mediawikiTitle(api, name)) ?? (await mediawikiSearch(api, name, name))
}

async function resolve(j: Job): Promise<Hit> {
  switch (j.src) {
    case 'wiki':
      return resolveWiki(j)
    case 'song':
      return resolveSong(j)
    case 'artist':
      return resolveArtist(j)
    case 'fortnite':
      return (await resolveFortnite(j)) ?? (await resolveFandom('https://fortnite.fandom.com/api.php', j))
    case 'fnwiki':
      return resolveFandom('https://fortnite.fandom.com/api.php', j)
    case 'mc':
      return resolveFandom('https://minecraft.wiki/api.php', j)
    case 'roblox':
      return (await resolveFandom('https://roblox.fandom.com/api.php', j)) ?? (await resolveWiki({ ...j, hint: 'Roblox' }))
    case 'poke':
      return { url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${j.sub}.png`, title: `#${j.sub}` }
    case 'flag':
      return { url: `https://flagcdn.com/w640/${j.sub}.png`, title: j.sub ?? '' }
  }
  return null
}

// Some articles have no PageImages thumbnail; fall back to a file on the page whose name matches the title.
const JUNK = /(icon|logo of wikipedia|commons-logo|wiki|symbol|edit-clear|question_book|ambox|flag_of|padlock|crystal|nuvola|disambig|portal|star|increase|decrease|steady|red_pog|location|map)/i
async function deepWiki(j: Job): Promise<Hit> {
  let title = j.explicit
  if (!title) {
    const q = j.hint ? `${j.query} ${j.hint}` : j.query
    const data = await getJSON(`${WIKI}?action=query&format=json&list=search&srlimit=1&srsearch=${encodeURIComponent(q)}`)
    title = data?.query?.search?.[0]?.title
  }
  if (!title) return null
  const data = await getJSON(`${WIKI}?action=query&format=json&redirects=1&prop=images&imlimit=60&titles=${encodeURIComponent(title)}`)
  const page: any = Object.values(data?.query?.pages ?? {})[0]
  const files: string[] = (page?.images ?? []).map((i: any) => i.title as string)
  const words = norm(page?.title ?? title)
    .split(' ')
    .filter((w) => w.length > 2 && !['the', 'and', 'series', 'season', 'film', 'show', 'american'].includes(w))
  const scored = files
    .filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f) && !JUNK.test(f))
    .map((f) => ({ f, score: words.filter((w) => norm(f).includes(w)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
  if (!scored.length) return null
  const info = await getJSON(`${WIKI}?action=query&format=json&prop=imageinfo&iiprop=url&iiurlwidth=480&titles=${encodeURIComponent(scored[0].f)}`)
  const ii: any = Object.values(info?.query?.pages ?? {})[0]
  const url = ii?.imageinfo?.[0]?.thumburl ?? ii?.imageinfo?.[0]?.url
  return url ? { url, title: `deep:${page.title} ${scored[0].f}` } : null
}

if (process.argv.includes('--deep')) {
  const list = [...jobs.values()].filter((j) => j.src === 'wiki' && images[j.key] === null)
  let found = 0
  for (const j of list) {
    const hit = await deepWiki(j)
    if (hit) {
      images[j.key] = hit.url
      audit[j.key] = hit.title
      found++
    }
  }
  save()
  console.log(`deep pass: ${found}/${list.length} found`)
  process.exit(0)
}

if (process.argv.includes('--exact-pass')) {
  const list = [...jobs.values()].filter((j) => j.src === 'wiki' && j.exactFirst && !j.explicit)
  console.log(`exact pass: ${list.length} checked, ${await exactBatch(list)} changed`)
  process.exit(0)
}

// Cheap first pass: exact titles in bulk. Whatever it can't find falls through to per-item search.
{
  const bulk = todo.filter((j) => j.src === 'wiki' && (j.explicit || j.exactFirst))
  await exactBatch(bulk)
  const before = todo.length
  for (let i = todo.length - 1; i >= 0; i--) if (todo[i].key in images && images[todo[i].key]) todo.splice(i, 1)
  console.log(`bulk exact resolved ${before - todo.length}, ${todo.length} left for search`)
}

let done = 0
let misses = 0
function save() {
  // Drop entries for items that no longer exist in the data.
  const sorted = Object.fromEntries(
    Object.entries(images)
      .filter(([k]) => jobs.has(k))
      .sort(([a], [b]) => a.localeCompare(b)),
  )
  writeFileSync(OUT, JSON.stringify(sorted, null, 0).replace(/","/g, '",\n"'))
  writeFileSync(AUDIT, JSON.stringify(audit, null, 1))
}

// Each host gets its own small worker pool so one slow API doesn't starve the others.
const hostOf = (j: Job) => (j.src === 'song' || j.src === 'artist' ? 'deezer' : j.src === 'wiki' ? 'wiki' : j.src)
const groups = new Map<string, Job[]>()
for (const j of todo) groups.set(hostOf(j), [...(groups.get(hostOf(j)) ?? []), j])
const limits: Record<string, number> = { wiki: 8, deezer: 4 }

await Promise.all(
  [...groups.entries()].map(async ([host, list]) => {
    const n = limits[host] ?? 4
    let i = 0
    await Promise.all(
      Array.from({ length: n }, async () => {
        while (i < list.length) {
          const j = list[i++]
          const hit = await resolve(j)
          images[j.key] = hit?.url ?? null
          audit[j.key] = hit?.title ?? 'MISS'
          if (!hit) misses++
          if (++done % 100 === 0) {
            console.log(`${done}/${todo.length} (${misses} misses)`)
            save()
          }
          if (host === 'deezer') await sleep(120)
        }
      }),
    )
  }),
)
save()
console.log(`done: ${done}, misses: ${misses}`)
