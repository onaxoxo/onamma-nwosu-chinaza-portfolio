import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  /** Space between items, in px. */
  gap?: number
  /** Pixels travelled per second. */
  speed?: number
  className?: string
}

/**
 * Endless horizontal loop. The content is rendered twice and the track slides by
 * exactly one copy's width, so the loop point is invisible.
 */
export default function Marquee({ children, gap = 22, speed = 60, className = '' }: MarqueeProps) {
  const firstCopy = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const node = firstCopy.current
    if (!node) return
    const measure = () => setDistance(node.scrollWidth + gap)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [gap])

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max"
        style={{ gap }}
        animate={distance ? { x: [0, -distance] } : undefined}
        transition={{ duration: distance / speed, ease: 'linear', repeat: Infinity }}
      >
        <div ref={firstCopy} className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
