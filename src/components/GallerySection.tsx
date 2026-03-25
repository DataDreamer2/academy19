import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import sfondoChiSiamo from '/images/sfondo-chi-siamo.jpeg';

const imageFiles = [
  "02de3a3c-71cd-422f-b2ac-b61c3d39a760.JPG",
  "2ae1cccf-3a07-4025-9d64-983cc5dfd975.JPG",
  "33adfee4-e077-4d6d-88a2-0b9c1e45c911.JPG",
  "46a02128-0f37-4c9a-ab30-cccca3b2bab0.JPG",
  "48f6787b-59f2-4f25-a236-738b34a3ff4d.JPG",
  "51915107-3322-45bf-924f-ea764da13779.JPG",
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
  "foto-laurea-liborio.jpg",
  "img_3573.png"
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
    <section id="galleria" className="py-24 text-accent border-b border-accent/20 relative" style={{ backgroundImage: `url(${sfondoChiSiamo})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/92"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 border-b border-accent/20 pb-8 max-w-4xl">
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold uppercase tracking-tighter mb-6 text-accent leading-[1] md:leading-tight">
            Momenti <br /> Unici.
          </h2>
          <p className="text-xl text-zinc-400 font-mono">
            L'intensità e la passione di ogni allenamento.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2">
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
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 will-animate"
                />

                {/* Subtle green tint overlay */}
                <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

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
                      className="max-h-[85vh] w-auto object-contain rounded-none shadow-2xl"
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
