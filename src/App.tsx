import { useEffect, useRef, useState } from 'react'
import { savedSession, useRoom } from './net/useRoom.ts'
import { Gallery } from './ui/Gallery.tsx'
import { Game } from './ui/Game.tsx'
import { Home } from './ui/Home.tsx'
import { loadImages } from './ui/images.ts'
import { Lobby } from './ui/Lobby.tsx'
import { Results } from './ui/Results.tsx'

function readName() {
  try {
    return localStorage.getItem('bb-name') ?? ''
  } catch {
    return ''
  }
}

export default function App() {
  const room = useRoom()
  const [name, setNameState] = useState(readName)
  const resumed = useRef(false)
  const setName = (n: string) => {
    setNameState(n)
    try {
      localStorage.setItem('bb-name', n)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  // Pick up where we left off after a refresh, or follow a ?join= link.
  useEffect(() => {
    if (resumed.current) return
    resumed.current = true
    const s = savedSession()
    if (s) {
      if (s.role === 'host') room.host(s.name, s.code)
      else room.join(s.name, s.code)
      return
    }
    const join = new URLSearchParams(location.search).get('join')
    if (join && readName()) room.join(readName(), join)
  }, [room])

  useEffect(() => {
    if (room.state && location.search) history.replaceState(null, '', '/')
  }, [room.state])

  const g = room.state
  const phase = g ? `${g.phase}` : 'home'
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [phase])
  const pendingJoin = new URLSearchParams(location.search).get('join')?.toUpperCase() ?? null

  const gallery = new URLSearchParams(location.search).get('gallery')
  let screen
  if (gallery) screen = <Gallery id={gallery} />
  else if (!g) {
    if (room.role && room.status !== 'error') {
      screen = (
        <div className="center-screen">
          <div>
            <div className="spinner" />
            <div className="eyebrow">{room.role === 'host' ? 'Opening your room' : 'Finding the room'}</div>
          </div>
        </div>
      )
    } else {
      screen = (
        <Home
          name={name}
          setName={setName}
          busy={false}
          error={room.error}
          initialCode={pendingJoin}
          onHost={() => room.host(name.trim())}
          onJoin={(code) => room.join(name.trim(), code)}
        />
      )
    }
  } else if (g.phase === 'lobby') screen = <Lobby room={room} />
  else if (g.phase === 'playing' && g.round) screen = <Game room={room} />
  else screen = <Results room={room} />

  const opp = g && room.seat !== null ? g.players[room.seat === 0 ? 1 : 0] : null

  return (
    <>
      <header className="wrap topbar">
        <button className="brand" onClick={() => !g && room.leave()} aria-label="Blind Bid home">
          <img src="/icon-192.png" alt="" />
          Blind Bid
        </button>
        {g && <span className="eyebrow mono">Room {g.code}</span>}
      </header>
      {room.status === 'reconnecting' && g && <div className="banner">Connection hiccup — reconnecting…</div>}
      {g && g.phase === 'playing' && opp && !opp.online && room.status === 'open' && (
        <div className="banner">
          {opp.name} dropped. Waiting for them to come back…
          <button className="btn btn-sm btn-ghost" style={{ minHeight: 28, ['--fg' as string]: 'var(--ink)', boxShadow: 'inset 0 0 0 1.5px rgba(0,0,0,.25)' }} onClick={room.leave}>
            Leave
          </button>
        </div>
      )}
      {screen}
    </>
  )
}
