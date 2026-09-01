import { Suspense } from 'react';
import NotFoundPage from '@/src/pages/NotFoundPage';

export const metadata = {
  title: 'Page Not Found | CodeCrawlers',
};

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundPage />
    </Suspense>
  );
}
