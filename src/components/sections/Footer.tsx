import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/site';

const columns = [
  { title: 'Product', links: site.nav.map((n) => ({ label: n.label, href: n.href })) },
  {
    title: 'Account',
    links: [
      { label: 'Sign up', href: site.signupUrl },
      { label: 'Log in', href: site.loginUrl },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="shell grid gap-8 py-10 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)] sm:py-14">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
            Tuition center software for students, batches, attendance, marks, fees and parent results.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:contents">
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{c.title}</h2>
              <ul className="mt-1.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {/* Full-height rows keep each link an easy tap on phones. */}
                    <a href={l.href} className="inline-flex min-h-10 items-center text-[14px] text-ink-soft transition hover:text-ink sm:min-h-9">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-ink/[0.07]">
        <p className="shell py-5 text-[13px] text-ink-muted">© {new Date().getFullYear()} Power My Tutor</p>
      </div>
    </footer>
  );
}
