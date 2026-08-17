import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantConfig';
import { GalleryItem } from '../types';

export function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    selectedImageIndex !== null ? GALLERY_ITEMS[selectedImageIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
  }, [selectedImageIndex]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1
    );
  }, [selectedImageIndex]);

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 bg-[#FBF7F0] relative border-b border-[#E6DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Curated Moments</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            A Glimpse of Our World
          </h2>

          <div className="font-hindi text-lg text-[#B84E1A] font-medium mt-1">
            चंपारण की एक झलक
          </div>

          <p className="text-sm sm:text-base text-[#6B594C] mt-2 italic">
            &ldquo;A few moments from Champaran Meat House.&rdquo;
          </p>
        </div>

        {/* Curated 6-Item Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              id={`gallery-item-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedImageIndex(index)}
              className="relative rounded-2xl bg-[#FFFFFF] border border-[#DFCDB9] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#B84E1A] flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4ECE1]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D231C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-[#FFF9F2] flex items-center justify-between w-full">
                    <span className="text-xs font-semibold">{item.category}</span>
                    <span className="p-1.5 rounded-full bg-[#FFFFFF]/20 backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption beneath */}
              <div className="p-4 bg-[#FFFFFF]">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#2D231C] group-hover:text-[#B84E1A] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B594C] mt-1 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeItem && (
          <motion.div
            id="gallery-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-[#1A120D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              id="gallery-modal-close-btn"
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-[#2D231C]/80 text-[#FFF9F2] hover:bg-[#B84E1A] transition-colors shadow-lg z-50"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              id="gallery-modal-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#2D231C]/80 text-[#FFF9F2] hover:bg-[#B84E1A] transition-colors shadow-lg z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              id="gallery-modal-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#2D231C]/80 text-[#FFF9F2] hover:bg-[#B84E1A] transition-colors shadow-lg z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-[#FAF5ED] rounded-2xl overflow-hidden shadow-2xl border border-[#DFCDB9] flex flex-col"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#2D231C] overflow-hidden flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-5 sm:p-6 bg-[#FFFFFF] border-t border-[#DFCDB9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#B84E1A] uppercase tracking-wider">
                    {activeItem.category} • {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-[#2D231C] mt-0.5">
                    {activeItem.title}
                  </h4>
                  <p className="text-xs text-[#6B594C] mt-1">
                    {activeItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
