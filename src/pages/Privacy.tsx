import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy | Academy.19 - Protezione Dati"
                description="Leggi l'informativa sulla privacy di Academy.19. Scopri come proteggiamo e gestiamo i tuoi dati personali in conformità con il GDPR."
                url="https://www.academy19.it/privacy-policy"
            />
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className="pt-32 pb-24 flex-grow container mx-auto px-6 max-w-4xl text-zinc-300 font-mono">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase text-accent mb-8">Privacy Policy</h1>
                    <div className="space-y-6">
                        <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                        <p>La tua privacy è importante per noi. Questa politica sulla privacy spiega come raccogliamo, utilizziamo, condividiamo e proteggiamo le tue informazioni personali quando visiti il nostro sito o utilizzi i nostri servizi.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">1. Dati Raccolti</h2>
                        <p>Potremmo raccogliere informazioni personali come nome, indirizzo email e numero di telefono quando compili un modulo di contatto o ti registri ai nostri percorsi formativi.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">2. Uso delle Informazioni</h2>
                        <p>Utilizziamo questi dati per fornirti i servizi richiesti, rispondere alle tue richieste e migliorarne la qualità generale. Non vendiamo i tuoi dati a terzi.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">3. Sicurezza</h2>
                        <p>Adottiamo misure di sicurezza appropriate per proteggere le tue informazioni personali da perdita, uso improprio e accesso non autorizzato.</p>

                        <p className="mt-12 text-zinc-500">Nota: Questo documento è un segnaposto temporaneo e dovrebbe essere sostituito con una documentazione legale completa prima del lancio definitivo.</p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Privacy;
