import type { DictationWord, RuleExercise } from '../types'

export const programmerWords: DictationWord[] = [
  { id: 'w-algorithm', term: 'algorithm', meaningRu: 'алгоритм', hint: 'Пошаговый способ решить задачу.' },
  { id: 'w-bug', term: 'bug', meaningRu: 'ошибка в программе', hint: 'Нежелательное поведение приложения.' },
  { id: 'w-feature', term: 'feature', meaningRu: 'фича, функциональность' },
  { id: 'w-deploy', term: 'deploy', meaningRu: 'развернуть в окружении' },
  { id: 'w-repository', term: 'repository', meaningRu: 'репозиторий' },
  { id: 'w-branch', term: 'branch', meaningRu: 'ветка в Git' },
  { id: 'w-commit', term: 'commit', meaningRu: 'коммит, набор изменений' },
  { id: 'w-pr', term: 'pull request', meaningRu: 'запрос на слияние' },
  { id: 'w-merge-conflict', term: 'merge conflict', meaningRu: 'конфликт слияния' },
  { id: 'w-deadline', term: 'deadline', meaningRu: 'крайний срок' },
  { id: 'w-estimate', term: 'estimate', meaningRu: 'оценка по времени/объему' },
  { id: 'w-requirement', term: 'requirement', meaningRu: 'требование' },
  { id: 'w-rollback', term: 'rollback', meaningRu: 'откат изменений' },
  { id: 'w-refactor', term: 'refactor', meaningRu: 'рефакторить код' },
  { id: 'w-coverage', term: 'test coverage', meaningRu: 'покрытие тестами' },
  { id: 'w-scalability', term: 'scalability', meaningRu: 'масштабируемость' },
  { id: 'w-latency', term: 'latency', meaningRu: 'задержка ответа системы' },
  { id: 'w-throughput', term: 'throughput', meaningRu: 'пропускная способность' },
  { id: 'w-authn', term: 'authentication', meaningRu: 'аутентификация' },
  { id: 'w-authz', term: 'authorization', meaningRu: 'авторизация, права доступа' },
  { id: 'w-logging', term: 'logging', meaningRu: 'ведение логов' },
  { id: 'w-debugging', term: 'debugging', meaningRu: 'поиск и исправление ошибок' },
  { id: 'w-framework', term: 'framework', meaningRu: 'фреймворк' },
  { id: 'w-library', term: 'library', meaningRu: 'библиотека кода' },
  { id: 'w-endpoint', term: 'endpoint', meaningRu: 'конечная точка API' },
  { id: 'w-backlog', term: 'backlog', meaningRu: 'беклог задач' },
  { id: 'w-sprint', term: 'sprint', meaningRu: 'спринт' },
  { id: 'w-release', term: 'release', meaningRu: 'релиз' },
  { id: 'w-hotfix', term: 'hotfix', meaningRu: 'срочный фикс в продакшене' },
  { id: 'w-tech-debt', term: 'technical debt', meaningRu: 'технический долг' }
]

export const grammarDictation: RuleExercise[] = [
  {
    id: 'r-1',
    title: 'Артикли',
    rule: 'Неопределенный артикль a/an используем, когда впервые упоминаем объект.',
    sentence: 'I found ___ bug in the payment service.',
    answer: 'a',
    explanation: 'Bug упоминается впервые, значит нужен артикль a.'
  },
  {
    id: 'r-2',
    title: 'Present Perfect',
    rule: 'Для результата к текущему моменту используем have/has + V3.',
    sentence: 'We ___ deployed the hotfix.',
    answer: 'have',
    explanation: 'С подлежащим we нужен have: We have deployed.'
  },
  {
    id: 'r-3',
    title: 'Предлоги',
    rule: 'Для веток и платформ чаще используем on: on main, on staging.',
    sentence: 'Could you rebase this branch ___ main?',
    answer: 'onto',
    explanation: 'В контексте rebase корректно: rebase onto main.'
  },
  {
    id: 'r-4',
    title: 'Вежливая просьба',
    rule: 'Could you + глагол помогает звучать мягко и профессионально.',
    sentence: '___ you share the latest logs?',
    answer: 'Could',
    explanation: 'Для вежливой просьбы: Could you share ...'
  },
  {
    id: 'r-5',
    title: 'Условные предложения',
    rule: 'First conditional: If + Present Simple, will + глагол.',
    sentence: 'If tests pass, we ___ merge the PR.',
    answer: 'will',
    explanation: 'Правильная форма: If tests pass, we will merge.'
  },
  {
    id: 'r-6',
    title: 'Герундий после avoid',
    rule: 'После avoid используем глагол с -ing.',
    sentence: 'Let’s avoid ___ unrelated files.',
    answer: 'changing',
    explanation: 'После avoid нужен герундий: avoid changing.'
  },
  {
    id: 'r-7',
    title: 'Present Continuous',
    rule: 'Для действий в процессе используем am/is/are + V-ing.',
    sentence: 'I am currently ___ the issue.',
    answer: 'investigating',
    explanation: 'Сейчас выполняется действие: am investigating.'
  },
  {
    id: 'r-8',
    title: 'Существительное во множественном числе',
    rule: 'После many используем множественное число.',
    sentence: 'There are many open ___ in this module.',
    answer: 'issues',
    explanation: 'После many нужна форма issues.'
  },
  {
    id: 'r-9',
    title: 'Модальный глагол should',
    rule: 'Should для рекомендаций и best practices.',
    sentence: 'You ___ add a test for this edge case.',
    answer: 'should',
    explanation: 'Совет оформляем с should.'
  },
  {
    id: 'r-10',
    title: 'Предлог for',
    rule: 'For часто используется для обозначения цели или объекта назначения.',
    sentence: 'I created a ticket ___ the API timeout bug.',
    answer: 'for',
    explanation: 'Правильно: a ticket for the bug.'
  }
]
