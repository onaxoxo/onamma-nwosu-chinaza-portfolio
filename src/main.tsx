import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

/** Zoom the 1440px canvas to the viewport width so the page never scrolls horizontally. */
function applyCanvasZoom() {
  document.documentElement.style.setProperty('--canvas-zoom', String(document.documentElement.clientWidth / 1440))
}
applyCanvasZoom()
window.addEventListener('resize', applyCanvasZoom)
window.addEventListener('load', applyCanvasZoom)
// The vertical scrollbar appears once the canvas has rendered, which narrows the viewport by its width.
const zoomObserver = new ResizeObserver(applyCanvasZoom)
zoomObserver.observe(document.body)
zoomObserver.observe(document.getElementById('root')!)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
