import { useState, type CSSProperties, type ReactNode } from 'react'
import type { Item } from '../data/types.ts'
import { imageUrl, useImagesReady } from './images.ts'

const TONES = ['#ff5b1f', '#3fc1b0', '#f0c04a', '#9b7bff', '#ff4f8b', '#4f9dff', '#7ed957']

function tone(s: string, offset = 0) {
  let h = 0
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return TONES[(h + offset) % TONES.length]
}

// Image hosts sometimes throttle bursts, so give each photo a couple of second chances.
function useImg(url: string | null) {
  const [tries, setTries] = useState({ url, n: 0 })
  const attempt = tries.url === url ? tries.n : 0
  const broken = !url || attempt > 2
  const src = url && attempt > 0 ? `${url}${url.includes('?') ? '&' : '?'}r=${attempt}` : url
  const onError = () => {
    setTimeout(() => setTries({ url, n: attempt + 1 }), attempt >= 2 ? 0 : 900 * (attempt + 1))
  }
  return { src, broken, onError }
}

// Transparent PNGs (Pokémon, Fortnite, Minecraft) look better floating than cropped,
// and logos (mostly SVG crests) need a light backdrop to be readable.
const CONTAIN = /(pokeapi|fortnite-api|minecraft\.wiki|flagcdn)/
const LOGO = /(\.svg|logo|crest|emblem)/i
const fit = (url: string) => (CONTAIN.test(url) ? 'contain' : LOGO.test(url) ? 'contain logo' : '')

interface Props {
  item: Item
  lot?: string
  label?: string
  size?: 'lg' | 'sm'
  children?: ReactNode
  style?: CSSProperties
  className?: string
}

export function LotCard({ item, lot, label, size = 'lg', children, style, className = '' }: Props) {
  useImagesReady()
  const url = imageUrl(item.img)
  const { src, broken, onError } = useImg(url)
  const show = url && !broken
  const glyph = item.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)
  return (
    <div
      className={`lotcard ${size === 'sm' ? 'sm' : ''} ${show ? '' : 'noimg'} ${className}`}
      style={{ ...style, ['--tone' as string]: tone(item.name), ['--tone2' as string]: tone(item.name, 3) }}
    >
      {show ? (
        <img
          className={`photo ${fit(url)}`}
          src={src!}
          alt=""
          referrerPolicy="no-referrer"
          loading={size === 'sm' ? 'lazy' : 'eager'}
          draggable={false}
          onError={onError}
        />
      ) : (
        <div className="glyph" aria-hidden>
          {glyph}
        </div>
      )}
      {(lot || label) && (
        <div className="top">
          <span>{label}</span>
          <span>{lot}</span>
        </div>
      )}
      <div className="bottom">
        <p className="name">{item.name}</p>
        {item.sub && <div className="sub">{item.sub}</div>}
      </div>
      {children}
    </div>
  )
}

export function Thumb({ item, className }: { item: Item; className?: string }) {
  useImagesReady()
  const { src, broken, onError } = useImg(imageUrl(item.img))
  if (broken) return <span className={className} style={{ background: `linear-gradient(135deg, ${tone(item.name)}55, #201d19)` }} />
  const f = fit(src!)
  return <img className={`${className ?? ''} ${f ? 'thumb-' + f.split(' ').pop() : ''}`} src={src!} alt="" loading="lazy" referrerPolicy="no-referrer" onError={onError} />
}
