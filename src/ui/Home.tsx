import { useEffect, useMemo, useState } from 'react'
import { getCategory } from '../data/index.ts'
import { parseItems, type Item } from '../data/types.ts'
import { LotCard } from './LotCard.tsx'
import { imageUrl, useImagesReady } from './images.ts'

const SHOWCASE = ['alltime-nba', 'movies', 'pokemon', 'fast-food', 'alltime-footballers', 'video-games', 'superheroes', 'cars', 'rappers', 'fortnite-skins']

function showcaseItems(): Item[] {
  const out: Item[] = []
  for (const id of SHOWCASE) {
    const items = parseItems(getCategory(id)!).filter((i) => imageUrl(i.img)).slice(0, 14)
    for (let k = 0; k < 2 && items.length; k++) out.push(items.splice(Math.floor(Math.random() * items.length), 1)[0])
  }
  return out.sort(() => Math.random() - 0.5)
}

const POSES = [
  'translate(-50%, -50%) translate(-118px, 34px) rotate(-14deg)',
  'translate(-50%, -50%) translate(-58px, 6px) rotate(-6deg)',
  'translate(-50%, -50%) translate(4px, -6px) rotate(2deg)',
  'translate(-50%, -50%) translate(66px, 10px) rotate(9deg)',
  'translate(-50%, -50%) translate(120px, 40px) rotate(16deg)',
]

function Fan() {
  const ready = useImagesReady()
  const items = useMemo(() => (ready ? showcaseItems() : []), [ready])
  const [t, setT] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 2600)
    return () => clearInterval(id)
  }, [])
  if (!items.length) return <div className="fan" aria-hidden />
  return (
    <div className="fan" aria-hidden>
      {POSES.map((pose, i) => {
        const item = items[(t + i) % items.length]
        return (
          <LotCard
            key={i + ':' + item.key}
            item={item}
            className={i === 2 ? 'front' : 'back'}
            lot={`Lot ${String(((t + i) % 40) + 1).padStart(2, '0')}`}
            style={{ transform: pose, zIndex: 5 - Math.abs(2 - i) }}
          />
        )
      })}
    </div>
  )
}

interface Props {
  name: string
  setName: (n: string) => void
  onHost: () => void
  onJoin: (code: string) => void
  error: string | null
  busy: boolean
  initialCode: string | null
}

export function Home({ name, setName, onHost, onJoin, error, busy, initialCode }: Props) {
  const [mode, setMode] = useState<'pick' | 'join'>(initialCode ? 'join' : 'pick')
  const [code, setCode] = useState(initialCode ?? '')
  const nameOk = name.trim().length > 0

  return (
    <main className="wrap home">
      <section>
        <h1 className="wordmark">
          <span className="blind">Blind</span>
          <span className="bid">Bid</span>
        </h1>
        <p className="lede">
          A head-to-head draft auction. <b>Same budget, random lots, one shot each.</b> Outbid your friend, let them overpay, or pay them to take the junk.
        </p>

        <div className="home-actions">
          <div className="field">
            <label className="eyebrow" htmlFor="name">
              Your name
            </label>
            <input id="name" className="input" placeholder="What should they call you?" maxLength={16} value={name} onChange={(e) => setName(e.target.value)} autoComplete="nickname" />
          </div>

          {mode === 'pick' ? (
            <div className="row">
              <button className="btn btn-primary btn-lg" disabled={!nameOk || busy} onClick={onHost}>
                Create game
              </button>
              <button className="btn btn-ghost btn-lg" disabled={!nameOk || busy} onClick={() => setMode('join')}>
                Join game
              </button>
            </div>
          ) : (
            <form
              className="field"
              onSubmit={(e) => {
                e.preventDefault()
                if (code.length === 4 && nameOk) onJoin(code)
              }}
            >
              <label className="eyebrow" htmlFor="code">
                Room code
              </label>
              <input
                id="code"
                className="input input-code"
                placeholder="····"
                maxLength={4}
                value={code}
                autoFocus
                autoCapitalize="characters"
                autoComplete="off"
                spellCheck={false}
                onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))}
              />
              <div className="row">
                <button type="button" className="btn btn-ghost" onClick={() => setMode('pick')}>
                  Back
                </button>
                <button className="btn btn-teal" disabled={code.length !== 4 || !nameOk || busy}>
                  {busy ? 'Joining…' : 'Join'}
                </button>
              </div>
            </form>
          )}
          {error && <div className="err">{error}</div>}
        </div>

        <div className="rules">
          <div className="rule">
            <span className="n">01</span>
            <span>
              <strong>Two players, one code</strong>
              The host picks a category, budget and draft size. Share the code.
            </span>
          </div>
          <div className="rule">
            <span className="n">02</span>
            <span>
              <strong>Lots flip at random</strong>
              Nobody knows what’s next. Take turns raising, or let it go.
            </span>
          </div>
          <div className="rule">
            <span className="n">03</span>
            <span>
              <strong>Hate it? Pay them</strong>
              Hand your opponent cash to take a lot off the table. Or both agree to pass (3 per game).
            </span>
          </div>
          <div className="rule">
            <span className="n">04</span>
            <span>
              <strong>Go broke, get randoms</strong>
              Bid what they can’t match and it’s yours. Run dry and leftovers fill your roster.
            </span>
          </div>
        </div>
      </section>
      <Fan />
    </main>
  )
}
