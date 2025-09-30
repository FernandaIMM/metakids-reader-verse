import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComoFunciona from "./pages/ComoFunciona";
import Biblioteca from "./pages/Biblioteca";
import Retos from "./pages/Retos";
import ClubMetaverso from "./pages/ClubMetaverso";
import ParaPadres from "./pages/ParaPadres";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/retos" element={<Retos />} />
          <Route path="/club-metaverso" element={<ClubMetaverso />} />
          <Route path="/para-padres" element={<ParaPadres />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
