import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

// The app's own type pairing: Sora for headings, Inter for everything else.
const sora = Sora({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-sora', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'The Power My Tutor dashboard' }],
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/og.jpg'] },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
