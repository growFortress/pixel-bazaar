import { motion } from "framer-motion";
import { gameModes } from "@/data/shopData";

interface GameModeSelectorProps {
  activeMode: string;
  onModeChange: (id: string) => void;
}

export default function GameModeSelector({ activeMode, onModeChange }: GameModeSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xs font-pixel text-muted-foreground mb-4 tracking-wider">WYBIERZ TRYB</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {gameModes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            className={`relative group flex flex-col items-center gap-2 px-3 py-4 rounded-lg transition-all ${
              activeMode === mode.id
                ? "bg-card pixel-border-gold"
                : "bg-card pixel-border hover:bg-surface-hover"
            }`}
          >
            <span className="text-2xl">{mode.icon}</span>
            <span className={`text-[10px] font-pixel leading-tight text-center ${
              activeMode === mode.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
            }`}>
              {mode.name}
            </span>
            {activeMode === mode.id && (
              <motion.div
                layoutId="active-mode-glow"
                className="absolute inset-0 rounded-lg glow-gold opacity-30 pointer-events-none"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
