# Netflex

**tmdb API를 이용한 넷플릭스 스타일 랜딩 페이지**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **TMDB API를 이용한 데이터 불러오기**: TMDB API를 사용해 현재 상영 중인 영화 데이터를 불러오고, 이를 기반으로 동적인 UI를 구현합니다.
- **Swiper를 이용한 반응형 슬라이더 구현**: Swiper를 이용해 영화 목록을 슬라이드 방식으로 표시하며, 반응형 레이아웃과 부드러운 사용자 경험을 제공합니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS
- **라이브러리**: Swiper
- **API**: TMDB API, api.dicebear.com

## 📝 **핵심 학습 내용**

### 1. TMDB API를 이용한 데이터 불러오기

`useFetch` 커스텀 훅을 사용해 현재 상영 중인 영화 데이터를 호출하며, API 호출 시 헤더에 인증 토큰을 포함합니다.

```typescript
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const URL = `${BASE_URL}/3/movie/now_playing?language=ko-KR`;

const { data, isLoading, error } = useFetch<MovieResponse>(URL, {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});
```

### 2. Swiper를 이용한 반응형 슬라이더 구현

Swiper 라이브러리를 사용하여 영화 데이터를 슬라이드 형태로 표시합니다.

```tsx
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
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
