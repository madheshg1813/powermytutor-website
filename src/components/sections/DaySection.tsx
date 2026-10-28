import Image from 'next/image';
import { Callout } from '@/components/ui/Callout';
import { PhoneFrame } from '@/components/ui/Frames';
import { WhatsAppChat } from '@/components/ui/WhatsAppChat';
import { day, type ChapterId } from '@/lib/content';

/** Each moment of the day shows the real screen that handles it, cropped to the part that matters. */
const visuals: Record<ChapterId, () => React.ReactNode> = {
  attendance: () => (
    <div className="stage px-4 py-6 sm:px-10 sm:py-10">
      <div className="relative">
        <Image
          src="/product/att-list.webp"
          alt="Attendance for Class XI Morning: nine present, Shruti Nair and Kabir Varghese marked absent"
          width={824}
          height={930}
          sizes="(min-width: 1024px) 380px, 62vw"
          className="fade-b h-auto w-[64%]"
        />
        <Image
          src="/product/att-parents.webp"
          alt="Tell absent students’ parents: a WhatsApp button for each absent student’s parent"
          width={824}
          height={482}
          sizes="(min-width: 1024px) 360px, 58vw"
          className="lift absolute right-0 top-[51%] h-auto w-[58%]"
        />
      </div>
    </div>
  ),
  marks: () => (
    <div className="stage pl-4 pt-5 sm:pl-10 sm:pt-10">
      {/* The pins are placed in % of this box, so it is exactly the image's size. */}
      <div className="relative w-[112%]">
        <Image
          src="/product/marks-sheet.webp"
          alt="Marks entry for Weekly 08 Chemistry: 12 of 12 entered, live average 64.5%, with a mark being typed for roll 03"
          width={1364}
          height={1320}
          sizes="(min-width: 1024px) 720px, 112vw"
          className="fade-rb h-auto w-full"
        />
        <Callout x={57.2} y={24} side="left">
          Class average, live
        </Callout>
        <Callout x={60} y={64.6} side="left">
          Enter → next student
        </Callout>
      </div>
    </div>
  ),
  fees: () => (
    <div className="stage px-4 pt-6 sm:px-10 sm:pt-10">
      <Image
        src="/product/fees-stats.webp"
        alt="October fees: ₹1,50,000 billed, ₹97,500 collected, ₹52,500 outstanding, 11 overdue"
        width={1496}
        height={266}
        sizes="(min-width: 1024px) 600px, 92vw"
        className="h-auto w-full"
      />
      {/* Only the top of the overdue list; the rest fades out. */}
      <div className="fade-b relative mt-3 aspect-[1496/880] overflow-hidden sm:mt-4">
        <Image
          src="/product/fees-overdue.webp"
          alt="The overdue list: each student’s invoice number, amount, due date, an Overdue tag and a WhatsApp reminder button"
          width={1496}
          height={1520}
          sizes="(min-width: 1024px) 600px, 92vw"
          className="absolute inset-x-0 top-0 h-auto w-full"
        />
      </div>
    </div>
  ),
  parents: () => (
    <div className="stage px-4 pb-0 pt-6 sm:px-10 sm:pt-10">
      <div className="relative mx-auto max-w-[460px]">
        <div className="flex justify-end">
          <PhoneFrame className="w-[56%] translate-y-6 sm:w-[250px]">
            <Image
              src="/product/results-phone.webp"
              alt="The results page a parent sees: Monthly 2 for Class XII, class average 67.4%, and the top three students"
              fill
              sizes="(min-width: 640px) 250px, 56vw"
              className="object-cover object-top"
            />
          </PhoneFrame>
        </div>
        <WhatsAppChat className="absolute left-0 top-[40%] w-[66%] sm:top-[34%] sm:w-[290px]" />
      </div>
    </div>
  ),
  reports: () => (
    <div className="stage px-5 pt-6 sm:px-10 sm:pt-10">
      <Image
        src="/product/report-card.webp"
        alt="A printed progress report: average 80.9%, grade A, class rank 5 of 20, attendance 10 of 11, with a score chart"
        width={1672}
        height={1173}
        sizes="(min-width: 1024px) 560px, 88vw"
        className="fade-b h-auto w-full shadow-lift"
      />
    </div>
  ),
};

export function DaySection() {
  return (
    <section id="day" aria-labelledby="day-title" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="grid gap-4 border-t border-ink/10 pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-10">
          <h2 id="day-title" className="h2 lg:col-span-7">
            Built around a tuition center’s day
          </h2>
          <p className="lead max-w-md lg:col-span-5 lg:pt-2">
            From the first batch at six to the last parent message at night, here is where Power My Tutor does the work.
          </p>
        </div>

        <ol className="mt-12 space-y-16 sm:mt-16 sm:space-y-24 lg:space-y-28">
          {day.map((c, i) => {
            const Visual = visuals[c.id];
            return (
              <li key={c.id} className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-2 lg:col-start-8' : ''}`}>
                  <p className="flex items-baseline gap-3">
                    <span className="num font-display text-[15px] font-bold text-ink">{c.time}</span>
                    <span className="h-px w-8 translate-y-[-4px] bg-ink/25" aria-hidden />
                    <span className="text-[14px] text-ink-muted">{c.moment}</span>
                  </p>
                  <h3 className="h3 mt-3 max-w-[18ch] sm:mt-4">{c.title}</h3>
                  <p className="lead mt-3 max-w-[30rem] sm:mt-4">{c.text}</p>
                </div>
                <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-1 lg:col-start-1' : ''}`}>{Visual()}</div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
