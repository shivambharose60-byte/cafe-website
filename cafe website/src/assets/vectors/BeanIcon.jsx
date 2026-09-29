import React from 'react';

export default function BeanIcon({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 40 56"
      className={className}
      style={style}
      fill="currentColor"
    >
      <path d="M20 2C9 2 2 14 2 28s7 26 18 26 18-14 18-26S31 2 20 2Z" />
      <path
        d="M20 4C13 12 13 44 20 52"
        stroke="#F7F1E6"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
