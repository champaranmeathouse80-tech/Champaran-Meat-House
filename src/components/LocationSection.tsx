import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantConfig';

export function LocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${RESTAURANT_INFO.name}, Vidyapati Marg, Opp. Taramandal, Lodipur, Patna, Bihar 800001`)}`;

  return (
    <section id="contact" className="py-20 bg-[#FAF5ED] relative border-b border-[#E6DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Visit Us in Patna</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            Visit Champaran Meat House
          </h2>

          <div className="font-hindi text-lg text-[#B84E1A] font-medium mt-1">
            पता और संपर्क
          </div>

          <p className="text-sm sm:text-base text-[#6B594C] mt-2">
            Located opposite Taramandal in the heart of Patna. Come experience authentic slow-cooked Ahuna meat fresh from clay handis.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#FFFFFF] border border-[#DFCDB9] p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#B84E1A] shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#7C695A]">
                    Address
                  </h4>
                  <p className="text-sm text-[#2D231C] mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4ECE1] border border-[#DFCDB9] text-xs text-[#6B594C]">
                    <Compass className="w-3.5 h-3.5 text-[#B84E1A]" />
                    <span>Plus Code: <strong>{RESTAURANT_INFO.plusCode}</strong></span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#059669] shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#7C695A]">
                    Dining & Delivery Hours
                  </h4>
                  <p className="text-sm text-[#2D231C] mt-1">
                    {RESTAURANT_INFO.openingHours}
                  </p>
                  <p className="text-xs text-[#8A7565] mt-0.5">
                    Open throughout the week for Lunch & Dinner
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#2563EB] shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#7C695A]">
                    Phone Inquiry
                  </h4>
                  <a
                    id="location-phone-link"
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-base sm:text-lg font-bold text-[#2D231C] hover:text-[#B84E1A] transition-colors mt-0.5 block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#8A7565] mt-0.5">
                    Available for inquiries, table reservations & catering
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#E6DACB] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                id="location-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="py-3 px-4 rounded-xl bg-[#B84E1A] hover:bg-[#9C3D0E] text-white font-semibold text-xs sm:text-sm text-center shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                id="location-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#F4ECE1] hover:bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#B84E1A] text-[#2D231C] font-semibold text-xs sm:text-sm text-center shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#B84E1A]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Stylized Map View / Frame */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FFFFFF] border border-[#DFCDB9] overflow-hidden shadow-md flex flex-col relative min-h-[380px]">
            {/* Map Frame / Embed Placeholder with Interactive Link */}
            <div className="relative flex-1 w-full bg-[#F4ECE1] flex items-center justify-center overflow-hidden p-6">
              {/* Illustrated Map Background Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(#C2A78C_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

              <div className="relative z-10 text-center max-w-md p-6 rounded-2xl bg-[#FAF5ED]/95 border border-[#DFCDB9] backdrop-blur-md shadow-md">
                <div className="w-14 h-14 rounded-2xl bg-[#F4ECE1] border border-[#B84E1A]/40 text-[#B84E1A] mx-auto flex items-center justify-center mb-4 shadow-sm">
                  <MapPin className="w-7 h-7 animate-bounce" />
                </div>

                <h4 className="font-heading font-bold text-lg text-[#2D231C]">
                  {RESTAURANT_INFO.name}
                </h4>
                <p className="text-xs text-[#B84E1A] font-medium mt-1">
                  Opposite Taramandal • Fraser Road / Lodipur
                </p>
                <p className="text-xs text-[#6B594C] mt-2">
                  Vidyapati Marg, Lodipur, Patna, Bihar 800001
                </p>

                <a
                  id="map-open-google-maps-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B84E1A] to-[#D97706] text-white text-xs font-semibold shadow-md hover:scale-105 transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick status bar */}
            <div className="p-4 bg-[#FAF5ED] border-t border-[#DFCDB9] flex items-center justify-between text-xs text-[#8A7565]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                <span className="text-[#2D231C] font-medium">Serving Diners & Delivery Daily</span>
              </div>
              <span className="text-[11px]">Patna, Bihar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
