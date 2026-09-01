import { Suspense } from 'react';
import FreeWebsiteAuditPage from '@/src/pages/FreeWebsiteAuditPage';

export const metadata = {
  title: 'Free SEO & Website Performance Audit | CodeCrawlers',
  description: 'Get a comprehensive free SEO and website performance audit for your business.',
  alternates: {
    canonical: 'https://www.codecrawlers.in/free-seo-performance-website-audit',
  },
};

export default function AuditPage() {
  return (
    <Suspense fallback={null}>
      <FreeWebsiteAuditPage />
    </Suspense>
  );
}
