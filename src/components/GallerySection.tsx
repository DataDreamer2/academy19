import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import sfondoChiSiamo from '/images/sfondo-chi-siamo.jpeg';

const imageFiles = [
  "2ae1cccf-3a07-4025-9d64-983cc5dfd975.JPG",
  "33adfee4-e077-4d6d-88a2-0b9c1e45c911.JPG",
  "46a02128-0f37-4c9a-ab30-cccca3b2bab0.JPG",
  "48f6787b-59f2-4f25-a236-738b34a3ff4d.JPG",
  "57a85bed-9b4d-42c8-a73c-e35450825db9.JPG",
  "5d79e793-a3ef-4963-9e2b-b2bf7cee3bb6.jpg",
  "67cbc476-96f7-42d8-9f1e-4326e15e5a3e.JPG",
  "6b01bc05-ebd8-4860-b66c-1677f016fc14.JPG",
  "7a71dbf4-f587-488d-9bcf-e917c9cb8e86.JPG",
  "8f38b84c-fa86-48b9-82e6-8c1576a312f9.JPG",
  "93180fd1-20d6-427a-8364-12e4f421d59c.JPG",
  "aebb33bc-8aa1-4a56-9a68-cfb479821c8f.JPG",
  "b3045c3a-805b-44a1-846d-1dc5e39ba914.JPG",
  "c11e5402-80a0-45bc-bb34-af28f5ccd59b.JPG",
  "ca6415ef-3463-49ea-834c-02f393516173.JPG",
  "cb3ce967-32cb-41a9-840c-0320745c5382.JPG",
  "cca9a61b-f253-43aa-8a05-4375484d3695.JPG",
  "d3a0e07a-982f-460e-9d4f-4e7c22fe39d1.JPG",
  "immagine back kit e contatti.JPG",
  "e7057143-3d46-4733-8d47-f8efa4b7a268.JPG",
  "e7ed20e2-3daf-44e3-8144-340bafaca5d8.JPG",
  "f2126a70-83a1-47af-bbdc-3dbff07099d3.JPG",
  "f2cf4204-6be1-42e0-88c4-33b9e0c4fa85.JPG",
  "f5dd4d1f-6432-4543-99de-1ff0f011e88e.JPG",
  "fd5775ad-0cfc-4d20-8e6b-2f45cac285f9.JPG",
  "ff43a292-33b8-4a58-8a12-28ad34bb3a58.JPG",
  "img_2936.jpg",
  "img_2941.jpg",
  "img_3036.jpg",
  "img_3178.jpg",
  "img_3341.jpg",
  "img_3510.jpg",
  "img_3686.jpg",
  "img_3702.jpg",
  "img_3712.jpg",
  "img_3893.jpg",
  "img_4551.jpg",
  "foto-laurea-liborio.jpg"
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
    <section id="galleria" className="py-24 text-accent border-b border-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center bg-scroll md:bg-fixed blur-sm opacity-50 scale-105" 
          style={{ 
            backgroundImage: `url(${sfondoChiSiamo})`,
            filter: 'brightness(0.7) contrast(1.1)' 
          }} 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 border-b border-accent/20 pb-8 max-w-4xl">
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold uppercase tracking-tighter mb-6 text-accent leading-[1] md:leading-tight font-display translate-x-left will-animate">
            Momenti <br /> Unici.
          </h2>
          <p className="text-xl text-zinc-400 font-sans fade-up will-animate" data-delay="0.2">
            L'intensità e la passione di ogni allenamento.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2 will-animate" data-stagger="0.1">
          {galleryItems.map((item, index) => (
              <div
                key={item.id + index} // Key fix for demo duplicate
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square bg-black overflow-hidden cursor-pointer rounded-[12px] border border-accent/10 transition-all duration-300 staff-reveal"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-100 transition-all duration-700 will-animate"
                />
              </div>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-6xl p-0 bg-black/95 border border-accent rounded-[16px] backdrop-blur-xl">
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
                      className="max-h-[85vh] w-auto object-contain rounded-[16px] shadow-2xl"
                    />
                    {/* Subtle green tint overlay in modal */}
                    <div className="absolute inset-0 bg-accent/5 mix-blend-screen pointer-events-none"></div>
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
