import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const easeOut = [0.22, 1, 0.36, 1] as const

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/#projects' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

/** Compact top bar: name on the left, hamburger on the right, full-screen sheet when open. */
export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        className="sticky top-0 z-30 flex items-center justify-between bg-[rgba(249,249,249,0.9)] px-5 py-4 backdrop-blur-md"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <Link to="/" className="font-semibold text-[17px] text-[#0d0d0d]" onClick={() => setOpen(false)}>
          Onamma Nwosu
        </Link>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex size-11 items-center justify-center rounded-full bg-[rgba(13,13,13,0.85)] text-white"
        >
          <span className="relative block h-[14px] w-[18px]">
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-white transition-all duration-300 ${
                open ? 'top-[6px] rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute top-[6px] left-0 h-[2px] w-full rounded bg-white transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-white transition-all duration-300 ${
                open ? 'top-[6px] -rotate-45' : 'top-[12px]'
              }`}
            />
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-20 flex flex-col justify-end bg-[#0d0d0d] px-6 pt-24 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + index * 0.06, ease: easeOut }}
                >
                  <a
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className="block font-medium text-[38px] leading-none text-white"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 flex flex-col gap-3">
              <a
                href="mailto:onanwosu18373@gmail.com"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-[#f97316] py-4 font-semibold text-[17px] text-white"
              >
                Contact Me &#8599;
              </a>
              <p className="text-center text-[14px] text-[rgba(255,255,255,0.55)]">
                onanwosu18373@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
