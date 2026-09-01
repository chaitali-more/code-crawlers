import ProtectedRoute from '@/src/Poweradmin/components/ProtectedRoute';
import PoweradminLayout from '@/src/Poweradmin/layout/PoweradminLayout';

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <PoweradminLayout>{children}</PoweradminLayout>
    </ProtectedRoute>
  );
}
