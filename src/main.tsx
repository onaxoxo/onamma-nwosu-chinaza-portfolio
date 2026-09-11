import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { MOBILE_BREAKPOINT } from './hooks/useIsMobile'

/**
 * Zoom the 1440px desktop canvas to the viewport width so the page never scrolls
 * horizontally. Below the mobile breakpoint the mobile layout takes over and no zoom applies.
 */
function applyCanvasZoom() {
  const width = document.documentElement.clientWidth
  const zoom = width < MOBILE_BREAKPOINT ? 1 : width / 1440
  document.documentElement.style.setProperty('--canvas-zoom', String(zoom))
  document.documentElement.classList.toggle('mobile', width < MOBILE_BREAKPOINT)
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
