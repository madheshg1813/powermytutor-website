import { Check } from 'lucide-react';
import Image from 'next/image';
import { BrowserFrame, PhoneFrame } from '@/components/ui/Frames';
import { site } from '@/lib/site';

const ticks = ['Set up in two minutes', 'Works on phone and laptop', 'From $9 a month'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 h-[560px]" aria-hidden />

      <div className="shell relative pt-10 text-center sm:pt-20">
        <h1 className="mx-auto max-w-[15ch] font-display text-[2.2rem] font-extrabold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[3.4rem] lg:text-[4rem]">
          Your tuition center, finally <span className="text-green">organised</span>.
        </h1>
        <p className="lead mx-auto mt-4 max-w-[36rem] sm:mt-6">
          Students, batches, attendance, marks, fees and report cards in one simple app, with results parents can check on
          their phone. Built for tuition centers and coaching institutes.
        </p>

        <div className="mt-6 flex justify-center gap-2.5 sm:mt-8 sm:gap-3">
          <a href={site.signupUrl} className="btn-primary">
            Start your center
          </a>
          <a href="#features" className="btn-ghost">
            See how it works
          </a>
        </div>

        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-[13px] text-ink-soft sm:text-sm">
          {ticks.map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-green" strokeWidth={2.4} aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="shell relative mt-10 pb-12 sm:mt-16 sm:pb-20">
        <div className="relative mx-auto max-w-[1080px] pr-[13%] sm:pr-0">
          <BrowserFrame url="app.powermytutor.com/dashboard">
            <Image
              src="/product/dashboard.webp"
              alt="Power My Tutor dashboard for a coaching institute: active students, exams with results, center average, pass rate, a class average chart and the exam plan"
              width={2880}
              height={1800}
              priority
              sizes="(min-width: 1140px) 1080px, 92vw"
              className="h-auto w-full"
            />
          </BrowserFrame>
          <PhoneFrame className="absolute -bottom-6 right-0 w-[30%] sm:-bottom-10 sm:-right-4 sm:w-[23%] lg:-right-10 lg:w-[22%]">
            <Image
              src="/product/m-attendance.webp"
              alt="Taking attendance on a phone: a batch list where every student starts present"
              fill
              priority
              sizes="(min-width: 1024px) 240px, 30vw"
              className="object-cover object-top"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
