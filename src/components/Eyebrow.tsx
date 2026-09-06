import dotOrange from '../assets/landing/dot-orange.svg'

/** Orange dot + tracked label used above every section title. */
export default function Eyebrow({ children }: { children: string }) {
  return (
    <div className="relative flex shrink-0 items-center gap-[12px] overflow-clip">
      <div className="relative size-[10px] shrink-0">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={dotOrange} />
      </div>
      <p className="relative shrink-0 font-medium leading-[normal] tracking-[2.4px] whitespace-nowrap text-[16px] text-[#f97316]">
        {children}
      </p>
    </div>
  )
}
