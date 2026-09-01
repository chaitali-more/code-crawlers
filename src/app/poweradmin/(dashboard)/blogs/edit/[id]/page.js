import { Suspense } from 'react';
import PageComponent from '@/src/Poweradmin/Pages/Blog/BlogForm';

export const metadata = {
  title: "Edit Blog Post | Poweradmin",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
