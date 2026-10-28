import { Capabilities } from '@/components/sections/Capabilities';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Parents } from '@/components/sections/Parents';
import { Pricing } from '@/components/sections/Pricing';
import { ProductTour } from '@/components/sections/ProductTour';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { faqs, plans } from '@/lib/content';
import { site } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#org`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/brand/logo-512.png`,
    },
    { '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: site.url, publisher: { '@id': `${site.url}/#org` } },
    {
      '@type': 'SoftwareApplication',
      name: site.name,
      url: site.appUrl,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      description: site.description,
      publisher: { '@id': `${site.url}/#org` },
      offers: plans.map((p) => ({
        '@type': 'Offer',
        name: p.name,
        price: p.monthly,
        priceCurrency: 'USD',
        url: site.signupUrl,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProductTour />
        <Capabilities />
        <Parents />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
