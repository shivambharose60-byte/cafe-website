import React from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import SectionEyebrow from '../common/SectionEyebrow';
import { CAFE_INFO } from '../../data/coffeeData';

export default function Locations() {
  return (
    <section id="locations" className="bg-[#180C07] px-4 sm:px-6 py-16 sm:py-24 lg:px-10 border-t border-[#E8B34E]/15 text-[#FFF9F0] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Visit The Café</SectionEyebrow>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FFF9F0] leading-tight">
          Come Have a Cup <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F]">With Us</span>
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 rounded-[24px] sm:rounded-[28px] border border-[#E8B34E]/25 bg-gradient-to-b from-[#23120A] to-[#140A06] p-5 sm:p-8 shadow-xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E8B34E]/15 border border-[#E8B34E]/30">
              <MapPin className="h-6 w-6 text-[#E8B34E]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#FFF9F0]">{CAFE_INFO.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#D6C2B4]">
              {CAFE_INFO.addressLine1}
              <br />
              {CAFE_INFO.addressLine2}
            </p>
            <div className="mt-5 flex items-center gap-2 text-[15px] text-[#E8B34E]">
              <Clock className="h-4 w-4 text-[#E8B34E]" />
              {CAFE_INFO.timing}
            </div>
            <a
              href={CAFE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] px-6 py-3 text-[14px] font-bold text-[#140A06] transition hover:scale-105 shadow-md"
            >
              <span>Get Directions</span> <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#E8B34E]/25 bg-[#140A06] lg:col-span-3 min-h-[320px] shadow-xl flex items-center justify-center">
            <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full opacity-25">
              <path d="M0 80h600M0 160h600M0 240h600M0 320h600" stroke="#E8B34E" strokeWidth="1" />
              <path d="M100 0v400M240 0v400M380 0v400M520 0v400" stroke="#E8B34E" strokeWidth="1" />
            </svg>
            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-[#E8B34E]/20 border border-[#E8B34E] shadow-[0_0_35px_rgba(232,179,78,0.4)]">
                <MapPin className="h-8 w-8 text-[#E8B34E]" />
              </div>
              <div className="mt-4 font-display text-2xl font-bold text-[#FFF9F0]">Basmat Road, Parbhani</div>
              <div className="mt-1 text-sm text-[#D6C2B4]">Maharashtra, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
