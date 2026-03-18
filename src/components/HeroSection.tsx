import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroNew from '@/assets/hero-bg-new.jpg';

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
            className="relative min-h-screen mobile-xs:min-h-[100dvh] flex items-center overflow-hidden bg-black"
        >
            {/* Background Video - DYNAMIC */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
                >
                    <source src="/video-bg.mp4" type="video/mp4" />
                    {/* Fallback to image if video fails to load or for very old browsers */}
                    <img
                        src={heroNew}
                        alt="Academy19 - Giovani Campioni"
                        className="w-full h-full object-cover opacity-60"
                    />
                </video>
            </div>

            {/* Substantial uniform overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-28 md:pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-accent/40 bg-black/50 backdrop-blur-sm mb-8 animate-goal-celebration">
            <span className="w-2 h-2 rounded-full bg-accent animate-bounce-ball"></span>
            <span className="text-white/80 text-xs font-bold tracking-widest uppercase font-mono">
              Stagione 2025/2026
            </span>
          </div>

          {/* Main Headline - BIG TYPE - Added Responsive clamp() */}
          <h1 
            className="text-[clamp(3.5rem,15vw,9rem)] font-bold text-accent tracking-tighter leading-[0.85] mb-8 animate-kick-in drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" 
            style={{ animationDelay: '0.2s' }}
          >
            GIOVANI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/50">
              CAMPIONI.
            </span>
          </h1>

          <p className="text-xl mobile:text-2xl md:text-3xl text-zinc-100 max-w-xl mb-12 leading-relaxed font-mono animate-dribble drop-shadow-md" style={{ animationDelay: '0.4s' }}>
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

          {/* Stats/Trust - Optimized for mobile-xs */}
          <div className="mt-12 md:mt-20 flex flex-wrap items-center gap-8 md:gap-12 border-t border-accent/20 pt-8 animate-pass-through" style={{ animationDelay: '0.8s' }}>
            <div className="min-w-[120px]">
              <p className="text-4xl md:text-5xl font-bold text-accent">500+</p>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-2">Atleti Formati</p>
            </div>
            <div className="min-w-[120px]">
              <p className="text-4xl md:text-5xl font-bold text-accent">FIGC</p>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mt-2">Certificati</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
