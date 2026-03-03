import type { Course } from '../types'

export const course1: Course = {
  id: 'it-english-foundations',
  title: 'IT English Foundations',
  subtitle: 'Курс 1 (MVP): базовый английский для разработки и общения в команде',
  modules: [
    {
      id: 'm1-workflow',
      title: 'Module 1 — Workflow & Communication',
      description: 'Тикеты, оценки, блокеры, короткие статус‑апдейты без лишней воды.',
      lessons: [
        {
          id: 'm1-l1',
          title: 'Lesson 1 — Issues, scope, estimates',
          minutes: 12,
          goals: [
            'Понимать ключевые слова: issue, scope, estimate, deadline',
            'Собрать 5–7 рабочих фраз для ежедневной коммуникации'
          ],
          theory: [
            'В IT слово “issue” часто означает задачу или проблему в трекере. Контекст решает: issue can be a bug, a task, a discussion item.',
            '“Scope” — объём работы (что входит и не входит). Уточнение scope спасает от бесконечного расширения требований.',
            '“Estimate” — оценка времени/усилий. Обычно это не обещание, а прогноз на текущих вводных.'
          ],
          vocab: [
            {
              term: 'issue',
              meaningRu: 'задача/проблема (в трекере)',
              example: 'I created an issue for this bug.'
            },
            {
              term: 'scope',
              meaningRu: 'объём работ, границы задачи',
              example: 'Let’s define the scope before we start.'
            },
            {
              term: 'estimate',
              meaningRu: 'оценка (времени/усилий)',
              example: 'My estimate is two days.'
            },
            {
              term: 'deadline',
              meaningRu: 'дедлайн, крайний срок',
              example: 'The deadline is Friday.'
            },
            {
              term: 'blocker',
              meaningRu: 'блокер, причина остановки',
              example: 'I have a blocker: missing API docs.'
            }
          ],
          phrases: [
            { en: 'I can take this issue.', ru: 'Я могу взять эту задачу.' },
            { en: 'Let’s narrow down the scope.', ru: 'Давай сузим объём работ.' },
            { en: 'My estimate is 1–2 days.', ru: 'Моя оценка — 1–2 дня.' },
            { en: 'I’m blocked by …', ru: 'Я заблокирован из‑за …' },
            { en: 'I’ll post an update soon.', ru: 'Скоро напишу апдейт.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'q1',
              prompt: 'What does “scope” mean in a task context?',
              options: [
                { id: 'a', text: 'A programming language', correct: false },
                { id: 'b', text: 'The boundaries/amount of work', correct: true, explain: 'Scope = what is included/excluded.' },
                { id: 'c', text: 'A type of bug', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'c1',
              sentence: 'My ___ is two days.',
              answer: 'estimate',
              hint: 'Time prediction.'
            },
            {
              type: 'matching',
              id: 'm1',
              pairs: [
                { left: 'deadline', right: 'the latest acceptable time' },
                { left: 'blocker', right: 'something that prevents progress' },
                { left: 'issue', right: 'a tracked task/problem' }
              ]
            }
          ]
        },
        {
          id: 'm1-l2',
          title: 'Lesson 2 — Status updates (standup style)',
          minutes: 10,
          goals: ['Дать короткий апдейт', 'Научиться формулировать next steps'],
          theory: [
            'Хороший статус‑апдейт короткий: что сделал, что сделаю, что мешает.',
            '“Next steps” — следующий конкретный шаг, а не абстрактный план.'
          ],
          vocab: [
            { term: 'update', meaningRu: 'апдейт, обновление статуса', example: 'Quick update: I fixed the tests.' },
            { term: 'next step', meaningRu: 'следующий шаг', example: 'Next step: verify the fix in staging.' },
            { term: 'staging', meaningRu: 'стейджинг (предпрод)', example: 'It works in staging.' }
          ],
          phrases: [
            { en: 'Yesterday I worked on …', ru: 'Вчера я работал над …' },
            { en: 'Today I’m going to …', ru: 'Сегодня я собираюсь …' },
            { en: 'I’m blocked by …', ru: 'Я заблокирован из‑за …' }
          ],
          exercises: [
            {
              type: 'cloze',
              id: 'c2',
              sentence: 'Next ___: verify the fix in staging.',
              answer: 'step'
            },
            {
              type: 'quiz',
              id: 'q2',
              prompt: 'A good standup update usually includes:',
              options: [
                { id: 'a', text: 'Work done, plan, blockers', correct: true },
                { id: 'b', text: 'Your whole CV', correct: false },
                { id: 'c', text: 'Only jokes', correct: false }
              ]
            }
          ]
        },
        {
          id: 'm1-l3',
          title: 'Lesson 3 — Asking for clarification',
          minutes: 11,
          goals: ['Уточнять требования', 'Писать вопросы в тикете/чате'],
          theory: [
            'Уточняющие вопросы экономят время. Лучше спросить заранее, чем переделывать.',
            'Полезно отделять “must have” от “nice to have”.'
          ],
          vocab: [
            { term: 'requirement', meaningRu: 'требование', example: 'Is this a hard requirement?' },
            { term: 'clarify', meaningRu: 'уточнять', example: 'Could you clarify the expected behavior?' },
            { term: 'expected behavior', meaningRu: 'ожидаемое поведение', example: 'What is the expected behavior here?' }
          ],
          phrases: [
            { en: 'Could you clarify …?', ru: 'Можешь уточнить …?' },
            { en: 'Do we need to support …?', ru: 'Нужно ли поддерживать …?' },
            { en: 'What is the expected behavior?', ru: 'Какое ожидаемое поведение?' }
          ],
          exercises: [
            {
              type: 'matching',
              id: 'm2',
              pairs: [
                { left: 'clarify', right: 'make something clear' },
                { left: 'requirement', right: 'a needed condition' },
                { left: 'expected behavior', right: 'what should happen' }
              ]
            }
          ]
        }
      ]
    }
  ]
}
