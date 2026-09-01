import { Suspense } from 'react';
import ForgotPassword from '@/src/Poweradmin/Pages/ForgotPassword/ForgotPassword';

export const metadata = {
  title: 'Forgot Password | Poweradmin',
};

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ForgotPassword />
    </Suspense>
  );
}
