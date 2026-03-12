import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Termini = () => {
    return (
        <>
            <SEO
                title="Termini e Condizioni | Academy19 - Regolamento"
                description="Consulta i termini e le condizioni d'uso di Academy19. Regolamento interno, iscrizioni e condizioni generali del servizio."
                url="https://www.academy19.it/termini-e-condizioni"
            />
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className="pt-32 pb-24 flex-grow container mx-auto px-6 max-w-4xl text-zinc-300 font-mono">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase text-accent mb-8">Termini e Condizioni</h1>
                    <div className="space-y-6">
                        <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                        <p>Benvenuti su Academy19. Utilizzando questo sito Web o iscrivendoti ai nostri servizi, accetti di essere vincolato dai seguenti termini e condizioni.</p>
                        <hr className="border-accent/10" />
                        <p>Il contenuto del sito e i servizi offerti sono intesi esclusivamente per uso personale e formativo. È vietato l'uso commerciale non autorizzato dei materiali o dei marchi di Academy19.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">2. Condizioni Generali di Acquisto</h2>
                        <p>Acquistando o prenotando un pacchetto, l'utente si impegna a fornire informazioni veritiere e adeguate. Tutte le quote di iscrizione non sono rimborsabili, salvo diverse indicazioni scritte comunicate preventivamente dalla direzione.</p>

                        <h2 className="text-2xl font-bold text-white uppercase mt-8">3. Condotta e Regolamento</h2>
                        <p>Gli iscritti ai nostri corsi e camp estivi si impegnano a mantenere un comportamento rispettoso e disciplinato in campo e negli spogliatoi, verso allenatori, compagni e strutture. La direzione si riserva il diritto di sospendere l'attività di chi non rispetta il regolamento interno.</p>

                        <p className="mt-12 text-zinc-500">Nota: Questo documento è un segnaposto temporaneo e dovrebbe essere sostituito con una documentazione legale completa prima del lancio definitivo.</p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Termini;
