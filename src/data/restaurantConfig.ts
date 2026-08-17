import { RestaurantInfo, ExternalLinks, MenuItem, MasalaProduct, GalleryItem, MenuCategoryType } from '../types';

import heroImg from '../assets/images/hero_champaran_1786946803836.jpg';
import muttonImg from '../assets/images/dish_handi_mutton_1786946821208.jpg';
import littiImg from '../assets/images/dish_litti_combo_1786946829975.jpg';
import realLittiMuttonImg from '../assets/images/real_litti_mutton_combo_1786955964993.jpg';
import chickenImg from '../assets/images/dish_handi_chick_1786946842457.jpg';
import thaliImg from '../assets/images/dish_thali_spec_1786946855587.jpg';
import realMuttonRiceThaliImg from '../assets/images/real_mutton_rice_thali_1786956215342.jpg';
import starterPlateImg from '../assets/images/dish_starter_plate_1786946917735.jpg';
import realCrispyStarterImg from '../assets/images/real_crispy_starter_bites_1786956471277.jpg';
import realFamilyAhunaPotsImg from '../assets/images/real_family_ahuna_pots_1786956734203.jpg';
import masalaImg from '../assets/images/masala_magic_pack_1786946868380.jpg';
import realBmhMasalaPackImg from '../assets/images/real_bmh_masala_pack_1786956953048.jpg';
import realBmhMuttonMasalaImg from '../assets/images/real_bmh_mutton_masala_1786957093384.jpg';
import realBmhMasalaComboImg from '../assets/images/real_bmh_masala_combo_1786957254913.jpg';
import storyThumbnailImg from '../assets/images/story_kitchen_hearth_1786946881857.jpg';
import clayPotsImg from '../assets/images/gallery_clay_pots_1786946894565.jpg';
import diningRoomImg from '../assets/images/gallery_dining_warm_1786946904885.jpg';
import breadsBasketImg from '../assets/images/dish_breads_basket_1786946928868.jpg';

/**
 * ============================================================================
 * EDITABLE RESTAURANT CONFIGURATION
 * ----------------------------------------------------------------------------
 * The restaurant owner can update all details, URLs, menu prices, and images here.
 * ============================================================================
 */

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Champaran Meat House",
  tagline: "Traditional Recipes • Authentic Flavours",
  phone: "9430060368",
  address: "Vidyapati Marg, Opp. Taramandal, Lodipur, Patna, Bihar 800001",
  plusCode: "J46J+GV, Patna, Bihar",
  openingHours: "10:00 AM – 11:00 PM",
  rating: 3.7,
  reviewCount: "7.7K+",
  ratingSource: "Google Reviews",
  paymentMethods: [
    "Credit Card",
    "Debit Card",
    "Google Pay",
    "NFC Mobile Payment"
  ]
};

export const EXTERNAL_LINKS: ExternalLinks = {
  zomatoUrl: "https://www.zomato.com/patna/old-champaran-meat-house-fraser-road-area",
  swiggyUrl: "https://www.swiggy.com/city/patna/old-champaran-meat-house-fraser-road-area-lodipur-rest156486",
  amazonMasalaUrl: "https://www.amazon.in/stores/BMHMAGICMASALA/page/4A67381F-34E2-40E8-AC7A-9B0AFEFE6DDB",
  flipkartMasalaUrl: "https://www.flipkart.com/food-products/spice-powder-and-masala/bmhmagic-masala~brand/pr?marketplace=FLIPKART",
  instagramUrl: "https://www.instagram.com/oldchamparanmeethouse/",
  facebookUrl: "https://www.facebook.com/share/19QPizjNiH/",
  youtubeChannelUrl: "https://youtube.com/@oldchamparanmeethouse6597",
  // EDITABLE PLACEHOLDER: Replace with restaurant's official story video URL when available
  youtubeStoryUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
};

export const STORY_VIDEO_CONFIG = {
  title: "Our Story",
  subtitle: "Discover how Champaran Meat House came to be.",
  thumbnailImage: storyThumbnailImg,
  // Flag if a real video URL has been provided or if placeholder mode is active
  videoUrlPlaceholder: "STORY_VIDEO_URL",
  embedUrl: EXTERNAL_LINKS.youtubeStoryUrl,
  channelUrl: EXTERNAL_LINKS.youtubeChannelUrl
};

export const MENU_CATEGORIES: { id: MenuCategoryType; label: string; icon: string; count: number }[] = [
  { id: 'Litti Combos', label: 'Litti Combos', icon: '🍲', count: 4 },
  { id: 'Thali', label: 'Thali', icon: '🍱', count: 3 },
  { id: 'Starters', label: 'Starters', icon: '🍢', count: 4 },
  { id: 'Combos', label: 'Combos', icon: '🥘', count: 3 },
  { id: 'Main Course', label: 'Main Course', icon: '🫕', count: 6 },
  { id: 'Breads', label: 'Breads', icon: '🫓', count: 4 },
  { id: 'Rice', label: 'Rice', icon: '🍚', count: 3 },
  { id: 'Accompaniments', label: 'Accompaniments', icon: '🥗', count: 4 }
];

export const MENU_ITEMS: MenuItem[] = [
  // Litti Combos
  {
    id: "menu-litti-mutton-4pc",
    name: "Champaran Handi Mutton with Litti",
    hindiName: "चंपारण हांडी मटन + लिट्टी",
    category: "Litti Combos",
    price: 360,
    description: "Authentic tender Ahuna mutton curry slow-cooked in clay pot with whole garlic bulb, served with 2 golden roasted ghee-dipped littis and chokha.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    portion: "2 Pcs Mutton + 2 Littis + Chokha",
    image: realLittiMuttonImg,
    alt: "Handi Mutton with Litti Combo",
    tag: "Bestseller"
  },
  {
    id: "menu-litti-chicken-combo",
    name: "Champaran Handi Chicken with Litti",
    hindiName: "चंपारण हांडी चिकन + लिट्टी",
    category: "Litti Combos",
    price: 260,
    description: "Succulent clay-pot cooked chicken infused with whole spices and mustard oil, accompanied by 2 roasted sattu littis and spicy dip.",
    isVeg: false,
    isSignature: false,
    spicyLevel: 2,
    portion: "2 Pcs Chicken + 2 Littis",
    image: chickenImg,
    alt: "Handi Chicken with Litti Combo"
  },
  {
    id: "menu-traditional-litti-chokha",
    name: "Traditional Desi Ghee Litti Chokha",
    hindiName: "पारंपरिक देसी घी लिट्टी चोखा",
    category: "Litti Combos",
    price: 140,
    description: "Traditional wheat dough balls stuffed with spiced sattu, charcoal-roasted, dipped in pure cow ghee, served with baingan-tamatar aloo chokha.",
    isVeg: true,
    isSignature: false,
    spicyLevel: 1,
    portion: "4 Littis + Baingan Chokha + Chutney",
    image: littiImg,
    alt: "Traditional Desi Ghee Litti Chokha"
  },
  {
    id: "menu-litti-gravy-special",
    name: "Special Litti with Ahuna Gravy",
    hindiName: "स्पेशल लिट्टी + अहुना तरी",
    category: "Litti Combos",
    price: 180,
    description: "Crisp golden littis served with aromatic, slow-simmered rich Ahuna meat gravy for a rich, hearty experience.",
    isVeg: false,
    spicyLevel: 3,
    portion: "4 Littis + Rich Handi Gravy",
    image: littiImg,
    alt: "Special Litti with Ahuna Gravy"
  },

  // Thali
  {
    id: "menu-royal-champaran-mutton-thali",
    name: "Champaran Special Mutton Thali",
    hindiName: "चंपारण स्पेशल मटन थाली",
    category: "Thali",
    price: 420,
    description: "Complete feast: Ahuna Handi Mutton (2 pcs), Steaming Rice, 2 Butter Rotis / 1 Litti, Dal, Baingan Chokha, Papad, Salad & Sweet.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    portion: "Full Meal Platter",
    image: realMuttonRiceThaliImg,
    alt: "Champaran Special Mutton Thali",
    tag: "Signature Platter"
  },
  {
    id: "menu-royal-chicken-thali",
    name: "Champaran Handi Chicken Thali",
    hindiName: "चंपारण हांडी चिकन थाली",
    category: "Thali",
    price: 320,
    description: "Clay pot cooked chicken curry, yellow dal tadka, hot steamed rice, 2 rotis or 1 litti, pickle, crisp papad and salad.",
    isVeg: false,
    spicyLevel: 2,
    portion: "Full Meal Platter",
    image: thaliImg,
    alt: "Champaran Handi Chicken Thali"
  },
  {
    id: "menu-champaran-veg-thali",
    name: "Traditional Bihari Veg Thali",
    hindiName: "पारंपरिक बिहारी वेज थाली",
    category: "Thali",
    price: 190,
    description: "Homestyle seasonal vegetable curry, yellow dal fry, fragrant jeera rice, 4 tawa rotis, baingan chokha, roasted papad and mint chutney.",
    isVeg: true,
    spicyLevel: 1,
    portion: "Full Meal Platter",
    image: thaliImg,
    alt: "Traditional Bihari Veg Thali"
  },

  // Starters
  {
    id: "menu-mutton-roasted-starter",
    name: "Champaran Roasted Mutton Fry",
    hindiName: "चंपारण रोस्टेड मटन फ्राई",
    category: "Starters",
    price: 340,
    description: "Pan-roasted mutton chunks tossed with crushed garlic, green chilies, whole black peppercorns and cold-pressed mustard oil.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    portion: "250g Portioned",
    image: realCrispyStarterImg,
    alt: "Champaran Roasted Mutton Fry",
    tag: "Chef Special"
  },
  {
    id: "menu-chicken-roast-dry",
    name: "Tawa Spiced Chicken Dry Roast",
    hindiName: "तवा स्पाइस्ड चिकन ड्राई रोस्ट",
    category: "Starters",
    price: 240,
    description: "Tender chicken pieces coated in coarse artisanal Champaran spices, caramelized onions and fresh curry leaves.",
    isVeg: false,
    spicyLevel: 2,
    portion: "6 Pieces",
    image: starterPlateImg,
    alt: "Tawa Spiced Chicken Dry Roast"
  },
  {
    id: "menu-mutton-seekh-kebab",
    name: "Spiced Mutton Seekh Kebab",
    hindiName: "मटन सीख कबाब",
    category: "Starters",
    price: 280,
    description: "Finely minced mutton blended with traditional spices, skewered and flame-grilled to succulent perfection.",
    isVeg: false,
    spicyLevel: 2,
    portion: "4 Skewers",
    image: starterPlateImg,
    alt: "Spiced Mutton Seekh Kebab"
  },
  {
    id: "menu-veg-kurkure-kebab",
    name: "Crispy Sattu & Paneer Bites",
    hindiName: "सत्तू और पनीर क्रिस्पी बाइट्स",
    category: "Starters",
    price: 160,
    description: "Golden crumb-coated spiced sattu and cottage cheese patties served with tangy raw mango chutney.",
    isVeg: true,
    spicyLevel: 1,
    portion: "6 Pieces",
    image: starterPlateImg,
    alt: "Crispy Sattu & Paneer Bites"
  },

  // Combos
  {
    id: "menu-combo-mutton-rice",
    name: "Ahuna Mutton & Jeera Rice Meal",
    hindiName: "अहुना मटन + जीरा राइस मील",
    category: "Combos",
    price: 310,
    description: "Portion of Ahuna mutton gravy paired with fragrant cumin basmati rice and fresh sliced onion rings.",
    isVeg: false,
    spicyLevel: 3,
    portion: "1-Person Combo",
    image: muttonImg,
    alt: "Ahuna Mutton and Jeera Rice Combo"
  },
  {
    id: "menu-combo-chicken-roti",
    name: "Handi Chicken & Butter Roti Combo",
    hindiName: "हांडी चिकन + बटर रोटी कॉम्बो",
    category: "Combos",
    price: 230,
    description: "Rich Handi Chicken (2 pcs) with 4 piping hot tandoori butter rotis, onion salad, and pickle.",
    isVeg: false,
    spicyLevel: 2,
    portion: "1-Person Combo",
    image: chickenImg,
    alt: "Handi Chicken and Butter Roti Combo"
  },
  {
    id: "menu-combo-family-ahuna",
    name: "Champaran Family Feast Box",
    hindiName: "चंपारण फैमिली दावत",
    category: "Combos",
    price: 990,
    description: "Half kg Ahuna Handi Mutton + 6 Littis + 6 Butter Rotis + Jeera Rice + Chokha + Chutneys for family gathering.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    portion: "Serves 3-4",
    image: realFamilyAhunaPotsImg,
    alt: "Champaran Family Feast Box",
    tag: "Value Pack"
  },

  // Main Course
  {
    id: "menu-ahuna-handi-mutton-half",
    name: "Authentic Champaran Ahuna Mutton (500g)",
    hindiName: "अहुना हांडी मटन (500 ग्राम)",
    category: "Main Course",
    price: 580,
    description: "The crown jewel. Fresh mutton pieces marinated in cold-pressed mustard oil, garlic cloves & whole spices, slow-cooked in a dough-sealed earthen handi over glowing charcoal.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    portion: "500g Handi Pot",
    image: muttonImg,
    alt: "Champaran Ahuna Handi Mutton 500g",
    tag: "Must Try"
  },
  {
    id: "menu-ahuna-handi-mutton-1kg",
    name: "Champaran Ahuna Handi Mutton (1 Kg)",
    hindiName: "अहुना हांडी मटन (1 कि.ग्रा.)",
    category: "Main Course",
    price: 1100,
    description: "Full traditional earthen pot sealed with flour dough and slow-simmered for 2 hours on wood embers. Tender, melting meat with unforgettable aroma.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    portion: "1 Kg Sealed Clay Handi",
    image: muttonImg,
    alt: "Champaran Ahuna Handi Mutton 1 Kg",
    tag: "Authentic Original"
  },
  {
    id: "menu-champaran-handi-chicken-half",
    name: "Champaran Handi Chicken (500g)",
    hindiName: "चंपारण हांडी चिकन (500 ग्राम)",
    category: "Main Course",
    price: 360,
    description: "Farm-fresh chicken pieces prepared in earthen handi with crushed garlic, whole onions, and stone-ground spices.",
    isVeg: false,
    spicyLevel: 2,
    portion: "500g Handi Pot",
    image: chickenImg,
    alt: "Champaran Handi Chicken 500g"
  },
  {
    id: "menu-champaran-handi-chicken-1kg",
    name: "Champaran Handi Chicken (1 Kg)",
    hindiName: "चंपारण हांडी चिकन (1 कि.ग्रा.)",
    category: "Main Course",
    price: 680,
    description: "Full handi portion of succulent chicken curry cooked in sealed clay pot with robust earthy flavours.",
    isVeg: false,
    spicyLevel: 2,
    portion: "1 Kg Sealed Clay Handi",
    image: chickenImg,
    alt: "Champaran Handi Chicken 1 Kg"
  },
  {
    id: "menu-paneer-handi-special",
    name: "Champaran Handi Paneer",
    hindiName: "चंपारण हांडी पनीर",
    category: "Main Course",
    price: 240,
    description: "Fresh cottage cheese cubes simmered in our signature earthen pot tomato-onion gravy spiced with roasted cumin and crushed coriander.",
    isVeg: true,
    spicyLevel: 2,
    portion: "Handi Bowl",
    image: muttonImg,
    alt: "Champaran Handi Paneer"
  },
  {
    id: "menu-dal-tadka-desi-ghee",
    name: "Desi Ghee Dal Tadka",
    hindiName: "देसी घी दाल तड़का",
    category: "Main Course",
    price: 150,
    description: "Yellow lentils tempered with fragrant garlic, cumin seeds, dried red chilies and pure cow ghee.",
    isVeg: true,
    spicyLevel: 1,
    portion: "Medium Bowl",
    image: thaliImg,
    alt: "Desi Ghee Dal Tadka"
  },

  // Breads
  {
    id: "menu-bread-butter-roti",
    name: "Tandoori Butter Roti",
    hindiName: "तंदूरी बटर रोटी",
    category: "Breads",
    price: 18,
    description: "Crisp and soft whole wheat bread baked in clay tandoor, brushed with melting butter.",
    isVeg: true,
    portion: "1 Piece",
    image: breadsBasketImg,
    alt: "Tandoori Butter Roti"
  },
  {
    id: "menu-bread-plain-roti",
    name: "Tandoori Plain Roti",
    hindiName: "तंदूरी सादा रोटी",
    category: "Breads",
    price: 12,
    description: "Fresh whole wheat flatbread baked directly on the clay tandoor walls.",
    isVeg: true,
    portion: "1 Piece",
    image: breadsBasketImg,
    alt: "Tandoori Plain Roti"
  },
  {
    id: "menu-bread-lachha-paratha",
    name: "Butter Lachha Paratha",
    hindiName: "बटर लच्छा पराठा",
    category: "Breads",
    price: 35,
    description: "Flaky multi-layered whole wheat paratha crisped on the griddle with desi ghee.",
    isVeg: true,
    portion: "1 Piece",
    image: breadsBasketImg,
    alt: "Butter Lachha Paratha"
  },
  {
    id: "menu-bread-single-litti",
    name: "Extra Roasted Sattu Litti",
    hindiName: "एक्स्ट्रा सत्तू लिट्टी",
    category: "Breads",
    price: 30,
    description: "Single roasted sattu litti ball dipped in pure ghee.",
    isVeg: true,
    portion: "1 Piece",
    image: littiImg,
    alt: "Extra Roasted Sattu Litti"
  },

  // Rice
  {
    id: "menu-rice-steamed-basmati",
    name: "Steamed Long Grain Basmati Rice",
    hindiName: "स्टीम्ड बासमती राइस",
    category: "Rice",
    price: 90,
    description: "Aromatic fluffy steamed long-grain rice, ideal pairing with rich Ahuna meat gravy.",
    isVeg: true,
    portion: "Full Plate",
    image: thaliImg,
    alt: "Steamed Long Grain Basmati Rice"
  },
  {
    id: "menu-rice-jeera",
    name: "Desi Ghee Jeera Rice",
    hindiName: "देसी घी जीरा राइस",
    category: "Rice",
    price: 120,
    description: "Basmati rice tempered in pure desi ghee with roasted whole cumin and bay leaves.",
    isVeg: true,
    portion: "Full Plate",
    image: thaliImg,
    alt: "Desi Ghee Jeera Rice"
  },
  {
    id: "menu-rice-mutton-biryani",
    name: "Champaran Handi Mutton Pulao",
    hindiName: "चंपारण हांडी मटन पुलाव",
    category: "Rice",
    price: 340,
    description: "Fragrant basmati rice slow-cooked inside earthen handi with spiced mutton pieces and saffron notes.",
    isVeg: false,
    isSignature: true,
    spicyLevel: 2,
    portion: "Serves 1-2",
    image: muttonImg,
    alt: "Champaran Handi Mutton Pulao"
  },

  // Accompaniments
  {
    id: "menu-acc-baingan-chokha",
    name: "Smoky Baingan-Tamatar Chokha",
    hindiName: "स्मोकी बैंगन-टमाटर चोखा",
    category: "Accompaniments",
    price: 60,
    description: "Charcoal-roasted eggplant and tomatoes mashed with raw mustard oil, garlic, green chilies and coriander.",
    isVeg: true,
    spicyLevel: 1,
    portion: "1 Bowl",
    image: littiImg,
    alt: "Smoky Baingan-Tamatar Chokha"
  },
  {
    id: "menu-acc-onion-salad",
    name: "Mustard & Green Chili Onion Salad",
    hindiName: "सरसों प्याज और हरी मिर्च सलाद",
    category: "Accompaniments",
    price: 30,
    description: "Freshly sliced crunchy onions tossed with lemon juice, mustard oil and green chilies.",
    isVeg: true,
    portion: "1 Plate",
    image: starterPlateImg,
    alt: "Mustard and Green Chili Onion Salad"
  },
  {
    id: "menu-acc-roasted-papad",
    name: "Crisp Roasted Masala Papad",
    hindiName: "रोस्टेड मसाला पापड़",
    category: "Accompaniments",
    price: 25,
    description: "Fire-roasted urad dal papad topped with chopped onions, tomatoes, chaat masala and fresh coriander.",
    isVeg: true,
    portion: "2 Pieces",
    image: thaliImg,
    alt: "Crisp Roasted Masala Papad"
  },
  {
    id: "menu-acc-gulab-jamun",
    name: "Warm Desi Ghee Gulab Jamun",
    hindiName: "गुलाब जामुन",
    category: "Accompaniments",
    price: 45,
    description: "Soft cottage cheese dumplings soaked in rose and cardamom-scented sugar syrup.",
    isVeg: true,
    portion: "2 Pieces",
    image: thaliImg,
    alt: "Warm Desi Ghee Gulab Jamun"
  }
];

export const FEATURED_SIGNATURE_ITEMS: MenuItem[] = MENU_ITEMS.filter(item => item.isSignature);

export const MASALA_PRODUCTS: MasalaProduct[] = [
  {
    id: "masala-bmh-magic-meat",
    name: "BMH Magic Meat Masala",
    tagline: "The Secret Blend of Champaran",
    packSize: "100g / 200g Pouch",
    description: "Specially formulated artisanal blend of whole roasted spices, black cardamom, stone-ground cinnamon and Bihari spices for authentic handi meat curry at home.",
    image: realBmhMasalaPackImg,
    alt: "BMH Magic Meat Masala Pack",
    amazonUrl: EXTERNAL_LINKS.amazonMasalaUrl,
    flipkartUrl: EXTERNAL_LINKS.flipkartMasalaUrl,
    highlightFeatures: [
      "100% Pure Whole Spices",
      "Traditional Hand-Roasting Technique",
      "No Added Artificial Preservatives",
      "Authentic Ahuna Flavour Guarantee"
    ],
    isAvailable: true
  },
  {
    id: "masala-bmh-chicken-special",
    name: "BMH Magic Chicken Masala",
    tagline: "Rich Aroma & Golden Hue",
    packSize: "100g / 200g Pouch",
    description: "Crafted to infuse chicken gravies with that signature earthen warmth, garlic punch, and rich textured aroma.",
    image: realBmhMuttonMasalaImg,
    alt: "BMH Magic Chicken Masala",
    amazonUrl: EXTERNAL_LINKS.amazonMasalaUrl,
    flipkartUrl: EXTERNAL_LINKS.flipkartMasalaUrl,
    highlightFeatures: [
      "Balanced Heat & Spice Notes",
      "Infused with Sun-Dried Fenugreek",
      "Perfect for Pot & Pan Cooking",
      "Rich Gravy Color"
    ],
    isAvailable: true
  },
  {
    id: "masala-bmh-all-purpose",
    name: "BMH All-in-One Champaran Ahuna Spice Blend",
    tagline: "The Master Kitchen Formula",
    packSize: "250g Tin Pack",
    description: "The complete seasoning mix with whole dried pods and coarse ground spices designed specifically for sealed slow-cooking recipes.",
    image: realBmhMasalaComboImg,
    alt: "BMH All in One Champaran Spice Blend",
    amazonUrl: EXTERNAL_LINKS.amazonMasalaUrl,
    flipkartUrl: EXTERNAL_LINKS.flipkartMasalaUrl,
    highlightFeatures: [
      "Signature Slow-Simmer Formulation",
      "Premium Export Quality Spices",
      "Aroma-Lock Sealed Packaging",
      "Compatible with Veg & Non-Veg Dishes"
    ],
    isAvailable: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Sealed Ahuna Clay Pots on Charcoal",
    category: "Cooking",
    image: clayPotsImg,
    alt: "Sealed terracotta Ahuna pots cooking slowly on charcoal embers",
    description: "Earthen pots sealed with dough, slow-simmering over smouldering charcoal pits.",
    aspect: "landscape"
  },
  {
    id: "gal-02",
    title: "Traditional Champaran Handi Mutton",
    category: "Food",
    image: muttonImg,
    alt: "Champaran Ahuna Handi Mutton in rustic clay vessel",
    description: "Tender goat meat slow-infused with whole garlic bulbs and cold-pressed mustard oil.",
    aspect: "square"
  },
  {
    id: "gal-03",
    title: "Artisanal Kitchen Hearth & Embers",
    category: "Kitchen",
    image: storyThumbnailImg,
    alt: "Master cook tending to simmering pots by the glowing hearth",
    description: "Our traditional kitchen hearth where authentic recipes are brought to life.",
    aspect: "landscape"
  },
  {
    id: "gal-04",
    title: "Charcoal Roasted Sattu Litti Chokha",
    category: "Food",
    image: littiImg,
    alt: "Golden roasted sattu littis with baingan chokha and desi ghee",
    description: "Charcoal-baked littis drenched in pure desi ghee with smoky eggplant chokha.",
    aspect: "square"
  },
  {
    id: "gal-05",
    title: "Cozy Dining Ambiance at Lodipur",
    category: "Atmosphere",
    image: diningRoomImg,
    alt: "Warm wooden dining room illuminated with amber lanterns",
    description: "Warm amber lanterns and rustic wooden tables welcoming guests in Patna.",
    aspect: "landscape"
  },
  {
    id: "gal-06",
    title: "BMH Magic Masala Spice Range",
    category: "Masala",
    image: masalaImg,
    alt: "BMH Magic Masala packaging with whole spices",
    description: "Our authentic secret spice formulation available on Amazon and Flipkart.",
    aspect: "square"
  }
];

export const HERO_CONFIG = {
  title: RESTAURANT_INFO.name,
  subtitle: RESTAURANT_INFO.tagline,
  heroImage: heroImg,
  tagText: "World-Famous Ahuna Handi Meat • Patna",
  primaryBtnText: "Explore Menu",
  secondaryBtnText: "Order Now"
};
