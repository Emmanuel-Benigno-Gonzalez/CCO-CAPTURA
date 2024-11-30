import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/styles.css'
import './css/normalize.css'
import Router from './router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
