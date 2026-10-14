import { useMemo, useState } from 'react'
import { artistCatalogs, artistCategoryId, getCategory, tabOf, tabs } from '../data/index.ts'
import { parseItems, type CategoryDef, type Item } from '../data/types.ts'
import type { Settings } from '../game/engine.ts'
import type { Room } from '../net/useRoom.ts'
import { Thumb } from './LotCard.tsx'
import { imageUrl, useImagesReady } from './images.ts'

const itemCache = new Map<string, Item[]>()
function itemsOf(cat: CategoryDef) {
  let v = itemCache.get(cat.id)
  if (!v) {
    v = parseItems(cat)
    itemCache.set(cat.id, v)
  }
  return v
}

function stripItems(cat: CategoryDef): Item[] {
  const all = itemsOf(cat)
  // Distinct photos only — team seasons often share one logo.
  const seen = new Set<string>()
  const withImg = all.filter((i) => {
    const u = imageUrl(i.img)
    if (!u || seen.has(u)) return false
    seen.add(u)
    return true
  })
  return (withImg.length >= 3 ? withImg : all).slice(0, 3)
}

function CategoryTile({ cat, selected, disabled, onPick }: { cat: CategoryDef; selected: boolean; disabled: boolean; onPick: () => void }) {
  const items = stripItems(cat)
  const count = cat.id === artistCategoryId ? `${Object.keys(artistCatalogs).length} artists` : `${itemsOf(cat).length} lots`
  return (
    <button className="cat" aria-pressed={selected} disabled={disabled} onClick={onPick}>
      <div className="strip">
        {items.map((i) => (
          <Thumb key={i.key} item={i} />
        ))}
      </div>
      <div className="meta">
        <div className="title">{cat.name}</div>
        <div className="count">{count}</div>
      </div>
      {selected && <span className="check">✓</span>}
    </button>
  )
}

function ArtistPicker({ value, disabled, onPick }: { value: string | null; disabled: boolean; onPick: (a: string) => void }) {
  const cat = getCategory(artistCategoryId)!
  const artists = itemsOf(cat)
  return (
    <div>
      <p className="eyebrow" style={{ margin: '4px 0 12px' }}>
        Pick the artist whose catalog you’re drafting
      </p>
      <div className="artists">
        {artists.map((a) => {
          const url = imageUrl(a.img)
          return (
            <button key={a.key} className="artist" aria-pressed={value === a.name} disabled={disabled} onClick={() => onPick(a.name)}>
              {url ? <img src={url} alt="" loading="lazy" referrerPolicy="no-referrer" /> : <span className="ph" />}
              <div>{a.name}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Picker({ settings, readOnly, onChange }: { settings: Settings; readOnly: boolean; onChange: (s: Settings) => void }) {
  useImagesReady()
  const current = tabOf(settings.categoryId)?.id ?? tabs[0].id
  const [tab, setTab] = useState(current)
  const [q, setQ] = useState('')
  const isArtist = settings.categoryId.startsWith('artist:')
  const [showArtists, setShowArtists] = useState(isArtist)

  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return tabs.find((t) => t.id === tab)!.categories
    return tabs.flatMap((t) => t.categories).filter((c) => c.name.toLowerCase().includes(needle) || c.blurb.toLowerCase().includes(needle))
  }, [tab, q])

  const pick = (id: string) => {
    if (id === artistCategoryId) {
      setShowArtists(true)
      return
    }
    setShowArtists(false)
    onChange({ ...settings, categoryId: id })
  }

  return (
    <section>
      <div className="picker-head">
        <div>
          <div className="eyebrow">{readOnly ? 'The host is choosing' : 'Pick a category'}</div>
          <h2>What are we drafting?</h2>
        </div>
        <input className="input search" placeholder="Search categories" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {!q && (
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              className="tab"
              aria-selected={t.id === tab}
              onClick={() => {
                setTab(t.id)
                setShowArtists(false)
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
      {showArtists && tab === 'music' && !q ? (
        <>
          <button className="btn btn-ghost btn-sm" style={{ marginBottom: 12 }} onClick={() => setShowArtists(false)}>
            ← All music categories
          </button>
          <ArtistPicker
            value={isArtist ? settings.categoryId.slice(7) : null}
            disabled={readOnly}
            onPick={(a) => onChange({ ...settings, categoryId: `artist:${a}` })}
          />
        </>
      ) : (
        <div className="cats">
          {visible.map((c) => (
            <CategoryTile
              key={c.id}
              cat={c}
              selected={c.id === settings.categoryId || (c.id === artistCategoryId && isArtist)}
              disabled={readOnly && c.id !== artistCategoryId}
              onPick={() => {
                if (c.id === artistCategoryId) setTab('music')
                pick(c.id)
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function Seg<T extends number>({
  value,
  options,
  disabled,
  onChange,
  fmt,
  allowed = () => true,
}: {
  value: T
  options: T[]
  disabled: boolean
  onChange: (v: T) => void
  fmt: (v: T) => string
  allowed?: (v: T) => boolean
}) {
  return (
    <div className="seg">
      {options.map((o) => (
        <button key={o} aria-pressed={o === value} disabled={disabled || !allowed(o)} onClick={() => onChange(o)}>
          {fmt(o)}
        </button>
      ))}
    </div>
  )
}

export function Lobby({ room }: { room: Room }) {
  const g = room.state!
  const isHost = room.role === 'host'
  const s = g.settings
  const cat = getCategory(s.categoryId)
  const preview = cat ? stripItems(cat) : []
  const ready = g.players.length === 2
  const [copied, setCopied] = useState<string | null>(null)
  const set = (patch: Partial<Settings>) => room.setSettings({ ...s, ...patch })
  // Small decks (Nolan has 13 films) can't fill two big rosters.
  const deckSize = (id: string) => {
    const c = getCategory(id)
    return c ? itemsOf(c).length : 0
  }
  const fits = (slots: number, id = s.categoryId) => deckSize(id) >= slots * 2
  const pickSettings = (next: Settings) => {
    let slots = next.slots
    while (slots > 3 && !fits(slots, next.categoryId)) slots = (slots - 2) as Settings['slots']
    room.setSettings({ ...next, slots })
  }

  const link = `${location.origin}/?join=${g.code}`
  const copy = async (what: 'code' | 'link') => {
    try {
      await navigator.clipboard.writeText(what === 'code' ? g.code : link)
      setCopied(what)
      setTimeout(() => setCopied(null), 1400)
    } catch {
      /* clipboard blocked */
    }
  }
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Blind Bid', text: `Join my Blind Bid draft — code ${g.code}`, url: link })
      } catch {
        /* dismissed */
      }
    } else copy('link')
  }

  return (
    <main className="wrap lobby">
      <aside className="panel lobby-panel">
        <div className="codebox">
          <div className="eyebrow">Room code</div>
          <div className="code">{g.code}</div>
          <div className="copy">
            <button className="btn btn-sm btn-paper" style={{ ['--bg' as string]: '#e4ddd0' }} onClick={() => copy('code')}>
              {copied === 'code' ? 'Copied' : 'Copy code'}
            </button>
            <button className="btn btn-sm btn-paper" style={{ ['--bg' as string]: '#e4ddd0' }} onClick={share}>
              {copied === 'link' ? 'Link copied' : 'Share link'}
            </button>
          </div>
        </div>

        <div className="seats">
          {[0, 1].map((i) => {
            const p = g.players[i]
            if (!p)
              return (
                <div className="seat empty" key={i}>
                  <span className="avatar" style={{ border: '1.5px dashed var(--line-2)' }} />
                  <span className="waiting-dots">Waiting for opponent</span>
                </div>
              )
            const mine = i === room.seat
            return (
              <div className="seat" key={i}>
                <span className={`avatar ${mine ? 'you' : 'them'}`}>{p.name.slice(0, 1).toUpperCase()}</span>
                <span style={{ flex: 1, fontWeight: 700 }}>
                  {p.name} {mine && <span style={{ color: 'var(--muted)', fontWeight: 500 }}>(you)</span>}
                </span>
                <span className="eyebrow">{i === 0 ? 'Host' : 'Guest'}</span>
                <span className={`dot ${p.online ? '' : 'off'}`} title={p.online ? 'Connected' : 'Offline'} />
              </div>
            )
          })}
        </div>

        <div className="setting-group">
          <div className="eyebrow">Budget each</div>
          <Seg value={s.budget} options={[15, 20, 30]} disabled={!isHost} onChange={(budget) => set({ budget })} fmt={(v) => `$${v}`} />
        </div>
        <div className="setting-group">
          <div className="eyebrow">Items to draft</div>
          <Seg value={s.slots} options={[3, 5, 7]} disabled={!isHost} allowed={(v) => fits(v)} onChange={(slots) => set({ slots })} fmt={(v) => `${v}`} />
        </div>
        <div className="setting-group">
          <div className="eyebrow">Category</div>
          <div className="chosen">
            <div className="thumbs">
              {preview.map((i) => (
                <Thumb key={i.key} item={i} />
              ))}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 750, lineHeight: 1.2 }}>{cat?.name ?? '—'}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{cat?.blurb}</div>
            </div>
          </div>
        </div>

        <div className="lobby-cta">
          {isHost ? (
            <button className="btn btn-primary btn-lg" disabled={!ready} onClick={room.start}>
              {ready ? 'Start the draft' : 'Need exactly 2 players'}
            </button>
          ) : (
            <div className="eyebrow" style={{ textAlign: 'center', padding: '12px 0' }}>
              <span className="waiting-dots">Waiting for {g.players[0]?.name ?? 'host'} to start</span>
            </div>
          )}
          <button className="btn btn-ghost btn-sm" onClick={room.leave}>
            Leave room
          </button>
        </div>
      </aside>

      <Picker settings={s} readOnly={!isHost} onChange={pickSettings} />

      <div className="mobile-cta">
        {isHost ? (
          <button className={`btn btn-lg ${ready ? 'btn-primary' : 'btn-paper'}`} disabled={!ready} onClick={room.start}>
            {ready ? `Start · ${cat?.name ?? ''}` : `Share code ${g.code} to start`}
          </button>
        ) : (
          <div className="eyebrow" style={{ textAlign: 'center', padding: '14px 0' }}>
            <span className="waiting-dots">Waiting for {g.players[0]?.name ?? 'host'} to start</span>
          </div>
        )}
      </div>
    </main>
  )
}
