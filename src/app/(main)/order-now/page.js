import { Suspense } from 'react';
import PageComponent from '@/src/pages/OrderNowPage';

export const metadata = {
  title: "Order Web Hosting Services | CodeCrawlers",
  description: "Order custom web hosting, VPS, and server packages online.",
  alternates: {
    canonical: "https://www.codecrawlers.in/order-now",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
