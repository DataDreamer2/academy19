import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Check, ShoppingBag, Star, ShieldCheck, ArrowRight } from "lucide-react";

const Kit = () => {
    const kitItems = [
        "2 Magliette Personalizzate",
        "1 Pantaloncino",
        "1 Calzettone",
        "1 Sacca",
        "1 Borraccia",
    ];

    const images = [
        "/images/kit/kit-1.jpg",
        "/images/kit/kit-2.jpg",
        "/images/kit/kit-3.jpg",
    ];

    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <SEO
                title="Kit Ufficiale Academy19 | Equipaggiamento Tecnico d'Élite"
                description="Indossa l'eccellenza. Scopri il kit ufficiale Academy19: abbigliamento tecnico premium progettato per i talenti che puntano al professionismo."
                url="https://academy19.it/kit"
            />
            <Navbar />
            
            <div className="relative min-h-screen overflow-hidden">
                {/* Background with fixed attachment */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{ 
                        backgroundImage: `url('/gallery/immagine back kit e contatti.JPG')`, 
                        backgroundSize: 'cover', 
                        backgroundAttachment: 'fixed', 
                        backgroundPosition: 'center',
                        filter: 'brightness(0.7) contrast(1.1)'
                    }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60 z-0" />

                <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                {/* ... existing main content ... */}

                {/* Header Section */}
                <div className="text-center mb-16 translate-x-left will-animate">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6 font-display">
                        Il Tuo <span className="text-accent text-glow">Equipaggiamento</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-sans">
                        Indossa i colori dell'Academy19. Materiali tecnici di altissima qualità progettati per le massime prestazioni sul campo.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Gallery Section */}
                    <div className="space-y-6 staff-reveal will-animate" data-delay="0.1">
                        <div className="aspect-[4/5] overflow-hidden rounded-none bg-zinc-900 border border-accent/20 relative group">
                            <img
                                src={activeImage}
                                alt="Kit Ufficiale Academy19 - Maglia tecnica e zaino"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1518605368461-1ee715da8b35?auto=format&fit=crop&q=80";
                                }}
                            />
                            <div className="absolute inset-0 border border-accent/10 pointer-events-none"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`aspect-square overflow-hidden rounded-xl bg-zinc-900 border transition-all duration-300 ${activeImage === img
                                        ? 'border-accent ring-2 ring-accent/20'
                                        : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Foto prodotto ${idx + 1}`}
                                        className="w-full h-full object-cover object-center bg-zinc-800"
                                        onError={(e) => {
                                            // Fallback for missing images
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://images.unsplash.com/photo-1518605368461-1ee715da8b35?auto=format&fit=crop&q=80";
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-10 fade-up will-animate" data-delay="0.2">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20 font-sans">
                                <Star size={14} className="fill-accent" />
                                Premium Quality
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 font-display">Set Completo <br />Academy19</h2>
                            <p className="text-gray-400 text-lg leading-relaxed font-sans">
                                Il kit ufficiale contiene tutto il necessario per i tuoi allenamenti e le partite. Progettato con tessuti traspiranti di ultima generazione per garantire comfort assoluto e libertà di movimento.
                            </p>
                        </div>

                        <div className="bg-zinc-900/50 rounded-none p-8 border border-accent/20 backdrop-blur-sm">
                            <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-3 font-display">
                                <ShoppingBag className="text-accent" />
                                Cosa include il Kit
                            </h3>
                            <ul className="space-y-4 font-sans">
                                {kitItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 text-gray-300 group">
                                        <div className="w-6 h-6 rounded-none bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                            <ShieldCheck size={14} />
                                        </div>
                                        <span className="text-lg group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Purchase Plan Section */}
                <div className="mt-32 max-w-4xl mx-auto fade-up will-animate" data-delay="0.3">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight uppercase mb-4 font-display">Acquista il <span className="text-accent">Kit</span></h2>
                        <p className="text-gray-400 text-lg font-sans">
                            Scegli il piano completo per avere tutto l'equipaggiamento tecnico necessario per l'anno sportivo.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-none p-8 md:p-12 border border-accent/20 relative overflow-hidden group">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/5 text-white text-sm font-semibold uppercase tracking-wider mb-4 border border-white/10 font-sans">
                                        Miglior Offerta
                                    </div>
                                    <h3 className="text-3xl font-bold uppercase mb-2 font-display">Set Completo Academy19</h3>
                                    <p className="text-gray-400 font-sans">Tutto l'abbigliamento ufficiale della stagione.</p>
                                </div>

                                <ul className="space-y-4 font-sans">
                                    {["Tessuti tecnici traspiranti", "Personalizzazione inclusa", "Design esclusivo", "Disponibile per tutte le età"].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-none bg-accent/20 flex items-center justify-center">
                                                <Check size={12} className="text-accent" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full md:w-auto bg-black/50 p-6 md:p-8 rounded-none border border-accent/20 backdrop-blur-md flex flex-col items-center flex-shrink-0">
                                <div className="text-center mb-8">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-semibold font-sans">Prezzo su Richiesta</p>
                                    <div className="text-5xl font-bold tracking-tighter text-white font-display">Full Kit</div>
                                </div>
                                <Link to="/contatti?interesse=Richiesta Kit Ufficiale" className="w-full">
                                    <Button className="w-full h-14 text-base font-bold uppercase tracking-wider rounded-none bg-accent hover:bg-white hover:text-black transition-all duration-300 group/btn font-display btn-bounce">
                                        Richiedi info Kit
                                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed font-sans">
                                    Verrai contattato dal nostro staff per<br />definire taglie e dettagli di spedizione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </div>
            <Footer />
        </div>
    );
};

export default Kit;
