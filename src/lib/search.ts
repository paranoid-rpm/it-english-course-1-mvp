import type { Course, Lesson } from '../types'

export type SearchHit = {
  lessonId: string
  lessonTitle: string
  moduleTitle: string
  snippet: string
  score: number
}

type Doc = {
  lesson: Lesson
  moduleTitle: string
  text: string
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[\s\n\r\t]+/g, ' ')
    .trim()
}

export function buildCourseDocs(course: Course): Doc[] {
  const docs: Doc[] = []
  for (const m of course.modules) {
    for (const l of m.lessons) {
      const parts: string[] = []
      parts.push(l.title)
      parts.push(l.goals.join(' '))
      parts.push(l.theory.join(' '))
      parts.push(l.vocab.map((v) => `${v.term} ${v.meaningRu} ${v.example}`).join(' '))
      parts.push(l.phrases.map((p) => `${p.en} ${p.ru}`).join(' '))
      docs.push({ lesson: l, moduleTitle: m.title, text: normalize(parts.join(' ')) })
    }
  }
  return docs
}

export function searchCourse(docs: Doc[], query: string, limit = 20): SearchHit[] {
  const q = normalize(query)
  if (!q) return []

  const tokens = q.split(' ').filter(Boolean).slice(0, 6)
  if (tokens.length === 0) return []

  const hits: SearchHit[] = []

  for (const d of docs) {
    let score = 0
    for (const t of tokens) {
      const idx = d.text.indexOf(t)
      if (idx !== -1) {
        score += 3
        if (idx < 120) score += 1
      }
    }

    if (score <= 0) continue

    const snippet = makeSnippet(d.text, tokens)

    hits.push({
      lessonId: d.lesson.id,
      lessonTitle: d.lesson.title,
      moduleTitle: d.moduleTitle,
      snippet,
      score
    })
  }

  hits.sort((a, b) => b.score - a.score)
  return hits.slice(0, limit)
}

function makeSnippet(text: string, tokens: string[]) {
  let pos = -1
  for (const t of tokens) {
    const idx = text.indexOf(t)
    if (idx !== -1) {
      pos = idx
      break
    }
  }

  const start = Math.max(0, (pos === -1 ? 0 : pos - 60))
  const end = Math.min(text.length, start + 180)
  const slice = text.slice(start, end)
  return (start > 0 ? '…' : '') + slice + (end < text.length ? '…' : '')
}
