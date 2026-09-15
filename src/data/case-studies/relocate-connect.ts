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
    'A community app for newcomers. People, communities and local help in one place, so a new city feels less lonely.',
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
      'I designed all of it: onboarding, discovery, search, the empty state. The key call was communities first, not one-to-one matching.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Moving to a new city is easy to plan. Making friends there isn’t.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Tobi arrives in a new city with a job and a flat and no one to call. Apps handle the practical side of moving. Nothing handles the social side.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'The usual places don’t work for a newcomer. Group chats are closed, event listings assume you know the area, and social media keeps showing the friends you left behind.',
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
              body: 'A software engineer who moved for work. Knows his colleagues and his landlord. That’s it.',
            },
            {
              title: 'What he needs',
              body: 'A low-pressure way to find people like him, and groups he can join without an introduction.',
            },
            {
              title: 'What gets in the way',
              body: 'Cold-messaging strangers feels awkward. Event listings assume he knows the area.',
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
              label: 'COLD START',
              title: 'No network on day one',
              body: 'No friends, no history, nothing for the app to work from.',
              solution:
                '→  Onboarding asks about interests first, so the first screen is already personal.',
              tradeoff: 'Trade-off: onboarding is longer than a plain sign-up.',
            },
            {
              label: 'TRUST',
              title: 'Strangers are still strangers',
              body: 'Meeting people you’ve never met is a safety risk, more so somewhere new.',
              solution:
                '→  Communities and events come before one-to-one chat. People meet in groups first.',
              tradeoff: 'Trade-off: a direct connection takes one extra step.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'First launch to first connection.',
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
              title: 'Match individuals',
              body: 'Fast and familiar from dating apps. But it asks a newcomer to trust a stranger on day one, with nothing to go on.',
            },
            {
              badge: 'B',
              title: 'Communities first',
              body: 'Interest groups give newcomers a reason to show up and a room to meet in. One-to-one grows from there.',
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
              body: 'V1 dropped people into a feed. With no interests, it was generic. Asking first fixed it.',
            },
            {
              title: 'Make the empty state useful',
              body: 'In a new city, search often finds nothing. The empty state suggests interests and lets people start the community themselves.',
            },
            {
              title: 'Warm, not loud',
              body: 'Newcomers are already overwhelmed. Calm UI, illustration does the welcoming.',
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
      caption: 'First launch. The mark, not a form.',
      image: screenSplash,
    },
    {
      label: 'Welcome',
      caption: 'Welcome: sign up or log in.',
      image: screenWelcome,
    },
    {
      label: 'Discover',
      caption: 'Discover: communities and people matched to your interests.',
      image: screenDiscover,
    },
    {
      label: 'Search results',
      caption: 'Search results, filtered by what’s nearby.',
      image: screenSearch,
    },
    {
      label: 'No results',
      caption: 'No results: suggest interests, keep people moving.',
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
              'Calm, warm, approachable. One blue for actions. Illustration does the welcoming.',
              'Built to make newcomers feel comfortable, not overwhelmed by another busy feed.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'Onboarding feels less like admin and more like the start of belonging.',
              'A clear path from arriving to finding communities and meeting people.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'Community is the product. The feed is where it lives.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'Safety. Communities lower the risk, but reporting, verification and guidelines still need real screens.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I started with a feed and worked backwards. Once onboarding became the centre, every screen had something personal to show.',
      },
    ],
  },

  prev: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
  next: { label: 'SORA', to: '/case-study/sora' },
}

export default relocateConnect
