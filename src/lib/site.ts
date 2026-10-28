/** One source of truth for the site's name, addresses and navigation. */
export const site = {
  name: 'Power My Tutor',
  url: 'https://powermytutor.com',
  appUrl: 'https://app.powermytutor.com',
  signupUrl: 'https://app.powermytutor.com/signup',
  loginUrl: 'https://app.powermytutor.com/login',
  title: 'Tuition Center Management Software | Power My Tutor',
  description:
    'Run your tuition center in one app: students, batches, attendance, marks, fees and report cards, with results parents can check on their phone. From $9 a month.',
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'For parents', href: '#parents' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
} as const;
