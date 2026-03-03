import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './ui/App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
