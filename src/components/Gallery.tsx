import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1000",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000",
  "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=1000",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1000",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000",
];

export function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Travel <span className="text-blue-400">Gallery</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Glimpses of the beautiful destinations we offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src={selectedImage}
            alt="Selected gallery image"
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
