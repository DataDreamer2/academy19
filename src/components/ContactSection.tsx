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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Errore durante l\'invio');
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
    <section id="contatti" className="py-24 text-accent border-t border-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="sticky top-0 w-full h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('/gallery/immagine back kit e contatti.JPG')`, 
              filter: 'brightness(0.7) contrast(1.1)' 
            }} 
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

          {/* Info Side */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-accent leading-none font-display translate-x-left will-animate">
              Camp Estivo <br /> <span className="text-white">Academy19</span>
            </h2>

            {/* --- MONTE S.M. TIBERINA --- */}
            <div className="mb-24">
                <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 text-accent text-sm font-bold uppercase tracking-widest mb-8 font-sans fade-up will-animate" data-delay="0.1">
                    Monte S.M. Tiberina (PG) ⚽
                </div>
                
                <div className="text-column space-y-6 text-zinc-300 leading-relaxed font-sans fade-up will-animate" data-delay="0.2">
                    <p className="text-xl text-white font-bold italic mb-4">
                        "Passione, crescita e puro divertimento."
                    </p>
                    <p>
                        Un’esperienza d’élite dai 6 anni in su. Un percorso per migliorare la tecnica e vivere i valori del calcio in un ambiente professionale.
                    </p>
                </div>

                <div className="mt-12 space-y-12 will-animate" data-stagger="0.1">
                  <div className="border-l border-accent/30 pl-6 translate-x-left">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-accent font-display text-xl">🎯 Un Percorso Completo</h4>
                    <ul className="space-y-3 text-sm font-sans text-zinc-400 uppercase tracking-wide">
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Perfezionamento tecnico e coordinativo</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Sviluppo di agilità, velocità e rapidità</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Allenamenti con strumenti innovativi</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Metodologia 1vs1 con Gingawall</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Esercitazioni specifiche per ruolo</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Attività suddivise per età e livello</li>
                    </ul>
                  </div>

                  <div className="border-l border-accent/30 pl-6 translate-x-left will-animate">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-accent font-display text-xl">📦 Le Formule</h4>
                    <div className="space-y-6">
                      <div>
                        <p className="text-white font-bold uppercase mb-1 font-display">🔹 FORMULA GIORNALIERA (9:00 – 17:30)</p>
                        <p className="text-xs text-zinc-500 font-sans leading-relaxed italic">
                            Spuntino, Pranzo, Merenda, Lavanderia, Assicurazione. 
                            Incluso: Kit Academy19, Premi, Attestato.
                        </p>
                      </div>
                      <div>
                        <p className="text-white font-bold uppercase mb-1 font-display">🔹 FORMULA CON PERNOTTAMENTO</p>
                        <p className="text-xs text-zinc-500 font-sans leading-relaxed italic">
                            Esperienza immersiva: Pensione completa, Lavanderia, Pulizie. 
                            Incluso: Kit Academy19, Premi, Attestato.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="border-l border-accent/20 pl-6 space-y-4 translate-x-left will-animate">
                      <h4 className="font-bold uppercase tracking-widest text-accent font-display text-xl">📝 Iscrizioni & Scadenza</h4>
                      <p className="text-sm text-zinc-400 font-sans uppercase">
                          Aperte fino al <span className="text-white">10 Giugno</span>. Posti limitati.
                      </p>
                      <div className="p-4 border border-accent/20 bg-accent/5 text-xs font-sans text-accent/80 uppercase max-w-lg">
                          Pagamento in un’unica soluzione o in due rate (acconto e saldo).
                      </div>
                    </div>
                    {/* Media centered and smaller as per fallback request */}
                    <div className="w-full max-w-[280px] border border-accent/20 bg-accent/5 p-2 staff-reveal will-animate" data-delay="0.3">
                      <video 
                          src="/videos/monte-video.mov" 
                          className="w-full aspect-[4/5] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                      />
                    </div>
                  </div>
                </div>
            </div>

            {/* --- FORLÌ --- */}
            <div className="mb-24 pt-12 border-t border-amber-500/10">
                <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-500 text-sm font-bold uppercase tracking-widest mb-8 font-sans fade-up will-animate">
                    Forlì ☀️
                </div>
                
                <div className="text-column space-y-6 text-zinc-300 leading-relaxed font-sans fade-up will-animate" data-delay="0.1">
                    <p className="text-xl text-white font-bold italic mb-4">
                        "Le iscrizioni sono ufficialmente aperte!"
                    </p>
                    <p>
                        Un’estate indimenticabile tra tecnica e allegria. Migliora le tue capacità e condividi momenti di puro sport con i nostri coach.
                    </p>
                </div>

                <div className="mt-12 space-y-12 will-animate" data-stagger="0.1">
                  <div className="border-l border-amber-500/30 pl-6 translate-x-left">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-amber-500 font-display text-xl">🎯 Il Percorso Tecnico</h4>
                    <p className="text-sm font-bold text-white mb-4 font-display">Ogni partecipante sarà inserito in un programma strutturato che prevede:</p>
                    <ul className="space-y-3 text-sm font-sans text-zinc-400 uppercase tracking-wide">
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Perfezionamento tecnico e coordinativo</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Sviluppo di agilità e rapidità</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Allenamenti con strumenti innovativi</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Metodologia 1vs1 con Gingawall</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Esercitazioni specifiche per ruolo</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Attività suddivise per fascia d’età</li>
                    </ul>
                    <p className="mt-6 text-sm italic text-amber-500 font-sans">
                        Oltre al campo, spazio al divertimento: musica, giochi e gli immancabili gavettoni assicurati! 💦
                    </p>
                  </div>

                  <div className="border-l border-amber-500/30 pl-6 translate-x-left will-animate">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-amber-500 font-display text-xl">📦 La Formula: Allenamento & Pranzo</h4>
                    <p className="text-sm font-bold text-white mb-4 font-display">Una soluzione completa per vivere il camp con la massima energy (Orario: 8:30 – 15:00):</p>
                    <ul className="space-y-3 text-sm font-sans text-zinc-400 uppercase tracking-wide">
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Spuntino di metà mattina</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Pranzo incluso</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Assicurazione inclusa</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="border-l border-amber-500/20 pl-6 space-y-4 translate-x-left will-animate">
                      <h4 className="font-bold uppercase tracking-widest text-base text-amber-500 font-display text-xl">📝 Iscrizioni & Scadenza</h4>
                      <p className="text-sm text-zinc-400 font-sans uppercase">
                          Aperte fino al <span className="text-white">10 Maggio</span>. Posti limitati.
                      </p>
                      <div className="p-4 border border-amber-500/20 bg-amber-500/5 text-xs font-sans text-amber-200/80 uppercase max-w-lg">
                          Pagamento in un’unica soluzione o in due rate (acconto e saldo).
                      </div>
                    </div>
                    {/* Media centered and smaller as per fallback request */}
                    <div className="w-full max-w-[280px] border border-amber-500/20 bg-amber-500/5 p-2 staff-reveal will-animate" data-delay="0.3">
                      <div className="overflow-hidden relative group aspect-[4/5]">
                          <img 
                              src="/images/forli-casacche.jpeg" 
                              alt="Forlì Casacche"
                              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-color"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="border-l border-zinc-800 pl-6 pt-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all fade-up will-animate" data-delay="0.4">
              <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-zinc-500 font-display">Le Altre Nostre Sedi</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-bold uppercase text-white font-display text-base">Forlì</p>
                  <p className="text-xs text-zinc-500 font-sans">Via Tripoli 137</p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase text-white font-display text-base">Lerchi (PG)</p>
                  <p className="text-xs text-zinc-500 font-sans">Città di Castello</p>
                </div>
              </div>
            </div>

            <div className="mt-12 fade-up will-animate" data-delay="0.5">
              <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent/50 font-display text-xl">Info e Prenotazioni</h4>
              <p className="text-sm font-sans text-zinc-400 mb-2">Per maggiori informazioni contatta <strong>Zuppardo Liborio</strong>:</p>
              <a href="tel:3478894076" className="text-2xl font-bold text-white hover:text-accent cursor-pointer transition-all font-display block mb-2">📱 347 8894076</a>
              <p className="text-lg font-medium text-white cursor-pointer transition-all font-display uppercase tracking-widest">ACADEMY19@LIBERO.IT</p>
            </div>

            <div className="mt-8 fade-up will-animate" data-delay="0.6">
              <h4 className="font-bold uppercase tracking-widest mb-2 text-sm text-accent/50 font-display">Social</h4>
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

          {/* Form Side */}
          <div className="bg-black border border-accent/20 p-8 md:p-12 relative translate-x-right will-animate">
            {/* Corner styling */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

            <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-3 text-accent font-display text-3xl">
              Prenota la Prova
              <span className="w-2 h-2 bg-accent rounded-none animate-bounce-ball"></span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 will-animate" data-stagger="0.05">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 fade-up">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans">Nome</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none h-12 font-sans"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div className="space-y-2 fade-up will-animate">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none h-12 font-sans"
                    placeholder="mario@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 fade-up will-animate">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans">Telefono</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none h-12 font-sans"
                    placeholder="+39 333 1234567"
                  />
                </div>
                <div className="space-y-2 fade-up will-animate">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans">Interesse</label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger className="bg-black border-zinc-800 text-white focus:border-accent focus:ring-accent rounded-none h-12 font-sans">
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-zinc-800 text-white rounded-none font-sans">
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="camp-estivo">Camp Estivo Monte S.M. Tiberina</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="camp-estivo-forli">Camp Estivo Forlì</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="Richiesta Kit Ufficiale">Kit Ufficiale</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-5">Pacchetto 5 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-10">Pacchetto 10 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-15">Pacchetto 15 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="pacchetto-20">Pacchetto 20 Lezioni</SelectItem>
                      <SelectItem className="focus:bg-zinc-900 focus:text-white" value="compleanno-academy">Compleanno con AcademY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2 fade-up will-animate">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans">Messaggio</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-black border-zinc-800 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent rounded-none resize-none font-sans"
                  placeholder="Scrivi qui..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black hover:bg-white h-14 text-lg font-bold uppercase tracking-widest rounded-none mt-4 group transition-all duration-300 font-display btn-bounce"
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-80 w-full bg-black border border-accent/20 relative fade-up will-animate" data-delay="0.2">
          <div className="absolute inset-0 bg-accent/20 mix-blend-color pointer-events-none z-10"></div>
          <iframe
            src="https://maps.google.com/maps?q=Via+Tripoli+137,+Forl%C3%AC&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
