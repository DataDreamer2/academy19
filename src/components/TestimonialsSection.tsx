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
        <section className="py-24 text-accent border-b border-accent/20 relative" style={{ backgroundImage: `url('/images/sfondo-kit-contatti.jpg')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/92 z-0"></div>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 fill-accent text-accent" />
                        ))}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                        Fiducia <br /> Cieca.
                    </h2>
                    <p className="text-zinc-400 text-xl font-mono">
                        Scelto da oltre 200 famiglie.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {testimonials.map((t, i) => (
                        <div key={t.id} className="border-l border-accent/30 pl-8 relative group hover:border-accent transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-accent rounded-none group-hover:scale-150 transition-transform duration-300"></div>
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 text-zinc-300 italic font-mono transition-colors">
                                {t.text}
                            </p>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-accent transition-all">{t.name}</p>
                                <p className="text-xs font-mono uppercase text-zinc-500 mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
