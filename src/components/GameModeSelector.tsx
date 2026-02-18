import { motion } from "framer-motion";
import { gameModes } from "@/data/shopData";

interface GameModeSelectorProps {
  activeMode: string;
  onModeChange: (id: string) => void;
}

const modeGradients: Record<string, string> = {
  "og-lucky-skyblock": "from-cyan-400/15 to-cyan-500/5",
  "survival-extreme": "from-red-400/15 to-orange-500/5",
  "survival-dzialki": "from-green-400/15 to-emerald-500/5",
  "oneblock": "from-blue-400/15 to-indigo-500/5",
  "creative": "from-purple-400/15 to-fuchsia-500/5",
  "box-pvp": "from-orange-400/15 to-amber-500/5",
};

const modeAccents: Record<string, string> = {
  "og-lucky-skyblock": "shadow-cyan-400/25 border-cyan-400/40",
  "survival-extreme": "shadow-red-400/25 border-red-400/40",
  "survival-dzialki": "shadow-green-400/25 border-green-400/40",
  "oneblock": "shadow-blue-400/25 border-blue-400/40",
  "creative": "shadow-purple-400/25 border-purple-400/40",
  "box-pvp": "shadow-orange-400/25 border-orange-400/40",
};

const modeTextActive: Record<string, string> = {
  "og-lucky-skyblock": "text-cyan-600",
  "survival-extreme": "text-red-500",
  "survival-dzialki": "text-green-600",
  "oneblock": "text-blue-500",
  "creative": "text-purple-500",
  "box-pvp": "text-orange-500",
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, bounce: 0.3, duration: 0.5 } },
};

export default function GameModeSelector({ activeMode, onModeChange }: GameModeSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-5">
      <h2 className="text-[10px] font-pixel text-muted-foreground mb-3 tracking-[0.2em] uppercase">
        Wybierz tryb
      </h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {gameModes.map((mode) => {
          const isActive = activeMode === mode.id;
          return (
            <motion.button
              key={mode.id}
              variants={item}
              onClick={() => onModeChange(mode.id)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex flex-col items-center gap-1.5 px-3 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                isActive
                  ? `bg-gradient-to-b ${modeGradients[mode.id]} border-opacity-100 ${modeAccents[mode.id]} shadow-md`
                  : "bg-card border-border hover:border-muted-foreground/20 hover:shadow-sm"
              }`}
            >
              {/* Icon with bounce on active */}
              <motion.span
                className="text-2xl leading-none"
                animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {mode.icon}
              </motion.span>

              <span
                className={`text-[10px] font-pixel leading-tight text-center transition-colors duration-200 ${
                  isActive
                    ? modeTextActive[mode.id]
                    : "text-muted-foreground"
                }`}
              >
                {mode.name}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  layoutId="mode-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current"
                  style={{ color: "inherit" }}
                  transition={{ type: "spring", bounce: 0.35, duration: 0.4 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
