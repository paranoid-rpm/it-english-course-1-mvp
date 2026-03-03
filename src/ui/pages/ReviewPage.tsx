import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { course1 } from '../../data/course1'
import { collectPhrases, collectVocab } from '../../lib/vocab'
import { countDue, getStreakDays, getTodayReviews, pickDue, rateCard, setKnown } from '../../lib/srs'

type DeckMode = 'terms' | 'phrases'

type Card = {
  id: string
  frontLabel: string
  front: string
  backLabel: string
  back: string
  extraLabel?: string
  extra?: string
  lessonId: string
  lessonTitle: string
}

export default function ReviewPage() {
  const [mode, setMode] = useState<DeckMode>('terms')

  const termCards = useMemo<Card[]>(() => {
    const vocab = collectVocab(course1)
    return vocab.map((v) => ({
      id: v.id,
      frontLabel: 'Term',
      front: v.term,
      backLabel: 'Meaning (RU)',
      back: v.meaningRu,
      extraLabel: 'Example',
      extra: v.example,
      lessonId: v.lessonId,
      lessonTitle: v.lessonTitle
    }))
  }, [])

  const phraseCards = useMemo<Card[]>(() => {
    const phrases = collectPhrases(course1)
    return phrases.map((p) => ({
      id: p.id,
      frontLabel: 'Phrase',
      front: p.en,
      backLabel: 'Meaning (RU)',
      back: p.ru,
      lessonId: p.lessonId,
      lessonTitle: p.lessonTitle
    }))
  }, [])

  const cards = mode === 'terms' ? termCards : phraseCards
  const cardIds = useMemo(() => cards.map((c) => c.id), [cards])

  const [currentId, setCurrentId] = useState<string | null>(() => pickDue(cardIds))
  const [revealed, setRevealed] = useState(false)

  const due = countDue(cardIds)
  const streak = getStreakDays()
  const today = getTodayReviews()

  const current = currentId ? cards.find((c) => c.id === currentId) ?? null : null

  function nextCard() {
    setRevealed(false)
    setCurrentId(pickDue(cardIds))
  }

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">Повторение</div>
          <h2 style={{ margin: '10px 0 6px' }}>Повторение карточек</h2>
          <div className="small">На повторение сейчас: {due}. Серия: {streak} дн. Сегодня: {today}.</div>
          <div style={{ height: 12 }} />

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className={mode === 'terms' ? 'btn' : 'btn btn-2'} onClick={() => { setMode('terms'); setCurrentId(pickDue(termCards.map((c) => c.id))); setRevealed(false) }}>
              Термины
            </button>
            <button className={mode === 'phrases' ? 'btn' : 'btn btn-2'} onClick={() => { setMode('phrases'); setCurrentId(pickDue(phraseCards.map((c) => c.id))); setRevealed(false) }}>
              Фразы
            </button>
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
              <div className="small">{current.frontLabel}</div>
              <div style={{ fontFamily: 'var(--mono)', fontWeight: 900, fontSize: 20 }}>{current.front}</div>

              <div style={{ height: 10 }} />

              {!revealed ? (
                <button className="btn" onClick={() => setRevealed(true)}>Показать ответ</button>
              ) : (
                <div>
                  <div className="small">{current.backLabel}</div>
                  <div style={{ fontWeight: 800 }}>{current.back}</div>
                  {current.extra ? (
                    <>
                      <div style={{ height: 10 }} />
                      <div className="small">{current.extraLabel}</div>
                      <div style={{ fontFamily: 'var(--mono)' }}>{current.extra}</div>
                    </>
                  ) : null}
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
