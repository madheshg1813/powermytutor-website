import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Building2,
  CalendarCheck,
  CalendarRange,
  ChartLine,
  ChevronDown,
  ClipboardPen,
  FileText,
  GraduationCap,
  IndianRupee,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Plus,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  Trophy,
  UserPlus,
  UserRound,
  Users,
  type LucideIcon,
} from 'lucide-react';

/*
 * The app's dashboard, drawn in HTML and SVG instead of a screenshot. It copies the app's own markup
 * (power-my-tutor: Sidebar, Topbar, DashboardView, StatCard, LineChart) as it renders in a 1440 × 900
 * window, with the sample center "Apex Science Institute". The whole screen is laid out at that fixed
 * size and scaled to the width of its frame, so it looks the same on every screen. Responsive
 * prefixes (sm:, lg:…) are left out on purpose: inside the canvas it is always a 1440 px window.
 */

const W = 1440;
const H = 900;

const NAV_MAIN: [LucideIcon, string][] = [
  [LayoutDashboard, 'Dashboard'],
  [Users, 'Students'],
  [Layers, 'Classes & batches'],
  [GraduationCap, 'Exams'],
  [ClipboardPen, 'Marks entry'],
  [Trophy, 'Results'],
  [CalendarCheck, 'Attendance'],
  [IndianRupee, 'Fees'],
  [ChartLine, 'Performance'],
  [Lightbulb, 'Insights'],
  [FileText, 'Reports'],
];

const NAV_SETUP: [LucideIcon, string][] = [
  [BookOpen, 'Subjects'],
  [UserRound, 'Teachers'],
  [CalendarRange, 'Academic years'],
  [Settings, 'Settings'],
];

const STATS = [
  { label: 'Active students', value: '32', sub: '3 batches · 2 classes' },
  { label: 'Exams with results', value: '22/24', sub: '2 upcoming' },
  { label: 'Center average', value: '69.2%', delta: -0.4, sub: 'Last 30 days vs earlier' },
  { label: 'Pass rate', value: '100%', sub: 'Pass mark 35%' },
];

// Class XI, the 11 completed exams of the year (sample data).
const TREND = {
  labels: ['3 Aug', '', '27 Aug', '', '8 Sep', '', '28 Sep', '', '14 Oct', '', '26 Oct'],
  average: [66.1, 73.1, 70.9, 77.7, 65.7, 69.5, 72.2, 68.6, 67.4, 66.3, 73.5],
  highest: [90, 90, 94, 100, 90, 98, 100, 94, 98, 98, 100],
  pass: 35,
};

const PLAN = [
  { name: 'Weekly tests', done: 16, planned: 40, note: 'Weekly topic checks', avg: 'Avg 68.3%' },
  { name: 'Monthly tests', done: 4, planned: 16, note: 'Monthly cumulative reviews', avg: 'Avg 71.1%' },
  { name: 'Mid-term', done: 2, planned: 4, note: 'Half-yearly comprehensive exam', avg: 'Avg 68.7%' },
  { name: 'Final', done: 0, planned: 4, note: 'Annual board simulation', avg: 'No results' },
];

export function DashboardScreen({ className = '', label }: { className?: string; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative select-none overflow-hidden ${className}`}
      style={{ aspectRatio: `${W} / ${H}`, containerType: 'inline-size' }}
    >
      <div
        className="absolute left-0 top-0 flex bg-cream-soft font-sans text-ink"
        // tan(atan2(a, b)) is a / b as a plain number: the frame's width over the canvas width.
        style={{ width: W, height: H, transformOrigin: '0 0', transform: `scale(tan(atan2(100cqw, ${W}px)))` }}
      >
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <div className="w-full flex-1 px-8 pt-8">
            <PageHeader />
            <div className="grid grid-cols-4 gap-4">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <TrendCard />
              <PlanCard />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <ListCard title="Needs attention" sub="Below 60% or dropping" action="All">
                <Avatar initials="HM" />
                <Person name="Harini Mehta" sub="Class XI" />
                <span className="text-right">
                  <span className="num block text-sm font-semibold text-danger">48%</span>
                  <Delta value={-1.8} />
                </span>
              </ListCard>
              <ListCard title="Most improved" sub="Last 3 exams vs the 3 before">
                <Avatar initials="AD" />
                <Person name="Aditi Das" sub="Class XII · now 74.7%" />
                <Delta value={12} />
              </ListCard>
              <ListCard title="Top performers" sub="Year average, all classes" action="Leaderboard">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-white">
                  1
                </span>
                <Person name="Varun Nair" sub="Class XI · 11 exams" />
                <span className="num text-sm font-semibold">94%</span>
              </ListCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="flex h-full w-[248px] shrink-0 flex-col border-r border-ink/10 bg-white">
      <div className="flex h-16 shrink-0 items-center px-5">
        <span className="flex items-center gap-2.5">
          {/* The brand mark itself; everything else on this screen is drawn. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static logo inside a scaled drawing */}
          <img src="/brand/logo-160.png" alt="" width={32} height={32} className="shrink-0" draggable={false} />
          <span className="font-display text-[15px] font-extrabold tracking-tight text-ink">Power My Tutor</span>
        </span>
      </div>
      <div className="flex-1 space-y-6 px-3 pb-4 pt-2">
        <div className="space-y-0.5">
          {NAV_MAIN.map(([Icon, label], i) => (
            <NavItem key={label} icon={Icon} label={label} active={i === 0} />
          ))}
        </div>
        <div>
          <div className="px-3.5 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Setup</div>
          <div className="space-y-0.5">
            {NAV_SETUP.map(([Icon, label]) => (
              <NavItem key={label} icon={Icon} label={label} />
            ))}
          </div>
        </div>
      </div>
      <div className="m-3 rounded-2xl border border-ink/10 bg-cream-soft/70 p-3.5">
        <div className="truncate text-[13px] font-semibold text-ink">Apex Science Institute</div>
        <div className="mt-0.5 text-[12px] text-ink-muted">22 of 24 exams have results</div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink/10">
          <div className="h-full rounded-full bg-green" style={{ width: `${(22 / 24) * 100}%` }} />
        </div>
        <div className="mt-3 border-t border-ink/10 pt-2.5">
          <div className="truncate text-[12px] text-ink-muted">prakash@apexscience.in</div>
          <div className="mt-1.5 text-[12px] font-semibold text-ink">Sign out</div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: LucideIcon; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full px-3.5 py-2 text-[13.5px] font-medium ${
        active ? 'bg-ink text-white' : 'text-ink-soft'
      }`}
    >
      <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? 'text-white' : 'text-ink-muted'}`} strokeWidth={1.7} />
      <span className="flex-1 truncate">{label}</span>
    </div>
  );
}

function Topbar() {
  return (
    <div className="border-b border-ink/10 bg-white/90">
      <div className="flex h-16 items-center gap-2 px-6">
        <div className="ml-1 flex h-10 min-w-0 max-w-md flex-1 items-center gap-2.5 rounded-full border border-ink/10 bg-cream-soft/60 px-4 text-[13px] text-ink-faint">
          <Search className="h-4 w-4" strokeWidth={1.8} />
          <span className="flex-1 truncate">Search students, exams, batches…</span>
          <span className="rounded-md border border-ink/10 bg-white px-1.5 py-0.5 font-mono text-[11px] text-ink-muted">Ctrl K</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Pill icon={CalendarRange} label="2026–27" />
          <Pill icon={Building2} label="Apex Science Institute" />
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft">
            <Bell className="h-[18px] w-[18px]" strokeWidth={1.8} />
            <span className="num absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
              2
            </span>
          </span>
          <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand px-4 text-[13px] font-semibold text-white shadow-sm">
            <Plus className="h-4 w-4" strokeWidth={2.2} />
            New
          </span>
        </div>
      </div>
    </div>
  );
}

function Pill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex h-9 max-w-[220px] items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/10 px-3 text-[13px] font-medium">
      <Icon className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.8} />
      <span className="truncate">{label}</span>
      <ChevronDown className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
    </span>
  );
}

function PageHeader() {
  const btn = 'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-semibold';
  return (
    <div className="mb-7 flex items-end justify-between gap-x-6">
      <div className="min-w-0">
        <div className="font-display text-[1.9rem] font-extrabold leading-tight tracking-tight text-ink">
          Good evening, <span className="text-green">Prakash</span>
        </div>
        <p className="mt-1 text-[15px] text-ink-muted">Apex Science Institute · Wed, 28 Oct 2026</p>
      </div>
      <div className="flex items-center gap-2">
        <span className={`${btn} border border-ink/15 bg-white text-ink`}>
          <UserPlus className="h-4 w-4" strokeWidth={1.8} />
          Add student
        </span>
        <span className={`${btn} border border-ink/15 bg-white text-ink`}>
          <GraduationCap className="h-4 w-4" strokeWidth={1.8} />
          Schedule exam
        </span>
        <span className={`${btn} bg-brand text-white shadow-sm`}>
          <ClipboardPen className="h-4 w-4" strokeWidth={1.8} />
          Enter marks
        </span>
      </div>
    </div>
  );
}

function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-3xl border border-ink/10 bg-white p-5 ${className}`}>{children}</div>;
}

function StatCard({ label, value, sub, delta }: { label: string; value: string; sub: string; delta?: number }) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-medium text-ink-muted">{label}</span>
        <ArrowUpRight className="h-4 w-4 text-ink-faint" strokeWidth={1.8} />
      </div>
      <div className="mt-2 flex items-baseline gap-x-2">
        <span className="num font-display text-[1.75rem] font-bold tracking-tight text-ink">{value}</span>
        {delta !== undefined && <Delta value={delta} />}
      </div>
      <div className="mt-0.5 truncate text-[13px] text-ink-muted">{sub}</div>
    </Card>
  );
}

function Delta({ value }: { value: number }) {
  const up = value > 0;
  const Icon = up ? TrendingUp : TrendingDown;
  return (
    <span className={`inline-flex items-center gap-0.5 whitespace-nowrap text-[12px] font-semibold ${up ? 'text-green' : 'text-danger'}`}>
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {up ? '+' : '−'}
      {Math.abs(value)} pts
    </span>
  );
}

function CardHeader({ title, sub, action }: { title: string; sub: string; action?: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <div className="font-display text-lg font-bold tracking-tight text-ink">{title}</div>
        <p className="mt-0.5 text-[13px] text-ink-muted">{sub}</p>
      </div>
      {action && (
        <span className="inline-flex shrink-0 items-center gap-0.5 text-[13px] font-semibold text-ink">
          {action}
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      )}
    </div>
  );
}

function TrendCard() {
  return (
    <Card className="col-span-2">
      <CardHeader title="Class average by exam" sub="11 completed exams this year" />
      <div className="mt-3">
        <div className="inline-flex rounded-full border border-ink/10 bg-white p-1">
          <span className="rounded-full bg-ink px-3 py-1 text-[12px] font-medium text-white">Class XI</span>
          <span className="rounded-full px-3 py-1 text-[12px] font-medium text-ink-muted">Class XII</span>
        </div>
      </div>
      <div className="mt-4">
        <TrendChart />
        <div className="mt-2 flex items-center gap-x-4 text-[12px] text-ink-muted">
          <LegendItem label="Class average" />
          <LegendItem label="Highest score" dashed />
        </div>
      </div>
    </Card>
  );
}

function LegendItem({ label, dashed = false }: { label: string; dashed?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="16" height="4" aria-hidden>
        <line x1="1" x2="15" y1="2" y2="2" stroke={dashed ? '#A8A29E' : '#1C1917'} strokeWidth="2" strokeLinecap="round" strokeDasharray={dashed ? '3 3' : undefined} />
      </svg>
      {label}
    </span>
  );
}

/** Same geometry as the app's LineChart (height 240, its padding and 30–100 scale) at this card's width. */
function TrendChart() {
  const width = 704;
  const height = 240;
  const pad = { top: 16, right: 40, bottom: 26, left: 34 };
  const [lo, hi] = [30, 100];
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const n = TREND.average.length;
  const x = (i: number) => pad.left + (i / (n - 1)) * innerW;
  const y = (v: number) => pad.top + innerH - ((v - lo) / (hi - lo)) * innerH;
  const path = (values: number[]) => values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const last = TREND.average[n - 1];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="block h-auto w-full" aria-hidden>
      {[40, 60, 80, 100].map((t) => (
        <g key={t}>
          <line x1={pad.left} x2={width - pad.right} y1={y(t)} y2={y(t)} stroke="#EAE4DA" strokeWidth={1} />
          <text x={pad.left - 8} y={y(t)} dy="0.32em" textAnchor="end" className="num fill-ink-muted text-[11px]">
            {t}
          </text>
        </g>
      ))}
      <line x1={pad.left} x2={width - pad.right} y1={y(TREND.pass)} y2={y(TREND.pass)} stroke="#B42318" strokeOpacity={0.45} strokeWidth={1} strokeDasharray="3 4" />
      <text x={width - pad.right + 4} y={y(TREND.pass)} dy="0.32em" className="fill-ink-muted text-[10px]">
        Pass
      </text>
      {TREND.labels.map((l, i) =>
        l ? (
          <text key={l} x={x(i)} y={height - 6} textAnchor="middle" className="fill-ink-muted text-[11px]">
            {l}
          </text>
        ) : null,
      )}
      <path d={path(TREND.highest)} fill="none" stroke="#A8A29E" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" strokeDasharray="5 5" />
      <path d={path(TREND.average)} fill="none" stroke="#1C1917" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      {TREND.average.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r={3.5} fill="#1C1917" stroke="#fff" strokeWidth={2} />
      ))}
      <text x={x(n - 1) + 8} y={y(last)} dy="0.32em" className="num fill-ink text-[11px] font-semibold">
        {Math.round(last)}%
      </text>
    </svg>
  );
}

function PlanCard() {
  return (
    <Card>
      <CardHeader title="Exam plan" sub="Done vs planned, 2026–27" action="Edit" />
      <div className="mt-5 space-y-5">
        {PLAN.map((g) => (
          <div key={g.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-2">
              <span className="text-sm font-semibold text-ink">{g.name}</span>
              <span className="num text-[13px] text-ink-muted">
                <span className="font-semibold text-ink">{g.done}</span> / {g.planned}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.07]">
              <div className="h-full rounded-full bg-ink" style={{ width: `${(g.done / g.planned) * 100}%` }} />
            </div>
            <div className="mt-1.5 flex justify-between text-[12px] text-ink-muted">
              <span>{g.note}</span>
              <span className="num">{g.avg}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/** A dashboard list card with its first row; the window cuts off below it, as in the app at 900 px tall. */
function ListCard({ title, sub, action, children }: { title: string; sub: string; action?: string; children: React.ReactNode }) {
  return (
    <Card className="min-h-[220px]">
      <CardHeader title={title} sub={sub} action={action} />
      <div className="mt-3 flex items-center gap-3 py-2.5">{children}</div>
    </Card>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-cream-soft text-[11px] font-semibold text-ink-soft">
      {initials}
    </span>
  );
}

function Person({ name, sub }: { name: string; sub: string }) {
  return (
    <span className="min-w-0 flex-1">
      <span className="block truncate text-sm font-medium text-ink">{name}</span>
      <span className="block text-[12px] text-ink-muted">{sub}</span>
    </span>
  );
}
