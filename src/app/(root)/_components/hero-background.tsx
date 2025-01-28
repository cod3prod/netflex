"use client";

import Image from "next/image";
import bg1 from "@/assets/bg-01.webp";
import bg2 from "@/assets/bg-02.webp";
import bg3 from "@/assets/bg-03.webp";
import bg4 from "@/assets/bg-04.webp";
import bg5 from "@/assets/bg-05.webp";
import bg6 from "@/assets/bg-06.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function HeroBackground() {
  const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-full"
    >
      {backgrounds.map((bg, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={bg}
              alt={`hero-bg-${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 to-black/50" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
