import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Contatti = () => {
    return (
        <>
            <SEO
                title="Contatti e Iscrizioni | Academy.19 Roma"
                description="Hai domande? Contattaci per informazioni sui corsi, prove gratuite e iscrizioni all'Academy.19. Inizia il tuo percorso d'élite."
                url="https://academy19.it/contatti"
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
