import { useEffect, useRef, useState } from 'react'
import { motion, motionValue } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

type StackedCardsProps = {
  children: ReactNode[]
  /** Distance from the top of the viewport where the first card pins. */
  top?: number
  /** Extra offset added per card so the pinned cards fan out slightly. */
  step?: number
  /** Vertical gap between cards while they are still in flow. */
  gap?: number
  /** How small a card gets once the next one has covered it. */
  minScale?: number
}

function StackedCard({
  children,
  index,
  top,
  step,
  scale,
  register,
}: {
  children: ReactNode
  index: number
  top: number
  step: number
  scale: MotionValue<number>
  register: (index: number, node: HTMLDivElement | null) => void
}) {
  return (
    <div
      ref={(node) => register(index, node)}
      className="sticky"
      style={{ top: top + index * step, zIndex: index + 1 }}
    >
      <motion.div style={{ scale, transformOrigin: 'top center' }}>{children}</motion.div>
    </div>
  )
}

/**
 * Cards pin under each other as the page scrolls, so each new card slides over
 * the previous one and the pile builds up like a deck. A covered card shrinks a
 * little in proportion to how far the next card has travelled over it.
 */
export default function StackedCards({
  children,
  top = 120,
  step = 20,
  gap = 28,
  minScale = 0.94,
}: StackedCardsProps) {
  const count = children.length
  const nodes = useRef<(HTMLDivElement | null)[]>([])
  // One motion value per card, created once.
  const [scales] = useState(() => children.map(() => motionValue(1)))

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      for (let index = 0; index < count - 1; index++) {
        const current = nodes.current[index]
        const next = nodes.current[index + 1]
        if (!current || !next) continue
        const rect = current.getBoundingClientRect()
        const nextTop = next.getBoundingClientRect().top
        // 0 while the next card is still below this one, 1 once it fully covers it.
        const covered = Math.min(1, Math.max(0, (rect.bottom - nextTop) / rect.height))
        scales[index].set(1 - (1 - minScale) * covered)
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [count, minScale])

  return (
    <div className="relative flex flex-col" style={{ gap }}>
      {children.map((child, index) => (
        <StackedCard
          key={index}
          index={index}
          top={top}
          step={step}
          scale={scales[index]}
          register={(cardIndex, node) => {
            nodes.current[cardIndex] = node
          }}
        >
          {child}
        </StackedCard>
      ))}
    </div>
  )
}
