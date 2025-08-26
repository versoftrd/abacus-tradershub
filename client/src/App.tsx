import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import TermsAndConditions from "@/pages/TermsAndConditions";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terminos-y-condiciones" component={TermsAndConditions} />
      <Route path="/abacus-experience" component={() => <div className="min-h-screen bg-page-bg flex items-center justify-center text-white">Abacus Experience - Coming Soon</div>} />
      <Route path="/market-open" component={() => <div className="min-h-screen bg-page-bg flex items-center justify-center text-white">Market Open - Coming Soon</div>} />
      <Route path="/campus-virtual" component={() => <div className="min-h-screen bg-page-bg flex items-center justify-center text-white">Campus Virtual - Coming Soon</div>} />
      <Route path="/traders-hub" component={() => <div className="min-h-screen bg-page-bg flex items-center justify-center text-white">Traders Hub - Coming Soon</div>} />
      <Route path="/pricing" component={() => <div className="min-h-screen bg-page-bg flex items-center justify-center text-white">Pricing - Coming Soon</div>} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
