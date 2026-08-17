import { Star, Clock, Phone, CreditCard, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantConfig';

export function InfoStrip() {
  return (
    <section id="info-strip" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFFFF] border border-[#DFCDB9] rounded-2xl shadow-[0_8px_30px_rgba(74,55,40,0.08)] p-4 sm:p-6 backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E6DACB]">
          {/* Card 1: Google Reviews */}
          <div className="flex items-center gap-3.5 p-2 sm:p-3">
            <div className="w-12 h-12 rounded-xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#D97706] shrink-0 shadow-sm">
              <Star className="w-6 h-6 fill-[#D97706] text-[#D97706]" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#7C695A] font-semibold">
                {RESTAURANT_INFO.ratingSource}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-heading font-bold text-lg text-[#2D231C]">
                  {RESTAURANT_INFO.rating}★
                </span>
                <span className="text-xs text-[#B84E1A] font-semibold">
                  {RESTAURANT_INFO.reviewCount} Reviews
                </span>
              </div>
              <p className="text-[11px] text-[#8A7565] mt-0.5">Verified dining patrons</p>
            </div>
          </div>

          {/* Card 2: Opening Hours */}
          <div className="flex items-center gap-3.5 p-2 sm:p-3 pt-4 sm:pt-3 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#15803D] shrink-0 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#7C695A] font-semibold">
                Opening Hours
              </div>
              <div className="font-semibold text-sm sm:text-base text-[#2D231C] mt-0.5">
                {RESTAURANT_INFO.openingHours}
              </div>
              <p className="text-[11px] text-[#8A7565] mt-0.5">Open 7 days a week</p>
            </div>
          </div>

          {/* Card 3: Contact */}
          <div className="flex items-center gap-3.5 p-2 sm:p-3 pt-4 sm:pt-3 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#B84E1A] shrink-0 shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#7C695A] font-semibold">
                Contact & Takeaway
              </div>
              <a
                id="info-phone-link"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="font-bold text-base text-[#B84E1A] hover:text-[#8C340B] transition-colors block mt-0.5"
              >
                {RESTAURANT_INFO.phone}
              </a>
              <p className="text-[11px] text-[#8A7565] mt-0.5">Call for bulk party bookings</p>
            </div>
          </div>

          {/* Card 4: Payment Methods */}
          <div className="flex items-center gap-3.5 p-2 sm:p-3 pt-4 sm:pt-3 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#0284C7] shrink-0 shadow-sm">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#7C695A] font-semibold">
                Payment Options
              </div>
              <div className="font-medium text-xs text-[#2D231C] mt-0.5 leading-snug">
                Credit • Debit • GPay • NFC
              </div>
              <p className="text-[11px] text-[#8A7565] mt-0.5">All digital & card payments</p>
            </div>
          </div>
        </div>

        {/* Live status footnote */}
        <div className="mt-4 pt-3 border-t border-[#E6DACB] flex items-center justify-between text-[11px] text-[#8A7565] px-1">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Information retrieved directly from restaurant profiles</span>
          </div>
          <span className="hidden md:inline text-[10px]">Patna • Bihar • Estd. Tradition</span>
        </div>
      </div>
    </section>
  );
}
