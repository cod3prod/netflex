import { MovieItemType } from "@/types/tmdb";
import Star from "@/assets/star.svg";
import Image from "next/image";
import { format } from "date-fns";
import { useState } from "react";
import SkeletonImage from "@/components/ui/skeleton-image";

export default function MovieItem({
  title,
  poster_path,
  vote_average,
  release_date,
}: MovieItemType) {
  const [imageLoading, setImageLoading] = useState(true);
  const thumbnail = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="group relative aspect-[2/3] bg-background-card rounded-lg overflow-hidden cursor-pointer">
      {imageLoading && (
        <figure className="absolute inset-0 w-full h-full rounded-lg flex items-center justify-center">
          <SkeletonImage className="w-full h-full" />
        </figure>
      )}
      <Image
        src={thumbnail}
        alt={title}
        width={366}
        height={518}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
          imageLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setImageLoading(false)}
      />

      {/* 호버 시 나타나는 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 컨텐츠 정보 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-lg font-bold line-clamp-1 mb-2">{title}</h4>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Image
              src={Star}
              alt="star"
              width={16}
              height={16}
              className="object-contain"
            />
            <span className="text-yellow-500 font-bold">
              {vote_average.toFixed(1)}
            </span>
          </div>
          <span className="text-yellow-500 font-bold">
            {format(new Date(release_date), "yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
}
