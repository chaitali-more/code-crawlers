import { getImgSrc } from "../utils/image";
import seoImg from "../assets/images/on-page-seo-Vadodara-website-optimization.png";
import socialImg from "../assets/images/social-media-services-Baroda-online-branding.png";
import analyticsImg from "../assets/images/analytics-setup-Vadodara-performance-tracking.png";

export const bannerData = {
  title: "Digital Marketing & Performance SEO",
  subtitle: "Dominate Google search results with <strong>CodeCrawlers organic SEO</strong>, targeted <strong>PPC campaigns</strong>, and strategic <strong>social media marketing</strong> in <strong>Vadodara</strong>.",
  breadcrumbs: [
    { label: "Services", href: "/services" },
    { label: "Digital Marketing" }
  ]
};

export const subServices = [
  {
    id: "organic-seo",
    num: "01",
    title: "Organic SEO & Search Dominance",
    subtitle: "Data-Driven Search Engine Optimization",
    desc: "CodeCrawlers organic SEO framework boosts search visibility by optimizing technical site architecture, keyword intent, schema markup, and content authority to drive high-converting organic traffic.",
    features: [
      "Comprehensive site audit & competitor keyword intelligence",
      "Technical Web Vitals & mobile crawlability optimization",
      "On-page title, header, meta, and schema markup integration",
      "Content authority building & semantic keyword cluster mapping",
      "Google Search Console & Analytics 4 tracking setup",
      "Internal linking architecture & canonicalization fixes",
      "Structured data JSON-LD rich snippet integration",
      "Page speed optimization & server response caching",
      "Google Business Profile optimization & local map rankings",
      "High-authority backlink building & digital PR directory indexing",
      "Monthly performance dashboards tracking ranking velocity & conversions"
    ],
    image: getImgSrc(seoImg),
    width: 1502,
    height: 1002,
    glowColor: "bg-[#0284c7]/8",
    offsetBorder: "border-[#0284c7]/30"
  },
  {
    id: "social-media",
    num: "02",
    title: "Social Media Growth & Branding",
    subtitle: "Audience Engagement & Brand Authority",
    desc: "Build strong brand loyalty across LinkedIn, Instagram, Facebook, and Twitter with CodeCrawlers targeted content strategies, visual branding, and interactive social campaigns.",
    features: [
      "Custom brand positioning & content calendar strategy",
      "Target demographic & interest-based audience segmentation",
      "Engaging copy, custom banners, and high-impact carousel graphics",
      "Lead generation & brand awareness campaign execution",
      "Community management & proactive follower engagement",
      "Cross-channel asset promotion & viral graphic design",
      "Detailed social media analytics tracking reach, clicks & ROI"
    ],
    image: getImgSrc(socialImg),
    width: 1502,
    height: 1127,
    glowColor: "bg-[#0284c7]/8",
    offsetBorder: "border-[#0284c7]/30"
  },
  {
    id: "google-adwords",
    num: "03",
    title: "Google Ads & PPC Campaign Management",
    subtitle: "High-ROI Pay-Per-Click Marketing",
    desc: "Capture ready-to-buy leads instantly. CodeCrawlers engineers targeted Google Search, Display, and Performance Max campaigns optimized for maximum conversion rates at lower Cost-Per-Click (CPC).",
    features: [
      "Google Ads account configuration & conversion tracking",
      "Negative keyword filtering & search intent match type optimization",
      "High-converting landing page creation & A/B ad copy testing",
      "Geo-targeted local & international campaign structuring",
      "Budget allocation & automated bid strategy management",
      "Weekly Quality Score analysis to reduce ad spend waste",
      "Transparent monthly ROI & lead attribution reporting"
    ],
    image: getImgSrc(analyticsImg),
    width: 1500,
    height: 1000,
    glowColor: "bg-[#6366f1]/6",
    offsetBorder: "border-[#6366f1]/30"
  }
];

export const ctaData = {
  badge: "// FREE WEBSITE AUDIT",
  title: "Request Your CodeCrawlers SEO Audit",
  description: "Get a detailed, complimentary performance and search audit analyzing site speed, keyword gaps, and technical ranking opportunities.",
  ctaText: "Get Free SEO Audit",
  ctaLink: "/free-seo-performance-website-audit"
};

