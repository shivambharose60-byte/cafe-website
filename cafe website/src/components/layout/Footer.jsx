import React from 'react';
import { FOOTER_LINKS } from '../../data/coffeeData';
import BrandLogo from '../common/BrandLogo';

function InstagramIcon({ className = "h-4.5 w-4.5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4.5 w-4.5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0E0603] px-4 sm:px-6 pb-10 pt-12 sm:pt-16 lg:px-10 border-t border-[#E8B34E]/20 text-[#D6C2B4] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 border-b border-[#E8B34E]/15 pb-10 md:flex-row">
          <div>
            <a href="#" className="inline-block group">
              <BrandLogo size="md" />
            </a>
            <p className="mt-3 max-w-xs text-sm text-[#D6C2B4]">
              An elevated luxury coffee experience, roasted in small batches in Parbhani.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8B34E]/30 bg-[#23120A] text-[#E8B34E] transition hover:bg-[#E8B34E] hover:text-[#140A06]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8B34E]/30 bg-[#23120A] text-[#E8B34E] transition hover:bg-[#E8B34E] hover:text-[#140A06]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <div className="mb-3 text-sm font-bold uppercase tracking-wider text-[#E8B34E]">
                  {col.title}
                </div>
                <div className="flex flex-col gap-2 text-[15px] text-[#D6C2B4]">
                  {col.links.map((l) => (
                    <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#E8B34E] transition w-fit">
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-sm text-[#D6C2B4]/80 sm:flex-row">
          <span>© {new Date().getFullYear()} Coffeelo. All rights reserved.</span>
          <span>Parbhani, Maharashtra</span>
        </div>
      </div>
    </footer>
  );
}
