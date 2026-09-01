import { Suspense } from 'react';
import PageComponent from '@/src/pages/WebHostingDetailsPage';

export const metadata = {
  title: "Web Hosting Details & Plans | CodeCrawlers",
  description: "Detailed plans and feature comparisons for web hosting and server packages.",
  alternates: {
    canonical: "https://www.codecrawlers.in/web-hosting-details",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
