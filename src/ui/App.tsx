import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import LessonPage from './pages/LessonPage'
import VocabPage from './pages/VocabPage'
import ReviewPage from './pages/ReviewPage'
import PracticePage from './pages/PracticePage'
import DictationPage from './pages/DictationPage'
import LiteraturePage from './pages/LiteraturePage'
import SearchModal from './widgets/SearchModal'
import { course1 } from '../data/course1'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.altKey && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

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
            <Link to="/practice">Практика+</Link>
            <Link to="/dictation">Диктант</Link>
            <Link to="/vocab">Словарь</Link>
            <Link to="/review">Повторение</Link>
            <Link to="/literature">Литература</Link>
            <button className="btn" onClick={() => setSearchOpen(true)}>
              Поиск <span className="kbd">Alt</span>+<span className="kbd">K</span>
            </button>
          </div>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} course={course1} />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/dictation" element={<DictationPage />} />
          <Route path="/vocab" element={<VocabPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/literature" element={<LiteraturePage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
        </Routes>

        <div className="footer">IT English · Course 1+ · Workflow, Practice, Dictation, Literature</div>
      </div>
    </div>
  )
}
