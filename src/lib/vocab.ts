export type VocabItem = {
  id: string
  term: string
  meaningRu: string
  example: string
  moduleId: string
  moduleTitle: string
  lessonId: string
  lessonTitle: string
}

export type PhraseItem = {
  id: string
  en: string
  ru: string
  moduleId: string
  moduleTitle: string
  lessonId: string
  lessonTitle: string
}

function slug(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
}

export function collectVocab(course: {
  modules: {
    id: string
    title: string
    lessons: {
      id: string
      title: string
      vocab: { term: string; meaningRu: string; example: string }[]
    }[]
  }[]
}): VocabItem[] {
  const out: VocabItem[] = []

  for (const m of course.modules) {
    for (const l of m.lessons) {
      for (const v of l.vocab) {
        out.push({
          id: `${m.id}:${l.id}:${slug(v.term)}`,
          term: v.term,
          meaningRu: v.meaningRu,
          example: v.example,
          moduleId: m.id,
          moduleTitle: m.title,
          lessonId: l.id,
          lessonTitle: l.title
        })
      }
    }
  }

  const seen = new Set<string>()
  return out.filter((x) => {
    const key = x.term.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function collectPhrases(course: {
  modules: {
    id: string
    title: string
    lessons: {
      id: string
      title: string
      phrases: { en: string; ru: string }[]
    }[]
  }[]
}): PhraseItem[] {
  const out: PhraseItem[] = []

  for (const m of course.modules) {
    for (const l of m.lessons) {
      for (const p of l.phrases) {
        out.push({
          id: `${m.id}:${l.id}:${slug(p.en)}`,
          en: p.en,
          ru: p.ru,
          moduleId: m.id,
          moduleTitle: m.title,
          lessonId: l.id,
          lessonTitle: l.title
        })
      }
    }
  }

  const seen = new Set<string>()
  return out.filter((x) => {
    const key = x.en.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
