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
    <section id="contatti" className="py-24 bg-black border-t border-accent/20 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

          {/* Info Side */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-accent leading-none">
              Camp Estivo <br /> <span className="text-white">Academy19</span>
            </h2>

            {/* --- MONTE S.M. TIBERINA --- */}
            <div className="mb-20">
                <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 text-accent text-sm font-bold uppercase tracking-widest mb-8 font-mono">
                    Monte S.M. Tiberina (PG) ⚽
                </div>
                
                <div className="space-y-6 text-zinc-400 max-w-xl leading-relaxed font-mono text-base">
                    <p className="text-xl text-white font-bold italic mb-4">
                        "Un’esperienza esclusiva dedicata a ragazzi e ragazze dai 6 anni in su."
                    </p>
                    <p>
                        Passione per il calcio, crescita personale e divertimento si incontrano in un ambiente professionale e stimolante. 
                        Un percorso studiato per far vivere un’estate indimenticabile, migliorando le proprie capacità tecniche e sviluppando valori fondamentali come impegno, collaborazione e spirito di squadra.
                    </p>
                </div>

                <div className="mt-12 space-y-12">
                  <div className="border-l border-accent/30 pl-6">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent">🎯 Un Percorso Completo</h4>
                    <ul className="space-y-3 text-sm font-mono text-zinc-400 uppercase tracking-wide">
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Perfezionamento tecnico e coordinativo</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Sviluppo di agilità, velocità e rapidità</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Allenamenti con strumenti innovativi</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Metodologia 1vs1 con Gingawall</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Esercitazioni specifiche per ruolo</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Attività suddivise per età e livello</li>
                    </ul>
                  </div>

                  <div className="border-l border-accent/30 pl-6">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent">📦 Le Formule</h4>
                    <div className="space-y-6">
                      <div>
                        <p className="text-white font-bold text-base uppercase mb-1">🔹 FORMULA GIORNALIERA (9:00 – 17:30)</p>
                        <p className="text-xs text-zinc-500 font-mono leading-relaxed italic">
                            Spuntino, Pranzo, Merenda, Lavanderia, Assicurazione. 
                            Incluso: Kit Academy19, Premi, Attestato.
                        </p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-base uppercase mb-1">🔹 FORMULA CON PERNOTTAMENTO</p>
                        <p className="text-xs text-zinc-500 font-mono leading-relaxed italic">
                            Esperienza immersiva: Pensione completa, Lavanderia, Pulizie. 
                            Incluso: Kit Academy19, Premi, Attestato.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l border-accent/30 pl-6">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent">📝 Iscrizioni & Scadenza</h4>
                    <p className="text-sm text-zinc-400 font-mono uppercase mb-4">
                        Aperte fino al <span className="text-white">10 Giugno</span>. Posti limitati.
                    </p>
                    <div className="p-4 border border-orange-500/20 bg-orange-500/5 text-xs font-mono text-orange-200/80 uppercase">
                        Pagamento in un’unica soluzione o in due rate (acconto e saldo).
                    </div>
                  </div>
                </div>
            </div>

            {/* --- FORLÌ --- */}
            <div className="mb-20 pt-8 border-t border-accent/10">
                <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 text-accent text-sm font-bold uppercase tracking-widest mb-8 font-mono">
                    Forlì ☀️
                </div>
                
                <div className="space-y-6 text-zinc-400 max-w-xl leading-relaxed font-mono text-base">
                    <p className="text-xl text-white font-bold italic mb-4">
                        "Le iscrizioni al Camp Estivo Academy19 di Forlì sono ufficialmente aperte!"
                    </p>
                    <p>
                        Un’esperienza esclusiva dedicata a ragazzi e ragazze dai 6 anni in su, dove la passione per il calcio incontra il divertimento in un ambiente professionale e stimolante.
                    </p>
                    <p>
                        Impara divertendoti: il nostro obiettivo è far vivere un’estate indimenticabile, migliorando le capacità tecniche e condividendo momenti di pura allegria.
                    </p>
                </div>

                <div className="mt-12 space-y-12">
                  <div className="border-l border-accent/30 pl-6">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent">🎯 Il Percorso Tecnico</h4>
                    <p className="text-sm font-bold text-white mb-4">Ogni partecipante sarà inserito in un programma strutturato che prevede:</p>
                    <ul className="space-y-3 text-sm font-mono text-zinc-400 uppercase tracking-wide">
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Perfezionamento tecnico e coordinativo</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Sviluppo di agilità e rapidità</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Allenamenti con strumenti innovativi</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Metodologia 1vs1 con Gingawall</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Esercitazioni specifiche per ruolo</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Attività suddivise per fascia d’età</li>
                    </ul>
                    <p className="mt-6 text-sm italic text-accent font-mono">
                        Oltre al campo, spazio al divertimento: musica, giochi e gli immancabili gavettoni assicurati! 💦
                    </p>
                  </div>

                  <div className="border-l border-accent/30 pl-6">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent">📦 La Formula: Allenamento & Pranzo</h4>
                    <p className="text-sm font-bold text-white mb-4">Una soluzione completa per vivere il camp con la massima energia (Orario: 8:30 – 15:00):</p>
                    <ul className="space-y-3 text-sm font-mono text-zinc-400 uppercase tracking-wide">
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Spuntino di metà mattina</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Pranzo incluso</li>
                      <li className="flex items-start gap-2"><span className="text-accent">•</span> Assicurazione inclusa</li>
                    </ul>
                  </div>

                  <div className="border-l border-accent/30 pl-6">
                    <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent">📝 Iscrizioni & Scadenza</h4>
                    <p className="text-sm text-zinc-400 font-mono uppercase mb-4">
                        Aperte fino al <span className="text-white">10 Maggio</span>. Posti limitati.
                    </p>
                    <div className="p-4 border border-orange-500/20 bg-orange-500/5 text-xs font-mono text-orange-200/80 uppercase">
                        Pagamento in un’unica soluzione o in due rate (acconto e saldo).
                    </div>
                  </div>
                </div>
            </div>

              <div className="border-l border-accent/30 pl-6 pt-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-zinc-500">Le Altre Nostre Sedi</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase text-white">Forlì</p>
                    <p className="text-xs text-zinc-500 font-mono">Via Tripoli 137</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase text-white">Lerchi (PG)</p>
                    <p className="text-xs text-zinc-500 font-mono">Città di Castello</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest mb-4 text-base text-accent/50 filter">Info e Prenotazioni</h4>
                <p className="text-sm font-mono text-zinc-400 mb-2">Per maggiori informazioni contatta <strong>Zuppardo Liborio</strong>:</p>
                <a href="tel:3478894076" className="text-2xl font-bold text-white hover:text-accent cursor-pointer transition-all font-mono block mb-2">📱 347 8894076</a>
                <p className="text-lg font-medium text-white cursor-pointer transition-all font-mono uppercase">ACADEMY19@LIBERO.IT</p>
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
