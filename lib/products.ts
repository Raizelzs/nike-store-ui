export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  badge: "NEW" | "HOT";
  colors: string[];
  description: string;
  image: string;
};

const u = "https://images.unsplash.com";

export const products: Product[] = [
  {
    id: "air-zephyr-01",
    name: "Air Zephyr 01",
    category: "Running",
    price: 189,
    oldPrice: 239,
    badge: "NEW",
    colors: ["#ffffff", "#1e1e1e", "#e8ff00"],
    description: "Feather-light knit build for explosive acceleration.",
    image: `${u}/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80`
  },
  {
    id: "street-vortex",
    name: "Street Vortex",
    category: "Lifestyle",
    price: 169,
    oldPrice: 219,
    badge: "HOT",
    colors: ["#ff3c00", "#0f0f0f", "#9ca3af"],
    description: "High-stack cushioning tuned for all-day city wear.",
    image: `${u}/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80`
  },
  {
    id: "phantom-edge",
    name: "Phantom Edge",
    category: "Training",
    price: 199,
    oldPrice: 249,
    badge: "NEW",
    colors: ["#111111", "#f8f4ef", "#60a5fa"],
    description: "Adaptive support cage that flexes with each move.",
    image: `${u}/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80`
  },
  {
    id: "eclipse-carbon",
    name: "Eclipse Carbon",
    category: "Performance",
    price: 259,
    oldPrice: 299,
    badge: "HOT",
    colors: ["#0b0b0b", "#e8ff00", "#ef4444"],
    description: "Carbon-infused plate for elite race-day propulsion.",
    image: `${u}/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80`
  },
  {
    id: "urban-glide",
    name: "Urban Glide",
    category: "Casual",
    price: 149,
    oldPrice: 199,
    badge: "NEW",
    colors: ["#f8f4ef", "#475569", "#16a34a"],
    description: "Premium suede upper with responsive foam core.",
    image: `${u}/photo-1465453869711-7e174808ace9?auto=format&fit=crop&w=1200&q=80`
  },
  {
    id: "aero-shift",
    name: "Aero Shift",
    category: "Running",
    price: 209,
    oldPrice: 269,
    badge: "HOT",
    colors: ["#f97316", "#020617", "#22d3ee"],
    description: "Engineered mesh and heel lock for marathon rhythm.",
    image: `${u}/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80`
  }
];
