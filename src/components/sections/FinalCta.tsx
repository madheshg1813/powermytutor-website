import { site } from '@/lib/site';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-12 sm:pb-20">
      <div className="shell">
        <div className="rounded-3xl bg-ink px-5 py-10 text-center sm:px-10 sm:py-16">
          <h2 id="cta-title" className="mx-auto max-w-[20ch] text-balance font-display text-[1.6rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.4rem]">
            Less time on registers. More time teaching.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
            Set up your center tonight and take tomorrow’s attendance on your phone.
          </p>
          <div className="mt-6 flex justify-center gap-2.5 sm:mt-8 sm:gap-3">
            <a href={site.signupUrl} className="btn-primary">
              Start your center
            </a>
            <a href="#pricing" className="btn-on-ink">
              See pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
