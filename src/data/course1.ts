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
    },
    {
      id: 'm2-git-review',
      title: 'Module 2 — Git & Code Review',
      description: 'Ветки, коммиты, PR, ревью: как говорить про код уверенно и спокойно.',
      lessons: [
        {
          id: 'm2-l1',
          title: 'Lesson 1 — Branches, commits, PRs',
          minutes: 13,
          goals: ['Говорить о ветках и PR', 'Понимать merge/rebase на базовом уровне'],
          theory: [
            'Branch — отдельная линия изменений. Обычно под фичу/фикс делают отдельную ветку.',
            'Commit — атомарный набор изменений с сообщением. В идеале: один смысл — один коммит.',
            'Pull request (PR) — запрос на вливание ветки; там обсуждают код и проходят проверки.'
          ],
          vocab: [
            { term: 'branch', meaningRu: 'ветка', example: 'I created a branch for this feature.' },
            { term: 'commit', meaningRu: 'коммит (набор изменений)', example: 'I pushed two commits.' },
            { term: 'pull request', meaningRu: 'пулл‑реквест', example: 'I opened a PR for review.' },
            { term: 'merge', meaningRu: 'сливать изменения', example: 'We can merge after checks pass.' },
            { term: 'rebase', meaningRu: 'перенести коммиты на другую базу', example: 'Please rebase onto main.' }
          ],
          phrases: [
            { en: 'I’ll open a PR.', ru: 'Я открою PR.' },
            { en: 'This PR is ready for review.', ru: 'Этот PR готов к ревью.' },
            { en: 'Could you rebase onto main?', ru: 'Можешь ребейзнуть на main?' },
            { en: 'We can merge once CI is green.', ru: 'Сольём, когда CI будет зелёным.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'q3',
              prompt: 'What is a pull request (PR)?',
              options: [
                { id: 'a', text: 'A request to merge changes into a branch', correct: true },
                { id: 'b', text: 'A type of database index', correct: false },
                { id: 'c', text: 'A Linux command', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'c3',
              sentence: 'This PR is ready for ___.',
              answer: 'review'
            }
          ]
        },
        {
          id: 'm2-l2',
          title: 'Lesson 2 — Review comments: approve / request changes',
          minutes: 12,
          goals: ['Писать комментарии в ревью', 'Корректно просить изменения'],
          theory: [
            'В ревью важно обсуждать код, а не человека. Пиши конкретно и спокойно.',
            '“Approve” — согласен с изменениями. “Request changes” — нужно исправить, прежде чем мёржить.'
          ],
          vocab: [
            { term: 'review', meaningRu: 'код‑ревью', example: 'Thanks for the review.' },
            { term: 'approve', meaningRu: 'апрувнуть', example: 'I can approve this.' },
            { term: 'request changes', meaningRu: 'запросить правки', example: 'I’m requesting changes.' },
            { term: 'nit', meaningRu: 'мелкое замечание (nitpick)', example: 'Nit: rename this variable.' },
            { term: 'suggestion', meaningRu: 'предложение', example: 'Suggestion: extract a helper function.' }
          ],
          phrases: [
            { en: 'Looks good to me.', ru: 'Выглядит хорошо.' },
            { en: 'I have a small nit.', ru: 'Есть мелкое замечание.' },
            { en: 'Please address these comments.', ru: 'Пожалуйста, учти эти комментарии.' },
            { en: 'I’m requesting changes for now.', ru: 'Пока что запрашиваю правки.' }
          ],
          exercises: [
            {
              type: 'matching',
              id: 'm3',
              pairs: [
                { left: 'approve', right: 'accept the changes' },
                { left: 'request changes', right: 'ask to fix before merge' },
                { left: 'nit', right: 'a minor issue' }
              ]
            }
          ]
        },
        {
          id: 'm2-l3',
          title: 'Lesson 3 — Merge conflicts and fixes',
          minutes: 13,
          goals: ['Объяснять конфликт', 'Формулировать план фикса'],
          theory: [
            'Merge conflict — когда Git не может автоматически объединить изменения.',
            'Хорошая практика: подтянуть main, решить конфликт локально, прогнать тесты, обновить PR.'
          ],
          vocab: [
            { term: 'conflict', meaningRu: 'конфликт (слияния)', example: 'There is a merge conflict in this file.' },
            { term: 'resolve', meaningRu: 'разрешить (конфликт)', example: 'I resolved the conflict.' },
            { term: 'pull latest', meaningRu: 'подтянуть последние изменения', example: 'I pulled the latest main.' },
            { term: 'run tests', meaningRu: 'прогнать тесты', example: 'I ran tests after resolving.' }
          ],
          phrases: [
            { en: 'I’ll resolve the conflict and update the PR.', ru: 'Я решу конфликт и обновлю PR.' },
            { en: 'I pulled the latest main.', ru: 'Я подтянул последний main.' },
            { en: 'All checks are green.', ru: 'Все проверки зелёные.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'q4',
              prompt: 'When do merge conflicts happen?',
              options: [
                { id: 'a', text: 'When Git cannot auto-merge changes', correct: true },
                { id: 'b', text: 'When you type faster', correct: false },
                { id: 'c', text: 'Only on Windows', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'c4',
              sentence: 'I resolved the ___.',
              answer: 'conflict'
            }
          ]
        }
      ]
    }
  ]
}
