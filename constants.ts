import { Category, TabIDs } from './types';

// Using placeholder images that evoke a bakery feel
const IMAGE_BASE = "https://picsum.photos/600/400?random=";

// Derived from provided Imgur URL (ID: 1Jw3rVH) - using direct link for transparent logo
export const LOGO_URL = "https://i.imgur.com/1Jw3rVH.png";
export const VISION_2030_URL = "https://i.imgur.com/OOlSVZf.png";

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
        imageUrl: "https://i.imgur.com/DQTkjlf.jpg",
      },
      {
        id: 'e2',
        name: "Shami Bread",
        description: "Thicker, fluffier traditional pocket bread with a golden crust.",
        imageUrl: "https://i.imgur.com/iezhuVJ.jpg",
      },
      {
        id: 'e3',
        name: "Adas Bread",
        description: "Nutritious lentil-based bread offering a rich, earthy flavor profile.",
        imageUrl: "https://i.imgur.com/AR25QXr.jpg",
      },
    ]
  },
  {
    id: TabIDs.SANDWICH,
    label: "Sandwich & Toast",
    description: "Precision-sliced and baked for the perfect crumb structure.",
    products: [
      { id: 's1', name: "Premium White Toast", description: "Soft, uniform crumb. Ideal for hotels and breakfast service.", imageUrl: "https://i.imgur.com/btFFUt3.jpg" },
      { id: 's2', name: "Bran Toast", description: "High-fiber option without compromising on softness.", imageUrl: "https://i.imgur.com/btFFUt3.jpg" },
      { id: 's3', name: "Dinner Rolls", description: "Soft, buttery glazed rolls.", imageUrl: "https://i.imgur.com/FPmsRgM.jpg" },
      { id: 's4', name: "Artisan Ciabatta", description: "Open crumb structure with a crisp crust.", imageUrl: "https://i.imgur.com/mVWunoh.jpg" },
      { id: 's5', name: "Panini Loaf", description: "Pre-grilled style texture, ready for the press.", imageUrl: "https://i.imgur.com/HUX2zfy.jpg" },
    ]
  },
  {
    id: TabIDs.BURGERS,
    label: "Burgers & Specialty",
    description: "Engineered to hold the juiciest ingredients without falling apart.",
    products: [
      { id: 'b1', name: "Brioche Burger Bun", description: "Rich, egg-washed golden finish.", imageUrl: "https://i.imgur.com/u1yZTD5.jpg" },
      { id: 'b2', name: "Potato Bun", description: "Ultra-soft texture that absorbs sauces perfectly.", imageUrl: "https://i.imgur.com/Qp8sJAX.jpg" },
      { id: 'b3', name: "Bashka", description: "Traditional sweet bread with aromatic spices.", imageUrl: "https://i.imgur.com/0ovhXdW.jpg" },
      { id: 'b4', name: "Turkey Bread", description: "Specialty dense loaf for savory carvings.", imageUrl: "https://i.imgur.com/lkquHWS.jpg" },
      { id: 'b5', name: "Sohaira", description: "Regional specialty with a unique crust pattern.", imageUrl: "https://i.imgur.com/2WxXYtk.jpg" },
    ]
  },
  {
    id: TabIDs.RUSKS,
    label: "Rusks",
    description: "Double-baked for the perfect crunch. The ultimate tea companion.",
    products: [
      { id: 'r1', name: "Classic Rusk", description: "Golden, crisp, and lightly sweetened.", imageUrl: "https://i.imgur.com/rCdUiSu.jpg" },
      { id: 'r2', name: "Sweet Cake Rusk", description: "Dense, cake-like texture dried to perfection.", imageUrl: "https://i.imgur.com/tAb2HSc.jpg" },
      { id: 'r3', name: "Whole Wheat Rusk", description: "Healthy alternative with digestive benefits.", imageUrl: "https://i.imgur.com/cICAmlH.jpg" },
      { id: 'r4', name: "Rusk Crumbs", description: "Finely ground for industrial breading applications.", imageUrl: "https://i.imgur.com/aMavpDn.jpg" },
    ]
  },
  {
    id: TabIDs.HORECA,
    label: "Single Wrapped (Horeca)",
    description: "Hygiene-first solutions for hospitals, airlines, and luxury hospitality.",
    products: [
      { id: 'h1', name: "SW Sandwich Slice", description: "Individually sealed for maximum hygiene.", isHospitalSafe: true, imageUrl: "https://i.imgur.com/fmyTVJ1.jpg" },
      { id: 'h2', name: "SW Burger Bun", description: "Sealed fresh from the oven.", isHospitalSafe: true, imageUrl: "https://i.imgur.com/EhMdzav.jpg" },
      { id: 'h3', name: "SW Ciabatta", description: "Premium Italian style, sterile packaging.", isHospitalSafe: true, imageUrl: "https://i.imgur.com/99nLrX6.jpg" },
      { id: 'h4', name: "SW Toast Pack", description: "Two-slice pack for patient dining.", isHospitalSafe: true, imageUrl: "https://i.imgur.com/MeHd127.jpg" },
      { id: 'h5', name: "SW Tanoury", description: "Traditional flatbread, modern safety standards.", isHospitalSafe: true, imageUrl: "https://i.imgur.com/hwWeHoy.jpg" },
      { id: 'h6', name: "SW Saj", description: "Ultra-thin wrap, individually protected.", isHospitalSafe: true, imageUrl: `${IMAGE_BASE}23` },
    ]
  },
];