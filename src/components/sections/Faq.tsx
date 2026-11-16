import { ArrowRight, Plus } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/lib/content';
import { site } from '@/lib/site';

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow eyebrow-green">FAQ</p>
            <h2 id="faq-title" className="h2 mt-4">
              Questions centers ask
            </h2>
            <p className="lead mt-4">Plans, data and parents, answered plainly.</p>
            <a
              href={site.signupUrl}
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink transition hover:text-brand"
            >
              Ready? Start your center
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={80} className="space-y-2.5 lg:col-span-8">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-[18px] border border-ink/[0.09] bg-white transition-[border-color,box-shadow] duration-300 hover:border-ink/20 open:border-ink/15 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-left text-[15.5px] font-semibold leading-snug text-ink sm:px-6 sm:py-5 sm:text-[16.5px] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-soft text-ink-soft transition duration-300 group-open:rotate-45 group-open:bg-brand group-open:text-white">
                  <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl px-5 pb-5 pr-12 text-[15px] leading-relaxed text-ink-soft sm:px-6 sm:pb-6">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
