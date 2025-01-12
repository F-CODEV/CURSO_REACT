import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Padre />
  </StrictMode>,
)
