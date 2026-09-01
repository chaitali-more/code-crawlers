import { Suspense } from 'react';
import PageComponent from '@/src/pages/BlogDetailPage';

export const metadata = {
  title: "Blog Article | CodeCrawlers",
  description: "Read detailed article on web technology, digital strategy, and business growth.",
  alternates: {
    canonical: "https://www.codecrawlers.in/blogs",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
