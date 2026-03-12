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
        title="Academy.19 | Campus di Formazione Calcistica d'Eccellenza"
        description="Academy.19 è un campus di formazione calcistica d'eccellenza a Roma. Scopri i nostri percorsi formativi per giovani calciatori di ogni livello."
        url="https://academy19.it"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SportsClub",
          "name": "Academy.19",
          "url": "https://academy19.it",
          "logo": "https://academy19.it/favicon.ico",
          "description": "Campus di formazione calcistica d'eccellenza a Roma.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Roma",
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
