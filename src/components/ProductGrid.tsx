import { AnimatePresence, motion } from "framer-motion";
import { Product, products } from "@/data/shopData";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  activeCategory: string;
  activeGameMode: string;
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ activeCategory, activeGameMode, onSelectProduct }: ProductGridProps) {
  const filtered = products.filter((p) => {
    const modeMatch = p.gameMode === activeGameMode;
    const catMatch = activeCategory === "all" || p.category === activeCategory;
    return modeMatch && catMatch;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeGameMode}-${activeCategory}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onSelect={onSelectProduct}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="font-pixel text-sm">Brak produktów w tej kategorii</p>
          <p className="text-xs mt-2">Sprawdź inne kategorie lub tryby gry</p>
        </div>
      )}
    </section>
  );
}
