import { Suspense } from 'react';
import PageComponent from '@/src/pages/AboutPage';

export const metadata = {
  title: "About Us | Web Development & IT Solutions Company in Vadodara",
  description: "Learn about CodeCrawlers, a premier IT web design and mobile app development company in Vadodara.",
  alternates: {
    canonical: "https://www.codecrawlers.in/about-web-development-company-baroda",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
