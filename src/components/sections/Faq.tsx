import { Plus } from 'lucide-react';
import { faqs } from '@/lib/content';

export function Faq() {
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];
  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-white">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">FAQ</p>
          <h2 id="faq-title" className="h2 mt-3">
            Questions centers ask us
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-x-8 sm:mt-12 lg:grid-cols-2">
          {columns.map((col, c) => (
            <div key={c}>
              {col.map((f) => (
                <details key={f.q} className="group border-b border-ink/10">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-[15px] font-semibold leading-snug text-ink sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </summary>
                  <p className="-mt-1 pb-5 pr-8 text-[14px] leading-relaxed text-ink-soft sm:text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
