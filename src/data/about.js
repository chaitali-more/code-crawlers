import { getImgSrc } from "../utils/image";

// AI Generated image assets for main about section and sliders
import aiInnovationLabImg from "../assets/images/ai-innovation-lab.jpg";
import aiEngineeringSquadImg from "../assets/images/ai-engineering-squad.jpg";
import aiTeamCelebrationImg from "../assets/images/ai-team-celebration.jpg";
import aiDesignSessionImg from "../assets/images/ai-design-session.jpg";
import aiTechExpoImg from "../assets/images/ai-tech-expo.jpg";
import aiCloudSummitImg from "../assets/images/ai-cloud-summit.jpg";

export const aboutHeroData = {
  badge: "// Engineering Excellence",
  title: "Building Next-Gen Digital Products in Vadodara",
  paragraphs: [
    "At CodeCrawlers, we fuse modern web engineering, custom mobile development, and performance-focused SEO to help forward-thinking companies scale fast.",
    "Our mission is clear: craft pixel-perfect web platforms and intuitive mobile applications that eliminate digital friction, elevate brand equity, and turn real traffic into revenue."
  ],
  stats: [
    { value: "500+", label: "Projects Delivered" },
    { value: "99.9%", label: "Client Satisfaction" }
  ],
  slides: [
    {
      id: 1,
      image: getImgSrc(aiInnovationLabImg),
      title: "CodeCrawlers Innovation Lab",
      location: "Vadodara, India",
      desc: "Our web design studio creating bespoke digital experiences and scalable cloud web systems in Vadodara.",
      width: 1600,
      height: 1200
    },
    {
      id: 2,
      image: getImgSrc(aiEngineeringSquadImg),
      title: "Expert Engineering Squad",
      location: "CodeCrawlers Team",
      desc: "Our passionate developers, UI/UX designers, and cloud architects working collaboratively.",
      width: 1600,
      height: 1200
    },
    {
      id: 3,
      image: getImgSrc(aiTeamCelebrationImg),
      title: "Team Outings & Celebrations",
      location: "Vadodara Events",
      desc: "Fostering teamwork, creativity, and long-term tech innovation outside the office desk.",
      width: 1600,
      height: 1200
    },
  ]
};

export const timelineIntro = {
  est: "//   CodeCrawlers Core Values",
  title: "Innovating Web & Mobile Engineering Solutions",
  paragraphs: [
    "CodeCrawlers was built on a simple promise: deliver ultra-fast, visually stunning, and highly secure software solutions that help businesses dominate online search results and delight their users.",
    "From high-traffic corporate portals to native Android/iOS app ecosystems, our team combines cutting-edge JavaScript frameworks, cloud infrastructure, and data-driven marketing strategies.",
    "As technological paradigms shift toward AI integration, cloud microservices, and modern mobile frameworks, CodeCrawlers stays ahead of the curve, providing reliable tech partnership for every client."
  ]
};

export const timelineData = [
  {
    year: "2026",
    event: "Expanded Next.js App Router, React 19, and AI-driven growth frameworks to deliver lightning-fast Web Vitals performance.",
    tag: "Next-Gen Stack"
  },
  { year: "2025", event: "Upgraded cloud servers and VPS hosting to high-speed NVMe storage data centers.", tag: "Cloud Infrastructure" },
  { year: "2024", event: "Adopted Flutter cross-platform architecture for single-codebase mobile app deployment.", tag: "Mobile Engineering" },
  { year: "2023", event: "Launched advanced performance SEO and local search domination frameworks for business clients.", tag: "SEO & Growth" },
  { year: "2022", event: "Built specialized enterprise web application division catering to national brands.", tag: "Web Apps" },
  { year: "2021", event: "Expanded digital design studio at Vadodara to accommodate full-stack engineering teams.", tag: "Expansion" }
];

export const teamIntro = {
  badge: "// Join CodeCrawlers",
  title: "Passionate Developers, Designers & Digital Strategists",
  subtitlePrefix: "Driven by technical rigor,",
  totalAssociates: "CodeCrawlers engineers",
  subtitleMiddle: "build robust software products with a focused team strength of",
  teamStrength: "30+",
  subtitleSuffix: "expert professionals, including:",
  inclusions: [
    "Senior Full-Stack Web Engineers",
    "Flutter & Native Mobile App Developers",
    "SEO & Digital Marketing Specialists",
    "UI/UX Designers & Cloud System Architects",
  ],
  paragraphs: [
    "When you partner with CodeCrawlers, you gain direct access to seasoned engineers who focus on performance, security, and measurable ROI.",
    "If you are passionate about crafting world-class code and modern software systems, explore career opportunities with CodeCrawlers."
  ],
  careerUrl: "/contact-webdesign-mobileapp-socialmedia-marketing-baroda"
};

export const teamSlides = [
  {
    image: getImgSrc(aiTeamCelebrationImg),
    title: "CodeCrawlers Team Outing",
    desc: "Building strong bonds and collaboration beyond daily code reviews.",
    width: 1600,
    height: 1200
  },
  {
    image: getImgSrc(aiDesignSessionImg),
    title: "Company Milestones & Celebrations",
    desc: "Celebrating major project launches and successful client growth deliverables.",
    width: 1600,
    height: 1200
  },
  {
    image: getImgSrc(aiEngineeringSquadImg),
    title: "Vadodara Software Engineering Team",
    desc: "Our skilled development team engineering robust web and mobile applications.",
    width: 1600,
    height: 1200
  },
  {
    image: getImgSrc(aiInnovationLabImg),
    title: "Collaborative Design Sessions",
    desc: "Transforming complex business logic into intuitive user interfaces.",
    width: 1600,
    height: 1200
  },
  {
    image: getImgSrc(aiTechExpoImg),
    title: "CodeCrawlers Culture",
    desc: "Fostering continuous learning, innovation, and technical excellence.",
    width: 1600,
    height: 1200
  },
  {
    image: getImgSrc(aiCloudSummitImg),
    title: "Team Spirit & Energy",
    desc: "Combining creative problem solving with team energy.",
    width: 1600,
    height: 1200
  },
];

export const eventsIntro = {
  badge: "Events & Recognition",
  title: "Our Innovation Journey",
  description: "Key events, technological benchmarks, and milestones shaping CodeCrawlers' growth."
};

export const events = [
  {
    title: "Annual Tech Excellence Awards 2025",
    image: getImgSrc(aiCloudSummitImg),
    alt: "Annual Tech Excellence Awards celebration by CodeCrawlers Vadodara",
    width: 1600,
    height: 900
  },
  {
    title: "Tech Innovation Expo",
    image: getImgSrc(aiDesignSessionImg),
    alt: "Technology booth exhibit and mobile software showcase by CodeCrawlers",
    width: 1600,
    height: 1200
  },
  {
    title: "Digital Transformation Conference",
    image: getImgSrc(aiInnovationLabImg),
    alt: "Digital transformation conference presentation by CodeCrawlers engineers",
    width: 1600,
    height: 1200
  },
  {
    title: "Global Web & Mobile Developers Summit",
    image: getImgSrc(aiEngineeringSquadImg),
    alt: "Global Web and Mobile Developers Summit networking event",
    width: 1600,
    height: 1200
  },
  {
    title: "Mobile Application Developers Showcase",
    image: getImgSrc(aiTeamCelebrationImg),
    alt: "Mobile application developers showcase award ceremony",
    width: 1600,
    height: 1200
  },
  {
    title: "Cloud & Infrastructure Summit",
    image: getImgSrc(aiTechExpoImg),
    alt: "Cloud and Infrastructure Summit tech presentation booth",
    width: 1600,
    height: 900
  },
];
