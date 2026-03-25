import React from 'react';
import { Leaf, Activity, GraduationCap } from 'lucide-react';

const values = [
  {
    icon: GraduationCap,
    title: 'Formazione',
    description: 'Laurea in Scienze e Tecnologie del Fitness e Magistrale in Biological Sciences.'
  },
  {
    icon: Activity,
    title: 'Sport & Salute',
    description: 'L\'imprescindibile triade per la performance atletica e il benessere.'
  },
  {
    icon: Leaf,
    title: 'Nutrizione',
    description: 'Specializzazione in Nutrition and Functional Food.'
  }
];

const NutritionistSection = () => {
    return (
        <section id="nutrizionista" className="py-24 text-accent border-t border-accent/20 relative overflow-hidden">
            <div 
                className="absolute inset-0 z-0" 
                style={{ 
                    backgroundImage: `url('/gallery/immagine back kit e contatti.JPG')`, 
                    backgroundSize: 'cover', 
                    backgroundAttachment: 'fixed', 
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7) contrast(1.1)' 
                }} 
            />
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20 border-b border-accent/20 pb-8 max-w-4xl">
                    <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter uppercase mb-4 leading-[1] md:leading-tight">
                        Il Mio <br /> Nutrizionista
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[3/4] bg-black overflow-hidden relative border border-accent/20 group">
                            {/* We use the video prominently here */}
                            <video
                                src="/video-nutrizionista.mp4"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                controls
                                playsInline
                                poster="/images/logo-academy.jpg" // Fallback poster
                            />
                            <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                        </div>
                        <div className="mt-8 p-8 bg-accent/10 border border-accent/30 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                            <p className="text-xl font-bold italic leading-tight text-white">
                                “Ogni volta che impariamo qualcosa di nuovo, noi stessi diventiamo qualcosa di nuovo”.
                            </p>
                            <p className="mt-4 text-zinc-300 font-mono text-sm">
                                Questa è la mentalità alla base della mia attività professionale, che mi porta ad un continuo aggiornamento ed elaborazione di nuovi progetti futuri.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-[clamp(2rem,6vw,3rem)] font-bold uppercase mb-4 text-white leading-tight">Chi Sono?</h3>
                        <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                            Fin da quando ero un bambino la mia più grande passione è stata lo sport e il continuo voler migliorare me stesso e i miei risultati, in ogni allenamento.
                        </p>
                        <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                            Ho conseguito la laurea triennale in Scienze e Tecnologie del Fitness presso l’Università degli Studi di Camerino durante la quale ho avuto l’opportunità, tramite il progetto Erasmus, di fare un esperienza di 6 mesi presso l’Accademia dell’Educazione Fisica e Sport di Danzica (Polonia), un centro avanzato di scienza e sport che mi ha permesso di approfondire tutto ciò che riguarda la Performance atletica e di elaborare la mia tesi sperimentale in Biochimica dal titolo: <em>‘’L'effetto di 12 settimane di supplementazione di L-Carnitina L-Tartrate sulla composizione corporea, la forza e la capacità aerobica’’</em>
                        </p>
                        <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                            Ho proseguito il mio percorso formativo con la Laurea Magistrale in Biological Sciences indirizzo “Nutrition and Functional Food” sempre presso l’Università degli Studi di Camerino. Nel mentre ho frequentato molteplici corsi teorico-pratici nell’ambito sportivo conseguendo il patentino di Istruttore di Atletica Leggera di 1° livello e la Licenza UEFA C grassroots per l’insegnamento ai giovani calciatori, il patentino FISDIR (Federazione italiana sport paralimpici degli intellettivi relazionali).
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 my-10">
                            {values.map((value) => (
                            <div key={value.title} className="p-6 bg-accent/5 border border-accent/20">
                                <value.icon className="w-8 h-8 text-accent mb-4" />
                                <h4 className="font-bold uppercase tracking-widest text-white mb-2">{value.title}</h4>
                                <p className="text-sm text-zinc-400 font-mono">{value.description}</p>
                            </div>
                            ))}
                        </div>

                        <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                            Grazie alla frequentazione del laboratorio di ricerca di Nutrizione dell’Università (Nutricam) ho avuto modo di imparare ad utilizzare gli strumenti del mestiere e di approfondire tutto ciò che rientra nell’ambito della Nutrizione e della Biochimica e di come la Nutrizione, Sport e Salute siano una triade imprescindibile.
                        </p>
                        <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                            Parallelamente, grazie alla mia laurea in Scienze Motorie ho portato avanti l’attività da Fitness Trainer presso le varie società di calcio con le quali ho instaurato proficue collaborazioni. Questo percorso, tra Nutrizione e Sport, è culminato con la mia tesi sperimentale magistrale in Biochimica Applicata dal titolo: “Il ruolo della composizione corporea nel Calciatore Amatoriale”.
                        </p>

                        <blockquote className="text-2xl font-bold border-l-4 border-accent pl-6 py-2 my-8 bg-accent/5 uppercase tracking-widest text-accent">
                            ALIMENTAZIONE ED INTEGRAZIONE
                        </blockquote>
                        <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                            Ho ampliato le mie conoscenze con il <strong>Corso di Perfezionamento Universitario “Nutrizione sportiva: assessment dell’atleta, alimentazione ed integrazione”</strong> presso l’Università di Camerino.
                        </p>
                        <p className="text-lg text-zinc-300 font-mono leading-relaxed border-t border-accent/20 pt-6 mt-6">
                            Ho infine conseguito l’abilitazione per l’esercizio della Professione di Biologo e attualmente sono iscritto al n. <strong className="text-white">AA_087369</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionistSection;
