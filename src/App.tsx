import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoStrip } from './components/InfoStrip';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { MasalaSection } from './components/MasalaSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { SocialSection } from './components/SocialSection';
import { PaymentSection } from './components/PaymentSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { MenuItem, CartItem } from './types';
import { ShoppingBag, UtensilsCrossed, ExternalLink, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantConfig';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // Add to cart with feedback animation
  const handleAddToCart = useCallback((item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    // Flash added state for feedback
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  }, []);

  const handleUpdateQuantity = useCallback((id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleExploreMenu = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#FAF5ED] text-[#2D231C] flex flex-col font-sans selection:bg-[#B84E1A] selection:text-white">
      {/* Sticky Header & Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* 2. Restaurant Information Strip */}
        <InfoStrip />

        {/* 3. Signature Food Section (Taste of Champaran) */}
        <SignatureDishes
          onAddToCart={handleAddToCart}
          onExploreMenu={handleExploreMenu}
          addedItemIds={addedItemIds}
        />

        {/* 4. Interactive Restaurant Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          addedItemIds={addedItemIds}
        />

        {/* 5. Our Story Section (Cinematic Video Feature) */}
        <StorySection />

        {/* 6. Masala Marketplace (Bring Our Flavours Home) */}
        <MasalaSection />

        {/* 7. Restaurant Gallery with Lightbox */}
        <GallerySection />

        {/* 8. Location & Directions */}
        <LocationSection />

        {/* 9. Social Media Journey */}
        <SocialSection />

        {/* 10. Payment Transparency Strip */}
        <PaymentSection />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Shopping Cart Sliding Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Order Now External Platform Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      {/* Floating Bottom Quick Action Bar on Mobile */}
      <div className="lg:hidden fixed bottom-4 inset-x-4 z-30 flex items-center gap-2 max-w-md mx-auto">
        <button
          id="mobile-floating-cart-btn"
          onClick={() => setIsCartOpen(true)}
          className="relative flex-1 py-3.5 px-4 rounded-2xl bg-[#FFFFFF]/95 border border-[#DFCDB9] text-[#3D2E24] text-xs font-semibold shadow-[0_8px_25px_rgba(74,55,40,0.18)] backdrop-blur-md flex items-center justify-center gap-2"
          aria-label="Open food cart"
        >
          <ShoppingBag className="w-4 h-4 text-[#B84E1A]" />
          <span>Cart Tray</span>
          {totalCartCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-[#B84E1A] text-white text-[11px] font-bold shadow-sm">
              {totalCartCount}
            </span>
          )}
        </button>

        <button
          id="mobile-floating-order-btn"
          onClick={() => setIsOrderModalOpen(true)}
          className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#B84E1A] to-[#D97706] text-white text-xs font-semibold shadow-[0_8px_25px_rgba(184,78,26,0.3)] flex items-center justify-center gap-2"
        >
          <UtensilsCrossed className="w-4 h-4" />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
}
