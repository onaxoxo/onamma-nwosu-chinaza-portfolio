import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/budget/hero-cover.png'
import screenDashboard from '../../assets/budget/screen-dashboard.png'

const budgetBuddy: CaseStudy = {
  slug: 'budget-buddy',
  title: 'Budget Buddy',
  subtitle: 'Student Budget Tracker',
  intro:
    'A personal finance app for students that tracks spending, manages budgets and helps them save, with a built-in wallet for moving funds securely.',
  tags: ['Mobile Design', 'Fintech', 'Visual Design'],
  linkLabel: 'View case study',
  heroCover,
  heroCoverHeight: 819,
  heroCoverFit: 'cover',

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'The moment money leaves the app, it becomes invisible.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Adaeze receives money from home and may also earn some from side hustles. She can move it into her Budget Buddy wallet and save inside the app.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'But once she withdraws to her bank or spends cash, the app has no idea what happened to it. A tracker that loses sight of money at the exact moment it gets spent is not a tracker.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'The moment that matters is when she wants to know how much of her money she has actually used, and what she used it for, not just what her balance is.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Adaeze, a Nigerian university student.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Where her money comes from',
              body: 'Money sent from home, plus whatever she earns from side hustles. It arrives irregularly and in different amounts.',
            },
            {
              title: 'What she wants to know',
              body: 'How much of it she has used, and what she used it for, shown as categories and percentages rather than a single balance.',
            },
            {
              title: 'What she will not do',
              body: 'Keep a spreadsheet, or reconcile her spending at the end of the week. Any tracking the design asks for has to happen in the moment.',
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
              title: 'The app cannot follow the money',
              body: 'Once a student withdraws to their bank or spends cash, Budget Buddy has no way of knowing what that money became.',
              solution:
                '→ Made the withdrawal flow ask what the money is for, and why, before it leaves the wallet.',
              tradeoff: 'Trade-off: withdrawing takes one step longer than it strictly needs to.',
            },
            {
              label: 'MANUAL TRACKING',
              title: 'It only works if she uses it',
              body: 'The whole picture depends on the student actually recording and categorising what she spends.',
              solution:
                '→ Kept the categorisation step short enough that it reads as part of withdrawing, not as admin afterwards.',
              tradeoff: 'Trade-off: the data is only ever as complete as the user’s habit.',
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
          kind: 'artifact',
          label: 'SPACE FOR USER FLOW',
          caption: 'Space reserved for the user flow: money in through to spending staying visible',
          height: 420,
        },
      ],
    },
    {
      label: '06 · THE DECISION',
      title: 'Ask before the money moves, or after?',
      blocks: [
        {
          kind: 'decisions',
          items: [
            {
              badge: 'A',
              title: 'Withdraw freely, categorise later',
              body: 'Faster in the moment, and it respects the user’s time. But it relies on her coming back to record something after the money has already gone, which is exactly when people forget.',
            },
            {
              badge: 'B',
              title: 'Categorise before withdrawing',
              body: 'The step is justified because it protects the one thing the product exists to do. Spending stays visible after the money leaves the wallet, and the categories stay complete enough to be worth showing.',
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
              body: 'Budget Buddy loses sight of money at the exact moment it gets spent. Everything else followed from choosing a point to capture that, and there was really only one honest option.',
            },
            {
              title: 'Before, not after',
              body: 'Asking the student to categorise afterwards depends on her coming back to do admin. Asking before the withdrawal is the only version where the data stays complete enough to be worth showing her.',
            },
            {
              title: 'Where the scope ran away',
              body: 'I kept adding surface: alerts, summaries, security, settings. Looking at it now, the core needed depth far more than the product needed breadth.',
            },
          ],
        },
        {
          kind: 'artifact',
          label: 'SPACE FOR WIREFRAMES',
          caption: 'Space reserved for wireframes or structure studies',
          height: 520,
        },
      ],
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
      caption: 'Home shows what is left to spend this month, before anything else.',
      image: screenDashboard,
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
              'The visual direction is friendly and high contrast, with big numbers carrying the hierarchy.',
              'It stays playful without tipping into childish, because the app handles real money and needs to be trusted with it.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'The final design lets students know what is left to spend at a glance.',
              'Budgets, transactions and a secure wallet sit in one app, so tracking money and moving it are no longer two separate chores.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I changed.',
    headline: 'More screens didn’t make the product stronger.',
    beats: [
      {
        label: 'WHAT I REVISITED',
        body: 'I’d revisit the breadth of the product. I explored a lot of screens and features, but the core budgeting, wallet, and spending experiences could have been pushed further instead of trying to cover so much.',
      },
      {
        label: 'WHAT I IMPROVED ALONG THE WAY',
        body: 'I initially thought covering more parts of the fintech experience would make Budget Buddy feel more complete. I realised that more features don’t automatically make a product stronger, so I became more deliberate about prioritising the core experience and the product’s main goal: helping users understand where their money goes.',
      },
    ],
  },

  prev: { label: 'Vendify', to: '/case-study/vendify' },
  next: { label: 'SORA', to: '/case-study/sora' },
}

export default budgetBuddy
