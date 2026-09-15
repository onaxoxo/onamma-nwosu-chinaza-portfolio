import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import problemCover from '../../assets/cver/problem-cover.jpg'
import screenLanding from '../../assets/cver/screen-landing.png'
import screenPricing from '../../assets/cver/screen-pricing.png'
import screenTestimonials from '../../assets/cver/screen-testimonials.png'

const cver: CaseStudy = {
  slug: 'cver',
  title: 'CVERAI',
  subtitle: 'Career Platform for Skilled Immigrants',
  intro:
    'A career platform for skilled immigrants. I redesigned the landing page and core flows so the site says, in seconds, that it gets their problem.',
  tags: ['Product Design', 'Web Platform', 'Landing Page'],
  linkLabel: 'View live site',
  liveUrl: 'https://cverai.com/',
  glance: {
    rows: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Type', value: 'Redesign of a live product, plus new features' },
      { label: 'Platform', value: 'Web' },
      { label: 'Team', value: 'Founder, PM, engineer, marketer' },
    ],
    contribution:
      'I owned the landing page, job matching, the verified profile and the directory, and stayed with the developers through handoff. The numbers below belong to the whole team.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Skilled immigrants can’t get recruiters to notice them.',
      blocksBeforeHead: 1,
      blocks: [
        {
          kind: 'cover',
          src: problemCover,
          alt: 'CVERAI landing page',
          height: 849,
          style: { height: '170.38%', top: '0', width: '100%', left: '0.01%' },
        },
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Engineers, nurses and project managers move to a new country with years of experience and want a job that matches it. They apply everywhere and hear nothing back.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Their experience doesn’t translate to the new market, they have no way to show what they can do, and the jobs they’re shown don’t fit. They aren’t underqualified; the filters can’t read them.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'CVER matches them to the right jobs and gives recruiters a verified profile to find them by. I redesigned the site so it says that in the first five seconds.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Skilled immigrants looking for work.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'What I knew',
              body: 'Real experience from somewhere else. A new market that couldn’t read it.',
            },
            {
              title: 'What I didn’t have',
              body: 'No persona, no transcripts, no segments. I worked from the product, the team and the complaints.',
            },
            {
              title: 'So I’m not inventing one',
              body: 'A made-up persona would be a made-up person. The decisions below stand on the product problem.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'This wasn’t a blank page.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'EXISTING PRODUCT',
              title: 'It was already live',
              body: 'CVER had users and a shipped structure.',
              solution:
                '→ I kept what worked and changed what I could argue for.',
              tradeoff:
                'Trade-off: some changes were out of reach for a redesign.',
            },
            {
              label: 'THE TEAM',
              title: 'Four other people had a say',
              body: 'Founder, PM, engineer, marketer. Design was one input, not the decision.',
              solution:
                '→ Every change was weighed against what could ship.',
              tradeoff: 'Trade-off: the strongest interface isn’t always the one that ships.',
            },
            {
              label: 'USER COMPLAINTS',
              title: 'Real complaints, not written down',
              body: 'User complaints shaped what I prioritised.',
              solution: '→ I used them to pick what mattered most.',
              tradeoff:
                'Trade-off: I can’t quote any of it here.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE PATH',
      title: 'A redesign isn’t a blank page.',
      blocks: [
        {
          kind: 'flow',
          steps: [
            { title: 'Existing product', body: 'Live, with users and a team', flex: true },
            { title: 'Real user complaints', body: 'Genuine, though not documented here', flex: true },
            {
              title: 'Product and technical constraints',
              body: 'What could actually be built',
              flex: true,
            },
            { title: 'Redesign', body: 'Structure and hierarchy first', flex: true },
            {
              title: 'Improved experience',
              body: 'Shipped into the product that existed',
              flex: true,
            },
          ],
        },
      ],
    },
    {
      label: '06 · THE DECISION',
      title: 'Lead with the product, or the problem?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 210,
          items: [
            {
              badge: 'A',
              title: 'Features first',
              body: 'What most SaaS sites do. Easy to write. Leaves visitors guessing whether it’s for them.',
            },
            {
              badge: 'B',
              title: 'Problem first',
              body: 'Open with the three things they already feel. They see themselves before they see the product.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'Working inside someone else’s product.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Start with what can move',
              body: 'The product was live. First job: find what I could change without breaking what people relied on.',
            },
            {
              title: 'The first screen decides everything',
              body: 'If they don’t recognise their situation on the first screen, nothing below gets read. So the problem leads.',
            },
            {
              title: 'What I won’t claim',
              body: 'I was one voice in five. I can’t point to an idea of mine that was cut, so I won’t invent one.',
            },
          ],
        },
      ],
    },
  ],

  carousel: {
    slideWidth: 940,
    slideHeight: 650,
    gap: 20,
    slideBackground: '#fafafa',
    slideRadius: 16,
    offsetX: -20,
    image: { width: 940, height: 650, radius: 16 },
  },

  screensLabel: '08 · FINAL EXPERIENCE',
  screensTitle: 'The final experience.',
  screens: [
    {
      label: 'Landing',
      caption: 'The landing page: problem first, then product.',
      image: screenLanding,
    },
    {
      label: 'Pricing',
      caption: 'Pricing, with the recommended plan given more weight.',
      image: screenPricing,
    },
    {
      label: 'Testimonials',
      caption: 'Member stories from people who already made the move.',
      image: screenTestimonials,
    },
  ],

  results: {
    label: '09 · OUTCOME',
    title: 'The result.',
    blocks: [
      {
        kind: 'stats',
        items: [
          { value: '2,000+', label: 'registered users' },
          { value: '+207.7%', label: 'weekly sign-ups' },
          { value: '85', label: 'CVs created' },
          { value: '217', label: 'applications submitted' },
        ],
      },
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'Warm and credible. Plain words, generous type.',
              'Verification is built into the layout, so trust reads without shouting.',
            ],
          },
          {
            title: 'My part in it',
            paragraphs: [
              'I owned the landing page, job matching, the verified profile and the directory, through handoff.',
              'The platform grew from 1,000 users to 2,000. Recruiters now find people through a searchable profile, not unanswered applications.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'Good design has to work beyond the interface.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'Pricing. The plans don’t tell themselves apart. I’d simplify them and give the recommended one real weight.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I went in looking for interface problems. A real team taught me to think about the product, the tech and the business first.',
      },
    ],
  },

  prev: { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
  next: { label: 'Vendify', to: '/case-study/vendify' },
}

export default cver
