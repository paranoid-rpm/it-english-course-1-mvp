export type Progress = {
  completedLessonIds: Record<string, true>
  answers: Record<string, { correct: number; total: number }>
}

const KEY = 'it-english.progress.v1'

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { completedLessonIds: {}, answers: {} }
    const data = JSON.parse(raw) as Progress
    if (!data || typeof data !== 'object') return { completedLessonIds: {}, answers: {} }
    return {
      completedLessonIds: data.completedLessonIds ?? {},
      answers: data.answers ?? {}
    }
  } catch {
    return { completedLessonIds: {}, answers: {} }
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem(KEY, JSON.stringify(progress))
}

export function markLessonCompleted(lessonId: string) {
  const p = loadProgress()
  p.completedLessonIds[lessonId] = true
  saveProgress(p)
}

export function recordExerciseResult(exerciseId: string, correct: number, total: number) {
  const p = loadProgress()
  p.answers[exerciseId] = { correct, total }
  saveProgress(p)
}
