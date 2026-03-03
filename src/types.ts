export type LessonId = string

export type LessonExercise =
  | {
      type: 'quiz'
      id: string
      prompt: string
      options: { id: string; text: string; correct: boolean; explain?: string }[]
    }
  | {
      type: 'cloze'
      id: string
      sentence: string
      answer: string
      hint?: string
    }
  | {
      type: 'matching'
      id: string
      pairs: { left: string; right: string }[]
    }

export type Lesson = {
  id: LessonId
  title: string
  minutes: number
  goals: string[]
  theory: string[]
  vocab: { term: string; meaningRu: string; example: string }[]
  phrases: { en: string; ru: string }[]
  exercises: LessonExercise[]
}

export type Module = {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export type Course = {
  id: string
  title: string
  subtitle: string
  modules: Module[]
}
