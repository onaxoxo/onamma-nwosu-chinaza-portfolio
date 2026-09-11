import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MobileFooter from './MobileFooter'
import Reveal from '../components/Reveal'
import { landingProjects } from '../data/projects'
import { processSteps, reviews, stats, tools } from '../data/landing'
import portrait from '../assets/landing/portrait.png'
import dotGreen from '../assets/landing/dot-green.svg'
import dotOrange from '../assets/landing/dot-orange.svg'
import stripCard1 from '../assets/landing/strip/card-1.png'
import stripCard2 from '../assets/landing/strip/card-2.png'
import stripCard3 from '../assets/landing/strip/card-3.png'
import stripCard4 from '../assets/landing/strip/card-4.png'
import stripCard5 from '../assets/landing/strip/card-5.png'
import stripCard6 from '../assets/landing/strip/card-6.png'
import stripCard7 from '../assets/landing/strip/card-7.png'
import stripCard8 from '../assets/landing/strip/card-8.png'
import Marquee from '../components/Marquee'
import StackedCards from '../components/StackedCards'

const easeOut = [0.22, 1, 0.36, 1] as const

const stripCards = [
  { src: stripCard1, alt: 'Budget Buddy dashboard' },
  { src: stripCard2, alt: 'Budget Buddy dashboard and summary screens' },
  { src: stripCard3, alt: 'Marbella Skin landing page' },
  { src: stripCard4, alt: 'Ocicat AI Studio landing page' },
  { src: stripCard5, alt: 'CVER landing page' },
  { src: stripCard6, alt: 'Vendify home screen' },
  { src: stripCard7, alt: 'Vendify welcome screen' },
  { src: stripCard8, alt: 'Vendify chat list' },
]

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2">
      <img alt="" className="block size-2" src={dotOrange} />
      <p className="font-medium tracking-[2px] text-[12px] text-[#f97316]">{children}</p>
    </div>
  )
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-normal leading-[1.1] text-[32px] text-[#0d0d0d]">{children}</h2>
}

const primaryButton =
  'flex items-center justify-center gap-1 rounded-full bg-[#f97316] px-7 py-4 font-semibold text-[16px] text-white'
const darkButton =
  'flex items-center justify-center rounded-full bg-[rgba(13,13,13,0.87)] px-7 py-4 font-semibold text-[16px] text-white'
const outlineButton =
  'flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-[16px] text-[#0d0d0d] shadow-[inset_0_0_0_1.5px_rgba(13,13,13,0.8)]'

export default function MobileHome() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#f9f9f9]">
      <MobileNav />

      {/* Hero */}
      <section className="flex flex-col items-center px-5 pt-8 pb-10 text-center">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
        >
          <img alt="" className="block size-3" src={dotGreen} />
          <p className="font-medium text-[15px] text-black">Available to work</p>
        </motion.div>

        <motion.div
          className="relative mt-6 size-[164px] rounded-[26px] border-[12px] border-white"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]">
            <img
              alt="Onamma Nwosu"
              className="absolute top-[-20.66%] left-0 h-[140.11%] w-full max-w-none"
              src={portrait}
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-7 flex flex-col gap-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
        >
          <h1 className="font-normal leading-none text-[40px] text-black">Onamma Nwosu</h1>
          <p className="font-semibold leading-[1.2] text-[20px] text-black">
            Product Designer &middot; UI/UX &middot; Web &amp; Mobile
          </p>
        </motion.div>

        <motion.p
          className="mt-5 max-w-[340px] text-[16px] leading-[26px] text-[#626262]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
        >
          I take messy product problems, make sense of them, and turn them into clear experiences
          that work for both the user and the business.
        </motion.p>

        <motion.div
          className="mt-7 flex w-full max-w-[340px] flex-col gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: easeOut }}
        >
          <a href="#contact" className={primaryButton}>
            Contact Me &#8599;
          </a>
          <a href="#projects" className={darkButton}>
            View Projects
          </a>
        </motion.div>
      </section>

      {/* Project strip, looping endlessly. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
      >
        <Marquee gap={12} speed={40}>
          {stripCards.map((card) => (
            <img
              key={card.src}
              alt={card.alt}
              className="h-[230px] w-[291px] max-w-none shrink-0"
              src={card.src}
            />
          ))}
        </Marquee>
      </motion.div>

      {/* Live projects */}
      <section id="projects" className="flex flex-col gap-6 px-5 pt-16">
        <Reveal>
          <div className="flex flex-col gap-3">
            <Eyebrow>SELECTED WORK</Eyebrow>
            <SectionTitle>Live projects</SectionTitle>
          </div>
        </Reveal>
        <StackedCards top={84} step={10} gap={16} minScale={0.95}>
          {landingProjects.map((project, index) => (
            <motion.div
              key={project.nodeId}
              className="flex flex-col overflow-clip rounded-[28px] bg-white shadow-[inset_0_0_0_1px_#e5e5e5]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.05, ease: easeOut }}
            >
              {project.thumbnail && (
                <div className="relative m-3 h-[220px] overflow-hidden rounded-[20px]">
                  <img
                    alt=""
                    className={`absolute inset-0 size-full max-w-none object-cover ${
                      project.thumbnailFit === 'top' ? 'object-top' : ''
                    }`}
                    src={project.thumbnail}
                  />
                </div>
              )}
              <div className="flex flex-col gap-3 px-5 pt-3 pb-6">
                <div className="flex items-center gap-2 text-[14px]">
                  <p className="font-semibold tracking-[1px] text-[#f97316]">{project.index}</p>
                  <p className="text-[#626262]">&mdash;</p>
                  <p className="font-medium text-[#626262]">{project.meta}</p>
                </div>
                <p className="font-semibold leading-tight text-[26px] text-[#0d0d0d]">
                  {project.title}
                </p>
                <p className="font-medium text-[16px] text-[#626262]">{project.subtitle}</p>
                <p className="text-[15px] leading-[24px] text-[#626262]">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f2f2f2] px-3.5 py-2 font-medium text-[13px] text-[#0d0d0d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.to}
                  className="flex items-center gap-1.5 pt-2 font-semibold text-[16px] text-[#f97316]"
                >
                  {project.linkLabel} <span>&#8599;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </StackedCards>
      </section>

      {/* About */}
      <section id="about" className="flex flex-col gap-6 px-5 pt-16">
        <Reveal>
          <div className="flex flex-col gap-3">
            <Eyebrow>EXPERIENCE</Eyebrow>
            <SectionTitle>2 years of shipping, not just designing</SectionTitle>
          </div>
        </Reveal>
        <Reveal>
          <div className="relative h-[360px] w-full overflow-hidden rounded-[28px]">
            <img
              alt="Onamma Nwosu"
              className="absolute inset-0 size-full max-w-none object-cover"
              src={portrait}
            />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-[19px] leading-[28px] text-[#0d0d0d]">
              Product designer, 2 years in UI/UX designing and shipping real products across AI,
              fintech and e-commerce.
            </p>
            <p className="text-[16px] leading-[26px] text-[#0d0d0d]">
              I am Onamma Nwosu, a product designer with 2 years of experience in UI/UX. I have
              shipped work across AI, fintech, e-commerce and career tech &mdash; taking products
              from a messy first brief to an interface people can actually use.
            </p>
            <p className="text-[16px] leading-[26px] text-[#626262]">
              I design and I build. I ship with Framer, Webflow &amp; Claude, which means my work
              does not stop at a static mockup &mdash; it goes out as a live, responsive product in
              days rather than weeks. That is the difference between a team debating an idea and a
              team watching real users try it.
            </p>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="font-semibold leading-tight text-[22px] text-[#0d0d0d]">
                    {stat.value}
                  </p>
                  <p className="text-[14px] text-[#626262]">{stat.label}</p>
                </div>
              ))}
            </div>
            <a href="#" className={`${outlineButton} mt-2 self-start`}>
              Download CV <span>&darr;</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="flex flex-col gap-6 px-5 pt-16">
        <Reveal>
          <div className="flex flex-col gap-3">
            <Eyebrow>PROCESS</Eyebrow>
            <SectionTitle>How I work</SectionTitle>
            <p className="text-[16px] leading-[26px] text-[#626262]">
              Four steps, in the same order every time. The first two are the ones that decide
              whether the last two are worth anything.
            </p>
          </div>
        </Reveal>
        <div className="flex flex-col gap-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col gap-2 rounded-[24px] bg-white px-6 py-6 shadow-[inset_0_0_0_1px_#e5e5e5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: easeOut }}
            >
              <p className="font-semibold text-[26px] text-[#f97316]">{step.number}</p>
              <p className="font-semibold text-[20px] text-[#0d0d0d]">{step.title}</p>
              <p className="text-[15px] leading-[24px] text-[#626262]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="flex flex-col gap-5 px-5 pt-16">
        <Reveal>
          <div className="flex flex-col gap-3">
            <Eyebrow>TOOLKIT</Eyebrow>
            <SectionTitle>Tools I reach for</SectionTitle>
            <p className="text-[16px] leading-[26px] text-[#626262]">
              Design tools on the left of the handoff, code on the right of it.
            </p>
          </div>
        </Reveal>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              className="rounded-full bg-white px-5 py-3 font-medium text-[15px] text-[#0d0d0d] shadow-[inset_0_0_0_1px_#e5e5e5]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: easeOut }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="flex flex-col gap-6 px-5 pt-16">
        <Reveal>
          <div className="flex flex-col gap-3">
            <Eyebrow>CLIENT REVIEWS</Eyebrow>
            <SectionTitle>What it is like to work with me</SectionTitle>
          </div>
        </Reveal>
        <div className="flex flex-col gap-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="flex flex-col gap-4 rounded-[24px] bg-white p-6 shadow-[inset_0_0_0_1px_#e5e5e5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: easeOut }}
            >
              <p className="font-medium tracking-[2px] text-[16px] text-[#f97316]">{'★★★★★'}</p>
              <p className="text-[15px] leading-[25px] text-[#0d0d0d]">{review.quote}</p>
              <div className="h-px w-full bg-[#e5e5e5]" />
              <div className="flex items-center gap-3">
                <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f2f2f2]">
                  {review.avatar ? (
                    <img alt="" className="absolute inset-0 size-full object-cover" src={review.avatar} />
                  ) : (
                    <p className="font-semibold text-[14px] text-[#626262]">{review.initials}</p>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-[15px] text-[#0d0d0d]">{review.name}</p>
                  <p className="text-[13px] text-[#626262]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 pt-16">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-[28px] bg-[#0d0d0d] px-6 py-10 text-center">
            <div className="flex items-center gap-2">
              <img alt="" className="block size-2" src={dotOrange} />
              <p className="font-medium tracking-[2px] text-[12px] text-[#f97316]">AVAILABLE TO WORK</p>
            </div>
            <p className="font-normal leading-[1.1] text-[34px] text-white">Have a project in mind?</p>
            <p className="text-[16px] leading-[26px] text-[rgba(255,255,255,0.72)]">
              Tell me what is not working and who it is not working for. I will tell you honestly
              whether design is the fix.
            </p>
            <div className="mt-2 flex w-full flex-col gap-3">
              <a href="mailto:onammanwosu19@gmail.com" className={primaryButton}>
                Contact Me &#8599;
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center rounded-full px-7 py-4 font-semibold text-[16px] text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35)]"
              >
                View Projects
              </a>
            </div>
            <p className="pt-2 text-[14px] text-[rgba(255,255,255,0.55)]">
              or email me directly &mdash;{' '}
              <span className="font-medium text-white">onammanwosu19@gmail.com</span>
            </p>
          </div>
        </Reveal>
      </section>

      <MobileFooter />
    </div>
  )
}
