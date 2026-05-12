import type { Book } from '../types'

export const literature: Book[] = [
  {
    id: 'book-pro-git',
    title: 'Pro Git (2nd Edition)',
    author: 'Scott Chacon, Ben Straub',
    level: 'Beginner',
    language: 'EN',
    summary: 'Лучшая бесплатная книга для уверенной работы с Git в команде.',
    whatInside: [
      'Базовые и продвинутые команды Git',
      'Работа с ветками, rebase и merge',
      'Коллаборация через pull request и review'
    ],
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/s?k=Pro+Git+Scott+Chacon' },
      { label: 'Ozon', url: 'https://www.ozon.ru/search/?text=Pro%20Git' }
    ],
    readOnlineUrl: 'https://git-scm.com/book/en/v2',
    downloadUrl: 'https://github.com/progit/progit2/releases/download/2.1.440/progit.pdf',
    onSiteNotes: [
      'Начни с глав 1-3: это быстрый путь к уверенной работе с ветками и коммитами.',
      'Для текущего курса особенно важны главы про collaboration и rewriting history.'
    ]
  },
  {
    id: 'book-eloquent-js',
    title: 'Eloquent JavaScript (3rd Edition)',
    author: 'Marijn Haverbeke',
    level: 'Beginner',
    language: 'EN',
    summary: 'Практичная книга по JavaScript с сильным акцентом на мышление и практику.',
    whatInside: [
      'База синтаксиса и структуры языка',
      'Функции, объекты, асинхронность',
      'Проекты для закрепления материала'
    ],
    buyLinks: [
      { label: 'No Starch Press', url: 'https://nostarch.com/eloquentjavascript' },
      { label: 'Ozon', url: 'https://www.ozon.ru/search/?text=Eloquent%20JavaScript' }
    ],
    readOnlineUrl: 'https://eloquentjavascript.net/',
    downloadUrl: 'https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf',
    onSiteNotes: [
      'Отлично подходит для ежедневного чтения по 20-30 минут.',
      'Глава 2-5 усилят технический английский и базу для собеседований.'
    ]
  },
  {
    id: 'book-linux-command',
    title: 'The Linux Command Line (2nd Edition)',
    author: 'William Shotts',
    level: 'Intermediate',
    language: 'EN',
    summary: 'Пошаговая книга по командной строке, автоматизации и shell-скриптам.',
    whatInside: [
      'Базовые команды и работа с файлами',
      'Пайплайны, grep/sed/awk',
      'Shell scripting для автоматизации задач'
    ],
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/s?k=The+Linux+Command+Line+William+Shotts' },
      { label: 'Ozon', url: 'https://www.ozon.ru/search/?text=The%20Linux%20Command%20Line' }
    ],
    readOnlineUrl: 'https://linuxcommand.org/tlcl.php',
    downloadUrl: 'https://linuxcommand.org/tlcl/tlcl.pdf',
    onSiteNotes: [
      'Хороший выбор, если хочешь быстрее ориентироваться в DevOps-лексике.',
      'Параллельно выписывай незнакомые глаголы: pipe, redirect, append, execute.'
    ]
  },
  {
    id: 'book-clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    level: 'Intermediate',
    language: 'EN',
    summary: 'Классика по читаемому коду и инженерной дисциплине.',
    whatInside: [
      'Имена, функции, классы и архитектурные принципы',
      'Рефакторинг и code smells',
      'Практики профессиональной разработки'
    ],
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/s?k=Clean+Code+Robert+C+Martin' },
      { label: 'Ozon', url: 'https://www.ozon.ru/search/?text=Clean%20Code%20Robert%20Martin' }
    ],
    downloadUrl: '/materials/clean-code-checklist.md',
    onSiteNotes: [
      'В этом курсе используем как reference для терминов review, naming и refactoring.',
      'Ниже есть локальный конспект и чеклист по главам, чтобы учиться прямо на сайте.'
    ]
  },
  {
    id: 'book-pragmatic-programmer',
    title: 'The Pragmatic Programmer (20th Anniversary)',
    author: 'David Thomas, Andrew Hunt',
    level: 'Intermediate',
    language: 'EN',
    summary: 'Книга про инженерное мышление, карьерный рост и устойчивые привычки.',
    whatInside: [
      'Подходы к решению задач и архитектурные компромиссы',
      'Коммуникация в команде и ответственность за код',
      'Практики для долгой и стабильной карьеры в разработке'
    ],
    buyLinks: [
      { label: 'PragProg', url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/' },
      { label: 'Ozon', url: 'https://www.ozon.ru/search/?text=The%20Pragmatic%20Programmer' }
    ],
    downloadUrl: '/materials/pragmatic-study-plan.md',
    onSiteNotes: [
      'Сфокусируйся на разделах про communication и tracer bullets.',
      'На сайте доступен учебный план по этой книге на 4 недели.'
    ]
  }
]
