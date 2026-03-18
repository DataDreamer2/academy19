import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import BirthdaySection from '@/components/BirthdaySection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Compleanno = () => {
    return (
        <>
            <SEO
                title="Compleanno con AcademY: Festeggia in Campo | Academy19"
                description="Prenota la tua festa di compleanno presso Academy Campus Calcio. Un'esperienza unica per bambini e ragazzi con calcio, animazione sportiva e tanto divertimento."
                url="https://www.academy19.it/compleanno-con-academy"
            />

            <main className="min-h-screen pt-20">
                <Navbar />
                
                {/* Hero Header for the page */}
                <div className="bg-black py-16 border-b border-accent/10">
                    <div className="container mx-auto px-6 md:px-12">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
                            Compleanno con <span className="text-accent">AcademY</span>
                        </h1>
                        <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm">
                            Rendi speciale il tuo giorno più importante
                        </p>
                    </div>
                </div>

                <BirthdaySection />
                
                <Footer />
                <StickyMobileCTA />
            </main>
        </>
    );
};

export default Compleanno;
