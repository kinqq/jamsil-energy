import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Fuel, Droplets, Hand, Calendar, Phone } from "lucide-react";
import jamsilCurrentImage from "@assets/jamsil-current_1759044837047.jpg";
import premiumNightImage from "@assets/premium-night.jpg";
import dongtanPremiumImage from "@assets/dongtan-premium.jpg";

interface Station {
  id: string;
  name: string;
  address: string;
  phone: string;
  openDate: string;
  services: string[];
  hours: string;
  isOpen24Hours: boolean;
  specialFeatures?: string[];
  image?: string;
  pumpDetails: string;
  washDetails: string;
  handWashDetails?: string;
}

const stations: Station[] = [
  {
    id: "jamsil",
    name: "(주)잠실에너지",
    address: "서울시 송파구 송파대로 442",
    phone: "02-414-5010",
    openDate: "1981년 3월 7일",
    services: ["주유기", "세차기"],
    hours: "24시간 영업",
    isOpen24Hours: true,
    image: jamsilCurrentImage,
    pumpDetails: "셀프 6복식 6기",
    washDetails: "터널식 세차기",
  },
  {
    id: "myeongpum",
    name: "명품주유소",
    address: "서울시 강남구 도공로 249",
    phone: "02-501-1256",
    openDate: "2009년 7월 14일",
    services: ["주유기", "세차기", "손세차장"],
    hours: "24시간 영업",
    isOpen24Hours: true,
    specialFeatures: ["프리미엄 서비스"],
    image: premiumNightImage,
    pumpDetails: "6복식 2기",
    washDetails: "문형식 세차기",
    handWashDetails: "2BAY",
  },
  {
    id: "dongtan",
    name: "동탄명품주유소",
    address: "경기도 화성시 동탄신리천로 249",
    phone: "031-378-5010",
    openDate: "2014년 11월 10일",
    services: ["주유기", "세차기"],
    hours: "06시~23시",
    isOpen24Hours: false,
    specialFeatures: ["신도시 위치"],
    image: dongtanPremiumImage,
    pumpDetails: "셀프 6복식 5기",
    washDetails: "터널식 세차기",
  },
];

const getServiceIcon = (service: string) => {
  switch (service) {
    case "주유기":
      return <Fuel className="h-4 w-4" />;
    case "세차기":
      return <Droplets className="h-4 w-4" />;
    case "손세차장":
      return <Hand className="h-4 w-4" />;
    default:
      return <Fuel className="h-4 w-4" />;
  }
};

export default function StationsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">지점 안내</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            고객님의 편의를 위해 3개 지점에서 최고의 서비스를 제공하고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stations.map((station) => (
            <Card
              key={station.id}
              className="hover-elevate group"
              data-testid={`station-card-${station.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {station.name}
                  </CardTitle>
                  <div className="flex gap-1">
                    {station.isOpen24Hours ? (
                      <Badge variant="default" className="text-xs">
                        24시간
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        일반영업
                      </Badge>
                    )}
                    {station.specialFeatures?.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {station.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={station.image}
                      alt={station.name}
                      className="w-full h-60 object-cover"
                      data-testid={`station-image-${station.id}`}
                    />
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">주소</p>
                    <p className="text-sm text-muted-foreground">
                      {station.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">전화번호</p>
                    <p className="text-sm text-muted-foreground">
                      {station.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      개소일
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {station.openDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      운영시간
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {station.hours}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-3">
                    상세 서비스 정보
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Fuel className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">주유기</p>
                        <p className="text-xs text-muted-foreground">{station.pumpDetails}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Droplets className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">세차기</p>
                        <p className="text-xs text-muted-foreground">{station.washDetails}</p>
                      </div>
                    </div>
                    
                    {station.handWashDetails && (
                      <div className="flex items-start gap-3">
                        <Hand className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">손세차장</p>
                          <p className="text-xs text-muted-foreground">{station.handWashDetails}</p>
                        </div>
                      </div>
                    )}
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
