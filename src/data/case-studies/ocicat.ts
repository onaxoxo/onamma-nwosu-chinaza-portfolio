import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/ocicat/hero-cover.png'
import decisionEditor from '../../assets/ocicat/decision-editor.png'
import screenDashboard from '../../assets/ocicat/screen-dashboard.png'
import screenTemplate from '../../assets/ocicat/screen-template.png'
import screenEditor from '../../assets/ocicat/screen-editor.png'
import flowDiagram from '../../assets/ocicat/flow.png'
import wfDashboard from '../../assets/ocicat/wf-dashboard.png'
import wfTemplates from '../../assets/ocicat/wf-templates.png'
import wfEditor from '../../assets/ocicat/wf-editor.png'

/** Showcase / Carousel geometry for the wireframe slides (a 796 x 566 board on a white 940 x 650 slide). */
const wireframeCarousel = {
  slideWidth: 940,
  slideHeight: 650,
  gap: 40,
  slideBackground: '#ffffff',
  slideRadius: 16,
  image: { width: 796, height: 566.079, radius: 0 },
}

const ocicat: CaseStudy = {
  slug: 'ocicat-ai-studio',
  title: 'Ocicat AI Studio',
  subtitle: 'AI Video Creation Platform',
  intro:
    'An AI video studio. Idea in, finished video out: script, visuals, captions, export.',
  tags: ['UI/UX', 'Web App', 'AI Product'],
  linkLabel: 'View live site',
  liveUrl: 'https://ocicataistudio.framer.website/',
  heroCover,
  heroCoverHeight: 849,
  heroCoverStyle: { height: '167.61%', top: '0.05%', width: '100%', left: '0.03%' },
  glance: {
    rows: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Type', value: 'Built from scratch, for a client' },
      { label: 'Platform', value: 'Web app' },
      { label: 'Team', value: 'Client and their engineers' },
    ],
    contribution:
      'I designed the dashboard, the creation flow, the editor and templates. The big call: how much the AI takes over, and how much stays a real editor.',
  },

  sections: [
    {
      label: '02 · THE BRIEF',
      title: 'Creators can’t edit what AI video tools make for them.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'A creator wants a finished video fast, but still wants to fix the shot that’s wrong. Today’s AI tools give them the video and no way in: type an idea, get a result, take it or leave it.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'So they re-prompt and hope. Every tool in the category works this way and looks this way, prompt box and purple gradient, so a new one with the same shape gets ignored.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'Ocicat is a real editor with the AI beside it. The creator keeps the scenes, the timeline and the final say.',
              size: 18,
              color: '#0d0d0d',
            },
          ],
        },
      ],
    },
    {
      label: '03 · WHO IT WAS FOR',
      title: 'A client, presenting to their team.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Who saw it first',
              body: 'A client presenting it internally. It had to land with a room seeing it for the first time.',
            },
            {
              title: 'Who it’s for',
              body: 'Short-form creators who want AI help but won’t hand over the whole edit.',
            },
            {
              title: 'What I didn’t have',
              body: 'No persona, no research, no end users. Decisions came from the brief and the category.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE DECISION',
      title: 'Magic prompt box, or real editor?',
      height: 1127,
      blocks: [],
      placed: [
        {
          at: { top: 202, left: 120, right: 120, height: 186 },
          block: {
            kind: 'decisions',
            height: 186,
            items: [
              {
                badge: 'A',
                title: 'Prompt first',
                body: 'Where the category sits. Type, receive, done. Demos well. Leaves nothing to adjust when the result is nearly right.',
              },
              {
                badge: 'B',
                title: 'Editor first, AI alongside',
                body: 'Scenes, timeline and separate tracks stay on screen. The AI helps. You still own the result.',
                selected: true,
              },
            ],
          },
        },
        {
          at: { top: 420, centerX: true, width: 919, height: 659 },
          block: {
            kind: 'nodeImage',
            src: decisionEditor,
            alt: 'The Ocicat editor: scenes, timeline and AI panel side by side',
            background: '#0b0b0c',
          },
        },
      ],
    },
    {
      label: '05 · THE FLOW',
      title: 'Idea to export.',
      blocks: [
        {
          kind: 'flow',
          steps: [
            { title: 'Describe the idea', body: 'A prompt, or start from a template', flex: true },
            { title: 'AI generates', body: 'Script, scenes and visuals', flex: true },
            { title: 'Open in the editor', body: 'Scenes, timeline and tracks', flex: true },
            { title: 'Refine', body: 'Edit directly, or ask the AI', flex: true },
            { title: 'Export and share', body: 'In any format', flex: true },
          ],
        },
        {
          kind: 'artifactImage',
          src: flowDiagram,
          alt: 'Ocicat AI Studio user flow: landing page, sign up and dashboard, then the dashboard, create video, templates, editor, projects and account branches',
          height: 479,
          image: { width: 1080, height: 404.678 },
        },
      ],
    },
    {
      label: '06 · SCOPE',
      title: 'Not every sidebar item was designed.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Designed in depth',
              body: 'Dashboard, creation, editor, templates, projects. That’s where the work went.',
            },
            {
              title: 'Placeholders',
              body: 'Team Workspaces, Billing, Help, Brand Kit. They show the shape of the product. Not designed.',
            },
          ],
        },
      ],
    },
    {
      label: '07 · EXPLORATION',
      title: 'From chasing a look to changing the structure.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'I started in the wrong place',
              body: 'The first pass chased a look. Most of the early effort went there.',
            },
            {
              title: 'The difference was structural',
              body: 'Scenes, timeline and tracks on screen make the AI an assistant, not the product.',
            },
            {
              title: 'Let the footage carry the colour',
              body: 'The UI stays dark and quiet. Generated frames are the brightest thing on screen.',
            },
          ],
        },
        {
          kind: 'carousel',
          geometry: wireframeCarousel,
          screens: [
            { label: 'Home screen', caption: 'Home screen - Ocicat AI', image: wfDashboard },
            { label: 'Template library', caption: 'Template library - Ocicat AI', image: wfTemplates },
            { label: 'Editor', caption: 'Editor - Ocicat AI', image: wfEditor },
          ],
        },
      ],
    },
  ],

  carousel: {
    slideWidth: 887,
    slideHeight: 659,
    gap: 40,
    slideBackground: '#2c2c2c',
    image: { width: 856, height: 608.711, radius: 23.778 },
  },

  screensLabel: '08 · FINAL EXPERIENCE',
  screensTitle: 'The final experience.',
  screens: [
    {
      label: 'dashboard',
      caption:
        'The editor: scenes, timeline, tracks, and the AI panel alongside.',
      image: screenDashboard,
    },
    {
      label: 'template',
      caption: 'Templates: a starting point that isn’t a prompt.',
      image: screenTemplate,
    },
    {
      label: 'editor',
      caption: 'The AI panel works with the edit, not instead of it.',
      image: screenEditor,
    },
  ],

  results: {
    label: '09 · OUTCOME',
    title: 'What Ocicat became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'Dark and studio-like. Generated frames are the brightest thing on screen.',
              'Controls sit back. The footage gets the attention.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'Idea to exported video without leaving the product.',
              'Script tool, editor, captions and export, now in one place.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I’d do differently.',
    headline: 'Standing out was never just visual.',
    beats: [
      {
        label: 'WHAT I WOULD REVISIT',
        body: 'The wait. Generation takes time and I designed the editing, not the waiting. A clear progress state would fix that.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I thought standing out meant a new look. It meant a different experience: AI beside you, not in charge.',
      },
    ],
  },

  prev: { label: 'SORA', to: '/case-study/sora' },
  next: { label: 'CVER', to: '/case-study/cver' },
}

export default ocicat
