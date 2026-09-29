import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';
import SectionEyebrow from '../common/SectionEyebrow';
import { PRODUCTS, MENU_CATEGORIES } from '../../data/coffeeData';
import { IMAGES } from '../../assets/images';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [orderedItem, setOrderedItem] = useState(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  const handleOrder = (productName) => {
    setOrderedItem(productName);
    setTimeout(() => setOrderedItem(null), 3000);
  };

  return (
    <section id="products" className="relative bg-[#180C07] px-4 sm:px-6 py-16 sm:py-28 lg:px-10 border-t border-[#E8B34E]/15 text-[#FFF9F0] overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-[#E8B34E]/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-[#C1552E]/8 blur-[120px] pointer-events-none" />
      <div className="grain absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Artisanal Catalog & Roastery</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFF9F0] leading-tight">
              Crafted With{' '}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F] drop-shadow-[0_4px_24px_rgba(232,179,78,0.3)]">
                Perfection
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[14px] sm:text-[16.5px] leading-relaxed text-[#D6C2B4]">
            Hand-crafted espresso extractions, eighteen-hour cold brews, decadent iced frappes, and single-origin special reserve brews.
          </p>
        </div>

        {/* ORDER CONFIRMATION TOAST NOTIFICATION */}
        {orderedItem && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8B34E]/50 bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-[#140A06] shadow-[0_0_30px_rgba(232,179,78,0.4)] animate-bounce text-sm sm:text-base">
            <Check className="h-4 w-4 stroke-[3]" />
            <span>Added "{orderedItem}" to your reserve tray!</span>
          </div>
        )}

        {/* INTERACTIVE LUXURY CATEGORY FILTER TABS */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-3.5 pb-2">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all'
              ? PRODUCTS.length
              : PRODUCTS.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-1.5 sm:gap-2 rounded-full py-2 sm:py-2.5 px-3.5 sm:px-5 text-[12.5px] sm:text-[13.5px] font-semibold transition-all duration-300 border ${
                  isActive
                    ? "border-[#E8B34E] bg-gradient-to-r from-[#E8B34E] via-[#D4AF37] to-[#C1552E] text-[#140A06] shadow-[0_0_25px_rgba(232,179,78,0.35)] scale-105"
                    : "border-[#E8B34E]/20 bg-[#23120A]/70 backdrop-blur-md text-[#D6C2B4] hover:border-[#E8B34E]/50 hover:bg-[#E8B34E]/10 hover:text-[#FFF9F0]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span className={`rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold ${
                  isActive ? "bg-[#140A06]/25 text-[#140A06]" : "bg-[#140A06]/60 text-[#E8B34E]"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-COLUMN RESPONSIVE MENU PRODUCT GRID */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#23120A] to-[#140A06] border border-[#E8B34E]/20 shadow-xl hover:border-[#E8B34E]/60 hover:shadow-[0_20px_45px_rgba(232,179,78,0.18)] transition-all duration-300 hover:-translate-y-1.5 w-full"
            >
              {/* Product Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#140A06]">
                <img
                  src={IMAGES[p.img] || IMAGES.luxury_hero}
                  alt={p.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.95]"
                  loading="lazy"
                />
                
                {/* Category / Flavor Tag */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 rounded-full bg-[#140A06]/85 backdrop-blur-md border border-[#E8B34E]/30 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10.5px] sm:text-[11.5px] font-semibold uppercase tracking-wider text-[#E8B34E] shadow-md">
                  {p.tag}
                </div>

                {/* Subtle bottom shadow vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140A06] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFF9F0] group-hover:text-gold-gradient transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[#D6C2B4]">
                    {p.desc}
                  </p>
                </div>
                
                {/* Price & Order Action */}
                <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-[#E8B34E]/15 pt-3.5 sm:pt-4">
                  <div>
                    <span className="text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#D6C2B4]/70 block">Fresh Brew</span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-gold-gradient">{p.price}</span>
                  </div>
                  
                  <button
                    onClick={() => handleOrder(p.name)}
                    className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] px-4 sm:px-5 py-2 sm:py-2.5 text-[12.5px] sm:text-[13.5px] font-bold text-[#140A06] transition-all duration-300 hover:scale-105 shadow-md active:scale-95 shrink-0"
                  >
                    <span>Order Now</span>
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
