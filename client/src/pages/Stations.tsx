import StationsSection from "@/components/StationsSection";

export default function Stations() {
  return (
    <main className="pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">지점 안내</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            고객님의 편의를 위해 서울과 경기도 주요 지역에 3개 지점을 운영하고 있습니다.
            각 지점에서는 차별화된 서비스와 편의시설을 제공하고 있습니다.
          </p>
        </div>
      </div>
      <StationsSection />
    </main>
  );
}