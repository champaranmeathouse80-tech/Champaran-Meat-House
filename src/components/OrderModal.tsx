import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, UtensilsCrossed, ShieldCheck, ShoppingBag } from 'lucide-react';
import { EXTERNAL_LINKS, RESTAURANT_INFO } from '../data/restaurantConfig';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="order-modal-backdrop" 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="order-modal-content"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-[#FAF5ED] border border-[#DFCDB9] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#2D231C] overflow-hidden"
        >
          {/* Subtle warm glow background accent */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#B84E1A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            id="order-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-[#F4ECE1] text-[#6B594C] hover:text-[#2D231C] border border-[#DFCDB9] hover:bg-[#FFFFFF] transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F4ECE1] border border-[#DFCDB9] text-[#B84E1A] mb-3 shadow-sm">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#2D231C] tracking-wide">
              Order Your Food
            </h3>
            <p className="text-sm text-[#6B594C] mt-1.5 max-w-sm mx-auto">
              Enjoy fresh, slow-cooked Champaran Handi delicacies delivered straight to your doorstep in Patna.
            </p>
          </div>

          {/* External Platform Options */}
          <div className="space-y-4">
            {/* Zomato Button */}
            <a
              id="order-on-zomato-btn"
              href={EXTERNAL_LINKS.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#E23744] hover:bg-[#FFF5F5] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E23744] flex items-center justify-center text-white font-black text-xl italic tracking-tighter shadow-md">
                  z
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg text-[#2D231C] group-hover:text-[#E23744] transition-colors">
                      Order on Zomato
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#E23744]/10 text-[#E23744] font-medium border border-[#E23744]/30">
                      Popular
                    </span>
                  </div>
                  <p className="text-xs text-[#6B594C] mt-0.5">
                    Fast delivery from Fraser Road / Lodipur branch
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-[#E23744] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Swiggy Button */}
            <a
              id="order-on-swiggy-btn"
              href={EXTERNAL_LINKS.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#FC8019] hover:bg-[#FFF9F5] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FC8019] flex items-center justify-center text-white font-bold text-xl shadow-md">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg text-[#2D231C] group-hover:text-[#FC8019] transition-colors">
                      Order on Swiggy
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#FC8019]/10 text-[#FC8019] font-medium border border-[#FC8019]/30">
                      Live Menu
                    </span>
                  </div>
                  <p className="text-xs text-[#6B594C] mt-0.5">
                    Live tracking and contactless delivery
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-[#FC8019] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Restaurant Note */}
          <div className="mt-6 pt-4 border-t border-[#DFCDB9] flex items-start gap-2.5 text-xs text-[#8A7565]">
            <ShieldCheck className="w-4 h-4 text-[#B84E1A] shrink-0 mt-0.5" />
            <p>
              Ordering is fulfilled securely via our verified online delivery partners. For bulk or party takeaway orders, you may also call us directly at <span className="text-[#2D231C] font-semibold">{RESTAURANT_INFO.phone}</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
