import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { grammarDictation, programmerWords } from '../../data/dictation'

type Mode = 'words' | 'rules'

function normalize(s: string) {
  return s.trim().toLowerCase()
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export default function DictationPage() {
  const [mode, setMode] = useState<Mode>('words')
  const [seed, setSeed] = useState(0)
  const [wordAnswers, setWordAnswers] = useState<Record<string, string>>({})
  const [ruleAnswers, setRuleAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const words = useMemo(() => shuffle(programmerWords).slice(0, 15), [seed])
  const rules = useMemo(() => shuffle(grammarDictation).slice(0, 8), [seed])

  const activeWordScore = words.filter((w) => normalize(wordAnswers[w.id] ?? '') === normalize(w.term)).length
  const activeRuleScore = rules.filter((r) => normalize(ruleAnswers[r.id] ?? '') === normalize(r.answer)).length

  function restart() {
    setSeed((x) => x + 1)
    setChecked(false)
    setWordAnswers({})
    setRuleAnswers({})
  }

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">Диктант</div>
          <h2 style={{ margin: '10px 0 6px' }}>Диктант по IT-английскому</h2>
          <p className="small">
            Два режима: обязательные слова для программиста и практические правила для переписки в команде.
          </p>

          <div className="tab-row">
            <button className={mode === 'words' ? 'btn' : 'btn btn-2'} onClick={() => { setMode('words'); setChecked(false) }}>
              Слова разработчика
            </button>
            <button className={mode === 'rules' ? 'btn' : 'btn btn-2'} onClick={() => { setMode('rules'); setChecked(false) }}>
              Правила и шаблоны
            </button>
            <button className="btn" onClick={restart}>Новый вариант</button>
            <Link className="btn btn-2" to="/course">К курсу</Link>
          </div>
        </div>
      </div>

      {mode === 'words' ? (
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Слова, которые должен знать каждый программист</h3>
            <p className="small">Впиши английский термин по русскому значению.</p>

            <div className="grid" style={{ gap: 10 }}>
              {words.map((w, index) => {
                const user = wordAnswers[w.id] ?? ''
                const ok = normalize(user) === normalize(w.term)
                return (
                  <div key={w.id} className="exercise">
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontWeight: 700 }}>{index + 1}. {w.meaningRu}</div>
                        {w.hint ? <div className="small">Подсказка: {w.hint}</div> : null}
                      </div>
                      {checked ? <div className={ok ? 'pill-ok' : 'pill-bad'}>{ok ? 'Верно' : 'Ошибка'}</div> : null}
                    </div>
                    <div style={{ height: 8 }} />
                    <input
                      className="input"
                      placeholder="Введите термин на английском"
                      value={user}
                      onChange={(e) => setWordAnswers((prev) => ({ ...prev, [w.id]: e.target.value }))}
                    />
                    {checked && !ok ? (
                      <div className="small" style={{ marginTop: 8 }}>
                        Правильный ответ: <span style={{ fontFamily: 'var(--mono)' }}>{w.term}</span>
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>

            <div style={{ height: 12 }} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn" onClick={() => setChecked(true)}>Проверить</button>
              <button className="btn btn-2" onClick={() => setChecked(false)}>Редактировать</button>
              {checked ? <span className="stat-chip">Результат: {activeWordScore}/{words.length}</span> : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Диктант по правилам</h3>
            <p className="small">Заполни пропуски и проверь, насколько уверенно ты пишешь рабочие фразы.</p>

            <div className="grid" style={{ gap: 10 }}>
              {rules.map((r, index) => {
                const user = ruleAnswers[r.id] ?? ''
                const ok = normalize(user) === normalize(r.answer)
                return (
                  <div key={r.id} className="exercise">
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                      <div style={{ fontWeight: 700 }}>{index + 1}. {r.title}</div>
                      {checked ? <div className={ok ? 'pill-ok' : 'pill-bad'}>{ok ? 'Верно' : 'Ошибка'}</div> : null}
                    </div>
                    <div className="small" style={{ marginTop: 6 }}>{r.rule}</div>
                    <div style={{ marginTop: 8, fontFamily: 'var(--mono)' }}>{r.sentence}</div>
                    <div style={{ height: 8 }} />
                    <input
                      className="input"
                      placeholder="Введите пропущенное слово"
                      value={user}
                      onChange={(e) => setRuleAnswers((prev) => ({ ...prev, [r.id]: e.target.value }))}
                    />
                    {checked ? (
                      <div className="small" style={{ marginTop: 8 }}>
                        Ответ: <span style={{ fontFamily: 'var(--mono)' }}>{r.answer}</span>. {r.explanation}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>

            <div style={{ height: 12 }} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn" onClick={() => setChecked(true)}>Проверить</button>
              <button className="btn btn-2" onClick={() => setChecked(false)}>Редактировать</button>
              {checked ? <span className="stat-chip">Результат: {activeRuleScore}/{rules.length}</span> : null}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
