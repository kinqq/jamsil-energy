import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import heroBackgroundImage from "@assets/20250606_225722_1759044671775.jpg";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  
  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navigateToPhilosophy = () => {
    setLocation('/philosophy');
  };
  
  const navigateToStations = () => {
    setLocation('/stations');
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          신뢰와 안심을 드리는
          <br />
          <span className="text-orange-300">에너지 파트너</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          1981년부터 지역과 함께 성장해온 잠실에너지
          <br />
          정직함과 신뢰를 바탕으로 고객님께 최고의 서비스를 제공합니다
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            onClick={navigateToPhilosophy}
            data-testid="button-hero-philosophy"
          >
            경영철학 보기
          </Button>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white border-orange-600"
            onClick={navigateToStations}
            data-testid="button-hero-stations"
          >
            지점안내 보기
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/80 hover:text-white animate-bounce"
          onClick={scrollToContent}
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}