import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NextEventsSection from '@/components/NextEventsSection';
import TrainingSection from '@/components/TrainingSection';
import GallerySection from '@/components/GallerySection';
import BirthdaySection from '@/components/BirthdaySection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index = () => {
  return (
    <>
      <SEO
        title="Academy19 | Accademia di Formazione Calcistica d'Élite"
        description="Sogni il calcio professionistico? Academy19 offre percorsi di perfezionamento tecnico e crescita personale per giovani talenti in Centro Italia."
        url="https://academy19.it"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Academy19",
          "url": "https://academy19.it",
          "logo": "https://academy19.it/favicon.ico",
          "description": "Accademia di formazione calcistica d'eccellenza e campus estivi d'élite.",
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
        <BirthdaySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
};

export default Index;
