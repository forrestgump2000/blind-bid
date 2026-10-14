import Peer, { type DataConnection } from 'peerjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import { advance, apply, newGame, rematch, startGame, type Action, type GameState, type Seat, type Settings } from '../game/engine.ts'

// The host's browser is the source of truth. The guest sends actions, the host
// applies them and broadcasts the whole state back. PeerJS handles signaling.

const PREFIX = 'blindbid-v1-'
const LETTERS = 'ABCDEFGHJKMNPQRSTUVWXYZ'
const RESULT_PAUSE_MS = 2600

type Msg =
  | { t: 'hello'; name: string; id: string }
  | { t: 'action'; action: Action }
  | { t: 'state'; state: GameState }
  | { t: 'full' }
  | { t: 'bye' }

export type Status = 'idle' | 'connecting' | 'open' | 'reconnecting' | 'error'

export function makeCode(): string {
  return Array.from({ length: 4 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join('')
}

function clientId(): string {
  // Per-tab so two tabs on one machine count as two players; survives reloads.
  try {
    let id = sessionStorage.getItem('bb-client')
    if (!id) {
      id = Math.random().toString(36).slice(2, 10)
      sessionStorage.setItem('bb-client', id)
    }
    return id
  } catch {
    return Math.random().toString(36).slice(2, 10)
  }
}

const store = {
  get<T>(k: string): T | null {
    try {
      const v = sessionStorage.getItem(k)
      return v ? (JSON.parse(v) as T) : null
    } catch {
      return null
    }
  },
  set(k: string, v: unknown) {
    try {
      sessionStorage.setItem(k, JSON.stringify(v))
    } catch {
      /* private mode */
    }
  },
  del(k: string) {
    try {
      sessionStorage.removeItem(k)
    } catch {
      /* ignore */
    }
  },
}

export interface Session {
  role: 'host' | 'guest'
  code: string
  name: string
}

export function savedSession(): Session | null {
  return store.get<Session>('bb-session')
}

export function useRoom() {
  const [state, setState] = useState<GameState | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [role, setRole] = useState<'host' | 'guest' | null>(null)
  const [myId] = useState(clientId)
  const me = useRef(myId)
  const peer = useRef<Peer | null>(null)
  const conns = useRef(new Map<string, DataConnection>())
  const hostConn = useRef<DataConnection | null>(null)
  const stateRef = useRef<GameState | null>(null)
  const retry = useRef<number | null>(null)
  const closing = useRef(false)

  const idx = state ? state.players.findIndex((p) => p.id === myId) : -1
  const seat: Seat | null = idx === 0 || idx === 1 ? idx : null

  // ---------- host ----------
  const commit = useCallback((next: GameState) => {
    stateRef.current = next
    setState(next)
    store.set(`bb-host-${next.code}`, next)
    for (const c of conns.current.values()) if (c.open) c.send({ t: 'state', state: next } satisfies Msg)
  }, [])

  const hostUpdate = useCallback(
    (fn: (g: GameState) => GameState) => {
      const cur = stateRef.current
      if (!cur) return
      const next = fn(cur)
      if (next !== cur) commit(next)
    },
    [commit],
  )

  const host = useCallback(
    (name: string, code = makeCode(), attempt = 0) => {
      closing.current = false
      setRole('host')
      setStatus('connecting')
      setError(null)
      const restored = store.get<GameState>(`bb-host-${code}`)
      const p = new Peer(PREFIX + code, { debug: 0 })
      peer.current = p
      p.on('open', () => {
        const g = restored ?? newGame(code, { id: me.current, name })
        commit({ ...g, players: g.players.map((pl) => (pl.id === me.current ? { ...pl, online: true } : { ...pl, online: false })) })
        store.set('bb-session', { role: 'host', code, name } satisfies Session)
        setStatus('open')
      })
      p.on('connection', (conn) => {
        conn.on('data', (raw) => {
          const msg = raw as Msg
          if (msg.t === 'hello') {
            const cur = stateRef.current
            if (!cur) return
            const known = cur.players.find((pl) => pl.id === msg.id)
            if (!known && (cur.players.length >= 2 || cur.phase !== 'lobby')) {
              conn.send({ t: 'full' } satisfies Msg)
              setTimeout(() => conn.close(), 300)
              return
            }
            conns.current.set(msg.id, conn)
            ;(conn as DataConnection & { clientId?: string }).clientId = msg.id
            hostUpdate((g) => ({
              ...g,
              rev: g.rev + 1,
              players: known
                ? g.players.map((pl) => (pl.id === msg.id ? { ...pl, online: true, name: msg.name || pl.name } : pl))
                : [...g.players, { id: msg.id, name: msg.name || 'Player 2', money: g.settings.budget, roster: [], online: true }],
            }))
            conn.send({ t: 'state', state: stateRef.current! } satisfies Msg)
          } else if (msg.t === 'bye') {
            const id = (conn as DataConnection & { clientId?: string }).clientId
            conns.current.delete(id ?? '')
            hostUpdate((g) =>
              g.phase === 'lobby'
                ? { ...g, rev: g.rev + 1, players: g.players.filter((pl) => pl.id !== id) }
                : { ...g, rev: g.rev + 1, players: g.players.map((pl) => (pl.id === id ? { ...pl, online: false } : pl)) },
            )
          } else if (msg.t === 'action') {
            const id = (conn as DataConnection & { clientId?: string }).clientId
            const s = stateRef.current?.players.findIndex((pl) => pl.id === id)
            if (s === 0 || s === 1) hostUpdate((g) => apply(g, s, msg.action))
          }
        })
        conn.on('close', () => {
          const id = (conn as DataConnection & { clientId?: string }).clientId
          if (!id || conns.current.get(id) !== conn) return
          conns.current.delete(id)
          hostUpdate((g) => ({ ...g, rev: g.rev + 1, players: g.players.map((pl) => (pl.id === id ? { ...pl, online: false } : pl)) }))
        })
      })
      p.on('error', (err: { type?: string }) => {
        if (err.type === 'unavailable-id') {
          p.destroy()
          // A fresh room grabs a new code; a restored room waits for the old peer to time out.
          if (restored && attempt < 8) setTimeout(() => host(name, code, attempt + 1), 2500)
          else if (!restored && attempt < 5) host(name, makeCode(), attempt + 1)
          else {
            setStatus('error')
            setError('Couldn’t open a room. Try again in a moment.')
          }
        } else if (err.type === 'network' || err.type === 'server-error' || err.type === 'socket-error') {
          setStatus('reconnecting')
        }
      })
      p.on('disconnected', () => {
        if (!closing.current && !p.destroyed) {
          setStatus('reconnecting')
          setTimeout(() => {
            if (!p.destroyed) p.reconnect()
          }, 1500)
        }
      })
    },
    [commit, hostUpdate],
  )

  // Host auto-advances a beat after each lot resolves so both players see the result.
  useEffect(() => {
    if (role !== 'host' || !state?.last || state.phase !== 'playing') return
    const t = setTimeout(() => hostUpdate(advance), RESULT_PAUSE_MS)
    return () => clearTimeout(t)
  }, [role, state?.last, state?.phase, state?.rev, hostUpdate])

  // ---------- guest ----------
  const join = useCallback((name: string, code: string) => {
    closing.current = false
    setRole('guest')
    setStatus('connecting')
    setError(null)
    code = code.toUpperCase().trim()
    const p = peer.current && !peer.current.destroyed ? peer.current : new Peer({ debug: 0 })
    peer.current = p
    let gotState = false
    let misses = 0
    const giveUp = () => {
      closing.current = true
      store.del('bb-session')
      peer.current?.destroy()
      peer.current = null
      hostConn.current = null
      stateRef.current = null
      setState(null)
      setRole(null)
      setStatus('idle')
      setError('Lost the connection to the host.')
    }
    const retryLater = (ms: number) => {
      if (retry.current) clearTimeout(retry.current)
      // About a minute of trying before we call it.
      if (++misses > 24) return giveUp()
      retry.current = window.setTimeout(connect, ms)
    }

    const connect = () => {
      const conn = p.connect(PREFIX + code, { reliable: true })
      hostConn.current = conn
      conn.on('open', () => {
        conn.send({ t: 'hello', name, id: me.current } satisfies Msg)
      })
      conn.on('data', (raw) => {
        const msg = raw as Msg
        if (msg.t === 'state') {
          gotState = true
          misses = 0
          stateRef.current = msg.state
          setState(msg.state)
          setStatus('open')
          store.set('bb-session', { role: 'guest', code, name } satisfies Session)
        } else if (msg.t === 'bye') {
          closing.current = true
          hostConn.current = null
          peer.current?.destroy()
          peer.current = null
          stateRef.current = null
          store.del('bb-session')
          setState(null)
          setRole(null)
          setStatus('idle')
          setError('The host closed the room.')
        } else if (msg.t === 'full') {
          closing.current = true
          setStatus('error')
          setError('That room already has two players.')
          store.del('bb-session')
        }
      })
      conn.on('close', () => {
        if (closing.current) return
        setStatus('reconnecting')
        retryLater(2000)
      })
    }

    p.on('error', (err: { type?: string }) => {
      if (err.type === 'peer-unavailable') {
        if (!gotState) {
          closing.current = true
          setStatus('error')
          setError(`No room found with code ${code}.`)
          store.del('bb-session')
        } else {
          setStatus('reconnecting')
          retryLater(2500)
        }
      }
    })
    if (p.open) connect()
    else p.on('open', connect)
  }, [])

  // ---------- shared ----------
  const act = useCallback(
    (action: Action) => {
      if (role === 'host') {
        const s = stateRef.current?.players.findIndex((pl) => pl.id === me.current)
        if (s === 0 || s === 1) hostUpdate((g) => apply(g, s, action))
      } else hostConn.current?.send({ t: 'action', action } satisfies Msg)
    },
    [role, hostUpdate],
  )

  const setSettings = useCallback(
    (settings: Settings) =>
      hostUpdate((g) =>
        g.phase === 'lobby' ? { ...g, settings, rev: g.rev + 1, players: g.players.map((pl) => ({ ...pl, money: settings.budget })) } : g,
      ),
    [hostUpdate],
  )

  const start = useCallback(() => hostUpdate((g) => ({ ...startGame(g), rev: g.rev + 1 })), [hostUpdate])
  const again = useCallback(() => hostUpdate(rematch), [hostUpdate])

  const leave = useCallback(() => {
    closing.current = true
    if (retry.current) clearTimeout(retry.current)
    if (stateRef.current) store.del(`bb-host-${stateRef.current.code}`)
    store.del('bb-session')
    const bye = (c: DataConnection | null) => {
      if (c?.open) c.send({ t: 'bye' } satisfies Msg)
    }
    bye(hostConn.current)
    for (const c of conns.current.values()) bye(c)
    const toClose = [hostConn.current, ...conns.current.values()]
    const doomed = peer.current
    conns.current.clear()
    hostConn.current = null
    // Give the goodbye a moment to flush before tearing down the connection.
    setTimeout(() => {
      for (const c of toClose) c?.close()
      doomed?.destroy()
    }, 250)
    peer.current = null
    stateRef.current = null
    setState(null)
    setRole(null)
    setStatus('idle')
    setError(null)
  }, [])

  return { state, seat, role, status, error, host, join, act, setSettings, start, again, leave, clearError: () => setError(null) }
}

export type Room = ReturnType<typeof useRoom>
