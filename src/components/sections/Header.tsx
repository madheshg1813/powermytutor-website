'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-colors ${
        scrolled || open ? 'border-ink/10' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] font-medium text-ink-soft transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={site.loginUrl} className="hidden px-2 text-[15px] font-medium text-ink-soft transition hover:text-ink sm:inline">
            Log in
          </a>
          <a href={site.signupUrl} className="btn-primary btn-sm">
            Get started
          </a>
          <button
            type="button"
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-ink/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-ink/10 bg-white lg:hidden">
          <div className="shell flex flex-col py-2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/[0.06] py-3.5 text-[15px] font-medium text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a href={site.loginUrl} className="py-3.5 text-[15px] font-medium text-ink sm:hidden">
              Log in
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
