import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'Chi Siamo', href: '/chi-siamo' },
      { label: 'Percorsi', href: '/percorsi' },
      { label: 'Galleria', href: '/galleria' },
      { label: 'Contatti', href: '/contatti' }
    ],
    programs: [
      { label: 'Pacchetti Lezioni', href: '/percorsi' },
      { label: 'Kit Ufficiale', href: '/kit' },
      { label: 'Iscriviti al Campus', href: '/contatti' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Termini e Condizioni', href: '/termini-e-condizioni' },
      { label: 'Cookie Policy', href: '/cookie-policy' }
    ]
  };



  return (
    <footer className="bg-black text-accent py-20 border-t border-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-accent text-black font-bold text-xl tracking-tighter">
                19
              </div>
              <span className="font-bold text-4xl tracking-tight uppercase">Academy.19</span>
            </div>
            <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-mono">
              Il punto di riferimento per la formazione calcistica d'eccellenza.
              Disciplina, tecnica e passione.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-8 border-b border-accent/30 pb-2 inline-block">Menu</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-accent/60 hover:text-accent transition-all font-mono text-sm uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-8 border-b border-accent/30 pb-2 inline-block">Percorsi</h4>
            <ul className="space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-accent/60 hover:text-accent transition-all font-mono text-sm uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-8 border-b border-accent/30 pb-2 inline-block">Note Legali</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-accent/60 hover:text-accent transition-all font-mono text-sm uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <span>© {new Date().getFullYear()} Academy.19</span>
            <span className="hidden md:inline">•</span>
            <span>Via Tripoli 27 - Forlì</span>
            <span className="hidden md:inline">•</span>
            <span>P.IVA 12345678901</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs transition-all"
          >
            Torna su
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
