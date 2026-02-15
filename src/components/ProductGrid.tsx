import { AnimatePresence } from "framer-motion";
import { Product, products } from "@/data/shopData";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  activeCategory: string;
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ activeCategory, onSelectProduct }: ProductGridProps) {
  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onSelect={onSelectProduct}
            />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="font-pixel text-sm">Brak produktów</p>
        </div>
      )}
    </section>
  );
}
