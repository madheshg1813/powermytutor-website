import { ArrowLeft, CheckCheck, Phone, Video } from 'lucide-react';
import { whatsappMessage } from '@/lib/content';

/**
 * A recreation of the progress message the app pre-fills in WhatsApp from a student's profile.
 * The text is exactly what the app builds for the demo student; the owner reviews it and taps send.
 */
export function WhatsAppChat({ className = '' }: { className?: string }) {
  const initials = whatsappMessage.parent
    .split(' ')
    .map((w) => w[0])
    .join('');
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-ink/10 bg-[#EFEAE2] shadow-shot ${className}`}
      aria-label={`WhatsApp message to ${whatsappMessage.parent}`}
    >
      <div className="flex items-center gap-2.5 border-b border-ink/[0.06] bg-white px-3 py-2.5">
        <ArrowLeft className="h-4 w-4 text-ink-soft" strokeWidth={1.8} aria-hidden />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-line text-[11px] font-semibold text-ink-soft">
          {initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-semibold text-ink">{whatsappMessage.parent}</span>
          <span className="block text-[11px] text-ink-muted">online</span>
        </span>
        <Video className="hidden h-4 w-4 text-ink-soft sm:block" strokeWidth={1.8} aria-hidden />
        <Phone className="ml-2 h-4 w-4 text-ink-soft" strokeWidth={1.8} aria-hidden />
      </div>
      <div className="px-3 pb-4 pt-3">
        <div className="mx-auto mb-3 w-fit rounded-md bg-white/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-muted">
          Today
        </div>
        <blockquote className="ml-auto max-w-[94%] rounded-lg rounded-tr-none bg-[#D9FDD3] px-2.5 pb-1.5 pt-2 text-[12.5px] leading-[1.45] text-ink shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
          {whatsappMessage.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-ink-muted">
            {whatsappMessage.time}
            <CheckCheck className="h-3.5 w-3.5 text-[#53BDEB]" strokeWidth={2} aria-label="Read" />
          </span>
        </blockquote>
      </div>
    </figure>
  );
}
