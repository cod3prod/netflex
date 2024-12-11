"use client";

import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";

export default function HeroSection() {

  return (
    <section className="relative max-w-7xl mx-auto h-[70vh]">
      <div className="absolute inset-0">
        <HeroBackground />
        <HeroContent />
      </div>
    </section>
  );
}
