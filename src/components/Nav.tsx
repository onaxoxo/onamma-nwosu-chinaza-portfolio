import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import arrowNe from '../assets/landing/arrow-ne.svg'
import downloadIcon from '../assets/landing/download.svg'

/** Arrow glyph used inside the orange "Contact Me" pill. */
export function ContactArrow() {
  return (
    <div className="relative flex h-[28.31px] w-[28.488px] shrink-0 items-center justify-center">
      <div className="flex-none rotate-[46.17deg]">
        <div className="relative h-[23.171px] w-[17px]">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={arrowNe} />
        </div>
      </div>
    </div>
  )
}

export function ContactMeButton({ className = '' }: { className?: string }) {
  return (
    <motion.a
      href="#contact"
      className={`relative flex w-[182px] shrink-0 items-center justify-center rounded-[34px] bg-[#f97316] px-[35px] py-[15px] ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <div className="relative flex shrink-0 items-center gap-[2px]">
        <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[20px] text-white">
          Contact Me
        </p>
        <ContactArrow />
      </div>
    </motion.a>
  )
}

export function DownloadCvButton() {
  return (
    <motion.a
      href="#"
      className="absolute top-[29px] left-[1146px] flex h-[69px] w-[224px] items-center justify-center rounded-[34px] shadow-[inset_0_0_0_1.5px_rgba(13,13,13,0.8)] px-[35px] py-[15px]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <div className="relative flex shrink-0 items-center gap-[12px]">
        <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[20px] text-black">
          Download CV
        </p>
        <div className="relative h-[19px] w-[20px] shrink-0">
          <div className="absolute inset-[-3.95%_-3.75%]">
            <img alt="" className="block size-full max-w-none" src={downloadIcon} />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

type NavProps = {
  /**
   * "home" matches the landing frame (pill centred at 709.5px, CV button on the
   * right); "case" matches the case-study Nav frame (pill centred at 720px).
   */
  variant?: 'home' | 'case'
}

export default function Nav({ variant = 'home' }: NavProps) {
  const isHome = variant === 'home'

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`absolute top-[24px] h-[80px] w-[679px] -translate-x-1/2 rounded-[63px] bg-[rgba(13,13,13,0.8)] ${
          isHome ? 'left-[calc(50%-10.5px)]' : 'left-[calc(50%+0.5px)]'
        }`}
      />
      <div
        className={`absolute top-[35px] flex items-center ${
          isHome ? 'left-[413px] gap-[98px]' : 'left-[428px] gap-[93px]'
        }`}
      >
        <div
          className={`relative flex shrink-0 items-center gap-[78px] font-medium leading-[normal] whitespace-nowrap text-[20px] text-white`}
        >
          <Link className="relative shrink-0" to="/">
            Home
          </Link>
          <a className="relative shrink-0" href="/#projects">
            Projects
          </a>
          <a className="relative shrink-0" href="/#about">
            About
          </a>
        </div>
        <ContactMeButton />
      </div>
      {isHome && <DownloadCvButton />}
    </motion.div>
  )
}
