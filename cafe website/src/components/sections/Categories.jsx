import React, { useState } from 'react';
import { ArrowRight, Flame, Sparkles, Thermometer, Coffee, Compass, Award } from 'lucide-react';
import SectionEyebrow from '../common/SectionEyebrow';
import BeanIcon from '../../assets/vectors/BeanIcon';
import { CATEGORIES, CINEMATIC_SCENES } from '../../data/coffeeData';

export default function Categories() {
  const [selectedScene, setSelectedScene] = useState(CINEMATIC_SCENES[2]); // Default: Micro Roast

  return (
    <section id="collections" className="relative bg-[#140A06] px-4 sm:px-6 py-16 sm:py-28 lg:px-10 border-t border-[#E8B34E]/15 text-[#FFF9F0] overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-10 h-96 w-96 rounded-full bg-[#E8B34E]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-[#C1552E]/10 blur-[120px] pointer-events-none" />
      <div className="grain absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Artisan Roastery & Profiler</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFF9F0] leading-tight">
              Find Your{' '}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F] drop-shadow-[0_4px_24px_rgba(232,179,78,0.3)]">
                Perfect Roast
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[14px] sm:text-[16.5px] leading-relaxed text-[#D6C2B4]">
            Every batch is roasted in small artisan runs to unlock the origin's exact sweetness, aromatics, and velvet finish.
          </p>
        </div>

        {/* INTEGRATED LIVE AMBIENCE & CINEMATIC SCENE STUDIO */}
        <div className="mt-10 sm:mt-12 rounded-[24px] sm:rounded-[32px] border border-[#E8B34E]/30 bg-gradient-to-r from-[#23120A]/95 via-[#1A0C06]/92 to-[#120804]/98 backdrop-blur-2xl p-4 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.65)] gold-glow">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            
            {/* Active Ambience & Scene Metadata */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#E8B34E]/15 border border-[#E8B34E]/30 text-[#E8B34E] shadow-sm shrink-0">
                <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-[#E8B34E] animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E8B34E] animate-ping" />
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#E8B34E]">
                    Live Ambience Studio · {selectedScene.name}
                  </span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold text-[#FFF9F0]">
                  {selectedScene.title}
                </div>
                <p className="mt-1 text-[13.5px] text-[#D6C2B4] max-w-md">
                  {selectedScene.desc}
                </p>
              </div>
            </div>

            {/* Tasting Notes Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedScene.notes.map((note, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-[#E8B34E]/30 bg-[#E8B34E]/10 backdrop-blur-md px-3.5 py-1.5 text-[12px] font-semibold text-[#E8B34E] shadow-sm"
                >
                  {note}
                </span>
              ))}
            </div>

          </div>

          {/* 10-Scene Interactive Horizontal Pill Switcher */}
          <div className="mt-6 border-t border-[#E8B34E]/15 pt-5">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#D6C2B4]/80 flex items-center justify-between">
              <span>Switch Cinematic Experience (10 Scenes):</span>
              <span className="text-[#E8B34E]">Active: {selectedScene.name}</span>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 max-w-full custom-scrollbar select-none">
              {CINEMATIC_SCENES.map((scene) => {
                const isActive = selectedScene.id === scene.id;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene)}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-full py-2.5 px-4 text-[12.5px] font-semibold transition-all duration-200 border shrink-0 ${
                      isActive
                        ? "border-[#E8B34E] bg-gradient-to-r from-[#E8B34E]/35 to-[#C1552E]/35 text-[#FFF9F0] shadow-lg scale-105"
                        : "border-[#E8B34E]/15 bg-[#140A06]/60 text-[#D6C2B4] hover:border-[#E8B34E]/40 hover:bg-[#E8B34E]/10"
                    }`}
                  >
                    <span>{scene.short}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E8B34E] animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3 ULTRA-LUXURY 3D ROAST PROFILE CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div key={c.id} className="flip-card relative h-[400px] cursor-pointer group select-none">
              <div className="flip-inner relative h-full w-full">
                
                {/* Front Side: Deep Luxury Dark Glass */}
                <div className="flip-front flex h-full w-full flex-col justify-between rounded-[32px] bg-gradient-to-b from-[#23120A] via-[#1A0C06] to-[#120804] border border-[#E8B34E]/25 p-8 text-[#FFF9F0] shadow-2xl gold-glow group-hover:border-[#E8B34E]/60 transition-colors">
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8B34E]/15 border border-[#E8B34E]/30 text-[#E8B34E]">
                        <BeanIcon className="h-7 w-7 text-[#E8B34E]" />
                      </div>
                      <span className="rounded-full border border-[#E8B34E]/30 bg-[#E8B34E]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E8B34E]">
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-3xl font-bold text-[#FFF9F0]">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[13.5px] font-medium text-[#E8B34E]/90">
                      {c.tagline}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#D6C2B4]">
                      {c.note}
                    </p>
                  </div>

                  <div className="border-t border-[#E8B34E]/15 pt-4">
                    <div className="flex items-center justify-between text-xs text-[#D6C2B4]">
                      <div className="flex items-center gap-1.5">
                        <Thermometer className="h-3.5 w-3.5 text-[#E8B34E]" />
                        <span>{c.roastTemp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#E8B34E] font-bold">Intensity:</span>
                        <span>{c.intensity}/5</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#E8B34E]">
                        Hover for Full Profile →
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#E8B34E] transition group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>

                {/* Back Side: Radiant Copper & Terracotta Roast Sheet */}
                <div className="flip-back flex h-full w-full flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#C1552E] via-[#9B3818] to-[#68220A] border-2 border-[#E8B34E]/40 p-8 text-[#FFF9F0] shadow-2xl">
                  
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FFF5E1]/80">
                      Roast Profile & Notes
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#FFF9F0]">
                      {c.name}
                    </h3>

                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#FFF5E1]">
                        Key Flavor Notes:
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {c.flavorNotes.map((f, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-[#140A06]/40 backdrop-blur-sm border border-[#FFF5E1]/20 px-3 py-1 text-xs font-semibold text-[#FFF9F0]"
                          >
                            ✦ {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#FFF5E1]">
                        Recommended Brew:
                      </div>
                      <div className="mt-1 text-sm font-bold text-[#FFF9F0]">
                        {c.bestFor}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#products"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFF9F0] py-3.5 text-[14px] font-bold text-[#140A06] transition hover:bg-[#E8B34E] shadow-lg hover:scale-105"
                  >
                    <span>Order This Roast</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
