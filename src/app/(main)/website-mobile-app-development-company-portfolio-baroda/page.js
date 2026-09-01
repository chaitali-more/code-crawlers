import { Suspense } from 'react';
import PageComponent from '@/src/pages/WorkPage';

export const metadata = {
  title: "Portfolio | Web & Mobile App Projects | CodeCrawlers",
  description: "Explore our portfolio of website designs, mobile apps, and enterprise solutions.",
  alternates: {
    canonical: "https://www.codecrawlers.in/website-mobile-app-development-company-portfolio-baroda",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
