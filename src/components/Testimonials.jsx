'use client';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const autoplayTimerRef = useRef(null);

  const reviews = [
    {
      author: "Aakar Scientific",
      role: "Company Owner",
      quote: "Code Crawlers' exceptional Digital Marketing and SEO Services are fueling our monthly growth. Highly recommended for anyone seeking digital solutions. Grateful for the team's efforts.",
    },
    {
      author: "Honest Milwaukee",
      role: "Restaurant Owner",
      quote: "Their team crafted an E-commerce platform for Honest Restaurant in Milwaukee, handling tasks from business card printing to comprehensive branding. Their seamless execution allowed us to focus on our business.",
    },
    {
      author: "Dominus Paper",
      role: "Company Owner",
      quote: "Discover unmatched technical support, comprehensive website maintenance, and expert SEO services, all under one roof. If you're seeking exceptional service, look no further.",
    },
    {
      author: "Dandi Path",
      role: "Company Owner",
      quote: "Code Crawlers' SEO services fuel our monthly growth. Highly recommended for top-notch Digital Solutions. Grateful for their commendable efforts in boosting our Google ranking.",
    },
  ];

  const resetAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    resetAutoplay();
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
    resetAutoplay();
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0284c7]/3 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold font-mono tracking-widest text-[#0284c7] uppercase">
            // CLIENT FEEDBACK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-800 tracking-tight leading-tight">
            Trusted by Ambitious Brands
          </h2>
        </div>

        {/* Carousel slide container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[250px] md:min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="w-full rounded-2xl glass-panel border border-slate-100 p-6 sm:p-8 md:p-12 text-left relative flex flex-col justify-between bg-white/95 shadow-lg"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Quote className="w-10 h-10 text-[#0284c7]/10 absolute top-8 left-8" />
                
                <div className="relative z-10 pt-4">
                  <p className="text-slate-700 text-base md:text-lg italic font-normal leading-relaxed">
                    "{reviews[index].quote}"
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="text-slate-800 font-bold font-heading">{reviews[index].author}</div>
                    {reviews[index].role && (
                      <p className="text-slate-500 text-xs mt-0.5 font-mono">
                        <span className="text-[#0284c7] font-semibold">{reviews[index].role}</span>
                      </p>
                    )}
                  </div>
                  <span className="text-slate-400 font-mono text-xs hidden sm:block">
                    {index + 1} / {reviews.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                    resetAutoplay();
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === idx ? "w-6 bg-[#0284c7]" : "w-1.5 bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
