import TimelineSection from "@/components/TimelineSection";

export default function History() {
  return (
    <main className="pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">회사 연혁</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            1981년 첫 주유소 개소부터 현재까지, 저희는 지역과 함께 성장하며 신뢰를 쌓아왔습니다.
            40여 년간의 역사와 주요 이정표를 소개합니다.
          </p>
        </div>
      </div>
      <TimelineSection />
    </main>
  );
}