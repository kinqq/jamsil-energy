import PhilosophySection from "@/components/PhilosophySection";

export default function Philosophy() {
  return (
    <main className="pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-2">
          {/* <h1 className="text-4xl font-bold text-foreground mb-4">경영 철학</h1> */}
          <p className="text-2xl font-bold text-foreground max-w-3xl mx-auto">
            저희 잠실에너지는 단순히 연료를 매대하는 사업을 넘어서 지역사회의 한 구성원으로서 책임감을 가지고 있습니다.
            다음의 4가지 핵심 가치를 바탕으로 고객님을 섬기고 있습니다.
          </p>
        </div>
      </div>
      <PhilosophySection />
    </main>
  );
}