import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/chi-siamo', label: 'Chi Siamo' },
    { to: '/percorsi', label: 'Percorsi' },
    { to: '/galleria', label: 'Galleria' },
    { to: '/kit', label: 'Kit' },
    { to: '/contatti', label: 'Contatti' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-none transition-all duration-300 ${isScrolled
            ? 'bg-black/90 backdrop-blur-md border border-accent/20 py-3 shadow-lg shadow-accent/5'
            : 'bg-transparent py-5'
            }`}
        >
          <div className="flex items-center justify-between px-6">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden border border-accent/20">
                <img 
                  src="/images/logo-academy.jpg" 
                  alt="Academy19 Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase text-accent">
                Academy19
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:text-accent  ${isActive(link.to)
                    ? 'text-accent  border-b-2 border-accent pb-1'
                    : 'text-accent/60'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contatti">
                <Button
                  className="rounded-none bg-accent hover:bg-accent/80 text-black font-bold tracking-widest uppercase text-xs px-8 py-6 transition-all duration-300"
                >
                  Iscriviti al Campus
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-none transition-colors text-accent hover:bg-accent/10 border border-transparent hover:border-accent/30`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300 will-animate">
          <div className="flex flex-col gap-8 text-center w-full max-w-sm px-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-3xl font-bold uppercase tracking-widest transition-all ${isActive(link.to)
                  ? 'text-accent '
                  : 'text-accent/50 hover:text-accent'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contatti" className="mt-8 w-full">
              <Button
                className="rounded-none bg-accent hover:bg-accent/80 text-black font-bold tracking-widest uppercase text-lg px-8 py-8 w-full"
              >
                Iscriviti al Campus
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
