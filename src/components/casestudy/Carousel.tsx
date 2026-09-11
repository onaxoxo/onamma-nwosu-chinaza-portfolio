import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

export type CarouselScreen = {
  label: string
  caption: string
  image: string
  /** Overrides the shared image size when one slide's artwork is a different size. */
  size?: { width: number; height: number }
}

/** Carousel geometry, taken straight from the Figma "Showcase / Carousel" frame. */
export type CarouselGeometry = {
  slideWidth: number
  slideHeight: number
  gap: number
  slideBackground?: string
  slideRadius?: number
  /** Horizontal offset of the slide strip inside the viewport, as in Figma. */
  offsetX?: number
  image: { width: number; height: number; radius: number }
}

export default function Carousel({
  screens,
  geometry,
}: {
  screens: CarouselScreen[]
  geometry: CarouselGeometry
}) {
  const [index, setIndex] = useState(0)
  const count = screens.length
  const step = geometry.slideWidth + geometry.gap

  const go = (delta: number) => setIndex((current) => (current + delta + count) % count)

  return (
    <>
      <div className="relative h-[720px] w-full shrink-0 overflow-clip rounded-[28px] bg-[#141414]">
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute top-[332px] left-[32px] z-10 flex size-[56px] flex-col items-center justify-center overflow-clip rounded-[28px] bg-white transition-transform duration-200 hover:scale-105"
          aria-label="Previous screen"
        >
          <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[28px] text-[#0d0d0d]">
            &lsaquo;
          </p>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute top-[332px] left-[1112px] z-10 flex size-[56px] flex-col items-center justify-center overflow-clip rounded-[28px] bg-white transition-transform duration-200 hover:scale-105"
          aria-label="Next screen"
        >
          <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[28px] text-[#0d0d0d]">
            &rsaquo;
          </p>
        </button>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip"
          style={{ width: geometry.slideWidth, height: geometry.slideHeight }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ x: -index * step + (geometry.offsetX ?? 0) }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {screens.map((screen, screenIndex) => (
              <div
                key={screen.label}
                className="absolute top-0 overflow-clip"
                style={{
                  left: screenIndex * step,
                  width: geometry.slideWidth,
                  height: geometry.slideHeight,
                  background: geometry.slideBackground,
                  borderRadius: geometry.slideRadius,
                }}
              >
                <img
                  alt={screen.label}
                  className="pointer-events-none absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                  style={{
                    width: screen.size?.width ?? geometry.image.width,
                    height: screen.size?.height ?? geometry.image.height,
                    borderRadius: geometry.image.radius,
                  }}
                  src={screen.image}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative flex w-full shrink-0 items-center gap-[16px] overflow-clip">
        <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[14px] text-[#f97316]">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[15px] text-[#6b6b6b]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {screens[index].caption}
          </motion.p>
        </AnimatePresence>
        <div className="relative h-px min-w-px flex-[1_0_0]" />
        <div className="relative flex h-[8px] shrink-0 items-center gap-[8px]">
          {screens.map((screen, dotIndex) => (
            <button
              key={screen.label}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to screen ${dotIndex + 1}`}
              className="size-[8px] rounded-full transition-colors duration-300"
              style={{ backgroundColor: dotIndex === index ? '#0D0D0D' : '#D4D4D4' }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
