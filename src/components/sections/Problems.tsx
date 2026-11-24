import { ArrowRight, Check, X } from 'lucide-react';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { problems } from '@/lib/content';

/* Category | by hand | with the app. One grid shared by the heading row and every row, so the lanes line up. */
const cols = 'md:grid-cols-[158px_minmax(0,1fr)_minmax(0,1.14fr)] lg:grid-cols-[168px_minmax(0,1fr)_minmax(0,1.14fr)] xl:grid-cols-[148px_minmax(0,1fr)_minmax(0,1.14fr)]';
const laneLabel = 'text-[11px] font-semibold uppercase tracking-[0.14em]';

/** The work a center does by hand today, set against what the app does instead. */
export function Problems() {
  return (
    <section aria-labelledby="problems-title" className="section relative overflow-x-clip border-y border-ink/[0.07] bg-white">
      {/* Ambient light: orange by the problem, green by the solution. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(34% 46% at 0% 12%, rgba(234,90,42,0.07), transparent 70%), radial-gradient(36% 50% at 100% 88%, rgba(22,138,76,0.08), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="shell relative grid gap-9 sm:gap-11 xl:grid-cols-12 xl:gap-12">
        <Reveal className="xl:col-span-4">
          <div className="max-w-[640px] xl:sticky xl:top-28">
            <p className="eyebrow">The problem</p>
            <h2
              id="problems-title"
              className="mt-5 text-balance font-display text-[1.85rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink sm:text-[2.5rem] sm:leading-[1.06] xl:text-[2.45rem]"
            >
              A register, a spreadsheet and a fee book don’t talk to each other.
            </h2>
            <div className="mt-6 flex gap-4 sm:mt-7">
              <span className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-brand to-green" aria-hidden />
              <p className="text-pretty text-[16px] leading-[1.65] text-ink-soft sm:text-[17px]">
                So the same names get written three times, and the evening goes to totals, reminders and parents’ messages instead of
                teaching.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="xl:col-span-8">
          <Reveal className="overflow-hidden rounded-[22px] border border-ink/[0.1] bg-white shadow-soft">
            {/* Lane headings, from tablet up. On phones each block carries its own label. */}
            <div className={`hidden md:grid ${cols}`} aria-hidden>
              <span />
              <span className={`${laneLabel} bg-cream-soft/80 px-5 pb-3 pt-4 text-ink-muted`}>By hand</span>
              <span className={`${laneLabel} flex items-center gap-1.5 bg-green-tint/60 px-5 pb-3 pt-4 text-green`}>
                With
                <Image src="/brand/logo-160.png" alt="" width={20} height={20} className="h-5 w-5" />
                Power My Tutor
              </span>
            </div>

            <ul>
              {problems.map((p, i) => (
                <li key={p.area} className="border-t border-ink/[0.07] first:border-t-0 md:first:border-t">
                  <Reveal delay={i * 70} className={`group grid gap-2.5 p-4 md:gap-0 md:p-0 ${cols}`}>
                    <h3 className="flex items-center gap-3 pb-1 md:px-4 md:py-5 md:pb-5 lg:px-6">
                      <span className="num text-[12px] font-semibold text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-[16px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[15.5px]">
                        {p.area}
                      </span>
                    </h3>

                    {/* By hand: muted, on warm grey. */}
                    <div className="rounded-[14px] bg-cream-soft/80 p-3.5 md:flex md:items-center md:rounded-none md:px-5 md:py-5">
                      <div>
                        <span className={`${laneLabel} mb-2 block text-ink-faint md:sr-only`}>By hand</span>
                        <p className="flex gap-2.5 text-[14.5px] leading-[1.5] text-ink-muted">
                          <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/[0.12] text-brand">
                            <X className="h-2.5 w-2.5" strokeWidth={3.2} aria-hidden />
                          </span>
                          {p.before}
                        </p>
                      </div>
                    </div>

                    {/* With the app: a white card on a green lane. */}
                    <div className="relative rounded-[14px] bg-green-tint/60 p-1.5 md:rounded-none md:p-2.5">
                      <span
                        className="absolute -left-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-green shadow-[0_0_0_1px_rgba(28,25,23,0.09),0_2px_6px_rgba(28,25,23,0.1)] transition-transform duration-300 ease-out group-hover:translate-x-0.5 md:flex"
                        aria-hidden
                      >
                        <ArrowRight className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      <div className="flex h-full flex-col justify-center rounded-[10px] bg-white p-3 shadow-[0_0_0_1px_rgba(22,138,76,0.16),0_1px_2px_rgba(28,25,23,0.04),0_8px_18px_-12px_rgba(22,138,76,0.35)] transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(22,138,76,0.32),0_1px_2px_rgba(28,25,23,0.04),0_12px_22px_-12px_rgba(22,138,76,0.45)] md:rounded-[13px] md:px-4 md:py-3.5 md:pl-5">
                        <span className={`${laneLabel} mb-2 block text-green md:sr-only`}>With Power My Tutor</span>
                        <p className="flex gap-2.5 text-[14.5px] font-medium leading-[1.5] text-ink">
                          <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green text-white">
                            <Check className="h-2.5 w-2.5" strokeWidth={3.6} aria-hidden />
                          </span>
                          {p.after}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-6 sm:mt-7">
            <a
              href="#features"
              className="group/link inline-flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors duration-200 hover:text-green"
            >
              <span className="bg-gradient-to-r from-green to-green bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-out group-hover/link:bg-[length:100%_1.5px]">
                See each one in the app
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/[0.05] transition duration-300 ease-out group-hover/link:translate-x-1 group-hover/link:bg-green group-hover/link:text-white">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
