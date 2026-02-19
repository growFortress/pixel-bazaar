import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/shopData";
import { useAchievements } from "@/hooks/useAchievements";
import chestImg from "@/assets/chest.png";
import swordImg from "@/assets/sword.png";
import crownImg from "@/assets/crown.png";
import keyImg from "@/assets/key.png";

const imageMap: Record<string, string> = {
  chest: chestImg,
  sword: swordImg,
  crown: crownImg,
  key: keyImg,
};

const rarityColors: Record<string, string> = {
  common: "text-rarity-common",
  rare: "text-rarity-rare",
  epic: "text-rarity-epic",
  legendary: "text-rarity-legendary",
};

const rarityLabels: Record<string, string> = {
  common: "Zwykły",
  rare: "Rzadki",
  epic: "Epicki",
  legendary: "Legendarny",
};

interface PurchaseModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function PurchaseModal({ product, onClose }: PurchaseModalProps) {
  const [nick, setNick] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [particles, setParticles] = useState<{ id: number; tx: number; ty: number }[]>([]);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { showAchievement } = useAchievements();

  const spawnParticles = useCallback(() => {
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      tx: (Math.random() - 0.5) * 120,
      ty: -(Math.random() * 80 + 20),
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 700);
  }, []);

  const handlePurchase = () => {
    if (!nick.trim()) return;
    spawnParticles();
    showAchievement("Dodano do koszyka!", `${product?.name} × ${quantity}`);
    setTimeout(onClose, 600);
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          key="modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card pixel-border rounded-lg w-full max-w-lg overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <h2 className="font-pixel text-sm text-primary">{product.name}</h2>
              <span className={`text-[10px] font-pixel ${rarityColors[product.rarity]}`}>
                [{rarityLabels[product.rarity]}]
              </span>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-xl leading-none">
              ✕
            </button>
          </div>

          <div className="p-6 flex flex-col sm:flex-row gap-6">
            {/* Left: Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <motion.img
                src={imageMap[product.image]}
                alt={product.name}
                className="w-32 h-32 object-contain pixel-art"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Right: Details */}
            <div className="flex-1 space-y-4">
              <p className="text-sm text-muted-foreground">{product.description}</p>

              {/* Bonuses list */}
              {product.bonuses && product.bonuses.length > 0 && (
                <div className="bg-muted/50 rounded-lg p-3 space-y-1.5">
                  <span className="text-[10px] font-pixel text-primary tracking-wider">ZAWARTOŚĆ</span>
                  <ul className="space-y-1">
                    {product.bonuses.map((bonus, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                        <span className="text-primary mt-0.5 text-[10px]">✦</span>
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nick input */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Nick gracza</label>
                <div className="relative">
                  <input
                    type="text"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    placeholder="Wpisz swój nick..."
                    className="w-full bg-background border-2 border-border text-foreground px-3 py-2 text-sm rounded focus:border-primary focus:outline-none transition-colors font-mono"
                  />
                  {nick.length >= 3 && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald font-pixel text-xs">
                      ✓
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Ilość</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 bg-secondary text-secondary-foreground rounded flex items-center justify-center hover:bg-surface-hover transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 bg-secondary text-secondary-foreground rounded flex items-center justify-center hover:bg-surface-hover transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total & Buy */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-xs text-muted-foreground">Suma: </span>
                  <span className="text-xl font-bold text-primary">
                    {(product.price * quantity).toFixed(2)} PLN
                  </span>
                </div>
              </div>

              <div className="relative">
                <button
                  ref={btnRef}
                  onClick={handlePurchase}
                  disabled={nick.length < 3}
                  className="w-full py-3 bg-primary text-primary-foreground font-bold rounded pixel-border-gold text-sm hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  KUP TERAZ
                </button>

                {/* Particles */}
                {particles.map((p) => (
                  <span
                    key={p.id}
                    className="absolute left-1/2 top-1/2 w-2 h-2 bg-primary rounded-sm particle pointer-events-none"
                    style={{ "--tx": `${p.tx}px`, "--ty": `${p.ty}px` } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
