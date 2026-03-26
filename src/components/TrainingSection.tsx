import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainingSection = () => {
  return (
    <section id="percorsi" className="py-24 text-accent border-t border-accent/20 relative overflow-hidden">
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
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter uppercase mb-6 leading-[1] md:leading-tight text-white font-display translate-x-left will-animate">
            Scegli il tuo <br /> Percorso di Crescita
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-sans max-w-2xl fade-up will-animate" data-delay="0.2">
            La formazione d'élite non è per tutti. È per chi vuole superare i propri limiti e puntare all'eccellenza.
          </p>
        </div>

        {/* Packages and Kit */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Pacchetti Lezioni */}
          <div className="p-6 md:p-12 bg-[#161616] border border-[#2a2a2a] rounded-[16px] flex flex-col justify-between relative group overflow-hidden card-reveal will-animate" data-delay="0.1">
            {/* Decorative Corner Borders */}
            <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-[#e6a817] opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-[#4caf50] opacity-40 group-hover:opacity-70 transition-opacity" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4 text-white font-display italic">
                Pacchetti Lezioni
                <span className="h-px flex-grow bg-[#4caf50]/30"></span>
              </h3>
              <div className="grid grid-cols-2 gap-6 will-animate" data-stagger="0.08">
                {[5, 10, 15, 20].map((num) => (
                  <Link
                    key={num}
                    to={`/contatti?program=pacchetto-${num}`}
                    className="group/btn relative p-4 mobile:p-8 border border-[#2a2a2a] hover:border-[#4caf50] rounded-[12px] bg-[#0d0d0d] hover:bg-[#1a3a1a]/20 transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden shadow-none card-reveal"
                  >
                    <span className="relative z-10 text-5xl font-black mb-2 transition-transform group-hover/btn:-translate-y-2 font-display italic text-[#4caf50]">
                      {num}
                    </span>
                    <span className="relative z-10 text-sm uppercase tracking-widest text-[#888888] group-hover/btn:text-white transition-colors font-display font-bold">
                      Lezioni
                    </span>

                    {/* Hover effect indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4caf50]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-[#4caf50] opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
            <p className="mt-8 text-zinc-500 text-[12px] font-display font-medium uppercase tracking-wider border-t border-[#2a2a2a] pt-4 relative z-10 italic">
              Seleziona un pacchetto per richiedere informazioni via mail.
            </p>
          </div>

          {/* Kit Ufficiale */}
          <div className="p-8 md:p-12 bg-[#161616] border border-[#2a2a2a] rounded-[16px] text-white flex flex-col justify-between relative group card-reveal will-animate" data-delay="0.3">
            {/* Decorative Corner Borders */}
            <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-[#e6a817] opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-[#4caf50] opacity-40 group-hover:opacity-70 transition-opacity" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4 text-white font-display italic">
                Kit Ufficiale
                <span className="h-px flex-grow bg-[#4caf50]/30"></span>
              </h3>
              
              <ul className="grid grid-cols-1 gap-4 will-animate" data-stagger="0.07">
                {[
                  "2 Magliette Personalizzate",
                  "1 Pantaloncino",
                  "1 Calzettone",
                  "1 Sacca",
                  "1 Borraccia"
                ].map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-5 p-4 bg-[#0d0d0d] border border-[#2a2a2a] rounded-[8px] hover:border-[#4caf50]/40 transition-all duration-300 group/item"
                  >
                    {/* Number block */}
                    <div className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[6px] text-[#4caf50] flex items-center justify-center font-bold font-display italic group-hover/item:bg-[#4caf50] group-hover/item:text-white transition-colors duration-300">
                      0{idx + 1}
                    </div>
                    <span className="text-lg font-bold uppercase tracking-wide font-display text-zinc-300 group-hover/item:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex justify-between items-center relative z-10">
              <div className="text-[10px] uppercase tracking-[3px] font-bold text-[#4caf50] opacity-80 font-display italic">
                Training Gear // Academy 19
              </div>
              <div className="text-[10px] uppercase tracking-[2px] font-bold text-zinc-500 font-sans">
                Élite Performance
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 border border-accent rounded-[16px] p-8 md:p-20 text-center relative overflow-hidden bg-black group fade-up will-animate" data-delay="0.5">
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-[clamp(2rem,8vw,3.5rem)] font-bold text-accent uppercase mb-8 tracking-tighter leading-[1] font-display">
              La Prossima Stagione <br /> Inizia Adesso.
            </h3>
            <Link to="/contatti">
              <Button
                size="lg"
                className="bg-accent text-black hover:bg-white px-12 py-8 text-xl rounded-[8px] uppercase tracking-widest font-bold transition-all duration-300 font-display btn-bounce"
              >
                Blocca il tuo posto
              </Button>
            </Link>
          </div>
          {/* Decorative big text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold text-accent/5 pointer-events-none whitespace-nowrap uppercase tracking-tighter font-display">
            Play Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
