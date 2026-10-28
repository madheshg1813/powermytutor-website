import { trust } from '@/lib/content';

export function TrustStrip() {
  return (
    <section aria-label="Your data" className="border-y border-ink/[0.07] bg-white">
      <ul className="shell grid grid-cols-2 gap-x-4 gap-y-4 py-5 sm:py-6 lg:grid-cols-4">
        {trust.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5 text-[13px] font-medium leading-snug text-ink-soft sm:text-sm lg:justify-center">
            <Icon className="h-[18px] w-[18px] shrink-0 text-ink" strokeWidth={1.7} aria-hidden />
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}
