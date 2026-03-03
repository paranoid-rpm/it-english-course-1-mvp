import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { course1 } from '../../data/course1'
import { collectVocab } from '../../lib/vocab'
import { countDue, pickDue, rateCard, setKnown } from '../../lib/srs'

export default function ReviewPage() {
  const vocab = collectVocab(course1)
  const cardIds = useMemo(() => vocab.map((v) => v.id), [vocab])
  const [currentId, setCurrentId] = useState<string | null>(() => pickDue(cardIds))
  const [revealed, setRevealed] = useState(false)

  const due = countDue(cardIds)
  const current = currentId ? vocab.find((v) => v.id === currentId) ?? null : null

  function nextCard() {
    setRevealed(false)
    setCurrentId(pickDue(cardIds))
  }

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">Повторение</div>
          <h2 style={{ margin: '10px 0 6px' }}>Повторение терминов</h2>
          <div className="small">На повторение сейчас: {due}.</div>
          <div style={{ height: 12 }} />
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link className="btn" to="/vocab">К словарю</Link>
            <Link className="btn btn-2" to="/course">К курсу</Link>
          </div>
        </div>
      </div>

      {!current ? (
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Готово</h3>
            <div className="small">На текущий момент нет карточек на повторение.</div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-pad">
            <div className="small">Источник: <Link to={`/lesson/${current.lessonId}`}>{current.lessonTitle}</Link></div>

            <div style={{ height: 10 }} />

            <div className="exercise" style={{ padding: 16 }}>
              <div className="small">Term</div>
              <div style={{ fontFamily: 'var(--mono)', fontWeight: 900, fontSize: 20 }}>{current.term}</div>

              <div style={{ height: 10 }} />

              {!revealed ? (
                <button className="btn" onClick={() => setRevealed(true)}>Показать перевод</button>
              ) : (
                <div>
                  <div className="small">Meaning (RU)</div>
                  <div style={{ fontWeight: 800 }}>{current.meaningRu}</div>
                  <div style={{ height: 10 }} />
                  <div className="small">Example</div>
                  <div style={{ fontFamily: 'var(--mono)' }}>{current.example}</div>
                </div>
              )}
            </div>

            <div style={{ height: 12 }} />

            <div className="small" style={{ marginBottom: 8 }}>Оценка после проверки:</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                className="btn btn-2"
                onClick={() => {
                  rateCard(current.id, 'again')
                  nextCard()
                }}
                disabled={!revealed}
              >
                Снова
              </button>
              <button
                className="btn"
                onClick={() => {
                  rateCard(current.id, 'good')
                  nextCard()
                }}
                disabled={!revealed}
              >
                Норм
              </button>
              <button
                className="btn"
                onClick={() => {
                  rateCard(current.id, 'easy')
                  nextCard()
                }}
                disabled={!revealed}
              >
                Легко
              </button>
              <button
                className="btn"
                onClick={() => {
                  setKnown(current.id, true)
                  nextCard()
                }}
                disabled={!revealed}
              >
                Знаю
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
