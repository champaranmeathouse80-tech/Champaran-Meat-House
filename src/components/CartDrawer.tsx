import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingCart, ExternalLink, Utensils, Sparkles, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { EXTERNAL_LINKS } from '../data/restaurantConfig';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="cart-drawer-backdrop"
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end"
        onClick={onClose}
      >
        <motion.div
          id="cart-drawer-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-[#FAF5ED] border-l border-[#DFCDB9] h-full flex flex-col shadow-2xl text-[#2D231C]"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#DFCDB9] flex items-center justify-between bg-[#F4ECE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] border border-[#DFCDB9] flex items-center justify-center text-[#B84E1A] shadow-sm">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#2D231C]">
                  Your Food Tray
                </h3>
                <p className="text-xs text-[#7C695A]">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  id="cart-clear-btn"
                  onClick={onClearCart}
                  title="Clear Tray"
                  className="text-xs text-[#B84E1A] hover:text-[#DC2626] px-2.5 py-1 rounded bg-[#FAF5ED] border border-[#DFCDB9] transition-colors font-medium shadow-sm"
                >
                  Clear
                </button>
              )}
              <button
                id="cart-close-btn"
                onClick={onClose}
                aria-label="Close cart"
                className="p-2 rounded-lg bg-[#FAF5ED] text-[#6B594C] hover:text-[#2D231C] border border-[#DFCDB9] hover:bg-[#FFFFFF] transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#8A7565]">
                <div className="w-16 h-16 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#B84E1A] mb-4 shadow-sm">
                  <Utensils className="w-8 h-8 opacity-80" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-[#2D231C] mb-1">
                  Your Tray is Empty
                </h4>
                <p className="text-xs text-[#6B594C] max-w-xs mb-5 leading-relaxed">
                  Explore our authentic Ahuna Handi Meat, Litti Combos, and Champaran specialties to build your meal.
                </p>
                <button
                  id="cart-browse-menu-btn"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#B84E1A] hover:bg-[#9C3D0E] text-white text-xs font-semibold tracking-wide transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  id={`cart-item-${cartItem.item.id}`}
                  className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] flex gap-3 items-center group transition-colors hover:border-[#B84E1A] shadow-sm"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.alt}
                    className="w-16 h-16 rounded-lg object-cover border border-[#DFCDB9] shrink-0"
                    loading="lazy"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-sm border ${cartItem.item.isVeg ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'} flex items-center justify-center`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cartItem.item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                      </span>
                      <h5 className="text-sm font-semibold text-[#2D231C] truncate">
                        {cartItem.item.name}
                      </h5>
                    </div>
                    <p className="text-xs text-[#B84E1A] font-medium mt-0.5">
                      ₹{cartItem.item.price} each
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity buttons */}
                      <div className="flex items-center bg-[#F4ECE1] rounded-lg border border-[#DFCDB9] p-0.5">
                        <button
                          id={`cart-minus-${cartItem.item.id}`}
                          onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                          className="p-1 rounded text-[#6B594C] hover:text-[#2D231C] hover:bg-[#FFFFFF] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#2D231C]">
                          {cartItem.quantity}
                        </span>
                        <button
                          id={`cart-plus-${cartItem.item.id}`}
                          onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                          className="p-1 rounded text-[#6B594C] hover:text-[#2D231C] hover:bg-[#FFFFFF] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for this line */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#2D231C]">
                          ₹{cartItem.item.price * cartItem.quantity}
                        </span>
                        <button
                          id={`cart-remove-${cartItem.item.id}`}
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="text-[#8A7565] hover:text-[#DC2626] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Notice & Direct External Ordering */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#DFCDB9] bg-[#F4ECE1] space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#7C695A]">
                  <span>Item Subtotal</span>
                  <span className="font-semibold text-[#2D231C]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-[#7C695A]">
                  <span>Ordering Hand-off</span>
                  <span className="text-[#059669] font-medium">Zomato / Swiggy</span>
                </div>
                <div className="pt-2 border-t border-[#DFCDB9] flex justify-between items-baseline">
                  <span className="font-heading font-bold text-base text-[#2D231C]">Estimated Total</span>
                  <span className="font-heading font-bold text-xl text-[#B84E1A]">₹{subtotal}</span>
                </div>
              </div>

              {/* Hand-off guidance */}
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] text-[11px] text-[#6B594C] leading-relaxed shadow-sm">
                <p className="font-semibold text-[#B84E1A] mb-0.5 flex items-center gap-1.5">
                  <span>ℹ️</span> Fast Online Delivery via Delivery Partners
                </p>
                Choose your preferred partner below to place your final live order.
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="cart-order-zomato-btn"
                  href={EXTERNAL_LINKS.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#E23744] hover:bg-[#C92A37] text-white font-semibold text-xs shadow-sm transition-all group"
                >
                  <span>Order on Zomato</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  id="cart-order-swiggy-btn"
                  href={EXTERNAL_LINKS.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#FC8019] hover:bg-[#E06F12] text-white font-semibold text-xs shadow-sm transition-all group"
                >
                  <span>Order on Swiggy</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
