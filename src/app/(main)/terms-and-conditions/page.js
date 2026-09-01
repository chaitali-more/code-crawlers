import { Suspense } from 'react';
import PageComponent from '@/src/pages/TermsPage';

export const metadata = {
  title: "Terms & Conditions | CodeCrawlers",
  description: "Terms and conditions for using CodeCrawlers services and website.",
  alternates: {
    canonical: "https://www.codecrawlers.in/terms-and-conditions",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
