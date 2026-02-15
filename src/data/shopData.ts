export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  gameMode: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface GameMode {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const gameModes: GameMode[] = [
  { id: "og-lucky-skyblock", name: "OG Lucky SkyBlock", icon: "🏝️", color: "text-cyan-400" },
  { id: "survival-extreme", name: "Survival Extreme", icon: "🔥", color: "text-red-400" },
  { id: "survival-dzialki", name: "Survival Działki", icon: "🏡", color: "text-green-400" },
  { id: "oneblock", name: "OneBlock", icon: "🧊", color: "text-blue-400" },
  { id: "creative", name: "Creative", icon: "🎨", color: "text-purple-400" },
  { id: "box-pvp", name: "Box PvP", icon: "⚔️", color: "text-orange-400" },
];

export const categories: Category[] = [
  { id: "rangi", name: "Rangi", icon: "👑" },
  { id: "skrzynki", name: "Skrzynki", icon: "📦" },
  { id: "klucze", name: "Klucze", icon: "🔑" },
  { id: "itemy", name: "Itemy", icon: "⚔️" },
  { id: "cosmetyki", name: "Cosmetyki", icon: "✨" },
];

export const products: Product[] = [
  // OG Lucky SkyBlock
  { id: "vip-sky", name: "VIP", description: "Fly, /heal, kolorowy nick, dostęp do /is warp i więcej!", price: 19.99, category: "rangi", gameMode: "og-lucky-skyblock", image: "crown", rarity: "rare", popular: true },
  { id: "svip-sky", name: "SVIP", description: "Wszystko z VIP + /fix, efekty cząsteczkowe, 3 sethome.", price: 34.99, category: "rangi", gameMode: "og-lucky-skyblock", image: "crown", rarity: "epic" },
  { id: "mvp-sky", name: "MVP", description: "Najwyższa ranga! Wszystkie komendy, efekty i ekskluzywne itemy.", price: 59.99, category: "rangi", gameMode: "og-lucky-skyblock", image: "crown", rarity: "legendary", popular: true },
  { id: "crate-sky", name: "Lucky Skrzynka", description: "Skrzynka z losowymi nagrodami — szansa na lucky blocki!", price: 9.99, category: "skrzynki", gameMode: "og-lucky-skyblock", image: "chest", rarity: "rare", popular: true },
  { id: "crate-sky-leg", name: "Skrzynka Legendarna", description: "Gwarantowany legendarny drop z wyspy!", price: 24.99, category: "skrzynki", gameMode: "og-lucky-skyblock", image: "chest", rarity: "legendary" },
  { id: "key-sky", name: "Klucz Lucky", description: "Otwiera Lucky Skrzynkę.", price: 5.99, category: "klucze", gameMode: "og-lucky-skyblock", image: "key", rarity: "rare" },
  { id: "key-sky-leg", name: "Klucz Legendarny", description: "Otwiera Skrzynkę Legendarną.", price: 14.99, category: "klucze", gameMode: "og-lucky-skyblock", image: "key", rarity: "legendary" },
  { id: "fly-sky", name: "Permanent Fly", description: "Latanie na wyspie na zawsze.", price: 12.99, category: "itemy", gameMode: "og-lucky-skyblock", image: "sword", rarity: "epic" },

  // Survival Extreme
  { id: "vip-surv", name: "VIP Survival", description: "/heal, /feed, kolorowy nick, 5 sethome.", price: 14.99, category: "rangi", gameMode: "survival-extreme", image: "crown", rarity: "rare", popular: true },
  { id: "svip-surv", name: "SVIP Survival", description: "Wszystko z VIP + /fly w lobby, /enderchest, 10 sethome.", price: 29.99, category: "rangi", gameMode: "survival-extreme", image: "crown", rarity: "epic" },
  { id: "crate-surv", name: "Skrzynka Extreme", description: "Losowe nagrody — netherite, elytra, diamenty!", price: 7.99, category: "skrzynki", gameMode: "survival-extreme", image: "chest", rarity: "rare" },
  { id: "netherite-set", name: "Zestaw Netheritowy", description: "Pełen zestaw netheritowej zbroi z enchantami.", price: 19.99, category: "itemy", gameMode: "survival-extreme", image: "sword", rarity: "legendary", popular: true },
  { id: "god-pick-surv", name: "Kilof Boga", description: "Fortune III, Efficiency V, Unbreaking III, Mending.", price: 8.99, category: "itemy", gameMode: "survival-extreme", image: "sword", rarity: "epic" },

  // Survival Działki
  { id: "vip-dzialki", name: "VIP Działki", description: "Większa działka, /fly na działce, kolorowy nick.", price: 14.99, category: "rangi", gameMode: "survival-dzialki", image: "crown", rarity: "rare", popular: true },
  { id: "svip-dzialki", name: "SVIP Działki", description: "Podwójna działka + wszystko z VIP.", price: 29.99, category: "rangi", gameMode: "survival-dzialki", image: "crown", rarity: "epic" },
  { id: "plot-expand", name: "Rozszerzenie Działki", description: "Powiększ swoją działkę o 50%.", price: 9.99, category: "itemy", gameMode: "survival-dzialki", image: "key", rarity: "rare" },
  { id: "crate-dzialki", name: "Skrzynka Budowniczego", description: "Losowe bloki dekoracyjne i narzędzia.", price: 6.99, category: "skrzynki", gameMode: "survival-dzialki", image: "chest", rarity: "rare" },

  // OneBlock
  { id: "vip-oneblock", name: "VIP OneBlock", description: "/heal, szybsze fazy, kolorowy nick.", price: 14.99, category: "rangi", gameMode: "oneblock", image: "crown", rarity: "rare", popular: true },
  { id: "mvp-oneblock", name: "MVP OneBlock", description: "Wszystkie perki + ekskluzywne bloki w fazach.", price: 44.99, category: "rangi", gameMode: "oneblock", image: "crown", rarity: "legendary" },
  { id: "phase-skip", name: "Pomiń Fazę", description: "Natychmiastowe przejście do następnej fazy.", price: 4.99, category: "itemy", gameMode: "oneblock", image: "key", rarity: "common" },
  { id: "crate-oneblock", name: "Skrzynka OneBlock", description: "Losowe nagrody z zaawansowanych faz.", price: 8.99, category: "skrzynki", gameMode: "oneblock", image: "chest", rarity: "epic" },

  // Creative
  { id: "vip-creative", name: "VIP Creative", description: "WorldEdit, większa działka, /fly.", price: 9.99, category: "rangi", gameMode: "creative", image: "crown", rarity: "rare", popular: true },
  { id: "mvp-creative", name: "MVP Creative", description: "Nieograniczona działka, VoxelSniper, Arceon.", price: 29.99, category: "rangi", gameMode: "creative", image: "crown", rarity: "legendary" },
  { id: "plot-mega", name: "Mega Działka", description: "256x256 działka — buduj bez limitów.", price: 14.99, category: "itemy", gameMode: "creative", image: "key", rarity: "epic" },
  { id: "particle-fire", name: "Aura Ognia", description: "Efekt cząsteczkowy ognia wokół Twojej postaci.", price: 7.99, category: "cosmetyki", gameMode: "creative", image: "key", rarity: "rare" },

  // Box PvP
  { id: "vip-pvp", name: "VIP PvP", description: "Kit Diamentowy, /heal w walce co 60s, kolorowy nick.", price: 14.99, category: "rangi", gameMode: "box-pvp", image: "crown", rarity: "rare", popular: true },
  { id: "mvp-pvp", name: "MVP PvP", description: "Kit Netheritowy, /heal co 30s, efekty killstreaka.", price: 39.99, category: "rangi", gameMode: "box-pvp", image: "crown", rarity: "legendary", popular: true },
  { id: "sword-god", name: "Miecz Boga", description: "Sharpness V, Fire Aspect II, Unbreaking III.", price: 15.99, category: "itemy", gameMode: "box-pvp", image: "sword", rarity: "legendary" },
  { id: "crate-pvp", name: "Skrzynka PvP", description: "Losowa broń lub zbroja z enchantami.", price: 7.99, category: "skrzynki", gameMode: "box-pvp", image: "chest", rarity: "rare" },
  { id: "trail-stars", name: "Ślad Gwiazd", description: "Zostawiaj ślad gwiazd za sobą w walce.", price: 6.99, category: "cosmetyki", gameMode: "box-pvp", image: "key", rarity: "rare" },
];
