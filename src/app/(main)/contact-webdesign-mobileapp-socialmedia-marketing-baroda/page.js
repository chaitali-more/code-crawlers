import { Suspense } from 'react';
import PageComponent from '@/src/pages/ContactPage';

export const metadata = {
  title: "Contact Us | CodeCrawlers Vadodara",
  description: "Get in touch with CodeCrawlers for web design, app development, hosting, and SEO inquiries.",
  alternates: {
    canonical: "https://www.codecrawlers.in/contact-webdesign-mobileapp-socialmedia-marketing-baroda",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
