import { Category, TabIDs } from './types';

// Local image paths (stored in public/images/)
export const LOGO_URL = "/images/branding/logo.png";
export const VISION_2030_URL = "/images/branding/vision-2030.png";
export const HERO_IMAGE_URL = "/images/backgrounds/hero.jpg";
export const BAKER_HANDS_URL = "/images/backgrounds/baker-hands.jpg";

export const CATEGORIES: Category[] = [
  {
    id: TabIDs.ESSENTIALS,
    label: "The Essentials",
    description: "The foundation of every table. Traditional recipes perfected over decades.",
    products: [
      {
        id: 'e1',
        name: "Lebanese Bread",
        description: "Classic, thin, two-layered flatbread. Soft texture perfect for wrapping.",
        imageUrl: "/images/products/essentials/lebanese-bread.jpg",
      },
      {
        id: 'e2',
        name: "Shami Bread",
        description: "Thicker, fluffier traditional pocket bread with a golden crust.",
        imageUrl: "/images/products/essentials/shami-bread.jpg",
      },
      {
        id: 'e3',
        name: "Adas Bread",
        description: "Nutritious lentil-based bread offering a rich, earthy flavor profile.",
        imageUrl: "/images/products/essentials/adas-bread.jpg",
      },
    ]
  },
  {
    id: TabIDs.SANDWICH,
    label: "Sandwich & Toast",
    description: "Precision-sliced and baked for the perfect crumb structure.",
    products: [
      { id: 's1', name: "Premium White Toast", description: "Soft, uniform crumb. Ideal for hotels and breakfast service.", imageUrl: "/images/products/sandwich/white-toast.jpg" },
      { id: 's2', name: "Bran Toast", description: "High-fiber option without compromising on softness.", imageUrl: "/images/products/sandwich/white-toast.jpg" },
      { id: 's3', name: "Dinner Rolls", description: "Soft, buttery glazed rolls.", imageUrl: "/images/products/sandwich/dinner-rolls.jpg" },
      { id: 's4', name: "Artisan Ciabatta", description: "Open crumb structure with a crisp crust.", imageUrl: "/images/products/sandwich/ciabatta.jpg" },
      { id: 's5', name: "Panini Loaf", description: "Pre-grilled style texture, ready for the press.", imageUrl: "/images/products/sandwich/panini-loaf.jpg" },
    ]
  },
  {
    id: TabIDs.BURGERS,
    label: "Burgers & Specialty",
    description: "Engineered to hold the juiciest ingredients without falling apart.",
    products: [
      { id: 'b1', name: "Brioche Burger Bun", description: "Rich, egg-washed golden finish.", imageUrl: "/images/products/burgers/brioche-bun.jpg" },
      { id: 'b2', name: "Potato Bun", description: "Ultra-soft texture that absorbs sauces perfectly.", imageUrl: "/images/products/burgers/potato-bun.jpg" },
      { id: 'b3', name: "Bashka", description: "Traditional sweet bread with aromatic spices.", imageUrl: "/images/products/burgers/bashka.jpg" },
      { id: 'b4', name: "Turkey Bread", description: "Specialty dense loaf for savory carvings.", imageUrl: "/images/products/burgers/turkey-bread.jpg" },
      { id: 'b5', name: "Sohaira", description: "Regional specialty with a unique crust pattern.", imageUrl: "/images/products/burgers/sohaira.jpg" },
    ]
  },
  {
    id: TabIDs.RUSKS,
    label: "Rusks",
    description: "Double-baked for the perfect crunch. The ultimate tea companion.",
    products: [
      { id: 'r1', name: "Classic Rusk", description: "Golden, crisp, and lightly sweetened.", imageUrl: "/images/products/rusks/classic-rusk.jpg" },
      { id: 'r2', name: "Sweet Cake Rusk", description: "Dense, cake-like texture dried to perfection.", imageUrl: "/images/products/rusks/sweet-cake-rusk.jpg" },
      { id: 'r3', name: "Whole Wheat Rusk", description: "Healthy alternative with digestive benefits.", imageUrl: "/images/products/rusks/whole-wheat-rusk.jpg" },
      { id: 'r4', name: "Rusk Crumbs", description: "Finely ground for industrial breading applications.", imageUrl: "/images/products/rusks/rusk-crumbs.jpg" },
    ]
  },
  {
    id: TabIDs.HORECA,
    label: "Single Wrapped (Horeca)",
    description: "Hygiene-first solutions for hospitals, airlines, and luxury hospitality.",
    products: [
      { id: 'h1', name: "SW Sandwich Slice", description: "Individually sealed for maximum hygiene.", isHospitalSafe: true, imageUrl: "/images/products/horeca/sw-sandwich.jpg" },
      { id: 'h2', name: "SW Burger Bun", description: "Sealed fresh from the oven.", isHospitalSafe: true, imageUrl: "/images/products/horeca/sw-burger-bun.jpg" },
      { id: 'h3', name: "SW Ciabatta", description: "Premium Italian style, sterile packaging.", isHospitalSafe: true, imageUrl: "/images/products/horeca/sw-ciabatta.jpg" },
      { id: 'h4', name: "SW Toast Pack", description: "Two-slice pack for patient dining.", isHospitalSafe: true, imageUrl: "/images/products/horeca/sw-toast.jpg" },
      { id: 'h5', name: "SW Tanoury", description: "Traditional flatbread, modern safety standards.", isHospitalSafe: true, imageUrl: "/images/products/horeca/sw-tanoury.jpg" },
    ]
  },
];