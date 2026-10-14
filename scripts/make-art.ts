// Generates the app icon set, favicon, social thumbnail and web manifest into public/.
// Run with: node scripts/make-art.ts
import { readFileSync, writeFileSync } from 'node:fs'
import * as fontkit from 'fontkit'
import sharp from 'sharp'
import { getCategory } from '../src/data/index.ts'
import { parseItems } from '../src/data/types.ts'

const pub = (f: string) => new URL(`../public/${f}`, import.meta.url)
const images: Record<string, string | null> = JSON.parse(readFileSync(new URL('../src/data/images.json', import.meta.url), 'utf8'))

const INK = '#0f0e0c'
const PAPER = '#f3eee4'
const ORANGE = '#ff5b1f'
const TEAL = '#3fc1b0'
const BRASS = '#f0c04a'

const base = fontkit.openSync(new URL('./fonts/Bricolage.ttf', import.meta.url).pathname) as any
const display = base.getVariation({ wght: 800, wdth: 75, opsz: 96 })
const body = base.getVariation({ wght: 520, wdth: 100, opsz: 24 })
const mono = (fontkit.openSync(new URL('./fonts/JetBrainsMono.ttf', import.meta.url).pathname) as any).getVariation({ wght: 700 })

// Lays out text as outlined SVG paths so the rasterizer doesn't need the font installed.
function text(font: any, str: string, x: number, y: number, size: number, opts: { tracking?: number; anchor?: 'start' | 'middle' } = {}) {
  const run = font.layout(str)
  const s = size / font.unitsPerEm
  const tracking = (opts.tracking ?? 0) * size
  let width = 0
  for (const p of run.positions) width += p.xAdvance * s + tracking
  width -= tracking
  let cx = opts.anchor === 'middle' ? x - width / 2 : x
  const parts: string[] = []
  run.glyphs.forEach((g: any, i: number) => {
    const d = g.path.toSVG()
    if (d) parts.push(`<path transform="translate(${cx.toFixed(2)} ${y}) scale(${s} ${-s})" d="${d}"/>`)
    cx += run.positions[i].xAdvance * s + tracking
  })
  return { svg: parts.join(''), width }
}

// ---------- icon ----------
function iconSvg(size: number, { rounded = true, pad = 0 } = {}) {
  const q = text(display, '?', 0, 0, 230, { anchor: 'middle' })
  const inner = `
    <g transform="translate(${pad} ${pad}) scale(${(512 - pad * 2) / 512})">
      <g transform="rotate(-10 256 280)">
        <rect x="222" y="318" width="68" height="160" rx="18" fill="#6b4a2b"/>
        <rect x="222" y="318" width="68" height="34" fill="#000" opacity=".25"/>
        <circle cx="256" cy="212" r="150" fill="${INK}"/>
        <g fill="${PAPER}" transform="translate(256 290)">${q.svg}</g>
      </g>
    </g>`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
    <defs>
      <radialGradient id="g" cx="30%" cy="20%" r="90%">
        <stop offset="0" stop-color="#ff7a45"/>
        <stop offset="1" stop-color="#e94a10"/>
      </radialGradient>
    </defs>
    <rect width="512" height="512" rx="${rounded ? 112 : 0}" fill="url(#g)"/>
    ${inner}
  </svg>`
}

writeFileSync(pub('favicon.svg'), iconSvg(64))
const icons: [string, number, object?][] = [
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['apple-touch-icon.png', 180, { rounded: false }],
  ['icon-maskable-512.png', 512, { rounded: false, pad: 70 }],
]
for (const [file, size, opts] of icons) {
  await sharp(Buffer.from(iconSvg(size, opts as any)), { density: 300 }).resize(size, size).png().toFile(pub(file).pathname)
}

// ---------- social thumbnail ----------
async function dataUri(url: string) {
  const res = await fetch(url, { headers: { 'User-Agent': 'BlindBidGame/1.0' } })
  const buf = Buffer.from(await res.arrayBuffer())
  const jpg = await sharp(buf).resize(520, 692, { fit: 'cover', position: 'attention' }).jpeg({ quality: 86 }).toBuffer()
  return `data:image/jpeg;base64,${jpg.toString('base64')}`
}

async function containUri(url: string) {
  const res = await fetch(url, { headers: { 'User-Agent': 'BlindBidGame/1.0' } })
  const buf = Buffer.from(await res.arrayBuffer())
  const png = await sharp(buf).resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
  return `data:image/png;base64,${png.toString('base64')}`
}

function find(cat: string, name: string) {
  const item = parseItems(getCategory(cat)!).find((i) => i.name === name)!
  return { item, url: images[item.img]! }
}

const W = 260
const H = 346
async function card(cat: string, name: string, sub: string, lot: string, contain = false) {
  const { url } = find(cat, name)
  const img = contain ? await containUri(url) : await dataUri(url)
  const id = name.replace(/\W/g, '')
  const title = text(display, name.toUpperCase(), 18, H - 46, 38, { tracking: -0.01 })
  const subT = text(body, sub, 18, H - 20, 17)
  const lotT = text(mono, lot, W - 16, 26, 12, { tracking: 0.12 })
  const lotW = lotT.width
  const lotPlaced = text(mono, lot, W - 16 - lotW, 26, 12, { tracking: 0.12 })
  const label = text(mono, 'BLIND BID', 16, 26, 12, { tracking: 0.12 })
  return `
    <defs>
      <clipPath id="c${id}"><rect width="${W}" height="${H}" rx="20"/></clipPath>
      <linearGradient id="f${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0908" stop-opacity=".55"/>
        <stop offset=".22" stop-color="#0a0908" stop-opacity="0"/>
        <stop offset=".5" stop-color="#0a0908" stop-opacity="0"/>
        <stop offset=".86" stop-color="#0a0908" stop-opacity=".94"/>
      </linearGradient>
      <radialGradient id="r${id}" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="#3a342c"/><stop offset="1" stop-color="#201d19"/></radialGradient>
    </defs>
    <rect x="-2" y="10" width="${W + 4}" height="${H}" rx="22" fill="#000" opacity=".45"/>
    <g clip-path="url(#c${id})">
      ${contain ? `<rect width="${W}" height="${H}" fill="url(#r${id})"/><image href="${img}" x="${(W - 200) / 2}" y="44" width="200" height="200"/>` : `<image href="${img}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice"/>`}
      <rect width="${W}" height="${H}" fill="url(#f${id})"/>
      <g fill="${PAPER}" opacity=".85">${label.svg}${lotPlaced.svg}</g>
      <g fill="${PAPER}">${title.svg}</g>
      <g fill="#c9c2b5">${subT.svg}</g>
    </g>
    <rect width="${W}" height="${H}" rx="20" fill="none" stroke="#fff" stroke-opacity=".1"/>`
}

const c1 = await card('alltime-nba', 'Michael Jordan', 'All-Time NBA', 'LOT 07')
const c2 = await card('pokemon', 'Pikachu', 'Pokémon · No. 025', 'LOT 12', true)
const c3 = await card('movies', 'The Dark Knight', 'All Movies', 'LOT 03')

const eyebrow = text(mono, 'A TWO-PLAYER DRAFT AUCTION', 72, 132, 18, { tracking: 0.16 })
const blind = text(display, 'BLIND', 64, 330, 236, { tracking: -0.02 })
const bid = text(display, 'BID', 64, 520, 236, { tracking: -0.02 })
const tag1 = text(body, 'Same budget. Random lots.', 74, 582, 30)
const paddleQ = text(display, '$20', 0, 0, 30, { anchor: 'middle' })

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="78%" cy="50%" r="55%"><stop offset="0" stop-color="${ORANGE}" stop-opacity=".22"/><stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g fill="${ORANGE}">${eyebrow.svg}</g>
  <g fill="${PAPER}">${blind.svg}</g>
  <g fill="${ORANGE}">${bid.svg}</g>
  <g fill="#c9c2b5">${tag1.svg}</g>
  <g transform="translate(815 300) rotate(-12) translate(${-W / 2} ${-H / 2})">${c1}</g>
  <g transform="translate(1075 305) rotate(10) translate(${-W / 2} ${-H / 2})">${c3}</g>
  <g transform="translate(945 340) rotate(-2) translate(${-W / 2} ${-H / 2})">${c2}</g>
  <g transform="translate(1110 520) rotate(-10)">
    <rect x="-9" y="20" width="18" height="70" rx="6" fill="#6b5236"/>
    <circle r="50" fill="${TEAL}"/>
    <g fill="#03201c" transform="translate(0 11)">${paddleQ.svg}</g>
  </g>
  <g transform="translate(630 560) rotate(8)">
    <rect x="-8" y="18" width="16" height="62" rx="6" fill="#6b5236"/>
    <circle r="44" fill="${BRASS}"/>
    <g fill="${INK}" transform="translate(0 10)">${text(display, '$15', 0, 0, 27, { anchor: 'middle' }).svg}</g>
  </g>
</svg>`

await sharp(Buffer.from(og), { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile(pub('og.png').pathname)

writeFileSync(
  pub('manifest.webmanifest'),
  JSON.stringify(
    {
      name: 'Blind Bid',
      short_name: 'Blind Bid',
      description: 'A two-player draft auction. Same budget, random lots.',
      start_url: '/',
      display: 'standalone',
      background_color: INK,
      theme_color: INK,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    null,
    2,
  ),
)
console.log('art done')
