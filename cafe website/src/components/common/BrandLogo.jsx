import React from 'react';

/**
 * Luxury Brand Logo Lockup
 * Features an Ultra-Luxury Gold Serif typography paired with an intricate artisanal glowing emblem.
 */
export default function BrandLogo({
  size = "md",
  showTagline = true,
  className = "",
  tagline = "ATELIER & ROASTERY"
}) {
  // Size configurations
  const config = {
    sm: {
      emblem: "h-8 w-8",
      title: "text-lg tracking-[0.14em]",
      tag: "text-[7.5px] tracking-[0.24em] -mt-0.5",
      gap: "gap-2.5",
    },
    md: {
      emblem: "h-10 w-10",
      title: "text-2xl tracking-[0.16em]",
      tag: "text-[8.5px] tracking-[0.28em] -mt-0.5",
      gap: "gap-3",
    },
    lg: {
      emblem: "h-12 w-12",
      title: "text-3xl tracking-[0.18em]",
      tag: "text-[10px] tracking-[0.32em] -mt-0.5",
      gap: "gap-3.5",
    },
  }[size] || {
    emblem: "h-10 w-10",
    title: "text-2xl tracking-[0.16em]",
    tag: "text-[8.5px] tracking-[0.28em] -mt-0.5",
    gap: "gap-3",
  };

  return (
    <div className={`group inline-flex items-center ${config.gap} select-none transition-all duration-300 ${className}`}>
      {/* LUXURY CREATIVE GOLD COFFEE EMBLEM */}
      <div className={`relative flex ${config.emblem} items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-108`}>
        {/* Ambient Halo Glow */}
        <div className="absolute inset-0 rounded-full bg-[#E8B34E]/25 blur-md opacity-70 group-hover:opacity-100 group-hover:bg-[#E8B34E]/45 transition-opacity duration-500" />
        
        {/* Creative Artisanal SVG Crest */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-full w-full emblem-gold-glow group-hover:emblem-gold-glow-lg transition-all duration-500"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="brandGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF6E0" />
              <stop offset="25%" stopColor="#F5D77F" />
              <stop offset="60%" stopColor="#E8B34E" />
              <stop offset="85%" stopColor="#C89B3C" />
              <stop offset="100%" stopColor="#8A4A20" />
            </linearGradient>
            <linearGradient id="beanCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D1" />
              <stop offset="45%" stopColor="#E8B34E" />
              <stop offset="80%" stopColor="#C1552E" />
              <stop offset="100%" stopColor="#7A280D" />
            </linearGradient>
            <linearGradient id="steamGlow" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#E8B34E" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFF9F0" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Royal Seal Ring */}
          <circle cx="32" cy="32" r="30" stroke="url(#brandGoldGrad)" strokeWidth="1.5" strokeOpacity="0.85" />
          <circle cx="32" cy="32" r="27.5" stroke="url(#brandGoldGrad)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />
          
          {/* Dark Ceramic Disc Base */}
          <circle cx="32" cy="32" r="25.5" fill="#140A06" stroke="url(#brandGoldGrad)" strokeWidth="1" />

          {/* Creative Coffee Cup Silhouette */}
          {/* Saucer */}
          <path d="M19 44.5 C25 47 39 47 45 44.5" stroke="url(#brandGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Cup Body */}
          <path d="M20 28 C20 38.5 25 42.5 32 42.5 C39 42.5 44 38.5 44 28 Z" fill="#23120A" stroke="url(#brandGoldGrad)" strokeWidth="1.8" strokeLinejoin="round" />
          
          {/* Cup Handle */}
          <path d="M43 29.5 C48.5 29.5 49.5 37.5 43 38" stroke="url(#brandGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />

          {/* Central Sculpted Golden Coffee Bean nestled in the cup */}
          <path d="M32 23 C27.5 23 25.5 27 25.5 31 C25.5 35 27.5 39 32 39 C32 39 30 35 32 31 C34 27 32 23 32 23 Z" fill="url(#beanCoreGrad)" />
          <path d="M32 23 C36.5 23 38.5 27 38.5 31 C38.5 35 36.5 39 32 39 C32 39 34 35 32 31 C30 27 32 23 32 23 Z" fill="url(#beanCoreGrad)" />
          <path d="M32 23 C30 27 34 35 32 39" stroke="#FFF9F0" strokeWidth="1" strokeLinecap="round" />

          {/* Rising Delicate Steam Wisps */}
          <path d="M28 21.5 C26.5 19 28.5 17 27 14.5" stroke="url(#steamGlow)" strokeWidth="1.4" strokeLinecap="round" className="animate-subtle-pulse" />
          <path d="M36 21.5 C37.5 19 35.5 17 37 14.5" stroke="url(#steamGlow)" strokeWidth="1.4" strokeLinecap="round" className="animate-subtle-pulse" />

          {/* 4 Radiant Star Accents on Border */}
          <path d="M32 4 L33 6 L32 8 L31 6 Z" fill="#FFF4D0" />
          <path d="M32 56 L33 58 L32 60 L31 58 Z" fill="#FFF4D0" />
          <path d="M4 32 L6 33 L8 32 L6 31 Z" fill="#FFF4D0" />
          <path d="M56 32 L58 33 L60 32 L58 31 Z" fill="#FFF4D0" />
        </svg>
      </div>

      {/* LUXURY TYPOGRAPHY LOCKUP */}
      <div className="flex flex-col">
        <span
          className={`font-cinzel font-bold uppercase text-gold-shimmer drop-shadow-[0_2px_12px_rgba(232,179,78,0.35)] transition-all duration-300 ${config.title}`}
        >
          COFFEELO
        </span>
        {showTagline && (
          <span
            className={`font-sans font-medium uppercase text-[#E8B34E]/85 tracking-[0.28em] flex items-center gap-1.5 ${config.tag}`}
          >
            <span className="text-[6px] text-[#F5D77F]/90">✦</span>
            <span>{tagline}</span>
            <span className="text-[6px] text-[#F5D77F]/90">✦</span>
          </span>
        )}
      </div>
    </div>
  );
}
