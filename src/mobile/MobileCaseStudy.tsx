import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MobileFooter from './MobileFooter'
import Reveal from '../components/Reveal'
import type { CaseStudy } from '../components/casestudy/CaseStudyPage'
import type { Block, CaseSection, Placement } from '../components/casestudy/blocks'
import type { CarouselGeometry, CarouselScreen } from '../components/casestudy/Carousel'

const easeOut = [0.22, 1, 0.36, 1] as const

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                  */
/* ------------------------------------------------------------------ */

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium tracking-[1px] text-[11px] text-[#f97316]">{label}</p>
      <h2 className="font-semibold leading-[1.15] text-[26px] text-[#0d0d0d]">{title}</h2>
    </div>
  )
}

function Card({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
  return (
    <motion.div
      className="flex flex-col gap-2.5 rounded-[18px] bg-white p-5 shadow-[inset_0_0_0_1px_#ececec]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

/** Crops an image the same way the desktop version does, but scaled to the container width. */
function CroppedImage({
  src,
  alt,
  width,
  height,
  fit,
  style,
  radius = 18,
  background,
}: {
  src: string
  alt: string
  width: number
  height: number
  fit?: 'cover'
  style?: { height: string; top: string; width: string; left?: string }
  radius?: number
  background?: string
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${width} / ${height}`, borderRadius: radius, background }}
    >
      <img
        alt={alt}
        className={
          fit === 'cover' || !style
            ? 'absolute inset-0 size-full max-w-none object-cover'
            : 'absolute max-w-none'
        }
        style={fit === 'cover' || !style ? undefined : style}
        src={src}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Carousel                                                             */
/* ------------------------------------------------------------------ */

function MobileCarousel({
  screens,
  geometry,
}: {
  screens: CarouselScreen[]
  geometry: CarouselGeometry
}) {
  const [index, setIndex] = useState(0)
  const count = screens.length
  const go = (delta: number) => setIndex((current) => (current + delta + count) % count)
  const screen = screens[index]
  const image = screen.size ?? geometry.image
  const portrait = image.height > image.width
  // Portrait phone screens get a taller slide so they are legible; landscape boards keep the desktop slide ratio.
  const aspect = portrait ? '4 / 5' : `${geometry.slideWidth} / ${geometry.slideHeight}`
  const imageStyle = portrait
    ? { height: '92%', width: 'auto' }
    : { width: `${(image.width / geometry.slideWidth) * 100}%`, height: 'auto' }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-[20px] bg-[#141414] p-3">
        <div
          className="relative flex w-full items-center justify-center overflow-hidden"
          style={{
            aspectRatio: aspect,
            background: geometry.slideBackground,
            borderRadius: geometry.slideRadius ?? 0,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={screen.image}
              alt={screen.label}
              className="max-w-none object-contain"
              style={{ ...imageStyle, borderRadius: geometry.image.radius }}
              src={screen.image}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: easeOut }}
            />
          </AnimatePresence>
        </div>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screen"
              className="absolute top-1/2 left-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[22px] text-[#0d0d0d] shadow-md"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screen"
              className="absolute top-1/2 right-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[22px] text-[#0d0d0d] shadow-md"
            >
              &rsaquo;
            </button>
          </>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[13px] text-[#f97316]">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </p>
          <p className="text-[14px] leading-[22px] text-[#6b6b6b]">{screen.caption}</p>
        </div>
        {count > 1 && (
          <div className="flex shrink-0 items-center gap-2 pt-1">
            {screens.map((dot, dotIndex) => (
              <button
                key={dot.label}
                type="button"
                aria-label={`Go to screen ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className="size-2 rounded-full transition-colors"
                style={{ backgroundColor: dotIndex === index ? '#0d0d0d' : '#d4d4d4' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Blocks                                                               */
/* ------------------------------------------------------------------ */

function MobileBlock({ block, placement }: { block: Block; placement?: Placement }) {
  switch (block.kind) {
    case 'paragraphs':
      return (
        <div className="flex flex-col gap-4">
          {block.items.map((paragraph, index) => (
            <p
              key={index}
              className="leading-[1.55]"
              style={{ fontSize: Math.max(15, paragraph.size - 3), color: paragraph.color }}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      )

    case 'cards':
      return (
        <div className="flex flex-col gap-3">
          {block.items.map((card, index) => (
            <Card key={card.title} index={index}>
              <p className="font-semibold leading-[1.35] text-[18px] text-[#0d0d0d]">{card.title}</p>
              {(Array.isArray(card.body) ? card.body : [card.body]).map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-[1.5] text-[#6b6b6b]">
                  {paragraph}
                </p>
              ))}
            </Card>
          ))}
        </div>
      )

    case 'constraints':
      return (
        <div className="flex flex-col gap-3">
          {block.items.map((item, index) => (
            <Card key={item.label} index={index}>
              <p className="font-medium tracking-[0.8px] text-[11px] text-[#f97316]">{item.label}</p>
              <p className="font-semibold leading-[1.35] text-[18px] text-[#0d0d0d]">{item.title}</p>
              <p className="text-[15px] leading-[1.5] text-[#6b6b6b]">{item.body}</p>
              <div className="h-px w-full bg-[#ececec]" />
              <p className="text-[15px] leading-[1.5] whitespace-pre-wrap text-[#0d0d0d]">
                {item.solution}
              </p>
              <p className="text-[14px] leading-[1.5] text-[#6b6b6b]">{item.tradeoff}</p>
            </Card>
          ))}
        </div>
      )

    case 'flow':
      return (
        <div className="flex flex-col items-stretch gap-2">
          {block.steps.map((step, index) => (
            <div key={step.title} className="contents">
              {index > 0 && (
                <p className="text-center text-[20px] leading-none text-[#b0b0b0]">&darr;</p>
              )}
              <div className="flex flex-col gap-1 rounded-[14px] bg-white px-5 py-4 shadow-[inset_0_0_0_1px_#ececec]">
                <p className="font-semibold text-[16px] text-[#0d0d0d]">{step.title}</p>
                <p className="text-[13px] leading-[1.45] text-[#6b6b6b]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case 'decisions':
      return (
        <div className="flex flex-col gap-3">
          {block.items.map((item, index) => (
            <motion.div
              key={item.badge}
              className={`flex flex-col gap-2.5 rounded-[18px] bg-white p-5 ${
                item.selected
                  ? 'shadow-[inset_0_0_0_2px_#f97316]'
                  : 'shadow-[inset_0_0_0_1px_#ececec]'
              }`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: easeOut }}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`flex size-7 items-center justify-center rounded-[7px] font-semibold text-[13px] ${
                    item.selected ? 'bg-[#f97316] text-white' : 'bg-[#f1f1f1] text-[#6b6b6b]'
                  }`}
                >
                  {item.badge}
                </div>
                {item.selected && <p className="font-semibold text-[16px] text-[#f97316]">&#10003;</p>}
              </div>
              <p className="font-semibold leading-[1.35] text-[17px] text-[#0d0d0d]">{item.title}</p>
              <p className="text-[15px] leading-[1.5] text-[#6b6b6b]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      )

    case 'resultCards':
      return (
        <div className="flex flex-col gap-3">
          {block.items.map((card, index) => (
            <Card key={card.title} index={index}>
              <p className="font-semibold text-[20px] text-[#0d0d0d]">{card.title}</p>
              {card.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-[1.6] text-[#6b6b6b]">
                  {paragraph}
                </p>
              ))}
            </Card>
          ))}
        </div>
      )

    case 'note':
      return (
        <div className="flex flex-col gap-2 rounded-[18px] bg-[#f2f2f2] p-5">
          <p className="font-medium tracking-[0.8px] text-[11px] text-[#f97316]">{block.label}</p>
          <p className="text-[14px] leading-[1.55] text-[#6b6b6b]">{block.body}</p>
        </div>
      )

    case 'placeholder':
      return (
        <div className="flex flex-col items-center gap-2 rounded-[18px] border border-dashed border-[#d8d8d8] bg-[#f4f4f4] p-6 text-center text-[#8a8a8a]">
          <p className="font-medium tracking-[1px] text-[12px]">{block.label}</p>
          <p className="text-[14px] leading-[1.5]">{block.body}</p>
        </div>
      )

    case 'artifact':
      return (
        <div className="flex flex-col items-center gap-1.5 rounded-[18px] bg-[#f2f2f2] p-8 text-center text-[#a6a6a6] shadow-[inset_0_0_0_1px_#e6e6e6]">
          <p className="font-medium tracking-[0.8px] text-[11px]">{block.label}</p>
          <p className="text-[14px]">{block.caption}</p>
        </div>
      )

    case 'artifactImage':
      return (
        <div className="overflow-hidden rounded-[18px] bg-[#f2f2f2] p-3 shadow-[inset_0_0_0_1px_#e6e6e6]">
          <img
            alt={block.alt}
            className="block h-auto w-full"
            src={block.src}
            style={{ aspectRatio: `${block.image.width} / ${block.image.height}` }}
          />
        </div>
      )

    case 'processArtifact':
      return (
        <div className="flex justify-center rounded-[18px] border border-dashed border-[#d8d8d8] bg-[#f4f4f4] px-6 py-6">
          <img
            alt={block.alt}
            className="block h-auto w-[72%] max-w-[320px]"
            src={block.src}
            style={{ aspectRatio: `${block.image.width} / ${block.image.height}` }}
          />
        </div>
      )

    case 'cover':
      return (
        <CroppedImage
          src={block.src}
          alt={block.alt}
          width={1200}
          height={block.height}
          fit={block.fit}
          style={block.style}
        />
      )

    case 'nodeImage':
      return (
        <CroppedImage
          src={block.src}
          alt={block.alt}
          width={placement?.width ?? 16}
          height={placement?.height ?? 9}
          fit="cover"
          background={block.background}
        />
      )

    case 'carousel':
      return <MobileCarousel screens={block.screens} geometry={block.geometry} />
  }
}

function MobileSection({ section }: { section: CaseSection }) {
  const blocks: { block: Block; placement?: Placement }[] = section.placed
    ? section.placed.map((placed) => ({ block: placed.block, placement: placed.at }))
    : section.blocks.map((block) => ({ block }))
  const before = section.placed ? 0 : (section.blocksBeforeHead ?? 0)

  return (
    <section className="flex flex-col gap-5 px-5 pt-14">
      {blocks.slice(0, before).map((entry, index) => (
        <MobileBlock key={index} block={entry.block} placement={entry.placement} />
      ))}
      <Reveal>
        <SectionHead label={section.label} title={section.title} />
      </Reveal>
      {blocks.slice(before).map((entry, index) => (
        <MobileBlock key={index} block={entry.block} placement={entry.placement} />
      ))}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function MobileCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#f9f9f9]">
      <MobileNav />

      {/* Hero */}
      <motion.section
        className="flex flex-col gap-4 px-5 pt-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="flex items-center gap-2">
          <span className="block size-1.5 rounded-full bg-[#f97316]" />
          <p className="font-medium tracking-[1.5px] text-[11px] text-[#f97316]">CASE STUDY</p>
        </div>
        <h1 className="font-semibold leading-none tracking-[-1px] text-[44px] text-[#0d0d0d]">
          {study.title}
        </h1>
        <p className="text-[18px] leading-[1.4] text-[#6b6b6b]">{study.subtitle}</p>
        <p className="text-[15px] leading-[25px] text-[#6b6b6b]">{study.intro}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f2f2f2] px-3.5 py-2 font-medium text-[13px] text-[#0d0d0d]"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="flex items-center gap-1.5 font-medium text-[15px] text-[#f97316]">
          {study.linkLabel} <span>&#8599;</span>
        </a>
        {study.heroCover && (
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          >
            <CroppedImage
              src={study.heroCover}
              alt={`${study.title} cover`}
              width={1200}
              height={study.heroCoverHeight ?? 800}
              fit={study.heroCoverFit}
              style={study.heroCoverStyle}
            />
          </motion.div>
        )}
      </motion.section>

      {study.sections.map((section) => (
        <MobileSection key={section.label} section={section} />
      ))}

      {/* Screens */}
      <section className="flex flex-col gap-5 px-5 pt-14">
        <Reveal>
          <SectionHead label={study.screensLabel} title={study.screensTitle} />
        </Reveal>
        <MobileCarousel screens={study.screens} geometry={study.carousel} />
      </section>

      {/* Results */}
      <section className="flex flex-col gap-5 px-5 pt-14">
        <Reveal>
          <SectionHead label={study.results.label} title={study.results.title} />
        </Reveal>
        {study.results.blocks.map((block, index) => (
          <MobileBlock key={index} block={block} />
        ))}
      </section>

      {/* Reflection */}
      <section className="flex flex-col gap-5 px-5 pt-14">
        <Reveal>
          <SectionHead label={study.reflection.label} title={study.reflection.title} />
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-6 rounded-[18px] bg-[#0d0d0d] p-6">
            <p className="font-semibold leading-[1.25] text-[22px] text-white">
              {study.reflection.headline}
            </p>
            {study.reflection.beats.map((beat) => (
              <div key={beat.label} className="flex flex-col gap-2">
                <p className="font-medium tracking-[0.8px] text-[11px] text-[#f97316]">{beat.label}</p>
                <p className="text-[15px] leading-[1.55] text-[#a8a8a8]">{beat.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Project nav */}
      <section className="flex flex-col gap-5 px-5 pt-12">
        <div className="h-px w-full bg-[#e0e0e0]" />
        <div className="flex items-center justify-between gap-4">
          <Link to={study.prev.to} className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-[26px] leading-none text-white">
              &lsaquo;
            </div>
            <div className="flex min-w-0 flex-col">
              <p className="text-[12px] text-[#6b6b6b]">Previous</p>
              <p className="truncate font-semibold text-[16px] text-[#0d0d0d]">{study.prev.label}</p>
            </div>
          </Link>
          <Link to={study.next.to} className="flex min-w-0 items-center gap-3 text-right">
            <div className="flex min-w-0 flex-col items-end">
              <p className="text-[12px] text-[#6b6b6b]">Next</p>
              <p className="truncate font-semibold text-[16px] text-[#0d0d0d]">{study.next.label}</p>
            </div>
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-[26px] leading-none text-white">
              &rsaquo;
            </div>
          </Link>
        </div>
      </section>

      <MobileFooter />
    </div>
  )
}
