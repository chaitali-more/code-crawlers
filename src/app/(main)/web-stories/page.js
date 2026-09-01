import { Suspense } from 'react';
import PageComponent from '@/src/pages/WebStoriesPage';

export const metadata = {
  title: "Visual Web Stories | CodeCrawlers Vadodara",
  description: "Explore visual web stories highlighting our services, case studies, and insights.",
  alternates: {
    canonical: "https://www.codecrawlers.in/web-stories",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
