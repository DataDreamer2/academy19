import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Galleria = () => {
    return (
        <>
            <SEO
                title="Galleria | Academy.19"
                description="Guarda le foto e i momenti più belli della nostra academy. Scopri le nostre strutture e i nostri eventi."
                url="https://academy19.it/galleria"
            />

            <main className="min-h-screen">
                <Navbar />
                <div className="pt-20">
                    <GallerySection />
                </div>
                <Footer />
                <StickyMobileCTA />
            </main>
        </>
    );
};

export default Galleria;
