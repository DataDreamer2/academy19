import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cookie = () => {
    return (
        <>
            <SEO
                title="Cookie Policy | Academy.19"
                description="Leggi la Cookie Policy di Academy.19."
                url="https://academy19.it/cookie-policy"
            />
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className="pt-32 pb-24 flex-grow container mx-auto px-6 max-w-4xl text-zinc-300 font-mono">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase text-accent mb-8">Cookie Policy</h1>
                    <div className="space-y-6">
                        <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                        <p>Questo sito web utilizza cookie e tecnologie simili per garantire il corretto funzionamento delle procedure e migliorare l'esperienza d'uso delle applicazioni online.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">1. Cosa sono i cookie?</h2>
                        <p>Il cookie è un piccolo file di testo contenente una certa quantità di informazioni scambiato tra un sito internet e il suo terminale (solitamente il browser) dove vengono memorizzati prima di essere ri-trasmessi allo stesso sito alla successiva visita.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">2. Quali Cookie Utilizziamo</h2>
                        <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-300">
                            <li><strong>Cookie Tecnici:</strong> Sono quelli utilizzati al solo fine di effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica.</li>
                            <li><strong>Cookie Analitici:</strong> Utilizzati per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">3. Gestione dei Cookie</h2>
                        <p>L'utente può decidere se accettare o meno i cookie impostando il proprio browser in modo da rifiutarli o per farsi avvisare ogni qualvolta venga impostato un cookie sul priprio dispositivo.</p>

                        <p className="mt-12 text-zinc-500">Nota: Questo documento è un segnaposto temporaneo e dovrebbe essere sostituito con una documentazione legale completa prima del lancio definitivo.</p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Cookie;
