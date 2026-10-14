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
  // A pending "I'll pay you to take it" deal. 'pay': `from` pays `to` if `to` takes the lot.
  // 'ask': `from` will take the lot if `to` pays them `amount`.
  offer?: Offer | null
  offers?: number // how many times the lot has been passed back and forth this round
  offersClosed?: boolean // a veto or refused counter ends negotiating on this lot
}

export interface Offer {
  kind: 'pay' | 'ask'
  from: Seat
  to: Seat
  amount: number
  payer: Seat // whoever started paying; the turn returns to them if the deal dies
}

// Sending a lot back and forth can't go on forever.
export const MAX_OFFERS = 6

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
  tosses?: number // lots both players agreed to pass on
  rev: number
}

// Passing needs both players to agree, and a game only allows this many agreed passes.
export const PASS_LIMIT = 3
export const tossesLeft = (g: GameState) => PASS_LIMIT - (g.tosses ?? 0)

export type Action =
  | { type: 'bid'; amount: number }
  | { type: 'fold' }
  | { type: 'pass' }
  | { type: 'dump'; amount: number }
  | { type: 'take' }
  | { type: 'veto' }
  | { type: 'ask'; amount: number }
  | { type: 'sendback'; amount: number }
  | { type: 'accept' }
  | { type: 'refuse' }
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
    tosses: 0,
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
    tosses: 0,
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
  const tosses = (g.tosses ?? 0) + (outcome.kind === 'passed' ? 1 : 0)
  return { ...g, players, discard, tosses, last: outcome, round: g.round ? { ...g.round } : null }
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
  // answering a pending offer
  offer: Offer | null
  canTake: boolean
  canVeto: boolean
  canAsk: boolean
  minAsk: number
  maxAsk: number
  canSendBack: boolean
  minSendBack: number
  maxSendBack: number
  canAccept: boolean
  canRefuse: boolean
}

export function options(g: GameState, seat: Seat): Options {
  const none: Options = {
    canBid: false,
    minBid: 0,
    maxBid: 0,
    canFold: false,
    canPass: false,
    canDump: false,
    maxDump: 0,
    solo: false,
    offer: null,
    canTake: false,
    canVeto: false,
    canAsk: false,
    minAsk: 0,
    maxAsk: 0,
    canSendBack: false,
    minSendBack: 0,
    maxSendBack: 0,
    canAccept: false,
    canRefuse: false,
  }
  const r = g.round
  if (g.phase !== 'playing' || !r || r.resolved || r.turn !== seat) return none
  const me = g.players[seat]
  const them = other(seat)
  const solo = isFull(g, them)

  const o = r.offer
  if (o && o.to === seat) {
    if (o.kind === 'ask') {
      return { ...none, offer: o, canAccept: me.money >= o.amount, canRefuse: true }
    }
    const payerMoney = g.players[o.from].money
    const canBounce = (r.offers ?? 0) < MAX_OFFERS && !isFull(g, o.from)
    return {
      ...none,
      offer: o,
      canTake: payerMoney >= o.amount,
      canVeto: true,
      canAsk: payerMoney > o.amount,
      minAsk: o.amount + 1,
      maxAsk: payerMoney,
      canSendBack: canBounce && me.money >= o.amount,
      minSendBack: o.amount,
      maxSendBack: me.money,
    }
  }

  const minBid = (r.high?.amount ?? 0) + 1
  const left = tossesLeft(g)
  const canBid = me.money >= minBid
  // Opening pass = a proposal; answering pass = agreeing to toss it. Once the limit is
  // used up, only a broke player may pass, and that just hands the decision over.
  let canPass = false
  if (!r.high) {
    if (solo || r.passes > 0) canPass = left > 0
    else canPass = left > 0 || !canBid
  }
  return {
    ...none,
    canBid,
    minBid,
    maxBid: me.money,
    canFold: !!r.high && r.high.by === them,
    canPass,
    canDump: !r.high && !solo && !r.offersClosed && me.money >= 1,
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
        next = award({ ...g, round: { ...r, log: log(opt.solo ? `${name} passed` : `${name} agreed to pass`) } }, { kind: 'passed', item: r.item })
      } else {
        const text = tossesLeft(g) > 0 ? `${name} wants to pass` : `${name} is out of cash and passed`
        return { ...g, rev: g.rev + 1, round: { ...r, turn: them, passes, log: log(text) } }
      }
      break
    }
    case 'dump': {
      const amount = Math.floor(action.amount)
      if (!opt.canDump || amount < 1 || amount > opt.maxDump) return g
      const offer: Offer = { kind: 'pay', from: seat, to: them, amount, payer: seat }
      return { ...g, rev: g.rev + 1, round: { ...r, offer, offers: 1, passes: 0, turn: them, log: log(`${name} offered ${money(amount)} to make ${g.players[them].name} take it`) } }
    }
    case 'take': {
      const o = r.offer
      if (!opt.canTake || !o) return g
      next = award({ ...g, round: { ...r, offer: null, log: log(`${name} took the ${money(o.amount)}`) } }, { kind: 'dumped', from: o.from, to: seat, amount: o.amount, item: r.item })
      break
    }
    case 'accept': {
      // Pay what they asked; they take the lot.
      const o = r.offer
      if (!opt.canAccept || !o) return g
      next = award({ ...g, round: { ...r, offer: null, log: log(`${name} paid the ${money(o.amount)}`) } }, { kind: 'dumped', from: seat, to: o.from, amount: o.amount, item: r.item })
      break
    }
    case 'veto':
    case 'refuse': {
      const o = r.offer
      if (!o || (action.type === 'veto' ? !opt.canVeto : !opt.canRefuse)) return g
      const text = action.type === 'veto' ? `${name} vetoed it` : `${name} said no deal`
      return { ...g, rev: g.rev + 1, round: { ...r, offer: null, offersClosed: true, turn: o.payer, log: log(text) } }
    }
    case 'ask': {
      const o = r.offer
      const amount = Math.floor(action.amount)
      if (!opt.canAsk || !o || amount < opt.minAsk || amount > opt.maxAsk) return g
      const offer: Offer = { kind: 'ask', from: seat, to: o.from, amount, payer: o.payer }
      return { ...g, rev: g.rev + 1, round: { ...r, offer, turn: o.from, log: log(`${name} vetoed — wants ${money(amount)} to take it`) } }
    }
    case 'sendback': {
      const o = r.offer
      const amount = Math.floor(action.amount)
      if (!opt.canSendBack || !o || amount < opt.minSendBack || amount > opt.maxSendBack) return g
      const offer: Offer = { kind: 'pay', from: seat, to: o.from, amount, payer: seat }
      const text = amount > o.amount ? `${name} sent it back with ${money(amount)}` : `${name} sent it back, matching ${money(amount)}`
      return { ...g, rev: g.rev + 1, round: { ...r, offer, offers: (r.offers ?? 0) + 1, turn: o.from, log: log(text) } }
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
    tosses: 0,
    players: g.players.map((p) => ({ ...p, money: g.settings.budget, roster: [] })),
    rev: g.rev + 1,
  }
}
