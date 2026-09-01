import { Suspense } from 'react';
import PageComponent from '@/src/pages/services/WebDesignDetail';

export const metadata = {
  title: "Responsive Web Design Company in Vadodara | Custom Website Design",
  description: "Custom responsive web design services in Vadodara tailored for corporate websites, e-commerce, and portals.",
  alternates: {
    canonical: "https://www.codecrawlers.in/responsive-website-designing-company-vadodara",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
