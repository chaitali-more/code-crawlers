'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./ui/WhatsAppButton";

// Scroll helper to support both top-of-page scrolling and dynamic #hash scrolling
function ScrollToHashElement() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(element);
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}

export default function ClientAppLayout({ children }) {
  useEffect(() => {
    window.hasLoadedOnce = true;
  }, []);

  return (
    <>
      <ScrollToHashElement />
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
