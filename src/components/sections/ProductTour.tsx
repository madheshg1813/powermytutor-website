'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { BrowserFrame } from '@/components/ui/Frames';
import { tour } from '@/lib/content';

export function ProductTour() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const item = tour[active];

  function select(i: number, focus = false) {
    const next = (i + tour.length) % tour.length;
    setActive(next);
    const list = tabsRef.current;
    const tab = list?.children[next] as HTMLElement | undefined;
    if (!list || !tab) return;
    if (focus) tab.focus({ preventScroll: true });
    // On phones the tabs are a sideways row: keep the chosen one in view without moving the page.
    if (list.scrollWidth > list.clientWidth) list.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
  }

  return (
    <section id="features" className="section bg-cream-soft">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Inside the app</p>
          <h2 className="h2 mt-3">Every part of your center, in one place</h2>
          <p className="lead mt-3 sm:mt-4">The screens below are the real app, with a demo coaching institute’s data.</p>
        </div>

        <div className="mt-8 sm:mt-12 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="App features"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0"
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown' || e.key === 'ArrowRight') (e.preventDefault(), select(active + 1, true));
              if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') (e.preventDefault(), select(active - 1, true));
            }}
          >
            {tour.map((t, i) => {
              const on = i === active;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  id={`tab-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="tour-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(i)}
                  className={`group flex shrink-0 items-start gap-3 rounded-full border px-3.5 py-2 text-left transition lg:rounded-2xl lg:px-4 lg:py-3.5 ${
                    on
                      ? 'border-ink bg-ink text-white lg:border-ink/10 lg:bg-white lg:text-ink lg:shadow-soft'
                      : 'border-ink/10 bg-white text-ink-soft hover:border-ink/25 hover:text-ink lg:border-transparent lg:bg-transparent lg:hover:bg-white/60'
                  }`}
                >
                  <Icon className="mt-[1px] hidden h-5 w-5 shrink-0 lg:block" strokeWidth={1.7} aria-hidden />
                  <span className="min-w-0">
                    <span className="block whitespace-nowrap text-[13px] font-semibold sm:text-sm lg:text-[15px]">{t.label}</span>
                    {on && <span className="mt-1 hidden text-[13.5px] leading-relaxed text-ink-muted lg:block">{t.text}</span>}
                  </span>
                </button>
              );
            })}
          </div>

          <div id="tour-panel" role="tabpanel" aria-labelledby={`tab-${item.id}`} className="mt-5 lg:mt-0">
            <BrowserFrame url={`app.powermytutor.com/${item.id}`}>
              {/* Phones get a square, closer crop from the top-left so the screen stays readable. */}
              <div className="relative aspect-square bg-cream-soft sm:aspect-[1192/836]">
                {tour.map((t, i) => (
                  <Image
                    key={t.id}
                    src={t.image}
                    alt={i === active ? t.alt : ''}
                    aria-hidden={i !== active}
                    fill
                    sizes="(min-width: 1200px) 850px, (min-width: 1024px) 66vw, 92vw"
                    className={`object-cover object-left-top transition-opacity duration-300 sm:object-top ${i === active ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </BrowserFrame>
            <div className="mt-4 lg:hidden">
              <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
