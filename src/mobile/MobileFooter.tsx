import { Link } from 'react-router-dom'

const projectLinks = [
  { label: 'SORA', to: '/case-study/sora' },
  { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
  { label: 'CVER', to: '/case-study/cver' },
  { label: 'Vendify', to: '/case-study/vendify' },
  { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
]

export default function MobileFooter() {
  return (
    <footer className="flex flex-col gap-8 px-5 pt-16 pb-8">
      <div className="h-px w-full bg-[#e0e0e0]" />
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-[22px] text-[#0d0d0d]">Onamma Nwosu</p>
        <p className="text-[15px] leading-[24px] text-[#626262]">
          Product designer with 2 years in UI/UX, shipping across AI, fintech and e-commerce.
          Available for full-time and freelance work.
        </p>
        <div className="flex gap-2 pt-1">
          {['IG', 'X', 'LI', 'BE'].map((social) => (
            <a
              key={social}
              href="#"
              className="flex size-10 items-center justify-center rounded-full font-medium text-[13px] text-[#0d0d0d] shadow-[inset_0_0_0_1px_#e0e0e0]"
            >
              {social}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[16px] text-[#0d0d0d]">Projects</p>
          {projectLinks.map((project) => (
            <Link key={project.label} to={project.to} className="text-[15px] text-[#626262]">
              {project.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[16px] text-[#0d0d0d]">Get in touch</p>
          <a href="mailto:onanwosu18373@gmail.com" className="text-[15px] break-all text-[#626262]">
            onanwosu18373@gmail.com
          </a>
          <p className="text-[15px] text-[#626262]">0805 846 4733</p>
          <p className="text-[15px] text-[#626262]">Lagos, Nigeria</p>
        </div>
      </div>

      <div className="h-px w-full bg-[#e0e0e0]" />
      <div className="flex flex-col gap-1 text-[13px] text-[#626262]">
        <p>&copy; 2026 Onamma Nwosu. All rights reserved.</p>
        <p>Designed in Figma &middot; Built by hand</p>
      </div>
    </footer>
  )
}
