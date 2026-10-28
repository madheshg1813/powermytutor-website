import { startSteps } from '@/lib/content';
import { site } from '@/lib/site';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-12 sm:pb-20">
      <div className="shell">
        <div className="grid gap-8 rounded-[24px] bg-ink px-6 py-10 sm:rounded-[32px] sm:px-12 sm:py-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:px-14 lg:py-16">
          <h2 id="cta-title" className="h2 text-white lg:col-span-7">
            Set up tonight. Take tomorrow’s attendance on your phone.
          </h2>
          <div className="lg:col-span-5">
            <ol className="space-y-2.5">
              {startSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-[14.5px] text-white/75 sm:text-[15px]">
                  <span className="num flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 text-[12px] font-semibold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-7 flex gap-2.5 sm:gap-3">
              <a href={site.signupUrl} className="btn-primary">
                Start your center
              </a>
              <a href="#pricing" className="btn-on-ink">
                See pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
