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
    'A subscription manager that pulls every recurring charge into one place, so people can see what they are actually paying for and cancel what they forgot about.',
  tags: ['Product Design', 'Mobile App', 'End-to-end'],
  linkLabel: 'View live site',
  heroCover,
  heroCoverHeight: 849,
  heroCoverStyle: { height: '100.52%', top: '-0.55%', width: '100%', left: '0' },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'You find out what it cost after the money has gone.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'She knows she is spending money on subscriptions. What she does not have is one place showing what they cost her in a month or a year.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'It gets worse when several charges land at once. She sees a ₦25,000+ deduction, knows it was “subscriptions”, and cannot say which services made up that amount. Sometimes she keeps paying for a service she barely uses, simply because she forgot about it.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'SORA exists to move that moment forward: from discovering the expense after the money has left her account, to seeing it coming and deciding whether it is still worth paying for.',
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
              body: '24, a Nigerian designer living in Lagos, earning about ₦450,000 a month. She pays for around six subscriptions: Spotify, Netflix, Canva, Google One, a design tool and ChatGPT.',
            },
            {
              title: 'What she needs',
              body: 'One place that shows what she is subscribed to, when each payment is coming, and what those subscriptions actually cost her in the currency she budgets in.',
            },
            {
              title: 'How she finds out today',
              body: 'From a debit alert, or by checking her bank statement later. The spending is visible only after it has happened, and never as one total.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'Three things SORA could not do.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'MANUAL ENTRY',
              title: 'No bank or card API',
              body: 'Nothing could be pulled in automatically, so every subscription had to be added by hand.',
              solution:
                '→  Reduced entry to the four essentials: service, price, currency, billing cycle.',
              tradeoff: 'Trade-off: manual entry is still SORA’s biggest friction point.',
            },
            {
              label: 'CURRENCY',
              title: 'A conversion is never exact',
              body: 'Rates move, so a converted figure can never match what the bank will actually charge.',
              solution:
                '→  Rates refresh daily from Open Exchange Rates, and the user picks the currency they budget in.',
              tradeoff: 'Trade-off: good enough to budget with, not a prediction of the charge.',
            },
            {
              label: 'CANCELLATION',
              title: 'Providers own the flow',
              body: 'SORA cannot end a subscription. Only the provider can.',
              solution:
                '→  Surface the renewal date and the subscription details, then hand the user to the provider.',
              tradeoff:
                'Trade-off: SORA helps the user decide and act, but does not control the outcome.',
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
            { title: 'View subscription', body: 'What is happening now, not a list', width: 235 },
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
      title: 'Billed in dollars. Budgeted in naira.',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 215,
          items: [
            {
              badge: 'A',
              title: 'Show the USD price only',
              body: 'Accurate to the bill, but it leaves Chinaza doing the conversion in her head, which is the part she actually needed help with.',
            },
            {
              badge: 'B',
              title: 'Convert to NGN and hide the USD',
              body: 'Reads cleanly, but it hides the real price and makes an estimated rate look more authoritative than it is.',
            },
            {
              badge: 'C',
              title: 'Convert, and keep the original price reachable',
              body: 'Sora leads with the currency she budgets in, while the price she is actually billed in stays available rather than being thrown away.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'The judgements that shaped the product.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Find the part it can genuinely own',
              body: 'Sora cannot pull data from a bank, cancel anything, or promise an exchange rate. Once I stopped designing around what it could not do, one job was left that it could do properly: show the user what is coming before it arrives. Every screen was judged against that.',
            },
            {
              title: 'Answer the question the user arrives with',
              body: 'The dashboard leads with what is happening now (upcoming renewals, recent changes, updates) rather than the full subscription list. A list is the easier thing to build, and it answers a question nobody opens the app to ask.',
            },
            {
              title: 'Put the friction where it is expected',
              body: 'Manual entry is the price of having no bank API. I concentrated that effort at the moment of adding a subscription, where a user already expects to type, instead of letting it leak into the rest of the experience.',
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
    title: 'What the product became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'The visual direction is clean and functional, with emphasis on readability and structure.',
              'The interface was designed to feel calm and organised, so people can quickly understand what is happening to their money without distraction.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'The final design turns a scattered set of receipts and reminders into a single, structured view.',
              'People can see what renews next, what it costs and cancel in a couple of taps, with no hunting through email and no surprise charges.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I changed.',
    headline: 'The first-run experience is functional, but too passive.',
    beats: [
      {
        label: 'WHAT I REVISITED',
        body: 'An empty dashboard and an “Add your first subscription” button put all the work on the user before Sora has shown any value. I’d revisit how the product gets users to their first useful moment without introducing features Sora doesn’t actually support.',
      },
      {
        label: 'WHAT I IMPROVED ALONG THE WAY',
        body: 'I started with the assumption that Sora could handle more of the subscription lifecycle automatically. As I worked through the product constraints, I became more deliberate about designing around what Sora could reliably do rather than designing an idealised version of the product.',
      },
    ],
  },

  prev: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
  next: { label: 'Ocicat AI Studio', to: '/case-study/ocicat-ai-studio' },
}

export default sora
