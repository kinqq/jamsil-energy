import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Smartphone } from "lucide-react";

interface Philosophy {
  number: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}

const philosophies: Philosophy[] = [
  {
    number: "01",
    title: "정직함 위에 세워진 신뢰",
    description: "기름 한 방울, 리터 1ml도 소홀히 하지 않습니다.",
    details: "정확한 계량, 투명한 가격, 꼼꼼한 품질 관리를 통해 고객과의 신뢰를 가장 소중한 가치로 삼고 있습니다.",
    icon: <Shield className="h-8 w-8" />,
    color: "text-blue-600"
  },
  {
    number: "02",
    title: "편안한 휴식이 가능한 공간",
    description: "잠시 들러가는 주유소일지라도 편안함을 느끼실 수 있도록",
    details: "깨끗한 환경, 밝은 미소, 빠르고 정중한 서비스로 고객님이 편안함을 느끼실 수 있도록 최선을 다합니다.",
    icon: <Heart className="h-8 w-8" />,
    color: "text-red-600"
  },
  {
    number: "03",
    title: "지역과 함께하는 동네 주유소",
    description: "저희는 단순한 상점이 아닌, 지역의 일부라고 생각합니다.",
    details: "이웃과 함께 웃고, 지역 행사나 나눔 활동에도 적극적으로 참여하며 지역 사회와 함께 성장하는 에너지 허브가 되겠습니다.",
    icon: <Users className="h-8 w-8" />,
    color: "text-green-600"
  },
  {
    number: "04",
    title: "사람 냄새 나는 디지털 서비스",
    description: "변화하는 시대에 맞는 스마트한 서비스를 도입하면서도",
    details: "모바일 예약, 무인 결제, 실시간 유가 안내 등 변화하는 시대에 맞는 스마트한 서비스를 도입하면서도 사람의 따뜻함과 친절은 결코 잊지 않겠습니다.",
    icon: <Smartphone className="h-8 w-8" />,
    color: "text-purple-600"
  }
];

export default function PhilosophySection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">경영 철학</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              저희 주유소는 단순히 기름만 넣는 곳이 아닙니다.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              고객 여러분께 신뢰와 안심, 그리고 따뜻함을 드리는 공간이 되기를 바랍니다.
            </p>
            <p className="text-base text-muted-foreground">
              언제 오셔도 믿고 맡기실 수 있도록, 다음의 철학을 지켜가고 있습니다.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((philosophy, index) => (
            <Card key={index} className="hover-elevate group" data-testid={`philosophy-card-${index + 1}`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-lg bg-primary/10 ${philosophy.color} group-hover:scale-110 transition-transform duration-200`}>
                      {philosophy.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-primary">{philosophy.number}</span>
                      <h3 className="text-xl font-bold text-foreground">{philosophy.title}</h3>
                    </div>
                    
                    <p className="text-base font-medium text-foreground mb-3">
                      {philosophy.description}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {philosophy.details}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}