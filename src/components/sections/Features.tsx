import Image from 'next/image';
import { Callout } from '@/components/ui/Callout';
import { PhoneFrame } from '@/components/ui/Frames';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppChat } from '@/components/ui/WhatsAppChat';
import { chapterMeta, day, type Chapter, type ChapterId } from '@/lib/content';

type Tone = 'green' | 'orange';

/** Brand tint for each job: green where things get confirmed or sent, orange where numbers get entered. */
const tone: Record<ChapterId, Tone> = {
  attendance: 'green',
  marks: 'orange',
  fees: 'orange',
  parents: 'green',
  reports: 'green',
};

/** Each job shows the real screen that handles it, framed so nothing important is cut. */
const visuals: Record<ChapterId, React.ReactNode> = {
  attendance: (
    <div className="feat-stage feat-green flex h-full items-center justify-center px-5 py-7 sm:px-8 sm:py-9">
      {/* The parents card sits over the faded end of the list. */}
      <div className="relative w-full max-w-[400px] pb-[14%]">
        <Image
          src="/product/att-list.webp"
          alt="Attendance for Class XI Morning: nine present, Shruti Nair and Kabir Varghese marked absent"
          width={824}
          height={930}
          sizes="(min-width: 1024px) 290px, 62vw"
          className="fade-b h-auto w-[72%]"
        />
        <Image
          src="/product/att-parents.webp"
          alt="Tell absent students’ parents: a WhatsApp button for each absent student’s parent"
          width={824}
          height={482}
          sizes="(min-width: 1024px) 260px, 56vw"
          className="lift absolute bottom-0 right-0 h-auto w-[64%] transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
        />
      </div>
    </div>
  ),
  marks: (
    <div className="feat-stage feat-orange h-[300px] sm:h-[400px] lg:h-full lg:min-h-[400px]">
      {/* Full width of the sheet from tablet up, so Score and Grade stay in view; it runs off the bottom. */}
      <div className="feat-window absolute left-4 top-5 w-[138%] transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:left-8 sm:right-0 sm:top-8 sm:w-auto">
        {/* The pin is placed in % of this box, so it is exactly the image's size. */}
        <div className="relative">
          <Image
            src="/product/marks-sheet.webp"
            alt="Marks entry for Weekly 08 Chemistry: 12 of 12 entered, live average 64.5%, with a mark being typed for roll 03"
            width={1364}
            height={1320}
            sizes="(min-width: 1024px) 620px, (min-width: 640px) 92vw, 138vw"
            className="h-auto w-full"
          />
          <Callout x={57.2} y={24} side="left">
            Class average, live
          </Callout>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f6f3ec] to-transparent" aria-hidden />
    </div>
  ),
  fees: (
    <div className="feat-stage feat-orange h-full px-4 pt-5 sm:px-7 sm:pt-7">
      <Image
        src="/product/fees-stats.webp"
        alt="October fees: ₹1,50,000 billed, ₹97,500 collected, ₹52,500 outstanding, 11 overdue"
        width={1496}
        height={266}
        sizes="(min-width: 1024px) 580px, 92vw"
        className="h-auto w-full"
      />
      {/* The top of the overdue list; the rest fades out. */}
      <div className="fade-b relative mt-3 aspect-[1496/700] overflow-hidden sm:mt-4">
        <Image
          src="/product/fees-overdue.webp"
          alt="The overdue list: each student’s invoice number, amount, due date, an Overdue tag and a WhatsApp reminder button"
          width={1496}
          height={1520}
          sizes="(min-width: 1024px) 580px, 92vw"
          className="absolute inset-x-0 top-0 h-auto w-full transition-transform duration-700 ease-out group-hover:-translate-y-1"
        />
      </div>
    </div>
  ),
  parents: (
    <div className="feat-stage feat-green flex h-full items-center justify-center px-5 py-7 sm:px-8 sm:py-9">
      {/* The whole phone is shown; the message it leads to overlaps its lower corner. */}
      <div className="w-full max-w-[380px]">
        <PhoneFrame className="ml-auto w-[64%]">
          <Image
            src="/product/results-phone.webp"
            alt="The results page a parent sees: Monthly 2 for Class XII, class average 67.4%, and the top three students"
            fill
            sizes="(min-width: 640px) 245px, 56vw"
            className="object-cover object-top"
          />
        </PhoneFrame>
        <WhatsAppChat className="relative z-10 -mt-[40%] w-[74%] transition-transform duration-500 ease-out group-hover:-translate-y-1.5" />
      </div>
    </div>
  ),
  reports: (
    <div className="feat-stage feat-green h-[230px] px-6 pt-6 sm:h-[300px] sm:px-8 sm:pt-8 md:h-full md:min-h-[260px] md:px-6 md:pt-6">
      <Image
        src="/product/report-card.webp"
        alt="A printed progress report: average 80.9%, grade A, class rank 5 of 20, attendance 10 of 11, with a score chart"
        width={1672}
        height={1173}
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 44vw, 84vw"
        className="fade-b h-auto w-full rounded-t-[6px] shadow-lift transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
      />
    </div>
  ),
};

function CardText({ c }: { c: Chapter }) {
  const { label, icon: Icon } = chapterMeta[c.id];
  const green = tone[c.id] === 'green';
  return (
    <>
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            green ? 'bg-green-tint text-green' : 'bg-brand-tint text-brand'
          }`}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden />
        </span>
        <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{label}</p>
      </div>
      <h3 className="mt-5 text-balance font-display text-[1.35rem] font-extrabold leading-[1.14] tracking-[-0.03em] text-ink sm:text-[1.6rem]">
        {c.title}
      </h3>
      <p className="mt-3 text-pretty text-[15px] leading-[1.6] text-ink-muted sm:text-[15.5px]">{c.text}</p>
    </>
  );
}

/* Desktop bento: attendance beside a wide marks card, then fees and report cards stacked beside a tall parents card. */
const span: Record<ChapterId, string> = {
  attendance: 'lg:col-span-5',
  marks: 'lg:col-span-7',
  fees: 'lg:col-span-7',
  parents: 'lg:col-span-5 lg:row-span-2',
  reports: 'lg:col-span-7',
};

const cardBase =
  'group w-full overflow-hidden rounded-[26px] border border-ink/[0.09] bg-white shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:border-ink/[0.15] hover:shadow-lift';

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="section">
      <div className="shell">
        <Reveal className="mx-auto max-w-[780px] text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-green-tint/70 px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-green shadow-[inset_0_0_0_1px_rgba(22,138,76,0.16)]">
            <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
            Features
          </p>
          <h2
            id="features-title"
            className="mt-5 text-balance font-display text-[2rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-ink sm:mt-6 sm:text-[2.8rem] sm:leading-[1.03] lg:text-[3.2rem]"
          >
            The five jobs of a tuition center’s day, in one place
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-balance text-[16.5px] leading-[1.6] text-ink-soft sm:text-[18px]">
            From the first batch at six to the last parent message at night, here is where Power My Tutor does the work.
          </p>
        </Reveal>

        <ul className="mt-11 grid gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-12">
          {day.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 2) * 90} className={`flex ${span[c.id]}`}>
              {c.id === 'reports' ? (
                /* Text beside the report from tablet up. */
                <div className={`${cardBase} md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]`}>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <CardText c={c} />
                  </div>
                  <div className="p-3 pt-0 md:pl-0 md:pt-3">{visuals[c.id]}</div>
                </div>
              ) : (
                <div className={`${cardBase} flex flex-col`}>
                  <div className="p-6 pb-0 sm:p-8 sm:pb-0">
                    <CardText c={c} />
                  </div>
                  <div className="mt-6 flex-1 p-3 pt-0 sm:mt-7">{visuals[c.id]}</div>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
