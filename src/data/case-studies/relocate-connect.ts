import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/relocate/hero-cover.png'
import flowDiagram from '../../assets/relocate/flow.png'
import screenSplash from '../../assets/relocate/screen-splash.png'
import screenWelcome from '../../assets/relocate/screen-welcome.png'
import screenDiscover from '../../assets/relocate/screen-discover.png'
import screenSearch from '../../assets/relocate/screen-search.png'
import screenEmpty from '../../assets/relocate/screen-empty.png'

const relocateConnect: CaseStudy = {
  slug: 'relocate-connect',
  title: 'RelocateConnect',
  subtitle: 'Community app for newcomers',
  intro:
    'RelocateConnect helps newcomers settle into unfamiliar places by connecting them with communities, people and local resources, so relocation feels less lonely and more welcoming.',
  tags: ['Product Design', 'Mobile App', 'Community'],
  linkLabel: 'View case study',
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
      'I designed the whole product: onboarding, discovery, search and the empty state. The key decision was starting with communities instead of one-to-one matching.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'New city, new job, no one to call.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Apps solve the practical side of moving. Nobody solves the social side.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Group chats are closed. Events assume you know the area. Social media shows the friends you left behind.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'RelocateConnect gives newcomers people, communities and local help from day one.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Tobi, 27, three weeks into a new city.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Who he is',
              body: 'A software engineer who moved for work. He knows his colleagues and his landlord, and nobody else.',
            },
            {
              title: 'What he needs',
              body: 'A low-pressure way to find people who share his interests, and communities he can join without needing an introduction.',
            },
            {
              title: 'What gets in the way',
              body: 'Cold-messaging strangers feels awkward, and the events he finds online assume he already knows the neighbourhoods.',
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
              label: 'COLD START',
              title: 'No network on day one',
              body: 'A newcomer has no friends, no history and no recommendations for the app to work from.',
              solution:
                '→  Onboarding asks about interests and needs first, so the first screen is already personal.',
              tradeoff: 'Trade-off: onboarding is longer than a bare sign-up form.',
            },
            {
              label: 'TRUST',
              title: 'Strangers are still strangers',
              body: 'Connecting people who have never met carries real safety concerns, especially for someone new to a place.',
              solution:
                '→  Communities and events come before one-to-one chat, so people meet in groups first.',
              tradeoff: 'Trade-off: a direct connection takes one extra step.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'From first launch to a first connection.',
      blocks: [
        {
          kind: 'flow',
          gap: 12,
          steps: [
            { title: 'Splash', body: 'The app opens on the mark, not a form', flex: true },
            { title: 'Welcome', body: 'Sign up, or log in', flex: true },
            { title: 'Interests', body: 'Pick what you care about', flex: true },
            { title: 'Discover', body: 'Communities and people nearby', flex: true },
            { title: 'Search', body: 'Find something specific', flex: true },
            { title: 'Connect', body: 'Join a community or say hello', flex: true },
          ],
        },
        {
          kind: 'artifactImage',
          src: flowDiagram,
          alt: 'RelocateConnect user flow: splash, welcome and sign up, then home, discover, search, communities and profile branches',
          height: 498,
          image: { width: 979.573, height: 459.77 },
        },
      ],
    },
    {
      label: '06 · THE DECISION',
      title: 'Match people one-to-one, or start with communities?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 223,
          items: [
            {
              badge: 'A',
              title: 'Match individuals directly',
              body: 'Fast and familiar from dating apps. But it asks a newcomer to trust a stranger immediately, and it gives the app nothing to work with on day one.',
            },
            {
              badge: 'B',
              title: 'Communities first, people second',
              body: 'Interest-based communities give newcomers a reason to show up and a group to meet in. One-to-one connection grows out of that, when both people are ready.',
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
              title: 'Ask before you show',
              body: 'The first version dropped people straight into a feed. Without knowing their interests it was generic, like every other social network. Moving the questions up front fixed it.',
            },
            {
              title: 'Design the empty state as a feature',
              body: 'In a new city a search often returns nothing. Instead of a dead end, the empty state suggests interests and invites people to start the community themselves.',
            },
            {
              title: 'Warm, not loud',
              body: 'Newcomers are already overwhelmed. The interface stays calm, with illustration doing the welcoming instead of bold colour or motion.',
            },
          ],
        },
      ],
      pb: 20,
    },
  ],

  carousel: {
    slideWidth: 940,
    slideHeight: 650,
    gap: 40,
    slideBackground: '#eef2ff',
    slideRadius: 16,
    image: { width: 277, height: 600, radius: 26 },
  },

  screensLabel: '08 · FINAL EXPERIENCE',
  screensTitle: 'The final experience.',
  screens: [
    {
      label: 'Splash',
      caption: 'First launch, before an account exists. The app opens on the mark, not a form.',
      image: screenSplash,
    },
    {
      label: 'Welcome',
      caption: 'Welcome: sign up or log in, with the illustration doing the greeting.',
      image: screenWelcome,
    },
    {
      label: 'Discover',
      caption: 'Discover: communities and people matched to the interests picked at onboarding.',
      image: screenDiscover,
    },
    {
      label: 'Search results',
      caption: 'Search results for something specific, filtered by what’s nearby.',
      image: screenSearch,
    },
    {
      label: 'No results',
      caption: 'No results: the empty state that suggests interests and keeps people moving.',
      image: screenEmpty,
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
              'The visual direction is calm, warm and approachable, with a single blue for actions and illustration carrying the welcome.',
              'It’s designed to make newcomers feel comfortable and confident, not overwhelmed by another busy feed.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'The final design makes onboarding feel less like admin and more like the start of belonging somewhere.',
              'People get a clear path from arriving to discovering communities and meeting people they can actually connect with.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'Community is the product. The feed is just where it lives.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'Safety and moderation. Communities lower the risk of meeting strangers, but the concept still leans on people behaving well. Reporting, verification and guidelines deserve real screens.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I started with a feed and worked backwards to why anyone would open it. Once the onboarding questions became the centre, every other screen had something to be personal about.',
      },
    ],
  },

  prev: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
  next: { label: 'SORA', to: '/case-study/sora' },
}

export default relocateConnect
