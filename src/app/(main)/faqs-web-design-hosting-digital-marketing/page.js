import { Suspense } from 'react';
import PageComponent from '@/src/pages/FaqPage';

export const metadata = {
  title: "Frequently Asked Questions | CodeCrawlers",
  description: "Answers to common questions about web design, app development, web hosting, and digital marketing.",
  alternates: {
    canonical: "https://www.codecrawlers.in/faqs-web-design-hosting-digital-marketing",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
