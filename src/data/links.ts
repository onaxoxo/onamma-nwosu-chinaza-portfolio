import instagram from '../assets/social/instagram.svg'
import x from '../assets/social/x.svg'
import linkedin from '../assets/social/linkedin.svg'
import behance from '../assets/social/behance.svg'

/** The CV lives in /public so it opens in the browser's PDF viewer, where it can be saved. */
export const cvUrl = '/Onamma-Nwosu-CV.pdf'

/** Every "Contact Me" button opens WhatsApp. */
export const contactUrl = 'https://wa.me/+2349035020776'

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/ona.thedesigner?stkn=MWNuMDBreWhzc2R2NQ==', icon: instagram },
  { label: 'X', href: 'https://x.com/onathedesigner', icon: x },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/onamma-nwosu-64a6b2378', icon: linkedin },
  { label: 'Behance', href: 'https://www.behance.net/onammanwosu', icon: behance },
]
