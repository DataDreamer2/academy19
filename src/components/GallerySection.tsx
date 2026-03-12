import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
const imageFiles = [
  "img_2936.jpg",
  "img_2941.jpg",
  "img_3036.jpg",
  "img_3178.jpg",
  "img_3341.jpg",
  "img_3510.jpg",
  "img_3573.jpg",
  "img_3686.jpg",
  "img_3702.jpg",
  "img_3712.jpg",
  "img_3893.jpg",
  "img_4551.jpg"
];

const galleryItems = imageFiles.map((filename, index) => ({
  id: index + 1,
  src: `/gallery/${filename}`,
  alt: `Allenamento Academy19 - Scatto di campo ${index + 1}`,
  category: 'Academy'
}));

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="galleria" className="py-24 bg-black border-b border-accent/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20 border-b border-accent/20 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-accent">
              Momenti <br /> Unici.
            </h2>
          </div>
          <p className="text-xl text-zinc-400 text-right md:text-left font-mono">
            L'intensità e la passione di ogni allenamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {galleryItems.map((item, index) => (
            <div
              key={item.id + index} // Key fix for demo duplicate
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square bg-black overflow-hidden cursor-pointer border border-accent/10 hover:border-accent transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={600}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 filter grayscale contrast-125 mix-blend-luminosity group-hover:mix-blend-normal will-animate"
              />

              {/* Green tint overlay */}
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="self-end">
                  <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center border border-black group-hover:bg-accent transition-colors">
                    <ZoomIn className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2 font-mono bg-black/50 inline-block px-2 py-1 backdrop-blur-sm border border-white/20">{item.category}</p>
                  <h3 className="text-white text-2xl font-bold uppercase bg-black/50 inline-block px-3 py-1 backdrop-blur-sm mt-2">{item.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-black/95 border border-accent backdrop-blur-xl">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white transition-all"
              >
                <X className="w-8 h-8" />
              </button>

              {selectedImage && (
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[85vh] w-auto object-contain rounded-none shadow-2xl filter grayscale contrast-125"
                  />
                  {/* Subtle green tint overlay in modal */}
                  <div className="absolute inset-0 bg-accent/10 mix-blend-screen pointer-events-none"></div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
