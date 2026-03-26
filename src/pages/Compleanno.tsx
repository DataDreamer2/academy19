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

            <main className="min-h-screen pt-24">
                <Navbar />

                <BirthdaySection />
                
                <Footer />
                <StickyMobileCTA />
            </main>
        </>
    );
};

export default Compleanno;
