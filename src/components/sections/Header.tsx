'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
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

  // Clear over the hero's backdrop at the top of the page; solid once the page scrolls.
  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        solid ? 'border-ink/10 bg-white/90 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="shell-wide flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo tagline />

        <nav aria-label="Main" className="hidden items-center gap-6 whitespace-nowrap lg:flex xl:gap-10">
          <a
            href="#top"
            aria-current="page"
            className="relative text-[15px] font-semibold text-brand after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-brand xl:text-base"
          >
            Home
          </a>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] font-medium text-ink-soft transition hover:text-ink xl:text-base">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.loginUrl}
            className="hidden whitespace-nowrap rounded-full border border-ink/20 bg-white/70 px-5 py-2.5 text-[15px] font-medium text-ink transition hover:border-ink/40 sm:inline-flex"
          >
            Log in
          </a>
          <a href={site.signupUrl} className="btn-primary btn-sm sm:px-5 sm:py-2.5 sm:text-[15px]">
            Get Started
            <ArrowRight className="hidden h-4 w-4 sm:block" strokeWidth={2.2} aria-hidden />
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
          <div className="shell-wide flex flex-col py-2">
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
