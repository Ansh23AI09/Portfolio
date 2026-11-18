import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register Service Worker for Android PWA offline capability & installability
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((registration) => {
        console.log('[PWA] ServiceWorker registered successfully:', registration.scope)
      })
      .catch((error) => {
        console.warn('[PWA] ServiceWorker registration failed:', error)
      })
  })
}
