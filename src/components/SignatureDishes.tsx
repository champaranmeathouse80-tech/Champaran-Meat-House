import { motion } from 'motion/react';
import { Sparkles, Plus, Flame, ArrowRight, Check } from 'lucide-react';
import { FEATURED_SIGNATURE_ITEMS } from '../data/restaurantConfig';
import { MenuItem } from '../types';

interface SignatureDishesProps {
  onAddToCart: (item: MenuItem) => void;
  onExploreMenu: () => void;
  addedItemIds: Record<string, boolean>;
}

export function SignatureDishes({ onAddToCart, onExploreMenu, addedItemIds }: SignatureDishesProps) {
  // Curate 3 to 4 signature favorites
  const signatureList = FEATURED_SIGNATURE_ITEMS.slice(0, 4);

  return (
    <section id="signature" className="py-20 bg-[#FBF7F0] relative overflow-hidden border-b border-[#E6DACB]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#B84E1A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Heritage Culinary Craft</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            Signature Favourites
          </h2>

          <div className="font-hindi text-lg text-[#B84E1A] font-medium mt-1">
            खास पारंपरिक चंपारण के जायके
          </div>

          <p className="text-sm sm:text-base text-[#6B594C] mt-3 leading-relaxed">
            Slow-cooked in dough-sealed earthenware handis on smouldering charcoal. Experience the unhurried, rich depths of Bihar&apos;s most celebrated meat culinary tradition.
          </p>
        </div>

        {/* Curated 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureList.map((item, index) => (
            <motion.div
              key={item.id}
              id={`signature-card-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#B84E1A] transition-all duration-300 flex flex-col overflow-hidden shadow-md hover:shadow-[0_16px_36px_rgba(74,55,40,0.12)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4ECE1]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Tag */}
                {item.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#B84E1A]/95 text-white text-[11px] font-bold tracking-wide backdrop-blur-sm shadow-md flex items-center gap-1 border border-[#D97706]/40">
                    <Flame className="w-3 h-3 text-[#FFF9F2]" />
                    {item.tag}
                  </span>
                )}

                {/* Veg / Non-Veg Indicator */}
                <div className="absolute top-3 right-3 p-1 rounded-md bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DFCDB9] shadow-sm">
                  <span
                    className={`w-3 h-3 rounded-sm border ${
                      item.isVeg ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'
                    } flex items-center justify-center`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.isVeg ? 'bg-green-600' : 'bg-red-600'
                      }`}
                    />
                  </span>
                </div>

                {/* Portion overlay */}
                {item.portion && (
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-[#2D231C]/80 text-[#FFF9F2] text-[10px] font-medium backdrop-blur-sm border border-[#DFCDB9]/30">
                    {item.portion}
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#2D231C] group-hover:text-[#B84E1A] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  {item.hindiName && (
                    <div className="font-hindi text-xs text-[#B84E1A] font-medium mb-2">
                      {item.hindiName}
                    </div>
                  )}

                  <p className="text-xs text-[#6B594C] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Price & Add Button */}
                <div className="mt-5 pt-3.5 border-t border-[#E6DACB] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#8A7565] block font-medium">Price</span>
                    <span className="font-heading font-bold text-lg text-[#B84E1A]">
                      ₹{item.price}
                    </span>
                  </div>

                  <button
                    id={`signature-add-btn-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                      addedItemIds[item.id]
                        ? 'bg-[#15803D] text-white'
                        : 'bg-[#B84E1A] hover:bg-[#9C3D0E] text-white hover:scale-105 active:scale-95'
                    }`}
                    aria-label={`Add ${item.name} to cart`}
                  >
                    {addedItemIds[item.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button
            id="signature-view-full-menu-btn"
            onClick={onExploreMenu}
            className="px-8 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F4ECE1] text-[#2D231C] border border-[#DFCDB9] hover:border-[#B84E1A] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm inline-flex items-center gap-2 group"
          >
            <span>Explore Complete Menu & Prices</span>
            <ArrowRight className="w-4 h-4 text-[#B84E1A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
