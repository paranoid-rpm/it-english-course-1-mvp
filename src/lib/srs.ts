export type Rating = 'again' | 'good' | 'easy'

export type CardState = {
  id: string
  dueAt: number
  intervalDays: number
  ease: number
  lastRating?: Rating
}

export type SrsState = {
  version: 1
  cards: Record<string, CardState>
  known: Record<string, true>
}

const KEY = 'it-english.srs.v1'

function now() {
  return Date.now()
}

export function loadSrs(): SrsState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { version: 1, cards: {}, known: {} }
    const data = JSON.parse(raw) as SrsState
    if (!data || typeof data !== 'object') return { version: 1, cards: {}, known: {} }
    return {
      version: 1,
      cards: data.cards ?? {},
      known: data.known ?? {}
    }
  } catch {
    return { version: 1, cards: {}, known: {} }
  }
}

export function saveSrs(s: SrsState) {
  localStorage.setItem(KEY, JSON.stringify(s))
}

export function isKnown(cardId: string): boolean {
  const s = loadSrs()
  return !!s.known[cardId]
}

export function setKnown(cardId: string, known: boolean) {
  const s = loadSrs()
  if (known) s.known[cardId] = true
  else delete s.known[cardId]
  saveSrs(s)
}

export function getCard(cardId: string): CardState {
  const s = loadSrs()
  return (
    s.cards[cardId] ?? {
      id: cardId,
      dueAt: 0,
      intervalDays: 0,
      ease: 2.3
    }
  )
}

export function rateCard(cardId: string, rating: Rating) {
  const s = loadSrs()
  const c = s.cards[cardId] ?? {
    id: cardId,
    dueAt: 0,
    intervalDays: 0,
    ease: 2.3
  }

  let ease = c.ease
  if (rating === 'again') ease = Math.max(1.3, ease - 0.2)
  if (rating === 'good') ease = Math.min(2.8, ease + 0.05)
  if (rating === 'easy') ease = Math.min(3.0, ease + 0.15)

  let intervalDays = c.intervalDays
  if (rating === 'again') intervalDays = 0
  if (rating === 'good') intervalDays = intervalDays === 0 ? 1 : Math.round(intervalDays * ease)
  if (rating === 'easy') intervalDays = intervalDays === 0 ? 2 : Math.round(intervalDays * (ease + 0.3))

  const dueAt = rating === 'again' ? now() + 10 * 60 * 1000 : now() + intervalDays * 24 * 60 * 60 * 1000

  s.cards[cardId] = {
    id: cardId,
    dueAt,
    intervalDays,
    ease,
    lastRating: rating
  }

  saveSrs(s)
}

export function countDue(cardIds: string[]): number {
  const s = loadSrs()
  const t = now()
  let n = 0
  for (const id of cardIds) {
    if (s.known[id]) continue
    const c = s.cards[id]
    if (!c || c.dueAt <= t) n++
  }
  return n
}

export function pickDue(cardIds: string[]): string | null {
  const s = loadSrs()
  const t = now()

  let best: { id: string; dueAt: number } | null = null
  for (const id of cardIds) {
    if (s.known[id]) continue
    const dueAt = s.cards[id]?.dueAt ?? 0
    if (dueAt > t) continue
    if (!best || dueAt < best.dueAt) best = { id, dueAt }
  }

  return best?.id ?? null
}
