'use client';

import { Check, Users } from 'lucide-react';
import { useState } from 'react';
import { branchAddon, included, plans } from '@/lib/content';
import { site } from '@/lib/site';

type Period = 'month' | 'year';

export function Pricing() {
  const [period, setPeriod] = useState<Period>('month');

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-white py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2 id="pricing-title" className="h2 lg:col-span-7">
            Every feature in every plan. Pay by class size.
          </h2>
          <div className="lg:col-span-5">
            <p className="lead max-w-md">Plans differ only by how many active students you teach. Change plan whenever your center grows.</p>
            <div role="radiogroup" aria-label="Billing period" className="mt-5 inline-flex rounded-full bg-cream-soft p-1 ring-1 ring-inset ring-ink/[0.06]">
              {(['month', 'year'] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={period === v}
                  onClick={() => setPeriod(v)}
                  className={`min-h-10 rounded-full px-4 py-2 text-[13px] font-semibold transition sm:min-h-0 sm:py-1.5 sm:text-sm ${
                    period === v ? 'bg-white text-ink shadow-[0_1px_2px_rgba(28,25,23,0.12)]' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {v === 'month' ? 'Monthly' : 'Yearly'}
                  {v === 'year' && <span className="ml-1.5 text-green">2 months free</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[22px] border border-ink/[0.12] sm:mt-12 sm:rounded-[28px]">
          <ul className="grid divide-y divide-ink/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {plans.map((p) => {
              const featured = p.id === 'growth';
              const amount = period === 'month' ? p.monthly : p.yearly;
              return (
                <li key={p.id} className={`flex flex-col p-5 sm:p-8 ${featured ? 'bg-cream-soft/70' : 'bg-white'}`}>
                  <div className="flex items-start justify-between gap-4 md:block">
                    <div>
                      <p className="h-4 text-[12px] font-semibold text-green">{p.note}</p>
                      <h3 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">{p.name}</h3>
                      <p className="mt-1.5 max-w-[16rem] text-[14px] leading-snug text-ink-muted md:min-h-[2.6rem]">{p.blurb}</p>
                    </div>
                    <p className="mt-5 flex shrink-0 items-baseline gap-1 md:mt-7">
                      <span className="num font-display text-[2.2rem] font-extrabold leading-none tracking-tight sm:text-[2.9rem]">${amount}</span>
                      <span className="text-[14px] text-ink-muted">/{period}</span>
                    </p>
                  </div>
                  <p className="mt-4 flex items-center gap-2 text-[14px] font-medium text-ink md:mt-5">
                    <Users className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                    {p.students ? `Up to ${p.students.toLocaleString('en-IN')} active students` : 'Unlimited students'}
                  </p>
                  <a
                    href={site.signupUrl}
                    className={`mt-5 self-start md:mt-8 ${featured ? 'btn-primary' : 'btn-ghost'}`}
                    aria-label={`Start with the ${p.name} plan`}
                  >
                    Start with {p.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-ink/10 bg-cream-soft/40 px-5 py-5 sm:px-8 sm:py-6">
            <p className="text-[13px] font-semibold text-ink sm:text-sm">Every plan includes</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
              {included.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-[14px] text-ink-soft">
                  <Check className="h-4 w-4 text-green" strokeWidth={2.4} aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-ink-muted">
          One branch is included; each extra branch is ${branchAddon.monthly} a month (${branchAddon.yearly} a year). Prices in US dollars. No
          free trial; cancel any time from Settings.
        </p>
      </div>
    </section>
  );
}
