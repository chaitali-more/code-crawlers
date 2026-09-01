import { getImgSrc } from "../utils/image";
import iosImg from "../assets/images/ios-app-development-Vadodara-business-solutions.png";
import androidImg from "../assets/images/android-app-development-Baroda-enterprise-solutions.png";
import flutterImg from "../assets/images/flutter-development-Vadodara-secure-web-services.png";

export const bannerData = {
  title: "Mobile App Development",
  subtitle: "Native <strong>iOS & Android mobile engineering</strong> powered by cross-platform <strong>Flutter</strong> architecture in <strong>Vadodara</strong>.",
  breadcrumbs: [
    { label: "Services", href: "/services" },
    { label: "Mobile Apps" }
  ]
};

export const subServices = [
  {
    id: "ios-development",
    num: "01",
    title: "iOS App Engineering (Swift)",
    subtitle: "Native iOS / Apple App Architecture",
    desc: "CodeCrawlers designs high-performance iOS applications tailored for iPhone and iPad ecosystems. Leveraging Swift, Xcode, and Apple Human Interface Guidelines, we build secure, fluid, and scalable apps that pass App Store review smoothly.",
    features: [
      "Native Swift & SwiftUI modular development",
      "Apple Human Interface Guidelines & clean UI execution",
      "RESTful API & GraphQL backend integration",
      "Biometric security, Apple Pay & Push Notifications",
      "App Store Connect submission & automated TestFlight builds"
    ],
    image: getImgSrc(iosImg),
    width: 1586,
    height: 992,
    glowColor: "bg-[#0284c7]/8",
    offsetBorder: "border-[#0284c7]/30"
  },
  {
    id: "android-development",
    num: "02",
    title: "Android Mobile App Development",
    subtitle: "Enterprise Android App Engineering",
    desc: "Target millions of Android users with custom applications engineered by CodeCrawlers. We specialize in Kotlin, Jetpack Compose, multithreaded architecture, and seamless REST/gRPC backend integrations for enterprise reliability.",
    features: [
      "Modern Kotlin & Jetpack Compose declarative UI",
      "Multithreaded background services & offline data sync",
      "Material Design 3 system implementation",
      "Google Play Store publishing & ASO optimization",
      "Firebase analytics, crash reporting & cloud messaging"
    ],
    image: getImgSrc(androidImg),
    width: 1586,
    height: 992,
    glowColor: "bg-[#0284c7]/8",
    offsetBorder: "border-[#0284c7]/30"
  },
  {
    id: "flutter-development",
    num: "03",
    title: "Flutter Cross-Platform Development",
    subtitle: "Single Codebase for iOS & Android",
    desc: "Save up to 40% on engineering costs without compromising speed or native look-and-feel. CodeCrawlers builds cross-platform mobile products using Google's Flutter framework and Dart runtime.",
    features: [
      "Single codebase for simultaneous iOS & Android deployment",
      "60 FPS smooth animations & customizable Flutter widgets",
      "State management (BLoC / Provider / Riverpod)",
      "Native platform channels for camera, GPS, & Bluetooth APIs",
      "Fast feature releases with hot reload development workflow"
    ],
    image: getImgSrc(flutterImg),
    width: 1536,
    height: 1024,
    glowColor: "bg-[#6366f1]/6",
    offsetBorder: "border-[#6366f1]/30"
  }
];

export const ctaData = {
  badge: "Build Your Mobile App",
  title: "Turn Your App Vision Into Reality with CodeCrawlers",
  description: "Consult with our mobile product architects in Vadodara for a technical roadmap, wireframes, and fixed-cost estimation.",
  ctaText: "Get Mobile App Quote",
  ctaLink: "/contact-webdesign-mobileapp-socialmedia-marketing-baroda"
};

