import React from 'react';

export default function SectionEyebrow({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8B34E]/30 bg-[#E8B34E]/10 backdrop-blur-md px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#E8B34E] shadow-[0_0_15px_rgba(232,179,78,0.15)]">
      <span className="h-[6px] w-[6px] rounded-full bg-[#E8B34E] animate-pulse" />
      {children}
    </div>
  );
}

