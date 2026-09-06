import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/cver/hero-cover.png'
import screenLanding from '../../assets/cver/screen-landing.png'

const cver: CaseStudy = {
  slug: 'cver',
  title: 'CVERAI',
  subtitle: 'Career Platform for Skilled Immigrants',
  intro:
    'Built for skilled immigrants who refuse to start over. Job matching, local connections and a verified directory that puts them in front of recruiters instead of into an application void.',
  tags: ['Product Design', 'Web Platform', 'Landing Page'],
  linkLabel: 'View live site',
  heroCover,
  heroCoverHeight: 983,
  heroCoverStyle: { height: '235.1%', top: '-0.01%', width: '98.32%', left: '0.83%' },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Experience that the market cannot read.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Three things kept coming up: professional experience that does not translate into the new market, low professional visibility, and job matches that ignore what someone has actually done.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Applications go out and nothing comes back. The candidate is not underqualified. They are unreadable to the systems doing the filtering.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'The redesign had to make that recognisable in the first few seconds, then show how the product answers it.',
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
              title: 'What I knew about them',
              body: 'They had professional experience from somewhere else, and the market they had moved into was not reading it correctly.',
            },
            {
              title: 'What I did not have',
              body: 'A named persona, interview transcripts or segmentation. I worked from the product, the team’s knowledge and the complaints that came in.',
            },
            {
              title: 'So I am not claiming one',
              body: 'Writing a detailed persona now would be inventing a person to fit the case study. The design decisions below stand on the product problem instead.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'I was not designing in isolation.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'EXISTING PRODUCT',
              title: 'It was already running',
              body: 'CverAI had users and a shipped structure. There was no blank page to design against.',
              solution:
                '→ Started from what was there and changed what I could argue for, rather than proposing a rebuild.',
              tradeoff:
                'Trade-off: some of what I would change sat outside what a redesign could touch.',
            },
            {
              label: 'THE TEAM',
              title: 'Four other people had a say',
              body: 'Founder, PM, engineer and marketer. Design was one input into the decision, not the decision.',
              solution:
                '→ Weighed each improvement against what was technically and practically possible.',
              tradeoff: 'Trade-off: the strongest interface is not always the one that can ship.',
            },
            {
              label: 'USER COMPLAINTS',
              title: 'Real, but not written down',
              body: 'Genuine complaints from users shaped some of the improvements in the redesign.',
              solution: '→ Used them to decide what to prioritise in the redesign.',
              tradeoff:
                'Trade-off: I cannot reproduce the specific feedback, so I do not quote any of it here.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE PATH',
      title: 'A redesign is not a blank page.',
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
      title: 'Lead with the product, or lead with the problem?',
      blocks: [
        {
          kind: 'decisions',
          items: [
            {
              badge: 'A',
              title: 'Feature-first, like most SaaS',
              body: 'Open with what the product does. Familiar and easy to write, but it asks the visitor to work out for themselves whether any of it applies to them.',
            },
            {
              badge: 'B',
              title: 'Problem-first',
              body: 'Open with poor market translation, low professional visibility and job matches that ignore real experience. The visitor recognises their situation before being introduced to the solution.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'How I worked inside someone else’s product.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Start with what can actually move',
              body: 'The product was live and had users. The first pass was working out which parts of the experience I could change without breaking what people already relied on, and which arguments were worth having with the team.',
            },
            {
              title: 'The landing page carries the first impression',
              body: 'If an immigrant does not recognise their own situation in the first screen, nothing further down the page gets read. That is why the problem leads and the product follows.',
            },
            {
              title: 'What I will not claim',
              body: 'I cannot point to a specific thing I proposed and had cut. I was one voice in a team of five and I do not remember one, so I am not going to invent it to make the story neater.',
            },
          ],
        },
        {
          kind: 'artifact',
          label: 'SPACE FOR ARTWORK',
          caption: 'Space reserved for the before and after of the redesigned screens',
          height: 520,
        },
      ],
    },
  ],

  carousel: {
    slideWidth: 940,
    slideHeight: 650,
    gap: 40,
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
      caption: 'Job matches, ranked, with the reason each role fits shown up front.',
      image: screenLanding,
    },
  ],

  results: {
    label: '09 · OUTCOME',
    title: 'What the product became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'The visual direction is warm and credible, with plain language and generous type doing most of the work.',
              'Verification signals are built into the layout rather than bolted on, so trust reads immediately without the interface shouting about it.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'I worked as part of the product team on CVER, owning the job matching flow, the verified profile and the directory, and pairing with the developers through handoff so what shipped matched what was designed.',
              'Over that period the platform grew from just over 1,000 users to 2,000. Skilled immigrants are now found through a verified profile recruiters can search, instead of applications that go unanswered.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I changed.',
    headline: 'The redesign taught me that good product design has to work beyond the interface.',
    beats: [
      {
        label: 'WHAT I REVISITED',
        body: 'The pricing section is the weakest part of the final design. The plans don’t differentiate themselves clearly enough, so I’d simplify the structure, make the differences easier to scan, and give the recommended option stronger hierarchy.',
      },
      {
        label: 'WHAT I IMPROVED ALONG THE WAY',
        body: 'I initially focused on identifying what wasn’t working in the interface and making it better. Working within a real product and team made me more conscious of the existing product, technical limitations, business requirements, and how design decisions need to work within those constraints.',
      },
    ],
  },

  prev: { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
  next: { label: 'Vendify', to: '/case-study/vendify' },
}

export default cver
