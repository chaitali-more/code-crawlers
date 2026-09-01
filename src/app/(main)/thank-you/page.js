import { Suspense } from 'react';
import PageComponent from '@/src/pages/ThankYouPage';

export const metadata = {
  title: "Thank You | CodeCrawlers",
  description: "Thank you for getting in touch with CodeCrawlers.",
  alternates: {
    canonical: "https://www.codecrawlers.in/thank-you",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
