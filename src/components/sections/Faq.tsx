import { Plus } from 'lucide-react';
import { faqs } from '@/lib/content';

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white pb-16 sm:pb-24">
      <div className="shell grid gap-8 border-t border-ink/10 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="h2">
            Questions centers ask
          </h2>
          <p className="lead mt-3 max-w-xs sm:mt-4">Plans, data and parents, answered plainly.</p>
        </div>

        <div className="border-t border-ink/15 lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/10">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-[15.5px] font-semibold leading-snug text-ink transition hover:text-ink-soft sm:text-[17px] [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.6}
                  aria-hidden
                />
              </summary>
              <p className="-mt-1 max-w-2xl pb-6 pr-10 text-[14.5px] leading-relaxed text-ink-soft sm:text-[15.5px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
