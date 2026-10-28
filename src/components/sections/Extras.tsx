import { extras } from '@/lib/content';

/** The rest of the app, as a plain spec sheet rather than another grid of cards. */
export function Extras() {
  return (
    <section id="features" aria-labelledby="extras-title" className="bg-cream-soft py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-10">
          <h2 id="extras-title" className="h2 lg:col-span-7">
            And the admin around it
          </h2>
          <p className="lead max-w-md lg:col-span-5 lg:pt-2">
            Batches, exam plans, branches and backups: the parts you set up once and stop thinking about.
          </p>
        </div>

        <ul className="mt-10 grid border-t border-ink/15 sm:mt-14 md:grid-cols-2 md:gap-x-12">
          {extras.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-3 border-b border-ink/10 py-5 sm:py-6 lg:grid-cols-[28px_170px_minmax(0,1fr)]"
            >
              <Icon className="mt-0.5 h-5 w-5 text-ink" strokeWidth={1.6} aria-hidden />
              <h3 className="font-sans text-[15px] font-semibold text-ink sm:text-base">{title}</h3>
              <p className="col-start-2 mt-1 text-[14px] leading-relaxed text-ink-muted sm:text-[15px] lg:col-start-3 lg:mt-0">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
