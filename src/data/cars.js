// All vehicles, prices, specifications, and availability are DEMO DATA.
// Replace them with the rental business's real inventory before publishing.
export const cars = [
  {
    slug: "renault-clio", name: "Renault Clio", trim: "Urban explorer", year: 2024,
    category: "City", price: 260, seats: 5, bags: 2, doors: 5, transmission: "Manual", fuel: "Petrol",
    badge: "MOST POPULAR", tone: "clay", accent: "#d9d9d5",
    photo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/clio.svg", description: "Small footprint, big freedom. A nimble choice for winding streets, local markets, and unplanned detours.",
    features: ["Air conditioning", "Bluetooth audio", "USB charging", "Cruise control"],
  },
  {
    slug: "dacia-duster", name: "Dacia Duster", trim: "Take the long way", year: 2024,
    category: "SUV", price: 430, seats: 5, bags: 4, doors: 5, transmission: "Manual", fuel: "Diesel",
    badge: "ADVENTURE PICK", tone: "sage", accent: "#aeb7a9",
    photo: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/duster.svg", description: "For the mountain roads, tucked-away beaches, and everything you did not put on the itinerary.",
    features: ["Air conditioning", "Rear parking sensors", "Bluetooth audio", "Large luggage space"],
  },
  {
    slug: "peugeot-208", name: "Peugeot 208", trim: "Little city, big energy", year: 2025,
    category: "City", price: 290, seats: 5, bags: 2, doors: 5, transmission: "Automatic", fuel: "Petrol",
    badge: "EASY TO DRIVE", tone: "sand", accent: "#c4a68c",
    photo: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/peugeot.svg", description: "Effortless around town, comfortable out of it. An easygoing companion for everyday escapes.",
    features: ["Apple CarPlay / Android Auto", "Air conditioning", "Rear camera", "USB charging"],
  },
  {
    slug: "hyundai-tucson", name: "Hyundai Tucson", trim: "Room for the whole story", year: 2024,
    category: "SUV", price: 600, seats: 5, bags: 4, doors: 5, transmission: "Automatic", fuel: "Diesel",
    badge: "EXTRA COMFORT", tone: "slate", accent: "#7c8f95",
    photo: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/tucson.svg", description: "A relaxed ride with the comfort, space, and confidence to make every mile count.",
    features: ["Dual-zone climate", "Rear camera", "Smartphone connectivity", "Parking sensors"],
  },
  {
    slug: "volkswagen-troc", name: "Volkswagen T-Roc", trim: "Made for moving", year: 2024,
    category: "SUV", price: 540, seats: 5, bags: 3, doors: 5, transmission: "Automatic", fuel: "Petrol",
    badge: "VERSATILE", tone: "clay", accent: "#c9c3b7",
    photo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/troc.svg", description: "Compact enough for the city, capable enough for the coastline. A confident all-rounder.",
    features: ["Apple CarPlay / Android Auto", "Cruise control", "Air conditioning", "Parking sensors"],
  },
  {
    slug: "bmw-3-series", name: "BMW 3 Series", trim: "Arrive differently", year: 2024,
    category: "Premium", price: 900, seats: 5, bags: 3, doors: 4, transmission: "Automatic", fuel: "Diesel",
    badge: "PREMIUM", tone: "slate", accent: "#6f7981",
    photo: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/bmw.svg", description: "For a more considered arrival. Crisp performance meets quiet, understated luxury.",
    features: ["Premium interior", "Navigation", "Dual-zone climate", "Parking camera"],
  },
  {
    slug: "toyota-yaris", name: "Toyota Yaris", trim: "City-ready freedom", year: 2024,
    category: "City", price: 280, seats: 5, bags: 2, doors: 5, transmission: "Automatic", fuel: "Hybrid",
    badge: "SMART CHOICE", tone: "sage", accent: "#b8c2ae",
    photo: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/yaris.svg", description: "Simple, efficient, and ready to go. The no-fuss way to see a little more of the Rif.",
    features: ["Air conditioning", "Bluetooth audio", "Reverse camera", "Hybrid efficiency"],
  },
  {
    slug: "mercedes-c-class", name: "Mercedes C-Class", trim: "Every journey, elevated", year: 2024,
    category: "Premium", price: 1050, seats: 5, bags: 3, doors: 4, transmission: "Automatic", fuel: "Diesel",
    badge: "SIGNATURE", tone: "sand", accent: "#cfc9b9",
    photo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=85&auto=format&fit=crop",
    fallback: "/cars/mercedes.svg", description: "Refined comfort with an unmistakable presence, for those who enjoy the journey as much as the destination.",
    features: ["Premium interior", "Navigation", "Climate control", "Parking camera"],
  },
];

export const categories = ["All cars", "City", "SUV", "Premium"];
export const pickupLocations = ["Al Hoceima city centre", "Cherif Al Idrissi Airport", "Ajdir", "Imzouren"];
export const getCar = (slug) => cars.find((car) => car.slug === slug);
export const money = (value) => `${new Intl.NumberFormat("en-US").format(value)} MAD`;

export function daysBetween(start, end) {
  if (!start || !end) return 0;
  // UTC calculations prevent daylight-saving transitions from adding an extra day.
  const first = Date.parse(`${start}T00:00:00Z`);
  const last = Date.parse(`${end}T00:00:00Z`);
  if (!Number.isFinite(first) || !Number.isFinite(last)) return 0;
  return Math.max(0, Math.round((last - first) / 86_400_000));
}

export function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
