import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/budget/hero-cover.png'
import screenDashboard from '../../assets/budget/screen-dashboard.png'
import flowDiagram from '../../assets/budget/flow.png'
import wfOnboarding from '../../assets/budget/wf-onboarding.png'
import wfHome from '../../assets/budget/wf-home.png'
import wfSummary from '../../assets/budget/wf-summary.png'
import wfWallet from '../../assets/budget/wf-wallet.png'
import screenDouble from '../../assets/budget/screen-double.png'
import screenWallet from '../../assets/budget/screen-wallet.png'
import screenAddMoney from '../../assets/budget/screen-addmoney.png'

/** Showcase / Carousel geometry for the wireframe slides (a 275 x 596 phone on a white 940 x 650 slide). */
const wireframeCarousel = {
  slideWidth: 940,
  slideHeight: 650,
  gap: 40,
  slideBackground: '#ffffff',
  slideRadius: 16,
  image: { width: 275, height: 596.183, radius: 0 },
}

const budgetBuddy: CaseStudy = {
  slug: 'budget-buddy',
  title: 'Budget Buddy',
  subtitle: 'Student Budget Tracker',
  intro:
    'A student budgeting app with a wallet. Track spending, set budgets, hold money. Built from scratch.',
  tags: ['Mobile Design', 'Fintech', 'Visual Design'],
  linkLabel: 'View case study',
  liveUrl: 'https://www.behance.net/gallery/248083805/Budget-Buddy-Smart-Student-Budgeting-with-Wallet',
  heroCover,
  heroCoverHeight: 819,
  heroCoverFit: 'cover',
  glance: {
    rows: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Type', value: 'Concept, built from scratch' },
      { label: 'Platform', value: 'Mobile' },
      { label: 'Team', value: 'Solo' },
    ],
    contribution:
      'I designed all of it: wallet, budgets, summary, withdraw flow. The key call was where to ask what the money is for.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Students don’t know where their money went.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Adaeze wants to know how much of her money she’s used and on what. Her budgeting app only knows her balance, and only while the money sits in the app.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'The moment she withdraws to her bank or spends cash, the app loses it. She’s left with a number that went down and no idea why.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'Budget Buddy asks what the money is for before it leaves the wallet, so her spending stays visible after it’s gone.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Adaeze, university student, Nigeria.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Where the money comes from',
              body: 'Home and side hustles. Irregular, in different amounts.',
            },
            {
              title: 'What she wants to know',
              body: 'How much she used and on what. Categories and percentages, not one balance.',
            },
            {
              title: 'What she won’t do',
              body: 'Spreadsheets. Weekly reconciling. Tracking has to happen in the moment.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'Two limits that shaped the product.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'VISIBILITY',
              title: 'The app can’t follow the money',
              body: 'Once it’s in a bank or in cash, Budget Buddy can’t see it.',
              solution:
                '→ The withdraw flow asks what the money is for before it leaves.',
              tradeoff: 'Trade-off: withdrawing takes one extra step.',
            },
            {
              label: 'MANUAL TRACKING',
              title: 'It only works if she uses it',
              body: 'The whole picture depends on her recording what she spends.',
              solution:
                '→ The category step is short enough to feel like part of withdrawing, not admin.',
              tradeoff: 'Trade-off: the data is only as complete as her habit.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'Where the spending gets captured.',
      blocks: [
        {
          kind: 'flow',
          gap: 12,
          steps: [
            { title: 'Money in', body: 'From home or side hustles', flex: true },
            { title: 'Budget Buddy wallet', body: 'Held and saved in-app', flex: true },
            { title: 'Withdraw', body: 'She starts the request', flex: true },
            {
              title: 'Select category and reason',
              body: 'Captured before the money moves',
              flex: true,
            },
            { title: 'Money leaves wallet', body: 'Out to bank or cash', flex: true },
            { title: 'Spending stays visible', body: 'Counted in her spending', flex: true },
          ],
        },
        {
          kind: 'artifactImage',
          src: flowDiagram,
          alt: 'Budget Buddy user flow: onboarding, sign up and verification, then home, summary, add expense, wallet and profile branches',
          height: 498,
          image: { width: 979.573, height: 459.77 },
        },
      ],
    },
    {
      label: '06 · THE DECISION',
      title: 'Ask before the money moves, or after?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 223,
          items: [
            {
              badge: 'A',
              title: 'Withdraw first, categorise later',
              body: 'Faster. But it relies on her coming back after the money is gone, which is when people forget.',
            },
            {
              badge: 'B',
              title: 'Categorise before withdrawing',
              body: 'One extra step. It protects the one thing the product exists to do.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'Where tracking actually breaks.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Find the moment money disappears',
              body: 'It’s the moment of spending. Everything followed from catching that.',
            },
            {
              title: 'Before, not after',
              body: 'Asking after depends on her doing admin. Asking before keeps the data complete.',
            },
            {
              title: 'Where the scope ran away',
              body: 'I kept adding: alerts, summaries, security, settings. The core needed depth, not breadth.',
            },
          ],
        },
        {
          kind: 'carousel',
          geometry: wireframeCarousel,
          screens: [
            {
              label: 'Onboarding',
              caption: 'Home: what’s left to spend this month, first.',
              image: wfOnboarding,
            },
            { label: 'Home', caption: 'Home - Budget Buddy', image: wfHome },
            { label: 'Summary', caption: 'Summary - Budget Buddy', image: wfSummary },
            { label: 'Wallet', caption: 'Wallet - Budget Buddy', image: wfWallet },
          ],
        },
      ],
      pb: 61,
    },
  ],

  carousel: {
    slideWidth: 940,
    slideHeight: 650,
    gap: 52,
    slideRadius: 16,
    image: { width: 940, height: 650, radius: 16 },
  },

  screensLabel: '08 · FINAL EXPERIENCE',
  screensTitle: 'The final experience.',
  screens: [
    {
      label: 'Dashboard',
      caption: 'Home: what’s left to spend this month, first.',
      image: screenDashboard,
    },
    {
      label: 'Dashboard and summary',
      caption: 'Dashboard and monthly summary, side by side.',
      image: screenDouble,
    },
    {
      label: 'Wallet',
      caption: 'Wallet: balance, linked bank, recent transactions.',
      image: screenWallet,
    },
    {
      label: 'Add money',
      caption: 'Adding money to the wallet.',
      image: screenAddMoney,
    },
  ],

  results: {
    label: '09 · OUTCOME',
    title: 'What the concept became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'Friendly, high contrast, big numbers.',
              'Playful, not childish. It handles real money.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'What’s left to spend, at a glance.',
              'Budgets, transactions and a wallet in one app. Tracking and moving money stop being two chores.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'More screens didn’t make it stronger.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'The breadth. Too many screens, when budgets, wallet and spending could have gone deeper.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I thought more features meant more complete. They don’t. The job is showing where the money goes.',
      },
    ],
  },

  prev: { label: 'Vendify', to: '/case-study/vendify' },
  next: { label: 'RelocateConnect', to: '/case-study/relocate-connect' },
}

export default budgetBuddy
