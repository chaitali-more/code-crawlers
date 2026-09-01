'use client';
import { motion } from "framer-motion";

const partners = [
  {
    name: "Alembic Pharma",
    url: "https://alembicpharmaceuticals.com/",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <path d="M12 6L24 12V28L12 34L0 28V12L12 6Z" fill="#0284c7"/>
        <path d="M12 12L18 15V25L12 28L6 25V15L12 12Z" fill="#2563eb"/>
        <text x="32" y="26" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5" fill="#1e293b">ALEMBIC</text>
      </svg>
    )
  },
  {
    name: "Rubamin",
    url: "https://www.rubamin.com/",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <rect x="4" y="10" width="18" height="18" rx="4" fill="#dc2626" transform="rotate(45 13 19)"/>
        <text x="34" y="26" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="1" fill="#1e293b">RUBAMIN</text>
      </svg>
    )
  },
  {
    name: "Apex Global",
    url: "#",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <path d="M14 6L26 30H2L14 6Z" fill="#0284c7" />
        <path d="M14 14L19 26H9L14 14Z" fill="#ffffff" />
        <text x="34" y="26" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.8" fill="#1e293b">APEX GLOBAL</text>
      </svg>
    )
  },
  {
    name: "NovaCloud",
    url: "#",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <circle cx="10" cy="22" r="6" fill="#0284c7"/>
        <circle cx="18" cy="16" r="9" fill="#2563eb"/>
        <circle cx="26" cy="22" r="5" fill="#3b82f6"/>
        <text x="38" y="26" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5" fill="#1e293b">NOVACLOUD</text>
      </svg>
    )
  },
  {
    name: "Vertex Systems",
    url: "#",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <path d="M4 10L14 30L24 10H17L14 20L11 10H4Z" fill="#2563eb"/>
        <path d="M16 10L26 30H21L16 20L16 10Z" fill="#0284c7" opacity="0.8"/>
        <text x="34" y="26" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.2" fill="#1e293b">VERTEX</text>
      </svg>
    )
  },
  {
    name: "Pulse Labs",
    url: "#",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <rect x="2" y="18" width="4" height="8" rx="2" fill="#0284c7"/>
        <rect x="9" y="10" width="4" height="24" rx="2" fill="#2563eb"/>
        <rect x="16" y="14" width="4" height="16" rx="2" fill="#3b82f6"/>
        <rect x="23" y="6" width="4" height="30" rx="2" fill="#4f46e5"/>
        <text x="36" y="26" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.8" fill="#1e293b">PULSE LABS</text>
      </svg>
    )
  },
  {
    name: "Quantum Tech",
    url: "#",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <circle cx="14" cy="20" r="11" fill="none" stroke="#0284c7" strokeWidth="4"/>
        <circle cx="14" cy="20" r="4" fill="#2563eb"/>
        <path d="M20 26L26 32" stroke="#0284c7" strokeWidth="4" strokeLinecap="round"/>
        <text x="36" y="26" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="1" fill="#1e293b">QUANTUM</text>
      </svg>
    )
  },
  {
    name: "Horizon Group",
    url: "#",
    svg: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto text-slate-700 hover:text-[#0284c7] transition-colors" fill="currentColor">
        <path d="M2 26C2 16.0589 10.0589 8 20 8C29.9411 8 38 16.0589 38 26H2Z" fill="#0284c7" opacity="0.3"/>
        <path d="M6 26C6 18.268 12.268 12 20 12C27.732 12 34 18.268 34 26H6Z" fill="#2563eb"/>
        <text x="42" y="26" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.2" fill="#1e293b">HORIZON</text>
      </svg>
    )
  }
];

export default function Clients() {
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white py-10 md:py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center md:px-12">
        <span className="font-mono text-xs font-bold tracking-widest text-[#0284c7] uppercase">
          // CLIENT NETWORK
        </span>
        <h2 className="font-heading mt-2 text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative flex w-full overflow-x-hidden py-4 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent md:before:w-40 md:after:w-40">
        <motion.div
          className="flex min-w-full items-center space-x-8 md:space-x-12 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {marqueePartners.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target={partner.url !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="inline-flex h-16 w-44 flex-shrink-0 cursor-pointer items-center justify-center px-4 opacity-85 transition-all duration-300 hover:opacity-100 hover:scale-105"
              title={partner.name}
              aria-label={`${partner.name} - Corporate Client of CodeCrawlers`}
            >
              {partner.svg}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
