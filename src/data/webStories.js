import { getImgSrc } from "../utils/image";
import seoStrategyImg        from "../assets/images/SEO-strategy-Vadodara-content-marketing.png";
import webDesignImg           from "../assets/images/web-design-principles-Baroda-user-experience.png";
import websiteOptimImg        from "../assets/images/website-optimization-Vadodara-performance-growth.png";
import mobileAppImg           from "../assets/images/mobile-app-solutions-Baroda-business-growth.png";
import hostingImg             from "../assets/images/hosting-services-Vadodara-secure-servers.png";
import websiteAuditImg        from "../assets/images/website-audit-Baroda-technical-analysis.png";

export const bannerData = {
  title: "Web Stories",
  subtitle: "Explore visual guides and expert insights on search optimization, modern web architecture, cloud infrastructure, and mobile app design from CodeCrawlers.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Web Stories" }
  ]
};

export const introData = {
  title: "Visual Guides on SEO, Web Development, Cloud & Mobile Software",
  badge: "Visual Learning",
  description: "Accelerate your digital growth with actionable visual stories curated by CodeCrawlers software architects and digital strategists. Learn key design principles, cloud hosting best practices, and search optimization frameworks designed to help modern businesses succeed."
};

export const webStories = [
  {
    id: 1,
    title: "Elevating Search Visibility with Data-Driven SEO",
    image: getImgSrc(seoStrategyImg),
    url: "https://webstories.codecrawlers.in/?web-story=seo-experts-social-media-marketing-company-vadodara",
    category: "SEO",
    accentColor: "#0284c7",
    description: "Learn how CodeCrawlers targeted search engine optimization transforms search rankings and drives organic business reach."
  },
  {
    id: 2,
    title: "Core Principles of Modern Web UX Design",
    image: getImgSrc(webDesignImg),
    url: "https://webstories.codecrawlers.in/?post_type=web-story&p=72",
    category: "Web Design",
    accentColor: "#0284c7",
    description: "Discover modern design systems, typography hierarchy, and UI patterns that maximize user conversion."
  },
  {
    id: 3,
    title: "Maximizing Page Speed & Web Vitals Performance",
    image: getImgSrc(websiteOptimImg),
    url: "https://webstories.codecrawlers.in/?post_type=web-story&p=110",
    category: "Optimization",
    accentColor: "#0284c7",
    description: "Explore cache strategies, asset compression, and server configurations that yield sub-second response times."
  },
  {
    id: 4,
    title: "Flutter vs Native iOS & Android Development",
    image: getImgSrc(mobileAppImg),
    url: "https://webstories.codecrawlers.in/?post_type=web-story&p=146",
    category: "Mobile Apps",
    accentColor: "#0284c7",
    description: "Understand cross-platform Flutter benefits vs native Swift/Kotlin development for business products."
  },
  {
    id: 5,
    title: "Managed VPS Server Hosting & Infrastructure Security",
    image: getImgSrc(hostingImg),
    url: "https://webstories.codecrawlers.in/?post_type=web-story&p=329",
    category: "Web Hosting",
    accentColor: "#0284c7",
    description: "Learn how dedicated cloud resources and proactive server monitoring ensure 99.9% uptime."
  },
  {
    id: 6,
    title: "Turn Traffic Gaps Into Leads with a Technical Website Audit",
    image: getImgSrc(websiteAuditImg),
    url: "https://webstories.codecrawlers.in/?post_type=web-story&p=6",
    category: "Marketing",
    accentColor: "#0284c7",
    description: "Uncover layout bottlenecks, crawl errors, and speed opportunities with CodeCrawlers website health audits."
  }
];

