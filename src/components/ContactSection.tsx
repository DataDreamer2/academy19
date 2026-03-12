import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

const ContactSection = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const programParam = searchParams.get('program') || searchParams.get('interesse');
    if (programParam) {
      setFormData(prev => ({ ...prev, program: programParam }));
    }
  }, [location]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio');
      }

      toast({
        className: "bg-black border border-accent text-accent",
        title: "✅ Messaggio Inviato",
        description: "Abbiamo ricevuto la tua richiesta. Ti risponderemo a breve!",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
      });
    } catch (error) {
      console.error('Email error:', error);
      toast({
        variant: "destructive",
        title: "❌ Errore",
        description: "Non è stato possibile inviare il messaggio. Riprova più tardi o contattaci telefonicamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="py-24 bg-black border-t border-accent/20 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

          {/* Info Side */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-accent">
              Entra nel <br /> Club.
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-md leading-relaxed font-mono">
              Vieni a provare il nostro metodo. La prima sessione è gratuita e senza impegno.
              Ti aspettiamo in campo.
            </p>

            <div className="space-y-8 border-l border-accent/30 pl-8">
              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-sm text-accent/50 filter">Le Nostre Sedi</h4>
                <div className="space-y-4">
                  <div className="group">
                    <p className="text-xl font-bold uppercase text-white group- transition-all">Forlì</p>
                    <p className="text-zinc-400 font-mono text-sm">Via Tripoli 27</p>
                  </div>
                  <div className="group">
                    <p className="text-xl font-bold uppercase text-white group- transition-all">Città di Castello</p>
                    <p className="text-zinc-400 font-mono text-sm">Via Toscana - Centro Sportivo Lerchi, 06012 (PG)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-sm text-accent/50 filter">Contatti</h4>
                <a href="tel:3478894076" className="text-xl font-medium text-white hover:text-accent cursor-pointer transition-all font-mono">347 8894076</a>
                <p className="text-xl font-medium text-white cursor-pointer transition-all font-mono uppercase">ACADEMY19@LIBERO.IT</p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest mb-2 text-sm text-accent/50 filter">Social</h4>
                <div className="flex gap-4 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 border border-zinc-700 flex items-center justify-center text-white hover:border-accent hover:bg-accent hover:text-black transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-black border border-accent/20 p-8 md:p-12 relative">
            {/* Corner styling */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

            <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-3 text-accent">
              Prenota la Prova
              <span className="w-2 h-2 bg-accent rounded-none animate-bounce-ball"></span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">Nome</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none h-12"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none h-12"
                    placeholder="mario@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">Telefono</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none h-12"
                    placeholder="+39 333 1234567"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">Interesse</label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger className="bg-black border-zinc-800 text-white focus:border-accent focus:ring-accent rounded-none h-12">
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-zinc-800 text-white rounded-none">
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="Richiesta Kit Ufficiale">Kit Ufficiale</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-5">Pacchetto 5 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-10">Pacchetto 10 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-15">Pacchetto 15 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-20">Pacchetto 20 Lezioni</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-mono">Messaggio</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none resize-none"
                  placeholder="Scrivi qui..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black hover:bg-white h-14 text-lg font-bold uppercase tracking-widest rounded-none mt-4 group transition-all duration-300"
              >
                {isSubmitting ? 'Invio in corso...' : (
                  <span className="flex items-center gap-3">
                    Invia Richiesta <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map Strip */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-80 w-full bg-black border border-accent/20 relative">
          <div className="absolute inset-0 bg-accent/20 mix-blend-color pointer-events-none z-10"></div>
          <iframe
            src="https://maps.google.com/maps?q=Via+Tripoli+27,+Forl%C3%AC&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Sede Forlì"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border-b md:border-b-0 md:border-r border-accent/50"
          />
          <iframe
            src="https://maps.google.com/maps?q=Centro+sportivo+Lerchi+via+toscana,+06012+Citt%C3%A0+di+castello&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Sede Città di Castello"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
