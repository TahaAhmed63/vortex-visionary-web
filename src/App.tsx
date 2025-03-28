
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import SEO from "./pages/services/SEO";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import VideoAnimation from "./pages/services/VideoAnimation";
import DedicatedDeveloper from "./pages/services/DedicatedDeveloper";

// Remove unused CSS
import "./index.css";
import CrmDevelopment from "./pages/services/CrmDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import AiDrivenSolution from "./pages/services/AiDrivenSolution";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/video-animation" element={<VideoAnimation />} />
          <Route path="/services/dedicated-developer" element={<DedicatedDeveloper />} />
          <Route path="/services/crm-development" element={<CrmDevelopment />} />  
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/ai-solutions" element={<AiDrivenSolution />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
