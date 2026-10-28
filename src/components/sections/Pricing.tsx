'use client';

import { Check, Users } from 'lucide-react';
import { useState } from 'react';
import { branchAddon, included, plans } from '@/lib/content';
import { site } from '@/lib/site';

type Period = 'month' | 'year';

export function Pricing() {
  const [period, setPeriod] = useState<Period>('month');

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section bg-cream-soft">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text">Pricing</p>
          <h2 id="pricing-title" className="h2 mt-3">
            Pay for the students you teach
          </h2>
          <p className="lead mt-3 sm:mt-4">Every feature is in every plan. Plans differ only by how many active students you have.</p>
        </div>

        <div className="mt-7 flex justify-center sm:mt-9">
          <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full border border-ink/10 bg-white p-1">
            {(['month', 'year'] as const).map((v) => (
              <button
                key={v}
                type="button"
                role="radio"
                aria-checked={period === v}
                onClick={() => setPeriod(v)}
                className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition sm:text-sm ${
                  period === v ? 'bg-ink text-white' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {v === 'month' ? 'Monthly' : 'Yearly'}
                {v === 'year' && <span className={`ml-1.5 ${period === v ? 'text-white/70' : 'text-green'}`}>2 months free</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Phones: a sideways row with the next plan peeking; larger screens: three columns. */}
        <ul className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 pt-3 sm:mx-auto sm:mt-9 sm:grid sm:max-w-5xl sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
          {plans.map((p) => {
            const featured = p.id === 'growth';
            const amount = period === 'month' ? p.monthly : p.yearly;
            return (
              <li
                key={p.id}
                className={`card relative flex w-[82%] shrink-0 snap-center flex-col p-5 sm:w-auto sm:p-7 ${featured ? 'border-ink/25 shadow-lift' : ''}`}
              >
                {p.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-green/15 bg-green-tint px-3 py-1 text-[11px] font-semibold text-green">
                    {p.tag}
                  </span>
                )}
                <h3 className="text-lg font-bold tracking-tight sm:text-xl">{p.name}</h3>
                {/* Two lines reserved so prices and buttons line up across the cards. */}
                <p className="mt-1.5 text-[14px] leading-snug text-ink-muted sm:min-h-[2.6rem]">{p.blurb}</p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="num font-display text-[2.6rem] font-extrabold leading-none tracking-tight">${amount}</span>
                  <span className="text-[14px] text-ink-muted">/{period}</span>
                </p>
                <p className="mb-6 mt-4 flex items-center gap-2 border-t border-ink/[0.08] pt-4 text-[14px] font-medium text-ink">
                  <Users className="h-4 w-4 text-ink" strokeWidth={1.8} aria-hidden />
                  {p.students ? `Up to ${p.students.toLocaleString('en-IN')} active students` : 'Unlimited students'}
                </p>
                <a
                  href={site.signupUrl}
                  className={`mt-auto self-start ${featured ? 'btn-primary' : 'btn-ghost'}`}
                  aria-label={`Start with the ${p.name} plan`}
                >
                  Start with {p.name}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-2 text-center text-[12px] text-ink-muted sm:hidden">Swipe to see all plans →</p>

        <div className="card mx-auto mt-6 max-w-5xl p-5 sm:mt-8 sm:p-7">
          <h3 className="text-[15px] font-bold tracking-tight sm:text-base">Included in every plan</h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[14px] text-ink sm:text-[15px]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" strokeWidth={2.4} aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-ink/[0.08] pt-4 text-[13px] leading-relaxed text-ink-muted sm:text-sm">
            Every plan includes one branch. Extra branches are ${branchAddon.monthly} a month (${branchAddon.yearly} a year). Prices
            are in US dollars. No free trial; change plan or cancel any time.
          </p>
        </div>
      </div>
    </section>
  );
}
