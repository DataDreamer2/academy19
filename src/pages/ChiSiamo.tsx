import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import NutritionistSection from '@/components/NutritionistSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const ChiSiamo = () => {
    return (
        <>
            <SEO
                title="Chi Siamo | academy 19 formazione calcio giovani"
                description="Scopri la missione di Academy19: campus calcio ragazzi d'eccellenza guidato da Liborio Zuppardo. Dal 2015, educare prima di allenare."
                url="https://www.academy19.it/chi-siamo"
            />

            <main className="min-h-screen">
                <Navbar />
                <div className="pt-20">
                    <AboutSection />
                    <NutritionistSection />
                    <TestimonialsSection />
                </div>
                <Footer />
                <StickyMobileCTA />
            </main>
        </>
    );
};

export default ChiSiamo;
