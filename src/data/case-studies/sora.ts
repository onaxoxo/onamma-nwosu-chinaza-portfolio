import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/sora/hero-cover.png'
import screenDashboard from '../../assets/sora/screen-dashboard.png'
import screenRenewals from '../../assets/sora/screen-renewals.png'
import screenSpending from '../../assets/sora/screen-spending.png'
import screenAlternatives from '../../assets/sora/screen-alternatives.png'
import flowDiagram from '../../assets/sora/flow.png'
import wfOverview from '../../assets/sora/wf-overview.png'
import wfSubscriptions from '../../assets/sora/wf-subscriptions.png'
import wfAlternatives from '../../assets/sora/wf-alternatives.png'
import wfSpending from '../../assets/sora/wf-spending.png'

/** Showcase / Carousel geometry for the wireframe slides: each 957-wide SaaS board is the slide itself. */
const wireframeCarousel = {
  slideWidth: 957,
  slideHeight: 650,
  gap: 177,
  slideBackground: '#ffffff',
  image: { width: 956.962, height: 650, radius: 0 },
}

const sora: CaseStudy = {
  slug: 'sora',
  title: 'SORA',
  subtitle: 'Subscription Management System',
  intro:
    'A subscription tracker. It remembers what you signed up for, warns you before it renews, and helps you cancel what you forgot.',
  tags: ['Product Design', 'Mobile App', 'End-to-end'],
  linkLabel: 'View live site',
  heroCover,
  heroCoverHeight: 849,
  heroCoverStyle: { height: '100.52%', top: '-0.55%', width: '100%', left: '0' },
  glance: {
    rows: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Type', value: 'Concept, built from scratch' },
      { label: 'Platform', value: 'Mobile and web app' },
      { label: 'Timeline', value: '6 weeks, solo' },
    ],
    contribution:
      'I designed the whole product: the flows, the dashboard and the renewal reminders. The hard part was catching people before a forgotten subscription charges them again.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'People forget they’re paying for subscriptions.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Chinaza signs up for a free trial, a tool for one project, a streaming app for one show. Months later she’s still paying for all of them and can’t remember signing up.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'She only finds out from the bank. ₦25,000 leaves her account, she knows it was “subscriptions”, and she can’t tell which ones, or which she still uses.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'SORA keeps every subscription in one place, warns her before each renewal, and helps her cancel the ones she forgot.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Chinaza, 24, designer, Lagos.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Who she is',
              body: 'Pays for Spotify, Netflix, Canva, Google One, a design tool and ChatGPT. Some of them she hasn’t opened in months.',
            },
            {
              title: 'What she needs',
              body: 'A reminder before anything renews, and one place that shows what she’s still paying for.',
            },
            {
              title: 'How she finds out today',
              body: 'A debit alert, or the bank statement later. Always after the money has gone.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'Three things SORA can’t do.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'MANUAL ENTRY',
              title: 'No bank connection',
              body: 'Nothing syncs. Every subscription is typed in by hand.',
              solution:
                '→  Four fields only: service, price, currency, billing cycle.',
              tradeoff: 'Trade-off: typing is still the biggest friction.',
            },
            {
              label: 'CURRENCY',
              title: 'Conversions are never exact',
              body: 'Most subscriptions bill in dollars. Rates move, so a naira figure is always an estimate.',
              solution:
                '→  Rates refresh daily. You pick the currency you budget in.',
              tradeoff: 'Trade-off: good enough to budget with, not a prediction.',
            },
            {
              label: 'CANCELLATION',
              title: 'Only the provider can cancel',
              body: 'SORA can’t end a subscription for you.',
              solution:
                '→  SORA reminds you before renewal, then hands you to the provider.',
              tradeoff:
                'Trade-off: SORA helps you decide. It doesn’t control the outcome.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'Add it. Get warned. Decide.',
      blocks: [
        {
          kind: 'flow',
          steps: [
            { title: 'Add subscription', body: 'Service, price, currency, cycle', width: 211 },
            { title: 'See what you’re paying for', body: 'Every subscription, including the forgotten ones', width: 235 },
            { title: 'Get warned before renewal', body: 'Days before the money leaves', flex: true },
            { title: 'See what it all costs', body: 'Per month, per year, in one currency', width: 236 },
            { title: 'Keep it or cancel it', body: 'Cancelling happens at the provider', flex: true },
          ],
        },
        {
          kind: 'artifactImage',
          src: flowDiagram,
          alt: 'SORA user flow: from the splash screen through overview, subscriptions, renewals, spending, alternatives and settings',
          height: 503,
          image: { width: 1088.708, height: 437.154 },
        },
      ],
    },
    {
      label: '06 · THE DECISION',
      title: 'A list of subscriptions, or a warning before they charge?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 215,
          items: [
            {
              badge: 'A',
              title: 'A list',
              body: 'Everything you pay for on one screen. Useful, but you still have to remember to open it.',
            },
            {
              badge: 'B',
              title: 'An alert on the day',
              body: 'Tells you the moment you’re charged. By then the money has gone.',
            },
            {
              badge: 'C',
              title: 'A warning days before, with keep or cancel',
              body: 'SORA leads with what renews next and asks the question while there’s still time to act.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'Three calls that shaped SORA.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Own the one thing it can do',
              body: 'No bank data, no cancelling, no promised rates. What SORA can do is remind you before you’re charged. Every screen was judged on that.',
            },
            {
              title: 'Answer the question people open the app with',
              body: 'The dashboard leads with what renews next, not a list. Nobody opens the app to read a list.',
            },
            {
              title: 'Put friction where it’s expected',
              body: 'Typing is the cost of no bank link. I kept it at the moment you add a subscription, and nowhere else.',
            },
          ],
        },
        {
          kind: 'carousel',
          geometry: wireframeCarousel,
          screens: [
            { label: 'Overview', caption: 'Home Screen - Sora', image: wfOverview },
            {
              label: 'Subscriptions',
              caption: 'Subscriptions - Sora',
              image: wfSubscriptions,
              size: { width: 956.962, height: 641.772 },
            },
            {
              label: 'Alternatives',
              caption: 'Alternatives - Sora',
              image: wfAlternatives,
              size: { width: 956.962, height: 621.519 },
            },
            {
              label: 'Spending & insights',
              caption: 'Spending & Insights - Sora',
              image: wfSpending,
              size: { width: 956.962, height: 621.519 },
            },
          ],
        },
      ],
      pb: 48,
    },
  ],

  carousel: {
    slideWidth: 940,
    slideHeight: 650,
    gap: 40,
    image: { width: 940, height: 650, radius: 16 },
  },

  screensLabel: '08 · FINAL EXPERIENCE',
  screensTitle: 'The final experience.',
  screens: [
    {
      label: 'Dashboard',
      caption: 'Dashboard: every subscription, sorted by what renews next.',
      image: screenDashboard,
    },
    {
      label: 'RENEWALS',
      caption: 'Renewals: the warning, days before the money leaves.',
      image: screenRenewals,
      size: { width: 1001, height: 650 },
    },
    {
      label: 'SPENDING & INSIGHT',
      caption: 'Spending: what it all costs per month and per year.',
      image: screenSpending,
      size: { width: 1001, height: 650 },
    },
    {
      label: 'ALTERNATIVES',
      caption: 'Alternatives: is this one still worth keeping?',
      image: screenAlternatives,
      size: { width: 1001, height: 650 },
    },
  ],

  results: {
    label: '09 · OUTCOME',
    title: 'What SORA became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'Clean, functional, easy to read.',
              'Calm on purpose. You see what’s happening to your money without hunting.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'Every subscription, including the forgotten ones, in one view.',
              'A warning before each renewal, and cancel in two taps.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'The first run works, but it’s too passive.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'An empty dashboard and an “Add your first subscription” button put all the work on you. I’d rethink how you reach the first useful moment.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I assumed SORA could automate more. Once I accepted what it can’t do, the design got sharper.',
      },
    ],
  },

  prev: { label: 'RelocateConnect', to: '/case-study/relocate-connect' },
  next: { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
}

export default sora
