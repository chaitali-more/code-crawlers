const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 1. Root Layout
const rootLayoutContent = `import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Website Design & Mobile App Development Company in Vadodara | CodeCrawlers",
  description: "CodeCrawlers is a web design and mobile app development company in Vadodara offering responsive websites, iOS & Android apps, web hosting, and SEO services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${geistSans.variable} \${geistMono.variable} h-full antialiased\`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'layout.js'), rootLayoutContent);

// 2. Main Site Layout
const mainDir = path.join(appDir, '(main)');
ensureDir(mainDir);

const mainLayoutContent = `import ClientAppLayout from "@/src/components/ClientAppLayout";

export default function MainLayout({ children }) {
  return <ClientAppLayout>{children}</ClientAppLayout>;
}
`;
fs.writeFileSync(path.join(mainDir, 'layout.js'), mainLayoutContent);

// Main pages configuration
const mainPages = [
  {
    route: '',
    component: '@/src/components/Home',
    title: 'Website Design & Mobile App Development Company in Vadodara',
    description: 'CodeCrawlers is a web design and mobile app development company in Vadodara offering responsive websites, iOS & Android apps, web hosting, and SEO services.',
    canonical: 'https://www.codecrawlers.in/'
  },
  {
    route: 'about-web-development-company-baroda',
    component: '@/src/pages/AboutPage',
    title: 'About Us | Web Development & IT Solutions Company in Vadodara',
    description: 'Learn about CodeCrawlers, a premier IT web design and mobile app development company in Vadodara.',
    canonical: 'https://www.codecrawlers.in/about-web-development-company-baroda'
  },
  {
    route: 'website-mobile-app-development-company-portfolio-baroda',
    component: '@/src/pages/WorkPage',
    title: 'Portfolio | Web & Mobile App Projects | CodeCrawlers',
    description: 'Explore our portfolio of website designs, mobile apps, and enterprise solutions.',
    canonical: 'https://www.codecrawlers.in/website-mobile-app-development-company-portfolio-baroda'
  },
  {
    route: 'services',
    component: '@/src/pages/ServicesPage',
    title: 'Our Services | Web Design, App Dev, Hosting & SEO',
    description: 'Comprehensive digital services: Web Design, Mobile Apps, Cloud Hosting, and SEO performance marketing.',
    canonical: 'https://www.codecrawlers.in/services'
  },
  {
    route: 'responsive-website-designing-company-vadodara',
    component: '@/src/pages/services/WebDesignDetail',
    title: 'Responsive Web Design Company in Vadodara | Custom Website Design',
    description: 'Custom responsive web design services in Vadodara tailored for corporate websites, e-commerce, and portals.',
    canonical: 'https://www.codecrawlers.in/responsive-website-designing-company-vadodara'
  },
  {
    route: 'android-ios-mobile-app-development-company-baroda',
    component: '@/src/pages/services/MobileAppsDetail',
    title: 'Android & iOS Mobile App Development Company in Vadodara',
    description: 'Native & Flutter cross-platform mobile app development services in Vadodara for iOS and Android.',
    canonical: 'https://www.codecrawlers.in/android-ios-mobile-app-development-company-baroda'
  },
  {
    route: 'windows-web-hosting-service-provider-baroda',
    component: '@/src/pages/services/WebHostingDetail',
    title: 'Windows & Linux Web Hosting Services in Vadodara | VPS & Dedicated Servers',
    description: 'Reliable web hosting services in Vadodara, offering Windows, Linux, VPS, and Dedicated Server hosting.',
    canonical: 'https://www.codecrawlers.in/windows-web-hosting-service-provider-baroda'
  },
  {
    route: 'organic-seo-ppc-digital-marketing-vadodara',
    component: '@/src/pages/services/DigitalMarketingDetail',
    title: 'Organic SEO & Digital Marketing Company in Vadodara',
    description: 'Drive traffic and growth with organic SEO, PPC, and digital marketing services in Vadodara.',
    canonical: 'https://www.codecrawlers.in/organic-seo-ppc-digital-marketing-vadodara'
  },
  {
    route: 'contact-webdesign-mobileapp-socialmedia-marketing-baroda',
    component: '@/src/pages/ContactPage',
    title: 'Contact Us | CodeCrawlers Vadodara',
    description: 'Get in touch with CodeCrawlers for web design, app development, hosting, and SEO inquiries.',
    canonical: 'https://www.codecrawlers.in/contact-webdesign-mobileapp-socialmedia-marketing-baroda'
  },
  {
    route: 'webhosting-vps-dedicated-server-support-baroda',
    component: '@/src/pages/TechnicalSupportPage',
    title: 'Technical Support | Web Hosting & Server Help Vadodara',
    description: '24/7 technical support for web hosting, VPS, and dedicated servers.',
    canonical: 'https://www.codecrawlers.in/webhosting-vps-dedicated-server-support-baroda'
  },
  {
    route: 'faqs-web-design-hosting-digital-marketing',
    component: '@/src/pages/FaqPage',
    title: 'Frequently Asked Questions | CodeCrawlers',
    description: 'Answers to common questions about web design, app development, web hosting, and digital marketing.',
    canonical: 'https://www.codecrawlers.in/faqs-web-design-hosting-digital-marketing'
  },
  {
    route: 'web-stories',
    component: '@/src/pages/WebStoriesPage',
    title: 'Visual Web Stories | CodeCrawlers Vadodara',
    description: 'Explore visual web stories highlighting our services, case studies, and insights.',
    canonical: 'https://www.codecrawlers.in/web-stories'
  },
  {
    route: 'terms-and-conditions',
    component: '@/src/pages/TermsPage',
    title: 'Terms & Conditions | CodeCrawlers',
    description: 'Terms and conditions for using CodeCrawlers services and website.',
    canonical: 'https://www.codecrawlers.in/terms-and-conditions'
  },
  {
    route: 'sitemap',
    component: '@/src/pages/SitemapPage',
    title: 'HTML Sitemap | CodeCrawlers Vadodara',
    description: 'Sitemap for navigating all pages and services on CodeCrawlers.',
    canonical: 'https://www.codecrawlers.in/sitemap'
  },
  {
    route: 'accutechlabels-case-study-traditional-to-web-business',
    component: '@/src/pages/AccutechCaseStudyPage',
    title: 'Accutech Labels Case Study | CodeCrawlers',
    description: 'Case study of Accutech Labels digital transformation from traditional to web business.',
    canonical: 'https://www.codecrawlers.in/accutechlabels-case-study-traditional-to-web-business'
  },
  {
    route: '1life-case-study-of-regional-to-national-reach',
    component: '@/src/pages/OneLifeCaseStudyPage',
    title: '1Life Case Study | Regional to National Reach | CodeCrawlers',
    description: 'Case study of 1Life expanding from regional impact to national digital reach.',
    canonical: 'https://www.codecrawlers.in/1life-case-study-of-regional-to-national-reach'
  },
  {
    route: 'hobby-goes-global-case-study',
    component: '@/src/pages/KiiaraCaseStudyPage',
    title: 'Kiiara Case Study | Hobby Goes Global | CodeCrawlers',
    description: 'Case study of Kiiara transforming a creative passion into a global web enterprise.',
    canonical: 'https://www.codecrawlers.in/hobby-goes-global-case-study'
  },
  {
    route: 'order-now',
    component: '@/src/pages/OrderNowPage',
    title: 'Order Web Hosting Services | CodeCrawlers',
    description: 'Order custom web hosting, VPS, and server packages online.',
    canonical: 'https://www.codecrawlers.in/order-now'
  },
  {
    route: 'web-hosting-details',
    component: '@/src/pages/WebHostingDetailsPage',
    title: 'Web Hosting Details & Plans | CodeCrawlers',
    description: 'Detailed plans and feature comparisons for web hosting and server packages.',
    canonical: 'https://www.codecrawlers.in/web-hosting-details'
  },
  {
    route: 'thank-you',
    component: '@/src/pages/ThankYouPage',
    title: 'Thank You | CodeCrawlers',
    description: 'Thank you for getting in touch with CodeCrawlers.',
    canonical: 'https://www.codecrawlers.in/thank-you'
  },
  {
    route: 'blogs',
    component: '@/src/pages/BlogsPage',
    title: 'Latest Blogs & Tech Insights | CodeCrawlers',
    description: 'Articles, insights, and guides on web design, app development, hosting, and SEO.',
    canonical: 'https://www.codecrawlers.in/blogs'
  },
  {
    route: 'blogs/[slug]',
    component: '@/src/pages/BlogDetailPage',
    title: 'Blog Article | CodeCrawlers',
    description: 'Read detailed article on web technology, digital strategy, and business growth.',
    canonical: 'https://www.codecrawlers.in/blogs'
  }
];

mainPages.forEach(({ route, component, title, description, canonical }) => {
  const dir = route ? path.join(mainDir, route) : mainDir;
  ensureDir(dir);
  const code = `import { Suspense } from 'react';
import PageComponent from '${component}';

export const metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  alternates: {
    canonical: ${JSON.stringify(canonical)},
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), code);
});

// Redirect routes
const redirects = [
  { route: 'windows-and-linux-vps-server-hosting-gujarat', target: '/windows-web-hosting-service-provider-baroda' },
  { route: 'dedicated-server-hosting-cloud-hosting-vadodara', target: '/windows-web-hosting-service-provider-baroda' },
  { route: 'dedicated-server-hosting-company-vadodara', target: '/windows-web-hosting-service-provider-baroda' },
  { route: 'feer-seo-performance-website-audit', target: '/free-seo-performance-website-audit' },
  { route: 'fee-seo-performance-website-audit', target: '/free-seo-performance-website-audit' },
  { route: 'fee-seo-performance-web-site-audit', target: '/free-seo-performance-website-audit' },
  { route: 'free-audit', target: '/free-seo-performance-website-audit' },
  { route: 'free-seo-audit', target: '/free-seo-performance-website-audit' },
  { route: 'sitemap.html', target: '/sitemap' }
];

redirects.forEach(({ route, target }) => {
  const dir = path.join(mainDir, route);
  ensureDir(dir);
  const code = `import { redirect } from 'next/navigation';

export default function RedirectPage() {
  redirect(${JSON.stringify(target)});
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), code);
});

// 3. Standalone Free Audit Page
const auditDir = path.join(appDir, 'free-seo-performance-website-audit');
ensureDir(auditDir);
const auditCode = `import { Suspense } from 'react';
import FreeWebsiteAuditPage from '@/src/pages/FreeWebsiteAuditPage';

export const metadata = {
  title: 'Free SEO & Website Performance Audit | CodeCrawlers',
  description: 'Get a comprehensive free SEO and website performance audit for your business.',
  alternates: {
    canonical: 'https://www.codecrawlers.in/free-seo-performance-website-audit',
  },
};

export default function AuditPage() {
  return (
    <Suspense fallback={null}>
      <FreeWebsiteAuditPage />
    </Suspense>
  );
}
`;
fs.writeFileSync(path.join(auditDir, 'page.js'), auditCode);

// 4. Poweradmin Routes
const poweradminDir = path.join(appDir, 'poweradmin');
ensureDir(poweradminDir);

// Sign In
const signInCode = `import { Suspense } from 'react';
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
`;
fs.writeFileSync(path.join(poweradminDir, 'page.js'), signInCode);

// Forgot Password
const forgotPassDir = path.join(poweradminDir, 'forgot-password');
ensureDir(forgotPassDir);
const forgotPassCode = `import { Suspense } from 'react';
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
`;
fs.writeFileSync(path.join(forgotPassDir, 'page.js'), forgotPassCode);

// Dashboard Layout (Protected)
const dashboardGroupDir = path.join(poweradminDir, '(dashboard)');
ensureDir(dashboardGroupDir);
const dashboardLayoutCode = `import ProtectedRoute from '@/src/Poweradmin/components/ProtectedRoute';
import PoweradminLayout from '@/src/Poweradmin/layout/PoweradminLayout';

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <PoweradminLayout>{children}</PoweradminLayout>
    </ProtectedRoute>
  );
}
`;
fs.writeFileSync(path.join(dashboardGroupDir, 'layout.js'), dashboardLayoutCode);

// Dashboard Pages
const dashboardPages = [
  { route: 'dashboard', component: '@/src/Poweradmin/Pages/Dashboard/Dashboard', title: 'Dashboard | Poweradmin' },
  { route: 'blogs', component: '@/src/Poweradmin/Pages/Blog/BlogList', title: 'Manage Blogs | Poweradmin' },
  { route: 'blogs/new', component: '@/src/Poweradmin/Pages/Blog/BlogForm', title: 'New Blog Post | Poweradmin' },
  { route: 'blogs/edit/[id]', component: '@/src/Poweradmin/Pages/Blog/BlogForm', title: 'Edit Blog Post | Poweradmin' },
  { route: 'change-password', component: '@/src/Poweradmin/Pages/ChangePassword/ChangePassword', title: 'Change Password | Poweradmin' }
];

dashboardPages.forEach(({ route, component, title }) => {
  const dir = path.join(dashboardGroupDir, route);
  ensureDir(dir);
  const code = `import { Suspense } from 'react';
import PageComponent from '${component}';

export const metadata = {
  title: ${JSON.stringify(title)},
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), code);
});

// 5. NotFound Page (not-found.js)
const notFoundCode = `import { Suspense } from 'react';
import NotFoundPage from '@/src/pages/NotFoundPage';

export const metadata = {
  title: 'Page Not Found | CodeCrawlers',
};

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundPage />
    </Suspense>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'not-found.js'), notFoundCode);

console.log('App Router routes generated successfully with Suspense boundaries.');

