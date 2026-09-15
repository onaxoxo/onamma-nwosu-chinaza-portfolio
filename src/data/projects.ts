import thumbSora from '../assets/landing/thumb-sora.png'
import thumbOcicat from '../assets/landing/thumb-ocicat.png'
import thumbVendify from '../assets/landing/thumb-vendify.png'
import thumbBudget from '../assets/landing/thumb-budget.png'
import thumbCver from '../assets/landing/thumb-cver.png'

export type LandingProject = {
  nodeId: string
  index: string
  meta: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  linkLabel: string
  to: string
  /** External URL for "View live site" links; the card otherwise opens the case study. */
  liveUrl?: string
  thumbnail?: string
  /** Some thumbnails are cropped inside their frame rather than object-cover. */
  thumbnailFit?: 'cover' | 'top'
}

export const landingProjects: LandingProject[] = [
  {
    nodeId: '176:1456',
    index: '01',
    meta: 'Product design · 6 weeks',
    title: 'SORA',
    subtitle: 'Subscription Management System',
    description:
      'SORA bills in dollars, but many of its users budget in naira. I designed the whole product, including how the real cost shows up.',
    tags: ['Product Design', 'Mobile App', 'End-to-end'],
    linkLabel: 'View case study',
    to: '/case-study/sora',
    thumbnail: thumbSora,
    thumbnailFit: 'cover',
  },
  {
    nodeId: '176:1476',
    index: '02',
    meta: 'UI/UX · Web app',
    title: 'Ocicat AI Studio',
    subtitle: 'AI Video Creation Platform',
    description:
      'An AI video studio for creators. I designed it as a real editor with AI alongside, not a magic prompt box.',
    tags: ['UI/UX', 'Web App', 'AI Product'],
    linkLabel: 'View live site',
    to: '/case-study/ocicat-ai-studio',
    liveUrl: 'https://ocicataistudio.framer.website/',
    thumbnail: thumbOcicat,
    thumbnailFit: 'top',
  },
  {
    nodeId: '176:1496',
    index: '03',
    meta: 'Product design · Web',
    title: 'CVER',
    subtitle: 'Career Platform for Skilled Immigrants',
    description:
      'A live career platform for skilled immigrants. I redesigned the landing page and core flows so it speaks to the people using it.',
    tags: ['Product Design', 'Web Platform', 'Landing Page'],
    linkLabel: 'View live site',
    to: '/case-study/cver',
    liveUrl: 'https://cverai.com/',
    thumbnail: thumbCver,
    thumbnailFit: 'top',
  },
  {
    nodeId: '176:1515',
    index: '04',
    meta: 'Mobile design · E-commerce',
    title: 'Vendify',
    subtitle: 'E-commerce marketplace platform',
    description:
      'Buying from a small vendor took four apps. I redesigned my own earlier version into one flow, from discovery to chat.',
    tags: ['Mobile Design', 'E-commerce', 'Visual Design'],
    linkLabel: 'View case study',
    to: '/case-study/vendify',
    thumbnail: thumbVendify,
    thumbnailFit: 'cover',
  },
  {
    nodeId: '176:1535',
    index: '05',
    meta: 'Mobile design · Fintech',
    title: 'Budget Buddy',
    subtitle: 'Budget Tracker',
    description:
      'A student budgeting app with a wallet, built from scratch around one question: what happens to the money once it leaves the app?',
    tags: ['Mobile Design', 'Fintech', 'Visual Design'],
    linkLabel: 'View case study',
    to: '/case-study/budget-buddy',
    thumbnail: thumbBudget,
    thumbnailFit: 'cover',
  },
]
