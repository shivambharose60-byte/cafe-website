import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/coffeeData';
import BrandLogo from '../common/BrandLogo';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#140A06]/90 backdrop-blur-xl border-b border-[#E8B34E]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-[#140A06]/60 backdrop-blur-md border-b border-[#E8B34E]/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 lg:px-10">
        <a href="#" className="flex items-center group">
          <BrandLogo size="md" />
        </a>

        <nav className="hidden items-center gap-9 text-[15px] font-medium text-[#E3D3C6] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative py-1 transition-colors hover:text-[#E8B34E] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#E8B34E] after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] px-6 py-2.5 text-[14.5px] font-bold text-[#140A06] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(232,179,78,0.25)] hover:shadow-[0_0_30px_rgba(232,179,78,0.45)]"
          >
            <span>Order Reserve</span>
          </a>
        </div>

        <button
          className="p-1.5 text-[#E8B34E] md:hidden focus:outline-none rounded-lg bg-[#E8B34E]/10 border border-[#E8B34E]/20"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#E8B34E]/20 bg-[#140A06]/95 backdrop-blur-2xl px-6 py-5 md:hidden animate-fade-up">
          <div className="flex flex-col gap-4 text-[16px] font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#E3D3C6] hover:text-[#E8B34E] transition py-1 border-b border-[#E8B34E]/10"
              >
                {link}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center rounded-full bg-gradient-to-r from-[#C1552E] to-[#E8B34E] px-6 py-3 font-bold text-[#140A06]"
            >
              Order Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
