import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import Reveal from '../Reveal'
import { BlockRenderer, CaseEyebrow, CaseSectionView, Chip } from './blocks'
import type { CaseSection } from './blocks'

const easeOut = [0.22, 1, 0.36, 1] as const

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  intro: string
  tags: string[]
  linkLabel: string
  heroCover?: string
  /** Hero cover crop, matching how the image sits inside the Figma frame. */
  heroCoverStyle?: { height: string; top: string; width: string; left?: string }
  /** When the cover fills its frame rather than being cropped by percentage offsets. */
  heroCoverFit?: 'cover'
  heroCoverHeight?: number
  sections: CaseSection[]
  screens: { label: string; caption: string; image: string }[]
  /** Carousel geometry, taken straight from the Figma "Showcase / Carousel" frame. */
  carousel: {
    slideWidth: number
    slideHeight: number
    gap: number
    slideBackground?: string
    slideRadius?: number
    /** Horizontal offset of the slide strip inside the viewport, as in Figma. */
    offsetX?: number
    image: { width: number; height: number; radius: number }
  }
  screensLabel: string
  screensTitle: string
  results: CaseSection
  reflection: {
    label: string
    title: string
    headline: string
    beats: { label: string; body: string }[]
    pb?: number
  }
  prev: { label: string; to: string }
  next: { label: string; to: string }
}

/* ------------------------------------------------------------------ */

function Carousel({
  screens,
  geometry,
}: {
  screens: CaseStudy['screens']
  geometry: CaseStudy['carousel']
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
                    width: geometry.image.width,
                    height: geometry.image.height,
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

/* ------------------------------------------------------------------ */

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <div className="relative flex size-full flex-col items-start bg-[#f9f9f9]">
      <div className="relative h-[128px] w-full shrink-0">
        <Nav variant="case" />
      </div>

      {/* Hero */}
      <div className="relative flex w-full shrink-0 flex-col items-start gap-[48px] overflow-clip px-[120px] pt-[40px]">
        <motion.div
          className="relative flex w-full shrink-0 flex-col items-start gap-[18px] overflow-clip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <CaseEyebrow>CASE STUDY</CaseEyebrow>
          <p className="relative shrink-0 font-semibold leading-[84px] tracking-[-1.5px] whitespace-nowrap text-[76px] text-[#0d0d0d]">
            {study.title}
          </p>
          <p className="relative shrink-0 font-normal leading-[36px] whitespace-nowrap text-[26px] text-[#6b6b6b]">
            {study.subtitle}
          </p>
          <p className="relative w-[760px] shrink-0 font-normal leading-[30px] text-[18px] text-[#6b6b6b]">
            {study.intro}
          </p>
          <div className="relative flex w-full shrink-0 items-center gap-[10px] overflow-clip pt-[10px]">
            {study.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
            <div className="relative h-px min-w-px flex-[1_0_0]" />
            <a
              href="#"
              className="group relative flex shrink-0 items-center gap-[6px] overflow-clip font-medium leading-[normal] whitespace-nowrap text-[15px] text-[#f97316]"
            >
              <p className="relative shrink-0">{study.linkLabel}</p>
              <p className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                &#8599;
              </p>
            </a>
          </div>
        </motion.div>
        {study.heroCover && (
        <motion.div
          className="relative w-full shrink-0 rounded-[24px] border border-dashed border-[#dcdcdc]"
          style={{ height: study.heroCoverHeight }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
            <img
              alt={`${study.title} cover`}
              className={
                study.heroCoverFit === 'cover'
                  ? 'absolute inset-0 size-full max-w-none object-cover'
                  : 'absolute max-w-none'
              }
              style={
                study.heroCoverFit === 'cover'
                  ? undefined
                  : (study.heroCoverStyle ?? { height: '100%', top: '0', width: '100%', left: '0' })
              }
              src={study.heroCover}
            />
          </div>
        </motion.div>
        )}
      </div>

      {/* Narrative sections */}
      {study.sections.map((section) => (
        <CaseSectionView key={section.label} section={section} />
      ))}

      {/* Screens */}
      <div className="relative flex w-full shrink-0 flex-col items-start gap-[32px] overflow-clip px-[120px] pt-[100px]">
        <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px] overflow-clip leading-[normal] whitespace-nowrap">
          <p className="relative shrink-0 font-medium tracking-[0.96px] text-[12px] text-[#f97316]">
            {study.screensLabel}
          </p>
          <p className="relative shrink-0 font-semibold tracking-[-0.6px] text-[34px] text-[#0d0d0d]">
            {study.screensTitle}
          </p>
        </div>
        <Carousel screens={study.screens} geometry={study.carousel} />
      </div>

      {/* Results */}
      <div className="relative flex w-full shrink-0 flex-col items-start gap-[24px] overflow-clip px-[120px] pt-[80px]">
        <div className="relative flex w-full shrink-0 flex-col items-start gap-[14px] overflow-clip whitespace-nowrap">
          <p className="relative shrink-0 font-medium leading-[normal] tracking-[0.96px] text-[12px] text-[#f97316]">
            {study.results.label}
          </p>
          <p className="relative shrink-0 font-semibold leading-[1.15] text-[34px] text-[#0d0d0d]">
            {study.results.title}
          </p>
        </div>
        {study.results.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </div>

      {/* Reflection */}
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[32px] overflow-clip px-[120px] pt-[100px]"
        style={{ paddingBottom: study.reflection.pb ?? 20 }}
      >
        <div className="relative flex w-[1200px] shrink-0 flex-col items-start gap-[14px] whitespace-nowrap">
          <p className="relative shrink-0 font-medium leading-[1.45] tracking-[0.96px] text-[12px] text-[#f97316]">
            {study.reflection.label}
          </p>
          <p className="relative shrink-0 font-semibold leading-[1.15] text-[34px] text-[#0d0d0d]">
            {study.reflection.title}
          </p>
        </div>
        <Reveal className="w-full shrink-0">
          <div className="relative flex w-full flex-col items-start gap-[32px] rounded-[20px] bg-[#0d0d0d] p-[48px]">
            <p className="relative w-full shrink-0 font-semibold leading-[1.2] text-[28px] text-white">
              {study.reflection.headline}
            </p>
            <div className="relative flex w-full shrink-0 items-start gap-[56px] overflow-clip leading-[1.5]">
              {study.reflection.beats.map((beat) => (
                <div
                  key={beat.label}
                  className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] overflow-clip"
                >
                  <p className="relative w-full shrink-0 font-medium tracking-[0.88px] text-[11px] text-[#f97316]">
                    {beat.label}
                  </p>
                  <p className="relative w-full shrink-0 font-normal text-[16px] text-[#a8a8a8]">
                    {beat.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Project nav */}
      <div className="relative flex w-full shrink-0 flex-col items-start gap-[36px] overflow-clip px-[120px] pt-[80px] pb-[100px]">
        <div className="relative h-px w-full shrink-0 bg-[#e0e0e0]" />
        <div className="relative flex w-full shrink-0 items-center justify-between overflow-clip">
          <Link
            to={study.prev.to}
            className="group relative flex shrink-0 items-center gap-[20px] overflow-clip"
          >
            <div className="relative flex size-[56px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[28px] bg-[#0d0d0d] transition-transform duration-300 group-hover:-translate-x-[4px]">
              <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[35px] text-white">
                &lsaquo;
              </p>
            </div>
            <div className="relative flex shrink-0 flex-col items-start gap-[4px] overflow-clip leading-[normal] whitespace-nowrap">
              <p className="relative shrink-0 font-normal text-[13px] text-[#6b6b6b]">
                Previous project
              </p>
              <p className="relative shrink-0 font-semibold text-[22px] text-[#0d0d0d]">
                {study.prev.label}
              </p>
            </div>
          </Link>
          <Link
            to={study.next.to}
            className="group relative flex shrink-0 items-center gap-[20px] overflow-clip"
          >
            <div className="relative flex shrink-0 flex-col items-end gap-[4px] overflow-clip text-right leading-[normal] whitespace-nowrap">
              <p className="relative shrink-0 font-normal text-[13px] text-[#6b6b6b]">
                Next project
              </p>
              <p className="relative shrink-0 font-semibold text-[22px] text-[#0d0d0d]">
                {study.next.label}
              </p>
            </div>
            <div className="relative flex size-[56px] shrink-0 flex-col items-center justify-center overflow-clip rounded-[28px] bg-[#0d0d0d] transition-transform duration-300 group-hover:translate-x-[4px]">
              <p className="relative h-[51px] w-[13px] shrink-0 font-medium leading-[normal] text-[35px] text-white">
                &rsaquo;
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
