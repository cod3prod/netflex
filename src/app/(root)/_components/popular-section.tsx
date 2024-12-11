"use client";

import { MovieResponse } from "@/types/tmdb";
import useFetch from "@/hooks/use-fetch";
import PopularItem from "./movie-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PopularSection() {
  const BASE_URL = process.env.NEXT_PUBLIC_TMDB_URL;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
  const URL = `${BASE_URL}/3/movie/popular?language=ko-KR&page=1`;
  const { data, isLoading, error } = useFetch<MovieResponse>(URL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log("fetch error", error);
    return <div>Error</div>;
  }

  const movies = data?.results;

  return (
    <section className="py-16 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">인기 콘텐츠</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={16}
          className="custom-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <PopularItem {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
