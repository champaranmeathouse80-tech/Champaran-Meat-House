import { CreditCard, Smartphone, ShieldCheck, WalletCards, QrCode } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantConfig';

export function PaymentSection() {
  const paymentOptions = [
    {
      title: "Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, RuPay & Diners Club accepted at counter"
    },
    {
      title: "Debit Card",
      icon: WalletCards,
      description: "Direct chip & pin payments across all Indian bank cards"
    },
    {
      title: "Google Pay & UPI",
      icon: QrCode,
      description: "Instant QR scan payments via Google Pay, PhonePe, Paytm & BHIM"
    },
    {
      title: "NFC Mobile Payment",
      icon: Smartphone,
      description: "Tap-to-pay using Apple Pay, Google Wallet & contactless cards"
    }
  ];

  return (
    <section id="payments" className="py-14 bg-[#FAF5ED] border-t border-[#E6DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#2D231C]">
            Accepted Payment Methods
          </h3>
          <p className="text-xs text-[#6B594C] mt-1">
            Convenient, seamless, and secure in-restaurant billing options.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paymentOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                id={`payment-method-${opt.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#DFCDB9] flex items-center gap-3.5 transition-colors hover:border-[#B84E1A] shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#B84E1A] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2D231C]">
                    {opt.title}
                  </h4>
                  <p className="text-[11px] text-[#6B594C] leading-tight mt-0.5">
                    {opt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-6 text-center text-[11px] text-[#8A7565] flex items-center justify-center gap-1.5 max-w-lg mx-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B84E1A] shrink-0" />
          <span>Digital and contactless payment methods are supported at our physical dining counter in Patna. Online orders are processed through Zomato or Swiggy checkout.</span>
        </div>
      </div>
    </section>
  );
}
