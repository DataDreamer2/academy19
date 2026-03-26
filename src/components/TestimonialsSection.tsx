import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Maria Bianchi',
        role: 'Mamma di Luca (12 anni)',
        text: '"Progressi incredibili in soli 6 mesi. Professionalità assoluta."',
        rating: 5
    },
    {
        id: 2,
        name: 'Giuseppe Rossi',
        role: 'Papà di Sofia (9 anni)',
        text: '"Non è solo calcio, è educazione allo sport. Ambiente fantastico."',
        rating: 5
    },
    {
        id: 3,
        name: 'Elena Conti',
        role: 'Mamma di Marco (15 anni)',
        text: '"Grazie al loro metodo, Marco è entrato in una giovanile professionistica."',
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 text-accent border-b border-accent/20 relative overflow-hidden">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-scroll md:bg-fixed" 
                style={{ 
                    backgroundImage: `url('/gallery/immagine back kit e contatti.JPG')`, 
                    filter: 'brightness(0.7) contrast(1.1)' 
                }} 
            />
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex gap-1 mb-6 fade-up will-animate" data-delay="0.1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 fill-accent text-accent" />
                        ))}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 font-display translate-x-left will-animate" data-delay="0.2">
                        Fiducia <br /> Cieca.
                    </h2>
                    <p className="text-zinc-400 text-xl font-sans fade-up will-animate" data-delay="0.4">
                        Scelto da oltre 200 famiglie.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 will-animate" data-stagger="0.15">
                    {testimonials.map((t, i) => (
                        <div key={t.id} className="border-l border-accent/30 pl-8 relative group hover:border-accent transition-colors duration-300 translate-x-left">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-accent rounded-[2px] group-hover:scale-150 transition-transform duration-300"></div>
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 text-zinc-300 italic font-sans transition-colors">
                                {t.text}
                            </p>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-accent transition-all font-display text-xl">{t.name}</p>
                                <p className="text-xs font-sans uppercase text-zinc-500 mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
