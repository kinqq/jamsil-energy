// App.tsx
import { Switch, Route, Router as WouterRouter } from "wouter"; // ⬅️ 추가: Router import & alias
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Home from "@/pages/Home";
import History from "@/pages/History";
import Philosophy from "@/pages/Philosophy";
import Stations from "@/pages/Stations";
import NotFound from "@/pages/not-found";

function Routes() {
  // ⬅️ 이름 살짝 변경(선택)
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/philosophy" component={Philosophy} />
      <Route path="/stations" component={Stations} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Vite는 BASE_URL이 '/repo/' 처럼 뒤에 슬래시가 붙어 옴 → wouter base엔 보통 제거해서 넣자
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // '/jamsil-energy/' -> '/jamsil-energy'

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={base}>
          {/* ⬅️ 핵심: 전체 앱을 base로 감싸기 */}
          <div className="min-h-screen bg-background text-foreground">
            <div className="flex flex-col min-h-screen">
              <div className="relative">
                <Header />
                {/* <div className="absolute top-4 right-4 z-50">
                  <ThemeToggle />
                </div> */}
              </div>
              <div className="flex-1">
                <Routes />
              </div>
              <Footer />
            </div>
          </div>
          <Toaster />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
