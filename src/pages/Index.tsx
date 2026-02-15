import { useState } from "react";
import { Product } from "@/data/shopData";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import PurchaseModal from "@/components/PurchaseModal";
import PlayerStatus from "@/components/PlayerStatus";
import AchievementToasts from "@/components/AchievementToasts";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <PlayerStatus />
      <AchievementToasts />

      <HeroSection />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductGrid
        activeCategory={activeCategory}
        onSelectProduct={setSelectedProduct}
      />

      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>© 2026 MyServer.pl — Wszystkie prawa zastrzeżone</p>
        <p className="mt-1">Nie jesteśmy powiązani z Mojang Studios</p>
      </footer>
    </div>
  );
};

export default Index;
