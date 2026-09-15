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
    'SORA puts every subscription in one place, so you can see what renews, what it costs in your own currency, and what to cancel.',
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
      'I designed the whole product: the flows, the dashboard and the currency logic. My main focus was how a dollar price shows up for someone who budgets in naira.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'The price looked simple, until you budgeted in naira.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Chinaza pays for about six subscriptions. Most are billed in dollars, but she budgets in naira.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'She only finds out what they cost when several charges land at once. A ₦25,000 debit shows up and she can’t say which services made it up.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'SORA moves that moment forward. You see the charge coming, in the currency you budget in, and decide whether it’s still worth paying for.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Chinaza, 24, a designer in Lagos.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Who she is',
              body: 'A designer in Lagos earning about ₦450,000 a month. Spotify, Netflix, Canva, Google One, a design tool and ChatGPT.',
            },
            {
              title: 'What she needs',
              body: 'One place that shows what she pays for, when the next payment lands, and what it costs in naira.',
            },
            {
              title: 'How she finds out today',
              body: 'From a debit alert, or her bank statement later. Always after the money has left, and never as one total.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'Three things SORA couldn’t do.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'MANUAL ENTRY',
              title: 'No bank or card connection',
              body: 'Nothing could be pulled in automatically. Every subscription had to be typed in.',
              solution:
                '→  I cut entry down to four fields: service, price, currency, billing cycle.',
              tradeoff: 'Trade-off: typing things in is still the biggest friction point.',
            },
            {
              label: 'CURRENCY',
              title: 'A converted price is never exact',
              body: 'Rates move, so a naira figure can never match the bank’s charge to the kobo.',
              solution:
                '→  Rates refresh daily, and you pick the currency you budget in.',
              tradeoff: 'Trade-off: good enough to budget with, not a prediction of the charge.',
            },
            {
              label: 'CANCELLATION',
              title: 'Only the provider can cancel',
              body: 'SORA can’t end a subscription for you.',
              solution:
                '→  SORA shows the renewal date and the details, then hands you to the provider.',
              tradeoff:
                'Trade-off: SORA helps you decide, but doesn’t control the outcome.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'From adding a subscription to deciding whether to keep it.',
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
      title: 'Billed in dollars, budgeted in naira. Which one do you show?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 215,
          items: [
            {
              badge: 'A',
              title: 'Show the USD price only',
              body: 'Accurate to the bill, but Chinaza still does the conversion in her head. That’s the part she needed help with.',
            },
            {
              badge: 'B',
              title: 'Convert to naira and hide the dollars',
              body: 'Reads cleanly, but it hides the real price and makes an estimate look more certain than it is.',
            },
            {
              badge: 'C',
              title: 'Convert, and keep the dollar price one tap away',
              body: 'SORA leads with the currency you budget in. The price you’re actually billed in stays there for when you need it.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'Three calls that shaped the product.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Do the one thing it can actually own',
              body: 'SORA can’t pull bank data, cancel anything or promise a rate. What it can do is show you what’s coming before it arrives. Every screen was judged against that.',
            },
            {
              title: 'Answer the question people open the app with',
              body: 'The dashboard leads with what’s happening now, not the full list. A list is easier to build, but nobody opens the app to read one.',
            },
            {
              title: 'Put the friction where people expect it',
              body: 'Typing is the price of having no bank connection. I kept it at the moment you add a subscription, where you already expect to type.',
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
      caption: 'Dashboard showing every active subscription, sorted by what renews next.',
      image: screenDashboard,
    },
    {
      label: 'RENEWALS',
      caption: 'Upcoming renewals, surfaced before the money leaves the account.',
      image: screenRenewals,
    },
    {
      label: 'SPENDING & INSIGHT',
      caption: 'Spending and insight: what subscriptions cost per month and per year.',
      image: screenSpending,
    },
    {
      label: 'ALTERNATIVES',
      caption: 'Alternatives, for deciding whether a subscription is still worth keeping.',
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
              'Clean and functional, with the emphasis on being easy to read.',
              'It feels calm on purpose, so you can see what’s happening to your money without hunting.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'A scattered pile of receipts and reminders becomes one structured view.',
              'You can see what renews next, what it costs in naira, and get to the cancel page in a couple of taps.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'The first-run experience works, but it’s too passive.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'An empty dashboard and an “Add your first subscription” button put all the work on you before SORA has shown any value. I’d rethink how you get to your first useful moment.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I started assuming SORA could automate more of this. Working through the constraints, I got more deliberate about designing around what it can reliably do.',
      },
    ],
  },

  prev: { label: 'RelocateConnect', to: '/case-study/relocate-connect' },
  next: { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
}

export default sora
