import React from 'react';
import BeanIcon from './BeanIcon';

export default function FloatingBeans() {
  const beans = [
    { top: "6%", left: "4%", size: 26, rot: -18, delay: "0s", dur: "7s" },
    { top: "14%", left: "88%", size: 20, rot: 30, delay: "1.1s", dur: "6s" },
    { top: "40%", left: "2%", size: 16, rot: 10, delay: "2s", dur: "8s" },
    { top: "68%", left: "92%", size: 24, rot: -8, delay: "0.5s", dur: "7.5s" },
    { top: "82%", left: "10%", size: 18, rot: 22, delay: "1.6s", dur: "6.5s" },
    { top: "50%", left: "95%", size: 14, rot: -30, delay: "2.4s", dur: "9s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {beans.map((b, i) => (
        <div
          key={i}
          className="absolute animate-bean-float"
          style={{
            top: b.top,
            left: b.left,
            animationDelay: b.delay,
            animationDuration: b.dur,
          }}
        >
          <BeanIcon
            className="text-[#3B2318]/70"
            style={{ width: b.size, height: b.size * 1.4, transform: `rotate(${b.rot}deg)` }}
          />
        </div>
      ))}
    </div>
  );
}
