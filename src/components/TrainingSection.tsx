import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainingSection = () => {
  return (
    <section id="percorsi" className="py-24 text-accent border-t border-accent/20 relative" style={{ backgroundImage: `url('/gallery/immagine background.JPG')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 border-b border-accent/20 pb-8 max-w-4xl">
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter uppercase mb-6 leading-[1] md:leading-tight">
            I Nostri <br /> Pacchetti
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-mono">
            La formazione continua è la chiave per il successo. Scegli il pacchetto che più si adatta alle tue esigenze.
          </p>
        </div>

        {/* Packages and Kit */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Pacchetti Lezioni */}
          <div className="p-6 md:p-12 bg-black border border-accent/20 flex flex-col justify-between relative overflow-hidden">
            {/* Neon glow effect in corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] pointer-events-none rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4 text-accent">
                Pacchetti Lezioni
                <span className="h-px flex-grow bg-accent/30"></span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[5, 10, 15, 20].map((num) => (
                  <Link
                    key={num}
                    to={`/contatti?program=pacchetto-${num}`}
                    className="group relative p-4 mobile:p-8 border border-accent/20 hover:border-accent bg-black hover:bg-accent/5 transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden shadow-none"
                  >
                    <span className="text-5xl font-bold mb-2 transition-transform group-hover:-translate-y-2">{num}</span>
                    <span className="text-sm uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors font-mono">Lezioni</span>

                    {/* Hover effect indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
            <p className="mt-8 text-zinc-400 text-sm font-mono border-t border-accent/20 pt-4 relative z-10">
              Seleziona un pacchetto per compilare automaticamente il modulo di contatto con la tua scelta.
            </p>
          </div>

          {/* Kit Ufficiale */}
          <div className="p-8 md:p-12 bg-accent text-black flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4 border-b border-black/20 pb-4">
                Kit Ufficiale
              </h3>
              <ul className="space-y-6">
                {[
                  "2 Magliette Personalizzate",
                  "1 Pantaloncino",
                  "1 Calzettone",
                  "1 Sacca",
                  "1 Borraccia"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-6 text-xl font-bold uppercase tracking-wider">
                    {/* Checkmark block */}
                    <div className="w-8 h-8 bg-black text-accent flex items-center justify-center text-sm">
                      0{idx + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-black/20 text-sm uppercase tracking-widest font-bold opacity-60 font-mono">
              Training Gear // Academy 19
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 border border-accent p-8 md:p-20 text-center relative overflow-hidden bg-black group">
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-[clamp(2rem,8vw,3.5rem)] font-bold text-accent uppercase mb-8 tracking-tighter leading-[1]">
              La Prossima Stagione <br /> Inizia Adesso.
            </h3>
            <Link to="/contatti">
              <Button
                size="lg"
                className="bg-accent text-black hover:bg-white px-12 py-8 text-xl rounded-none uppercase tracking-widest font-bold transition-all duration-300"
              >
                Blocca il tuo posto
              </Button>
            </Link>
          </div>
          {/* Decorative big text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold text-accent/5 pointer-events-none whitespace-nowrap uppercase tracking-tighter">
            Play Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
