import {
  Building2,
  CalendarCheck,
  ClipboardList,
  Download,
  FileText,
  IndianRupee,
  KeyRound,
  Layers,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  PenLine,
  ShieldCheck,
  Smartphone,
  Trophy,
  Upload,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

/*
 * All words on the home page. Every claim here matches what the app does today; screenshots in
 * /public/product are real captures of the app with its fictional demo center (Apex Science Institute).
 */

export const trust: { icon: LucideIcon; text: string }[] = [
  { icon: ShieldCheck, text: 'Each center’s data kept separate' },
  { icon: KeyRound, text: 'Sign in with Google' },
  { icon: Download, text: 'Download a full backup any time' },
  { icon: LockKeyhole, text: 'Data kept even if your plan lapses' },
];

export interface TourItem {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

export const tour: TourItem[] = [
  {
    id: 'marks',
    icon: PenLine,
    label: 'Marks entry',
    title: 'Type a mark, press Enter',
    text: 'A keyboard-first sheet: Enter moves to the next student, A marks absent. Percentages, grades and the class average update as you type.',
    image: '/product/marks.webp',
    alt: 'Marks entry sheet for a Class XII chemistry weekly test, with marks, percentages and grades for each student',
  },
  {
    id: 'attendance',
    icon: CalendarCheck,
    label: 'Attendance',
    title: 'Attendance in a few taps',
    text: 'Everyone starts present. Tap the students who are absent, save, and message their parents on WhatsApp.',
    image: '/product/attendance.webp',
    alt: 'Attendance screen with today’s batches and a list of students marked present',
  },
  {
    id: 'fees',
    icon: IndianRupee,
    label: 'Fees',
    title: 'Know who has paid',
    text: 'Monthly invoices for every student, with billed, collected, outstanding and overdue at a glance. Invoices show your UPI ID.',
    image: '/product/fees.webp',
    alt: 'Fees screen showing October billed, collected, outstanding and overdue amounts with a list of invoices',
  },
  {
    id: 'students',
    icon: UserRound,
    label: 'Student profiles',
    title: 'Every student on one page',
    text: 'Scores against the class average, class rank, attendance and parent contact, with a progress message ready to send.',
    image: '/product/student.webp',
    alt: 'Student profile with average, class rank, highest score, attendance and a score-by-exam chart',
  },
  {
    id: 'reports',
    icon: FileText,
    label: 'Report cards',
    title: 'Report cards, ready to print',
    text: 'One page per student with scores, grades, a trend line and remarks. Print one student or a whole batch as PDF.',
    image: '/product/report-card.webp',
    alt: 'Printable progress report card with average, grade, class rank, attendance and a score chart',
  },
  {
    id: 'insights',
    icon: Lightbulb,
    label: 'Insights',
    title: 'See who needs help',
    text: 'Top students per class, students who are dropping or missing classes, and how each batch and teacher is doing.',
    image: '/product/insights.webp',
    alt: 'Insights screen with the top three students per class and a center leaderboard',
  },
];

export const capabilities: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: 'Classes and batches', text: 'Each batch has its own days, timing, teacher, room, seats and monthly fee.' },
  { icon: ClipboardList, title: 'Your own exam types', text: 'Weekly, slip, unit or mock tests. Plan how many and track what’s done.' },
  { icon: MessageCircle, title: 'WhatsApp to parents', text: 'Results, progress and absence messages are written for you. Check, then send.' },
  { icon: Smartphone, title: 'Made for phones too', text: 'A bottom tab bar on phones, so attendance and marks can be done in class.' },
  { icon: Upload, title: 'Bring your registers', text: 'Paste your student list or marks straight from Excel or Google Sheets.' },
  { icon: Trophy, title: 'Ranks worked out', text: 'Class ranks, most improved and top performers, updated after every test.' },
  { icon: Building2, title: 'More than one branch', text: 'Run every branch from one login. Each extra branch is $5 a month.' },
  { icon: Download, title: 'Exports and backups', text: 'Marks, students and rankings as CSV, and a full backup whenever you want.' },
];

/** The real pre-filled message the app builds on a student's profile (demo data). */
export const whatsappMessage = {
  parent: 'Deepa Gupta',
  lines: [
    'Hello Deepa Gupta, here is Tarun’s progress at Apex Science Institute:',
    '• Weekly 08 · Chemistry (26 Oct): 42/50',
    '• Mid-term · PCB (14 Oct): 168/200',
    '• Weekly 07 · Physics (14 Oct): 41/50',
    'Average this year: 80.9% · class rank 5 of 20.',
  ],
  time: '7:42 pm',
};

export const parentPoints = [
  'One link for every class and test, updated as you enter marks',
  'Each exam has a password, so parents see only their child’s batch',
  'Use your own address, like results.yourcenter.com',
];

export const steps = [
  { title: 'Sign in with Google', sub: 'One click' },
  { title: 'Pick a plan', sub: 'From $9 a month' },
  { title: 'Set up your center', sub: 'About two minutes' },
  { title: 'Add your students', sub: 'Paste the whole list' },
];

/* Keep in step with power-my-tutor/src/lib/plans.ts (prices are set up in Dodo Payments). */
export const plans = [
  { id: 'starter', name: 'Starter', monthly: 9, yearly: 90, students: 300, blurb: 'For a single tutor or a small center.', tag: '' },
  { id: 'growth', name: 'Growth', monthly: 19, yearly: 190, students: 1000, blurb: 'For established centers with several batches.', tag: 'Best for several batches' },
  { id: 'pro', name: 'Pro', monthly: 49, yearly: 490, students: null, blurb: 'For large centers. No student limit.', tag: '' },
] as const;

export const branchAddon = { monthly: 5, yearly: 50 };

export const included = [
  'Students, batches and attendance',
  'Exams, marks entry and report cards',
  'Fees and monthly invoices',
  'Results link for parents',
  'WhatsApp messages to parents',
  'CSV exports and full backups',
];

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is Power My Tutor for?',
    a: 'Tuition centers, coaching institutes, academies and test-prep centers, from a single tutor with a few batches to centers with several branches.',
  },
  {
    q: 'Is there a free trial?',
    a: 'No. Plans start at $9 a month and you choose one right after signing up. You can change plan or cancel any time from Settings → Billing.',
  },
  {
    q: 'What counts as an active student?',
    a: 'Any student marked active in your center. Students you mark inactive, for example after they leave, don’t count towards your plan’s limit.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Yes. It runs in the browser on any phone or laptop, with nothing to install. On a phone you get a bottom tab bar for Home, Students, Marks and Exams.',
  },
  {
    q: 'How do parents see results?',
    a: 'You share one results link. Parents enter the exam password you send them and see their child’s batch: marks, class average and rankings. They don’t need an account.',
  },
  {
    q: 'Can I bring my existing student list?',
    a: 'Yes. Copy the rows from Excel or Google Sheets and paste them into Bulk add. Marks can be pasted or imported from a CSV file in the same way.',
  },
  {
    q: 'Is my center’s data private?',
    a: 'Each center gets its own workspace, and the server only reads and writes the signed-in center’s data. You can download a full backup whenever you like.',
  },
  {
    q: 'What happens if I stop paying?',
    a: 'The app locks, but your data is kept. Restart your plan and everything is where you left it.',
  },
  {
    q: 'Can I run more than one branch?',
    a: 'Yes. Every plan includes one branch, and each extra branch costs $5 a month ($50 a year). Switch between branches from the top bar.',
  },
  {
    q: 'Which currency are prices in?',
    a: 'Prices are in US dollars. Paying yearly costs ten times the monthly price, so you get two months free.',
  },
];
