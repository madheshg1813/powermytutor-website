import { Check } from 'lucide-react';
import Image from 'next/image';
import { BrowserFrame, PhoneFrame } from '@/components/ui/Frames';
import { heroTicks } from '@/lib/content';
import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="bg-white pt-8 sm:pt-16 lg:pt-20">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h1 className="h1 lg:col-span-7">
            Every batch, every mark, every fee. <span className="text-green">Sorted.</span>
          </h1>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="lead max-w-md">
              Attendance, marks, fees, report cards and parent updates in one app built for tuition centers and coaching
              institutes. On your phone and your laptop.
            </p>
            <div className="mt-6 flex gap-2.5 sm:gap-3">
              <a href={site.signupUrl} className="btn-primary">
                Start your center
              </a>
              <a href="#day" className="btn-ghost">
                See a day in the app
              </a>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-ink-soft sm:text-sm">
              {heroTicks.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green" strokeWidth={2.4} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* The same center on a laptop and a phone. */}
      <div className="mx-auto mt-10 max-w-[1320px] sm:mt-14 sm:px-8">
        <div className="stage h-[400px] rounded-none sm:h-[520px] sm:rounded-[28px] lg:h-[600px]">
          <BrowserFrame
            url="app.powermytutor.com/dashboard"
            className="absolute left-[30%] top-8 w-[720px] sm:left-[24%] sm:top-12 sm:w-[920px] lg:left-[22%] lg:top-14 lg:w-[1080px]"
          >
            <Image
              src="/product/hero-dashboard.webp"
              alt="The Power My Tutor dashboard: active students, exams with results, center average, pass rate and a class average chart"
              width={2880}
              height={1800}
              priority
              sizes="(min-width: 1024px) 1080px, (min-width: 640px) 920px, 720px"
              className="h-auto w-full"
            />
          </BrowserFrame>
          <PhoneFrame className="absolute left-[5%] top-5 w-[46%] max-w-[250px] sm:left-[6%] sm:top-9 sm:w-[230px] lg:left-[8%] lg:w-[250px]">
            <Image
              src="/product/hero-phone.webp"
              alt="The same dashboard on a phone, with a bottom tab bar for Home, Students, Marks and Exams"
              fill
              priority
              sizes="(min-width: 640px) 250px, 46vw"
              className="object-cover object-top"
            />
          </PhoneFrame>
        </div>
        <p className="shell mt-3 text-[12px] text-ink-muted sm:px-0 sm:text-[13px]">
          Real screens from the app, with a sample center’s data.
        </p>
      </div>
    </section>
  );
}
