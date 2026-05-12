import { useMemo, useState } from 'react'

type Scenario = {
  id: string
  prompt: string
  options: { id: string; text: string; correct: boolean; explain: string }[]
}

const scenarios: Scenario[] = [
  {
    id: 'sc-1',
    prompt: 'Тебе нужно вежливо попросить коллегу перебазировать ветку на main. Что написать?',
    options: [
      { id: 'a', text: 'Rebase now.', correct: false, explain: 'Слишком резко и без контекста.' },
      { id: 'b', text: 'Could you rebase this branch onto main, please?', correct: true, explain: 'Вежливая и точная формулировка.' },
      { id: 'c', text: 'Main is broken because of you.', correct: false, explain: 'Конфликтная формулировка.' }
    ]
  },
  {
    id: 'sc-2',
    prompt: 'Нужно коротко сообщить, что ты подтянул свежий main. Выбери лучший вариант.',
    options: [
      { id: 'a', text: 'I pulled the latest changes from main.', correct: true, explain: 'Грамотно и ясно для команды.' },
      { id: 'b', text: 'I pull main latest.', correct: false, explain: 'Нарушен порядок слов и время.' },
      { id: 'c', text: 'Main done.', correct: false, explain: 'Слишком неясно.' }
    ]
  },
  {
    id: 'sc-3',
    prompt: 'CI успешно прошел. Какая фраза подходит?',
    options: [
      { id: 'a', text: 'All checks are green.', correct: true, explain: 'Стандартная и правильная формулировка.' },
      { id: 'b', text: 'Checks are grass.', correct: false, explain: 'Неверное слово и сленг.' },
      { id: 'c', text: 'Everything test yes.', correct: false, explain: 'Грамматически некорректно.' }
    ]
  }
]

export default function PracticePage() {
  const [yesterday, setYesterday] = useState('')
  const [today, setToday] = useState('')
  const [blocker, setBlocker] = useState('')
  const [picked, setPicked] = useState<Record<string, string>>({})

  const scenarioScore = useMemo(
    () =>
      scenarios.reduce((acc, s) => {
        const selected = s.options.find((o) => o.id === picked[s.id])
        return acc + (selected?.correct ? 1 : 0)
      }, 0),
    [picked]
  )

  const standupReady = yesterday.trim().length > 2 && today.trim().length > 2

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">Практика+</div>
          <h2 style={{ margin: '10px 0 6px' }}>Дополнительные тренировки</h2>
          <p className="small">
            Здесь больше практики по реальным рабочим ситуациям: daily standup и переписка в Git/PR.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-pad">
          <h3 style={{ marginTop: 0 }}>1) Конструктор standup-апдейта</h3>
          <p className="small">Заполни поля, и сайт соберет готовый статус на английском.</p>

          <div className="grid" style={{ gap: 10 }}>
            <input
              className="input"
              value={yesterday}
              onChange={(e) => setYesterday(e.target.value)}
              placeholder="Yesterday I..."
            />
            <input
              className="input"
              value={today}
              onChange={(e) => setToday(e.target.value)}
              placeholder="Today I will..."
            />
            <input
              className="input"
              value={blocker}
              onChange={(e) => setBlocker(e.target.value)}
              placeholder="Blocker (optional)"
            />
          </div>

          <div style={{ height: 12 }} />
          <div className="exercise">
            {standupReady ? (
              <div style={{ fontFamily: 'var(--mono)' }}>
                Yesterday I {yesterday.trim()}. Today I will {today.trim()}
                {blocker.trim() ? `. My blocker is ${blocker.trim()}.` : '.'}
              </div>
            ) : (
              <div className="small">Заполни первые два поля, чтобы получить готовый шаблон.</div>
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-pad">
          <h3 style={{ marginTop: 0 }}>2) Ситуативный тренажер</h3>
          <p className="small">Выбери лучший вариант фразы для каждой ситуации.</p>

          <div className="grid" style={{ gap: 10 }}>
            {scenarios.map((s) => {
              const selectedId = picked[s.id]
              const selected = s.options.find((o) => o.id === selectedId)

              return (
                <div key={s.id} className="exercise">
                  <div style={{ marginBottom: 8, fontWeight: 700 }}>{s.prompt}</div>
                  <div className="grid" style={{ gap: 8 }}>
                    {s.options.map((o) => (
                      <button
                        key={o.id}
                        className={`option ${
                          selectedId
                            ? o.correct
                              ? 'correct'
                              : selectedId === o.id
                              ? 'wrong'
                              : ''
                            : ''
                        }`}
                        onClick={() => setPicked((prev) => ({ ...prev, [s.id]: o.id }))}
                      >
                        <span className="kbd">{o.id.toUpperCase()}</span>
                        <span>{o.text}</span>
                      </button>
                    ))}
                  </div>
                  {selected ? <div className="small" style={{ marginTop: 8 }}>{selected.explain}</div> : null}
                </div>
              )
            })}
          </div>

          <div style={{ height: 12 }} />
          <div className="stat-chip">Результат: {scenarioScore}/{scenarios.length}</div>
        </div>
      </div>
    </div>
  )
}
