import { Calendar, MapPin } from 'lucide-react';

const NextEventsSection = () => {
    return (
        <div className="w-full bg-accent text-black overflow-hidden border-y border-black font-mono relative z-20">
            <div className="flex animate-marquee whitespace-nowrap py-3 items-center">
                {/* We repeat the content a few times for the infinite scroll effect */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center mx-8 uppercase font-bold tracking-wider text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                            Città: Forlì
                        </span>
                        <span className="mx-4 md:mx-6 border-l border-black/30 h-4"></span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                            Prossimo allenamento con noi il 15 Aprile 2026
                        </span>
                        <span className="mx-8 md:mx-12 text-black/50">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextEventsSection;
