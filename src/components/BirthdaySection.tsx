import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Music, Utensils, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SoccerBall = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 512 512" 
    className={className} 
    fill="currentColor"
  >
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.28 0-200-89.72-200-200S145.72 56 256 56s200 89.72 200 200-89.72 200-200 200zm-51.14-114.71l-50.8-31.52c-4.14-2.57-6.66-7.14-6.66-12.06V208.29c0-4.92 2.52-9.49 6.66-12.06l50.8-31.52c4.14-2.57 9.22-2.57 13.36 0l50.8 31.52c4.14 2.57 6.66 7.14 6.66 12.06v51.42c0 4.92-2.52 9.49-6.66 12.06l-50.8 31.52c-4.14 2.57-9.22 2.57-13.36 0z" />
  </svg>
);

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
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-sm uppercase tracking-widest mb-4">
              Eventi Speciali
            </div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
              Festeggia in <br /> 
              <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Grande!</span>
              <SoccerBall className="inline-block ml-4 w-12 h-12 text-accent animate-bounce-slow" />
            </h2>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed font-mono">
              Regala a tuo figlio un compleanno da vero campione. Campo di calcio, 
              attività sportive guidate dai nostri tecnici e tutto il divertimento 
              del mondo Academy19 in un'unica festa.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 border border-zinc-800 bg-zinc-900/30">
                  <feature.icon className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wide mb-1">{feature.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link to="/contatti?program=compleanno-academy">
                <Button className="bg-accent text-black hover:bg-white h-16 px-10 text-lg font-bold uppercase tracking-widest rounded-none group transition-all duration-300">
                  Prenota la Festa 
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
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
