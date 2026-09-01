import { Suspense } from 'react';
import PageComponent from '@/src/pages/SitemapPage';

export const metadata = {
  title: "HTML Sitemap | CodeCrawlers Vadodara",
  description: "Sitemap for navigating all pages and services on CodeCrawlers.",
  alternates: {
    canonical: "https://www.codecrawlers.in/sitemap",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
