import { motion } from "framer-motion";
import { categories } from "@/data/shopData";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
          <TabButton
            id="all"
            icon="🏪"
            label="Wszystko"
            active={activeCategory === "all"}
            onClick={() => onCategoryChange("all")}
          />
          {categories.map((cat) => (
            <TabButton
              key={cat.id}
              id={cat.id}
              icon={cat.icon}
              label={cat.name}
              active={activeCategory === cat.id}
              onClick={() => onCategoryChange(cat.id)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}

function TabButton({
  id,
  icon,
  label,
  active,
  onClick,
}: {
  id: string;
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-4 py-2 rounded text-sm font-medium whitespace-nowrap transition-colors ${
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
      {active && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-0 bg-primary/10 rounded border border-primary/20"
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        />
      )}
    </button>
  );
}
