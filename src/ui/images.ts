import { useEffect, useState } from 'react'

// images.json is big, so it ships as its own chunk and loads after first paint.
let map: Record<string, string | null> | null = null
let pending: Promise<void> | null = null
const listeners = new Set<() => void>()

export function loadImages(): Promise<void> {
  if (map) return Promise.resolve()
  pending ??= import('../data/images.json').then((m) => {
    map = m.default as Record<string, string | null>
    for (const l of listeners) l()
  })
  return pending
}

export function imageUrl(key: string | undefined): string | null {
  if (!key || !map) return null
  return map[key] ?? null
}

export function useImagesReady(): boolean {
  const [ready, setReady] = useState(!!map)
  useEffect(() => {
    if (map) return
    const l = () => setReady(true)
    listeners.add(l)
    loadImages()
    return () => {
      listeners.delete(l)
    }
  }, [])
  return ready
}

const warmed = new Set<string>()
export function preload(keys: (string | undefined)[]) {
  for (const k of keys) {
    const u = imageUrl(k)
    if (u && !warmed.has(u)) {
      warmed.add(u)
      const img = new Image()
      img.referrerPolicy = 'no-referrer'
      img.src = u
    }
  }
}
