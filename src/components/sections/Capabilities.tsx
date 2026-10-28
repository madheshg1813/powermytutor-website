import { capabilities } from '@/lib/content';

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="section bg-white">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Made for tuition centers</p>
          <h2 id="capabilities-title" className="h2 mt-3">
            Works the way your center already works
          </h2>
        </div>

        {/* One hairline-ruled panel rather than eight floating cards. */}
        <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:mt-12 sm:rounded-3xl lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <li key={title} className="bg-white p-4 sm:p-7">
              <Icon className="h-5 w-5 text-ink sm:h-6 sm:w-6" strokeWidth={1.6} aria-hidden />
              <h3 className="mt-3 text-[14px] font-bold leading-snug tracking-tight sm:mt-5 sm:text-[17px]">{title}</h3>
              <p className="mt-1 text-[12.5px] leading-snug text-ink-muted sm:mt-1.5 sm:text-[14px] sm:leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
