import { Link } from 'react-router-dom'
import { course1 } from '../../data/course1'
import { loadProgress } from '../../lib/progress'

export default function CoursePage() {
  const p = loadProgress()
  const totalLessons = course1.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = Object.keys(p.completedLessonIds).length

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">{course1.title}</div>
          <h2 style={{ margin: '10px 0 6px' }}>{course1.subtitle}</h2>
          <div className="small" style={{ marginBottom: 10 }}>
            Курс стал шире: больше модулей, больше практики и более прикладные сценарии из реальной разработки.
          </div>
          <div className="chip-row">
            <span className="stat-chip">Модулей: {course1.modules.length}</span>
            <span className="stat-chip">Уроков: {totalLessons}</span>
            <span className="stat-chip">Пройдено: {completedLessons}/{totalLessons}</span>
          </div>
          <div style={{ height: 10 }} />
          <div className="hero-actions">
            <Link className="btn" to="/practice">Практика+</Link>
            <Link className="btn btn-2" to="/dictation">Диктант</Link>
            <Link className="btn" to="/literature">Литература</Link>
          </div>
        </div>
      </div>

      {course1.modules.map((m) => (
        <div key={m.id} className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>{m.title}</h3>
            <div className="small">{m.description}</div>
            <div className="hr" />
            <div className="grid" style={{ gap: 10 }}>
              {m.lessons.map((l) => {
                const done = !!p.completedLessonIds[l.id]
                return (
                  <div key={l.id} className="exercise">
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontWeight: 700 }}>{l.title}</div>
                        <div className="small">~{l.minutes} мин · {l.exercises.length} практик · {done ? 'Завершено' : 'Не завершено'}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <Link className="btn" to={`/lesson/${l.id}`}>Открыть</Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
