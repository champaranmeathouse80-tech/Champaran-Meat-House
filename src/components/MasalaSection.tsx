import { motion } from 'motion/react';
import { ShoppingBag, ExternalLink, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { MASALA_PRODUCTS, EXTERNAL_LINKS } from '../data/restaurantConfig';

export function MasalaSection() {
  return (
    <section id="masala" className="py-20 bg-[#FAF5ED] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84E1A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Artisanal Spice Range</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            Bring Our Flavours Home
          </h2>

          <p className="text-base sm:text-lg text-[#B84E1A] font-medium mt-2 max-w-xl mx-auto">
            Take the flavours of Champaran Meat House home with our special masala range.
          </p>

          <p className="text-xs sm:text-sm text-[#6B594C] mt-2 max-w-lg mx-auto leading-relaxed">
            Crafted with traditional stone-roasting methods to recreate authentic Ahuna Handi richness in your home kitchen.
          </p>

          {/* Primary Marketplace Quick Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              id="masala-amazon-store-btn"
              href={EXTERNAL_LINKS.amazonMasalaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#F4ECE1] border border-[#DFCDB9] text-[#2D231C] font-semibold text-xs sm:text-sm shadow-sm hover:border-[#FF9900] hover:scale-105 transition-all inline-flex items-center gap-2 group"
            >
              <div className="w-5 h-5 rounded-md bg-[#FF9900] text-black font-black text-xs flex items-center justify-center">
                a
              </div>
              <span>Buy on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FF9900] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              id="masala-flipkart-store-btn"
              href={EXTERNAL_LINKS.flipkartMasalaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#F4ECE1] border border-[#DFCDB9] text-[#2D231C] font-semibold text-xs sm:text-sm shadow-sm hover:border-[#2874F0] hover:scale-105 transition-all inline-flex items-center gap-2 group"
            >
              <div className="w-5 h-5 rounded-md bg-[#2874F0] text-white font-bold text-xs flex items-center justify-center">
                F
              </div>
              <span>Buy on Flipkart</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2874F0] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MASALA_PRODUCTS.map((prod, index) => (
            <motion.div
              key={prod.id}
              id={`masala-card-${prod.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#B84E1A] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-[0_16px_36px_rgba(74,55,40,0.12)] group"
            >
              {/* Product Artwork Header */}
              <div className="relative aspect-[4/3] bg-[#F4ECE1] overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Pack size pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#FAF5ED]/90 border border-[#DFCDB9] text-[#2D231C] text-xs font-semibold backdrop-blur-sm shadow-sm">
                  {prod.packSize}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#B84E1A] text-white shadow-md">
                  <Flame className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2D231C] group-hover:text-[#B84E1A] transition-colors">
                    {prod.name}
                  </h3>
                  
                  <div className="text-xs text-[#B84E1A] font-medium mt-0.5 mb-2">
                    {prod.tagline}
                  </div>

                  <p className="text-xs text-[#6B594C] leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {prod.highlightFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#4A3728]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B84E1A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase Store Links */}
                <div className="pt-4 border-t border-[#E6DACB] grid grid-cols-2 gap-2">
                  <a
                    id={`buy-amazon-${prod.id}`}
                    href={prod.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#F4ECE1] hover:bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#FF9900] text-xs font-semibold text-[#2D231C] text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Amazon</span>
                    <ExternalLink className="w-3 h-3 text-[#FF9900]" />
                  </a>

                  <a
                    id={`buy-flipkart-${prod.id}`}
                    href={prod.flipkartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#F4ECE1] hover:bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#2874F0] text-xs font-semibold text-[#2D231C] text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Flipkart</span>
                    <ExternalLink className="w-3 h-3 text-[#2874F0]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
