import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Check, Filter, Utensils, X, Flame, Sparkles, Leaf } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantConfig';
import { MenuItem, MenuCategoryType } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  addedItemIds: Record<string, boolean>;
}

export function MenuSection({ onAddToCart, addedItemIds }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let result = [...MENU_ITEMS];

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }

    // Diet filter
    if (dietFilter === 'veg') {
      result = result.filter(item => item.isVeg);
    } else if (dietFilter === 'non-veg') {
      result = result.filter(item => !item.isVeg);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.hindiName && item.hindiName.includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, dietFilter, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-20 bg-[#FAF5ED] relative">
      {/* Subtle Background Texture Accent */}
      <div className="absolute inset-0 bg-parchment opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Utensils className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Traditional Menu</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            Our Complete Menu
          </h2>

          <div className="font-hindi text-lg text-[#B84E1A] font-medium mt-1">
            स्वादिष्ट व्यंजन सूची
          </div>

          <p className="text-sm sm:text-base text-[#6B594C] mt-2">
            Select authentic Champaran Ahuna specialties, roasted littis, royal thalis, and tandoori breads.
          </p>
        </div>

        {/* Controls: Search, Diet Filters & Sorting */}
        <div className="space-y-4 mb-8">
          {/* Search bar & quick filters */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7565]" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mutton, litti, chicken, thali..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFCDB9] text-[#2D231C] placeholder-[#8A7565] text-xs sm:text-sm focus:outline-none focus:border-[#B84E1A] focus:ring-1 focus:ring-[#B84E1A] transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  id="menu-search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8A7565] hover:text-[#2D231C]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Diet & Sort Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Veg / Non-Veg toggles */}
              <div className="flex items-center bg-[#FFFFFF] border border-[#DFCDB9] rounded-xl p-1 shadow-sm">
                <button
                  id="filter-diet-all-btn"
                  onClick={() => setDietFilter('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    dietFilter === 'all'
                      ? 'bg-[#B84E1A] text-white shadow-sm'
                      : 'text-[#6B594C] hover:text-[#2D231C]'
                  }`}
                >
                  All Items
                </button>
                <button
                  id="filter-diet-veg-btn"
                  onClick={() => setDietFilter('veg')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    dietFilter === 'veg'
                      ? 'bg-green-700 text-white shadow-sm'
                      : 'text-[#6B594C] hover:text-[#2D231C]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Veg
                </button>
                <button
                  id="filter-diet-non-veg-btn"
                  onClick={() => setDietFilter('non-veg')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    dietFilter === 'non-veg'
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-[#6B594C] hover:text-[#2D231C]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Non-Veg
                </button>
              </div>

              {/* Price Sort Dropdown */}
              <div className="flex items-center bg-[#FFFFFF] border border-[#DFCDB9] rounded-xl px-2.5 py-1.5 shadow-sm text-xs text-[#6B594C]">
                <Filter className="w-3.5 h-3.5 text-[#8A7565] mr-1.5 shrink-0" />
                <select
                  id="menu-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'default' | 'price-asc' | 'price-desc')}
                  className="bg-transparent text-xs font-medium text-[#2D231C] focus:outline-none cursor-pointer pr-1"
                >
                  <option value="default">Default Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            <button
              id="category-chip-all"
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-1.5 ${
                activeCategory === 'All'
                  ? 'bg-gradient-to-r from-[#B84E1A] to-[#D97706] text-white border-[#B84E1A] shadow-[0_4px_16px_rgba(184,78,26,0.3)]'
                  : 'bg-[#FFFFFF] border-[#DFCDB9] text-[#6B594C] hover:bg-[#F4ECE1] hover:text-[#2D231C] shadow-sm'
              }`}
            >
              <span>✨</span>
              <span>All Categories</span>
              <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-black/10">
                {MENU_ITEMS.length}
              </span>
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`category-chip-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#B84E1A] to-[#D97706] text-white border-[#B84E1A] shadow-[0_4px_16px_rgba(184,78,26,0.3)]'
                      : 'bg-[#FFFFFF] border-[#DFCDB9] text-[#6B594C] hover:bg-[#F4ECE1] hover:text-[#2D231C] shadow-sm'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#7C695A] mb-6 px-1">
          <span>
            Showing <strong className="text-[#2D231C]">{filteredItems.length}</strong> dishes
          </span>
          {activeCategory !== 'All' && (
            <button
              onClick={() => setActiveCategory('All')}
              className="text-[#B84E1A] font-semibold hover:underline"
            >
              Reset to all
            </button>
          )}
        </div>

        {/* Typographic Menu Cards Grid (No separate dish photo on every card!) */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#FFFFFF] rounded-2xl border border-[#DFCDB9] p-8 shadow-sm">
            <Utensils className="w-12 h-12 text-[#8A7565] mx-auto mb-3 opacity-60" />
            <h4 className="font-heading text-lg font-semibold text-[#2D231C]">
              No dishes found
            </h4>
            <p className="text-xs text-[#6B594C] mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any items matching &quot;{searchQuery}&quot;. Try adjusting your search query or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setDietFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#B84E1A] hover:bg-[#9C3D0E] text-white text-xs font-semibold shadow-sm"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  id={`menu-card-${item.id}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#B84E1A] transition-all duration-300 flex flex-col justify-between p-5 shadow-sm hover:shadow-md relative overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F4ECE1] to-transparent pointer-events-none rounded-bl-3xl" />

                  {/* Header / Info Line */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        {/* Veg / Non-Veg symbol */}
                        <span
                          className={`w-3.5 h-3.5 rounded-sm border ${
                            item.isVeg
                              ? 'border-green-600 bg-green-50'
                              : 'border-red-600 bg-red-50'
                          } flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-green-600' : 'bg-red-600'
                            }`}
                          />
                        </span>

                        <h4 className="font-heading font-bold text-base text-[#2D231C] group-hover:text-[#B84E1A] transition-colors leading-snug">
                          {item.name}
                        </h4>
                      </div>

                      {/* Tag / Bestseller Badge */}
                      {item.tag && (
                        <span className="px-2 py-0.5 rounded bg-[#B84E1A]/10 border border-[#B84E1A]/30 text-[#B84E1A] text-[10px] font-bold tracking-wide shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Hindi Name */}
                    {item.hindiName && (
                      <div className="font-hindi text-xs text-[#B84E1A] font-medium ml-5 mb-2">
                        {item.hindiName}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-[#6B594C] ml-5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Portion and spice indicators */}
                    <div className="flex items-center gap-2 mt-3 ml-5 flex-wrap">
                      {item.portion && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4ECE1] text-[#7C695A] font-medium border border-[#DFCDB9]">
                          {item.portion}
                        </span>
                      )}

                      {item.spicyLevel && item.spicyLevel > 1 && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-[#FFF5F0] text-[#B84E1A] font-semibold border border-[#DFCDB9]/60 flex items-center gap-0.5">
                          {'🌶️'.repeat(item.spicyLevel)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & Add to Tray Button */}
                  <div className="mt-5 pt-3.5 border-t border-[#E6DACB] flex items-center justify-between ml-5">
                    <div>
                      <span className="text-[10px] uppercase text-[#8A7565] block font-medium">Price</span>
                      <span className="font-heading font-bold text-lg text-[#B84E1A]">
                        ₹{item.price}
                      </span>
                    </div>

                    <button
                      id={`menu-add-btn-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                        addedItemIds[item.id]
                          ? 'bg-[#15803D] text-white'
                          : 'bg-[#B84E1A] hover:bg-[#9C3D0E] text-white hover:scale-105 active:scale-95'
                      }`}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      {addedItemIds[item.id] ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
