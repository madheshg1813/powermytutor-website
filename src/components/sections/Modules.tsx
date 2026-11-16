import { Reveal } from '@/components/ui/Reveal';
import { extras } from '@/lib/content';

/** The rest of the app: eight capabilities, each on its own card. */
export function Modules() {
  return (
    <section id="modules" aria-labelledby="modules-title" className="section bg-cream-soft">
      <div className="shell">
        <Reveal className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Product modules</p>
            <h2
              id="modules-title"
              className="mt-5 max-w-[620px] text-balance font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-ink sm:text-[2.6rem] sm:leading-[1.04] lg:text-[3rem]"
            >
              And the admin around it, set up once
            </h2>
          </div>
          <p className="max-w-[440px] text-pretty text-[16.5px] leading-[1.6] text-ink-soft sm:text-[17.5px] lg:col-span-5 lg:justify-self-end lg:pb-1.5">
            Batches, exam plans, branches and backups: the parts you set up once and stop thinking about.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 min-[480px]:grid-cols-2 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {extras.map(({ icon: Icon, title, text }, i) => {
            const green = i % 2 === 1;
            return (
              <Reveal as="li" key={title} delay={(i % 4) * 60} className="flex">
                {/* A row on narrow phones, a column once there is room for two across. */}
                <div
                  className={`group relative flex w-full gap-4 rounded-[20px] border border-ink/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_10px_24px_-18px_rgba(28,25,23,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(28,25,23,0.04),0_20px_34px_-20px_rgba(28,25,23,0.3)] min-[480px]:flex-col min-[480px]:gap-0 sm:rounded-[22px] sm:p-6 lg:p-7 ${
                    green ? 'hover:border-green/30' : 'hover:border-brand/30'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-white ${
                      green
                        ? 'bg-green-tint text-green shadow-[inset_0_0_0_1px_rgba(22,138,76,0.16)] group-hover:bg-green'
                        : 'bg-brand-tint text-brand shadow-[inset_0_0_0_1px_rgba(234,90,42,0.16)] group-hover:bg-brand'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span
                    className="num absolute right-5 top-5 text-[11.5px] font-semibold tracking-[0.04em] text-ink-faint sm:right-6 sm:top-6 lg:right-7 lg:top-7"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 min-[480px]:mt-6">
                    <h3 className="pr-7 font-display text-[16.5px] font-bold leading-snug tracking-[-0.02em] text-ink min-[480px]:pr-0 sm:text-[17px]">
                      {title}
                    </h3>
                    <p className="mt-2 text-pretty text-[14.5px] leading-[1.6] text-ink-muted">{text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
