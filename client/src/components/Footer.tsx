import { Fuel, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Fuel className="h-6 w-6" />
              <span className="text-xl font-bold">(주)잠실에너지</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              1981년부터 지역과 함께 성장해온 믿을 수 있는 에너지 파트너입니다.
              정직함과 신뢰를 바탕으로 고객님께 최고의 서비스를 제공하겠습니다.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">
                  02-0000-0000 {/* todo: remove mock functionality - add real phone */}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">
                  info@jamsilenergy.co.kr {/* todo: remove mock functionality - add real email */}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  서울시 송파구 잠실동 {/* todo: remove mock functionality - add real address */}
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <div className="space-y-2">
              <a href="/history" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                회사연혁
              </a>
              <a href="/philosophy" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                경영철학
              </a>
              <a href="/stations" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                지점안내
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 (주)잠실에너지. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}