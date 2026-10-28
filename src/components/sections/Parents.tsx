import { Check } from 'lucide-react';
import Image from 'next/image';
import { PhoneFrame } from '@/components/ui/Frames';
import { WhatsAppChat } from '@/components/ui/WhatsAppChat';
import { parentPoints } from '@/lib/content';

export function Parents() {
  return (
    <section id="parents" aria-labelledby="parents-title" className="section overflow-hidden bg-cream-soft">
      <div className="shell grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="eyebrow-text">For parents</p>
          <h2 id="parents-title" className="h2 mt-3">
            Parents see results without calling you
          </h2>
          <p className="lead mt-3 sm:mt-4">
            Share one results link. Parents open it on their phone, enter the exam password you send, and see the marks,
            class average and toppers for their child’s batch. No app, no account.
          </p>
          <ul className="mt-6 space-y-3">
            {parentPoints.map((p) => (
              <li key={p} className="flex gap-2.5 text-[14px] leading-snug text-ink sm:text-[15px]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" strokeWidth={2.4} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-ink/10 pt-5 text-[14px] leading-relaxed text-ink-soft sm:text-[15px]">
            <span className="font-semibold text-ink">Want to send a personal update?</span> Every student’s profile has a
            progress message ready for WhatsApp. You read it, then tap send.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] pb-10 sm:pb-2 lg:max-w-[480px]">
          <div className="flex justify-end">
            <PhoneFrame className="w-[54%] sm:w-[250px]">
              <Image
                src="/product/m-results.webp"
                alt="The results page parents see on their phone: the Monthly 2 test for Class XII with class average, top three students and a search box"
                fill
                sizes="(min-width: 640px) 250px, 58vw"
                className="object-cover object-top"
              />
            </PhoneFrame>
          </div>
          {/* On phones the chat sits low so the results header and podium stay visible above it. */}
          <WhatsAppChat className="absolute left-0 top-[44%] w-[66%] sm:bottom-10 sm:top-auto sm:w-[300px]" />
        </div>
      </div>
    </section>
  );
}
