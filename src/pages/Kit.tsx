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
                title="Kit Ufficiale Academy19 | Equipaggiamento Tecnico"
                description="Indossa i colori dell'Academy19. Scopri il kit ufficiale: abbigliamento tecnico premium progettato per le massime prestazioni sul campo."
                url="https://academy19.it/kit"
            />
            <Navbar />
            
            <div className="relative min-h-screen">
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
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
                        Il Tuo <span className="text-accent">Equipaggiamento</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                        Indossa i colori dell'Academy19. Materiali tecnici di altissima qualità progettati per le massime prestazioni sul campo.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Gallery Section */}
                    <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 relative group">
                            <img
                                src={activeImage}
                                alt="Kit Ufficiale Academy19 - Maglia tecnica e zaino"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1518605368461-1ee715da8b35?auto=format&fit=crop&q=80";
                                }}
                            />
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
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
                    <div className="space-y-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20">
                                <Star size={14} className="fill-accent" />
                                Premium Quality
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Set Completo <br />Academy19</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Il kit ufficiale contiene tutto il necessario per i tuoi allenamenti e le partite. Progettato con tessuti traspiranti di ultima generazione per garantire comfort assoluto e libertà di movimento.
                            </p>
                        </div>

                        <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
                            <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
                                <ShoppingBag className="text-accent" />
                                Cosa include il Kit
                            </h3>
                            <ul className="space-y-4">
                                {kitItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 text-gray-300 group">
                                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
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
                <div className="mt-32 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight uppercase mb-4">Acquista il <span className="text-accent">Kit</span></h2>
                        <p className="text-gray-400 text-lg">
                            Scegli il piano completo per avere tutto l'equipaggiamento tecnico necessario per l'anno sportivo.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-sm font-semibold uppercase tracking-wider mb-4 border border-white/10">
                                        Miglior Offerta
                                    </div>
                                    <h3 className="text-3xl font-bold uppercase mb-2">Set Completo Academy19</h3>
                                    <p className="text-gray-400">Tutto l'abbigliamento ufficiale della stagione.</p>
                                </div>

                                <ul className="space-y-4">
                                    {["Tessuti tecnici traspiranti", "Personalizzazione inclusa", "Design esclusivo", "Disponibile per tutte le età"].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                                <Check size={12} className="text-accent" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full md:w-auto bg-black/50 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md flex flex-col items-center flex-shrink-0">
                                <div className="text-center mb-8">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-semibold font-mono">Prezzo su Richiesta</p>
                                    <div className="text-5xl font-bold tracking-tighter text-white">Full Kit</div>
                                </div>
                                <Link to="/contatti?interesse=Richiesta Kit Ufficiale" className="w-full">
                                    <Button className="w-full h-14 text-base font-bold uppercase tracking-wider rounded-xl bg-accent hover:bg-white hover:text-black transition-all duration-300 group/btn">
                                        Richiedi info Kit
                                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
                                    Verrai contattato dal nostro staff per<br />definire taglie e dettagli di spedizione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            </div>
        </div>
    );
};

export default Kit;
