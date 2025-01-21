import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HerosApp } from './HerosApp'
import './styles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HerosApp />
    </BrowserRouter>
  </StrictMode>,
)
