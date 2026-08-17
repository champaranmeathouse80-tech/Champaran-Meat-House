export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  address: string;
  plusCode: string;
  openingHours: string;
  rating: number;
  reviewCount: string;
  ratingSource: string;
  paymentMethods: string[];
}

export interface ExternalLinks {
  zomatoUrl: string;
  swiggyUrl: string;
  amazonMasalaUrl: string;
  flipkartMasalaUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeChannelUrl: string;
  youtubeStoryUrl: string;
}

export type MenuCategoryType = 
  | 'Litti Combos'
  | 'Thali'
  | 'Starters'
  | 'Combos'
  | 'Main Course'
  | 'Breads'
  | 'Rice'
  | 'Accompaniments';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: MenuCategoryType;
  price: number;
  description: string;
  isVeg: boolean;
  isSignature?: boolean;
  spicyLevel?: 1 | 2 | 3;
  portion?: string;
  image: string;
  alt: string;
  tag?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface MasalaProduct {
  id: string;
  name: string;
  tagline: string;
  packSize: string;
  description: string;
  image: string;
  alt: string;
  amazonUrl: string;
  flipkartUrl: string;
  highlightFeatures: string[];
  isAvailable: boolean;
}

export type GalleryCategory = 
  | 'All'
  | 'Restaurant'
  | 'Food'
  | 'Kitchen'
  | 'Cooking'
  | 'Atmosphere'
  | 'Masala';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  image: string;
  alt: string;
  description: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}
