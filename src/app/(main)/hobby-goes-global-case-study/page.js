import { Suspense } from 'react';
import PageComponent from '@/src/pages/KiiaraCaseStudyPage';

export const metadata = {
  title: "Kiiara Case Study | Hobby Goes Global | CodeCrawlers",
  description: "Case study of Kiiara transforming a creative passion into a global web enterprise.",
  alternates: {
    canonical: "https://www.codecrawlers.in/hobby-goes-global-case-study",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
