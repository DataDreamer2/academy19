import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import TrainingSection from '@/components/TrainingSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Percorsi = () => {
    return (
        <>
            <SEO
                title="Percorsi Formativi d'Élite | Academy.19 Roma"
                description="Esplora i nostri programmi di allenamento personalizzati. Perfezionamento tecnico e tattico per giovani talenti di ogni livello."
                url="https://academy19.it/percorsi"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Percorsi Formativi Academy.19",
                    "description": "Programmi di formazione calcistica d'eccellenza a Roma.",
                    "provider": {
                        "@type": "Organization",
                        "name": "Academy.19",
                        "url": "https://academy19.it"
                    }
                }}
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
