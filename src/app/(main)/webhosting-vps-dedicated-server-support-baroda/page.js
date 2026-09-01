import { Suspense } from 'react';
import PageComponent from '@/src/pages/TechnicalSupportPage';

export const metadata = {
  title: "Technical Support | Web Hosting & Server Help Vadodara",
  description: "24/7 technical support for web hosting, VPS, and dedicated servers.",
  alternates: {
    canonical: "https://www.codecrawlers.in/webhosting-vps-dedicated-server-support-baroda",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
