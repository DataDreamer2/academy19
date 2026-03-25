import { Target, Users, Trophy, Heart } from 'lucide-react';
import trainingFundamental from '@/assets/training-fundamental.jpg';
import trainingField from '@/assets/training-field.jpg';
import aboutUser1 from '@/assets/about-highlight-1.jpg';
import aboutUser2 from '@/assets/about-highlight-2.jpg';
import liborioUser from '@/assets/liborio-storia.jpg';
import liborioLaurea from '@/assets/liborio-laurea.jpg';
import fotoStoriaLiborio from '/images/foto-storia-liborio.jpg';
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
    <section id="chi-siamo" className="py-24 text-accent border-t border-accent/20 relative" style={{ backgroundImage: `url(${sfondoChiSiamo})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header - Minimal */}
        <div className="mb-20 border-b border-accent/20 pb-8 max-w-4xl">
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter uppercase mb-4 leading-[1] md:leading-tight">
            La Nostra <br /> Filosofia
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Text Content */}
          <div className="lg:col-span-12 flex flex-col justify-between">
            <div>
                <h2 className="text-3xl font-bold uppercase mb-8 leading-tight">
                Il Metodo <span className="text-accent">Academy 19</span>
              </h2>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl font-mono">
                Il nostro metodo unisce <strong>preparazione tecnica d'élite</strong>, sviluppo <strong>atletico e coordinativo</strong> e crescita <strong>mentale</strong>.
                Per noi la formazione non è solo allenamento: è costruzione della persona, dentro e fuori dal campo.
                Crediamo che il talento, senza disciplina, sia un'opportunità sprecata. Per questo lavoriamo ogni giorno su tecnica, mentalità e cultura del lavoro.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {values.map((value) => (
                  <div key={value.title} className="group p-6 bg-black border sm:border-accent/10 md:border-accent/20 hover:border-accent transition-all duration-300">
                    <value.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold uppercase tracking-widest mb-2">{value.title}</h4>
                    <p className="text-sm text-zinc-400 font-mono">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-8">
                  <div className="border-l-4 border-accent pl-6 bg-accent/5 p-4 mix-blend-screen">
                    <h4 className="text-2xl font-bold uppercase mb-2 text-white">Ogni Dettaglio Conta</h4>
                    <p className="text-zinc-300 font-mono">
                      In <strong>Academy 19</strong> nulla è lasciato al caso. Programmazione, intensità, qualità dell'insegnamento e attenzione individuale fanno parte del nostro standard. L'eccellenza nasce dalla cura quotidiana.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent/40 pl-6 p-4">
                    <h4 className="text-2xl font-bold uppercase mb-2 text-white">Il Nostro Principio Fondamentale</h4>
                    <p className="text-accent italic text-xl mb-4 font-mono">"Più ti diverti, più impari."</p>
                    <p className="text-zinc-300 font-mono">
                      Crediamo inoltre che non possa esserci vera crescita senza <strong>educazione</strong>. Rispetto, disciplina, responsabilità e spirito di squadra sono valori che alleniamo ogni giorno, insieme alla tecnica.
                    </p>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-black overflow-hidden relative border border-accent/30 group">
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
                <div className="aspect-[4/3] bg-black overflow-hidden relative border border-accent/30 order-2 lg:order-1 group">
                  <img
                    src={aboutUser1}
                    alt="Le nostre attività"
                    className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-color pointer-events-none"></div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                    <h3 className="text-[clamp(2rem,6vw,3rem)] font-bold uppercase text-white leading-tight">Atmosfera di Eccellenza</h3>
                    <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                        In Academy 19 l’atmosfera che si respira è quella del grande calcio. Ogni allenamento è un’immersione in un contesto professionale dove la concentrazione, il rispetto reciproco e la voglia di superarsi creano l’ambiente ideale per la crescita.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 border border-accent/20 bg-accent/5">
                            <span className="text-accent font-bold block text-2xl">FOCUS</span>
                            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">Attitudine</span>
                        </div>
                        <div className="p-4 border border-accent/20 bg-accent/5">
                            <span className="text-accent font-bold block text-2xl">PRO</span>
                            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">Mindset</span>
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
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] bg-black overflow-hidden relative border border-accent/20 group">
                <img
                  src={liborioUser}
                  alt="Liborio Zuppardo - Fondatore e Head Coach di Academy19"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle green tint overlay */}
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-3xl font-bold uppercase text-white">Liborio Zuppardo</h3>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mt-2 font-mono">Founder & Head Coach</p>
                </div>
              </div>
              <div className="mt-8 p-8 bg-accent/10 border border-accent/30 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <p className="text-xl font-bold italic leading-tight text-white">
                  "Academy 19 non è solo un'accademia. È il percorso che avrei voluto avere a 15 anni."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-[clamp(2rem,6vw,3rem)] font-bold uppercase mb-4 text-white leading-tight">La Mia Storia</h3>
              <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                Il calcio per me non è mai stato solo uno sport. È stata una scelta di vita.
                A 15 anni ho lasciato la mia terra, la Sicilia. Non è stata una decisione semplice: significava allontanarmi dalla famiglia, dagli amici, dalle certezze di ogni giorno. C'erano emozione, paura, sacrificio. Ma c'era soprattutto un sogno troppo grande per restare fermo.
              </p>
              <div className="grid grid-cols-3 gap-4 my-8">
                  <div className="aspect-video relative overflow-hidden border border-accent/20 bg-black/50">
                      <img src={fotoStoriaLiborio} alt="Foto Storia Liborio" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="aspect-video relative overflow-hidden border border-accent/20 bg-black/50">
                      <img src={aboutUser2} alt="Dettagli Tecnici Academy 19" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="aspect-video relative overflow-hidden border border-accent/20 bg-black/50">
                      <img src={liborioLaurea} alt="Liborio Zuppardo Laurea" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
              </div>
              <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                Dopo numerosi provini, il mio percorso mi ha portato prima all’<strong className="text-white">Ancona Calcio</strong> e successivamente alla <strong className="text-white">Fiorentina</strong>: tappe decisive che hanno formato non solo il calciatore, ma soprattutto l'uomo.
                Da oltre vent’anni vivo il calcio con passione e professionalità. Ho avuto la fortuna di vestire le maglie di tante squadre: con alcune ho vinto, con altre ho affrontato momenti difficili. Ogni vittoria mi ha dato consapevolezza, ogni sconfitta mi ha insegnato a non mollare mai.
              </p>
              <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                Perché sono proprio le esperienze, positive e negative, a costruire il carattere. Ho fatto del sacrificio, della disciplina e dell'esempio la mia filosofia. Perché non conta quello che dici, ma quello che dimostri ogni giorno.
              </p>
              <blockquote className="text-2xl font-bold border-l-4 border-accent pl-6 py-2 my-8 bg-accent/5 uppercase tracking-widest text-accent">
                IL RAGAZZO AL PRIMO POSTO
              </blockquote>
              <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                La voglia di crescere non si è mai fermata. Ho investito nella mia formazione conseguendo la <strong className="text-white">laurea in Scienze Motorie</strong> e ho lavorato come maestro di educazione fisica nella scuola primaria. Esperienze che hanno rafforzato in me una convinzione profonda: <strong className="text-white">educare viene prima di allenare.</strong>
              </p>
              <p className="text-lg text-zinc-300 font-mono leading-relaxed">
                Da questa visione nasce <strong className="text-white">Academy 19</strong>. Un progetto che racchiude la mia storia, i miei sacrifici, le mie vittorie e le mie lezioni più dure. Un luogo dove il talento viene guidato, la disciplina viene insegnata e il ragazzo viene messo al centro.
              </p>
              <p className="text-xl font-bold pt-4 uppercase tracking-widest border-t border-accent/20 mt-8 text-white">
                Talento, educazione e passione: la nostra identità.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
