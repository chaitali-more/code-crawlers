import { Suspense } from 'react';
import PageComponent from '@/src/pages/AccutechCaseStudyPage';

export const metadata = {
  title: "Accutech Labels Case Study | CodeCrawlers",
  description: "Case study of Accutech Labels digital transformation from traditional to web business.",
  alternates: {
    canonical: "https://www.codecrawlers.in/accutechlabels-case-study-traditional-to-web-business",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
