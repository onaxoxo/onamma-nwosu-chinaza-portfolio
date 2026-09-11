import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import Reveal from '../Reveal'
import { BlockRenderer, CaseEyebrow, CaseSectionView, Chip } from './blocks'
import type { CaseSection } from './blocks'
import Carousel from './Carousel'
import type { CarouselGeometry, CarouselScreen } from './Carousel'

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
  screens: CarouselScreen[]
  carousel: CarouselGeometry
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
