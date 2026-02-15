import { useAchievements } from "@/hooks/useAchievements";
import { AnimatePresence, motion } from "framer-motion";

export default function AchievementToasts() {
  const { achievements, dismissAchievement } = useAchievements();

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {achievements.map((a) => (
          <motion.div
            key={a.id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            onClick={() => dismissAchievement(a.id)}
            className="pointer-events-auto cursor-pointer bg-card pixel-border rounded p-3 flex items-center gap-3 min-w-[280px] glow-gold"
          >
            <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center text-lg">
              🏆
            </div>
            <div>
              <p className="font-pixel text-[10px] text-primary leading-tight">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{a.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
