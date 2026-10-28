import Image from 'next/image';
import Link from 'next/link';

/** The Power My Tutor mark with its plain black wordmark, as in the app. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Power My Tutor home">
      <Image src="/brand/logo-160.png" alt="" width={32} height={32} className="h-7 w-7 sm:h-8 sm:w-8" priority />
      <span className="font-display text-[15px] font-bold tracking-tight text-ink sm:text-base">Power My Tutor</span>
    </Link>
  );
}
