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
    'A career platform for skilled immigrants. I redesigned the landing page and the core flows so the site says, in the first few seconds, that it understands their problem.',
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
      'I owned the landing page redesign, the job matching flow, the verified profile and the directory, and paired with the developers through handoff. The growth numbers below belong to the whole team.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Skilled people were applying for jobs and hearing nothing back.',
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
              text: 'CVER’s users are skilled immigrants: engineers, nurses, project managers who moved to Canada, the UK or the US with years of experience. They apply for jobs and hear nothing.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Three things kept coming up. Their experience didn’t translate into the new market. They had no way to show what they could do. And the jobs they were shown didn’t fit them. They weren’t underqualified. The systems filtering them couldn’t read them.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'The old site didn’t say any of this. It led with features, so visitors had to work out for themselves whether CVER was for them. The redesign had to make someone recognise their own situation in the first few seconds.',
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
              body: 'They had real experience from somewhere else, and the market they moved into wasn’t reading it.',
            },
            {
              title: 'What I didn’t have',
              body: 'No named persona, no transcripts, no segmentation. I worked from the product, the team and the complaints coming in.',
            },
            {
              title: 'So I’m not inventing one',
              body: 'Writing a detailed persona now would be making up a person to fit the story. The decisions below stand on the product problem.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'I wasn’t designing on a blank page.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'EXISTING PRODUCT',
              title: 'It was already live',
              body: 'CVER had users and a shipped structure.',
              solution:
                '→ I started from what was there and changed what I could argue for.',
              tradeoff:
                'Trade-off: some things I’d change were out of reach for a redesign.',
            },
            {
              label: 'THE TEAM',
              title: 'Four other people had a say',
              body: 'Founder, PM, engineer and marketer. Design was one input, not the decision.',
              solution:
                '→ Every change was weighed against what could actually ship.',
              tradeoff: 'Trade-off: the strongest interface isn’t always the one that can ship.',
            },
            {
              label: 'USER COMPLAINTS',
              title: 'Real, but not written down',
              body: 'Genuine complaints from users shaped what I prioritised.',
              solution: '→ I used them to decide what mattered most.',
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
      title: 'Lead with the product, or with the problem?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 210,
          items: [
            {
              badge: 'A',
              title: 'Features first, like most SaaS',
              body: 'Open with what the product does. Easy to write, but it leaves visitors working out whether any of it applies to them.',
            },
            {
              badge: 'B',
              title: 'Problem first',
              body: 'Open with the three things they already feel. People recognise their own situation before they meet the solution.',
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
              title: 'Start with what can actually move',
              body: 'The product was live. The first job was working out what I could change without breaking what people relied on.',
            },
            {
              title: 'The landing page carries the first impression',
              body: 'If someone doesn’t recognise their situation on the first screen, nothing below it gets read. So the problem leads.',
            },
            {
              title: 'What I won’t claim',
              body: 'I was one voice in a team of five. I can’t point to a specific idea of mine that was cut, so I won’t invent one.',
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
      caption: 'The landing page: the problem first, then the product.',
      image: screenLanding,
    },
    {
      label: 'Pricing',
      caption: 'Pricing, with the recommended plan given the stronger hierarchy.',
      image: screenPricing,
    },
    {
      label: 'Testimonials',
      caption: 'What members are saying: social proof from people who already made the move.',
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
              'Warm and credible. Plain language and generous type do most of the work.',
              'Verification signals are built into the layout, so trust reads without the interface shouting.',
            ],
          },
          {
            title: 'My part in it',
            paragraphs: [
              'I owned the landing page, the job matching flow, the verified profile and the directory, and stayed with the developers through handoff.',
              'Over that period the platform grew from just over 1,000 users to 2,000. Skilled immigrants are now found through a profile recruiters can search, instead of applications that go unanswered.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'Good product design has to work beyond the interface.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'Pricing. The plans don’t tell themselves apart clearly enough. I’d simplify the structure and give the recommended option real hierarchy.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I went in looking for what was wrong with the interface. Working inside a real team made me think about the existing product, the tech and the business before the pixels.',
      },
    ],
  },

  prev: { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
  next: { label: 'Vendify', to: '/case-study/vendify' },
}

export default cver
