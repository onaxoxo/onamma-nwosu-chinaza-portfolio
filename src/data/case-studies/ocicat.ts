import type { CaseStudy } from '../../components/casestudy/CaseStudyPage'
import heroCover from '../../assets/ocicat/hero-cover.png'
import decisionEditor from '../../assets/ocicat/decision-editor.png'
import screenDashboard from '../../assets/ocicat/screen-dashboard.png'
import screenTemplate from '../../assets/ocicat/screen-template.png'
import screenEditor from '../../assets/ocicat/screen-editor.png'

const ocicat: CaseStudy = {
  slug: 'ocicat-ai-studio',
  title: 'Ocicat AI Studio',
  subtitle: 'AI Video Creation Platform',
  intro:
    'An all-in-one studio that turns a written idea into a finished video, with script, visuals, auto captions and export handled in a single flow.',
  tags: ['UI/UX', 'Web App', 'AI Product'],
  linkLabel: 'View live site',
  heroCover,
  heroCoverHeight: 849,
  heroCoverStyle: { height: '167.61%', top: '0.05%', width: '100%', left: '0.03%' },

  sections: [
    {
      label: '02 · THE BRIEF',
      title: 'Build an AI video tool that does not look like the others.',
      blocks: [
        {
          kind: 'paragraphs',
          items: [
            {
              text: 'The brief was to make Ocicat stand out against tools like Higgsfield, products that had already claimed the prompt-first, purple-gradient look of AI video.',
              size: 20,
              color: '#0d0d0d',
            },
            {
              text: 'I read that as a visual problem at first: make it more distinctive, make it more appealing. Most of the early work went into the surface.',
              size: 18,
              color: '#6b6b6b',
            },
            {
              text: 'What actually separated Ocicat turned out to be structural: how much of the interface the AI is allowed to take over, and how much stays a real editor.',
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
              title: 'The immediate audience',
              body: 'A client who needed something to present internally. The design had to survive a room of people seeing the product for the first time.',
            },
            {
              title: 'The intended users',
              body: 'Creators making short-form video who want AI help without handing over the whole edit. The brief named the market, not a specific user.',
            },
            {
              title: 'What I did not have',
              body: 'No persona, no research, and no access to the end users. The design decisions here come from the product category and the brief, not from users.',
            },
          ],
        },
      ],
    },
    {
      label: '04 · THE DECISION',
      title: 'A magic prompt box, or a real editor?',
      height: 1171,
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
                title: 'Prompt-first, AI as the product',
                body: 'Where most of the category sits: type an idea, receive a video. It demos beautifully, and it leaves the creator with nothing to adjust when the result is nearly right.',
              },
              {
                badge: 'B',
                title: 'AI-assisted, editor as the product',
                body: 'Scenes, a timeline and separate video, audio and voice-over tracks stay on screen. The AI panel works alongside the edit. The user can see what it changed and still owns the result.',
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
          kind: 'artifact',
          label: 'SPACE FOR USER FLOW',
          caption: 'Space reserved for the user flow: an idea through to an exported video',
          height: 420,
        },
      ],
    },
    {
      label: '06 · SCOPE',
      title: 'Not every screen in the sidebar is a designed screen.',
      blocks: [
        {
          kind: 'cards',
          items: [
            {
              title: 'Designed in depth',
              body: 'The dashboard, the video creation and editor experience, templates, and the project screens. This is where the actual design work went.',
            },
            {
              title: 'Navigation placeholders',
              body: 'Team Workspaces, Billing, Help & Support and Brand Kit. They are there to show how the wider SaaS product would be structured, not because they were designed.',
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
              title: 'The brief read as a visual problem',
              body: 'The first pass chased a look that would stand apart from Higgsfield and the rest of the category. That is where most of the early effort went, and it was the wrong place.',
            },
            {
              title: 'The difference was structural',
              body: 'Keeping scenes, the timeline and the separate tracks on screen is what makes the AI an assistant instead of the whole product. That is a structural decision, not a styling one.',
            },
            {
              title: 'Let the footage carry the colour',
              body: 'The interface stays restrained on purpose, so thumbnails and generated frames are the brightest thing on screen rather than competing with the UI around them.',
            },
          ],
        },
        {
          kind: 'artifact',
          label: 'SPACE FOR ARTWORK',
          caption: 'Space reserved for the editor structure or storyboard exploration',
          height: 520,
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
      caption: 'Templates: a starting point for creators who do not want to begin from a prompt.',
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
    title: 'What the product became.',
    blocks: [
      {
        kind: 'resultCards',
        items: [
          {
            title: 'Visual direction',
            paragraphs: [
              'The visual direction is dark and studio-like, so generated frames and previews stay the brightest thing on screen.',
              'Typography and controls sit back deliberately; the creator’s footage is the only thing competing for attention.',
            ],
          },
          {
            title: 'Outcome',
            paragraphs: [
              'The final design takes creators from a written idea to an exported video without ever leaving the product.',
              'What used to mean juggling a script tool, an editor, a captioning service and an export pipeline now happens in one place.',
            ],
          },
        ],
      },
    ],
  },

  reflection: {
    label: '10 · REFLECTION',
    title: 'What I changed.',
    headline: 'Differentiation wasn’t just visual.',
    beats: [
      {
        label: 'WHAT I REVISITED',
        body: 'I’d revisit the waiting experience. Video generation takes time, but I focused more on the final editing experience than what happens while the video is being generated. I’d design a clearer progress or queue state so users know what’s happening while they wait.',
      },
      {
        label: 'WHAT I IMPROVED ALONG THE WAY',
        body: 'I initially thought standing out from other AI video tools was mainly about creating a different visual identity. As I worked through the product, I realised the stronger differentiation was in the experience itself: making Ocicat an AI-assisted video editor where AI works alongside the user rather than taking control.',
      },
    ],
  },

  prev: { label: 'SORA', to: '/case-study/sora' },
  next: { label: 'CVER', to: '/case-study/cver' },
}

export default ocicat
