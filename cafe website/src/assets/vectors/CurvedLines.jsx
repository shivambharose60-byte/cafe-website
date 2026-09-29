import React from 'react';

export default function CurvedLines() {
  return (
    <svg
      viewBox="0 0 900 700"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      fill="none"
    >
      <path
        d="M-40 520C140 460 200 620 380 560S620 380 900 430"
        stroke="#C1552E"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <path
        d="M-20 180C160 240 220 90 420 140S680 260 920 160"
        stroke="#8B6F5C"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
    </svg>
  );
}
