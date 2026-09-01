import { Suspense } from 'react';
import PageComponent from '@/src/components/Home';

export const metadata = {
  title: "Website Design & Mobile App Development Company in Vadodara",
  description: "CodeCrawlers is a web design and mobile app development company in Vadodara offering responsive websites, iOS & Android apps, web hosting, and SEO services.",
  alternates: {
    canonical: "https://www.codecrawlers.in/",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
