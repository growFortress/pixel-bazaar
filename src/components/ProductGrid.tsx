import { AnimatePresence, motion } from "framer-motion";
import { Product, products, categories } from "@/data/shopData";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  activeGameMode: string;
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ activeGameMode, onSelectProduct }: ProductGridProps) {
  const modeProducts = products.filter((p) => p.gameMode === activeGameMode);

  // Group by category, preserving category order from data
  const grouped = categories
    .map((cat) => ({
      ...cat,
      items: modeProducts.filter((p) => p.category === cat.id),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGameMode}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="space-y-10"
        >
          {grouped.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.icon}</span>
                <h2 className="font-pixel text-sm text-foreground tracking-wide uppercase">
                  {group.name}
                </h2>
                <div className="flex-1 h-px bg-border ml-2" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    onSelect={onSelectProduct}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {modeProducts.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="font-pixel text-sm">Brak produktów w tym trybie</p>
          <p className="text-xs mt-2">Sprawdź inne tryby gry</p>
        </div>
      )}
    </section>
  );
}
