import React, { useState } from 'react';
import FloatingBeans from '../../assets/vectors/FloatingBeans';
import { IMAGES } from '../../assets/images';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#120804] px-4 sm:px-6 py-16 sm:py-24 text-[#FFF9F0] lg:px-10 border-t border-[#E8B34E]/15">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm scale-110"
        style={{ backgroundImage: `url(${IMAGES.cinematic_hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#140A06]/90 via-[#180C07]/95 to-[#0E0603]" />
      <FloatingBeans />

      <div className="relative mx-auto max-w-2xl text-center z-10">
        <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
          Stay in the <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E1] via-[#E8B34E] to-[#F5D77F]">Inner Circle</span>
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-md text-[14.5px] sm:text-[16px] text-[#D6C2B4]">
          Receive private access to small-batch reserve drops and artisanal roasting notes.
        </p>

        {subscribed ? (
          <div className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#C1552E] to-[#E8B34E] px-8 py-4 font-bold text-[#140A06] shadow-2xl animate-fade-up">
            You're on the list ☕ Welcome to the Coffeelo Reserve!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-full border border-[#E8B34E]/30 bg-[#23120A]/70 backdrop-blur-md px-6 py-3.5 text-[15px] text-[#FFF9F0] placeholder:text-[#D6C2B4]/50 outline-none focus:border-[#E8B34E] focus:ring-1 focus:ring-[#E8B34E] transition"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#C1552E] via-[#D48238] to-[#E8B34E] px-8 py-3.5 text-[15px] font-bold text-[#140A06] transition hover:scale-105 shadow-[0_0_25px_rgba(232,179,78,0.3)] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
