import { motion } from 'motion/react';
import { ChevronDown, UtensilsCrossed, ExternalLink, Sparkles, Flame } from 'lucide-react';
import { HERO_CONFIG, RESTAURANT_INFO } from '../data/restaurantConfig';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenOrderModal: () => void;
}

export function Hero({ onExploreMenu, onOpenOrderModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-[#FAF5ED]"
    >
      {/* Hand-painted background illustration with subtle atmospheric overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONFIG.heroImage}
          alt="Hand-painted traditional Champaran earthen kitchen with lanterns and slow-cooked Ahuna pots"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.92] contrast-[1.03]"
          fetchPriority="high"
        />
        {/* Layered cinematic gradient vignettes for optimal typography readability and artistic parchment feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5ED] via-[#FAF5ED]/75 to-[#FAF5ED]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#FAF5ED_90%)]" />
      </div>

      {/* Decorative floating warm embers and steam elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Warm Lantern Glows */}
        <div className="absolute top-12 left-10 w-48 h-48 rounded-full bg-[#D97706]/15 blur-3xl animate-lantern" />
        <div className="absolute top-20 right-14 w-56 h-56 rounded-full bg-[#B84E1A]/15 blur-3xl animate-lantern" />
        <div className="absolute bottom-24 left-1/3 w-64 h-64 bg-[#C05621]/10 rounded-full blur-3xl" />

        {/* Subtle rising steam keyframe particles */}
        <div className="absolute bottom-16 left-1/4 w-32 h-32 rounded-full bg-[#B84E1A]/5 blur-2xl animate-steam" />
        <div className="absolute bottom-24 right-1/4 w-40 h-40 rounded-full bg-[#B84E1A]/5 blur-2xl animate-steam [animation-delay:2s]" />
      </div>

      {/* Hero Content Centerpiece */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-10">
        {/* Heritage Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/90 border border-[#DFCDB9] text-[#7C695A] text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_2px_12px_rgba(74,55,40,0.08)] mb-6"
        >
          <Flame className="w-4 h-4 text-[#B84E1A] animate-pulse" />
          <span className="font-semibold text-[#3D2E24]">{HERO_CONFIG.tagText}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B84E1A]" />
          <span className="text-[#B84E1A] font-semibold">Estd. Patna</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          id="hero-main-heading"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2D231C] tracking-wider uppercase leading-tight drop-shadow-sm"
        >
          {RESTAURANT_INFO.name}
        </motion.h1>

        {/* Hindi Callout Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="font-hindi text-lg sm:text-2xl text-[#B84E1A] font-semibold tracking-wide mt-2"
        >
          ओल्ड चंपारण मीट हाउस • असली अहुना स्वाद
        </motion.div>

        {/* Subheading */}
        <motion.p
          id="hero-subheading"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-base sm:text-xl md:text-2xl text-[#6B594C] font-serif italic tracking-wide mt-3 sm:mt-4 max-w-2xl mx-auto"
        >
          {RESTAURANT_INFO.tagline}
        </motion.p>

        {/* Atmospheric Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base text-[#7C695A] max-w-xl mx-auto mt-4 leading-relaxed"
        >
          Slow-cooked in dough-sealed earthen <span className="text-[#B84E1A] font-bold">Ahuna</span> handis over gentle charcoal embers with whole garlic pods, stone-ground mustard oil, and time-honored secrets.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          {/* Primary Button: Explore Menu */}
          <button
            id="hero-explore-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B84E1A] via-[#C05621] to-[#D97706] text-white font-semibold text-sm tracking-wide shadow-[0_8px_25px_rgba(184,78,26,0.35)] hover:shadow-[0_12px_32px_rgba(184,78,26,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
          >
            <UtensilsCrossed className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>{HERO_CONFIG.primaryBtnText}</span>
          </button>

          {/* Secondary Button: Order Now */}
          <button
            id="hero-order-now-btn"
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#F4ECE1] border border-[#DFCDB9] text-[#3D2E24] hover:text-[#B84E1A] font-semibold text-sm tracking-wide backdrop-blur-md shadow-[0_4px_16px_rgba(74,55,40,0.08)] hover:border-[#B84E1A] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
          >
            <span>{HERO_CONFIG.secondaryBtnText}</span>
            <ExternalLink className="w-4 h-4 text-[#B84E1A] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Verified Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 pt-6 border-t border-[#E6DACB] flex flex-wrap items-center justify-center gap-6 text-xs text-[#7C695A]"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[#D97706]">★</span>
            <span className="font-bold text-[#2D231C]">{RESTAURANT_INFO.rating}</span>
            <span>({RESTAURANT_INFO.reviewCount} Reviews)</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#D8C7B0]" />
          <div className="flex items-center gap-1.5">
            <span className="text-[#15803D]">●</span>
            <span>Open Today: {RESTAURANT_INFO.openingHours}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#D8C7B0]" />
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Pure Mustard Oil & Clay Pots</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.button
        id="hero-scroll-indicator"
        onClick={onExploreMenu}
        aria-label="Scroll to menu section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full bg-[#FFFFFF] border border-[#DFCDB9] text-[#B84E1A] hover:bg-[#F4ECE1] shadow-md transition-colors"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
