import { Link } from 'react-router-dom'

const navigateLinks = ['Home', 'Live projects', 'About', 'Process', 'Reviews', 'Contact']
const projectLinks = [
  { label: 'SORA', to: '/case-study/sora' },
  { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
  { label: 'CVER', to: '/case-study/cver' },
  { label: 'Marbella Skin', to: '/case-study/vendify' },
]
const contactLines = [
  'onammanwosu19@gmail.com',
  '+2349035020776',
  '+2348144826566',
  'Abuja, Nigeria',
]

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative flex shrink-0 flex-col items-start gap-[14px] overflow-clip">
      <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[18px] text-[#0d0d0d]">
        {title}
      </p>
      <div className="relative h-[4px] w-px shrink-0" />
      {children}
    </div>
  )
}

const linkClass =
  'relative shrink-0 font-normal leading-[normal] whitespace-nowrap text-[17px] text-[#626262] transition-colors duration-200 hover:text-[#0d0d0d]'

export default function Footer() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-start gap-[44px] overflow-clip px-[120px] pt-[130px] pb-[40px]">
      <div className="relative h-px w-full shrink-0 bg-[#e0e0e0]" />
      <div className="relative flex w-full shrink-0 items-start justify-between overflow-clip">
        <div className="relative flex shrink-0 flex-col items-start gap-[18px] overflow-clip">
          <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[28px] text-[#0d0d0d]">
            Onamma Nwosu
          </p>
          <p className="relative w-[340px] shrink-0 font-normal leading-[27px] text-[17px] text-[#626262]">
            Product designer with 2 years in UI/UX, shipping across AI, fintech and e-commerce.
            Available for full-time and freelance work.
          </p>
          <div className="relative flex shrink-0 items-start gap-[10px] overflow-clip pt-[6px]">
            {['IG', 'X', 'LI', 'BE'].map((social) => (
              <a
                key={social}
                href="#"
                className="relative flex size-[44px] shrink-0 items-center justify-center overflow-clip rounded-[34px] shadow-[inset_0_0_0_1px_#e0e0e0] transition-colors duration-200 hover:bg-[#f2f2f2]"
              >
                <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[14px] text-[#0d0d0d]">
                  {social}
                </p>
              </a>
            ))}
          </div>
        </div>

        <Column title="Navigate">
          {navigateLinks.map((label) => (
            <a key={label} href="/" className={linkClass}>
              {label}
            </a>
          ))}
        </Column>

        <Column title="Projects">
          {projectLinks.map((project) => (
            <Link key={project.label} to={project.to} className={linkClass}>
              {project.label}
            </Link>
          ))}
        </Column>

        <Column title="Get in touch">
          {contactLines.map((line) => (
            <p key={line} className={linkClass}>
              {line}
            </p>
          ))}
        </Column>
      </div>
      <div className="relative h-px w-full shrink-0 bg-[#e0e0e0]" />
      <div className="relative flex w-full shrink-0 items-center justify-between overflow-clip font-normal leading-[normal] whitespace-nowrap text-[16px] text-[#626262]">
        <p className="relative shrink-0">&copy; 2026 Onamma Nwosu. All rights reserved.</p>
        <p className="relative shrink-0">Designed in Figma &middot; Built by hand</p>
      </div>
    </div>
  )
}
