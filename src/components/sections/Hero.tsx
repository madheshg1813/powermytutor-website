import { ArrowDown, ArrowRight, BatteryFull, Check, LockKeyhole, Signal, Wifi } from 'lucide-react';
import Image from 'next/image';
import { heroTicks } from '@/lib/content';
import { site } from '@/lib/site';

/** The browser window around the real dashboard capture, sitting in a glass tray. */
function HeroBrowser() {
  return (
    <div className="hero-tray">
      <div className="hero-window">
        <div className="relative flex h-8 items-center border-b border-ink/[0.07] bg-gradient-to-b from-white to-cream-soft/70 px-3 sm:h-11 sm:px-4" aria-hidden>
          <div className="flex gap-1.5 sm:gap-2">
            <span className="h-2 w-2 rounded-full bg-ink/[0.14] sm:h-3 sm:w-3" />
            <span className="h-2 w-2 rounded-full bg-ink/[0.14] sm:h-3 sm:w-3" />
            <span className="h-2 w-2 rounded-full bg-ink/[0.14] sm:h-3 sm:w-3" />
          </div>
          <div className="absolute left-1/2 flex h-5 w-[58%] max-w-[380px] -translate-x-1/2 items-center justify-center gap-1.5 rounded-md bg-white text-[10px] text-ink-muted shadow-[0_0_0_1px_rgba(28,25,23,0.07),0_1px_1px_rgba(28,25,23,0.04)] sm:h-7 sm:rounded-lg sm:text-[12.5px]">
            <LockKeyhole className="h-2.5 w-2.5 text-ink-faint sm:h-3 sm:w-3" strokeWidth={2.2} />
            app.powermytutor.com/dashboard
          </div>
        </div>
        <Image
          src="/product/hero-dashboard.webp"
          alt="The Power My Tutor dashboard: active students, exams with results, center average, pass rate and a class average chart"
          width={2880}
          height={1800}
          priority
          sizes="(min-width: 1200px) 1120px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

/** A phone with a status bar above the real mobile capture (1170 × 2532). */
function HeroPhone() {
  return (
    <div className="hero-phone">
      <div className="hero-phone-body">
        <span className="hero-phone-btn -left-[1cqw] top-[19%] h-[5%] rounded-l-sm" aria-hidden />
        <span className="hero-phone-btn -left-[1cqw] top-[27%] h-[8%] rounded-l-sm" aria-hidden />
        <span className="hero-phone-btn -right-[1cqw] top-[25%] h-[12%] rounded-r-sm" aria-hidden />
        <div className="hero-phone-screen">
          <div className="hero-phone-status" aria-hidden>
            <span className="num">9:41</span>
            <span className="hero-phone-island" />
            <span className="flex items-center gap-[1.4cqw]">
              <Signal strokeWidth={2.6} />
              <Wifi strokeWidth={2.6} />
              <BatteryFull strokeWidth={2.2} />
            </span>
          </div>
          <div className="relative aspect-[1170/2532]">
            <Image
              src="/product/hero-phone.webp"
              alt="The same dashboard on a phone, with a bottom tab bar for Home, Students, Marks and Exams"
              fill
              priority
              sizes="(min-width: 1200px) 230px, (min-width: 640px) 20vw, 54vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    // Pulled up under the sticky header so the glow runs to the top of the page. Vertical gaps scale with
    // the viewport height, so the dashboard and phone reach the first screen on short windows too.
    <section className="relative -mt-16 overflow-hidden pt-16 sm:-mt-[68px] sm:pt-[68px]">
      <div className="hero-bg" aria-hidden />

      <div className="shell relative pb-8 pt-[clamp(28px,6.4vh,64px)] sm:pb-10">
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="hero-title animate-rise">
            <span className="block sm:inline">Every batch, </span>
            <span className="block sm:inline">every mark,</span>{' '}
            <span className="block">
              every fee.{' '}
              <span className="relative inline-block text-green">
                Sorted.
                <svg className="hero-underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M3 8.5 C 70 2.5, 190 2, 297 6.5" pathLength={1} />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-[clamp(16px,3vh,28px)] max-w-[620px] sm:max-w-[710px] animate-rise text-pretty text-[16.5px] leading-[1.6] text-ink-soft [animation-delay:120ms] sm:text-[18.5px] sm:leading-[1.55]">
            Attendance, marks, fees, report cards and parent updates in one app built for tuition centers and coaching institutes.
            On your phone and your laptop.
          </p>

          <div className="mx-auto mt-[clamp(20px,3.6vh,32px)] flex max-w-[400px] animate-rise flex-col justify-center gap-3 [animation-delay:180ms] sm:max-w-none sm:flex-row">
            <a href={site.signupUrl} className="hero-cta hero-cta-primary">
              Start your center
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </a>
            <a href="#day" className="hero-cta hero-cta-secondary">
              See a day in the app
              <ArrowDown className="h-4 w-4 text-ink-muted" strokeWidth={2.2} aria-hidden />
            </a>
          </div>

          <ul className="mt-[clamp(14px,2.6vh,24px)] flex animate-rise flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[13.5px] font-medium text-ink-soft [animation-delay:240ms] sm:text-[14px]">
            {heroTicks.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-tint text-green">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* The same center on a laptop and a phone. */}
        <div className="relative mx-auto mt-[clamp(30px,5.4vh,52px)] max-w-[1136px] animate-rise [animation-delay:320ms]">
          <div
            className="pointer-events-none absolute -inset-x-12 -top-12 bottom-16 rounded-[64px] opacity-70 blur-3xl"
            style={{
              background:
                'radial-gradient(42% 55% at 18% 45%, rgba(234,90,42,0.17), transparent 70%), radial-gradient(42% 55% at 84% 40%, rgba(22,138,76,0.15), transparent 70%)',
            }}
            aria-hidden
          />
          <HeroBrowser />

          {/* Under the dashboard on phones; docked over its sidebar from tablet up. */}
          <div className="relative z-10 mx-auto -mt-10 w-[54%] max-w-[230px] sm:absolute sm:left-[-2.6%] sm:top-[13%] sm:mx-0 sm:mt-0 sm:w-[20.5%] sm:max-w-none xl:left-[-4.8%] xl:w-[21.5%]">
            <div className="animate-float">
              <HeroPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
