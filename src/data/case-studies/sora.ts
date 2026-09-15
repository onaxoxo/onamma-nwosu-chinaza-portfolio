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
    'Every subscription in one place. What renews, what it costs in your currency, what to cancel.',
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
      'I designed the whole product: flows, dashboard, currency logic. The hard part was showing a dollar price to someone who budgets in naira.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Subscriptions are billed in dollars. Nigerians budget in naira.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Chinaza pays for six subscriptions. Most of them bill in dollars, but she budgets in naira, so no price on any receipt means anything to her until she converts it.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'She only sees the real cost when the bank debits her, often several charges at once. ₦25,000 goes out and she can’t tell which services it was.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'SORA shows every subscription in naira, before the money leaves.',
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
              body: 'Earns about ₦450,000 a month. Pays for Spotify, Netflix, Canva, Google One, a design tool and ChatGPT.',
            },
            {
              title: 'What she needs',
              body: 'What she pays for. When the next payment lands. What it costs in naira.',
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
              body: 'Rates move. A naira figure never matches the bank to the kobo.',
              solution:
                '→  Rates refresh daily. You pick the currency you budget in.',
              tradeoff: 'Trade-off: good enough to budget with, not a prediction.',
            },
            {
              label: 'CANCELLATION',
              title: 'Only the provider can cancel',
              body: 'SORA can’t end a subscription for you.',
              solution:
                '→  SORA shows the renewal date, then hands you to the provider.',
              tradeoff:
                'Trade-off: SORA helps you decide. It doesn’t control the outcome.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'Add it. See it coming. Decide.',
      blocks: [
        {
          kind: 'flow',
          steps: [
            { title: 'Add subscription', body: 'Service, price, currency, cycle', width: 211 },
            { title: 'View subscription', body: 'What’s happening now, not a list', width: 235 },
            { title: 'See upcoming renewal', body: 'Before the money leaves', flex: true },
            { title: 'Understand the cost', body: 'Per month, per year, in one currency', width: 236 },
            { title: 'Decide whether to keep it', body: 'Cancelling happens at the provider', flex: true },
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
      title: 'Billed in dollars, budgeted in naira. Which do you show?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 215,
          items: [
            {
              badge: 'A',
              title: 'Dollars only',
              body: 'True to the bill. But Chinaza still converts in her head, which is the part she needed help with.',
            },
            {
              badge: 'B',
              title: 'Naira only',
              body: 'Clean. But it hides the real price and makes an estimate look certain.',
            },
            {
              badge: 'C',
              title: 'Naira first, dollars one tap away',
              body: 'Lead with the currency she budgets in. Keep the billed price within reach.',
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
              body: 'No bank data, no cancelling, no promised rates. What SORA can do is show you what’s coming. Every screen was judged on that.',
            },
            {
              title: 'Answer the question people open the app with',
              body: 'The dashboard leads with what’s happening now, not a list. Nobody opens the app to read a list.',
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
      caption: 'Renewals, shown before the money leaves.',
      image: screenRenewals,
    },
    {
      label: 'SPENDING & INSIGHT',
      caption: 'Spending: what subscriptions cost per month and per year.',
      image: screenSpending,
    },
    {
      label: 'ALTERNATIVES',
      caption: 'Alternatives: is this one still worth keeping?',
      image: screenAlternatives,
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
              'Receipts and reminders become one view.',
              'What renews next, what it costs in naira, and cancel in two taps.',
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
