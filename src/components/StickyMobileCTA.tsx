import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        const element = document.querySelector('#contatti');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCall = () => {
        window.location.href = 'tel:3478894076';
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/393478894076?text=Ciao! Vorrei informazioni su Academy19', '_blank');
    };

    return (
        <div
            className={`md:hidden fixed bottom-6 left-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
        >
            <div className="bg-black/95 backdrop-blur-xl border border-accent/20 rounded-none p-2">
                <div className="grid grid-cols-3 gap-2">
                    <Button
                        onClick={handleCall}
                        variant="ghost"
                        className="flex flex-col gap-0.5 h-auto py-2 text-accent/70 hover:text-accent hover:bg-accent/10 rounded-none border border-transparent hover:border-accent/30 transition-all"
                    >
                        <Phone className="w-5 h-5 mb-1" />
                        <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Chiama</span>
                    </Button>

                    <Button
                        onClick={handleWhatsApp}
                        variant="ghost"
                        className="flex flex-col gap-0.5 h-auto py-2 text-accent/70 hover:text-accent hover:bg-accent/10 rounded-none border border-transparent hover:border-accent/30 transition-all"
                    >
                        <MessageCircle className="w-5 h-5 mb-1" />
                        <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Chat</span>
                    </Button>

                    <Button
                        onClick={scrollToContact}
                        className="flex flex-col gap-0.5 h-auto py-2 bg-accent hover:bg-white text-black rounded-none transition-all duration-300 border border-accent"
                    >
                        <Calendar className="w-5 h-5 mb-1" />
                        <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Prenota</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StickyMobileCTA;
