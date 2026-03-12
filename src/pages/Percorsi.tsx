import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import TrainingSection from '@/components/TrainingSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Percorsi = () => {
    return (
        <>
            <SEO
                title="Campus Calcio Estate 2026: Programmi e Corsi | Academy.19"
                description="Scopri i programmi del Campus Calcio Estate 2026. Allenamenti personalizzati, Specializzazione Tecnica e formazione d'élite a Roma."
                url="https://www.academy19.it/percorsi"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": "Campus Calcio Estivo 2026",
                    "description": "Corso intensivo di perfezionamento calcistico a Roma. Allenamenti d'élite, tecnica individuale e programmi personalizzati per ragazzi.",
                    "provider": {
                        "@type": "Organization",
                        "name": "Academy.19",
                        "url": "https://www.academy19.it"
                    },
                    "offers": {
                        "@type": "Offer",
                        "category": "Education"
                    },
                    "educationalLevel": "Intermediate"
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
