import { Phone, MapPin, Clock, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, EXTERNAL_LINKS } from '../data/restaurantConfig';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export function Footer({ onOpenOrderModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#2D231C] border-t border-[#4A3728] text-[#D6C7B2] pt-16 pb-12 relative overflow-hidden">
      {/* Warm evening amber light glow at the base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#B84E1A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#4A3728]">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="lg" className="drop-shadow-md" />
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#FFF7ED] tracking-wider uppercase">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-xs text-[#E58A47] font-medium tracking-wider">
                  {RESTAURANT_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#C9B4A4] leading-relaxed max-w-sm">
              World-famous Champaran Ahuna Handi Meat, chicken curries, and roasted sattu littis slow-simmered in sealed earthenware pots over charcoal. Experience true Bihari culinary heritage in Patna.
            </p>

            {/* Quick Order Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                id="footer-zomato-link"
                href={EXTERNAL_LINKS.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#E23744]/20 hover:bg-[#E23744]/30 border border-[#E23744]/40 text-[#FCA5A5] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Zomato Delivery</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                id="footer-swiggy-link"
                href={EXTERNAL_LINKS.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#FC8019]/20 hover:bg-[#FC8019]/30 border border-[#FC8019]/40 text-[#FED7AA] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Swiggy Delivery</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FED7AA]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleScrollTo('#hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#menu')}
                  className="hover:text-white transition-colors"
                >
                  Restaurant Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#signature')}
                  className="hover:text-white transition-colors"
                >
                  Signature Handi Meat
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#story')}
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#masala')}
                  className="hover:text-white transition-colors"
                >
                  Masala Range
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#gallery')}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#contact')}
                  className="hover:text-white transition-colors"
                >
                  Visit & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Masala Marketplace */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FED7AA]">
              Masala Marketplace
            </h4>
            <p className="text-xs text-[#C9B4A4]">
              Order genuine BMH Magic Masala online:
            </p>
            <div className="space-y-2">
              <a
                id="footer-amazon-link"
                href={EXTERNAL_LINKS.amazonMasalaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#3B2B21] border border-[#5A4332] hover:border-[#FF9900] text-xs text-[#F5EDE3] transition-colors"
              >
                <span>Amazon Store</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF9900]" />
              </a>

              <a
                id="footer-flipkart-link"
                href={EXTERNAL_LINKS.flipkartMasalaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#3B2B21] border border-[#5A4332] hover:border-[#2874F0] text-xs text-[#F5EDE3] transition-colors"
              >
                <span>Flipkart Store</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FED7AA]">
              Restaurant Info
            </h4>
            
            <div className="space-y-2 text-xs text-[#C9B4A4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E58A47] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E58A47] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white font-semibold">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8877]">
          <div>
            © {currentYear} <strong>{RESTAURANT_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Hand-painted culinary experience</span>
            <span>•</span>
            <button
              onClick={onOpenOrderModal}
              className="text-[#E58A47] hover:underline font-semibold"
            >
              Order Online
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
