import { Target, Users, Trophy, Heart } from 'lucide-react';
import trainingFundamental from '@/assets/training-fundamental.jpg';
import trainingField from '@/assets/training-field.jpg';
import aboutUser1 from '@/assets/about-highlight-1.jpg';
import aboutUser2 from '@/assets/about-highlight-2.jpg';
import liborioUser from '@/assets/liborio-storia.jpg';
import liborioLaurea from '@/assets/liborio-laurea.jpg';
import nuovaFotoStoria from '/images/nuova-foto-storia.jpeg';
import fiorentinaLibo from '/images/fiorentina-libo.jpeg';
import sfondoChiSiamo from '/images/sfondo-chi-siamo.jpeg';

const values = [
  {
    icon: Target,
    title: 'Eccellenza',
    description: 'Massimo standard in ogni dettaglio.'
  },
  {
    icon: Users,
    title: 'Squadra',
    description: 'La forza del collettivo.'
  },
  {
    icon: Trophy,
    title: 'Disciplina',
    description: 'Costanza e dedizione quotidiana.'
  },
  {
    icon: Heart,
    title: 'Passione',
    description: 'Il motore di ogni nostra azione.'
  }
];

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-24 text-accent border-t border-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="sticky top-0 w-full h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${sfondoChiSiamo})`,
              filter: 'brightness(0.7) contrast(1.1)' 
            }} 
            aria-hidden="true"
          />
          {/* Main uniform overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header - Minimal */}
        <div className="mb-20 border-b border-accent/20 pb-8 max-w-4xl">
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter uppercase mb-4 leading-[1] md:leading-tight font-display translate-x-left will-animate">
            La Nostra <br /> Filosofia
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Text Content */}
          <div className="lg:col-span-12 flex flex-col justify-between">
            <div>
                <h2 className="text-3xl font-bold uppercase mb-8 leading-tight font-display translate-x-left will-animate" data-delay="0.2">
                Il Metodo <span className="text-accent">Academy 19</span>
              </h2>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl font-sans fade-up will-animate" data-delay="0.3">
                Il nostro metodo unisce <strong>preparazione tecnica d'élite</strong>, sviluppo <strong>atletico e coordinativo</strong> e crescita <strong>mentale</strong>.
                Per noi la formazione non è solo allenamento: è costruzione della persona, dentro e fuori dal campo.
                Crediamo che il talento, senza disciplina, sia un'opportunità sprecata. Per questo lavoriamo ogni giorno su tecnica, mentalità e cultura del lavoro.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 will-animate" data-stagger="0.12">
                {values.map((value) => (
                  <div key={value.title} className="group p-6 bg-black border sm:border-accent/10 md:border-accent/20 hover:border-accent transition-all duration-300 card-reveal will-animate">
                    <value.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold uppercase tracking-widest mb-2 font-display text-xl">{value.title}</h4>
                    <p className="text-sm text-zinc-400 font-sans">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-8 fade-up will-animate" data-delay="0.1">
                  <div className="border-l-4 border-accent pl-6 bg-accent/5 p-4 mix-blend-screen">
                    <h4 className="text-2xl font-bold uppercase mb-2 text-white font-display">Ogni Dettaglio Conta</h4>
                    <p className="text-zinc-300 font-sans">
                      In <strong>Academy 19</strong> nulla è lasciato al caso. Programmazione, intensità, qualità dell'insegnamento e attenzione individuale fanno parte del nostro standard. L'eccellenza nasce dalla cura quotidiana.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent/40 pl-6 p-4">
                    <h4 className="text-2xl font-bold uppercase mb-2 text-white font-display">Il Nostro Principio Fondamentale</h4>
                    <p className="text-accent italic text-xl mb-4 font-sans border-b border-accent/20 pb-2 inline-block">"Più ti diverti, più impari."</p>
                    <p className="text-zinc-300 font-sans">
                      Crediamo inoltre che non possa esserci vera crescita senza <strong>educazione</strong>. Rispetto, disciplina, responsabilità e spirito di squadra sono valori che alleniamo ogni giorno, insieme alla tecnica.
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-black overflow-hidden relative border border-accent/30 group card-reveal will-animate" data-delay="0.3">
                  <img
                    src={trainingFundamental}
                    alt="Sessione di allenamento Academy19"
                    className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-color pointer-events-none"></div>
                </div>
              </div>

              {/* New Facilities Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="aspect-[4/3] bg-black overflow-hidden relative border border-accent/30 order-2 lg:order-1 group card-reveal will-animate" data-delay="0.1">
                  <img
                    src={aboutUser1}
                    alt="Le nostre attività"
                    className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-color pointer-events-none"></div>
                </div>
                <div className="space-y-6 order-1 lg:order-2 fade-up will-animate" data-delay="0.3">
                    <h3 className="text-[clamp(2rem,6vw,3rem)] font-bold uppercase text-white leading-tight font-display">Atmosfera di Eccellenza</h3>
                    <p className="text-lg text-zinc-300 font-sans leading-relaxed">
                        In Academy 19 l’atmosfera che si respira è quella del grande calcio. Ogni allenamento è un’immersione in un contesto professionale dove la concentrazione, il rispetto reciproco e la voglia di superarsi creano l’ambiente ideale per la crescita.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 border border-accent/20 bg-accent/5">
                            <span className="text-accent font-bold block text-2xl font-display">FOCUS</span>
                            <span className="text-xs uppercase tracking-widest text-zinc-400 font-sans">Attitudine</span>
                        </div>
                        <div className="p-4 border border-accent/20 bg-accent/5">
                            <span className="text-accent font-bold block text-2xl font-display">PRO</span>
                            <span className="text-xs uppercase tracking-widest text-zinc-400 font-sans">Mindset</span>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>

        {/* Founder's Story Section */}
        <div className="border-t border-accent/20 pt-24 mb-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative staff-reveal will-animate">
              <div className="aspect-[3/4] bg-black overflow-hidden relative border border-accent/20 group">
                <img
                  src={nuovaFotoStoria}
                  alt="Liborio Zuppardo - Fondatore e Head Coach di Academy19"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-3xl font-bold uppercase text-white font-display">Liborio Zuppardo</h3>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mt-2 font-sans">Founder & Head Coach</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] relative overflow-hidden border border-accent/20 bg-black">
                      <img src={fiorentinaLibo} alt="Liborio Zuppardo Fiorentina" className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="aspect-[4/5] relative overflow-hidden border border-accent/20 bg-black">
                      <img src={liborioLaurea} alt="Liborio Zuppardo" className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
              </div>
              <div className="mt-8 p-8 bg-accent/10 border border-accent/30 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <p className="text-xl font-bold italic leading-tight text-white font-sans">
                  "Oggi insegno quello che avrei voluto sapere io a 15 anni."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 fade-up will-animate" data-delay="0.2">
              <h3 className="text-[clamp(2rem,6vw,3.5rem)] font-bold uppercase mb-8 text-accent leading-tight font-display">
                A 15 ANNI HO SCELTO IL CALCIO. <br /> 
                HO LASCIATO LA SICILIA.
              </h3>
              <div className="text-column space-y-6">
                <p className="text-xl text-zinc-200 font-sans leading-relaxed">
                  Non è stata una scelta facile. Ma era l'unica possibile.
                  Lasciare la propria terra a 15 anni significa allontanarsi da tutto: famiglia, amici, certezze.
                </p>
                <p className="text-lg text-zinc-300 font-sans leading-relaxed">
                  C'erano emozione e paura, ma soprattutto un sogno troppo grande per restare fermo.
                  Un sogno che mi ha portato prima all’<strong>Ancona Calcio</strong> e poi alla <strong>Fiorentina</strong>.
                </p>
              </div>

              <blockquote className="text-2xl font-bold border-l-4 border-accent pl-6 py-4 my-10 bg-accent/5 uppercase tracking-widest text-accent italic font-display">
                IL RAGAZZO AL PRIMO POSTO
              </blockquote>

              <div className="text-column space-y-6">
                <p className="text-lg text-zinc-300 font-sans leading-relaxed">
                  La mia crescita non si è mai fermata. Con la <strong>laurea in Scienze Motorie</strong> ho capito una verità profonda: 
                  <span className="text-white block mt-2 text-xl">EDUCARE VIENE PRIMA DI ALLENARE.</span>
                </p>
                <p className="text-lg text-zinc-300 font-sans leading-relaxed">
                  Da questa visione nasce <strong>Academy 19</strong>. Un luogo dove il talento viene guidato, 
                  la disciplina viene insegnata e ogni ragazzo è al centro del progetto.
                </p>
              </div>

              {/* Closing Quote - Premium Animated */}
              <div className="relative mt-12 pt-10 border-t border-accent/20">
                {/* Decorative quote mark */}
                <span 
                  className="absolute -top-6 left-0 text-[7rem] leading-none text-accent/30 font-display select-none pointer-events-none"
                  aria-hidden="true"
                >
                  "
                </span>

                <blockquote className="pl-4">
                  <p className="text-[clamp(2rem,5vw,3.8rem)] font-extrabold uppercase tracking-tight leading-[1.05] text-white font-display">
                    <span className="block fade-up will-animate" data-delay="0.1">Talento, educazione,</span>
                    <span className="block fade-up will-animate text-accent" data-delay="0.3">rispetto e passione.</span>
                    <span className="block fade-up will-animate mt-2 text-zinc-300 text-[0.65em] tracking-widest font-sans font-bold" data-delay="0.5">Questa è la mia storia.</span>
                  </p>
                </blockquote>

                {/* Closing quote */}
                <span 
                  className="absolute -bottom-4 right-0 text-[7rem] leading-none text-accent/15 font-display select-none pointer-events-none"
                  aria-hidden="true"
                >
                  "
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
