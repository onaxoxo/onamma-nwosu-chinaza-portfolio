import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Eyebrow from '../components/Eyebrow'
import { workFilters, workProjects } from '../data/work'
import type { WorkFilter, WorkProject } from '../data/work'

const easeOut = [0.22, 1, 0.36, 1] as const

function ProjectLink({ project }: { project: WorkProject }) {
  const className =
    'group relative flex shrink-0 items-center gap-[8px] overflow-clip pt-[10px] font-semibold leading-[normal] whitespace-nowrap text-[18px] text-[#f97316]'
  const inner = (
    <>
      <p className="relative shrink-0">{project.linkLabel}</p>
      <p className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
        &#8599;
      </p>
    </>
  )
  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    )
  }
  if (project.to) {
    return (
      <Link to={project.to} className={className}>
        {inner}
      </Link>
    )
  }
  return <div className={className}>{inner}</div>
}

function WorkCard({ project }: { project: WorkProject }) {
  return (
    <motion.div
      layout
      className="relative flex w-[588px] shrink-0 flex-col items-start gap-[20px] overflow-clip rounded-[42px] bg-white p-[24px] shadow-[inset_0_0_0_1px_#e5e5e5]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: easeOut }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-[28px]">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={project.thumbnail}
        />
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-start gap-[14px] overflow-clip">
        <div className="relative flex shrink-0 items-center gap-[12px] overflow-clip leading-[normal] whitespace-nowrap">
          <p className="relative shrink-0 font-semibold tracking-[1px] text-[18px] text-[#f97316]">
            {project.index}
          </p>
          <p className="relative shrink-0 font-normal text-[16px] text-[#626262]">&mdash;</p>
          <p className="relative shrink-0 font-medium text-[16px] text-[#626262]">{project.meta}</p>
        </div>
        <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[32px] text-[#0d0d0d]">
          {project.title}
        </p>
        <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[18px] text-[#626262]">
          {project.subtitle}
        </p>
        <div className="relative flex shrink-0 items-start gap-[10px] overflow-clip pt-[6px]">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="relative flex shrink-0 items-start overflow-clip rounded-[20px] bg-[#f2f2f2] px-[18px] py-[10px]"
            >
              <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[15px] text-[#0d0d0d]">
                {tag}
              </p>
            </div>
          ))}
        </div>
        <ProjectLink project={project} />
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [filter, setFilter] = useState<WorkFilter>('All')
  const visible = workProjects.filter(
    (project) => filter === 'All' || project.categories.includes(filter),
  )

  return (
    <div className="relative flex size-full flex-col items-start bg-[#f9f9f9]">
      <div className="relative h-[128px] w-full shrink-0">
        <Nav variant="case" />
      </div>

      {/* Header */}
      <motion.div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px] px-[120px] pt-[130px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <Eyebrow>ALL WORK</Eyebrow>
        <p className="relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[56px] text-[#0d0d0d]">
          Everything in one place
        </p>
        <p className="relative w-[700px] shrink-0 font-normal leading-[32px] text-[20px] text-[#6b6b6b]">
          Every project I have shipped, newest first. Filter to narrow it down.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="relative flex w-full shrink-0 flex-wrap content-start items-start gap-[14px] px-[120px] pt-[40px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
      >
        {workFilters.map((item) => {
          const active = item === filter
          return (
            <motion.button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`relative flex shrink-0 items-start overflow-clip rounded-[34px] px-[28px] py-[16px] font-medium leading-[normal] whitespace-nowrap text-[18px] transition-colors duration-200 ${
                active
                  ? 'bg-[#0d0d0d] text-white'
                  : 'bg-white text-[#0d0d0d] shadow-[inset_0_0_0_1px_#e5e5e5] hover:bg-[#f2f2f2]'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {item}
            </motion.button>
          )
        })}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="relative flex w-full shrink-0 flex-wrap gap-x-[24px] gap-y-[28px] px-[120px] pt-[56px]"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <WorkCard key={project.index} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      <Footer />
    </div>
  )
}
