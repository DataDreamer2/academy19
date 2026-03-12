import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/team-celebration.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If the anchor is a route, navigate to it
      const target = href.replace('#', '/');
      navigate(target);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Image - Desaturated/Tinted green for drama */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Academy19 Team Celebration - Giovani Campioni"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
          fetchPriority="high"
        />
      </div>

      {/* Green Tint Overlay */}
      <div className="absolute inset-0 bg-accent/20 mix-blend-color" />

      {/* Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-accent/40 bg-black/50 backdrop-blur-sm mb-8 animate-goal-celebration">
            <span className="w-2 h-2 rounded-full bg-accent animate-bounce-ball"></span>
            <span className="text-white/80 text-xs font-bold tracking-widest uppercase font-mono">
              Stagione 2025/2026
            </span>
          </div>

          {/* Main Headline - BIG TYPE */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-accent tracking-tighter leading-[0.9] mb-8 animate-kick-in" style={{ animationDelay: '0.2s' }}>
            GIOVANI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/50">
              CAMPIONI.
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-300 max-w-xl mb-12 leading-relaxed font-mono animate-dribble" style={{ animationDelay: '0.4s' }}>
            Non è solo calcio. È disciplina, tecnica e crescita personale.
            Il percorso d'élite per giovani talenti.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-6 animate-sprint" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('#contatti')}
              className="group bg-accent hover:bg-accent/80 text-black text-lg px-10 py-8 rounded-none transition-all duration-300 font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-3">
                Prenota la Prova
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#percorsi')}
              className="bg-transparent border-accent/40 text-accent hover:bg-accent/10 hover:border-accent text-lg px-10 py-8 rounded-none backdrop-blur-sm transition-all duration-300 font-bold uppercase tracking-wider"
            >
              Scopri i Programmi
            </Button>
          </div>

          {/* Stats/Trust - Minimal */}
          <div className="mt-20 flex items-center gap-12 border-t border-accent/20 pt-8 animate-pass-through" style={{ animationDelay: '0.8s' }}>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-accent">500+</p>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-2">Atleti Formati</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-accent">FIGC</p>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-2">Certificati</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
