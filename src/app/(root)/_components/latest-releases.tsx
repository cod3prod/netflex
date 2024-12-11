"use client";

import { MovieResponse } from "@/types/tmdb";
import useFetch from "@/hooks/use-fetch";
import MovieItem from "./movie-item";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

export default function LatestReleases() {
  const BASE_URL = process.env.NEXT_PUBLIC_TMDB_URL;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
  const URL = `${BASE_URL}/3/movie/now_playing?language=ko-KR`;
  
  const { data, isLoading, error } = useFetch<MovieResponse>(
    URL,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  const movies = data?.results;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">최신 개봉작</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={10}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="custom-swiper"
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20
            }
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieItem {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 