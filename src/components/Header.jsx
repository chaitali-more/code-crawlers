'use client';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuditModal from "./ui/AuditModal";

import {
  Menu,
  X,
  ArrowUpRight,
  LifeBuoy,
  Briefcase,
  Globe,
  Mail,
  Phone
} from "lucide-react";
import Logo from "./Logo";

// Create animated Framer Motion router link
const MotionLink = motion(Link);

// Custom SVG Social Icons
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Subcomponent for premium sliding nav link
function SlidingNavLink({ link, index, hoveredIdx, setHoveredIdx }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={link.href}
      aria-label={`CodeCrawlers ${link.label}${link.label2 ? ` ${link.label2}` : ""} Page`}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredIdx(index);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredIdx(null);
      }}
      className="group relative px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-[#0284c7] transition-colors duration-300 flex items-center whitespace-nowrap select-none shrink-0"
    >
      {/* Sliding Pill Background Indicator */}
      {hoveredIdx === index && (
        <motion.span
          layoutId="navHoverPill"
          className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full -z-10 border border-sky-500/20 shadow-sm"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {/* Text Container */}
      <span className="relative inline-block whitespace-nowrap font-bold text-slate-800 group-hover:text-[#0284c7] transition-colors duration-300">
        {link.label}{link.label2 ? ` ${link.label2}` : ""}
      </span>

      {/* Sliding Hover Arrow */}
      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 text-[#0284c7] transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0" />
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Freeze scroll when mega menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Digital", label2: "Marketing", href: "/organic-seo-ppc-digital-marketing-vadodara", desc: "Performance marketing, SEO and branding solutions" },
    { label: "Web", label2: "Design", href: "/responsive-website-designing-company-vadodara", desc: "Award-winning creative website and UI/UX design" },
    { label: "Mobile", label2: "Apps", href: "/android-ios-mobile-app-development-company-baroda", desc: "Cross-platform mobile applications for iOS & Android" },
    { label: "Our", label2: "Work", href: "/website-mobile-app-development-company-portfolio-baroda", desc: "Our portfolio of enterprise systems and branding projects" },
    { label: "About", label2: "", href: "/about-web-development-company-baroda", desc: "25+ years of digital agency legacy and expert team details" },
    { label: "Contact", label2: "", href: "/contact-webdesign-mobileapp-socialmedia-marketing-baroda", desc: "Drop by our office or write to us for free consulting" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon className="w-3.5 h-3.5" />, href: "https://www.facebook.com/dedicated.developers.india/", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: <TwitterIcon className="w-3.5 h-3.5" />, href: "https://x.com/codecrawlers", color: "hover:bg-sky-505" },
    { name: "LinkedIn", icon: <LinkedinIcon className="w-3.5 h-3.5" />, href: "https://www.linkedin.com/company/dots-&-coms/", color: "hover:bg-blue-700" },
    { name: "Instagram", icon: <InstagramIcon className="w-3.5 h-3.5" />, href: "https://www.instagram.com/codecrawlers/?hl=en", color: "hover:bg-pink-655" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white shadow-sm border-b border-slate-100"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Tier 1: Full-Width Slanted Top Utility Bar */}
        <div
          className={`hidden xl:block transition-all duration-500 ease-in-out border-b border-slate-100 bg-[#f8fafc] ${
            scrolled ? "h-0 overflow-hidden opacity-0 pointer-events-none" : "opacity-100 h-[38px]"
          }`}
        >
          <div className="w-full flex justify-between items-center h-full relative">
            {/* Left side tagline */}
            <div className="px-6 md:px-12 text-slate-400 text-[10px] font-bold uppercase tracking-wider font-sans select-none flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span> CREATIVE & DIGITAL AGENCY • VADODARA, INDIA</span>
            </div>

            {/* Right Slanted Dark Container (Extending all the way to right edge) */}
            <div className="bg-[#0b0f19] h-full text-slate-200 pl-10 pr-6 md:pr-12 flex items-center space-x-4 slant-clip-right z-10 shadow-sm">
              {/* Social Icons */}
              <div className="flex items-center space-x-3 text-slate-300">
                <a href="https://www.facebook.com/dedicated.developers.india/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0284c7] transition-colors">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://x.com/codecrawlers" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#0284c7] transition-colors">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.linkedin.com/company/dots-&-coms/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0284c7] transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/codecrawlers/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#0284c7] transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <span className="text-slate-600 text-xs">•</span>

              {/* Utility Links: Career & Technical Support */}
              <div className="flex items-center space-x-5 text-xs font-semibold">
                <a
                  href="https://www.codecrawlers.in/training-and-job-vacancy-at-dots-coms-vadodara.html" target="_blank" rel="noopener noreferrer"
                  aria-label="Career and Job Opportunities at CodeCrawlers Vadodara"
                  className="flex items-center space-x-1.5 hover:text-[#0284c7] transition-colors duration-300"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>Career</span>
                </a>
                <Link
                  to="/webhosting-vps-dedicated-server-support-baroda"
                  aria-label="Technical Support Services Baroda Header Link"
                  className="flex items-center space-x-1.5 hover:text-[#0284c7] transition-colors duration-300"
                >
                  <LifeBuoy className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>Technical Support</span>
                </Link>
              </div>
            </div>

            {/* Glowing accent border underneath slanted container */}
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#0284c7]/50 to-[#2563eb] opacity-70" />
          </div>
        </div>

        {/* Tier 2: Main Full-Width Header Navigation Bar */}
        <div className="w-full relative bg-white">
          <div className="w-full px-6 md:px-12 py-3 flex items-center justify-between relative">
            
            {/* Left Section: Brand Logo */}
            <div className="flex items-center shrink-0 z-10">
              <Link to="/" aria-label="CodeCrawlers Agency Home">
                <Logo size="md" variant="dark" />
              </Link>
            </div>

            {/* Center Section: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navLinks.map((link, idx) => (
                <SlidingNavLink
                  key={link.href}
                  link={link}
                  index={idx}
                  hoveredIdx={hoveredIdx}
                  setHoveredIdx={setHoveredIdx}
                />
              ))}
            </nav>

            {/* Right Section: Actions & Responsive Toggle */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                data-testid="button-audit-cta"
                aria-label="Request Free SEO & Website Performance Audit Report"
                title="Request Free Audit Report"
                className="hidden md:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 border border-sky-400/30 shadow-[0_4px_25px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_35px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>FREE AUDIT REPORT</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
              
              {/* Main Burger Button / Command Center Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 bg-slate-50 hover:bg-slate-100 ${
                  isOpen
                    ? "border-sky-500/20 text-[#0284c7]"
                    : "border-slate-200 text-slate-700 hover:border-slate-350"
                }`}
                aria-label="Toggle Navigation Menu"
                title="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bottom decorative gradient accent ribbon running 100% FULL SCREEN WIDTH */}
          <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#4f46e5] opacity-90" />
        </div>
      </motion.header>

      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Modern Command Center Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            style={{ 
              paddingTop: scrolled ? "80px" : "130px",
              transition: "padding-top 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            className="fixed inset-0 bg-slate-950 z-40 flex flex-col justify-between overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Tech grid mesh background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#0284c7]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#2563eb]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full h-full flex flex-col justify-between py-6 relative z-10 overflow-y-auto dark-scrollbar">
              {/* Main Command Center Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto menu-grid">
                
                {/* Primary Navigation Links */}
                <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-[#0284c7] uppercase block mb-2 sm:mb-4">
                    // Navigation Index
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-3">
                    {navLinks.map((link, idx) => (
                      <MotionLink
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-start space-x-4 p-3 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-[#0284c7]/50 group-hover:bg-[#0284c7]/10 transition-colors">
                          <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0284c7]">
                            0{idx + 1}
                          </span>
                        </div>
                        
                        <div className="flex flex-col">
                          <span className="text-base sm:text-lg font-bold font-heading text-slate-100 group-hover:text-[#0284c7] transition-colors flex items-center">
                            {link.label}{link.label2 ? ` ${link.label2}` : ""}
                            <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0284c7]" />
                          </span>
                          <span className="text-xs text-slate-400 font-normal leading-snug line-clamp-1">
                            {link.desc}
                          </span>
                        </div>
                      </MotionLink>
                    ))}
                  </div>
                </div>

                {/* Secondary Quick Contact Panel */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-800 lg:pl-10">
                  <div className="space-y-6">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-[#0284c7] uppercase block">
                      // Quick Connect
                    </span>

                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-4 backdrop-blur-sm">
                      <div className="flex items-center space-x-3 text-slate-300 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Headquarters</span>
                          <span className="font-semibold text-slate-200">Vadodara, Gujarat, India</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-slate-300 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Inquiries</span>
                          <a href="mailto:contact@codecrawlers.in" className="font-semibold text-slate-200 hover:text-[#0284c7] transition-colors">contact@codecrawlers.in</a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-slate-300 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block uppercase">Hotline</span>
                          <a href="tel:+918200617950" className="font-semibold text-slate-200 hover:text-[#0284c7] transition-colors">(+91) 8200617950</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social links bar */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block">
                      // Social Channels
                    </span>
                    <div className="flex items-center space-x-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow CodeCrawlers on ${social.name}`}
                          className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center ${social.color} hover:text-white transition-all duration-300`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Footer Ribbon in Command Center */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 text-[#0284c7] animate-pulse" />
                  <span>Available for custom digital development worldwide</span>
                </div>
                <span>© {new Date().getFullYear()} CodeCrawlers. All rights reserved.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
