import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BirthdaySection = () => {
  return (
    <section id="compleanno" className="bg-[#0d0d0d] font-['Barlow'] overflow-hidden relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="sticky top-0 w-full h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('/gallery/immagine back kit e contatti.JPG')`, 
              filter: 'brightness(0.5) contrast(1.1)' 
            }} 
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      </div>

      {/* BLOCCO 1 — Banda urgenza */}
      <div className="w-full bg-[#1a3a1a] py-[10px] px-6 flex justify-center border-b border-[#2a2a2a] relative z-10">
        <span className="text-[#4caf50] font-['Barlow_Condensed'] font-black text-[12px] uppercase tracking-[2px] text-center">
          ⚡ POSTI LIMITATI PER PRIMAVERA — PRENOTA SUBITO IL TUO COMPLEANNO
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-32 relative z-10">
        
        {/* BLOCCO 2 — Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Colonna sinistra (testo) */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#4caf50] font-semibold text-[12px] uppercase tracking-[3px]">
                EVENTI SPECIALI
              </span>
              <h2 className="flex flex-col font-['Barlow_Condensed'] font-[900] leading-none text-white uppercase italic">
                <span className="text-[40px] md:text-[64px]">UN COMPLEANNO</span>
                <span className="text-[40px] md:text-[64px] text-[#4caf50]">DA VERO PRO 🎂</span>
              </h2>
            </div>
            
            <p className="text-[#bbbbbb] text-[16px] leading-[1.7] max-w-lg">
              Regala un'esperienza indimenticabile sul campo. Più di una semplice festa: un vero stage da campioni guidato dai nostri tecnici, su un campo d'élite.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contatti?program=compleanno-academy">
                <Button className="bg-[#4caf50] hover:opacity-88 hover:scale-[0.99] text-white font-['Barlow_Condensed'] font-bold text-[16px] px-7 py-7 rounded-[8px] transition-all duration-250 uppercase tracking-widest border-none">
                  PRENOTA LA FESTA →
                </Button>
              </Link>
              <a href="tel:3478894076">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 hover:scale-[0.99] font-['Barlow_Condensed'] font-bold text-[16px] px-7 py-7 rounded-[8px] transition-all duration-250 uppercase tracking-widest">
                  CHIAMACI
                </Button>
              </a>
            </div>
          </div>

          {/* Colonna destra (visiva): Image + Stats Overlay */}
          <div className="relative group">
            <div className="relative rounded-[16px] overflow-hidden border border-[#2a2a2a] shadow-2xl">
              <img 
                src="/gallery/foto-compleanni.jpg" 
                alt="Compleanno Academy19" 
                className="w-full h-auto object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/30 opacity-90" />
              
              {/* Overlay stats grid */}
              <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { value: "50+", label: "Feste organizzate" },
                    { value: "2h", label: "Durata media" },
                    { value: "6+", label: "Anni di età minima" },
                    { value: "⚽", label: "Campo in esclusiva" },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-[#161616]/80 backdrop-blur-md border border-[#2a2a2a] rounded-[10px] p-4 md:p-5 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:border-[#4caf50]/50 hover:bg-[#1a1a1a]/90">
                      <span className="font-['Barlow_Condensed'] font-[900] text-[28px] md:text-[36px] text-[#4caf50] leading-tight">
                        {stat.value}
                      </span>
                      <span className="text-[#888888] text-[10px] md:text-[11px] uppercase font-bold tracking-wider mt-1 leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#e6a817] opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#4caf50] opacity-30 group-hover:opacity-50 transition-opacity" />
          </div>
        </div>

        {/* BLOCCO 3 — Feature grid */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[#4caf50] font-semibold text-[12px] uppercase tracking-[2px]">
              COSA È INCLUSO
            </span>
            <h3 className="text-white font-['Barlow_Condensed'] font-[900] text-[36px] uppercase tracking-tight">
              TUTTO QUELLO CHE TI SERVE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.64 5H8.36a2 2 0 0 0-1.86 1.3L5 10l-2-2"></path>
                    <path d="M2 19h20"></path>
                    <path d="M18 19v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="8" r="3"></circle>
                  </svg>
                ),
                title: "CAMPO IN ESCLUSIVA",
                text: "Il nostro campo d'élite a tua completa disposizione per sfide e tornei indimenticabili."
              },
              {
                num: "02",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ),
                title: "ANIMAZIONE SPORTIVA",
                text: "Allenatori qualificati Academy19 guideranno i ragazzi in giochi, sfide e tornei a tema."
              },
              {
                num: "03",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v10"></path>
                    <path d="M18 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3l1.1-15.5a2 2 0 0 1 2-1.5h5.8a2 2 0 0 1 2 1.5L18 17Z"></path>
                    <path d="M9 2h6"></path>
                  </svg>
                ),
                title: "AREA RINFRESCO",
                text: "Spazio dedicato per il taglio della torta e il buffet post-partita con i tuoi ospiti."
              },
              {
                num: "04",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="12" rx="2"></rect>
                    <path d="M12 12V3"></path>
                    <path d="M7 3a3 3 0 0 1 10 0"></path>
                    <path d="M3 8h18"></path>
                  </svg>
                ),
                title: "GADGET ACADEMY",
                text: "Un pensiero speciale targato Academy19 per il festeggiato — un ricordo unico."
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className={`bg-[#161616] border border-[#2a2a2a] rounded-[12px] p-8 relative overflow-hidden transition-all duration-250 hover:border-[#4caf50] hover:-translate-y-1 group ${idx === 3 ? 'md:col-span-2 lg:col-span-1 border-[#4caf50]/30' : ''}`}
              >
                <span className="absolute top-4 right-4 font-['Barlow_Condensed'] font-[900] text-[80px] leading-none text-[#4caf50] opacity-[0.06] select-none z-0">
                  {feature.num}
                </span>
                <div className="relative z-10 space-y-6">
                  <div className="text-[#4caf50]">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-['Barlow_Condensed'] font-[700] text-[18px] uppercase tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-[#bbbbbb] text-[14px] leading-[1.6]">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCCO 4 — Banda social proof */}
        <div className="bg-[#111111] border-y border-[#2a2a2a] py-8 px-6 text-center space-y-4 -mx-6 md:-mx-12">
          <p className="text-[#bbbbbb] italic text-[16px] md:text-[18px] font-['Barlow'] max-w-3xl mx-auto">
            "Il compleanno più bello che potessi regalare a mio figlio. Un'esperienza vera, professionale e piena di emozioni."
          </p>
          <div className="text-[#4caf50] font-semibold text-[13px] uppercase tracking-[1px]">
            — Genitore di un festeggiato Academy19
          </div>
        </div>

        {/* BLOCCO 5 — CTA finale */}
        <div className="max-w-[700px] mx-auto bg-[#161616] border border-[#2a2a2a] rounded-[16px] p-8 md:p-12 text-center space-y-8 shadow-2xl">
          <div className="space-y-4">
            <span className="text-[#4caf50] font-semibold text-[12px] uppercase tracking-[2px]">
              PRENOTA ORA
            </span>
            <h3 className="text-white font-['Barlow_Condensed'] font-[900] text-[32px] md:text-[36px] uppercase tracking-tight">
              FESTEGGIA IL TUO CAMPIONE
            </h3>
            <p className="text-[#888888] text-[14px] md:text-[16px] max-w-md mx-auto">
              Disponibilità limitata — contattaci per verificare le date libere
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/contatti?program=compleanno-academy">
              <Button className="w-full md:w-auto bg-[#4caf50] hover:opacity-88 hover:scale-[0.99] text-white font-['Barlow_Condensed'] font-bold text-[16px] px-12 py-8 rounded-[8px] transition-all duration-250 uppercase tracking-[1px]">
                PRENOTA LA FESTA →
              </Button>
            </Link>
            <div className="block pt-2">
              <a href="tel:3478894076" className="text-[#888888] hover:text-[#4caf50] transition-colors text-[13px] font-medium flex items-center justify-center gap-2">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                📱 Oppure chiamaci: 347 889 4076
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BirthdaySection;
