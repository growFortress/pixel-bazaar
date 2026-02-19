import { useState, useEffect } from "react";
import { Product } from "@/data/shopData";
import HeroSection from "@/components/HeroSection";
import GameModeSelector from "@/components/GameModeSelector";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import PurchaseModal from "@/components/PurchaseModal";
import PlayerStatus from "@/components/PlayerStatus";
import AchievementToasts from "@/components/AchievementToasts";
import GameModePicker from "@/components/GameModePicker";

const STORAGE_KEY = "crafted-preferred-mode";

const Index = () => {
  const [activeMode, setActiveMode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "";
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showPicker, setShowPicker] = useState(() => {
    return !localStorage.getItem(STORAGE_KEY);
  });

  const handleModeChange = (id: string) => {
    setActiveMode(id);
    setActiveCategory("all");
    localStorage.setItem(STORAGE_KEY, id);
  };

  const handlePickerSelect = (id: string) => {
    handleModeChange(id);
    setShowPicker(false);
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

      {showPicker && <GameModePicker onSelect={handlePickerSelect} />}

      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-8">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-pixel text-sm text-primary mb-3">CRAFTED.PL</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Najlepszy serwer Minecraft w Polsce. Dołącz do naszej społeczności!
              </p>
              <p className="text-sm font-mono text-foreground mt-2">crafted.pl</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Informacje</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Regulamin</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Polityka prywatności</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kontakt z administracją</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Dołącz do nas</h4>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  💬 Discord
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  🎵 TikTok
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  📺 YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© 2026 Crafted.pl — Wszystkie prawa zastrzeżone</p>
            <p>Nie jesteśmy powiązani z Mojang Studios</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
