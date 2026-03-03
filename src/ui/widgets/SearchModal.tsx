import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Course } from '../../types'
import { buildCourseDocs, searchCourse } from '../../lib/search'

export default function SearchModal({
  open,
  onClose,
  course
}: {
  open: boolean
  onClose: () => void
  course: Course
}) {
  const [q, setQ] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()

  const docs = useMemo(() => buildCourseDocs(course), [course])
  const results = useMemo(() => searchCourse(docs, q), [docs, q])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="modal-title">Поиск по урокам</div>
            <div className="small">Горячая клавиша: <span className="kbd">Alt</span> + <span className="kbd">K</span></div>
          </div>
          <button className="btn btn-2" onClick={onClose}>Закрыть</button>
        </div>

        <div className="modal-body">
          <input
            ref={inputRef}
            className="input"
            placeholder="Например: scope, PR, blocker, conflict"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <div className="results">
            {q.trim().length === 0 ? (
              <div className="small">Начни печатать, чтобы увидеть результаты.</div>
            ) : results.length === 0 ? (
              <div className="small">Ничего не найдено. Попробуй другое слово или короче запрос.</div>
            ) : (
              results.map((r) => (
                <Link
                  key={r.lessonId}
                  to={`/lesson/${r.lessonId}`}
                  className="result"
                  onClick={(e) => {
                    e.preventDefault()
                    onClose()
                    navigate(`/lesson/${r.lessonId}`)
                  }}
                >
                  <div className="result-title">{r.lessonTitle}</div>
                  <div className="small">{r.moduleTitle}</div>
                  <div className="small" style={{ marginTop: 6, fontFamily: 'var(--mono)' }}>{r.snippet}</div>
                </Link>
              ))
            )}
          </div>

          <div style={{ height: 10 }} />
          <div className="small">Подсказка: ищет по теории, словарю и фразам.</div>
        </div>
      </div>
    </div>
  )
}
