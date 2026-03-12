import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import TrainingSection from '@/components/TrainingSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Percorsi = () => {
    return (
        <>
            <SEO
                title="Percorsi Formativi | Academy.19"
                description="Esplora i nostri percorsi formativi per giovani calciatori. Programmi personalizzati per ogni livello."
                url="https://academy19.it/percorsi"
            />

            <main className="min-h-screen">
                <Navbar />
                <div className="pt-20">
                    <TrainingSection />
                </div>
                <Footer />
                <StickyMobileCTA />
            </main>
        </>
    );
};

export default Percorsi;
