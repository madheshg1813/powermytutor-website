/**
 * A label pinned to a spot on an app screen. `x`/`y` are percentages of the parent box; the label
 * sits to the left or right of the pin. Shown from tablet width up; on phones the text says it.
 */
export function Callout({ x, y, side = 'right', children }: { x: number; y: number; side?: 'left' | 'right'; children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute z-10 hidden md:block" style={{ left: `${x}%`, top: `${y}%` }} aria-hidden>
      <span className="absolute -left-[5px] -top-[5px] h-[10px] w-[10px] rounded-full bg-brand ring-4 ring-brand/20" />
      <span
        className={`absolute top-0 flex -translate-y-1/2 items-center ${side === 'right' ? 'left-0 flex-row' : 'right-0 flex-row-reverse'}`}
      >
        <span className="h-px w-8 bg-ink/50" />
        <span className="whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[12px] font-semibold text-white shadow-lift">
          {children}
        </span>
      </span>
    </span>
  );
}
