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
  legendary: "text-rarity-legendary border-rarity-legendary/30 bg-rarity-legendary/5",
};

const rarityLabels: Record<string, string> = {
  common: "Zwykły",
  rare: "Rzadki",
  epic: "Epicki",
  legendary: "Legendarny",
};

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const isLegendary = product.rarity === "legendary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      <button
        onClick={() => onSelect(product)}
        className={`w-full text-left bg-card pixel-border rounded-lg p-4 card-lift card-rarity-${product.rarity} cursor-pointer relative overflow-hidden`}
      >
        {/* Legendary shimmer overlay */}
        {isLegendary && <div className="absolute inset-0 shimmer-legendary rounded-lg pointer-events-none" />}

        {/* Popular badge */}
        {product.popular && (
          <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded font-pixel">
            HOT
          </div>
        )}

        {/* Image */}
        <div className="relative flex justify-center py-4 mb-3">
          <img
            src={imageMap[product.image]}
            alt={product.name}
            className="w-20 h-20 object-contain pixel-art transition-transform duration-200 group-hover:scale-110 img-hover-float"
          />
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Rarity */}
        <div className={`inline-flex items-center text-[10px] font-pixel px-2 py-0.5 rounded border mb-2 ${rarityBadgeStyles[product.rarity]}`}>
          {rarityLabels[product.rarity]}
        </div>

        {/* Info */}
        <h3 className="font-semibold text-foreground mb-1 text-sm">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">{product.description}</p>

        {/* Price */}
        <div className="flex items-center justify-between pt-1 border-t border-border/50">
          <span className="text-lg font-bold text-primary">{product.price.toFixed(2)} PLN</span>
          <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Kup →
          </span>
        </div>
      </button>
    </motion.div>
  );
}
