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
    'An AI video studio that takes a written idea to a finished video, with script, visuals, captions and export in one place.',
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
      'I designed the dashboard, the video creation flow, the editor and the templates. The core call was how much of the interface the AI takes over, and how much stays a real editor.',
  },

  sections: [
    {
      label: '02 · THE BRIEF',
      title: 'Build an AI video tool that doesn’t look, or work, like every other one.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'Ocicat is an AI video tool entering a crowded category. Higgsfield and others had already claimed the prompt-first, purple-gradient look, so a new product with the same shape would disappear.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'The bigger problem is what prompt-first tools do to creators. Type an idea, get a video, and then have nothing to adjust when the result is almost right. Creators lose control of the thing they’re supposed to own.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'So the brief had two halves. Look different enough to be noticed, and work differently enough that creators still own the edit.',
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
              body: 'A client who needed something to present internally. It had to survive a room of people seeing it for the first time.',
            },
            {
              title: 'Who it’s for',
              body: 'Creators making short-form video who want AI help without handing over the whole edit.',
            },
            {
              title: 'What I didn’t have',
              body: 'No persona, no research and no access to end users. The decisions here come from the brief and the category.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE DECISION',
      title: 'A magic prompt box, or a real editor?',
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
                title: 'Prompt first, AI as the product',
                body: 'Where most of the category sits. Type an idea, receive a video. It demos well, and leaves you nothing to adjust when the result is nearly right.',
              },
              {
                badge: 'B',
                title: 'AI assisted, editor as the product',
                body: 'Scenes, a timeline and separate video, audio and voice-over tracks stay on screen. The AI works alongside the edit, and you still own the result.',
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
      title: 'From an idea to an exported video.',
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
      title: 'Not every screen in the sidebar was designed.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Designed in depth',
              body: 'The dashboard, video creation, the editor, templates and projects. This is where the work went.',
            },
            {
              title: 'Placeholders',
              body: 'Team Workspaces, Billing, Help and Brand Kit show how the wider product would be structured. They weren’t designed.',
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
              body: 'The first pass chased a look that would stand apart from Higgsfield. That’s where most of the early effort went.',
            },
            {
              title: 'The difference was structural',
              body: 'Keeping scenes, the timeline and the tracks on screen is what makes the AI an assistant instead of the whole product.',
            },
            {
              title: 'Let the footage carry the colour',
              body: 'The interface stays dark and quiet so thumbnails and generated frames are the brightest thing on screen.',
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
        'The editor: scenes, the timeline with separate video, audio and voice-over tracks, and the AI chat panel alongside it.',
      image: screenDashboard,
    },
    {
      label: 'template',
      caption: 'Templates: a starting point for creators who don’t want to begin from a prompt.',
      image: screenTemplate,
    },
    {
      label: 'editor',
      caption: 'The editor, with the AI panel working alongside the edit rather than replacing it.',
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
              'Dark and studio-like, so generated frames stay the brightest thing on screen.',
              'Controls sit back on purpose. The creator’s footage is the only thing competing for attention.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'Creators go from a written idea to an exported video without leaving the product.',
              'What used to take a script tool, an editor, a captioning service and an export step now happens in one place.',
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
        body: 'The waiting. Generation takes time and I designed the editing more than the wait. A clear progress or queue state would tell people what’s happening.',
      },
      {
        label: 'WHAT CHANGED IN MY THINKING',
        body: 'I thought standing out meant a different visual identity. The stronger difference was the experience: an editor where AI works alongside you instead of taking over.',
      },
    ],
  },

  prev: { label: 'SORA', to: '/case-study/sora' },
  next: { label: 'CVER', to: '/case-study/cver' },
}

export default ocicat
