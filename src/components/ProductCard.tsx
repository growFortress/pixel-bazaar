import { motion } from "framer-motion";
import { Product } from "@/data/shopData";
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

const rarityBadgeStyles: Record<string, string> = {
  common: "text-rarity-common border-rarity-common/30 bg-rarity-common/5",
  rare: "text-rarity-rare border-rarity-rare/30 bg-rarity-rare/5",
  epic: "text-rarity-epic border-rarity-epic/30 bg-rarity-epic/5",
  legendary: "text-rarity-legendary border-rarity-legendary/30 bg-rarity-legendary/10",
};

const rarityLabels: Record<string, string> = {
  common: "Zwykły",
  rare: "Rzadki",
  epic: "Epicki",
  legendary: "Legendarny",
};

const rarityImageBg: Record<string, string> = {
  common: "bg-gradient-to-b from-muted/20 to-muted/40",
  rare: "bg-gradient-to-b from-rarity-rare/5 to-rarity-rare/10",
  epic: "bg-gradient-to-b from-rarity-epic/5 to-rarity-epic/10",
  legendary: "bg-gradient-to-b from-amber-50 to-rarity-legendary/10",
};

const rarityRingAccent: Record<string, string> = {
  common: "",
  rare: "ring-1 ring-rarity-rare/10",
  epic: "ring-1 ring-rarity-epic/10",
  legendary: "ring-1 ring-rarity-legendary/15",
};

const badgeConfig: Record<string, { label: string; className: string }> = {
  hot: { label: "🔥 HOT", className: "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/20" },
  new: { label: "✨ NOWE", className: "bg-rarity-epic text-primary-foreground shadow-lg shadow-rarity-epic/20" },
  sale: { label: "💰 SALE", className: "bg-emerald text-primary-foreground shadow-lg shadow-emerald/20" },
};

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const isLegendary = product.rarity === "legendary";
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <button
        onClick={() => onSelect(product)}
        className={`w-full text-left bg-card rounded-xl p-5 card-lift card-rarity-${product.rarity} cursor-pointer relative overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-300`}
      >
        {/* Legendary shimmer overlay */}
        {isLegendary && <div className="absolute inset-0 shimmer-legendary rounded-xl pointer-events-none" />}

        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-md font-pixel tracking-wide ${badge.className}`}>
            {badge.label}
          </div>
        )}

        {/* Image — premium card-style with generous padding */}
        <div className={`relative flex justify-center items-center py-8 mb-4 rounded-xl ${rarityImageBg[product.rarity]} ${rarityRingAccent[product.rarity]}`}>
          <img
            src={imageMap[product.image]}
            alt={product.name}
            className="w-36 h-36 object-contain pixel-art transition-transform duration-300 group-hover:scale-110 img-hover-float drop-shadow-xl mix-blend-screen contrast-150 saturate-200 brightness-125"
          />
          {/* Subtle radial glow behind image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Rarity + Name row */}
        <div className="flex items-center gap-2 mb-2">
          <div className={`text-[9px] font-pixel px-2 py-0.5 rounded-md border uppercase tracking-widest ${rarityBadgeStyles[product.rarity]}`}>
            {rarityLabels[product.rarity]}
          </div>
        </div>

        <h3 className="font-semibold text-foreground text-[15px] leading-snug mb-1.5 tracking-tight">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Top bonuses preview */}
        {product.bonuses && product.bonuses.length > 0 && (
          <div className="mb-4 space-y-1.5 pl-0.5">
            {product.bonuses.slice(0, 2).map((bonus, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-foreground/75">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                <span className="truncate">{bonus}</span>
              </div>
            ))}
            {product.bonuses.length > 2 && (
              <span className="text-[10px] text-muted-foreground pl-3">+{product.bonuses.length - 2} więcej...</span>
            )}
          </div>
        )}

        {/* Price footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/40">
          <span className="text-lg font-bold text-primary tracking-tight">{product.price.toFixed(2)} PLN</span>
          <span className="text-[11px] font-medium text-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
            Kup teraz →
          </span>
        </div>
      </button>
    </motion.div>
  );
}
