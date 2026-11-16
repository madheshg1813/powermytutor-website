'use client';

import { ArrowRight, Check, Users } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { branchAddon, included, plans } from '@/lib/content';
import { site } from '@/lib/site';

type Period = 'month' | 'year';

export function Pricing() {
  const [period, setPeriod] = useState<Period>('month');

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section border-y border-ink/[0.07] bg-white">
      <div className="shell">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-title" className="h2 mt-4">
            Every feature in every plan. Pay by class size.
          </h2>
          <p className="lead mt-4">Plans differ only by how many active students you teach. Change plan whenever your center grows.</p>
          <div role="radiogroup" aria-label="Billing period" className="mt-7 inline-flex rounded-full bg-cream-soft p-1 ring-1 ring-inset ring-ink/[0.07]">
            {(['month', 'year'] as const).map((v) => (
              <button
                key={v}
                type="button"
                role="radio"
                aria-checked={period === v}
                onClick={() => setPeriod(v)}
                className={`rounded-full px-4 py-2 text-[14px] font-semibold transition duration-200 ${
                  period === v ? 'bg-white text-ink shadow-[0_1px_3px_rgba(28,25,23,0.14)]' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {v === 'month' ? 'Monthly' : 'Yearly'}
                {v === 'year' && <span className="ml-1.5 rounded-full bg-green-tint px-2 py-0.5 text-[12px] text-green">2 months free</span>}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:mt-14 md:grid-cols-3 md:items-center md:gap-5">
          {plans.map((p, i) => {
            const featured = p.id === 'growth';
            const amount = period === 'month' ? p.monthly : p.yearly;
            return (
              <Reveal
                as="li"
                key={p.id}
                delay={i * 80}
                className={`relative flex flex-col rounded-[24px] border p-6 transition-shadow duration-300 sm:p-8 ${
                  featured
                    ? 'border-ink bg-ink text-white shadow-shot md:py-11'
                    : 'border-ink/[0.1] bg-paper shadow-soft hover:shadow-lift'
                }`}
              >
                {p.note && (
                  <p className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[12px] font-semibold text-white shadow-glow sm:left-8">
                    {p.note}
                  </p>
                )}
                <h3 className={`font-display text-xl font-bold tracking-tight ${featured ? 'text-white' : 'text-ink'}`}>{p.name}</h3>
                <p className={`mt-1.5 text-[14.5px] leading-snug md:min-h-[2.6rem] ${featured ? 'text-white/65' : 'text-ink-muted'}`}>{p.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="num font-display text-[3rem] font-extrabold leading-none tracking-[-0.04em]">${amount}</span>
                  <span className={`text-[14.5px] ${featured ? 'text-white/60' : 'text-ink-muted'}`}>/{period}</span>
                </p>
                <p
                  className={`mt-6 flex items-center gap-2 border-t pt-5 text-[14.5px] font-medium ${
                    featured ? 'border-white/15 text-white' : 'border-ink/10 text-ink'
                  }`}
                >
                  <Users className={`h-4 w-4 ${featured ? 'text-white/70' : 'text-green'}`} strokeWidth={1.9} aria-hidden />
                  {p.students ? `Up to ${p.students.toLocaleString('en-IN')} active students` : 'Unlimited students'}
                </p>
                <a
                  href={site.signupUrl}
                  className={`mt-6 w-full ${featured ? 'btn-primary' : 'btn-ghost'}`}
                  aria-label={`Start with the ${p.name} plan`}
                >
                  Start with {p.name}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mx-auto mt-6 max-w-[1040px] rounded-[24px] border border-ink/[0.09] bg-cream-soft/60 p-6 sm:mt-8 sm:p-8">
          <p className="font-display text-[15px] font-bold tracking-tight text-ink">Every plan includes</p>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[14.5px] text-ink-soft">
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="mx-auto mt-5 max-w-[1040px] text-center text-[13.5px] leading-relaxed text-ink-muted">
          One branch is included; each extra branch is ${branchAddon.monthly} a month (${branchAddon.yearly} a year). Prices in US dollars. No
          free trial; cancel any time from Settings.
        </p>
      </div>
    </section>
  );
}
