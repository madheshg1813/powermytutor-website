import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { chapterMeta, day, setupSteps } from '@/lib/content';
import { site } from '@/lib/site';

/** Three steps to start, then the day the app runs from the first batch to the last message. */
export function HowItWorks() {
  return (
    <section id="day" aria-labelledby="how-title" className="section relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(40% 50% at 8% 0%, rgba(234,90,42,0.22), transparent 70%), radial-gradient(36% 46% at 96% 100%, rgba(22,138,76,0.22), transparent 70%)',
        }}
        aria-hidden
      />
      <div className="shell relative">
        <Reveal className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow">How it works</p>
            <h2 id="how-title" className="h2 mt-4 text-white">
              Set up tonight. Run tomorrow from your phone.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <a href={site.signupUrl} className="btn-primary">
              Start your center
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            </a>
          </div>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
          {setupSteps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 90}
              className="relative rounded-[22px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 sm:p-7"
            >
              <span className="num flex h-10 w-10 items-center justify-center rounded-full bg-white font-display text-[15px] font-extrabold text-ink">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-[18px] font-bold tracking-tight text-white sm:text-[19px]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{s.text}</p>
              {i < setupSteps.length - 1 && (
                <ArrowRight
                  className="absolute right-6 top-8 hidden h-5 w-5 text-white/30 md:block"
                  strokeWidth={1.8}
                  aria-hidden
                />
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 sm:mt-20">
          <h3 className="font-display text-[18px] font-bold tracking-tight text-white sm:text-[20px]">Then a day in the app looks like this</h3>
          <ol className="relative mt-8 grid gap-7 lg:grid-cols-5 lg:gap-6">
            {/* The rail: down the left on phones, across the top on desktop. */}
            <span
              className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-brand via-white/30 to-green lg:bottom-auto lg:left-0 lg:right-0 lg:top-[5px] lg:h-px lg:w-auto lg:bg-gradient-to-r"
              aria-hidden
            />
            {day.map((c, i) => {
              const { label, icon: Icon } = chapterMeta[c.id];
              return (
                <li key={c.id} className="relative pl-8 lg:pl-0 lg:pt-8">
                  <span
                    className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-ink lg:top-0 ${
                      i < 3 ? 'bg-brand' : 'bg-green'
                    }`}
                    aria-hidden
                  />
                  <p className="num font-display text-[15px] font-bold text-white">{c.time}</p>
                  <p className="mt-0.5 text-[13.5px] text-white/55">{c.moment}</p>
                  <p className="mt-3 flex items-center gap-2 text-[14.5px] font-semibold text-white">
                    <Icon className="h-4 w-4 text-white/70" strokeWidth={1.8} aria-hidden />
                    {label}
                  </p>
                  <p className="mt-1 text-[14px] leading-snug text-white/65 lg:max-w-[22ch]">{c.title}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
