import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { LandingProject } from '../data/projects'

function Tag({ label }: { label: string }) {
  return (
    <div className="relative flex shrink-0 items-start overflow-clip rounded-[20px] bg-[#f2f2f2] px-[18px] py-[10px]">
      <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[15px] text-[#0d0d0d]">
        {label}
      </p>
    </div>
  )
}

export default function ProjectCard({ project }: { project: LandingProject }) {
  return (
    <motion.div
      data-node-id={project.nodeId}
      className={`relative flex w-full shrink-0 items-center overflow-clip rounded-[42px] shadow-[inset_0_0_0_1px_#e5e5e5] bg-white py-[24px] pr-[44px] pl-[24px] ${
        project.thumbnail ? 'gap-[44px]' : ''
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      {project.thumbnail && (
        <div className="relative h-[340px] w-[470px] shrink-0 rounded-[28px]">
          {project.thumbnailFit === 'top' ? (
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
              <img
                alt=""
                className="absolute top-0 left-[0.03%] h-[163.93%] w-full max-w-none"
                src={project.thumbnail}
              />
            </div>
          ) : (
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[28px] object-cover"
              src={project.thumbnail}
            />
          )}
        </div>
      )}

      <div className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[14px] overflow-clip">
        <div className="relative flex shrink-0 items-center gap-[12px] overflow-clip leading-[normal] whitespace-nowrap">
          <p className="relative shrink-0 font-semibold tracking-[1px] text-[18px] text-[#f97316]">
            {project.index}
          </p>
          <p className="relative shrink-0 font-normal text-[16px] text-[#626262]">&mdash;</p>
          <p className="relative shrink-0 font-medium text-[16px] text-[#626262]">{project.meta}</p>
        </div>
        <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[42px] text-[#0d0d0d]">
          {project.title}
        </p>
        <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[22px] text-[#626262]">
          {project.subtitle}
        </p>
        <p className="relative w-[600px] shrink-0 font-normal leading-[28px] text-[18px] text-[#626262]">
          {project.description}
        </p>
        <div className="relative flex shrink-0 items-start gap-[10px] overflow-clip pt-[6px]">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <Link
          to={project.to}
          className="group relative flex shrink-0 items-center gap-[8px] overflow-clip pt-[10px] font-semibold leading-[normal] whitespace-nowrap text-[18px] text-[#f97316]"
        >
          <p className="relative shrink-0">{project.linkLabel}</p>
          <p className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
            &#8599;
          </p>
        </Link>
      </div>
    </motion.div>
  )
}
