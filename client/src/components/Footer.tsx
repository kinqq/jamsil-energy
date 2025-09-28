import { Fuel } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <div className="space-y-2">
              <Link
                href="/history"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                회사연혁
              </Link>
              <Link
                href="/philosophy"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                경영철학
              </Link>
              <Link
                href="/stations"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                지점안내
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © {year} (주)잠실에너지. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
