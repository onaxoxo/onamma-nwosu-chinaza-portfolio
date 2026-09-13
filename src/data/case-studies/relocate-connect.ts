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

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Moving somewhere new is easy. Belonging there is not.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Someone arrives in a new city with a job, a flat and no one to call. The practical parts of relocating are solved by a dozen apps. The social part is left to chance.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Existing platforms are built for people who already have a network. Group chats are closed, event listings assume local knowledge, and social media keeps surfacing friends from the place they just left.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'RelocateConnect exists to shorten the gap between arriving and feeling at home, by putting people, communities and local resources in one place from day one.',
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
      title: 'The judgements that shaped the product.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Ask before you show',
              body: 'The first version dropped users straight into a feed. Without knowing their interests, the feed was generic and the app felt like every other social network. Moving the questions up front fixed the feed.',
            },
            {
              title: 'Design the empty state as a feature',
              body: 'In a new city a search often returns nothing. Rather than a dead end, the empty state suggests interests and invites people to start the community themselves.',
            },
            {
              title: 'Warm, not loud',
              body: 'Newcomers are already overwhelmed. The interface stays calm and friendly, with illustration doing the welcoming instead of bold colour or motion.',
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
      caption: 'Search results for something specific, filtered by what is nearby.',
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
              'It is designed to make newcomers feel comfortable and confident, not overwhelmed by another busy feed.',
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
    title: 'What I changed.',
    headline: 'Community is the product. The feed is just where it lives.',
    beats: [
      {
        label: 'WHAT I REVISITED',
        body: 'I would revisit safety and moderation. Communities lower the risk of meeting strangers, but the concept still leans on people behaving well. Reporting, verification and community guidelines deserve real screens, not a settings link.',
      },
      {
        label: 'WHAT I IMPROVED ALONG THE WAY',
        body: 'I started by designing a feed and worked backwards to why anyone would open it. Once I made the onboarding questions the centre of the product, every other screen had something to be personal about.',
      },
    ],
  },

  prev: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
  next: { label: 'SORA', to: '/case-study/sora' },
}

export default relocateConnect
