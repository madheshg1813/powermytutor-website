import { LockKeyhole } from 'lucide-react';

/** A quiet browser window around a desktop screenshot of the app. */
export function BrowserFrame({ url, children, className = '' }: { url?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-white shadow-shot sm:rounded-2xl ${className}`}>
      <div className="flex h-7 items-center gap-3 border-b border-ink/[0.07] bg-cream-soft/60 px-3 sm:h-9 sm:px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-ink/15 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-ink/15 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-ink/15 sm:h-2.5 sm:w-2.5" />
        </div>
        {url && (
          <div className="mx-auto hidden items-center gap-1.5 md:flex rounded-full bg-white px-3 py-0.5 text-[10px] text-ink-muted ring-1 ring-ink/[0.07] sm:text-xs">
            <LockKeyhole className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={2} aria-hidden />
            {url}
          </div>
        )}
        {url && <div className="w-[38px] sm:w-[46px]" aria-hidden />}
      </div>
      {children}
    </div>
  );
}

/** A phone outline around a mobile screenshot (1170 × 2532 captures). */
export function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.6rem] bg-ink p-[5px] shadow-shot sm:rounded-[2.2rem] sm:p-[7px] ${className}`}>
      <div className="relative aspect-[1170/2532] overflow-hidden rounded-[1.3rem] bg-cream-soft sm:rounded-[1.8rem]">{children}</div>
    </div>
  );
}
