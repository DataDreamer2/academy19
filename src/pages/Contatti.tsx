import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Contatti = () => {
    return (
        <>
            <SEO
                title="Contatti | Academy.19"
                description="Contattaci per maggiori informazioni sui nostri percorsi formativi. Iscriviti ora all'Academy.19."
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
