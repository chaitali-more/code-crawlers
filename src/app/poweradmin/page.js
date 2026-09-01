import { Suspense } from 'react';
import SignIn from '@/src/Poweradmin/Pages/SignIn/SignIn';

export const metadata = {
  title: 'Poweradmin Sign In | CodeCrawlers',
};

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignIn />
    </Suspense>
  );
}
