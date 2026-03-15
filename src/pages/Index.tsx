import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NextEventsSection from '@/components/NextEventsSection';
import TrainingSection from '@/components/TrainingSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index = () => {
  return (
    <>
      <SEO
        title="academy 19 formazione calcio giovani"
        description="Iscrizioni aperte per il Campus Calcio Estivo 2026. Formazione calcistica d'eccellenza, tecnica individuale e divertimento per giovani calciatori."
        url="https://www.academy19.it"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Academy19",
          "url": "https://www.academy19.it",
          "logo": "https://academy19.it/favicon.ico",
          "description": "Campus di formazione calcistica d'eccellenza.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Forlì",
            "addressCountry": "IT"
          }
        }}
      />

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <NextEventsSection />
        <AboutSection />
        <TrainingSection />
        <GallerySection />
        <TestimonialsSection />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
};

export default Index;
