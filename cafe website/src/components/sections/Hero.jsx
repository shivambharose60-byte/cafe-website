import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { IMAGES } from '../../assets/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-[96vh] w-full flex flex-col justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:py-28 text-[#FFF9F0]"
    >
      {/* LUXURY COFFEE BACKGROUND - CLEAN, NO GRID LINES */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.luxury_hero}
          alt="Coffeelo Artisanal Coffee Experience"
          className="h-full w-full object-cover object-[52%_66%] filter brightness-[0.72] contrast-[1.12] scale-105"
        />

        {/* Warm Dark Espresso & Amber Overlays (No cyan/tech colors, NO grid lines) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120804]/95 via-[#180C07]/80 to-[#120804]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120804] via-transparent to-[#120804]/70" />

        {/* Warm Golden & Terracotta Ambient Light Glows */}
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#E8B34E]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#C1552E]/20 blur-[140px] pointer-events-none" />
        <div className="grain absolute inset-0 opacity-10" />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO HEADINGS & CTA BUTTONS (8 COLS) */}
          <div className="lg:col-span-8 xl:col-span-7 animate-fade-up">
            
            {/* Artisanal Gold Eyebrow Badge */}
            <div className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E8B34E]/40 bg-[#E8B34E]/10 backdrop-blur-xl px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#E8B34E] shadow-[0_0_20px_rgba(232,179,78,0.2)]">
              <span className="flex h-2 w-2 rounded-full bg-[#E8B34E] animate-pulse" />
              <Sparkles className="h-3.5 w-3.5 text-[#E8B34E]" />
              <span>Reserve Collection · Parbhani</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-[#FFF9F0]">
              An Elevated{' '}
              <br />
              <span className="italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F] drop-shadow-[0_4px_24px_rgba(232,179,78,0.35)]">
                Coffee
              </span>{' '}
              <br />
              Experience
            </h1>

            {/* Artisanal Story Subtitle */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#D6C2B4]">
              Single-origin beans, roasted slowly in small artisanal batches with precision and care. 
              Taste the deep notes of dark chocolate, toasted hazelnut, and golden caramel in every pour.
            </p>

            {/* Coffee CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#products"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] px-8 py-4 text-base font-bold text-[#140A06] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(232,179,78,0.35)] hover:shadow-[0_0_45px_rgba(232,179,78,0.55)] cursor-pointer"
              >
                <span>Order Reserve Blend</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8B34E]/30 bg-[#160B06]/60 backdrop-blur-xl px-7 py-4 text-base font-semibold text-[#FFF9F0] transition-all duration-300 hover:border-[#E8B34E] hover:bg-[#E8B34E]/15 hover:scale-105 shadow-[0_0_20px_rgba(232,179,78,0.15)]"
              >
                <span>Explore 10 Roast Scenes</span>
                <ChevronDown className="h-4 w-4 text-[#E8B34E]" />
              </a>
            </div>

            {/* Coffee Stats Cards */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-[#E8B34E]/20 pt-6 max-w-2xl">
              <div className="rounded-2xl border border-[#E8B34E]/15 bg-[#140A06]/60 backdrop-blur-md p-3.5 sm:p-4 transition-all hover:border-[#E8B34E]/40 hover:bg-[#1E0F08]/80">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F] font-display text-2xl sm:text-3xl font-bold">100%</div>
                <div className="mt-1 text-xs sm:text-[13px] text-[#D6C2B4]">Single-Origin Beans</div>
              </div>

              <div className="rounded-2xl border border-[#E8B34E]/15 bg-[#140A06]/60 backdrop-blur-md p-3.5 sm:p-4 transition-all hover:border-[#E8B34E]/40 hover:bg-[#1E0F08]/80">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F] font-display text-2xl sm:text-3xl font-bold">1200m</div>
                <div className="mt-1 text-xs sm:text-[13px] text-[#D6C2B4]">High-Altitude Farm</div>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-[#E8B34E]/15 bg-[#140A06]/60 backdrop-blur-md p-3.5 sm:p-4 transition-all hover:border-[#E8B34E]/40 hover:bg-[#1E0F08]/80">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F] font-display text-2xl sm:text-3xl font-bold">Small-Batch</div>
                <div className="mt-1 text-xs sm:text-[13px] text-[#D6C2B4]">Artisanal Roasting</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean open space showcasing the background coffee visual */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>
      </div>
    </section>
  );
}
