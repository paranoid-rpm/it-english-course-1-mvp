import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import LessonPage from './pages/LessonPage'

export default function App() {
  return (
    <div>
      <div className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="brand-title">IT English</div>
            <span className="badge">Course 1 MVP</span>
          </div>
          <div className="nav-links">
            <Link to="/">Главная</Link>
            <Link to="/course">Курс</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
        </Routes>

        <div className="footer">
          Сделано как “ламповый” учебник: много смысла, минимум шума.
        </div>
      </div>
    </div>
  )
}
