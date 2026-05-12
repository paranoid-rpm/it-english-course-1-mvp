import { Link } from 'react-router-dom'
import { course1 } from '../../data/course1'
import { loadProgress } from '../../lib/progress'
import { collectVocab } from '../../lib/vocab'
import { programmerWords } from '../../data/dictation'
import { literature } from '../../data/library'

export default function HomePage() {
  const p = loadProgress()
  const totalLessons = course1.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const done = Object.keys(p.completedLessonIds).length
  const totalWords = collectVocab(course1).length

  return (
    <div>
      <div className="hero">
        <div className="hero-inner">
          <div>
            <h1 className="h1">Английский для IT-команды</h1>
            <p className="lead">
              Практический курс: от ежедневных апдейтов и PR-комментариев до диктанта, интервью и самостоятельного
              чтения профлитературы.
            </p>
            <div className="hero-actions">
              <Link className="btn" to="/course">Открыть курс</Link>
              <Link className="btn btn-2" to="/practice">Открыть практику</Link>
              <Link className="btn" to="/dictation">Запустить диктант</Link>
            </div>
            <div className="hr" />
            <div className="chip-row">
              <span className="stat-chip">Уроки: {done}/{totalLessons}</span>
              <span className="stat-chip">Термины: {totalWords}</span>
              <span className="stat-chip">Диктант: {programmerWords.length} слов</span>
              <span className="stat-chip">Книги: {literature.length}</span>
            </div>
          </div>

          <div className="card">
            <div className="card-pad">
              <div className="tag">Что нового</div>
              <h3 style={{ margin: '10px 0 6px' }}>Обновленная структура</h3>
              <ul className="list">
                <li>Больше модулей и практики в каждом уроке.</li>
                <li>Новый раздел диктанта: слова + правила.</li>
                <li>Литература для самостоятельного роста.</li>
              </ul>
              <div className="hr" />
              <div className="small">Поиск по урокам: <span className="kbd">Alt</span> + <span className="kbd">K</span>.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="grid grid-2">
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Траектории обучения</h3>
            <div className="quick-grid">
              <div className="mini-card">
                <div className="tag">Активно</div>
                <h4>Course 1: Foundations</h4>
                <p className="small">База для ежедневной работы: задачи, Git, ревью, инциденты.</p>
              </div>
              <div className="mini-card">
                <div className="tag">Скоро</div>
                <h4>Course 2: Interview & System Design</h4>
                <p className="small">Технические интервью, architecture discussion, presentation skills.</p>
              </div>
              <div className="mini-card">
                <div className="tag">Скоро</div>
                <h4>Course 3: Leadership Communication</h4>
                <p className="small">Общение с продуктом, фасилитация встреч и менторинг.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Быстрый старт</h3>
            <p className="small">
              Рекомендуемый путь на сегодня:
            </p>
            <ol className="list">
              <li>Пройди 1 урок курса (10-15 минут).</li>
              <li>Сделай 1 блок в Практике+ (5 минут).</li>
              <li>Проверь 10 слов в диктанте (7 минут).</li>
              <li>Прочитай конспект 1 книги (10 минут).</li>
            </ol>
            <div style={{ height: 8 }} />
            <div className="hero-actions">
              <Link className="btn" to="/lesson/m1-l1">Старт с Lesson 1</Link>
              <Link className="btn btn-2" to="/literature">Открыть литературу</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
