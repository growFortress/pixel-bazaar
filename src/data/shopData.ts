export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "rangi", name: "Rangi", icon: "👑" },
  { id: "skrzynki", name: "Skrzynki", icon: "📦" },
  { id: "klucze", name: "Klucze", icon: "🔑" },
  { id: "itemy", name: "Itemy", icon: "⚔️" },
  { id: "cosmetyki", name: "Cosmetyki", icon: "✨" },
];

export const products: Product[] = [
  // Rangi
  { id: "vip", name: "VIP", description: "Podstawowa ranga z unikalnymi perkami. Fly, /heal, kolorowy nick i więcej!", price: 19.99, category: "rangi", image: "crown", rarity: "rare", popular: true },
  { id: "svip", name: "SVIP", description: "Rozszerzona ranga VIP z dodatkowymi komendami i efektami.", price: 34.99, category: "rangi", image: "crown", rarity: "epic" },
  { id: "mvp", name: "MVP", description: "Najwyższa ranga! Wszystkie komendy, efekty i ekskluzywne itemy.", price: 59.99, category: "rangi", image: "crown", rarity: "legendary", popular: true },
  
  // Skrzynki
  { id: "crate-common", name: "Skrzynka Zwykła", description: "Podstawowa skrzynka z losowymi nagrodami.", price: 4.99, category: "skrzynki", image: "chest", rarity: "common" },
  { id: "crate-rare", name: "Skrzynka Rzadka", description: "Rzadka skrzynka z lepszymi nagrodami i większą szansą na legendarne itemy.", price: 9.99, category: "skrzynki", image: "chest", rarity: "rare", popular: true },
  { id: "crate-legendary", name: "Skrzynka Legendarna", description: "Najlepsza skrzynka! Gwarantowany legendarny przedmiot.", price: 24.99, category: "skrzynki", image: "chest", rarity: "legendary" },
  
  // Klucze
  { id: "key-common", name: "Klucz Zwykły", description: "Otwiera Skrzynkę Zwykłą.", price: 2.99, category: "klucze", image: "key", rarity: "common" },
  { id: "key-rare", name: "Klucz Rzadki", description: "Otwiera Skrzynkę Rzadką.", price: 5.99, category: "klucze", image: "key", rarity: "rare" },
  { id: "key-legendary", name: "Klucz Legendarny", description: "Otwiera Skrzynkę Legendarną. Gwarantowany epicki drop!", price: 14.99, category: "klucze", image: "key", rarity: "legendary" },

  // Itemy
  { id: "diamond-set", name: "Zestaw Diamentowy", description: "Pełen zestaw diamentowej zbroi z enchantami.", price: 12.99, category: "itemy", image: "sword", rarity: "epic" },
  { id: "netherite-sword", name: "Miecz Netheritowy", description: "Najsilniejszy miecz na serwerze z unikalnymi enchantami.", price: 15.99, category: "itemy", image: "sword", rarity: "legendary", popular: true },
  { id: "god-pickaxe", name: "Kilof Boga", description: "Kilof z Fortune III, Efficiency V i Unbreaking III.", price: 8.99, category: "itemy", image: "sword", rarity: "epic" },

  // Cosmetyki
  { id: "particle-fire", name: "Aura Ognia", description: "Otaczający Cię efekt cząsteczkowy ognia.", price: 7.99, category: "cosmetyki", image: "key", rarity: "rare" },
  { id: "trail-stars", name: "Ślad Gwiazd", description: "Zostawiaj za sobą ślad gwiazd przy chodzeniu.", price: 6.99, category: "cosmetyki", image: "key", rarity: "rare" },
  { id: "hat-dragon", name: "Czapka Smoka", description: "Unikalna czapka w kształcie głowy smoka.", price: 11.99, category: "cosmetyki", image: "crown", rarity: "epic" },
];
