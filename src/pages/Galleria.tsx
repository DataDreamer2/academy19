import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Galleria = () => {
    return (
        <>
            <SEO
                title="Galleria Foto ed Eventi | Academy.19"
                description="Sfoglia la galleria di Academy.19: momenti di campo, tornei ed eventi della nostra accademia calcistica a Roma."
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
