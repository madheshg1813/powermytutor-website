import { CalendarDays, Check, Play } from 'lucide-react';
import { DashboardScreen } from '@/components/ui/DashboardScreen';
import { heroFacts, heroPoints } from '@/lib/content';
import { site } from '@/lib/site';

export function Hero() {
  return (
    // Pulled up under the sticky header so the backdrop runs behind it.
    <section id="top" className="relative -mt-16 overflow-hidden bg-[#FFFBF7] pt-16 lg:-mt-20 lg:pt-20">
      <Backdrop />

      <div className="shell-wide relative pb-12 sm:pb-16 lg:pb-20">
        <div className="grid items-center gap-12 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-12 xl:gap-10">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-green-tint px-3.5 py-1.5 text-[13px] font-medium text-ink ring-1 ring-green/10 sm:px-4 sm:py-2 sm:text-[15px]">
              <span className="h-2 w-2 rounded-full bg-green" aria-hidden />
              Tuition &amp; Coaching Management Software
            </p>

            <h1 className="mt-6 sm:mt-7">
              <span className="block whitespace-nowrap font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-[4rem] lg:text-[clamp(2.75rem,calc(5.2vw-4px),4.25rem)]">
                Power My{' '}
                <span className="relative inline-block text-green">
                  Tutor
                  <Swoosh className="absolute -bottom-1.5 right-0 w-[78%] sm:-bottom-2" />
                </span>
              </span>
              <span className="mt-5 block font-display text-[1.3rem] font-semibold leading-snug tracking-[-0.03em] text-ink-soft sm:mt-6 sm:text-[1.85rem] lg:text-[clamp(1.25rem,calc(2.4vw-3px),1.8rem)]">
                Every batch, every mark, every fee.
                <span className="block text-[2.1rem] font-bold leading-tight tracking-[-0.035em] text-green sm:text-[2.7rem] lg:text-[2.35rem] xl:text-[2.9rem]">
                  Sorted<span className="text-brand">.</span>
                </span>
              </span>
            </h1>

            <p className="mt-4 max-w-[33rem] text-pretty text-[15.5px] leading-relaxed text-ink-soft sm:text-[18px] lg:text-[17px] xl:text-[18.5px]">
              A complete management system for tuition centers and coaching institutes. Manage students, attendance, fees,
              exams and reports, all in one place.
            </p>

            <ul className="mt-6 space-y-3 sm:mt-7">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[15.5px] font-medium text-ink sm:text-[17px] lg:text-[16px] xl:text-[17.5px]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green text-white shadow-[0_2px_6px_-1px_rgba(22,138,76,0.45)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 whitespace-nowrap sm:flex-row sm:flex-wrap xl:gap-4">
              <a
                href={site.signupUrl}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 text-[16px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_24px_-10px_rgba(234,90,42,0.7)] transition hover:bg-brand-hover sm:py-4 sm:text-[17px]"
              >
                <CalendarDays className="h-5 w-5" strokeWidth={2} aria-hidden />
                Start Your Center
              </a>
              <a
                href="#day"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-ink/10 bg-white px-6 py-3.5 text-[16px] font-semibold text-ink shadow-soft transition hover:border-ink/25 sm:py-4 sm:text-[17px]"
              >
                <Play className="h-4 w-4 text-brand" strokeWidth={2.4} aria-hidden />
                See How It Works
              </a>
            </div>
          </div>

          {/* The app's dashboard drawn in code (sample center), tilted slightly on wide screens. On phones
              the card shows the top-left of the dashboard at a readable size instead of the whole window. */}
          <div className="relative lg:col-span-7">
            <Sparkle className="absolute -left-3 -top-9 hidden h-11 w-11 lg:block" />
            <div className="[perspective:2400px]">
              <div className="rounded-[18px] bg-white p-1.5 shadow-[0_1px_2px_rgba(28,25,23,0.06),0_40px_80px_-32px_rgba(28,25,23,0.38),0_12px_30px_-12px_rgba(28,25,23,0.12)] ring-1 ring-ink/[0.06] sm:rounded-[24px] sm:p-2 lg:origin-left lg:[transform:rotateY(-7deg)_rotateX(3deg)_rotate(1deg)] xl:-mr-6">
                <div className="aspect-[5/4] overflow-hidden rounded-[13px] bg-cream-soft sm:aspect-auto sm:rounded-[17px]">
                  <DashboardScreen
                    label="The Power My Tutor dashboard: active students, exams with results, center average, pass rate, a class average chart and the exam plan"
                    className="w-[160%] max-w-none sm:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="relative mt-12 grid grid-cols-2 rounded-2xl bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04),0_18px_40px_-20px_rgba(28,25,23,0.18)] ring-1 ring-ink/[0.05] sm:mt-16 lg:mt-20 lg:grid-cols-4 lg:py-6">
          {heroFacts.map(({ icon: Icon, value, label, tone }, i) => (
            <li
              key={value}
              className={`flex items-center gap-3 border-ink/10 p-4 sm:gap-4 sm:p-6 lg:px-8 lg:py-1 ${i % 2 === 1 ? 'border-l' : ''} ${
                i < 2 ? 'border-b lg:border-b-0' : ''
              } ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full sm:h-14 sm:w-14 ${
                  tone === 'green' ? 'bg-green-tint text-green' : 'bg-brand-tint text-brand'
                }`}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.9} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap font-display text-[1.3rem] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[1.85rem]">
                  {value}
                </span>
                <span className="mt-1.5 block text-[12.5px] leading-snug text-ink-soft sm:text-[15px]">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Soft peach and green shapes behind the hero. */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -bottom-48 -left-48 h-[560px] w-[560px] rounded-full bg-[#FBE0CD] opacity-70 blur-3xl" />
      <div className="absolute -left-24 top-[38%] h-[360px] w-[300px] rounded-full bg-[#FDEBDD] opacity-80 blur-3xl" />
      <div className="absolute right-[30%] top-16 hidden h-[260px] w-[440px] rounded-full bg-[#FAD3B8] opacity-70 blur-3xl lg:block" />
      <div className="absolute left-[44%] top-[56%] hidden h-[300px] w-[420px] rounded-full bg-[#D5ECDA] opacity-80 blur-3xl lg:block" />
      <div className="absolute right-[6%] top-[150px] hidden h-[130px] w-[300px] xl:h-[180px] xl:w-[400px] rounded-[50%_50%_45%_55%/70%_70%_30%_30%] bg-gradient-to-br from-[#3BAA61] to-green opacity-90 blur-[3px] lg:block" />
      <div className="absolute -right-24 top-[34%] hidden h-[340px] w-[200px] rounded-[60%_40%_40%_60%/50%_50%_50%_50%] bg-gradient-to-b from-[#3BAA61] to-green opacity-90 blur-[3px] lg:block" />
    </div>
  );
}

/** The green stroke under "Tutor". */
function Swoosh({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M3 13C52 5.5 120 3 197 6.5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** Three short orange strokes at the dashboard's top-left corner. */
function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={`text-brand ${className}`} aria-hidden>
      <path d="M4 27l10 6M17 9l6 12M35 3v12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
