import thumbSora from '../assets/landing/thumb-sora.png'
import thumbOcicat from '../assets/landing/thumb-ocicat.png'
import thumbVendify from '../assets/landing/thumb-vendify.png'
import thumbBudget from '../assets/landing/thumb-budget.png'

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
      'A subscription manager that pulls every recurring charge into one place, so people can see what they are actually paying for and cancel what they forgot about.',
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
      'An all-in-one studio that turns a written idea into a finished video script, visuals, auto captions and export handled in a single flow for 2,000+ creators.',
    tags: ['UI/UX', 'Web App', 'AI Product'],
    linkLabel: 'View live site',
    to: '/case-study/ocicat-ai-studio',
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
      'Built for skilled immigrants who refuse to start over. Job matching, local connections and a verified directory that puts them in front of recruiters instead of into an application void.',
    tags: ['Product Design', 'Web Platform', 'Landing Page'],
    linkLabel: 'View live site',
    to: '/case-study/cver',
  },
  {
    nodeId: '176:1515',
    index: '04',
    meta: 'Mobile design · E-commerce',
    title: 'Vendify',
    subtitle: 'E-commerce marketplace platform',
    description:
      'Vendify is an e-commerce marketplace that connects buyers with vendors, making it easy to discover, browse, and purchase products online.',
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
      'Student Budget Tracker is a personal finance app for students that helps them track spending, manage budgets, and save money, with an in-built wallet/bank system for managing funds securely.',
    tags: ['Mobile Design', 'Fintech', 'Visual Design'],
    linkLabel: 'View case study',
    to: '/case-study/budget-buddy',
    thumbnail: thumbBudget,
    thumbnailFit: 'cover',
  },
]
