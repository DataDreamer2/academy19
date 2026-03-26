import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send, ArrowRight, MessageCircle } from 'lucide-react';
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
      {/* Immersive Background Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="sticky top-0 w-full h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('/gallery/immagine back kit e contatti.JPG')`, 
              filter: 'brightness(0.5) contrast(1.1)' 
            }} 
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 tablet:px-12 relative z-10">
        <h2 className="text-5xl tablet:text-7xl font-bold uppercase tracking-tighter mb-12 text-accent leading-none font-display text-center tablet:text-left">
          Contatti & <span className="text-white">Iscrizioni</span>
        </h2>

        {/* Registration Cards Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1 - Camp Estivo Completo */}
          <div className="bg-[#161616]/90 backdrop-blur-md border border-[#2a2a2a] rounded-[12px] overflow-hidden transition-all duration-250 hover:border-[#4caf50] hover:-translate-y-1 group">
            <div className="bg-[#111111] p-6 border-b border-[#2a2a2a]">
              <span className="inline-block bg-[#1a3a1a] text-[#4caf50] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Camp Estivo · Monte S.M. Tiberina (PG)
              </span>
              <h3 className="font-display text-[32px] tablet:text-[40px] font-[900] text-white uppercase leading-none tracking-tight mb-2">
                CAMP ESTIVO ACADEMY19
              </h3>
              <p className="font-sans text-[16px] text-[#bbbbbb]">
                Per ragazzi/e <span className="text-[#4caf50] font-medium">dai 6 anni in su</span>
              </p>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="grid grid-cols-1 mobile:grid-cols-2 gap-6 items-start">
                <div className="space-y-6">
                  <p className="font-sans text-[#bbbbbb] leading-relaxed text-sm">
                    Un'esperienza esclusiva dove passione per il calcio, crescita personale e divertimento si incontrano in un ambiente professionale.
                  </p>
                  
                  <div>
                    <h4 className="text-[#4caf50] font-display font-bold uppercase tracking-wider text-[13px] mb-3">
                      IL PERCORSO
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Perfezionamento tecnico",
                        "Agilità, velocità e rapidità",
                        "Strumenti innovativi",
                        "Metodologia Gingawall",
                        "Esercitazioni specifiche",
                        "Suddivisi per età/livello"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#bbbbbb] font-sans text-[13px]">
                          <span className="w-1 h-1 bg-[#4caf50] rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Video Media Integration */}
                <div className="w-full border border-accent/20 bg-accent/5 p-2 rounded-[8px]">
                   <video 
                      src="/videos/monte-video.mov" 
                      className="w-full aspect-[4/5] object-cover rounded-[4px] grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                  />
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-[#2a2a2a]">
                <div className="bg-[#1a1a1a] p-4 rounded-[8px] border border-[#262626]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-bold text-[14px]">🔹 Formula Giornaliera</span>
                    <span className="text-[#e6a817] font-bold text-[13px]">9:00 – 17:30</span>
                  </div>
                  <p className="text-[#888888] text-[12px] leading-snug">
                    Spuntino, Pranzo, Merenda, Lavanderia, Assicurazione, Kit, Attestato
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-[8px] border border-[#262626]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-bold text-[14px]">🔹 Formula con Pernottamento</span>
                    <span className="text-[#e6a817] font-bold text-[13px]">Pensione completa</span>
                  </div>
                  <p className="text-[#888888] text-[12px] leading-snug">
                    Colazione, Pranzo, Cena, Lavanderia, Pulizie, Assicurazione, Kit, Attestato
                  </p>
                </div>
              </div>
              
              <div className="bg-[#1a2a1a] border border-[#2a4a2a] p-4 rounded-[6px] flex justify-between items-center">
                <div>
                  <div className="text-[#4caf50] font-bold text-[13px] uppercase tracking-wide">ISCRIZIONI APERTE</div>
                  <div className="text-[#888888] text-[11px]">Posti limitati · 1 o 2 rate</div>
                </div>
                <div className="text-[#e6a817] font-bold text-[13px] text-right">
                  ENTRO 10 GIUGNO
                </div>
              </div>
              
              <a 
                href="tel:3478894076"
                className="block w-full bg-[#4caf50] text-white text-center py-4 rounded-[8px] font-bold uppercase tracking-widest transition-all hover:opacity-85 active:scale-[0.99]"
              >
                PRENOTA ORA
              </a>
            </div>
          </div>

          {/* Card 2 - Formula Novità */}
          <div className="bg-[#161616]/90 backdrop-blur-md border border-[#2a2a2a] rounded-[12px] overflow-hidden transition-all duration-250 hover:border-[#4caf50] hover:-translate-y-1 group">
            <div className="bg-[#111111] p-6 border-b border-[#2a2a2a]">
              <span className="inline-block bg-[#3a2a00] text-[#e6a817] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                NOVITÀ · Forlì
              </span>
              <h3 className="font-display text-[32px] tablet:text-[40px] font-[900] text-white uppercase leading-none tracking-tight mb-2">
                ALLENAMENTO + PRANZO
              </h3>
              <p className="font-sans text-[16px] text-[#bbbbbb]">
                Per ragazzi/e <span className="text-[#4caf50] font-medium">dai 6 anni in su</span>
              </p>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="grid grid-cols-1 mobile:grid-cols-2 gap-6 items-start">
                <div className="space-y-6">
                  <p className="font-sans text-[#bbbbbb] leading-relaxed text-sm">
                    La nuova formula per chi vuole allenarsi senza rinunciare al divertimento. Musica, giochi e gavettoni assicurati!
                  </p>
                  
                  <div>
                    <h4 className="text-[#4caf50] font-display font-bold uppercase tracking-wider text-[13px] mb-3">
                      CORSO TECNICO
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Perfezionamento tecnico",
                        "Agilità e rapidità",
                        "Strumenti innovativi",
                        "Metodologia Gingawall",
                        "Esercitazioni specifiche",
                        "Suddivisi per fascia d'età"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#bbbbbb] font-sans text-[13px]">
                          <span className="w-1 h-1 bg-[#4caf50] rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photo Media Integration */}
                <div className="w-full border border-amber-500/20 bg-amber-500/5 p-2 rounded-[8px]">
                   <div className="overflow-hidden relative group aspect-[4/5] rounded-[4px]">
                      <img 
                          src="/images/forli-casacche.jpeg" 
                          alt="Forlì Casacche"
                          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-color"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-[#2a2a2a]">
                <div className="bg-[#1a1a1a] p-4 rounded-[8px] border border-[#262626]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-bold text-[14px]">🔹 Formula Allenamento + Pranzo</span>
                    <span className="text-[#e6a817] font-bold text-[13px]">8:30 – 15:00</span>
                  </div>
                  <p className="text-[#888888] text-[12px] leading-snug">
                    Spuntino metà mattina, Pranzo incluso, Assicurazione inclusa
                  </p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-[8px] grayscale opacity-60">
                  <p className="text-[11px] text-zinc-500 uppercase font-sans">Altre sedi: Lerchi (PG) / Città di Castello</p>
                </div>
              </div>
              
              <div className="bg-[#1a2a1a] border border-[#2a4a2a] p-4 rounded-[6px] flex justify-between items-center">
                <div>
                  <div className="text-[#4caf50] font-bold text-[13px] uppercase tracking-wide">ISCRIZIONI APERTE</div>
                  <div className="text-[#888888] text-[11px]">Posti limitati · 1 o 2 rate</div>
                </div>
                <div className="text-[#e6a817] font-bold text-[13px] text-right">
                  ENTRO 10 MAGGIO
                </div>
              </div>
              
              <a 
                href="tel:3478894076"
                className="block w-full bg-transparent border-2 border-[#e6a817] text-[#e6a817] text-center py-4 rounded-[8px] font-bold uppercase tracking-widest transition-all hover:bg-[#e6a817] hover:text-[#0d0d0d] active:scale-[0.99]"
              >
                PRENOTA ORA
              </a>
            </div>
          </div>
        </div>

        {/* --- FORM DI CONTATTO --- */}
        <div className="bg-[#111111]/90 backdrop-blur-md border border-[#2a2a2a] rounded-[12px] p-8 tablet:p-12 mb-16 relative overflow-hidden group hover:border-[#4caf50]/50 transition-colors animate-fade-up">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#4caf50]/5 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-[#4caf50]/10 transition-colors"></div>
           
           <h3 className="font-display text-[32px] tablet:text-[42px] font-[900] text-white uppercase leading-none tracking-tight mb-8">
             Hai una <span className="text-[#4caf50]">domanda?</span>
           </h3>

           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#888888] font-sans">Nome</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#444] focus:border-[#4caf50] focus:ring-[#4caf50] rounded-[8px] h-12 font-sans"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#888888] font-sans">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#444] focus:border-[#4caf50] focus:ring-[#4caf50] rounded-[8px] h-12 font-sans"
                    placeholder="email@esempio.it"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#888888] font-sans">Interesse</label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger className="bg-[#1a1a1a] border-[#2a2a2a] text-white focus:border-[#4caf50] focus:ring-[#4caf50] rounded-[8px] h-12 font-sans">
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white rounded-[8px] font-sans">
                      <SelectItem value="camp-estivo">Camp Estivo Monte S.M. Tiberina</SelectItem>
                      <SelectItem value="camp-estivo-forli">Camp Estivo Forlì</SelectItem>
                      <SelectItem value="Kit Ufficiale">Richiesta Kit Ufficiale</SelectItem>
                      <SelectItem value="pacchetti-lezioni">Pacchetti Lezioni</SelectItem>
                      <SelectItem value="compleanno">Compleanno con AcademY</SelectItem>
                      <SelectItem value="altro">Altro...</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#888888] font-sans">Messaggio</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#444] focus:border-[#4caf50] focus:ring-[#4caf50] rounded-[8px] resize-none font-sans"
                  placeholder="Come possiamo aiutarti?"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4caf50] text-white hover:opacity-85 h-14 px-12 text-lg font-bold uppercase tracking-widest rounded-[8px] transition-all group font-display w-full tablet:w-auto"
                >
                  {isSubmitting ? 'Invio in corso...' : (
                    <span className="flex items-center gap-3">
                      Invia Messaggio <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </div>
           </form>
        </div>

        {/* Contact Banner */}
        <div className="bg-[#111111]/90 backdrop-blur-md border border-[#2a2a2a] rounded-[12px] p-6 tablet:p-8 flex flex-col tablet:flex-row justify-between items-center gap-6 mb-20 animate-fade-up">
          <div className="text-center tablet:text-left">
            <span className="block text-[#4caf50] font-display font-bold uppercase tracking-widest text-[12px] mb-1">
              INFO & PRENOTAZIONI
            </span>
            <h4 className="font-display text-[26px] tablet:text-[32px] font-[900] text-white uppercase leading-none tracking-tight mb-1">
              ZUPPARDO LIBORIO
            </h4>
            <p className="text-[#888888] text-[14px] font-sans">
              Vi aspettiamo in campo!
            </p>
          </div>
          
          <div className="flex flex-col mobile:flex-row gap-4 w-full tablet:w-auto">
            <a 
              href="tel:3478894076" 
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#0d0d0d] text-[14px] uppercase tracking-wider w-full mobile:w-auto"
            >
              <Phone size={18} />
              347 889 4076
            </a>
            <a 
              href="tel:3478894076" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4caf50] text-white rounded-full font-bold transition-all hover:opacity-85 text-[14px] uppercase tracking-wider w-full mobile:w-auto"
            >
              <MessageCircle size={18} />
              SCRIVICI ORA
            </a>
          </div>
        </div>

        {/* Map Strip */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 h-[500px] tablet:h-80 w-full bg-black border border-accent/20 relative rounded-[12px] overflow-hidden">
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
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border-b tablet:border-b-0 tablet:border-r border-accent/50"
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
