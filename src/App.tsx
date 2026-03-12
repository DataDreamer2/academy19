import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Percorsi from "./pages/Percorsi";
import Galleria from "./pages/Galleria";
import Contatti from "./pages/Contatti";
import Kit from "./pages/Kit";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Termini from "./pages/Termini";
import Cookie from "./pages/Cookie";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/percorsi" element={<Percorsi />} />
            <Route path="/galleria" element={<Galleria />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/kit" element={<Kit />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/termini-e-condizioni" element={<Termini />} />
            <Route path="/cookie-policy" element={<Cookie />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
