import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import PhilosophySection from "@/components/PhilosophySection";
import StationsSection from "@/components/StationsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="main-content">
        <TimelineSection />
        <PhilosophySection />
        <StationsSection />
      </div>
    </main>
  );
}