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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 staff-reveal will-animate w-full lg:col-span-1" data-delay="0.1">
                        {images.map((img, idx) => (
                            <div key={idx} className="w-full bg-white border border-[#2a2a2a] relative group overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                <img
                                    src={img}
                                    alt={`Kit Ufficiale Academy19 - Dettaglio ${idx + 1}`}
                                    className="w-full h-auto object-cover object-center aspect-auto"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://images.unsplash.com/photo-1518605368461-1ee715da8b35?auto=format&fit=crop&q=80";
                                    }}
                                />
                                {/* Decorative elements on the first image to maintain style */}
                                {idx === 0 && (
                                    <>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#e6a817] opacity-60 pointer-events-none" />
                                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#4caf50] opacity-60 pointer-events-none" />
                                    </>
                                )}
                            </div>
                        ))}
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

                        <div className="bg-[#161616] border border-[#2a2a2a] p-8 md:p-10 relative group transition-all duration-300">
                            {/* Decorative Corner Borders */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#e6a817] opacity-40 group-hover:opacity-70 transition-opacity" />
                            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#4caf50] opacity-40 group-hover:opacity-70 transition-opacity" />

                            <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-3 font-display italic">
                                <ShoppingBag className="text-[#4caf50]" />
                                Cosa include il Kit
                                <span className="h-px flex-grow bg-[#4caf50]/20 ml-2"></span>
                            </h3>
                            <ul className="grid grid-cols-1 gap-4 font-sans">
                                {kitItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 text-zinc-400 group/list">
                                        <div className="w-8 h-8 bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0 text-[#4caf50] group-hover/list:bg-[#4caf50] group-hover/list:text-white transition-all duration-300">
                                            <ShieldCheck size={16} />
                                        </div>
                                        <span className="text-lg group-hover/list:text-white transition-colors uppercase font-display font-bold tracking-wide">{item}</span>
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
                    <div className="bg-[#161616] border border-[#2a2a2a] p-8 md:p-12 relative overflow-hidden group">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4caf50]/10 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                        
                        {/* Decorative Corner Borders */}
                        <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[#e6a817] opacity-40 group-hover:opacity-70 transition-opacity" />
                        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[#4caf50] opacity-40 group-hover:opacity-70 transition-opacity" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a3a1a] text-[#4caf50] text-[10px] font-black uppercase tracking-[2px] mb-4 border border-[#4caf50]/20 font-display italic">
                                        OFFERTA ESCLUSIVA
                                    </div>
                                    <h3 className="text-4xl font-bold uppercase mb-2 font-display italic text-white">Set Completo Academy19</h3>
                                    <p className="text-zinc-400 font-sans text-lg">Tutto l'abbigliamento ufficiale della stagione per puntare all'eccellenza.</p>
                                </div>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                                    {["Tessuti tecnici traspiranti", "Personalizzazione inclusa", "Design esclusivo", "Disponibile per tutte le età"].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300 group/feat">
                                            <div className="flex-shrink-0 w-6 h-6 bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center text-[#4caf50] group-hover/feat:bg-[#4caf50] group-hover/feat:text-white transition-all">
                                                <Check size={14} className="font-bold" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full md:w-auto bg-[#0d0d0d] p-8 md:p-10 border border-[#2a2a2a] flex flex-col items-center flex-shrink-0 relative">
                                <div className="text-center mb-10">
                                    <p className="text-[10px] text-[#4caf50] uppercase tracking-[3px] mb-2 font-black font-display italic">PREZZO SU RICHIESTA</p>
                                    <div className="text-5xl font-['Barlow_Condensed'] font-[900] tracking-tighter text-white uppercase italic">Full Kit</div>
                                </div>
                                <Link to="/contatti?interesse=Richiesta Kit Ufficiale" className="w-full">
                                    <Button className="w-full h-16 text-lg font-bold uppercase tracking-widest rounded-none bg-[#4caf50] hover:opacity-90 text-white transition-all duration-300 group/btn font-display italic btn-bounce">
                                        RICHIEDI INFO KIT
                                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="text-center text-[11px] text-zinc-500 mt-6 leading-relaxed font-medium uppercase tracking-wider">
                                    Verrai contattato dal nostro staff per<br />definire taglie e personalizzazioni
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
