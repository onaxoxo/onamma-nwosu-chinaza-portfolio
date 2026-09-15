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
    'A budgeting app for students that tracks spending, sets budgets and holds money in a wallet. Designed from scratch.',
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
      'I designed the whole product: the wallet, budgets, the summary and the withdraw flow. The key decision was where in the flow to ask what the money is for.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'The moment money leaves the app, it goes invisible.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Adaeze gets money from home and side hustles, moves it into her Budget Buddy wallet and saves inside the app.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'But once she withdraws to her bank or spends cash, the app has no idea what happened. A tracker that loses the money at the moment it’s spent isn’t a tracker.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'What she wants to know is how much she has used and on what, not just what her balance is.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Adaeze, a university student in Nigeria.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Where her money comes from',
              body: 'Money from home plus side hustles. It arrives irregularly and in different amounts.',
            },
            {
              title: 'What she wants to know',
              body: 'How much she has used and what on, as categories and percentages, not one balance.',
            },
            {
              title: 'What she won’t do',
              body: 'Keep a spreadsheet or reconcile her week. Any tracking has to happen in the moment.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE CONSTRAINTS',
      title: 'Two limits that shaped the whole product.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'VISIBILITY',
              title: 'The app can’t follow the money',
              body: 'Once money goes to a bank or becomes cash, Budget Buddy can’t see what it became.',
              solution:
                '→ The withdraw flow asks what the money is for before it leaves the wallet.',
              tradeoff: 'Trade-off: withdrawing takes one step longer than it strictly needs to.',
            },
            {
              label: 'MANUAL TRACKING',
              title: 'It only works if she uses it',
              body: 'The whole picture depends on her actually recording what she spends.',
              solution:
                '→ I kept the category step short enough that it feels like part of withdrawing, not admin.',
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
              body: 'Faster, and it respects her time. But it relies on her coming back after the money has gone, which is exactly when people forget.',
            },
            {
              badge: 'B',
              title: 'Categorise before withdrawing',
              body: 'One extra step, but it protects the one thing the product exists to do. Spending stays visible after the money leaves.',
              selected: true,
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'Where the tracking actually breaks.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Find the moment money disappears',
              body: 'Budget Buddy loses the money at the moment it’s spent. Everything followed from picking a point to capture that.',
            },
            {
              title: 'Before, not after',
              body: 'Asking afterwards depends on her doing admin. Asking before is the only version where the data stays complete.',
            },
            {
              title: 'Where the scope ran away',
              body: 'I kept adding surface: alerts, summaries, security, settings. The core needed depth more than the product needed breadth.',
            },
          ],
        },
        {
          kind: 'carousel',
          geometry: wireframeCarousel,
          screens: [
            {
              label: 'Onboarding',
              caption: 'Home shows what’s left to spend this month, before anything else.',
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
      caption: 'Home shows what’s left to spend this month, before anything else.',
      image: screenDashboard,
    },
    {
      label: 'Dashboard and summary',
      caption: 'The dashboard and the monthly summary side by side.',
      image: screenDouble,
    },
    {
      label: 'Wallet',
      caption: 'The wallet: balance, linked bank account and recent transactions.',
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
              'Friendly and high contrast, with big numbers carrying the hierarchy.',
              'Playful without tipping into childish. It handles real money and needs to be trusted with it.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'You know what’s left to spend at a glance.',
              'Budgets, transactions and a wallet sit in one app, so tracking money and moving it are no longer two chores.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'More screens didn’t make the product stronger.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'The breadth. I explored a lot of screens when the core budgeting, wallet and spending flows could have gone further.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I thought covering more of the fintech experience would make it feel complete. More features don’t make a product stronger, so I got more deliberate about the main goal: showing where the money goes.',
      },
    ],
  },

  prev: { label: 'Vendify', to: '/case-study/vendify' },
  next: { label: 'RelocateConnect', to: '/case-study/relocate-connect' },
}

export default budgetBuddy
