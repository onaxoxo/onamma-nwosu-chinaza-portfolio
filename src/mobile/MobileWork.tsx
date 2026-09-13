import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MobileFooter from './MobileFooter'
import dotOrange from '../assets/landing/dot-orange.svg'
import { workFilters, workProjects } from '../data/work'
import type { WorkFilter, WorkProject } from '../data/work'

const easeOut = [0.22, 1, 0.36, 1] as const

function ProjectLink({ project }: { project: WorkProject }) {
  const className = 'flex items-center gap-1.5 pt-2 font-semibold text-[16px] text-[#f97316]'
  const inner = (
    <>
      {project.linkLabel} <span>&#8599;</span>
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

export default function MobileWork() {
  const [filter, setFilter] = useState<WorkFilter>('All')
  const visible = workProjects.filter(
    (project) => filter === 'All' || project.categories.includes(filter),
  )

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#f9f9f9]">
      <MobileNav />

      <motion.section
        className="flex flex-col gap-3 px-5 pt-8"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="flex items-center gap-2">
          <img alt="" className="block size-2" src={dotOrange} />
          <p className="font-medium tracking-[2px] text-[12px] text-[#f97316]">ALL WORK</p>
        </div>
        <h1 className="font-normal leading-[1.1] text-[34px] text-[#0d0d0d]">Everything in one place</h1>
        <p className="text-[16px] leading-[26px] text-[#626262]">
          Every project I have shipped, newest first. Filter to narrow it down.
        </p>
      </motion.section>

      {/* Filters scroll sideways inside the row; the page stays vertical. */}
      <div className="mt-6 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {workFilters.map((item) => {
          const active = item === filter
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full px-5 py-3 font-medium text-[15px] whitespace-nowrap transition-colors ${
                active ? 'bg-[#0d0d0d] text-white' : 'bg-white text-[#0d0d0d] shadow-[inset_0_0_0_1px_#e5e5e5]'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>

      <section className="flex flex-col gap-4 px-5 pt-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.index}
              layout
              className="flex flex-col overflow-clip rounded-[28px] bg-white shadow-[inset_0_0_0_1px_#e5e5e5]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <div className="relative m-3 h-[210px] overflow-hidden rounded-[20px]">
                <img
                  alt=""
                  className="absolute inset-0 size-full max-w-none object-cover"
                  src={project.thumbnail}
                />
              </div>
              <div className="flex flex-col gap-3 px-5 pt-3 pb-6">
                <div className="flex items-center gap-2 text-[14px]">
                  <p className="font-semibold tracking-[1px] text-[#f97316]">{project.index}</p>
                  <p className="text-[#626262]">&mdash;</p>
                  <p className="font-medium text-[#626262]">{project.meta}</p>
                </div>
                <p className="font-semibold leading-tight text-[24px] text-[#0d0d0d]">{project.title}</p>
                <p className="font-medium text-[16px] text-[#626262]">{project.subtitle}</p>
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
                <ProjectLink project={project} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <MobileFooter />
    </div>
  )
}
