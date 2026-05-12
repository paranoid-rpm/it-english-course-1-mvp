import { useState } from 'react'
import { literature } from '../../data/library'

export default function LiteraturePage() {
  const [openBookId, setOpenBookId] = useState<string | null>(literature[0]?.id ?? null)

  const selected = literature.find((b) => b.id === openBookId) ?? literature[0]

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="card">
        <div className="card-pad">
          <div className="tag">Литература</div>
          <h2 style={{ margin: '10px 0 6px' }}>Библиотека для самостоятельного обучения</h2>
          <p className="small">
            Здесь собраны книги и материалы по IT-английскому. Для каждой позиции есть описание, ссылки на покупку
            и легальные варианты чтения/скачивания.
          </p>
        </div>
      </div>

      <div className="grid grid-2">
        {literature.map((book) => (
          <div key={book.id} className="card">
            <div className="card-pad">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                <div className="tag">{book.language}</div>
                <div className="tag">{book.level}</div>
              </div>

              <h3 style={{ margin: '10px 0 6px' }}>{book.title}</h3>
              <div className="small">{book.author}</div>
              <p className="small">{book.summary}</p>

              <div className="small" style={{ fontWeight: 700, marginBottom: 6 }}>Что внутри:</div>
              <ul className="list">
                {book.whatInside.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div style={{ height: 10 }} />
              <div className="small" style={{ fontWeight: 700, marginBottom: 6 }}>Где купить:</div>
              <div className="book-links">
                {book.buyLinks.map((link) => (
                  <a key={link.url} className="btn btn-2" href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>

              <div style={{ height: 10 }} />
              <div className="book-links">
                {book.readOnlineUrl ? (
                  <a className="btn" href={book.readOnlineUrl} target="_blank" rel="noreferrer">
                    Читать онлайн
                  </a>
                ) : null}
                {book.downloadUrl ? (
                  <a className="btn" href={book.downloadUrl} target="_blank" rel="noreferrer">
                    Скачать материал
                  </a>
                ) : null}
                <button className="btn btn-2" onClick={() => setOpenBookId(book.id)}>
                  Читать на сайте
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected ? (
        <div className="card">
          <div className="card-pad">
            <h3 style={{ marginTop: 0 }}>Чтение на сайте: {selected.title}</h3>
            <div className="small">{selected.author}</div>
            <div style={{ height: 8 }} />
            <div className="grid" style={{ gap: 8 }}>
              {selected.onSiteNotes.map((n, i) => (
                <div key={i} className="exercise">
                  <div className="small">{n}</div>
                </div>
              ))}
            </div>
            <div style={{ height: 10 }} />
            <div className="small">
              Это учебный конспект по книге для быстрого старта. Полный текст читай по официальной ссылке выше.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
