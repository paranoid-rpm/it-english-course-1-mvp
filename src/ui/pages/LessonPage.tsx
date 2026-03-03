import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { course1 } from '../../data/course1'
import { markLessonCompleted } from '../../lib/progress'
import ExerciseBlock from '../widgets/ExerciseBlock'

export default function LessonPage() {
  const { lessonId } = useParams()

  const lesson = useMemo(() => {
    for (const m of course1.modules) {
      const found = m.lessons.find((l) => l.id === lessonId)
      if (found) return found
    }
    return null
  }, [lessonId])

  if (!lesson) {
    return (
      <div className="card">
        <div className="card-pad">
          <h2 style={{ marginTop: 0 }}>Урок не найден</h2>
          <div className="small">Проверь ссылку или открой курс.</div>
          <div style={{ height: 12 }} />
          <Link className="btn" to="/course">Вернуться к курсу</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="grid" style={{ gap: 14 }}>
      <div className="card">
        <div className="card-pad">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <div className="tag">Lesson</div>
              <h2 style={{ margin: '10px 0 6px' }}>{lesson.title}</h2>
              <div className="small">~{lesson.minutes} минут</div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <button
                className="btn"
                onClick={() => {
                  markLessonCompleted(lesson.id)
                  alert('Урок отмечен как завершённый (прогресс сохранён локально).')
                }}
              >
                Отметить как завершённый
              </button>
              <Link className="btn btn-2" to="/course">К курсу</Link>
            </div>
          </div>

          <div className="hr" />

          <h3>Цели</h3>
          <ul className="list">
            {lesson.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Теория</h3>
            {lesson.theory.map((p, i) => (
              <p key={i} className="small" style={{ marginTop: 0 }}>{p}</p>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Фразы</h3>
            <div className="grid" style={{ gap: 10 }}>
              {lesson.phrases.map((ph) => (
                <div key={ph.en} className="exercise">
                  <div style={{ fontFamily: 'var(--mono)' }}>{ph.en}</div>
                  <div className="small">{ph.ru}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-pad">
          <h3 style={{ marginTop: 0 }}>Словарь</h3>
          <div className="grid" style={{ gap: 10 }}>
            {lesson.vocab.map((v) => (
              <div key={v.term} className="exercise">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontWeight: 700 }}>{v.term}</div>
                  <div className="small">{v.meaningRu}</div>
                </div>
                <div className="small" style={{ marginTop: 6 }}>
                  Example: <span style={{ fontFamily: 'var(--mono)' }}>{v.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-pad">
          <h3 style={{ marginTop: 0 }}>Практика</h3>
          <div className="grid" style={{ gap: 12 }}>
            {lesson.exercises.map((ex) => (
              <ExerciseBlock key={ex.id} ex={ex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
