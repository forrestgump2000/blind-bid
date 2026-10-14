import { useEffect, useMemo, useRef, useState } from 'react'
import { getCategory } from '../data/index.ts'
import { options, other, PASS_LIMIT, tossesLeft, type GameState, type Outcome, type Player, type Seat } from '../game/engine.ts'
import type { Room } from '../net/useRoom.ts'
import { LotCard, Thumb } from './LotCard.tsx'
import { preload } from './images.ts'

function PlayerPanel({ p, mine, active, slots }: { p: Player; mine: boolean; active: boolean; slots: number }) {
  const prev = useRef(p.money)
  const [bump, setBump] = useState(0)
  useEffect(() => {
    if (prev.current !== p.money) setBump((b) => b + 1)
    prev.current = p.money
  }, [p.money])
  return (
    <div className={`player ${mine ? 'you' : 'them'} ${active ? 'active' : ''}`}>
      <div className="player-head">
        <span className={`avatar ${mine ? 'you' : 'them'}`}>{p.name.slice(0, 1).toUpperCase()}</span>
        <div className="who">
          <div className="nm">{p.name}</div>
          <div className="tag">
            {mine ? 'You' : 'Opponent'} · {p.roster.length}/{slots}
            {!p.online && ' · offline'}
          </div>
        </div>
        <div key={bump} className={`wallet ${bump ? 'bump' : ''}`}>
          ${p.money}
        </div>
      </div>
      <div className="slots" style={{ ['--n' as string]: slots }}>
        {Array.from({ length: slots }, (_, i) => {
          const o = p.roster[i]
          if (!o) return <div className="slot" key={i} />
          return (
            <div className="slot filled" key={o.item.key} title={o.item.name}>
              <Thumb item={o.item} className={'nophoto'} />
              <span className="price">{o.how === 'dumped' ? `+$${-o.price}` : `$${o.price}`}</span>
              <span className="lbl">{o.item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Stamp({ outcome, seat, g }: { outcome: Outcome; seat: Seat; g: GameState }) {
  if (outcome.kind === 'passed')
    return (
      <div className="stamp" style={{ color: 'var(--paper-dim)' }}>
        Passed
        <small>Nobody wanted it</small>
      </div>
    )
  if (outcome.kind === 'dumped') {
    const toMe = outcome.to === seat
    return (
      <div className="stamp" style={{ color: toMe ? 'var(--you)' : 'var(--them)' }}>
        {toMe ? 'Stuck with it' : 'Dumped'}
        <small>
          {toMe ? 'You' : g.players[outcome.to].name} got paid ${outcome.amount}
        </small>
      </div>
    )
  }
  const mine = outcome.seat === seat
  return (
    <div className="stamp" style={{ color: mine ? 'var(--you)' : 'var(--them)' }}>
      {mine ? 'Yours' : 'Sold'}
      <small>
        {mine ? 'You' : g.players[outcome.seat].name} · ${outcome.amount}
        {outcome.reason === 'all-in' ? ' · unmatchable' : ''}
      </small>
    </div>
  )
}

function DumpSheet({ max, them, onClose, onDump }: { max: number; them: string; onClose: () => void; onDump: (n: number) => void }) {
  const [n, setN] = useState(Math.min(1, max))
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <h3>Pay {them} to take it</h3>
        <p>
          The lot goes straight onto {them}’s roster and the cash comes out of your wallet into theirs. No bidding, no take-backs.
        </p>
        <div className="stepper">
          <button onClick={() => setN((v) => Math.max(1, v - 1))} disabled={n <= 1} aria-label="Less">
            −
          </button>
          <div className="val">${n}</div>
          <button onClick={() => setN((v) => Math.min(max, v + 1))} disabled={n >= max} aria-label="More">
            +
          </button>
        </div>
        <div className="two">
          <button className="btn btn-ghost" onClick={onClose}>
            Never mind
          </button>
          <button className="btn btn-teal" onClick={() => onDump(n)}>
            Pay ${n}
          </button>
        </div>
      </div>
    </div>
  )
}

function headline(g: GameState, seat: Seat): string {
  const r = g.round!
  const nm = (s: Seat) => (s === seat ? 'You' : g.players[s].name)
  const o = g.last
  if (r.resolved && o) {
    if (o.kind === 'passed') return 'Both passed — tossed'
    if (o.kind === 'dumped') return `${nm(o.from)} paid ${nm(o.to) === 'You' ? 'you' : nm(o.to)} $${o.amount} to take it`
    return `${nm(o.seat)} ${o.seat === seat ? 'got' : 'gets'} it for $${o.amount}`
  }
  if (r.high) return r.high.by === seat ? 'You’re winning' : `${g.players[r.high.by].name} is winning`
  if (r.passes) return `${nm(other(r.turn))} ${other(r.turn) === seat ? 'want' : 'wants'} to pass`
  return 'Opening bid is $1'
}

export function Game({ room }: { room: Room }) {
  const g = room.state!
  const seat = room.seat ?? 0
  const them = other(seat)
  const me = g.players[seat]
  const opp = g.players[them]
  const r = g.round!
  const cat = getCategory(g.settings.categoryId)
  const opt = options(g, seat)
  const myTurn = !r.resolved && r.turn === seat
  const [dumping, setDumping] = useState(false)
  // The stepper snaps back to the minimum whenever the floor moves.
  const floorKey = `${r.lot}:${opt.minBid}`
  const [pick, setPick] = useState({ key: floorKey, amount: opt.minBid })
  const amount = pick.key === floorKey ? pick.amount : opt.minBid
  const setAmount = (v: number | ((a: number) => number)) => setPick({ key: floorKey, amount: typeof v === 'function' ? v(amount) : v })

  useEffect(() => {
    const nav = navigator as Navigator & { userActivation?: { hasBeenActive: boolean } }
    if (myTurn && nav.userActivation?.hasBeenActive) nav.vibrate?.(30)
  }, [myTurn, r.log.length])

  // Warm the next few photos so the flip never shows a blank card.
  useEffect(() => {
    preload(g.deck.slice(0, 3).map((i) => i.img))
  }, [g.deck])

  const allIn = !opt.solo && amount >= opp.money
  const clamp = (n: number) => Math.max(opt.minBid, Math.min(opt.maxBid, n))

  const turnText = useMemo(() => {
    if (r.resolved) return 'Next lot coming up'
    if (myTurn) {
      if (opt.solo) return `${opp.name} is full — it’s just you now`
      if (r.high && r.high.by === them) return `${opp.name} bid $${r.high.amount}. Your call.`
      if (r.passes === 1) return opt.canPass ? `${opp.name} wants to pass. Agree?` : `${opp.name} passed. Someone has to take it.`
      return 'Your move'
    }
    return `Waiting on ${opp.name}`
  }, [r, myTurn, opt.solo, opt.canPass, opp.name, them])

  const passesLeft = tossesLeft(g)
  const highBy = r.high ? (r.high.by === seat ? 'you' : 'them') : 'none'
  const lotLabel = `Lot ${String(r.lot).padStart(2, '0')}`

  return (
    <main className="wrap game">
      <div className="side them-side">
        <PlayerPanel p={opp} mine={false} active={!r.resolved && r.turn === them} slots={g.settings.slots} />
      </div>

      <div className="center">
        <div>
          <div className="lotline">
            <span className="eyebrow">{cat?.name}</span>
            <span className="eyebrow mono">
              {lotLabel} · {g.deck.length} left · {passesLeft}/{PASS_LIMIT} passes
            </span>
          </div>
          <div className="progress" style={{ marginTop: 8 }}>
            <i style={{ width: `${((g.deckSize - g.deck.length) / Math.max(1, g.deckSize)) * 100}%` }} />
          </div>
        </div>

        <div className="stage">
          <div className="flip" key={r.lot}>
            <div className="flip-inner">
              <LotCard item={r.item} lot={lotLabel} label={cat?.name}>
                {g.last && <Stamp outcome={g.last} seat={seat} g={g} />}
              </LotCard>
              <div className="flip-back">
                <div className="cardback">
                  <span>Blind Bid</span>
                </div>
              </div>
            </div>
          </div>
          <div className="stage-info">
            <div className="highbid">
              <span key={`${r.lot}-${r.high?.amount ?? 0}`} className={`paddle ${highBy} ${r.high ? 'raise' : ''}`}>
                {r.high ? `$${r.high.amount}` : '—'}
              </span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="what">{r.resolved ? 'Final' : r.high ? 'High bid' : 'No bids yet'}</div>
                <div className="amt">{headline(g, seat)}</div>
              </div>
            </div>
            <div className="log" aria-live="polite">
              {r.log.slice(-4).map((l, i) => (
                <div key={i} className={l.seat === seat ? 'y' : l.seat === them ? 't' : ''}>
                  {l.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`actions ${myTurn ? 'mine' : ''}`}>
          <div className="turnline">
            <span>{turnText}</span>
            {!myTurn && !r.resolved && <span className="waiting-dots eyebrow" />}
          </div>

          {myTurn && (
            <>
              {opt.canBid && (
                <>
                  <div className="stepper">
                    <button onClick={() => setAmount((a) => clamp(a - 1))} disabled={amount <= opt.minBid} aria-label="Lower bid">
                      −
                    </button>
                    <div className="val">${amount}</div>
                    <button onClick={() => setAmount((a) => clamp(a + 1))} disabled={amount >= opt.maxBid} aria-label="Raise bid">
                      +
                    </button>
                  </div>
                  <div className="quick">
                    {[1, 2, 5].map((d) => (
                      <button key={d} disabled={amount + d > opt.maxBid} onClick={() => setAmount((a) => clamp(a + d))}>
                        +{d}
                      </button>
                    ))}
                    {!opt.solo && (
                      <button disabled={opp.money > opt.maxBid || amount === Math.max(opt.minBid, opp.money)} onClick={() => setAmount(clamp(opp.money))} title="The amount they can't beat">
                        Lock ${Math.max(opt.minBid, opp.money)}
                      </button>
                    )}
                  </div>
                  <button className="btn btn-primary btn-lg" onClick={() => room.act({ type: 'bid', amount })}>
                    {opt.solo ? `Take it for $${amount}` : allIn ? `Bid $${amount} · they can’t match` : `Bid $${amount}`}
                  </button>
                </>
              )}
              {!opt.canBid && !opt.canFold && <div className="dump-note">You’re out of cash, so you can only pass on this one.</div>}
              {opt.canBid && !opt.canPass && !r.high && !opt.solo && (
                <div className="dump-note">{passesLeft === 0 ? 'All 3 passes are used up. Bid on it or pay them to take it.' : ''}</div>
              )}
              <div className="two">
                {opt.canFold && (
                  <button className="btn btn-ghost" onClick={() => room.act({ type: 'fold' })} style={{ gridColumn: opt.canDump ? undefined : '1 / -1' }}>
                    Let it go · {opp.name} pays ${r.high?.amount}
                  </button>
                )}
                {opt.canPass && (
                  <button className="btn btn-ghost" onClick={() => room.act({ type: 'pass' })} style={{ gridColumn: opt.canDump ? undefined : '1 / -1' }}>
                    {opt.solo ? 'Pass · toss it' : r.passes === 1 ? 'Agree to pass' : 'Pass'}
                  </button>
                )}
                {opt.canDump && (
                  <button className="btn btn-ghost" onClick={() => setDumping(true)} style={{ color: 'var(--them)' }}>
                    Pay them to take it
                  </button>
                )}
              </div>
            </>
          )}

          {!myTurn && !r.resolved && (
            <div className="dump-note">
              {r.high?.by === seat
                ? `You’re on $${r.high.amount}. ${opp.name} can raise, or let it go.`
                : r.passes === 1 && passesLeft > 0
                  ? `You want to pass. ${opp.name} has to agree, or bid instead.`
                  : `${opp.name} can bid${passesLeft > 0 ? ', pass,' : ''} or pay you to take it.`}
            </div>
          )}

        </div>
      </div>

      <div className="side you-side">
        <PlayerPanel p={me} mine active={myTurn} slots={g.settings.slots} />
        <button className="btn btn-ghost btn-sm" onClick={() => confirm('Leave this game? It ends for both of you.') && room.leave()}>
          Leave game
        </button>
      </div>

      {dumping && (
        <DumpSheet
          max={opt.maxDump}
          them={opp.name}
          onClose={() => setDumping(false)}
          onDump={(n) => {
            setDumping(false)
            room.act({ type: 'dump', amount: n })
          }}
        />
      )}
    </main>
  )
}
