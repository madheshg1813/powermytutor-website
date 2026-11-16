import { Check, Laptop, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { BrowserFrame, PhoneFrame } from '@/components/ui/Frames';
import { Reveal } from '@/components/ui/Reveal';
import { deskPoints, phonePoints } from '@/lib/content';

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex gap-2.5 text-[14.5px] leading-snug text-ink-soft">
          <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-green text-white">
            <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden />
          </span>
          {p}
        </li>
      ))}
    </ul>
  );
}

/** The same center at a desk and in a pocket. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="shell">
        <Reveal className="max-w-[760px]">
          <p className="eyebrow eyebrow-green">Dashboard and mobile</p>
          <h2 id="experience-title" className="h2 mt-4">
            On the laptop at your desk. On the phone in class.
          </h2>
          <p className="lead mt-4">It runs in the browser on any phone or laptop, with nothing to install, and both show the same center.</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-12">
          <Reveal className="card group flex flex-col overflow-hidden lg:col-span-7">
            <div className="p-6 pb-0 sm:p-8 sm:pb-0">
              <p className="flex items-center gap-2.5 text-[13px] font-semibold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-brand-tint text-brand">
                  <Laptop className="h-4 w-4" strokeWidth={1.9} aria-hidden />
                </span>
                At your desk
              </p>
              <h3 className="h3 mt-4">The whole center on one dashboard.</h3>
              <Points items={deskPoints} />
            </div>
            <div className="mt-7 flex-1 p-3 pt-0">
              <div className="stage stage-orange h-[230px] sm:h-[340px] lg:h-full lg:min-h-[360px]">
                <BrowserFrame className="absolute left-5 top-6 w-[150%] transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-1 sm:left-8 sm:top-8 sm:w-[125%]">
                  <Image
                    src="/product/hero-dashboard.webp"
                    alt="The dashboard on a laptop: search, quick actions to add a student, schedule an exam or enter marks, and the center’s numbers"
                    width={2880}
                    height={1800}
                    sizes="(min-width: 1024px) 820px, 150vw"
                    className="h-auto w-full"
                  />
                </BrowserFrame>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90} className="card group flex flex-col overflow-hidden lg:col-span-5">
            <div className="p-6 pb-0 sm:p-8 sm:pb-0">
              <p className="flex items-center gap-2.5 text-[13px] font-semibold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-green-tint text-green">
                  <Smartphone className="h-4 w-4" strokeWidth={1.9} aria-hidden />
                </span>
                In your pocket
              </p>
              <h3 className="h3 mt-4">Made for a phone, for you and for parents.</h3>
              <Points items={phonePoints} />
            </div>
            <div className="mt-7 flex-1 p-3 pt-0">
              <div className="stage stage-green h-[320px] sm:h-[360px] lg:h-full lg:min-h-[360px]">
                <div className="absolute inset-x-5 top-6 mx-auto grid max-w-[400px] grid-cols-2 gap-4 sm:inset-x-8 sm:top-8 sm:gap-6">
                  {[
                    { src: '/product/hero-phone.webp', label: 'Your phone', alt: 'The dashboard on a phone with its bottom tab bar' },
                    { src: '/product/results-phone.webp', label: 'A parent’s phone', alt: 'The results page a parent opens from the link' },
                  ].map((p, i) => (
                    <figure key={p.src} className={`transition-transform duration-700 ease-out ${i ? 'translate-y-7 group-hover:translate-y-4' : 'group-hover:-translate-y-2'}`}>
                      <figcaption className="mb-2.5 text-center text-[12.5px] font-semibold text-ink-soft">{p.label}</figcaption>
                      <PhoneFrame>
                        <Image src={p.src} alt={p.alt} fill sizes="200px" className="object-cover object-top" />
                      </PhoneFrame>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
