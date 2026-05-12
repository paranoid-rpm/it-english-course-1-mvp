import type { Course } from '../types'

export const course1: Course = {
  id: 'it-english-foundations',
  title: 'IT English Foundations',
  subtitle: 'Курс 1: практический английский для разработки, релизов и командной коммуникации',
  modules: [
    {
      id: 'm1-workflow',
      title: 'Module 1 - Workflow & Communication',
      description: 'База коммуникации: задачи, оценки, статусы и вопросы по требованиям.',
      lessons: [
        {
          id: 'm1-l1',
          title: 'Lesson 1 - Issues, scope, estimates',
          minutes: 14,
          goals: [
            'Понимать ключевые слова: issue, scope, estimate, deadline',
            'Давать короткие и понятные оценки сроков'
          ],
          theory: [
            'В IT слово issue обычно означает задачу или проблему в трекере. Контекст решает значение.',
            'Scope - это границы задачи: что входит в работу и что не входит.',
            'Estimate - это прогноз, а не обещание. При новой информации оценка может меняться.'
          ],
          vocab: [
            {
              term: 'issue',
              meaningRu: 'задача или проблема в трекере',
              example: 'I created an issue for this bug.'
            },
            {
              term: 'scope',
              meaningRu: 'границы задачи, объем работ',
              example: 'Let\'s define the scope before we start.'
            },
            {
              term: 'estimate',
              meaningRu: 'оценка времени или усилий',
              example: 'My estimate is 1-2 days.'
            },
            {
              term: 'deadline',
              meaningRu: 'крайний срок',
              example: 'The deadline is Friday.'
            },
            {
              term: 'blocker',
              meaningRu: 'блокер, причина остановки работы',
              example: 'I have a blocker: I need API access.'
            }
          ],
          phrases: [
            { en: 'I can take this issue.', ru: 'Я могу взять эту задачу.' },
            { en: 'Let\'s narrow down the scope.', ru: 'Давай сузим объем задачи.' },
            { en: 'My estimate is 1-2 days.', ru: 'Моя оценка - 1-2 дня.' },
            { en: 'I\'m blocked by missing credentials.', ru: 'Я заблокирован из-за отсутствующих доступов.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'm1l1-q1',
              prompt: 'What does "scope" mean in project communication?',
              options: [
                { id: 'a', text: 'A programming language', correct: false },
                { id: 'b', text: 'The boundaries of work', correct: true, explain: 'Scope defines what is included and excluded.' },
                { id: 'c', text: 'A test environment', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'm1l1-c1',
              sentence: 'My ___ is 1-2 days.',
              answer: 'estimate',
              hint: 'Time prediction for a task.'
            },
            {
              type: 'matching',
              id: 'm1l1-m1',
              pairs: [
                { left: 'deadline', right: 'the latest acceptable date' },
                { left: 'blocker', right: 'something that stops progress' },
                { left: 'issue', right: 'a tracked task or problem' }
              ]
            }
          ]
        },
        {
          id: 'm1-l2',
          title: 'Lesson 2 - Status updates (standup style)',
          minutes: 12,
          goals: [
            'Делать короткие ежедневные апдейты',
            'Формулировать конкретный next step'
          ],
          theory: [
            'Хороший статус-апдейт отвечает на три вопроса: что сделал, что делаю, что мешает.',
            'Next step должен быть конкретным и проверяемым, без абстрактных формулировок.'
          ],
          vocab: [
            { term: 'status update', meaningRu: 'краткий апдейт по текущему статусу', example: 'Quick status update: tests are passing.' },
            { term: 'next step', meaningRu: 'следующий конкретный шаг', example: 'Next step: verify the fix in staging.' },
            { term: 'staging', meaningRu: 'предпрод окружение', example: 'The patch works in staging.' },
            { term: 'handoff', meaningRu: 'передача задачи другому участнику', example: 'I will handoff this task after lunch.' }
          ],
          phrases: [
            { en: 'Yesterday I finished the API tests.', ru: 'Вчера я завершил API-тесты.' },
            { en: 'Today I am working on the bug fix.', ru: 'Сегодня я работаю над исправлением бага.' },
            { en: 'My next step is updating the PR description.', ru: 'Мой следующий шаг - обновить описание PR.' },
            { en: 'I have one blocker: missing access to staging.', ru: 'У меня один блокер: нет доступа к staging.' }
          ],
          exercises: [
            {
              type: 'cloze',
              id: 'm1l2-c1',
              sentence: 'Next ___: run regression tests in staging.',
              answer: 'step'
            },
            {
              type: 'quiz',
              id: 'm1l2-q1',
              prompt: 'A strong standup update usually includes:',
              options: [
                { id: 'a', text: 'Only personal plans', correct: false },
                { id: 'b', text: 'Done, doing, blockers', correct: true, explain: 'This format is clear and actionable.' },
                { id: 'c', text: 'A full architecture presentation', correct: false }
              ]
            },
            {
              type: 'matching',
              id: 'm1l2-m1',
              pairs: [
                { left: 'status update', right: 'short progress message' },
                { left: 'handoff', right: 'transfer of task ownership' },
                { left: 'staging', right: 'pre-production environment' }
              ]
            }
          ]
        },
        {
          id: 'm1-l3',
          title: 'Lesson 3 - Asking for clarification',
          minutes: 13,
          goals: [
            'Уточнять требования без конфликта',
            'Задавать вопросы, которые экономят время команды'
          ],
          theory: [
            'Правильные уточняющие вопросы снижают риск переделок и недопонимания.',
            'Полезно разделять обязательные требования и желательные улучшения.'
          ],
          vocab: [
            { term: 'requirement', meaningRu: 'требование', example: 'Is this a hard requirement?' },
            { term: 'clarify', meaningRu: 'уточнять', example: 'Could you clarify the expected behavior?' },
            { term: 'acceptance criteria', meaningRu: 'критерии приемки', example: 'Can we add acceptance criteria to the ticket?' },
            { term: 'edge case', meaningRu: 'пограничный случай', example: 'What is the expected behavior for this edge case?' }
          ],
          phrases: [
            { en: 'Could you clarify the expected behavior?', ru: 'Можешь уточнить ожидаемое поведение?' },
            { en: 'Do we need to support older browsers?', ru: 'Нужно ли поддерживать старые браузеры?' },
            { en: 'Is this requirement mandatory?', ru: 'Это требование обязательное?' },
            { en: 'Can you share an example input and output?', ru: 'Можешь прислать пример входных и выходных данных?' }
          ],
          exercises: [
            {
              type: 'matching',
              id: 'm1l3-m1',
              pairs: [
                { left: 'clarify', right: 'make details clear' },
                { left: 'acceptance criteria', right: 'conditions for done' },
                { left: 'edge case', right: 'unusual but possible scenario' }
              ]
            },
            {
              type: 'quiz',
              id: 'm1l3-q1',
              prompt: 'Which question is best for clarification?',
              options: [
                { id: 'a', text: 'Why is this task so weird?', correct: false },
                { id: 'b', text: 'Could you share expected input and output?', correct: true },
                { id: 'c', text: 'Can we skip this task?', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'm1l3-c1',
              sentence: 'Could you ___ the acceptance criteria?',
              answer: 'clarify'
            }
          ]
        }
      ]
    },
    {
      id: 'm2-git-review',
      title: 'Module 2 - Git & Code Review',
      description: 'Ветки, PR, ревью и безопасное слияние без лишнего стресса.',
      lessons: [
        {
          id: 'm2-l1',
          title: 'Lesson 1 - Branches, commits, PRs',
          minutes: 14,
          goals: [
            'Уверенно говорить о ветках и pull request',
            'Использовать точные фразы про merge и rebase'
          ],
          theory: [
            'Branch - отдельная линия изменений под фичу или фикс.',
            'Commit - атомарный набор изменений с понятным сообщением.',
            'Pull request - запрос на слияние и обсуждение изменений.'
          ],
          vocab: [
            { term: 'branch', meaningRu: 'ветка', example: 'I created a branch for this feature.' },
            { term: 'commit', meaningRu: 'коммит', example: 'I pushed two commits.' },
            { term: 'pull request', meaningRu: 'pull request (PR)', example: 'I opened a pull request for review.' },
            { term: 'rebase', meaningRu: 'перебазировать ветку', example: 'Could you rebase this branch onto main?' },
            { term: 'merge', meaningRu: 'слить изменения', example: 'We can merge after checks pass.' }
          ],
          phrases: [
            { en: 'Could you rebase this branch onto main?', ru: 'Можешь перебазировать эту ветку на main?' },
            { en: 'I pulled the latest changes from main.', ru: 'Я подтянул последние изменения из main.' },
            { en: 'This pull request is ready for review.', ru: 'Этот pull request готов к ревью.' },
            { en: 'All checks are green.', ru: 'Все проверки зеленые.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'm2l1-q1',
              prompt: 'What is a pull request?',
              options: [
                { id: 'a', text: 'A request to merge changes into a branch', correct: true },
                { id: 'b', text: 'A secret Git command', correct: false },
                { id: 'c', text: 'A type of server', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'm2l1-c1',
              sentence: 'All checks are ___.',
              answer: 'green'
            },
            {
              type: 'matching',
              id: 'm2l1-m1',
              pairs: [
                { left: 'rebase', right: 'move commits onto another base' },
                { left: 'merge', right: 'combine branches' },
                { left: 'commit', right: 'atomic set of changes' }
              ]
            }
          ]
        },
        {
          id: 'm2-l2',
          title: 'Lesson 2 - Review comments: approve / request changes',
          minutes: 13,
          goals: [
            'Писать конструктивные review-комментарии',
            'Корректно запрашивать доработки'
          ],
          theory: [
            'В ревью мы обсуждаем код и поведение, а не личность автора.',
            'Формулировка должна быть конкретной: что исправить и почему.'
          ],
          vocab: [
            { term: 'approve', meaningRu: 'подтвердить изменения', example: 'I can approve this PR.' },
            { term: 'request changes', meaningRu: 'запросить правки перед merge', example: 'I am requesting changes before merge.' },
            { term: 'nit', meaningRu: 'мелкое замечание', example: 'Nit: please rename this variable.' },
            { term: 'suggestion', meaningRu: 'предложение по улучшению', example: 'Suggestion: extract this into a helper.' }
          ],
          phrases: [
            { en: 'Looks good overall, I left one suggestion.', ru: 'В целом все хорошо, оставил одно предложение.' },
            { en: 'Please address these comments and ping me.', ru: 'Пожалуйста, учти комментарии и напиши мне.' },
            { en: 'I am requesting changes for now.', ru: 'Пока что запрашиваю правки.' },
            { en: 'Thanks for the quick update.', ru: 'Спасибо за быстрое обновление.' }
          ],
          exercises: [
            {
              type: 'matching',
              id: 'm2l2-m1',
              pairs: [
                { left: 'approve', right: 'accept the PR changes' },
                { left: 'request changes', right: 'ask to fix issues before merge' },
                { left: 'nit', right: 'minor improvement comment' }
              ]
            },
            {
              type: 'quiz',
              id: 'm2l2-q1',
              prompt: 'Which review comment sounds most professional?',
              options: [
                { id: 'a', text: 'This is bad, rewrite everything.', correct: false },
                { id: 'b', text: 'Please add a null check here to avoid runtime errors.', correct: true },
                { id: 'c', text: 'I do not like this.', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'm2l2-c1',
              sentence: 'I am requesting ___ before merge.',
              answer: 'changes'
            }
          ]
        },
        {
          id: 'm2-l3',
          title: 'Lesson 3 - Merge conflicts and release safety',
          minutes: 14,
          goals: [
            'Объяснять конфликт слияния и шаги фикса',
            'Говорить о проверках перед релизом'
          ],
          theory: [
            'Merge conflict возникает, когда Git не может автоматически объединить изменения.',
            'Безопасный план: обновить main, решить конфликт локально, прогнать тесты и обновить PR.'
          ],
          vocab: [
            { term: 'conflict', meaningRu: 'конфликт слияния', example: 'There is a merge conflict in this file.' },
            { term: 'resolve', meaningRu: 'разрешить конфликт', example: 'I resolved the conflict and pushed updates.' },
            { term: 'smoke test', meaningRu: 'быстрая проверка критичного пути', example: 'Let us run a smoke test after deployment.' },
            { term: 'rollback', meaningRu: 'откат изменений', example: 'We can rollback if the release fails.' }
          ],
          phrases: [
            { en: 'I resolved the conflict and updated the PR.', ru: 'Я решил конфликт и обновил PR.' },
            { en: 'Let us run smoke tests before release.', ru: 'Давай прогоним smoke-тесты перед релизом.' },
            { en: 'If needed, we can rollback safely.', ru: 'Если нужно, мы можем безопасно откатиться.' },
            { en: 'CI is green, we are ready to merge.', ru: 'CI зеленый, мы готовы к слиянию.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'm2l3-q1',
              prompt: 'When do merge conflicts happen?',
              options: [
                { id: 'a', text: 'When Git cannot auto-merge changes', correct: true },
                { id: 'b', text: 'When PR title is too short', correct: false },
                { id: 'c', text: 'Only on Linux', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'm2l3-c1',
              sentence: 'I resolved the ___ and updated the PR.',
              answer: 'conflict'
            },
            {
              type: 'matching',
              id: 'm2l3-m1',
              pairs: [
                { left: 'smoke test', right: 'quick critical-path check' },
                { left: 'rollback', right: 'revert release changes safely' },
                { left: 'resolve', right: 'fix and settle a conflict' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'm3-debugging',
      title: 'Module 3 - Debugging & Backend Delivery',
      description: 'Слова и фразы для API, логов, инцидентов и производительности.',
      lessons: [
        {
          id: 'm3-l1',
          title: 'Lesson 1 - API incidents and logs',
          minutes: 13,
          goals: [
            'Описывать инцидент на английском четко и спокойно',
            'Работать с терминами log, endpoint, timeout, retry'
          ],
          theory: [
            'Во время инцидента важно фиксировать факты: что упало, где, когда, с каким влиянием.',
            'Хорошее сообщение об инциденте включает статус, гипотезу и следующий шаг.'
          ],
          vocab: [
            { term: 'incident', meaningRu: 'инцидент', example: 'We have an incident in production.' },
            { term: 'endpoint', meaningRu: 'endpoint API', example: 'The /payments endpoint is timing out.' },
            { term: 'timeout', meaningRu: 'превышение времени ожидания', example: 'Requests fail due to timeout.' },
            { term: 'retry', meaningRu: 'повторная попытка', example: 'The worker retries failed requests.' },
            { term: 'log', meaningRu: 'лог', example: 'I checked the error logs in Kibana.' }
          ],
          phrases: [
            { en: 'Production incident: checkout is unavailable.', ru: 'Инцидент в продакшене: checkout недоступен.' },
            { en: 'The API returns 504 timeout.', ru: 'API возвращает 504 timeout.' },
            { en: 'I am checking logs and metrics now.', ru: 'Сейчас я проверяю логи и метрики.' },
            { en: 'Next step: rollback the last deployment.', ru: 'Следующий шаг: откатить последний деплой.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'm3l1-q1',
              prompt: 'What does timeout usually mean?',
              options: [
                { id: 'a', text: 'The response took too long', correct: true },
                { id: 'b', text: 'A successful deployment', correct: false },
                { id: 'c', text: 'A new feature request', correct: false }
              ]
            },
            {
              type: 'cloze',
              id: 'm3l1-c1',
              sentence: 'The worker will ___ the failed request.',
              answer: 'retry'
            },
            {
              type: 'matching',
              id: 'm3l1-m1',
              pairs: [
                { left: 'incident', right: 'unexpected service disruption' },
                { left: 'endpoint', right: 'specific API address' },
                { left: 'log', right: 'record of system events' }
              ]
            }
          ]
        },
        {
          id: 'm3-l2',
          title: 'Lesson 2 - Performance and monitoring',
          minutes: 13,
          goals: [
            'Обсуждать latency, throughput и bottlenecks',
            'Делать короткие отчеты по результатам оптимизации'
          ],
          theory: [
            'Latency описывает время ответа. Throughput - сколько запросов система обрабатывает за период.',
            'При обсуждении перформанса полезно указывать baseline и конкретные цифры до/после.'
          ],
          vocab: [
            { term: 'latency', meaningRu: 'задержка ответа', example: 'P95 latency increased after the release.' },
            { term: 'throughput', meaningRu: 'пропускная способность', example: 'Throughput is 500 requests per second.' },
            { term: 'bottleneck', meaningRu: 'узкое место', example: 'Database writes are the current bottleneck.' },
            { term: 'baseline', meaningRu: 'базовый уровень для сравнения', example: 'We need a baseline before optimization.' }
          ],
          phrases: [
            { en: 'Latency dropped from 420 ms to 180 ms.', ru: 'Задержка снизилась с 420 мс до 180 мс.' },
            { en: 'The bottleneck is in database writes.', ru: 'Узкое место находится в записи в базу.' },
            { en: 'We need a baseline before changes.', ru: 'Нам нужен базовый уровень до изменений.' },
            { en: 'Throughput improved by 30 percent.', ru: 'Пропускная способность выросла на 30 процентов.' }
          ],
          exercises: [
            {
              type: 'cloze',
              id: 'm3l2-c1',
              sentence: 'The current ___ is in the caching layer.',
              answer: 'bottleneck'
            },
            {
              type: 'quiz',
              id: 'm3l2-q1',
              prompt: 'What is throughput?',
              options: [
                { id: 'a', text: 'How many requests are processed over time', correct: true },
                { id: 'b', text: 'How long one request waits', correct: false },
                { id: 'c', text: 'A type of UI component', correct: false }
              ]
            },
            {
              type: 'matching',
              id: 'm3l2-m1',
              pairs: [
                { left: 'latency', right: 'response delay' },
                { left: 'baseline', right: 'reference value before changes' },
                { left: 'throughput', right: 'amount processed per period' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'm4-team-product',
      title: 'Module 4 - Product, Meetings, Async Work',
      description: 'Коммуникация с командой и продуктом: постановка, синки и async-переписка.',
      lessons: [
        {
          id: 'm4-l1',
          title: 'Lesson 1 - Requirements and acceptance criteria',
          minutes: 12,
          goals: [
            'Понимать язык постановки задачи',
            'Писать и уточнять acceptance criteria'
          ],
          theory: [
            'Четкие acceptance criteria уменьшают число спорных интерпретаций.',
            'Хорошая формулировка измерима: есть ожидаемый результат и условия проверки.'
          ],
          vocab: [
            { term: 'user story', meaningRu: 'пользовательская история', example: 'This user story is missing edge cases.' },
            { term: 'acceptance criteria', meaningRu: 'критерии приемки', example: 'Please add acceptance criteria to the task.' },
            { term: 'priority', meaningRu: 'приоритет', example: 'What is the priority of this bug?' },
            { term: 'dependency', meaningRu: 'зависимость от другой задачи', example: 'This feature has a dependency on billing.' }
          ],
          phrases: [
            { en: 'Could we make the acceptance criteria more specific?', ru: 'Можем сделать критерии приемки более конкретными?' },
            { en: 'What is the business priority for this task?', ru: 'Какой бизнес-приоритет у этой задачи?' },
            { en: 'This item depends on the auth service update.', ru: 'Этот пункт зависит от обновления сервиса авторизации.' },
            { en: 'Let us split this story into smaller tasks.', ru: 'Давай разобьем эту историю на более мелкие задачи.' }
          ],
          exercises: [
            {
              type: 'quiz',
              id: 'm4l1-q1',
              prompt: 'Why are acceptance criteria important?',
              options: [
                { id: 'a', text: 'They reduce ambiguity and define done', correct: true },
                { id: 'b', text: 'They replace testing completely', correct: false },
                { id: 'c', text: 'They are only needed for designers', correct: false }
              ]
            },
            {
              type: 'matching',
              id: 'm4l1-m1',
              pairs: [
                { left: 'priority', right: 'business importance level' },
                { left: 'dependency', right: 'something required from another task' },
                { left: 'user story', right: 'feature need from user perspective' }
              ]
            },
            {
              type: 'cloze',
              id: 'm4l1-c1',
              sentence: 'Please add acceptance ___ to the ticket.',
              answer: 'criteria'
            }
          ]
        },
        {
          id: 'm4-l2',
          title: 'Lesson 2 - Meetings and async communication',
          minutes: 12,
          goals: [
            'Участвовать в созвонах и async-обсуждениях на английском',
            'Договариваться о решениях и фиксировать их письменно'
          ],
          theory: [
            'После обсуждения важно зафиксировать decision summary: решение, риски, владелец и дедлайн.',
            'В async-формате полезны короткие структурированные сообщения: context, decision, next action.'
          ],
          vocab: [
            { term: 'agenda', meaningRu: 'повестка встречи', example: 'Can you share the meeting agenda?' },
            { term: 'action item', meaningRu: 'конкретная задача после встречи', example: 'I took an action item for API docs.' },
            { term: 'owner', meaningRu: 'ответственный', example: 'Who is the owner of this task?' },
            { term: 'follow-up', meaningRu: 'дальнейшее действие после обсуждения', example: 'I will send a follow-up in Slack.' }
          ],
          phrases: [
            { en: 'Let us align on the final decision.', ru: 'Давай согласуем финальное решение.' },
            { en: 'I will post a short summary after the call.', ru: 'Я отправлю короткое резюме после созвона.' },
            { en: 'Could you take this action item?', ru: 'Можешь взять этот action item?' },
            { en: 'Please confirm the owner and deadline.', ru: 'Пожалуйста, подтвердите ответственного и срок.' }
          ],
          exercises: [
            {
              type: 'cloze',
              id: 'm4l2-c1',
              sentence: 'I will send a ___ after the meeting.',
              answer: 'follow-up'
            },
            {
              type: 'quiz',
              id: 'm4l2-q1',
              prompt: 'What should a decision summary include?',
              options: [
                { id: 'a', text: 'Decision, owner, and next action', correct: true },
                { id: 'b', text: 'Only emojis and jokes', correct: false },
                { id: 'c', text: 'Unrelated project history', correct: false }
              ]
            },
            {
              type: 'matching',
              id: 'm4l2-m1',
              pairs: [
                { left: 'agenda', right: 'meeting plan and topics' },
                { left: 'action item', right: 'concrete next task' },
                { left: 'owner', right: 'person responsible for result' }
              ]
            }
          ]
        }
      ]
    }
  ]
}
