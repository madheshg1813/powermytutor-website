import {
  Building2,
  ClipboardList,
  Download,
  FileText,
  Layers,
  Lightbulb,
  Link2,
  ShieldCheck,
  Timer,
  Upload,
  UserRound,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

/*
 * All words on the home page. Every claim matches what the app does today. Screens in
 * /public/product are real captures of the app with its fictional sample center, Apex Science Institute.
 */

/** Hero checklist: each line is a part of the app that works today (no teacher or parent logins yet). */
export const heroPoints = [
  'Attendance & Performance Tracking',
  'Exam & Report Card Management',
  'Fee Invoices & WhatsApp Reminders',
  'Results Link for Parents',
];

/**
 * The strip under the hero. Product facts rather than customer counts: swap in real usage
 * numbers only once there are real ones to show.
 */
export const heroFacts: { icon: LucideIcon; value: string; label: string; tone: 'green' | 'brand' }[] = [
  { icon: Wallet, value: '$9/mo', label: 'Starting price', tone: 'green' },
  { icon: Timer, value: '2 min', label: 'To set up your center', tone: 'brand' },
  { icon: Link2, value: '1 link', label: 'Results for every parent', tone: 'green' },
  { icon: FileText, value: '1 click', label: 'Report cards for a batch', tone: 'brand' },
];

export type ChapterId = 'attendance' | 'marks' | 'fees' | 'parents' | 'reports';

export interface Chapter {
  id: ChapterId;
  time: string;
  moment: string;
  title: string;
  text: string;
}

/** A tuition center's day, from the first batch to the last parent message. */
export const day: Chapter[] = [
  {
    id: 'attendance',
    time: '6:00 AM',
    moment: 'Morning batch',
    title: 'Attendance before the first sum.',
    text: 'Everyone starts present. Tap the two who didn’t come and save. The app lines up a WhatsApp message for each of their parents; you check it and send.',
  },
  {
    id: 'marks',
    time: '5:30 PM',
    moment: 'Weekly test',
    title: 'Marks in as fast as you can type.',
    text: 'Type a mark and press Enter for the next student. Press A for absent. Percentages, grades and the class average update as you go.',
  },
  {
    id: 'fees',
    time: '7:00 PM',
    moment: 'Fee follow-up',
    title: 'Know who hasn’t paid, without the fee book.',
    text: 'Each month’s invoices are made for you, with your UPI ID on them. See billed, collected and overdue at a glance, and remind a parent on WhatsApp from the same list.',
  },
  {
    id: 'parents',
    time: '9:00 PM',
    moment: 'Parents ask',
    title: 'Parents check results. Your phone stays quiet.',
    text: 'Share one results link. Parents enter the exam password you sent and see their child’s batch: marks, class average and toppers. No app, no account.',
  },
  {
    id: 'reports',
    time: 'Term end',
    moment: 'Parent-teacher meeting',
    title: 'Report cards for the whole batch, in one click.',
    text: 'One page per student with scores, grades, a trend line and remarks. Print a single card or the whole batch as a PDF.',
  },
];

/** The real pre-filled message the app builds on a student's profile (sample data). */
export const whatsappMessage = {
  parent: 'Deepa Gupta',
  lines: [
    'Hello Deepa Gupta, here is Tarun’s progress at Apex Science Institute:',
    '• Weekly 08 · Chemistry (26 Oct): 42/50',
    '• Mid-term · PCB (14 Oct): 168/200',
    '• Weekly 07 · Physics (14 Oct): 41/50',
    'Average this year: 80.9% · class rank 5 of 20.',
  ],
  time: '9:04 pm',
};

export const extras: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: 'Classes and batches', text: 'Days, timing, teacher, room, seats and monthly fee for every batch.' },
  { icon: ClipboardList, title: 'Exam plans', text: 'Your own test types, from slip tests to mock exams, with a target for each.' },
  { icon: UserRound, title: 'Student profiles', text: 'Score trend against the class, rank, attendance and parent contact.' },
  { icon: Lightbulb, title: 'Insights', text: 'Who is slipping, who is missing class, and how each batch is doing.' },
  { icon: Upload, title: 'Bulk add', text: 'Paste your student list straight from Excel or Google Sheets.' },
  { icon: Building2, title: 'Branches', text: 'Run every branch from one login. Extra branches are $5 a month.' },
  { icon: Download, title: 'Exports and backups', text: 'CSV exports, and a full backup of your center whenever you want.' },
  { icon: ShieldCheck, title: 'Your data, kept apart', text: 'Each center has its own workspace. Data is kept even if a plan lapses.' },
];

export const startSteps = ['Sign in with Google', 'Pick a plan', 'Set up your center in two minutes'];

/* Keep in step with power-my-tutor/src/lib/plans.ts (prices are set up in Dodo Payments). */
export const plans = [
  { id: 'starter', name: 'Starter', monthly: 9, yearly: 90, students: 300, blurb: 'For a single tutor or a small center.', note: '' },
  { id: 'growth', name: 'Growth', monthly: 19, yearly: 190, students: 1000, blurb: 'For established centers with several batches.', note: 'Best for several batches' },
  { id: 'pro', name: 'Pro', monthly: 49, yearly: 490, students: null, blurb: 'For large centers. No student limit.', note: '' },
] as const;

export const branchAddon = { monthly: 5, yearly: 50 };

export const included = [
  'Attendance and batches',
  'Marks entry and exams',
  'Report cards',
  'Fees and invoices',
  'Results link for parents',
  'WhatsApp messages',
  'CSV exports and backups',
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
