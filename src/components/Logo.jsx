'use client';
import React from "react";
import logoIcon from "../assets/images/logo-icon.png";
import { getImgSrc } from "../utils/image";

export default function Logo({ size = "md", variant = "dark", showText = true }) {
  // Define heights for responsive logo sizes
  const heights = {
    sm: "h-8 md:h-9",
    md: "h-10 md:h-12",
    lg: "h-11 md:h-13",
    xl: "h-14 md:h-16",
    '2xl': "h-16 md:h-24",
  };

  const textSizes = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-3xl md:text-4xl",
    '2xl': "text-4xl md:text-5xl",
  };

  const logoHeight = heights[size] || heights.md;
  const textSize = textSizes[size] || textSizes.md;

  // Text color based on theme variant (light text for dark footers, dark text for headers)
  const textColorClass = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <div className="flex items-center space-x-2.5 select-none group cursor-pointer">
      <img
        src={getImgSrc(logoIcon)}
        alt="CodeCrawlers Logo"
        className={`${logoHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        draggable="false"
        loading="eager"
        decoding="async"
      />
      {showText && (
        <span className={`font-sans tracking-tight font-normal ${textSize} ${textColorClass} transition-colors duration-300`}>
          Code<span className="font-extrabold tracking-tight">Crawlers</span>
        </span>
      )}
    </div>
  );
}
