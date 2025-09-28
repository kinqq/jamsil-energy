import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Car, Wrench, Factory, Zap } from "lucide-react";
import jamsilGasStationImage from "@assets/jamsil-gas-station-1981.jpg";
import premiumNightImage from "@assets/premium-night.jpg";
import dongtanPremiumImage from "@assets/dongtan-premium.jpg";

interface TimelineEvent {
  year: string;
  month: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isImportant?: boolean;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1981",
    month: "3월",
    title: "잠실주유소 설립",
    description: "회사의 첫 번째 주유소로 시작된 역사의 출발점",
    icon: <Zap className="h-5 w-5" />,
    isImportant: true,
    image: jamsilGasStationImage,
  },
  {
    year: "1989",
    month: "3월",
    title: "잠실스테이션 앤 오토서비스 확장 오픈",
    description: "주유소에서 종합 자동차 서비스로 사업 영역 확장",
    icon: <Car className="h-5 w-5" />,
  },
  {
    year: "1992",
    month: "5월",
    title: "㈜제이스매틱 자동세차기 수입판매회사 설립",
    description: "자동세차 사업 진출로 서비스 다각화",
    icon: <Factory className="h-5 w-5" />,
  },
  {
    year: "1995",
    month: "1월",
    title: "오일교환 전문점 3&9 오픈",
    description: "전문적인 오일교환 서비스 제공 시작",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    year: "1995",
    month: "4월",
    title: "㈜제이스엔지니어링 설립",
    description: "엔지니어링 사업으로 기술력 확장",
    icon: <Building className="h-5 w-5" />,
  },
  {
    year: "2008",
    month: "1월",
    title: "㈜잠실에너지로 상호 변경",
    description: "종합 에너지 기업으로 새로운 도약",
    icon: <Zap className="h-5 w-5" />,
    isImportant: true,
  },
  {
    year: "2009",
    month: "7월",
    title: "명품주유소 오픈",
    description: "프리미엄 서비스를 제공하는 명품주유소 개소",
    icon: <Zap className="h-5 w-5" />,
    isImportant: true,
    image: premiumNightImage,
  },
  {
    year: "2014",
    month: "11월",
    title: "동탄명품주유소 오픈",
    description: "신도시 진출로 사업 영역 확장",
    icon: <Zap className="h-5 w-5" />,
    isImportant: true,
    image: dongtanPremiumImage,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">회사 연혁</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            1981년 첫 주유소 개소부터 현재까지, 지역과 함께 성장해온 우리의
            역사를 소개합니다
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
                data-testid={`timeline-item-${event.year}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 ${
                    event.isImportant ? "bg-primary" : "bg-primary/60"
                  }`}
                />

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <Card className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {event.isImportant && (
                          <Badge variant="default" className="text-xs">
                            주요 연혁
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {event.year}년 {event.month}
                        </div>
                      </div>

                      {event.image ? (
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                              {event.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {event.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                          </div>
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-48 object-cover"
                              data-testid={`timeline-image-${event.year}`}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                            {event.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {event.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
