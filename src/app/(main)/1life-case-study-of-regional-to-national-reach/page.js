import { Suspense } from 'react';
import PageComponent from '@/src/pages/OneLifeCaseStudyPage';

export const metadata = {
  title: "1Life Case Study | Regional to National Reach | CodeCrawlers",
  description: "Case study of 1Life expanding from regional impact to national digital reach.",
  alternates: {
    canonical: "https://www.codecrawlers.in/1life-case-study-of-regional-to-national-reach",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
