import { Calendar, MapPin } from 'lucide-react';

const NextEventsSection = () => {
    const events = [
        { location: "Forlì", text: "Prossimo Camp Estivo: 15 - 19 Giugno" },
        { location: "Monte S.M. Tiberina (PG)", text: "Camp Estivo: 13 - 17 Luglio" }
    ];

    return (
        <div className="w-full bg-accent text-black overflow-hidden border-y border-black font-mono relative z-20">
            <div className="flex animate-marquee whitespace-nowrap py-3 items-center">
                {/* We repeat the content to ensure an infinite scroll effect */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex">
                        {events.map((event, index) => (
                            <div key={index} className="flex items-center mx-8 uppercase font-bold tracking-wider text-sm md:text-base">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-black/70" />
                                    {event.location}
                                </span>
                                <span className="mx-4 md:mx-6 border-l border-black/30 h-4"></span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-black/70" />
                                    {event.text}
                                </span>
                                <span className="ml-16 md:ml-24 text-black/30 text-xl font-light">/</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextEventsSection;
