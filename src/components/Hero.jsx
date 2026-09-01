'use client';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, Smartphone, Server, Megaphone, Code2 } from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import Magnetic from "./Magnetic";
import { Link } from "react-router-dom";

export default function Hero() {
    const sectionRef = useRef(null);
    const dashRef = useRef(null);

    // Detect mobile — disable all scroll-driven transforms on mobile
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Mouse position values for parallax floating dashboard
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const [hoveredCard, setHoveredCard] = useState(null); // null, 'web', 'app', 'hosting'

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left - width / 2;
        const mouseY = event.clientY - rect.top - height / 2;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Parallax transformations for mockups (mouse-driven)
    const imgX = useTransform(x, [-300, 300], [-8, 8]);
    const imgY = useTransform(y, [-300, 300], [-8, 8]);

    // 3D Tilt transforms for the background desk mockup
    const rotateX = useTransform(y, [-300, 300], [10, -10]);
    const rotateY = useTransform(x, [-300, 300], [-10, 10]);

    // Floating cards subtle mouse counter-parallax
    const card1X = useTransform(x, [-300, 300], [14, -14]);
    const card1Y = useTransform(y, [-300, 300], [14, -14]);
    const card2X = useTransform(x, [-300, 300], [-18, 18]);
    const card2Y = useTransform(y, [-300, 300], [12, -12]);
    const card3X = useTransform(x, [-300, 300], [10, -10]);
    const card3Y = useTransform(y, [-300, 300], [-16, 16]);

    // Scroll progress for hero section (pinning & entrance effects)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Desktop vs Mobile scroll-driven transformations
    const scrollMockupY = useTransform(scrollYProgress, [0, 0.4], isMobile ? [0, 0] : [0, -40]);
    const scrollMockupScale = useTransform(scrollYProgress, [0, 0.4], isMobile ? [1, 1] : [1, 1.02]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

    // Headline letter stagger animations
    const titleContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const titleLineVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center pt-32 sm:pt-40 md:pt-44 lg:pt-48 pb-16 md:pb-24 overflow-hidden bg-[#f8fafc]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background 1: Interactive Canvas */}
            <ThreeBackground />

            {/* Subtle Gradient Spotlights */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center text-left">

                    {/* Left Side: Agency Intro Copy */}
                    <motion.div
                        className="lg:col-span-6 flex flex-col items-start space-y-5 lg:space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Live Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 w-fit"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">CodeCrawlers Digital Agency</span>
                        </motion.div>

                        {/* Staggered Text Reveal Headline */}
                        <div className="relative w-full">
                            <h1 className="sr-only">Innovate. Build. Dominate Digital Markets & Search | CodeCrawlers</h1>
                            <motion.div
                                aria-hidden="true"
                                className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.85rem] 2xl:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.14] flex flex-col"
                                variants={titleContainerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="block overflow-hidden py-0.5">
                                    <motion.span variants={titleLineVariants} className="block">
                                        Innovate. <span className="text-gradient-blue">Build.</span>
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden py-0.5">
                                    <motion.span variants={titleLineVariants} className="block">
                                        Dominate Digital
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden py-0.5">
                                    <motion.span variants={titleLineVariants} className="block">
                                        <span className="text-gradient-orange">Markets & Search</span>
                                    </motion.span>
                                </span>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            We design <strong>responsive websites</strong>, build <strong>mobile apps</strong>, host them reliably, and market them — for ambitious businesses across <strong>Vadodara</strong> and beyond.
                        </motion.p>

                        {/* Magnetic CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <Magnetic>
                                <Link
                                    to="/contact-webdesign-mobileapp-socialmedia-marketing-baroda"
                                    aria-label="Start Your Project - Contact CodeCrawlers Agency"
                                    className="group inline-flex items-center space-x-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 border border-sky-400/30 shadow-[0_4px_25px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_35px_rgba(37,99,235,0.45)]"
                                >
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Magnetic>

                            <Magnetic>
                                <Link
                                    to="/website-mobile-app-development-company-portfolio-baroda"
                                    aria-label="View Portfolio - CodeCrawlers Web Design Work"
                                    className="inline-flex items-center space-x-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase border border-slate-200 hover:border-[#0284c7]/40 text-slate-800 hover:bg-sky-50/50 transition-all duration-300"
                                >
                                    <Play className="w-3.5 h-3.5 fill-current text-slate-800" />
                                    <span>View Portfolio</span>
                                </Link>
                            </Magnetic>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Laptop desk mockup with interactive floating cards */}
                    <motion.div
                        className="lg:col-span-6 relative w-full aspect-[4/3] flex items-center justify-center animate-fade-in mt-6 lg:mt-0"
                        style={{
                            y: scrollMockupY,
                            scale: scrollMockupScale,
                            opacity: scrollOpacity,
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Inner Parallax Wrapper (Handles 2D slide and sets up 3D perspective) */}
                        <motion.div
                            className="relative w-full h-full"
                            style={{
                                x: imgX,
                                y: imgY,
                                perspective: 1200,
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {/* The photorealistic desk background frame (with sharp 3D Tilt) */}
                            <motion.div
                                ref={dashRef}
                                className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 bg-cover bg-center bg-no-repeat aspect-[4/3]"
                                style={{
                                    backgroundImage: `url(/hero-banner-image.webp)`,
                                    rotateX: rotateX,
                                    rotateY: rotateY,
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    willChange: "transform",
                                }}
                            />

                            {/* Floating Card 1: Web Design (Middle-Left) */}
                            <motion.div
                                className="absolute w-[115px] xs:w-[145px] sm:w-[190px] xl:w-[210px] rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md p-2 sm:p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-start space-x-1.5 sm:space-x-3 hover:shadow-[0_20px_40px_rgba(2,132,199,0.2)] transition-all duration-300 cursor-pointer select-none top-[20%] left-0 sm:left-[-4%] xl:left-[-6%]"
                                style={{
                                    x: card1X,
                                    y: card1Y,
                                    z: 80,
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    willChange: "transform",
                                }}
                                onMouseEnter={() => setHoveredCard("web")}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#0284c7] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(2,132,199,0.25)]">
                                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <div className="flex flex-col text-left antialiased">
                                    <span className="text-[10px] sm:text-xs xl:text-sm font-bold text-slate-800 leading-tight">Web Design</span>
                                    <span className="text-[8px] sm:text-[10px] xl:text-xs text-slate-500 font-medium leading-relaxed mt-0.5 sm:mt-1">Responsive, Fast<br className="hidden sm:inline" />& User Friendly</span>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Mobile Apps (Top-Right) */}
                            <motion.div
                                className="absolute w-[115px] xs:w-[145px] sm:w-[190px] xl:w-[210px] rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md p-2 sm:p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-start space-x-1.5 sm:space-x-3 hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-300 cursor-pointer select-none top-[6%] right-0 sm:right-[-4%] xl:right-[-6%]"
                                style={{
                                    x: card2X,
                                    y: card2Y,
                                    z: 80,
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    willChange: "transform",
                                }}
                                onMouseEnter={() => setHoveredCard("app")}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.25)]">
                                    <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <div className="flex flex-col text-left antialiased">
                                    <span className="text-[10px] sm:text-xs xl:text-sm font-bold text-slate-800 leading-tight">Mobile Apps</span>
                                    <span className="text-[8px] sm:text-[10px] xl:text-xs text-slate-500 font-medium leading-relaxed mt-0.5 sm:mt-1">Powerful Apps for<br className="hidden sm:inline" />iOS & Android</span>
                                </div>
                            </motion.div>

                            {/* Floating Card 3: Digital Marketing & SEO (Bottom-Right) */}
                            <motion.div
                                className="absolute w-[115px] xs:w-[145px] sm:w-[190px] xl:w-[210px] rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md p-2 sm:p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-start space-x-1.5 sm:space-x-3 hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-pointer select-none bottom-[8%] right-0 sm:right-[-3%] xl:right-[-5%]"
                                style={{
                                    x: card3X,
                                    y: card3Y,
                                    z: 80,
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    willChange: "transform",
                                }}
                                onMouseEnter={() => setHoveredCard("hosting")}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#6366f1] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(99,102,241,0.25)]">
                                    <Megaphone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <div className="flex flex-col text-left antialiased">
                                    <span className="text-[10px] sm:text-xs xl:text-sm font-bold text-slate-800 leading-tight">Digital Marketing</span>
                                    <span className="text-[8px] sm:text-[10px] xl:text-xs text-slate-500 font-medium leading-relaxed mt-0.5 sm:mt-1">SEO, PPC & Social<br className="hidden sm:inline" />Targeted Growth</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
