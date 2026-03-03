import { useMemo, useState } from 'react'
import type { LessonExercise } from '../../types'
import { recordExerciseResult } from '../../lib/progress'

export default function ExerciseBlock({ ex }: { ex: LessonExercise }) {
  if (ex.type === 'quiz') return <Quiz ex={ex} />
  if (ex.type === 'cloze') return <Cloze ex={ex} />
  return <Matching ex={ex} />
}

function Quiz({ ex }: { ex: Extract<LessonExercise, { type: 'quiz' }> }) {
  const [picked, setPicked] = useState<string | null>(null)
  const correctOption = ex.options.find((o) => o.correct)

  return (
    <div className="exercise">
      <div style={{ fontWeight: 800, marginBottom: 10 }}>Quiz</div>
      <div style={{ marginBottom: 10 }}>{ex.prompt}</div>
      <div className="grid" style={{ gap: 10 }}>
        {ex.options.map((o) => {
          const cls =
            picked === null
              ? 'option'
              : o.correct
              ? 'option correct'
              : picked === o.id
              ? 'option wrong'
              : 'option'

          return (
            <div
              key={o.id}
              className={cls}
              onClick={() => {
                if (picked !== null) return
                setPicked(o.id)
                recordExerciseResult(ex.id, o.correct ? 1 : 0, 1)
              }}
              role="button"
              tabIndex={0}
            >
              <div className="kbd">{o.id.toUpperCase()}</div>
              <div>
                <div>{o.text}</div>
                {picked !== null && o.correct && o.explain ? (
                  <div className="small" style={{ marginTop: 4 }}>{o.explain}</div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
      {picked !== null && correctOption ? (
        <div className="small" style={{ marginTop: 10 }}>
          Correct answer: <span style={{ fontFamily: 'var(--mono)' }}>{correctOption.text}</span>
        </div>
      ) : null}
    </div>
  )
}

function Cloze({ ex }: { ex: Extract<LessonExercise, { type: 'cloze' }> }) {
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)

  const normalized = (s: string) => s.trim().toLowerCase()
  const isCorrect = useMemo(() => normalized(value) === normalized(ex.answer), [value, ex.answer])

  return (
    <div className="exercise">
      <div style={{ fontWeight: 800, marginBottom: 10 }}>Cloze</div>
      <div style={{ marginBottom: 10, fontFamily: 'var(--mono)' }}>{ex.sentence}</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          className="input"
          placeholder="Type the missing word"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={done}
          style={{ maxWidth: 360 }}
        />
        <button
          className="btn"
          onClick={() => {
            setDone(true)
            recordExerciseResult(ex.id, isCorrect ? 1 : 0, 1)
          }}
          disabled={done}
        >
          Check
        </button>
        {!done && ex.hint ? <span className="small">Hint: {ex.hint}</span> : null}
      </div>
      {done ? (
        <div className="small" style={{ marginTop: 10 }}>
          {isCorrect ? 'Correct.' : `Not quite. Answer: ${ex.answer}`}
        </div>
      ) : null}
    </div>
  )
}

function Matching({ ex }: { ex: Extract<LessonExercise, { type: 'matching' }> }) {
  const [left, setLeft] = useState<string>('')
  const [right, setRight] = useState<string>('')
  const [matched, setMatched] = useState<Record<string, true>>({})
  const [wrong, setWrong] = useState<string | null>(null)

  const leftItems = ex.pairs.map((p) => p.left)
  const rightItems = useMemo(() => {
    const arr = ex.pairs.map((p) => p.right)
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ex.id])

  const total = ex.pairs.length
  const correct = Object.keys(matched).length

  function isPairOk(l: string, r: string) {
    return ex.pairs.some((p) => p.left === l && p.right === r)
  }

  return (
    <div className="exercise">
      <div style={{ fontWeight: 800, marginBottom: 10 }}>Matching</div>
      <div className="small" style={{ marginBottom: 10 }}>
        Pick left + right. Progress: {correct}/{total}.
      </div>

      <div className="grid grid-2">
        <div className="grid" style={{ gap: 10 }}>
          {leftItems.map((l) => (
            <button
              key={l}
              className="btn"
              style={{ justifyContent: 'space-between', opacity: matched[l] ? 0.55 : 1 }}
              onClick={() => {
                if (matched[l]) return
                setLeft(l)
                setWrong(null)
              }}
            >
              <span style={{ fontFamily: 'var(--mono)' }}>{l}</span>
              <span className="small">{left === l ? 'selected' : ''}</span>
            </button>
          ))}
        </div>

        <div className="grid" style={{ gap: 10 }}>
          {rightItems.map((r) => (
            <button
              key={r}
              className="btn btn-2"
              onClick={() => {
                setRight(r)
                setWrong(null)
                if (!left) return
                if (isPairOk(left, r)) {
                  setMatched((m) => ({ ...m, [left]: true }))
                  setLeft('')
                  setRight('')
                } else {
                  setWrong('Wrong match, try again.')
                }

                const newCorrect = isPairOk(left, r) ? correct + 1 : correct
                recordExerciseResult(ex.id, newCorrect, total)
              }}
            >
              <span style={{ fontFamily: 'var(--mono)' }}>{r}</span>
              <span className="small">{right === r ? 'selected' : ''}</span>
            </button>
          ))}
        </div>
      </div>

      {wrong ? <div className="small" style={{ marginTop: 10 }}>{wrong}</div> : null}
    </div>
  )
}
