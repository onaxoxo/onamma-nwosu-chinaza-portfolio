import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import screen1 from '../../assets/vendify/screen-1.png'
import screen2 from '../../assets/vendify/screen-2.png'
import screen3 from '../../assets/vendify/screen-3.png'
import screen4 from '../../assets/vendify/screen-4.png'
import problemCover from '../../assets/vendify/problem-cover.jpg'
import flowDiagram from '../../assets/vendify/flow.png'
import chatScreen from '../../assets/vendify/chat-screen.png'
import wfHome from '../../assets/vendify/wf-home.png'
import wfDiscover from '../../assets/vendify/wf-discover.png'
import wfVendorProfile from '../../assets/vendify/wf-vendor-profile.png'
import wfProduct from '../../assets/vendify/wf-product.png'

/** Showcase / Carousel geometry for the wireframe slides (a 278 x 602 phone on a white 940 x 650 slide). */
const wireframeCarousel = {
  slideWidth: 940,
  slideHeight: 650,
  gap: 40,
  slideBackground: '#ffffff',
  slideRadius: 16,
  image: { width: 277.683, height: 602, radius: 0 },
}

const vendify: CaseStudy = {
  slug: 'vendify',
  title: 'Vendify',
  subtitle: 'E-commerce marketplace platform',
  intro:
    'Find a vendor, check them out, message them. One app. A redesign of my own Behance project.',
  tags: ['Mobile Design', 'E-commerce', 'Visual Design'],
  linkLabel: 'View case study',
  heroCover: problemCover,
  heroCoverHeight: 849,
  heroCoverFit: 'cover',
  glance: {
    rows: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Type', value: 'Redesign of my own earlier version' },
      { label: 'Platform', value: 'Mobile' },
      { label: 'Team', value: 'Solo' },
    ],
    contribution:
      'All of it is mine: the flow from discovery to chat, the vendor profile, checkout, the in-app chat. No new research, so the persona comes from how the product had to work.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Customers can’t find reliable vendors near them.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Amaka wants a vendor she can trust, close enough to deliver or pick up from. Instagram shows her thousands of vendors and tells her nothing about where they are or whether they’re real.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'So she guesses. She scrolls posts, checks profiles, sends DMs and asks around, and still can’t tell a reliable vendor from a scam until money has changed hands.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'Vendify shows her verified vendors nearby, what they sell, and a direct line to ask before she pays.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO I DESIGNED FOR',
      title: 'Amaka, a customer in Lagos.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Who she is',
              body: 'Young, in Lagos, finds small vendors on Instagram and WhatsApp.',
            },
            {
              title: 'What she’s doing',
              body: 'Deciding if a vendor is worth it: what they sell, where they are, will they answer.',
            },
            {
              title: 'Why the buyer comes first',
              body: 'No buyers, no marketplace. Discovery has to work before the vendor side matters.',
            },
          ],
        },
        {
          kind: 'note',
          label: 'Note',
          body: 'A redesign of a project I’d already published on Behance. No new research. The persona comes from how the product had to work.',
        },
      ],
    },
    {
      label: '04 · THE CHALLENGE',
      title: 'Trust, with no history to lean on.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'TRUST',
              title: 'Nothing proves a vendor is real',
              body: 'New marketplace, no history. Reviews need volume it doesn’t have.',
              solution:
                '→ Show what we can: a real profile, what they sell, where they are, direct contact.',
              tradeoff:
                'Trade-off: ratings exist, but no review or dispute system yet.',
            },
            {
              label: 'REAL CONTENT',
              title: 'Not every vendor looks good',
              body: 'Design for a perfect storefront and it breaks on real sellers.',
              solution:
                '→ I designed for thin, messy profiles so they still read as usable.',
              tradeoff:
                'Trade-off: less polish, more honesty.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE JOURNEY',
      title: 'Find. Check. Connect.',
      blocks: [
        {
          kind: 'flow',
          steps: [
            { title: 'Vendor discovery', body: 'Discover', flex: true },
            { title: 'Vendor profile', body: 'Evaluate', flex: true },
            { title: 'Products and services', body: 'Evaluate', flex: true },
            { title: 'Location', body: 'Evaluate', flex: true },
            { title: 'In-app chat', body: 'Connect', flex: true },
          ],
        },
        {
          kind: 'artifactImage',
          src: flowDiagram,
          alt: 'Vendify user flow: splash, onboarding and sign up, then home, discover, product, cart, checkout and account branches',
          height: 468,
          image: { width: 1031.048, height: 414.002 },
        },
      ],
    },
    {
      label: '06 · THE DECISION',
      title: 'Send them to WhatsApp, or keep the chat here?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 205,
          items: [
            {
              badge: 'A',
              title: 'Hand off to WhatsApp',
              body: 'Familiar. But the chat leaves the app and forgets the vendor she was looking at.',
            },
            {
              badge: 'B',
              title: 'Keep the chat in Vendify',
              body: 'Finding, checking and talking stay connected. Otherwise it’s a directory that sends people elsewhere.',
              selected: true,
            },
          ],
        },
        {
          kind: 'processArtifact',
          src: chatScreen,
          alt: 'The in-app chat between a customer and the NovaWear vendor, with the product being discussed pinned at the top',
          height: 948,
          image: { width: 390, height: 852, top: 48 },
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'Wireframing.',
      blocks: [
        {
          kind: 'carousel',
          geometry: wireframeCarousel,
          screens: [
            { label: 'Home screen', caption: 'Home Screen - Vendify', image: wfHome },
            { label: 'Discover', caption: 'Discover - Vendify', image: wfDiscover },
            { label: 'Vendor profile', caption: 'Vendor Profile - Vendify', image: wfVendorProfile },
            { label: 'Product details', caption: 'Product Details - Vendify', image: wfProduct },
          ],
        },
      ],
      pb: 37,
    },
  ],

  carousel: {
    slideWidth: 940,
    slideHeight: 650,
    gap: 24,
    slideBackground: '#fafafa',
    slideRadius: 16,
    image: { width: 940, height: 650, radius: 16 },
  },

  screensLabel: '08 · FINAL EXPERIENCE',
  screensTitle: 'The final experience.',
  screens: [
    {
      label: 'image 10',
      caption:
        'Home: search, categories and vendors in one place. Every product card names its vendor.',
      image: screen1,
    },
    {
      label: 'image 11',
      caption: 'Vendor profile: what they sell, where they are, how to reach them.',
      image: screen2,
    },
    {
      label: 'image 12',
      caption: 'Products and services, readable even when a profile is thin.',
      image: screen3,
    },
    {
      label: 'image 13',
      caption: 'Location and contact, the last step before the chat.',
      image: screen4,
    },
  ],

  results: {
    label: '09 · OUTCOME',
    title: 'What the redesign became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'Photos lead. The interface stays out of the way.',
              'Big cards, calm neutrals, one accent colour for actions.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'Browse to checkout in fewer taps.',
              'Vendors get a storefront that looks trustworthy. Buyers get a marketplace that feels curated.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'I set out to redesign screens. I ended up redesigning the flow.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'The chat. Message history, order context, a path for disputes. And the vendor side.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I thought this was a visual redesign. The real fix was the journey from finding a vendor to talking to them.',
      },
    ],
  },

  prev: { label: 'CVER', to: '/case-study/cver' },
  next: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
}

export default vendify
