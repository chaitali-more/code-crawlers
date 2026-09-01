import { Suspense } from 'react';
import PageComponent from '@/src/pages/BlogsPage';

export const metadata = {
  title: "Latest Blogs & Tech Insights | CodeCrawlers",
  description: "Articles, insights, and guides on web design, app development, hosting, and SEO.",
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
