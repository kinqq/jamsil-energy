import { Switch, Route } from "wouter";
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

function Router() {
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <div className="flex flex-col min-h-screen">
            <div className="relative">
              <Header />
              {/* <div className="absolute top-4 right-4 z-50">
                <ThemeToggle />
              </div> */}
            </div>
            <div className="flex-1">
              <Router />
            </div>
            <Footer />
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
