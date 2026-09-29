import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Story from './components/sections/Story';
import Categories from './components/sections/Categories';
import Locations from './components/sections/Locations';
import Testimonials from './components/sections/Testimonials';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';
import { IMAGES } from './assets/images';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#120804] text-[#FFF9F0] selection:bg-[#E8B34E] selection:text-[#120804]">
      {/* Full-Screen Ambient 4K Luxury Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.luxury_hero}
          alt="Coffeelo Cafe Ambience"
          className="h-full w-full object-cover object-[52%_66%] filter brightness-[0.65] contrast-[1.1] scale-105"
        />
        {/* Responsive Luxury Dark Overlay */}
        <div className="absolute inset-0 bg-[#140A06]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140A06]/90 via-[#180C07]/92 to-[#0E0603]/98" />
        <div className="grain absolute inset-0 opacity-10" />
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Story />
        <Categories />
        <Locations />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
