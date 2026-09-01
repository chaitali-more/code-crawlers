import { Suspense } from 'react';
import PageComponent from '@/src/pages/ServicesPage';

export const metadata = {
  title: "Our Services | Web Design, App Dev, Hosting & SEO",
  description: "Comprehensive digital services: Web Design, Mobile Apps, Cloud Hosting, and SEO performance marketing.",
  alternates: {
    canonical: "https://www.codecrawlers.in/services",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
