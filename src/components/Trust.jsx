'use client';
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target);

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30;
    const steps = totalMiliseconds / incrementTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Trust() {
  const stats = [
    { label: "Years Experience", target: 25, suffix: "+" },
    { label: "Websites Delivered", target: 5000, suffix: "+" },
    { label: "Happy Clients", target: 8000, suffix: "+" },
    { label: "Domains Managed", target: 6000, suffix: "+" },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#0284c7] via-[#2563eb] to-[#1e1b4b]">
      {/* Background texture & ambient glowing spotlights */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-400/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white/95
                backdrop-blur-md
                border border-white/50
                p-5 md:p-8
                text-center
                shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white
                hover:border-cyan-400/60
                hover:shadow-[0_25px_60px_rgba(2,132,199,0.35)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>

              {/* Number */}
              <div className="relative text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black font-heading">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>

              {/* Divider Line with Gradient */}
              <div className="relative mx-auto mt-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#0284c7] to-[#2563eb] transition-all duration-300 group-hover:w-20" />

              {/* Label */}
              <p className="relative mt-4 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-wider font-black text-black whitespace-nowrap">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
