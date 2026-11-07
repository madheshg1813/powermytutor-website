import Image from 'next/image';
import Link from 'next/link';

/** The real app logo (orange P with a mortarboard), with an optional tagline line for the header. */
export function Logo({ className = '', tagline = false }: { className?: string; tagline?: boolean }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`} aria-label="Power My Tutor home">
      <Image
        src="/brand/logo-160.png"
        alt=""
        width={44}
        height={44}
        className={tagline ? 'h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12' : 'h-7 w-7 sm:h-8 sm:w-8'}
        priority
        unoptimized
      />
      <span className="flex flex-col">
        <span
          className={`font-display font-bold tracking-tight text-ink ${
            tagline ? 'text-[16px] leading-tight sm:text-[19px] lg:text-[23px]' : 'text-[15px] sm:text-base'
          }`}
        >
          Power My Tutor
        </span>
        {tagline && (
          <span className="hidden whitespace-nowrap text-[12px] leading-snug text-ink-soft sm:block lg:hidden xl:block xl:text-[13px]">
            Tuition &amp; Coaching Management System
          </span>
        )}
      </span>
    </Link>
  );
}
