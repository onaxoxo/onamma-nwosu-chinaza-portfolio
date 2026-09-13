import thumbSora from '../assets/work/sora.png'
import thumbOcicat from '../assets/work/ocicat.png'
import thumbCver from '../assets/work/cver.png'
import thumbVendify from '../assets/work/vendify.png'
import thumbBudget from '../assets/work/budget.png'
import thumbGiftCard from '../assets/work/giftcard.png'
import thumbRelocate from '../assets/work/relocate.png'
import thumbSkincare from '../assets/work/skincare.png'

export const workFilters = ['All', 'Product Design', 'UI/UX', 'Mobile design', 'Web platform'] as const
export type WorkFilter = (typeof workFilters)[number]

export type WorkProject = {
  index: string
  meta: string
  title: string
  subtitle: string
  tags: string[]
  categories: Exclude<WorkFilter, 'All'>[]
  linkLabel: string
  /** Internal route (case study) ... */
  to?: string
  /** ... or an external destination. */
  href?: string
  thumbnail: string
}

/** The "All work" page (Figma 215:1402), newest first. */
export const workProjects: WorkProject[] = [
  {
    index: '01',
    meta: 'Product design · 6 weeks',
    title: 'SORA',
    subtitle: 'Subscription Management System',
    tags: ['Product Design', 'Mobile App', 'End-to-end'],
    categories: ['Product Design', 'Mobile design'],
    linkLabel: 'View case study',
    to: '/case-study/sora',
    thumbnail: thumbSora,
  },
  {
    index: '02',
    meta: 'UI/UX · Web app',
    title: 'Ocicat AI Studio',
    subtitle: 'AI Video Creation Platform',
    tags: ['UI/UX', 'Web App', 'AI Product'],
    categories: ['UI/UX', 'Web platform'],
    linkLabel: 'View live site',
    href: 'https://ocicataistudio.framer.website/',
    thumbnail: thumbOcicat,
  },
  {
    index: '03',
    meta: 'Product design · Web',
    title: 'CVER',
    subtitle: 'Career Platform for Skilled Immigrants',
    tags: ['Product Design', 'Web Platform', 'Landing Page'],
    categories: ['Product Design', 'Web platform'],
    linkLabel: 'View live site',
    href: 'https://cverai.com/',
    thumbnail: thumbCver,
  },
  {
    index: '04',
    meta: 'Mobile design · E-commerce',
    title: 'Vendify',
    subtitle: 'E-commerce marketplace platform',
    tags: ['Mobile Design', 'E-commerce', 'Visual Design'],
    categories: ['Mobile design', 'UI/UX'],
    linkLabel: 'View case study',
    to: '/case-study/vendify',
    thumbnail: thumbVendify,
  },
  {
    index: '05',
    meta: 'Mobile design · Fintech',
    title: 'Budget Buddy',
    subtitle: 'Budget Tracker',
    tags: ['Mobile Design', 'Fintech', 'Visual Design'],
    categories: ['Mobile design', 'Product Design'],
    linkLabel: 'View case study',
    to: '/case-study/budget-buddy',
    thumbnail: thumbBudget,
  },
  {
    index: '06',
    meta: 'Mobile design · Fintech',
    title: 'Gift Card App',
    subtitle: 'Gift Card Platform',
    tags: ['Mobile Design', 'Fintech', 'Visual Design'],
    categories: ['Mobile design'],
    linkLabel: 'View Project',
    thumbnail: thumbGiftCard,
  },
  {
    index: '07',
    meta: 'Mobile design · Social Media',
    title: 'Relocate Connect',
    subtitle: 'Social Media Platform',
    tags: ['Mobile Design', 'Social Media', 'Visual Design'],
    categories: ['Mobile design', 'Product Design'],
    linkLabel: 'View case study',
    to: '/case-study/relocate-connect',
    thumbnail: thumbRelocate,
  },
  {
    index: '08',
    meta: 'Website design · Branding',
    title: 'Skincare Landing Page',
    subtitle: 'Skincare Website',
    tags: ['Website Design', 'Visual Design'],
    categories: ['Web platform', 'UI/UX'],
    linkLabel: 'View live site',
    href: 'https://skincare-tan-kappa.vercel.app/',
    thumbnail: thumbSkincare,
  },
]
