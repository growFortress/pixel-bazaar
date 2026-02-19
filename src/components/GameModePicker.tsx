import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gameModes } from "@/data/shopData";

const modeGradients: Record<string, string> = {
  "og-lucky-skyblock": "from-cyan-400/20 to-cyan-500/5",
  "survival-extreme": "from-red-400/20 to-orange-500/5",
  "survival-dzialki": "from-green-400/20 to-emerald-500/5",
  "oneblock": "from-blue-400/20 to-indigo-500/5",
  "creative": "from-purple-400/20 to-fuchsia-500/5",
  "box-pvp": "from-orange-400/20 to-amber-500/5",
};

const modeAccents: Record<string, string> = {
  "og-lucky-skyblock": "border-cyan-400/50 shadow-cyan-400/20",
  "survival-extreme": "border-red-400/50 shadow-red-400/20",
  "survival-dzialki": "border-green-400/50 shadow-green-400/20",
  "oneblock": "border-blue-400/50 shadow-blue-400/20",
  "creative": "border-purple-400/50 shadow-purple-400/20",
  "box-pvp": "border-orange-400/50 shadow-orange-400/20",
};

const modeTextColors: Record<string, string> = {
  "og-lucky-skyblock": "text-cyan-600",
  "survival-extreme": "text-red-500",
  "survival-dzialki": "text-green-600",
  "oneblock": "text-blue-500",
  "creative": "text-purple-500",
  "box-pvp": "text-orange-500",
};

interface GameModePickerProps {
  onSelect: (modeId: string) => void;
}

export default function GameModePicker({ onSelect }: GameModePickerProps) {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        key="picker-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-lg flex items-center justify-center p-4"
      >
        <motion.div
          key="picker-modal"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
          className="bg-card pixel-border rounded-xl w-full max-w-md overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 pb-2 text-center">
            <motion.span
              className="text-4xl block mb-3"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚔️
            </motion.span>
            <h2 className="font-pixel text-sm text-primary mb-1">NA JAKIM TRYBIE GRASZ?</h2>
            <p className="text-xs text-muted-foreground">
              Wybierz swój główny tryb — zawsze możesz go zmienić
            </p>
          </div>

          {/* Mode grid */}
          <div className="p-5 grid grid-cols-2 gap-2.5">
            {gameModes.map((mode, i) => {
              const isHovered = hoveredMode === mode.id;
              return (
                <motion.button
                  key={mode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", bounce: 0.3 }}
                  onClick={() => onSelect(mode.id)}
                  onMouseEnter={() => setHoveredMode(mode.id)}
                  onMouseLeave={() => setHoveredMode(null)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-lg border-2 transition-all duration-200 cursor-pointer text-left ${
                    isHovered
                      ? `bg-gradient-to-r ${modeGradients[mode.id]} ${modeAccents[mode.id]} shadow-md`
                      : "bg-card border-border hover:border-muted-foreground/20"
                  }`}
                >
                  <span className="text-2xl">{mode.icon}</span>
                  <span
                    className={`text-[10px] font-pixel leading-tight transition-colors duration-200 ${
                      isHovered ? modeTextColors[mode.id] : "text-foreground"
                    }`}
                  >
                    {mode.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="px-5 pb-5">
            <p className="text-[10px] text-muted-foreground text-center">
              💡 Pokażemy Ci produkty dostępne na wybranym trybie
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
