import { motion } from 'framer-motion'
import Nav, { ContactMeButton } from '../components/Nav'
import Eyebrow from '../components/Eyebrow'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { landingProjects } from '../data/projects'
import { processSteps, reviews, stats, tools } from '../data/landing'
import portrait from '../assets/landing/portrait.png'
import dotGreen from '../assets/landing/dot-green.svg'
import dotOrange from '../assets/landing/dot-orange.svg'
import stripCard1 from '../assets/landing/strip/card-1.png'
import stripCard2 from '../assets/landing/strip/card-2.png'
import stripCard3 from '../assets/landing/strip/card-3.png'

const easeOut = [0.22, 1, 0.36, 1] as const

/** Cards from the hero strip (Figma 189:5912), exported already clipped to the 1440px canvas. */
const stripCards = [
  { src: stripCard1, alt: 'Budget Buddy dashboard', left: 0, width: 437 },
  { src: stripCard2, alt: 'Budget Buddy dashboard and summary screens', left: 459, width: 544 },
  { src: stripCard3, alt: 'Marbella Skin landing page', left: 1025, width: 415 },
]

export default function Home() {
  return (
    <div className="relative size-full bg-[#f9f9f9]" data-node-id="176:1413">
      {/* ------------------------------ Hero ------------------------------ */}
      <div className="relative h-[1470px] w-[1440px]">
        <Nav variant="home" />

        <motion.div
          className="absolute top-[190px] left-1/2 flex -translate-x-1/2 items-center gap-[15px]"
          data-node-id="176:1436"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          <div className="relative size-[15px] shrink-0">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={dotGreen} />
          </div>
          <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[20px] text-black">
            Available to work
          </p>
        </motion.div>

        <motion.div
          className="absolute top-[255px] left-[calc(50%+0.5px)] h-[247px] w-[253px] -translate-x-1/2 rounded-[34px] border-[21px] border-solid border-white"
          data-node-id="176:1442"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[34px]">
            <img
              alt="Onamma Nwosu"
              className="absolute top-[-20.66%] left-0 h-[140.11%] w-[99.99%] max-w-none"
              src={portrait}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[531px] left-[calc(50%-0.5px)] flex w-[727px] -translate-x-1/2 flex-col items-center gap-[10px] leading-[normal] whitespace-nowrap text-black"
          data-node-id="176:1439"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
        >
          <p className="relative shrink-0 text-center font-normal text-[62px]">Onamma Nwosu</p>
          <p className="relative shrink-0 font-semibold text-[38px]">
            Product Designer &middot; UI/UX &middot; Web &amp; Mobile
          </p>
        </motion.div>

        <motion.p
          className="absolute top-[690px] left-1/2 w-[852px] -translate-x-1/2 text-center font-normal leading-[35px] text-[25px] text-[#626262]"
          data-node-id="176:1443"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
        >
          I take messy product problems, make sense of them, and turn them into clear experiences
          that work for both the user and the business.
        </motion.p>

        <motion.div
          className="absolute top-[789px] left-[calc(50%+0.5px)] flex -translate-x-1/2 items-center gap-[17px]"
          data-node-id="176:1424"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
        >
          <ContactMeButton />
          <motion.a
            href="#projects"
            className="relative flex w-[182px] shrink-0 items-center justify-center rounded-[34px] bg-[rgba(13,13,13,0.87)] px-[35px] py-[15px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            <div className="relative flex shrink-0 items-center">
              <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[20px] text-white">
                View Projects
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Project card strip. The Figma strip starts 107px off-canvas, so the first and last cards are clipped by the page edge. */}
        <div
          className="pointer-events-none absolute top-[944px] left-0 h-[430px] w-[1440px] overflow-clip"
          data-node-id="189:5912"
        >
          {stripCards.map((card, index) => (
            <motion.img
              key={card.src}
              alt={card.alt}
              className="absolute top-0 h-[430px] max-w-none"
              style={{ left: card.left, width: card.width }}
              src={card.src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 + index * 0.1, ease: easeOut }}
            />
          ))}
        </div>
      </div>

      {/* --------------------------- Sections --------------------------- */}
      <div className="flex w-[1440px] flex-col items-start" data-node-id="176:1444">
        {/* Live projects */}
        <div
          id="projects"
          className="relative flex w-full shrink-0 flex-col items-start gap-[72px] overflow-clip px-[120px] pt-[130px]"
          data-node-id="176:1445"
        >
          <Reveal className="relative w-full shrink-0">
            <div className="flex w-full items-center justify-between overflow-clip">
              <div className="relative flex shrink-0 flex-col items-start gap-[16px] overflow-clip">
                <Eyebrow>SELECTED WORK</Eyebrow>
                <p className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[56px] text-[#0d0d0d]">
                  Live projects
                </p>
              </div>
              <motion.a
                href="#projects"
                className="group relative flex shrink-0 items-center gap-[10px] overflow-clip rounded-[34px] shadow-[inset_0_0_0_1.5px_rgba(13,13,13,0.8)] px-[32px] py-[18px] font-semibold leading-[normal] whitespace-nowrap text-[20px] text-[#0d0d0d]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <p className="relative shrink-0">See all work</p>
                <p className="relative shrink-0">&#8599;</p>
              </motion.a>
            </div>
          </Reveal>

          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[28px] overflow-clip"
            data-node-id="176:1455"
          >
            {landingProjects.map((project) => (
              <ProjectCard key={project.nodeId} project={project} />
            ))}
          </div>
        </div>

        {/* About */}
        <div
          id="about"
          className="relative flex w-full shrink-0 flex-col items-start gap-[56px] overflow-clip px-[120px] pt-[150px]"
          data-node-id="176:1555"
        >
          <Reveal className="relative shrink-0">
            <div className="flex flex-col items-start gap-[16px] overflow-clip">
              <Eyebrow>EXPERIENCE</Eyebrow>
              <p className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[56px] text-[#0d0d0d]">
                2 years of shipping, not just designing
              </p>
            </div>
          </Reveal>

          <div
            className="relative flex w-[1261px] shrink-0 items-start gap-[72px] overflow-clip"
            data-node-id="176:1561"
          >
            <Reveal className="shrink-0">
              <div className="relative h-[520px] w-[440px] rounded-[42px]">
                <img
                  alt="Onamma Nwosu"
                  className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[42px] object-cover"
                  src={portrait}
                />
              </div>
            </Reveal>
            <Reveal className="shrink-0" delay={0.1}>
              <div className="flex w-[763px] flex-col items-start gap-[26px] overflow-clip">
                <p className="relative w-[620px] shrink-0 font-medium leading-[38px] whitespace-pre-wrap text-[26px] text-[#0d0d0d]">
                  {'Product designer, 2 years in UI/UX  designing and shipping real products across AI, fintech and e-commerce.'}
                </p>
                <p className="relative w-[620px] shrink-0 font-normal leading-[32px] text-[20px] text-[#0d0d0d]">
                  I am Onamma Nwosu, a product designer with 2 years of experience in UI/UX. I have
                  shipped work across AI, fintech, e-commerce and career tech &mdash; taking
                  products from a messy first brief to an interface people can actually use.
                </p>
                <p className="relative w-[620px] shrink-0 font-normal leading-[32px] text-[20px] text-[#626262]">
                  {'I design and I build. I ship with Framer, Web flow & Claude, which means my work does not stop at a static mockup it goes out as a live, responsive product in days rather than weeks. That is the difference between a team debating an idea and a team watching real users try it.'}
                </p>
                <div className="relative flex shrink-0 items-center overflow-clip pt-[14px]">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="flex items-center">
                      {index > 0 && (
                        <div className="relative h-[54px] w-px shrink-0 bg-[#e0e0e0]" />
                      )}
                      <div
                        className={`relative flex shrink-0 flex-col items-start gap-[6px] overflow-clip leading-[normal] whitespace-nowrap ${
                          index === 0 ? 'pr-[32px]' : 'px-[32px]'
                        }`}
                      >
                        <p className="relative shrink-0 font-semibold text-[30px] text-[#0d0d0d]">
                          {stat.value}
                        </p>
                        <p className="relative shrink-0 font-normal text-[16px] text-[#626262]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="relative flex shrink-0 items-center gap-[12px] overflow-clip rounded-[34px] shadow-[inset_0_0_0_1.5px_rgba(13,13,13,0.8)] px-[35px] py-[18px] font-semibold leading-[normal] whitespace-nowrap text-[20px] text-[#0d0d0d]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <p className="relative shrink-0">Download CV</p>
                  <p className="relative shrink-0">&darr;</p>
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Process */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[56px] overflow-clip px-[120px] pt-[150px]"
          data-node-id="176:1582"
        >
          <Reveal className="relative shrink-0">
            <div className="flex flex-col items-start gap-[16px] overflow-clip">
              <Eyebrow>PROCESS</Eyebrow>
              <p className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[56px] text-[#0d0d0d]">
                How I work
              </p>
              <p className="relative w-[700px] shrink-0 font-normal leading-[32px] text-[20px] text-[#626262]">
                Four steps, in the same order every time. The first two are the ones that decide
                whether the last two are worth anything.
              </p>
            </div>
          </Reveal>
          <div className="relative flex w-full shrink-0 items-start gap-[24px] overflow-clip">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[14px] self-stretch overflow-clip rounded-[32px] shadow-[inset_0_0_0_1px_#e5e5e5] bg-white px-[30px] py-[32px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: easeOut }}
                whileHover={{ y: -6 }}
              >
                <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[34px] text-[#f97316]">
                  {step.number}
                </p>
                <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[24px] text-[#0d0d0d]">
                  {step.title}
                </p>
                <p className="relative w-[222px] shrink-0 font-normal leading-[26px] text-[16px] text-[#626262]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px] overflow-clip px-[120px] pt-[130px]"
          data-node-id="176:1606"
        >
          <Reveal className="relative shrink-0">
            <div className="flex flex-col items-start gap-[14px] overflow-clip">
              <Eyebrow>TOOLKIT</Eyebrow>
              <p className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[44px] text-[#0d0d0d]">
                Tools I reach for
              </p>
              <p className="relative w-[700px] shrink-0 font-normal leading-[32px] text-[20px] text-[#626262]">
                Design tools on the left of the handoff, code on the right of it.
              </p>
            </div>
          </Reveal>
          <div className="relative flex w-full shrink-0 flex-wrap content-start items-start gap-[14px] overflow-clip">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                className="relative flex shrink-0 items-start overflow-clip rounded-[34px] shadow-[inset_0_0_0_1px_#e5e5e5] bg-white px-[28px] py-[16px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: easeOut }}
                whileHover={{ y: -4 }}
              >
                <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[18px] text-[#0d0d0d]">
                  {tool}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client reviews */}
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[56px] overflow-clip px-[120px] pt-[136px]"
          data-node-id="176:1626"
        >
          <Reveal className="relative shrink-0">
            <div className="flex flex-col items-start gap-[16px] overflow-clip">
              <Eyebrow>CLIENT REVIEWS</Eyebrow>
              <p className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[56px] text-[#0d0d0d]">
                What it is like to work with me
              </p>
              <p className="relative w-[700px] shrink-0 font-normal leading-[32px] text-[20px] text-[#626262]">
                Placeholder quotes &mdash; swap in real words from a client, teammate or lecturer
                before this page goes live.
              </p>
            </div>
          </Reveal>
          <div className="relative flex w-full shrink-0 items-start gap-[24px] overflow-clip">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[20px] self-stretch overflow-clip rounded-[32px] shadow-[inset_0_0_0_1px_#e5e5e5] bg-white p-[36px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: easeOut }}
                whileHover={{ y: -6 }}
              >
                <p className="relative shrink-0 font-medium leading-[normal] tracking-[2px] whitespace-nowrap text-[20px] text-[#f97316]">
                  {'★★★★★'}
                </p>
                <p className="relative w-[312px] shrink-0 font-normal leading-[29px] text-[18px] text-[#0d0d0d]">
                  {review.quote}
                </p>
                <div className="relative h-px w-full shrink-0 bg-[#e5e5e5]" />
                <div className="relative flex shrink-0 items-center gap-[14px] overflow-clip">
                  <div
                    className={`relative flex size-[48px] shrink-0 items-center justify-center overflow-clip rounded-[34px] ${
                      review.avatar ? '' : 'bg-[#f2f2f2]'
                    }`}
                  >
                    {review.avatar && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[34px]"
                      >
                        <div className="absolute inset-0 rounded-[34px] bg-[#f2f2f2]" />
                        <img
                          alt=""
                          className="absolute size-full max-w-none rounded-[34px] object-cover"
                          src={review.avatar}
                        />
                      </div>
                    )}
                    <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[16px] text-[#626262]">
                      {review.initials}
                    </p>
                  </div>
                  <div className="relative flex shrink-0 flex-col items-start gap-[4px] overflow-clip leading-[normal]">
                    <p className="relative shrink-0 font-medium whitespace-nowrap text-[17px] text-[#0d0d0d]">
                      {review.name}
                    </p>
                    <p className="relative shrink-0 font-normal whitespace-pre text-[15px] text-[#626262]">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          id="contact"
          className="relative flex w-full shrink-0 flex-col items-start overflow-clip px-[120px] pt-[150px]"
          data-node-id="176:1664"
        >
          <Reveal className="w-full shrink-0">
            <div className="relative flex w-full flex-col items-center gap-[22px] overflow-clip rounded-[48px] bg-[#0d0d0d] px-[100px] py-[96px]">
              <div className="relative flex shrink-0 items-center gap-[12px] overflow-clip">
                <div className="relative size-[10px] shrink-0">
                  <img
                    alt=""
                    className="absolute inset-0 block size-full max-w-none"
                    src={dotOrange}
                  />
                </div>
                <p className="relative shrink-0 font-medium leading-[normal] tracking-[2.4px] whitespace-nowrap text-[16px] text-[#f97316]">
                  AVAILABLE TO WORK
                </p>
              </div>
              <p className="relative shrink-0 text-center font-normal leading-[normal] whitespace-nowrap text-[62px] text-white">
                Have a project in mind?
              </p>
              <p className="relative w-[700px] shrink-0 text-center font-normal leading-[34px] text-[22px] text-[rgba(255,255,255,0.72)]">
                Tell me what is not working and who it is not working for. I will tell you honestly
                whether design is the fix.
              </p>
              <div className="relative flex shrink-0 items-start gap-[17px] overflow-clip pt-[18px]">
                <motion.a
                  href="mailto:onammanwosu19@gmail.com"
                  className="relative flex shrink-0 items-center gap-[2px] overflow-clip rounded-[34px] bg-[#f97316] px-[35px] py-[15px] font-semibold leading-[normal] whitespace-nowrap text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <p className="relative shrink-0 text-[20px]">Contact Me</p>
                  <p className="relative shrink-0 text-[22px]">&#8599;</p>
                </motion.a>
                <motion.a
                  href="#projects"
                  className="relative flex shrink-0 items-center overflow-clip rounded-[34px] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35)] px-[35px] py-[15px]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[20px] text-white">
                    View Projects
                  </p>
                </motion.a>
              </div>
              <div className="relative flex shrink-0 items-center gap-[10px] overflow-clip pt-[22px] leading-[normal] whitespace-nowrap text-[18px]">
                <p className="relative shrink-0 font-normal text-[rgba(255,255,255,0.55)]">
                  or email me directly &mdash;
                </p>
                <p className="relative shrink-0 font-medium text-white">onammanwosu19@gmail.com</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Footer />
      </div>
    </div>
  )
}
