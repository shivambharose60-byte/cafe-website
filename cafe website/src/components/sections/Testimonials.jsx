import React from 'react';
import { Star } from 'lucide-react';
import SectionEyebrow from '../common/SectionEyebrow';
import { TESTIMONIALS } from '../../data/coffeeData';

export default function Testimonials() {
  return (
    <section className="bg-[#140A06] px-4 sm:px-6 py-16 sm:py-24 lg:px-10 border-t border-[#E8B34E]/15 text-[#FFF9F0] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Word of Mouth</SectionEyebrow>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FFF9F0] leading-tight">
          Loved by <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F]">Coffee Aficionados</span>
        </h2>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-[24px] sm:rounded-[28px] border border-[#E8B34E]/20 bg-gradient-to-b from-[#23120A] to-[#140A06] p-5 sm:p-7 shadow-xl hover:border-[#E8B34E]/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="mb-4 flex gap-1 text-[#E8B34E]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-[#D6C2B4]">"{t.quote}"</p>
              <div className="mt-6 border-t border-[#E8B34E]/15 pt-4">
                <div className="font-semibold text-[#FFF9F0]">{t.name}</div>
                <div className="text-sm text-[#E8B34E]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
