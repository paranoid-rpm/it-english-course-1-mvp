import { Link } from 'react-router-dom'
import { course1 } from '../../data/course1'
import { loadProgress } from '../../lib/progress'

export default function HomePage() {
  const p = loadProgress()
  const totalLessons = course1.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const done = Object.keys(p.completedLessonIds).length

  return (
    <div>
      <div className="hero">
        <div className="hero-inner">
          <div>
            <h1 className="h1">Английский для IT — без воды</h1>
            <p className="lead">
              Один курс‑основа: словарь, фразы и тренажёры, которые реально нужны в разработке и командной работе.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn" to="/course">Открыть курс</Link>
              <Link className="btn btn-2" to="/lesson/m1-l1">Начать с Lesson 1</Link>
            </div>
            <div className="hr" />
            <div className="small">
              Прогресс: {done}/{totalLessons} уроков.
            </div>
          </div>

          <div className="card">
            <div className="card-pad">
              <div className="tag">Формат</div>
              <h3 style={{ margin: '10px 0 6px' }}>Короткие уроки</h3>
              <ul className="list">
                <li>Теория — коротко и по делу.</li>
                <li>Словарь — с примерами в контексте.</li>
                <li>Практика — quiz, cloze, matching.</li>
              </ul>
              <div className="hr" />
              <div className="small">
                Подсказка: навигация через URL, прогресс сохраняется локально.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="grid grid-2">
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Что будет дальше</h3>
            <p className="small">
              После MVP добавим модули про Git/Code Review, API, базы данных, debugging, а ещё словарь и режим повторения.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Ламповый стиль</h3>
            <p className="small">
              Тёплая “бумага”, аккуратные карточки, простая навигация — как старые учебные сайты, но с современной читабельностью.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
