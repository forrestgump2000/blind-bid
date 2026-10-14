import { getCategory } from '../data/index.ts'
import { parseItems } from '../data/types.ts'
import { LotCard } from './LotCard.tsx'

// Hidden QA view: /?gallery=<category-id> shows every lot in a category.
export function Gallery({ id }: { id: string }) {
  const cat = getCategory(id)
  if (!cat) return <main className="wrap">Unknown category</main>
  return (
    <main className="wrap" style={{ paddingBottom: 40 }}>
      <h2>{cat.name}</h2>
      <div className="roster-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))' }}>
        {parseItems(cat).map((i) => (
          <LotCard key={i.key} item={i} size="sm" />
        ))}
      </div>
    </main>
  )
}
