import { motion } from 'framer-motion'
import dot6 from '../../assets/sora/dot-6.svg'

const easeOut = [0.22, 1, 0.36, 1] as const

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                  */
/* ------------------------------------------------------------------ */

export function CaseEyebrow({ children }: { children: string }) {
  return (
    <div className="relative flex shrink-0 items-center gap-[8px] overflow-clip">
      <div className="relative size-[6px] shrink-0">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={dot6} />
      </div>
      <p className="relative shrink-0 font-medium leading-[normal] tracking-[1.4px] whitespace-nowrap text-[12px] text-[#f97316]">
        {children}
      </p>
    </div>
  )
}

/** "02 · THE PROBLEM" + section title. Figma component "Block / Section head". */
export function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="relative flex w-[1200px] shrink-0 flex-col items-start gap-[14px] whitespace-nowrap">
      <p className="relative shrink-0 font-medium leading-[1.45] tracking-[0.96px] text-[12px] text-[#f97316]">
        {label}
      </p>
      <p className="relative shrink-0 font-semibold leading-[1.15] text-[34px] text-[#0d0d0d]">
        {title}
      </p>
    </div>
  )
}

export function Chip({ label }: { label: string }) {
  return (
    <div className="relative flex shrink-0 items-center overflow-clip rounded-[8px] bg-[#f0f0f0] px-[14px] py-[8px]">
      <p className="relative shrink-0 font-medium leading-[normal] whitespace-nowrap text-[13px] text-[#3d3d3d]">
        {label}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Block schema                                                         */
/* ------------------------------------------------------------------ */

export type Paragraph = { text: string; size: number; color: string; lead?: number }

export type Block =
  | { kind: 'paragraphs'; width?: number; gap?: number; items: Paragraph[] }
  | { kind: 'cards'; items: { title: string; body: string | string[] }[]; padding?: number }
  | {
      kind: 'constraints'
      items: { label: string; title: string; body: string; solution: string; tradeoff: string }[]
    }
  | {
      kind: 'flow'
      /** Row gap between steps and arrows, from the Figma Flow frame. */
      gap?: number
      steps: { title: string; body: string; width?: number; flex?: boolean }[]
    }
  | { kind: 'artifact'; label: string; caption: string; height: number }
  | {
      kind: 'decisions'
      /**
       * Figma clips this row to a fixed height that cuts the cards off. Leave
       * unset so the row grows to fit its content.
       */
      height?: number
      items: { badge: string; title: string; body: string; selected?: boolean }[]
    }
  | { kind: 'resultCards'; items: { title: string; paragraphs: string[] }[] }
  /** A composed Figma frame exported as a single image (e.g. an embedded product mockup). */
  | { kind: 'nodeImage'; src: string; alt: string; background?: string }
  | { kind: 'note'; label: string; body: string }
  | { kind: 'placeholder'; label: string; body: string }

/** Absolute placement inside a fixed-height section, straight from the Figma frame. */
export type Placement = {
  top: number
  left?: number
  right?: number
  width?: number
  height?: number
  centerX?: boolean
}

export type PlacedBlock = { block: Block; at: Placement }

export type CaseSection = {
  label: string
  title: string
  blocks: Block[]
  /** Extra bottom padding, matching the Figma frame. */
  pb?: number
  /**
   * Sections that are absolutely composed in Figma rather than auto-layout.
   * When set, `placed` is used instead of `blocks`.
   */
  height?: number
  placed?: PlacedBlock[]
}

/* ------------------------------------------------------------------ */
/* Block renderers                                                      */
/* ------------------------------------------------------------------ */

function Paragraphs({ block }: { block: Extract<Block, { kind: 'paragraphs' }> }) {
  return (
    <div
      className="relative flex shrink-0 flex-col items-start overflow-clip font-normal leading-[1.45]"
      style={{ width: block.width ?? 880, gap: block.gap ?? 20 }}
    >
      {block.items.map((paragraph, index) => (
        <p
          key={index}
          className="relative w-full shrink-0"
          style={{ fontSize: paragraph.size, color: paragraph.color }}
        >
          {paragraph.text}
        </p>
      ))}
    </div>
  )
}

function CardRow({ block }: { block: Extract<Block, { kind: 'cards' }> }) {
  return (
    <div className="relative flex w-full shrink-0 items-start gap-[24px] overflow-clip leading-[1.45]">
      {block.items.map((card, index) => (
        <motion.div
          key={card.title}
          className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] self-stretch overflow-clip rounded-[20px] shadow-[inset_0_0_0_1px_#ececec] bg-white"
          style={{ padding: block.padding ?? 32 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: easeOut }}
        >
          <p className="relative w-full shrink-0 font-semibold text-[19px] text-[#0d0d0d]">
            {card.title}
          </p>
          {(Array.isArray(card.body) ? card.body : [card.body]).map((paragraph) => (
            <p key={paragraph} className="relative w-full shrink-0 font-normal text-[15px] text-[#6b6b6b]">
              {paragraph}
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

function ConstraintRow({ block }: { block: Extract<Block, { kind: 'constraints' }> }) {
  return (
    <div className="relative flex w-full shrink-0 items-start gap-[24px] overflow-clip">
      {block.items.map((item, index) => (
        <motion.div
          key={item.label}
          className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[10px] self-stretch rounded-[20px] shadow-[inset_0_0_0_1px_#ececec] bg-white p-[28px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: easeOut }}
        >
          <p className="relative w-full shrink-0 font-medium leading-[1.45] tracking-[0.88px] text-[11px] text-[#f97316]">
            {item.label}
          </p>
          <p className="relative w-full shrink-0 font-semibold leading-[1.45] text-[19px] text-[#0d0d0d]">
            {item.title}
          </p>
          <p className="relative w-full shrink-0 font-normal leading-[1.45] text-[15px] text-[#6b6b6b]">
            {item.body}
          </p>
          <div className="relative h-px w-full shrink-0 bg-[#ececec]" />
          <p className="relative w-full shrink-0 font-normal leading-[1.45] whitespace-pre-wrap text-[15px] text-[#0d0d0d]">
            {item.solution}
          </p>
          <p className="relative w-full shrink-0 font-normal leading-[1.45] text-[14px] text-[#6b6b6b]">
            {item.tradeoff}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

function FlowArrow() {
  return (
    <div className="relative flex w-[16px] shrink-0 items-center justify-center overflow-visible">
      <p className="relative shrink-0 font-normal leading-[1.45] whitespace-nowrap text-[20px] text-[#b0b0b0]">
        &rarr;
      </p>
    </div>
  )
}

function Flow({ block }: { block: Extract<Block, { kind: 'flow' }> }) {
  return (
    <div
      className="relative flex w-full shrink-0 items-start overflow-clip"
      style={{ gap: block.gap ?? 14 }}
    >
      {block.steps.map((step, index) => (
        <div key={step.title} className="contents">
          {index > 0 && <FlowArrow />}
          <motion.div
            className={`relative flex flex-col items-start gap-[6px] self-stretch rounded-[14px] shadow-[inset_0_0_0_1px_#ececec] bg-white px-[22px] py-[18px] leading-[1.45] ${
              step.flex ? 'min-w-px flex-[1_0_0]' : 'shrink-0'
            }`}
            style={step.flex ? undefined : { width: step.width }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: easeOut }}
          >
            <p className="relative w-full shrink-0 font-semibold text-[16px] text-[#0d0d0d]">
              {step.title}
            </p>
            <p className="relative w-full shrink-0 font-normal text-[13px] text-[#6b6b6b]">
              {step.body}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

function ArtifactSlot({ block }: { block: Extract<Block, { kind: 'artifact' }> }) {
  return (
    <div
      className="relative flex w-full shrink-0 flex-col items-center justify-center gap-[6px] overflow-clip rounded-[20px] shadow-[inset_0_0_0_1px_#e6e6e6] bg-[#f2f2f2] text-center leading-[1.45] text-[#a6a6a6]"
      style={{ height: block.height }}
    >
      <p className="relative w-full shrink-0 font-medium tracking-[0.88px] text-[11px]">
        {block.label}
      </p>
      <p className="relative w-full shrink-0 font-normal text-[15px]">{block.caption}</p>
    </div>
  )
}

function Decisions({ block }: { block: Extract<Block, { kind: 'decisions' }> }) {
  return (
    <div
      className={`relative flex w-full shrink-0 gap-[24px] overflow-clip ${
        block.height ? 'items-start' : 'items-stretch'
      }`}
      style={block.height ? { height: block.height } : undefined}
    >
      {block.items.map((item) => (
        <div
          key={item.badge}
          className={`relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[12px] rounded-[20px] bg-white p-[28px] ${
            block.height ? 'h-full' : 'self-stretch'
          } ${
            item.selected
              ? 'shadow-[inset_0_0_0_2px_#f97316]'
              : 'shadow-[inset_0_0_0_1px_#ececec]'
          }`}
        >
          <div className="relative flex w-full shrink-0 items-center justify-between overflow-clip">
            <div
              className={`relative flex size-[30px] shrink-0 items-center justify-center overflow-clip rounded-[8px] ${
                item.selected ? 'bg-[#f97316]' : 'bg-[#f1f1f1]'
              }`}
            >
              <p
                className={`relative shrink-0 font-semibold leading-[1.45] whitespace-nowrap text-[14px] ${
                  item.selected ? 'text-white' : 'text-[#6b6b6b]'
                }`}
              >
                {item.badge}
              </p>
            </div>
            {item.selected && (
              <p className="relative min-w-px flex-[1_0_0] font-semibold leading-[1.45] text-[18px] text-[#f97316]">
                &#10003;
              </p>
            )}
          </div>
          <p
            className={`relative w-full font-semibold leading-[1.45] text-[18px] text-[#0d0d0d] ${
              block.height ? 'min-h-px flex-[1_0_0]' : 'shrink-0'
            }`}
          >
            {item.title}
          </p>
          <p className="relative w-full shrink-0 font-normal leading-[1.45] text-[15px] text-[#6b6b6b]">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  )
}

function ResultCards({ block }: { block: Extract<Block, { kind: 'resultCards' }> }) {
  return (
    <div className="relative flex w-full shrink-0 items-start gap-[24px] overflow-clip">
      {block.items.map((card, index) => (
        <motion.div
          key={card.title}
          className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[14px] self-stretch overflow-clip rounded-[20px] shadow-[inset_0_0_0_1px_#ececec] bg-white p-[32px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: easeOut }}
        >
          <p className="relative shrink-0 font-semibold leading-[normal] whitespace-nowrap text-[22px] text-[#0d0d0d]">
            {card.title}
          </p>
          {card.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="relative w-[min-content] min-w-full shrink-0 font-normal leading-[27px] text-[16px] text-[#6b6b6b]"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

function Note({ block }: { block: Extract<Block, { kind: 'note' }> }) {
  return (
    <div className="relative flex h-[60px] w-full shrink-0 items-center gap-[12px] rounded-[14px] bg-[#fff6ef] px-[22px] py-[18px] leading-[1.45] shadow-[inset_0_0_0_1px_#f7d9c0]">
      <p className="relative shrink-0 font-semibold whitespace-nowrap text-[13px] text-[#f97316]">
        {block.label}
      </p>
      <p className="relative min-w-px flex-[1_0_0] font-normal text-[15px] text-[#7a5a43]">
        {block.body}
      </p>
    </div>
  )
}

function Placeholder({ block }: { block: Extract<Block, { kind: 'placeholder' }> }) {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-center justify-center gap-[8px] rounded-[20px] border border-dashed border-[#d8d8d8] bg-[#f4f4f4] p-[48px] leading-[1.45] whitespace-nowrap text-[#8a8a8a]">
      <p className="relative shrink-0 font-medium tracking-[1.04px] text-[13px]">{block.label}</p>
      <p className="relative shrink-0 font-normal text-[16px]">{block.body}</p>
    </div>
  )
}

function NodeImage({ block }: { block: Extract<Block, { kind: 'nodeImage' }> }) {
  return (
    <div
      className="relative size-full overflow-clip"
      style={{ background: block.background }}
    >
      <img alt={block.alt} className="absolute inset-0 size-full max-w-none" src={block.src} />
    </div>
  )
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case 'paragraphs':
      return <Paragraphs block={block} />
    case 'cards':
      return <CardRow block={block} />
    case 'constraints':
      return <ConstraintRow block={block} />
    case 'flow':
      return <Flow block={block} />
    case 'artifact':
      return <ArtifactSlot block={block} />
    case 'decisions':
      return <Decisions block={block} />
    case 'resultCards':
      return <ResultCards block={block} />
    case 'nodeImage':
      return <NodeImage block={block} />
    case 'note':
      return <Note block={block} />
    case 'placeholder':
      return <Placeholder block={block} />
  }
}

export function CaseSectionView({ section }: { section: CaseSection }) {
  if (section.height && section.placed) {
    return (
      <div
        className="relative w-full shrink-0 overflow-clip"
        style={{ height: section.height }}
      >
        <div className="absolute top-[100px] left-[120px] flex w-[1200px] flex-col items-start gap-[14px] whitespace-nowrap">
          <p className="relative shrink-0 font-medium leading-[1.45] tracking-[0.96px] text-[12px] text-[#f97316]">
            {section.label}
          </p>
          <p className="relative shrink-0 font-semibold leading-[1.15] text-[34px] text-[#0d0d0d]">
            {section.title}
          </p>
        </div>
        {section.placed.map((placed, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: placed.at.top,
              left: placed.at.centerX ? '50%' : placed.at.left,
              right: placed.at.centerX ? undefined : placed.at.right,
              width: placed.at.width,
              height: placed.at.height,
              transform: placed.at.centerX ? 'translateX(-50%)' : undefined,
            }}
          >
            <BlockRenderer block={placed.block} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="relative flex w-full shrink-0 flex-col items-start gap-[32px] overflow-clip px-[120px] pt-[100px]"
      style={section.pb ? { paddingBottom: section.pb } : undefined}
    >
      <SectionHead label={section.label} title={section.title} />
      {section.blocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  )
}
