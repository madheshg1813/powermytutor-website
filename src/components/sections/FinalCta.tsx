import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { startSteps } from '@/lib/content';
import { site } from '@/lib/site';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-14 sm:pb-20">
      <div className="shell">
        <Reveal className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 text-center sm:rounded-[36px] sm:px-12 sm:py-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 animate-breathe"
            style={{
              background:
                'radial-gradient(42% 60% at 12% 0%, rgba(234,90,42,0.38), transparent 70%), radial-gradient(40% 60% at 90% 100%, rgba(22,138,76,0.36), transparent 70%)',
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-[760px]">
            <h2 id="cta-title" className="h2 text-white lg:text-[3.1rem]">
              Set up tonight. Take tomorrow’s attendance on your phone.
            </h2>
            <ol className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-3">
              {startSteps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-1.5 pr-4 text-[14px] text-white/85"
                >
                  <span className="num flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-ink">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={site.signupUrl} className="btn-primary sm:px-7 sm:py-3.5">
                Start your center
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
              </a>
              <a href="#pricing" className="btn-on-ink sm:px-7 sm:py-3.5">
                See pricing
              </a>
            </div>
            <p className="mt-5 text-[13.5px] text-white/55">From $9 a month. Cancel any time from Settings.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
