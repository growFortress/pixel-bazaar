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

const rarityColors: Record<string, string> = {
  common: "text-muted-foreground border-border",
  rare: "text-blue-400 border-blue-500/30",
  epic: "text-purple-400 border-purple-500/30",
  legendary: "text-primary border-primary/30",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      <button
        onClick={() => onSelect(product)}
        className="w-full text-left bg-card pixel-border rounded p-4 card-lift cursor-pointer relative overflow-hidden"
      >
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
            className="w-20 h-20 object-contain pixel-art transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1"
          />
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Rarity */}
        <div className={`inline-flex items-center text-[10px] font-pixel px-2 py-0.5 rounded border mb-2 ${rarityColors[product.rarity]}`}>
          {rarityLabels[product.rarity]}
        </div>

        {/* Info */}
        <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{product.description}</p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{product.price.toFixed(2)} PLN</span>
          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            Kliknij →
          </span>
        </div>
      </button>
    </motion.div>
  );
}
