'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section in the middle of the screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = site.nav.map((n) => document.querySelector(n.href)).filter((el): el is Element => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
          else setActive((cur) => (cur === `#${e.target.id}` ? '' : cur));
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-ink/[0.08] bg-paper/85 shadow-[0_8px_24px_-20px_rgba(28,25,23,0.35)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[68px]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const on = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={on ? 'true' : undefined}
                className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                  on ? 'bg-ink/[0.06] text-ink' : 'text-ink-soft hover:bg-ink/[0.04] hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            href={site.loginUrl}
            className="hidden rounded-full px-3.5 py-2 text-[14.5px] font-medium text-ink-soft transition-colors hover:bg-ink/[0.04] hover:text-ink sm:inline"
          >
            Log in
          </a>
          <a href={site.signupUrl} className="btn-primary btn-sm">
            Get started
            <ArrowRight className="hidden h-4 w-4 sm:block" strokeWidth={2.2} aria-hidden />
          </a>
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-ink/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {/* Drops over the page; opens by animating the grid row from 0fr to 1fr. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute inset-x-0 top-full grid border-b border-ink/[0.08] bg-paper/95 shadow-[0_24px_40px_-24px_rgba(28,25,23,0.35)] backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <div className="shell flex flex-col pb-5 pt-1">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ink/[0.07] py-4 font-display text-[17px] font-semibold text-ink"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-ink-faint" strokeWidth={2} aria-hidden />
              </a>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={site.loginUrl} className="btn-ghost">
                Log in
              </a>
              <a href={site.signupUrl} className="btn-primary">
                Get started
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
