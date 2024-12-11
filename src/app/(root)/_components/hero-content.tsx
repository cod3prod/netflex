import Button from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            새로운 시즌이 공개되었습니다
          </h1>
          <p className="text-xl mb-8 text-foreground/80">
            최신 인기 시리즈와 영화를 무제한으로 시청하세요.
          </p>
          <Button>
            지금 시청하기
          </Button>
        </div>
      </div>
    </div>
  );
}
