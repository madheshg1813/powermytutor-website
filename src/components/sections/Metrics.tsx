import { Reveal } from '@/components/ui/Reveal';
import { audience, metrics } from '@/lib/content';

/** Who it is for, and four plain facts about using it. */
export function Metrics() {
  return (
    <section aria-label="Power My Tutor at a glance" className="overflow-x-clip pb-16 pt-10 sm:pb-24 sm:pt-14">
      <div className="shell">
        {/* Audience: one rail on wide screens, a label over wrapped pills on small ones. */}
        <Reveal className="flex justify-center">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-1.5 lg:rounded-full lg:bg-white/70 lg:p-1.5 lg:pl-5 lg:shadow-[inset_0_0_0_1px_rgba(28,25,23,0.08),0_1px_2px_rgba(28,25,23,0.04),0_12px_28px_-18px_rgba(28,25,23,0.22)] lg:backdrop-blur">
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted lg:pr-3">
              <span className="h-px w-6 bg-ink/15 lg:hidden" aria-hidden />
              Built for
              <span className="h-px w-6 bg-ink/15 lg:hidden" aria-hidden />
            </p>
            <ul className="flex flex-wrap justify-center gap-2 lg:flex-nowrap lg:gap-1.5">
              {audience.map((a) => (
                <li
                  key={a}
                  className="group/pill flex cursor-default items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[13.5px] font-medium text-ink-soft shadow-[inset_0_0_0_1px_rgba(28,25,23,0.1),0_1px_2px_rgba(28,25,23,0.04)] transition duration-200 ease-out hover:-translate-y-0.5 hover:text-ink hover:shadow-[inset_0_0_0_1px_rgba(28,25,23,0.22),0_8px_16px_-10px_rgba(28,25,23,0.3)] lg:bg-cream-soft/70 lg:px-4 lg:text-[14px] lg:shadow-none lg:hover:bg-white"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-ink/20 transition-colors duration-200 group-hover/pill:bg-green"
                    aria-hidden
                  />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="relative mt-8 sm:mt-12">
          {/* Ambient brand light behind the cards. */}
          <div
            className="pointer-events-none absolute -inset-x-4 -inset-y-10 opacity-80 blur-3xl sm:-inset-x-6"
            style={{
              background:
                'radial-gradient(38% 70% at 10% 50%, rgba(234,90,42,0.10), transparent 70%), radial-gradient(38% 70% at 90% 50%, rgba(22,138,76,0.09), transparent 70%)',
            }}
            aria-hidden
          />
          <ul className="relative grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {metrics.map((m, i) => {
              const green = i % 2 === 1;
              const [figure, unit] = m.value.split(' ');
              const Icon = m.icon;
              return (
                <Reveal as="li" key={m.label} delay={i * 70} className="flex">
                  <div
                    className={`group relative flex w-full flex-col overflow-hidden rounded-[22px] border border-ink/[0.08] bg-white p-5 shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift sm:rounded-[26px] sm:p-7 ${
                      green ? 'hover:border-green/30' : 'hover:border-brand/30'
                    }`}
                  >
                    {/* A wash of the card's colour from its top corner. */}
                    <span
                      className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: green
                          ? 'radial-gradient(85% 65% at 0% 0%, rgba(22,138,76,0.09), transparent 70%)'
                          : 'radial-gradient(85% 65% at 0% 0%, rgba(234,90,42,0.09), transparent 70%)',
                      }}
                      aria-hidden
                    />
                    <div className="relative flex items-start justify-between gap-3">
                      <h3>
                        <span
                          className={`num flex items-baseline gap-1.5 font-display text-[2.6rem] font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-[3.6rem] ${
                            green ? 'text-green' : 'text-brand'
                          }`}
                        >
                          {figure}
                          {unit && <span className="text-[0.42em] font-bold tracking-[-0.02em]">{unit}</span>}
                        </span>
                        <span className="mt-4 block font-sans text-[15px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:mt-5 sm:text-[17px]">
                          {m.label}
                        </span>
                      </h3>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition duration-300 ease-out group-hover:text-white sm:h-11 sm:w-11 sm:rounded-[14px] ${
                          green
                            ? 'bg-green-tint text-green shadow-[inset_0_0_0_1px_rgba(22,138,76,0.16)] group-hover:bg-green'
                            : 'bg-brand-tint text-brand shadow-[inset_0_0_0_1px_rgba(234,90,42,0.16)] group-hover:bg-brand'
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.8} aria-hidden />
                      </span>
                    </div>
                    <p className="relative mt-1.5 text-pretty text-[13.5px] leading-[1.55] text-ink-muted sm:mt-2 sm:text-[14.5px]">{m.sub}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
