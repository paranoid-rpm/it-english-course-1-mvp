import { Link } from 'react-router-dom'
import { course1 } from '../../data/course1'
import { collectPhrases, collectVocab } from '../../lib/vocab'
import { countDue, loadSrs } from '../../lib/srs'

export default function VocabPage() {
  const vocab = collectVocab(course1)
  const phrases = collectPhrases(course1)

  const cardIds = vocab.map((v) => v.id)
  const due = countDue(cardIds)
  const srs = loadSrs()
  const knownCount = Object.keys(srs.known).length

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">Словарь</div>
          <h2 style={{ margin: '10px 0 6px' }}>Термины и фразы курса</h2>
          <div className="small">
            Термины: {vocab.length}. Фразы: {phrases.length}. Изучено: {knownCount}. На повторение: {due}.
          </div>
          <div style={{ height: 12 }} />
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link className="btn" to="/review">Повторение</Link>
            <Link className="btn btn-2" to="/course">К курсу</Link>
          </div>
        </div>
      </div>

      <VocabList />
      <PhraseList />
    </div>
  )
}

function VocabList() {
  const vocab = collectVocab(course1)

  const modules = [{ id: 'all', title: 'Все модули' }, ...course1.modules.map((m) => ({ id: m.id, title: m.title }))]
  const [moduleId, setModuleId] = React.useState<string>('all')
  const [q, setQ] = React.useState('')

  const filtered = React.useMemo(() => {
    const qq = q.trim().toLowerCase()
    return vocab
      .filter((v) => (moduleId === 'all' ? true : v.moduleId === moduleId))
      .filter((v) =>
        !qq
          ? true
          : (v.term + ' ' + v.meaningRu + ' ' + v.example).toLowerCase().includes(qq)
      )
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [vocab, moduleId, q])

  return (
    <div className="card">
      <div className="card-pad">
        <h3 style={{ marginTop: 0 }}>Термины</h3>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <select className="input" value={moduleId} onChange={(e) => setModuleId(e.target.value)} style={{ maxWidth: 420 }}>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>
                {m.title}
              </option>
            ))}
          </select>
          <input className="input" placeholder="Поиск по терминам" value={q} onChange={(e) => setQ(e.target.value)} style={{ maxWidth: 320 }} />
        </div>

        <div style={{ height: 12 }} />

        <div className="grid" style={{ gap: 10 }}>
          {filtered.map((v) => (
            <div key={v.id} className="exercise">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: 'var(--mono)', fontWeight: 800 }}>{v.term}</div>
                <div className="small">{v.meaningRu}</div>
              </div>
              <div className="small" style={{ marginTop: 6 }}>
                Example: <span style={{ fontFamily: 'var(--mono)' }}>{v.example}</span>
              </div>
              <div className="small" style={{ marginTop: 8 }}>
                Источник: <Link to={`/lesson/${v.lessonId}`}>{v.lessonTitle}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PhraseList() {
  const phrases = collectPhrases(course1)
  const modules = [{ id: 'all', title: 'Все модули' }, ...course1.modules.map((m) => ({ id: m.id, title: m.title }))]
  const [moduleId, setModuleId] = React.useState<string>('all')
  const [q, setQ] = React.useState('')

  const filtered = React.useMemo(() => {
    const qq = q.trim().toLowerCase()
    return phrases
      .filter((p) => (moduleId === 'all' ? true : p.moduleId === moduleId))
      .filter((p) => (!qq ? true : (p.en + ' ' + p.ru).toLowerCase().includes(qq)))
  }, [phrases, moduleId, q])

  return (
    <div className="card">
      <div className="card-pad">
        <h3 style={{ marginTop: 0 }}>Фразы</h3>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <select className="input" value={moduleId} onChange={(e) => setModuleId(e.target.value)} style={{ maxWidth: 420 }}>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>
                {m.title}
              </option>
            ))}
          </select>
          <input className="input" placeholder="Поиск по фразам" value={q} onChange={(e) => setQ(e.target.value)} style={{ maxWidth: 320 }} />
        </div>

        <div style={{ height: 12 }} />

        <div className="grid" style={{ gap: 10 }}>
          {filtered.map((p) => (
            <div key={p.id} className="exercise">
              <div style={{ fontFamily: 'var(--mono)', fontWeight: 800 }}>{p.en}</div>
              <div className="small">{p.ru}</div>
              <div className="small" style={{ marginTop: 8 }}>
                Источник: <Link to={`/lesson/${p.lessonId}`}>{p.lessonTitle}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
