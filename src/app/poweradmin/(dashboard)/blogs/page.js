import { Suspense } from 'react';
import PageComponent from '@/src/Poweradmin/Pages/Blog/BlogList';

export const metadata = {
  title: "Manage Blogs | Poweradmin",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
