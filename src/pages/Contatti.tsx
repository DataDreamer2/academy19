import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Contatti = () => {
    return (
        <>
            <SEO
                title="Contatti e Iscrizioni Campus Calcio 2026 | Academy.19 Roma"
                description="Richiedi informazioni per il Campus Calcio 2026. Contattaci per prove gratuite, iscrizioni e dettagli sui nostri percorsi formativi d'élite."
                url="https://www.academy19.it/contatti"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Academy.19",
                    "url": "https://www.academy19.it/contatti",
                    "telephone": "+39 347 123 4567", // Placeholder or real if found
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Roma",
                        "addressCountry": "IT"
                    },
                    "description": "Campus di formazione calcistica d'eccellenza a Roma."
                }}
            />

            <main className="min-h-screen">
                <Navbar />
                <div className="pt-20">
                    <ContactSection />
                </div>
                <Footer />
                <StickyMobileCTA />
            </main>
        </>
    );
};

export default Contatti;
