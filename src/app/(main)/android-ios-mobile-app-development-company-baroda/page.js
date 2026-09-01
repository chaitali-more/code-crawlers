import { Suspense } from 'react';
import PageComponent from '@/src/pages/services/MobileAppsDetail';

export const metadata = {
  title: "Android & iOS Mobile App Development Company in Vadodara",
  description: "Native & Flutter cross-platform mobile app development services in Vadodara for iOS and Android.",
  alternates: {
    canonical: "https://www.codecrawlers.in/android-ios-mobile-app-development-company-baroda",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
