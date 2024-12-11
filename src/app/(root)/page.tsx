import HeroSection from "./_components/hero-section";
import PopularSection from "./_components/popular-section";
import LatestReleases from "./_components/latest-releases";

export default function Page() {
  return (
    <main className="min-h-screen pt-20">
      <HeroSection />
      <PopularSection />
      <LatestReleases />
    </main>
  );
}
