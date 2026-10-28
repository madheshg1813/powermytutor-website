import { steps } from '@/lib/content';

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="section bg-white">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Getting started</p>
          <h2 id="how-title" className="h2 mt-3">
            Running by tomorrow’s first batch
          </h2>
        </div>

        <ol className="relative mx-auto mt-9 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-4 sm:gap-6">
          <span className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-ink/15 sm:block" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              <span className="num relative flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-white ring-[6px] ring-white">
                {i + 1}
              </span>
              <h3 className="mt-3.5 text-[14px] font-bold leading-snug tracking-tight sm:text-base">{s.title}</h3>
              <p className="mt-1 text-[13px] text-ink-muted sm:text-sm">{s.sub}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
