import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X, PhoneCall, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantConfig';
import { AmbientSound } from './AmbientSound';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export function Navbar({ cartCount, onOpenCart, onOpenOrderModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Our Story', href: '#story' },
    { name: 'Masala', href: '#masala' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#FAF5ED]/95 backdrop-blur-md border-b border-[#E6DACB] shadow-[0_4px_20px_rgba(74,55,40,0.08)]'
            : 'py-5 bg-gradient-to-b from-[#FAF5ED]/95 via-[#FAF5ED]/70 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Seal / Logo */}
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <BrandLogo size="md" className="group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <div className="text-left">
              <span className="block font-heading font-bold text-sm sm:text-base md:text-lg text-[#2D231C] tracking-wide group-hover:text-[#B84E1A] transition-colors leading-tight">
                {RESTAURANT_INFO.name}
              </span>
              <span className="block text-[10px] text-[#B84E1A] font-semibold tracking-widest uppercase font-sans">
                Patna • Ahuna Handi Meat
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#FFFFFF]/80 border border-[#E6DACB] rounded-full px-4 py-1.5 backdrop-blur-sm shadow-[0_2px_8px_rgba(74,55,40,0.05)]">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-1 rounded-full text-xs font-medium text-[#6B594C] hover:text-[#B84E1A] hover:bg-[#F4ECE1] transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Sound Toggle */}
            <AmbientSound />

            {/* Cart Trigger Button */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              aria-label={`Open food cart with ${cartCount} items`}
              className="relative p-2.5 rounded-full bg-[#FFFFFF] border border-[#DFCDB9] text-[#3D2E24] hover:bg-[#F4ECE1] hover:border-[#B84E1A] transition-all duration-200 shadow-sm group"
            >
              <ShoppingBag className="w-4 h-4 text-[#B84E1A] group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  id="nav-cart-badge-count"
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#B84E1A] to-[#D97706] text-white text-[10px] font-bold flex items-center justify-center shadow-md border border-[#FAF5ED]"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Order Now CTA (Opens Order Platform Picker) */}
            <button
              id="nav-order-now-btn"
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#B84E1A] via-[#C05621] to-[#D97706] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_rgba(184,78,26,0.3)] hover:shadow-[0_6px_22px_rgba(184,78,26,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Order Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="nav-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] text-[#3D2E24] hover:text-[#B84E1A] transition-colors shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-[#FAF5ED]/98 border-b border-[#DFCDB9] backdrop-blur-xl p-6 shadow-[0_12px_36px_rgba(74,55,40,0.15)] lg:hidden"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] text-sm font-medium text-[#2D231C] hover:bg-[#F4ECE1] hover:text-[#B84E1A] border border-[#E6DACB] transition-colors text-left shadow-sm"
                >
                  <span>{link.name}</span>
                  <span className="text-[#8A7565] text-xs">→</span>
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-[#DFCDB9] space-y-3">
                <button
                  id="mobile-drawer-order-now-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B84E1A] to-[#D97706] text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <span>Order on Zomato / Swiggy</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <a
                  id="mobile-drawer-call-btn"
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full py-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] text-[#4A3728] font-medium text-xs flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#B84E1A]" />
                  <span>Direct Call: {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
