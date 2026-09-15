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
    'A marketplace that puts finding a vendor, checking them out and messaging them in one app. A redesign of a project I first published on Behance.',
  tags: ['Mobile Design', 'E-commerce', 'Visual Design'],
  linkLabel: 'View case study',
  glance: {
    rows: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Type', value: 'Redesign of my own earlier version' },
      { label: 'Platform', value: 'Mobile' },
      { label: 'Team', value: 'Solo' },
    ],
    contribution:
      'Everything here’s mine: the flow from discovery to chat, the vendor profile, checkout and the in-app chat. No new research was done, so the persona comes from the behaviour the product had to serve.',
  },

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'Buying one dress from a small vendor takes four apps.',
      blocksBeforeHead: 1,
      blocks: [
        {
          kind: 'cover',
          src: problemCover,
          alt: 'Vendify app screens',
          height: 849,
          fit: 'cover',
        },
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Amaka buys from small vendors she finds on Instagram. To buy one dress she uses four apps: the post where she saw it, the vendor’s profile to guess what else they sell, WhatsApp to ask a question, and Maps to find out where they are.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Nothing connects those steps. The profile was never built to be a storefront, the chat has no link to the product she was asking about, and the obvious questions (price, size, delivery) get asked one message at a time.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'Vendify had to put discovery, checking a vendor out and the conversation in one place, built for buying from the start.',
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
              body: 'A young customer in Lagos who finds small vendors through Instagram and WhatsApp.',
            },
            {
              title: 'What she’s doing',
              body: 'Working out whether a vendor is worth buying from: what they sell, where they are, and whether she can get a straight answer.',
            },
            {
              title: 'Why the customer side comes first',
              body: 'A marketplace with no buyers is a directory. The discovery journey has to work before the vendor side is worth designing.',
            },
          ],
        },
        {
          kind: 'note',
          label: 'Note',
          body: 'This is a redesign of a project I had already published on Behance, not a new product. No new research was done. The persona is written from the behaviour the product had to serve.',
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
              body: 'A new marketplace has no history behind its vendors, and reviews need volume it doesn’t have yet.',
              solution:
                '→ I leaned on what the product can show: a real profile, what they sell, where they are, and direct contact.',
              tradeoff:
                'Trade-off: ratings appear, but the deeper review and dispute system isn’t built.',
            },
            {
              label: 'REAL CONTENT',
              title: 'Not every vendor is well presented',
              body: 'Designing for a perfectly curated storefront would break on contact with real sellers.',
              solution:
                '→ I designed around realistic vendor content, so a thin profile still reads as usable.',
              tradeoff:
                'Trade-off: some polish given up to stay honest about what vendors upload.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE JOURNEY',
      title: 'Discover, check them out, connect.',
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
              body: 'Familiar, and already a habit. But the conversation leaves the product and loses the vendor she was looking at.',
            },
            {
              badge: 'B',
              title: 'Keep the chat inside Vendify',
              body: 'Discovery, checking out and talking stay connected. Without it the app is a directory that sends people elsewhere for the part that matters.',
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
        'Home puts search, categories and vendor listings in one place, with the vendor named and badged on every product card.',
      image: screen1,
    },
    {
      label: 'image 11',
      caption: 'The vendor profile: what they sell, where they are, and how to reach them.',
      image: screen2,
    },
    {
      label: 'image 12',
      caption: 'Products and services, laid out so a sparse profile still reads as usable.',
      image: screen3,
    },
    {
      label: 'image 13',
      caption: 'Location and direct contact, the last step before a conversation starts.',
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
              'Product photography leads and the interface stays out of its way.',
              'Generous cards, calm neutrals and one accent colour for actions, so it’s obvious what’s tappable.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'Shoppers get from browsing to checkout in noticeably fewer taps.',
              'Vendors get a storefront that reads as trustworthy on its own, and buyers get a marketplace that feels curated, not crowded.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'I started by redesigning the screens. I ended up redesigning the flow.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'The chat. Message history, order context and a clear path for disputes or support. I’d also take the vendor side further.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I opened the old file thinking it was a visual redesign. Screen by screen, the real opportunity was the journey from finding a vendor to talking to them.',
      },
    ],
  },

  prev: { label: 'CVER', to: '/case-study/cver' },
  next: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
}

export default vendify
