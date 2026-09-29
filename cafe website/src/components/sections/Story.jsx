import React from 'react';
import SectionEyebrow from '../common/SectionEyebrow';
import { IMAGES } from '../../assets/images';
import { CAFE_INFO } from '../../data/coffeeData';
import { Award, Compass, Sparkles } from 'lucide-react';

export default function Story() {
  return (
    <section id="notes" className="relative overflow-hidden bg-gradient-to-b from-[#140A06] via-[#1A0F0A] to-[#120804] px-4 sm:px-6 py-16 sm:py-28 lg:px-10 border-t border-[#E8B34E]/15 text-[#FFF9F0]">
      {/* Background Ambience Orbs */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#E8B34E]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-[#C1552E]/12 blur-[120px] pointer-events-none" />
      <div className="grain absolute inset-0 opacity-10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 z-10">
        
        {/* Left Column: Perfectly Centered Circular Luxury Media Container with Glowing Gold Halo */}
        <div className="relative flex justify-center order-2 lg:order-1 px-4 sm:px-0">
          <div className="relative">
            {/* Perfectly Rounded Circle with Centered Coffee Cup Framing */}
            <div className="relative aspect-square w-64 sm:w-88 md:w-96 overflow-hidden rounded-full border-4 border-[#E8B34E]/60 shadow-[0_0_65px_rgba(232,179,78,0.32)] bg-[#23120A] group">
              <img
                src={IMAGES.luxury_hero}
                alt="Artisanal luxury coffee experience at Coffeelo"
                className="h-full w-full object-cover object-[52%_66%] scale-105 transition duration-1000 group-hover:scale-110 filter brightness-[0.96] contrast-[1.06]"
                loading="lazy"
              />
              {/* Subtle ambient lighting vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140A06]/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Luxury Altitude Badge - Positioned cleanly outside overflow-hidden */}
            <div className="absolute -bottom-3 right-0 sm:-bottom-4 sm:-right-3 z-20 rounded-2xl bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] p-[1.5px] shadow-[0_12px_35px_rgba(0,0,0,0.7)] gold-glow hover:scale-105 transition duration-300">
              <div className="rounded-2xl bg-[#140A06]/95 backdrop-blur-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center border border-[#E8B34E]/20 min-w-[130px] sm:min-w-[150px]">
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-gradient tracking-tight">{CAFE_INFO.altitude}</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#E8B34E] font-semibold">{CAFE_INFO.altitudeNote}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Story Copy & Highlight Badges */}
        <div className="order-1 lg:order-2">
          <SectionEyebrow>Our Heritage & Craft</SectionEyebrow>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FFF9F0] leading-tight">
            From Bean to{' '}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F]">
              Mastery
            </span>
          </h2>
          
          <p className="mt-4 sm:mt-6 max-w-lg text-[15px] sm:text-[17.5px] leading-relaxed text-[#D6C2B4]">
            Coffeelo sources supreme-grade beans directly from generational growers we know by name, 
            roasts them slowly in small artisanal runs, and delivers every cup close to the harvest. 
            Nothing sits in a warehouse — the pure flavor in your cup is the exact notes we tasted at the roast.
          </p>

          {/* Highlight Cards */}
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 sm:max-w-lg">
            <div className="rounded-2xl border border-[#E8B34E]/25 bg-gradient-to-b from-[#23120A]/90 to-[#140A06]/95 backdrop-blur-xl p-5 shadow-lg transition-all duration-300 hover:border-[#E8B34E]/60 hover:-translate-y-1">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8B34E]/15 border border-[#E8B34E]/30 text-[#E8B34E]">
                  <Compass className="h-4.5 w-4.5" />
                </div>
                <div className="font-display text-lg font-bold text-[#FFF9F0]">Direct Trade</div>
              </div>
              <div className="mt-2.5 text-[13.5px] leading-relaxed text-[#D6C2B4]">
                Ethically sourced directly from grower to master roaster with zero middlemen.
              </div>
            </div>

            <div className="rounded-2xl border border-[#E8B34E]/25 bg-gradient-to-b from-[#23120A]/90 to-[#140A06]/95 backdrop-blur-xl p-5 shadow-lg transition-all duration-300 hover:border-[#E8B34E]/60 hover:-translate-y-1">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8B34E]/15 border border-[#E8B34E]/30 text-[#E8B34E]">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div className="font-display text-lg font-bold text-[#FFF9F0]">Small Batch</div>
              </div>
              <div className="mt-2.5 text-[13.5px] leading-relaxed text-[#D6C2B4]">
                Micro-roasted in short artisanal runs to preserve peak origin aromas.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
