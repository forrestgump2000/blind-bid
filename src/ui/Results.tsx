import { getCategory } from '../data/index.ts'
import { other, type Owned, type Player, type Seat } from '../game/engine.ts'
import type { Room } from '../net/useRoom.ts'
import { LotCard } from './LotCard.tsx'

function tagFor(o: Owned) {
  if (o.how === 'random') return { cls: 'random', text: 'Random' }
  if (o.how === 'dumped') return { cls: 'dumped', text: `Paid +$${-o.price}` }
  return { cls: '', text: `$${o.price}` }
}

function Roster({ p, mine, budget, voters }: { p: Player; mine: boolean; budget: number; voters: string[] }) {
  const spent = p.roster.reduce((s, o) => s + Math.max(0, o.price), 0)
  const randoms = p.roster.filter((o) => o.how === 'random').length
  return (
    <section className={`roster ${mine ? 'you' : 'them'}`}>
      <div className="player-head">
        <span className={`avatar ${mine ? 'you' : 'them'}`}>{p.name.slice(0, 1).toUpperCase()}</span>
        <div className="who">
          <div className="nm">{mine ? 'Your draft' : `${p.name}’s draft`}</div>
          <div className="tag">{voters.length ? `Picked by ${voters.join(' & ')}` : mine ? 'You' : 'Opponent'}</div>
        </div>
        <div className="wallet">${p.money}</div>
      </div>
      <div className="stats">
        <span>
          <b>${spent}</b>spent
        </span>
        <span>
          <b>${budget}</b>budget
        </span>
        <span>
          <b>{randoms}</b>random fill{randoms === 1 ? '' : 's'}
        </span>
      </div>
      <div className="roster-cards">
        {p.roster.map((o) => {
          const t = tagFor(o)
          return (
            <LotCard key={o.item.key} item={o.item} size="sm">
              <span className={`tagline ${t.cls}`}>{t.text}</span>
            </LotCard>
          )
        })}
      </div>
    </section>
  )
}

export function Results({ room }: { room: Room }) {
  const g = room.state!
  const seat: Seat = room.seat ?? 0
  const them = other(seat)
  const cat = getCategory(g.settings.categoryId)
  const myVote = g.votes[seat]
  const theirVote = g.votes[them]
  const both = myVote !== null && theirVote !== null
  const votersFor = (s: Seat) => [seat, them].filter((v) => g.votes[v] === s).map((v) => (v === seat ? 'you' : g.players[v].name))

  let verdict = 'Whose draft is better?'
  if (both) {
    if (myVote === theirVote) verdict = myVote === seat ? 'You win the draft' : `${g.players[them].name} wins the draft`
    else verdict = myVote === seat ? 'Split decision' : 'Too humble. Split.'
  }

  return (
    <main className="wrap">
      <div className="results-head">
        <div className="eyebrow">{cat?.name} · final rosters</div>
        <h1>{verdict}</h1>
        {!both && (
          <p style={{ color: 'var(--paper-dim)', margin: 0 }}>
            {myVote === null ? 'Be honest. Vote for the better roster.' : `Waiting on ${g.players[them].name}’s vote`}
          </p>
        )}
      </div>
      <div className="results">
        {[seat, them].map((s) => (
          <div key={s}>
            <Roster p={g.players[s]} mine={s === seat} budget={g.settings.budget} voters={both ? votersFor(s as Seat) : []} />
            <button
              className={`btn ${myVote === s ? (s === seat ? 'btn-primary' : 'btn-teal') : 'btn-ghost'} vote`}
              style={{ width: '100%' }}
              onClick={() => room.act({ type: 'vote', for: s as Seat })}
            >
              {myVote === s ? '✓ Your vote' : s === seat ? 'Mine’s better' : `${g.players[s].name}’s is better`}
            </button>
          </div>
        ))}
      </div>
      <div className="footer-actions">
        {room.role === 'host' ? (
          <button className="btn btn-primary btn-lg" onClick={room.again}>
            Run it back
          </button>
        ) : (
          <span className="eyebrow" style={{ alignSelf: 'center' }}>
            {g.players[0].name} can start a rematch
          </span>
        )}
        <button className="btn btn-ghost btn-lg" onClick={room.leave}>
          Leave
        </button>
      </div>
    </main>
  )
}
