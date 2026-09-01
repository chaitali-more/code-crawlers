import { getImgSrc } from "../utils/image";
import designImg from "../assets/images/affordable-web-design-Baroda-corporate-solutions.jpg";
import ecommerceImg from "../assets/images/ecommerce-website-development-Vadodara-custom.jpg";
import customImg from "../assets/images/custom-web-applications-Baroda-enterprise-solutions.jpg";

export const bannerData = {
  title: "Website Design & Web Development",
  subtitle: "High-performance <strong>website design in Vadodara</strong> — bespoke corporate web portals, e-commerce storefronts, and custom React / Next.js web applications by <strong>CodeCrawlers</strong>.",
  breadcrumbs: [
    { label: "Services", href: "/services" },
    { label: "Website Design" }
  ]
};

export const subServices = [
  {
    id: "website-design",
    num: "01",
    title: "Custom Corporate Website Design",
    subtitle: "Responsive, Ultra-Fast & SEO-Driven Web Systems",
    desc: "Your website is your 24/7 digital headquarters. CodeCrawlers engineers mobile-responsive, lightning-fast, and search-optimized web platforms in Vadodara, Gujarat designed to convert visits into revenue.",
    features: [
      "Custom responsive layouts optimized for all device sizes",
      "Semantic HTML5 & Schema.org JSON-LD integration",
      "Sub-second page load times with Next.js SSR / SSG",
      "Custom UI/UX interactive Figma prototypes",
      "Lead generation forms, CRM connections & live chat integrations"
    ],
    image: getImgSrc(designImg),
    width: 1400,
    height: 933,
    glowColor: "bg-[#0284c7]/8",
    offsetBorder: "border-[#0284c7]/30"
  },
  {
    id: "ecommerce-development",
    num: "02",
    title: "E-Commerce Web Development",
    subtitle: "Online Stores, Payment Gateways & Inventory Engines",
    desc: "Scale your retail business with custom e-commerce web applications built by CodeCrawlers. We integrate seamless Indian (Razorpay/CCAvenue) and global (Stripe/PayPal) payment gateways with automated inventory controls.",
    features: [
      "Razorpay, CCAvenue, Stripe & PayPal payment gateway APIs",
      "Dynamic product filtering, search & multi-variant cataloging",
      "Bank-grade SSL security & automated checkout flows",
      "Instant WhatsApp & email order notifications with PDF invoicing",
      "Custom promotional coupon codes & customer account dashboards"
    ],
    image: getImgSrc(ecommerceImg),
    width: 1400,
    height: 933,
    glowColor: "bg-[#0284c7]/8",
    offsetBorder: "border-[#0284c7]/30"
  },
  {
    id: "custom-applications",
    num: "03",
    title: "Custom CMS & Web Applications",
    subtitle: "Tailored Admin Dashboards & Enterprise Workflows",
    desc: "Empower your team with intuitive custom content management systems and admin dashboards. CodeCrawlers builds bespoke web applications tailored to your business workflow without unnecessary bloatware.",
    features: [
      "Custom CodeCrawlers Admin Control Panel",
      "Rich text WYSIWYG editors with media asset management",
      "Role-based access controls (RBAC) & security logs",
      "Optimized MySQL / PostgreSQL database schema",
      "RESTful & GraphQL API connections for mobile app integration"
    ],
    image: getImgSrc(customImg),
    width: 1400,
    height: 933,
    glowColor: "bg-[#6366f1]/6",
    offsetBorder: "border-[#6366f1]/30"
  }
];

export const ctaData = {
  badge: "Build Your Website",
  title: "Ready to Transform Your Digital Presence with CodeCrawlers?",
  description: "Get in touch with our web engineering team in Vadodara for a free project consultation, design wireframe, and estimation.",
  ctaText: "Request Free Web Proposal",
  ctaLink: "/contact-webdesign-mobileapp-socialmedia-marketing-baroda"
};

