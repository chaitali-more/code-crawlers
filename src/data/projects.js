import { Globe, Smartphone, ShoppingBag } from "lucide-react";
import { getImgSrc } from "../utils/image";
import rubaminVideo   from "../assets/videos/rubamin-website-design.mp4";
import alembicVideo   from "../assets/videos/alembic-video-webdesign.mp4";
import fujiVideo      from "../assets/videos/fuji-robotics-web-design.mp4";
import bookprathaVideo from "../assets/videos/bookpratha-ecommerce.mp4";
import quickCabVideo  from "../assets/videos/quick-cab-web-design.mp4";
import tclVideo       from "../assets/videos/tcl-web-design.mp4";
import absoluteVideo  from "../assets/videos/absolute-scale-web-design.mp4";
import technoVideo    from "../assets/videos/techno-chemicals-web-design.mp4";
import khatuVideo     from "../assets/videos/khatu-tmt-web-design.mp4";
import customLogo     from "../assets/videos/custom-logo-design.mp4";

// Mobile app images — all now available locally
import androidAppImg  from "../assets/images/Android-application-Vadodara-smart-solutions.png";
import iosAppImg      from "../assets/images/iOS-mobile-app-Baroda-user-friendly-design.png";
import flutterAppImg  from "../assets/images/Flutter-mobile-app-Vadodara-cross-platform-ui.png";
import hybridAppImg   from "../assets/images/hybrid-app-development-Baroda-scalable-apps.png";
import mobileEntImg   from "../assets/images/mobile-software-solutions-Vadodara-enterprise.png";
import vpsHostImg     from "../assets/images/VPS-hosting-Vadodara-high-speed-servers.png";

// Web design thumbnails — must be placed in public/assets/ on the server
const webThumb = (name) => `/assets/${name}`;

export const projects = [
  {
    id: 1,
    title: "Rubamin",
    location: "Vadodara, India",
    category: "Web Design",
    link: "https://www.rubamin.com/",
    webp: webThumb("search-engine-optimization-Vadodara-ranking-growth.webp"),
    png:  webThumb("search-engine-optimization-Vadodara-ranking-growth.png"),
    video: rubaminVideo,
    accent: "#0284c7",
    icon: Globe
  },
  {
    id: 3,
    title: "Alembic Pharmaceuticals",
    location: "Vadodara, India",
    category: "Web Design",
    link: "https://alembicpharmaceuticals.com/",
    webp: webThumb("responsive-design-Vadodara-modern-websites.webp"),
    png:  webThumb("responsive-design-Vadodara-modern-websites.png"),
    video: alembicVideo,
    accent: "#059669",
    icon: Globe
  },
  {
    id: 6,
    title: "Book Pratha E-Commerce",
    location: "Bhavnagar, India",
    category: "Web Design",
    link: "https://www.bookpratha.com/",
    webp: webThumb("domain-registration-Baroda-secure-services.webp"),
    png:  webThumb("domain-registration-Baroda-secure-services.png"),
    video: bookprathaVideo,
    accent: "#db2777",
    icon: ShoppingBag
  },
  {
    id: 4,
    title: "Absolute Scale",
    location: "Vadodara, India",
    category: "Web Design",
    link: "https://absolutescale.com/",
    webp: webThumb("custom-web-development-Baroda-tailored-solutions.webp"),
    png:  webThumb("custom-web-development-Baroda-tailored-solutions.png"),
    video: absoluteVideo,
    accent: "#7c3aed",
    icon: Globe
  },
  {
    id: 7,
    title: "Techno Chemicals",
    location: "Vadodara, India",
    category: "Web Design",
    link: "http://www.technochemicals.com/",
    webp: webThumb("web-hosting-Vadodara-reliable-servers.webp"),
    png:  webThumb("web-hosting-Vadodara-reliable-servers.png"),
    video: technoVideo,
    accent: "#d97706",
    icon: Globe
  },
  {
    id: 8,
    title: "Khatu TMT",
    location: "Vadodara, India",
    category: "Web Design",
    link: "https://khatutmt.com/",
    webp: webThumb("digital-marketing-Baroda-seo-ppc.webp"),
    png:  webThumb("digital-marketing-Baroda-seo-ppc.png"),
    video: khatuVideo,
    accent: "#0284c7",
    icon: Globe
  },
  {
    id: 2,
    title: "The Quick Cab",
    location: "Vadodara, India",
    category: "Web Design",
    link: "https://thequickcab.com/",
    webp: webThumb("mobile-app-development-Vadodara-ios-android.webp"),
    png:  webThumb("mobile-app-development-Vadodara-ios-android.png"),
    video: quickCabVideo,
    accent: "#0284c7",
    icon: Globe
  },
  {
    id: 9,
    title: "Tamboli Castings Limited",
    location: "Bhavnagar, India",
    category: "Web Design",
    link: "https://www.tambolicastingslimited.com/",
    webp: webThumb("corporate-branding-Vadodara-digital-identity.webp"),
    png:  webThumb("corporate-branding-Vadodara-digital-identity.png"),
    video: tclVideo,
    accent: "#0891b2",
    icon: Globe
  },
  {
    id: 5,
    title: "Fuji Robotics",
    location: "Ahmedabad, India",
    category: "Web Design",
    link: "https://www.fujiroboticsindia.com/",
    webp: webThumb("cloud-hosting-Vadodara-scalable-infrastructure.webp"),
    png:  webThumb("cloud-hosting-Vadodara-scalable-infrastructure.png"),
    video: fujiVideo,
    accent: "#2563eb",
    icon: Globe
  },

  // ── Mobile Apps ──────────────────────────────────────────────────────────
  {
    id: 13,
    title: "The Quick Cab",
    category: "Mobile Apps",
    link: "https://play.google.com/store/apps/details?id=com.codecrawlers.the_quick_cab&pcampaignid=web_share",
    webp: getImgSrc(androidAppImg),
    png:  getImgSrc(androidAppImg),
    accent: "#0284c7",
    icon: Smartphone
  },
  {
    id: 14,
    title: "Book Pratha App",
    category: "Mobile Apps",
    link: "https://play.google.com/store/apps/details?id=prathambooks.bookpratha&pcampaignid=web_share",
    webp: getImgSrc(iosAppImg),
    png:  getImgSrc(iosAppImg),
    accent: "#2563eb",
    icon: Smartphone
  },
  {
    id: 15,
    title: "Suposhan",
    category: "Mobile Apps",
    link: "https://play.google.com/store/apps/details?id=com.CodeCrawlers.suposhan&pcampaignid=web_share",
    webp: getImgSrc(flutterAppImg),
    png:  getImgSrc(flutterAppImg),
    accent: "#059669",
    icon: Smartphone
  },
  {
    id: 16,
    title: "Sarjan",
    category: "Mobile Apps",
    link: "https://play.google.com/store/apps/details?id=com.codecrawlers.sarjan&pcampaignid=web_share",
    webp: getImgSrc(hybridAppImg),
    png:  getImgSrc(hybridAppImg),
    accent: "#7c3aed",
    icon: Smartphone
  },
  {
    id: 17,
    title: "Vadodara Chamber of Commerce",
    category: "Mobile Apps",
    link: "https://play.google.com/store/apps/details?id=com.vcci.vcciexpo2016&pcampaignid=web_share",
    webp: getImgSrc(mobileEntImg),
    png:  getImgSrc(mobileEntImg),
    accent: "#d97706",
    icon: Smartphone
  },

  // ── Custom Logo Design ───────────────────────────────────────────────────
  {
    id: 18,
    title: "Custom Logo Design",
    category: "Mobile Apps",
    link: "/services",
    webp: getImgSrc(vpsHostImg),
    png:  getImgSrc(vpsHostImg),
    video: customLogo,
    accent: "#0284c7",
    icon: Globe
  }
];

export const projectCategories = ["All", "Web Design", "Mobile Apps"];


