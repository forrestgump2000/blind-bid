// Image sources the resolver script knows how to look up.
//  wiki     – Wikipedia search (name + hint)
//  song     – Deezer track artwork (name + sub)
//  artist   – Deezer artist photo, falling back to Wikipedia
//  fortnite – fortnite-api.com cosmetics
//  fnwiki   – Fortnite fandom wiki
//  mc       – minecraft.wiki
//  poke     – PokeAPI official artwork (sub = dex number)
//  roblox   – Roblox fandom wiki
//  flag     – flagcdn (sub = ISO country code)
//  none     – no photo, the card is typographic
export type ImageSource = 'wiki' | 'song' | 'artist' | 'fortnite' | 'fnwiki' | 'mc' | 'poke' | 'roblox' | 'flag' | 'none'

export interface CategoryDef {
  id: string
  name: string
  blurb: string
  src?: ImageSource
  // Appended to wiki searches so "Heat" finds the film, not the weather.
  hint?: string
  // Which text drives the image lookup: the item name (default), its subtitle, or both.
  q?: 'name' | 'sub' | 'both'
  // One item per line: "Name" or "Name | subtitle" or "Name | subtitle | explicit query"
  items: string
}

export interface TabDef {
  id: string
  name: string
  categories: CategoryDef[]
}

export interface Item {
  key: string
  name: string
  sub?: string
  // Lookup key into images.json
  img: string
}

export function parseItems(cat: CategoryDef): Item[] {
  const seen = new Set<string>()
  const out: Item[] = []
  for (const raw of cat.items.split('\n')) {
    const line = raw.trim()
    if (!line) continue
    const [name, sub] = line.split('|').map((s) => s.trim())
    const key = `${cat.id}:${name}`
    if (seen.has(key)) continue
    seen.add(key)
    let shown: string | undefined = sub || undefined
    if (cat.src === 'poke') shown = `No. ${sub.padStart(3, '0')}`
    if (cat.src === 'flag') shown = undefined
    out.push({ key, name, sub: shown, img: imageKey(cat, line) })
  }
  return out
}

export function imageQuery(cat: CategoryDef, line: string): string {
  const [name, sub, explicit] = line.split('|').map((s) => s.trim())
  if (explicit) return explicit
  const mode = cat.q ?? 'name'
  if (mode === 'sub' && sub) return sub
  if (mode === 'both' && sub) return `${name} ${sub}`
  return name
}

export function imageKey(cat: CategoryDef, line: string): string {
  const src = cat.src ?? 'wiki'
  const [, , explicit] = line.split('|').map((s) => s.trim())
  const q = imageQuery(cat, line)
  // Explicit titles are exact lookups; everything else is a search that benefits from the hint.
  if (src === 'wiki' || src === 'artist') return `${src}|${explicit ? '=' + q : q + (cat.hint ? ' ' + cat.hint : '')}`
  return `${src}|${q}`
}
