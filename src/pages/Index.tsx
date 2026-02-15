import { useState } from "react";
import { Product } from "@/data/shopData";
import HeroSection from "@/components/HeroSection";
import GameModeSelector from "@/components/GameModeSelector";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import PurchaseModal from "@/components/PurchaseModal";
import PlayerStatus from "@/components/PlayerStatus";
import AchievementToasts from "@/components/AchievementToasts";

const Index = () => {
  const [activeMode, setActiveMode] = useState("og-lucky-skyblock");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleModeChange = (id: string) => {
    setActiveMode(id);
    setActiveCategory("all");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <PlayerStatus />
      <AchievementToasts />

      <HeroSection />
      <GameModeSelector activeMode={activeMode} onModeChange={handleModeChange} />

      <div className="border-t border-border">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProductGrid
          activeCategory={activeCategory}
          activeGameMode={activeMode}
          onSelectProduct={setSelectedProduct}
        />
      </div>

      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>© 2026 Crafted.pl — Wszystkie prawa zastrzeżone</p>
        <p className="mt-1">Nie jesteśmy powiązani z Mojang Studios</p>
      </footer>
    </div>
  );
};

export default Index;
