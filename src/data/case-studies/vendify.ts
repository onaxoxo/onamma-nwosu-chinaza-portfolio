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
    'Vendify is an e-commerce marketplace that connects buyers with vendors, making it easy to discover, browse and purchase products online.',
  tags: ['Mobile Design', 'E-commerce', 'Visual Design'],
  linkLabel: 'View case study',

  sections: [
    {
      label: '02 · THE PROBLEM',
      title: 'The journey is spread across four apps.',
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
              text: 'A customer finds a small vendor through a post, opens their profile to work out what they actually sell, asks questions in DMs, and then tries to find out where they are based.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'Nothing connects those steps. The profile was never built to be a storefront, the DMs are not tied to what she was looking at, and the vendor has no page that answers the obvious questions before she asks them.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'Vendify puts discovery, evaluation and conversation in one place. The difference from Instagram is that the whole experience is built for commerce.',
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
              body: 'A young customer in Lagos who finds small vendors mainly through Instagram and WhatsApp.',
            },
            {
              title: 'What she is doing',
              body: 'Working out whether a vendor is worth buying from: what they sell, where they are, and whether she can get a straight answer to a question.',
            },
            {
              title: 'Why the customer side leads',
              body: 'A marketplace with no demand is a directory. The discovery journey is the part that has to work before the vendor side is worth designing.',
            },
          ],
        },
        {
          kind: 'note',
          label: 'Note',
          body: 'This is a redesign of a project I had already published on Behance, not a new product. No new research was conducted. The persona is written from the behaviour the product had to serve, and the work here is about improving the flow, hierarchy and structure of something that already existed.',
        },
      ],
    },
    {
      label: '04 · THE CHALLENGE',
      title: 'Trust, with no transaction history to lean on.',
      blocks: [
        {
          kind: 'constraints',
          items: [
            {
              label: 'TRUST',
              title: 'Nothing to prove a vendor is real',
              body: 'A new marketplace has no history behind its vendors, and dispute handling and written reviews need volume the product does not have yet.',
              solution:
                '→ Leaned on signals the product can actually provide: a dedicated vendor profile, what they sell, where they are, and direct contact.',
              tradeoff:
                'Trade-off: ratings appear in the design, but the deeper review and dispute system is not built.',
            },
            {
              label: 'REAL CONTENT',
              title: 'Not every vendor is well presented',
              body: 'Assuming every vendor arrives with a curated storefront would have produced a design that breaks on contact with real sellers.',
              solution:
                '→ Designed around realistic vendor content, so a sparse profile still reads as usable.',
              tradeoff:
                'Trade-off: the layout gives up some polish to stay honest about what vendors will actually upload.',
            },
          ],
        },
      ],
    },
    {
      label: '05 · THE JOURNEY',
      title: 'Discover → Evaluate → Connect.',
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
      title: 'Send them to WhatsApp, or keep the conversation here?',
      blocks: [
        {
          kind: 'decisions',
          minHeight: 205,
          items: [
            {
              badge: 'A',
              title: 'Hand off to WhatsApp',
              body: 'The familiar route, and already part of the customer’s habits. But the conversation leaves the product, and the vendor she was looking at is no longer attached to it.',
            },
            {
              badge: 'B',
              title: 'Keep chat inside Vendify',
              body: 'Discovery, evaluation and conversation stay connected. Without it the marketplace is a directory that sends people elsewhere to do the part that matters.',
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
      title: 'What opening the old file actually showed.',
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
              'The visual direction lets product photography lead and keeps the interface out of its way.',
              'Generous cards, calm neutrals and a single accent colour reserved for actions make it obvious what is tappable on every screen.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'The final design gets shoppers from browsing to checkout in noticeably fewer taps.',
              'Vendors get a storefront that reads as trustworthy on its own, and buyers get a marketplace that feels curated rather than crowded.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I changed.',
    headline: 'I started by redesigning the screens. I ended up redesigning the experience.',
    beats: [
      {
        label: 'WHAT I REVISITED',
        body: 'I’d revisit the chat experience to explore message history, order context, and a clearer path for disputes or support. I’d also extend the experience further on the vendor side so the communication flow feels more complete.',
      },
      {
        label: 'WHAT I IMPROVED ALONG THE WAY',
        body: 'When I opened the old project, I initially saw it as a visual redesign. As I worked through the screens, I realised the bigger opportunity was the user flow. I became more focused on simplifying the journey from discovering a vendor to evaluating them and finally connecting.',
      },
    ],
  },

  prev: { label: 'CVER', to: '/case-study/cver' },
  next: { label: 'Budget Buddy', to: '/case-study/budget-buddy' },
}

export default vendify
