import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Music, Utensils, Trophy, Star, Cake } from "lucide-react";
import { Link } from "react-router-dom";

const BirthdaySection = () => {
  const features = [
    {
      icon: Trophy,
      title: "Campo in Esclusiva",
      description: "Il nostro campo d'élite a tua completa disposizione per sfide indimenticabili."
    },
    {
      icon: Star,
      title: "Animazione Sportiva",
      description: "Allenatori qualificati Academy19 guideranno i ragazzi in giochi e tornei."
    },
    {
      icon: Utensils,
      title: "Area Rinfresco",
      description: "Spazio dedicato per il taglio della torta e il buffet post-partita."
    },
    {
      icon: Gift,
      title: "Gadget Academy",
      description: "Un pensiero speciale targato Academy19 per il festeggiato."
    }
  ];

  return (
    <section className="py-24 text-accent relative overflow-hidden">
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 text-accent font-sans text-sm uppercase tracking-widest mb-4 reveal-hidden fade-up will-animate" data-delay="0.1">
              Eventi Speciali
            </div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white font-display translate-x-left will-animate" data-delay="0.2">
              Un Compleanno <br /> 
              <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Da Vero PRO</span>
              <Cake className="inline-block ml-4 w-12 h-12 text-accent" />
            </h2>
            <p className="text-xl text-zinc-200 max-w-xl leading-relaxed font-sans fade-up will-animate" data-delay="0.4">
              Regala un'esperienza indimenticabile sul campo. <br />
              Più di una semplice festa: un vero stage da campioni guidato dai nostri tecnici.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4 will-animate" data-stagger="0.1">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 p-6 border border-zinc-800 bg-black/80 hover:border-accent/50 transition-colors card-reveal">
                  <feature.icon className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="text-white font-bold uppercase text-base tracking-wide mb-2 font-display">{feature.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 slide-up-reveal will-animate" data-delay="0.6">
              <Link to="/contatti?program=compleanno-academy">
                <Button className="bg-accent text-black hover:bg-white h-16 px-10 text-lg font-bold uppercase tracking-widest rounded-none group transition-all duration-300 btn-bounce font-display">
                  Prenota la Festa 
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative staff-reveal will-animate" data-delay="0.4">
            <div className="relative z-10 border border-accent/20 p-2 bg-black">
              <img 
                src="/gallery/foto-compleanni.jpg" 
                alt="Compleanno Academy19" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/30 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdaySection;
