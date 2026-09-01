'use client';
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Zap, Shield, Smartphone, FileText, ArrowRight } from "lucide-react";
import AuditModal from "./ui/AuditModal";

const features = [
  {
    icon: Search,
    title: "SEO Analysis",
    description: "Identify issues affecting your search rankings",
  },
  {
    icon: Zap,
    title: "Speed Check",
    description: "Ensure fast loading times across all devices",
  },
  {
    icon: Shield,
    title: "Security Verification",
    description: "Detect vulnerabilities before they cause damage",
  },
  {
    icon: Smartphone,
    title: "Mobile Compatibility",
    description: "Optimize for seamless mobile performance",
  },
  {
    icon: FileText,
    title: "Free Report in 48 Hours",
    description: "Detailed analysis with actionable insights",
  },
];

export function FreeAuditCTA() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-[#0284c7] via-[#2563eb] to-[#1e1b4b] relative overflow-hidden">
      {/* Background texture & glowing orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            Get Your Website Audit Report for{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent underline decoration-amber-400/50 decoration-4 underline-offset-4">
              FREE
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sky-100 text-lg sm:text-xl max-w-2xl mx-auto font-medium"
          >
            Identify performance, SEO and security issues holding your website back
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <feat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{feat.title}</h3>
              <p className="text-sky-100 text-xs leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            data-testid="button-audit-cta"
            className="group inline-flex items-center gap-3 bg-white text-[#2563eb] hover:bg-sky-50 font-extrabold text-base sm:text-lg px-9 py-4 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95 uppercase tracking-wider"
          >
            <span>CLAIM YOUR FREE AUDIT REPORT</span>
            <ArrowRight className="w-5 h-5 text-[#2563eb] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default FreeAuditCTA;
