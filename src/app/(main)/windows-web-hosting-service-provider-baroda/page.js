import { Suspense } from 'react';
import PageComponent from '@/src/pages/services/WebHostingDetail';

export const metadata = {
  title: "Windows & Linux Web Hosting Services in Vadodara | VPS & Dedicated Servers",
  description: "Reliable web hosting services in Vadodara, offering Windows, Linux, VPS, and Dedicated Server hosting.",
  alternates: {
    canonical: "https://www.codecrawlers.in/windows-web-hosting-service-provider-baroda",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
