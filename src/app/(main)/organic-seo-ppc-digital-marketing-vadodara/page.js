import { Suspense } from 'react';
import PageComponent from '@/src/pages/services/DigitalMarketingDetail';

export const metadata = {
  title: "Organic SEO & Digital Marketing Company in Vadodara",
  description: "Drive traffic and growth with organic SEO, PPC, and digital marketing services in Vadodara.",
  alternates: {
    canonical: "https://www.codecrawlers.in/organic-seo-ppc-digital-marketing-vadodara",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
