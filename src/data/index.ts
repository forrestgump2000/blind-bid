import { food } from './food.ts'
import { games } from './games.ts'
import { internet } from './internet.ts'
import { catalogCategory, music } from './music.ts'
import { screen } from './screen.ts'
import { basketball, soccer } from './soccer.ts'
import { sports } from './sports.ts'
import type { CategoryDef, TabDef } from './types.ts'

const disneyPixar: CategoryDef = (() => {
  const d = screen.categories.find((c) => c.id === 'disney-movies')!
  const p = screen.categories.find((c) => c.id === 'pixar-movies')!
  return {
    id: 'disney-pixar',
    name: 'Disney & Pixar Combined',
    blurb: 'Every Disney and Pixar classic in one deck.',
    hint: 'film',
    items: d.items + '\n' + p.items,
  }
})()

// Slot the combined deck in right after Pixar, matching the order people expect.
const pixarIdx = screen.categories.findIndex((c) => c.id === 'pixar-movies')
screen.categories.splice(pixarIdx + 1, 0, disneyPixar)

export const tabs: TabDef[] = [sports, soccer, basketball, screen, music, food, games, internet]

const byId = new Map<string, CategoryDef>()
for (const t of tabs) for (const c of t.categories) byId.set(c.id, c)

export function getCategory(id: string): CategoryDef | undefined {
  if (id.startsWith('artist:')) return catalogCategory(id.slice(7))
  return byId.get(id)
}

export function tabOf(id: string): TabDef | undefined {
  if (id.startsWith('artist:')) return music
  return tabs.find((t) => t.categories.some((c) => c.id === id))
}

export { artistCatalogs, artistCategoryId } from './music.ts'
