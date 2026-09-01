import { Suspense } from 'react';
import PageComponent from '@/src/Poweradmin/Pages/ChangePassword/ChangePassword';

export const metadata = {
  title: "Change Password | Poweradmin",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
