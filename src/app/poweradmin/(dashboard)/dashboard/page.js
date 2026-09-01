import { Suspense } from 'react';
import PageComponent from '@/src/Poweradmin/Pages/Dashboard/Dashboard';

export const metadata = {
  title: "Dashboard | Poweradmin",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
