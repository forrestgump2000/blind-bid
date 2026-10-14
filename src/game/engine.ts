import { getCategory } from '../data/index.ts'
import { parseItems, type Item } from '../data/types.ts'

export type Seat = 0 | 1
export type How = 'won' | 'dumped' | 'free' | 'random'

export interface Owned {
  item: Item
  price: number // what the owner paid; negative when they were paid to take it
  how: How
}

export interface Player {
  id: string
  name: string
  money: number
  roster: Owned[]
  online: boolean
}

export interface Settings {
  categoryId: string
  budget: 15 | 20 | 30
  slots: 3 | 5 | 7
}

export interface Bid {
  by: Seat
  amount: number
}

export interface LogLine {
  seat: Seat | null
  text: string
}

export interface Round {
  lot: number
  item: Item
  turn: Seat
  high: Bid | null
  passes: number
  log: LogLine[]
  resolved: boolean
}

export type Outcome =
  | { kind: 'won'; seat: Seat; amount: number; item: Item; reason: 'fold' | 'all-in' | 'solo' }
  | { kind: 'dumped'; from: Seat; to: Seat; amount: number; item: Item }
  | { kind: 'passed'; item: Item }

export interface GameState {
  code: string
  phase: 'lobby' | 'playing' | 'results'
  settings: Settings
  players: Player[]
  deck: Item[]
  discard: Item[]
  round: Round | null
  last: Outcome | null
  lot: number
  deckSize: number
  votes: (Seat | null)[]
  rev: number
}

export type Action =
  | { type: 'bid'; amount: number }
  | { type: 'fold' }
  | { type: 'pass' }
  | { type: 'dump'; amount: number }
  | { type: 'vote'; for: Seat }

export const DEFAULT_SETTINGS: Settings = { categoryId: 'current-nba', budget: 20, slots: 5 }

export function newGame(code: string, host: { id: string; name: string }): GameState {
  return {
    code,
    phase: 'lobby',
    settings: { ...DEFAULT_SETTINGS },
    players: [{ id: host.id, name: host.name, money: DEFAULT_SETTINGS.budget, roster: [], online: true }],
    deck: [],
    discard: [],
    round: null,
    last: null,
    lot: 0,
    deckSize: 0,
    votes: [null, null],
    rev: 0,
  }
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const other = (s: Seat): Seat => (s === 0 ? 1 : 0)
export const isFull = (g: GameState, s: Seat) => g.players[s].roster.length >= g.settings.slots

export function startGame(g: GameState): GameState {
  if (g.players.length !== 2) return g
  const cat = getCategory(g.settings.categoryId)
  if (!cat) return g
  const deck = shuffle(parseItems(cat))
  if (deck.length < g.settings.slots * 2) return g
  const next: GameState = {
    ...g,
    phase: 'playing',
    deck,
    deckSize: deck.length,
    discard: [],
    last: null,
    lot: 0,
    votes: [null, null],
    players: g.players.map((p) => ({ ...p, money: g.settings.budget, roster: [] })),
    round: null,
  }
  return nextLot(next)
}

// Deals the next lot, or ends the game when nobody can still draft.
function nextLot(g: GameState): GameState {
  const full0 = isFull(g, 0)
  const full1 = isFull(g, 1)
  const [p0, p1] = g.players
  const stuck =
    (full0 && full1) ||
    g.deck.length === 0 ||
    (full0 && p1.money <= 0) ||
    (full1 && p0.money <= 0) ||
    (p0.money <= 0 && p1.money <= 0)
  if (stuck) return finish(g)

  const lot = g.lot + 1
  let starter: Seat = lot % 2 === 1 ? 0 : 1
  if (isFull(g, starter)) starter = other(starter)
  const [item, ...deck] = g.deck
  return { ...g, deck, lot, round: { lot, item, turn: starter, high: null, passes: 0, log: [], resolved: false } }
}

// Anyone short on items gets random leftovers, then we show the results.
function finish(g: GameState): GameState {
  let pool = shuffle([...g.deck, ...g.discard])
  const players = g.players.map((p) => {
    const roster = p.roster.slice()
    while (roster.length < g.settings.slots && pool.length) {
      roster.push({ item: pool[0], price: 0, how: 'random' })
      pool = pool.slice(1)
    }
    return { ...p, roster }
  })
  return { ...g, players, deck: pool, phase: 'results', round: null }
}

function award(g: GameState, outcome: Outcome): GameState {
  const players = g.players.map((p) => ({ ...p, roster: p.roster.slice() }))
  let discard = g.discard
  if (outcome.kind === 'won') {
    const p = players[outcome.seat]
    p.money -= outcome.amount
    p.roster.push({ item: outcome.item, price: outcome.amount, how: outcome.reason === 'solo' && outcome.amount === 0 ? 'free' : 'won' })
  } else if (outcome.kind === 'dumped') {
    players[outcome.from].money -= outcome.amount
    players[outcome.to].money += outcome.amount
    players[outcome.to].roster.push({ item: outcome.item, price: -outcome.amount, how: 'dumped' })
  } else {
    discard = [...discard, outcome.item]
  }
  return { ...g, players, discard, last: outcome, round: g.round ? { ...g.round } : null }
}

export interface Options {
  canBid: boolean
  minBid: number
  maxBid: number
  canFold: boolean
  canPass: boolean
  canDump: boolean
  maxDump: number
  solo: boolean
}

export function options(g: GameState, seat: Seat): Options {
  const none: Options = { canBid: false, minBid: 0, maxBid: 0, canFold: false, canPass: false, canDump: false, maxDump: 0, solo: false }
  const r = g.round
  if (g.phase !== 'playing' || !r || r.resolved || r.turn !== seat) return none
  const me = g.players[seat]
  const them = other(seat)
  const solo = isFull(g, them)
  const minBid = (r.high?.amount ?? 0) + 1
  return {
    canBid: me.money >= minBid,
    minBid,
    maxBid: me.money,
    canFold: !!r.high && r.high.by === them,
    canPass: !r.high,
    canDump: !r.high && !solo && me.money >= 1,
    maxDump: me.money,
    solo,
  }
}

const money = (n: number) => `$${n}`

export function apply(g: GameState, seat: Seat, action: Action): GameState {
  if (action.type === 'vote') {
    if (g.phase !== 'results') return g
    const votes = g.votes.slice()
    votes[seat] = action.for
    return { ...g, votes, rev: g.rev + 1 }
  }

  const r = g.round
  if (g.phase !== 'playing' || !r || r.resolved || r.turn !== seat) return g
  const opt = options(g, seat)
  const them = other(seat)
  const name = g.players[seat].name
  const log = (text: string) => [...r.log, { seat, text }]
  let next: GameState

  switch (action.type) {
    case 'bid': {
      const amount = Math.floor(action.amount)
      if (!opt.canBid || amount < opt.minBid || amount > opt.maxBid) return g
      if (opt.solo) {
        next = award({ ...g, round: { ...r, log: log(`${name} took it for ${money(amount)}`) } }, { kind: 'won', seat, amount, item: r.item, reason: 'solo' })
      } else if (amount >= g.players[them].money) {
        // They can't top this, so the lot is ours on the spot.
        next = award({ ...g, round: { ...r, log: log(`${name} went ${money(amount)} — too rich to answer`) } }, { kind: 'won', seat, amount, item: r.item, reason: 'all-in' })
      } else {
        return { ...g, rev: g.rev + 1, round: { ...r, high: { by: seat, amount }, turn: them, passes: 0, log: log(`${name} bid ${money(amount)}`) } }
      }
      break
    }
    case 'fold': {
      if (!opt.canFold || !r.high) return g
      const amount = r.high.amount
      next = award({ ...g, round: { ...r, log: log(`${name} let it go`) } }, { kind: 'won', seat: them, amount, item: r.item, reason: 'fold' })
      break
    }
    case 'pass': {
      if (!opt.canPass) return g
      const passes = r.passes + 1
      if (opt.solo || passes >= 2) {
        next = award({ ...g, round: { ...r, log: log(`${name} passed`) } }, { kind: 'passed', item: r.item })
      } else {
        return { ...g, rev: g.rev + 1, round: { ...r, turn: them, passes, log: log(`${name} passed`) } }
      }
      break
    }
    case 'dump': {
      const amount = Math.floor(action.amount)
      if (!opt.canDump || amount < 1 || amount > opt.maxDump) return g
      next = award(
        { ...g, round: { ...r, log: log(`${name} paid ${money(amount)} to make ${g.players[them].name} take it`) } },
        { kind: 'dumped', from: seat, to: them, amount, item: r.item },
      )
      break
    }
    default:
      return g
  }
  // Freeze the round with its outcome visible; the host advances after a beat.
  return { ...next, rev: g.rev + 1, round: next.round ? { ...next.round, resolved: true } : null }
}

export function advance(g: GameState): GameState {
  if (g.phase !== 'playing' || !g.last) return g
  return { ...nextLot({ ...g, last: null, round: null }), rev: g.rev + 1 }
}

export function rematch(g: GameState): GameState {
  return {
    ...g,
    phase: 'lobby',
    round: null,
    last: null,
    deck: [],
    discard: [],
    lot: 0,
    votes: [null, null],
    players: g.players.map((p) => ({ ...p, money: g.settings.budget, roster: [] })),
    rev: g.rev + 1,
  }
}
