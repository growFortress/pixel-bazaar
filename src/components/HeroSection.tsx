import { motion } from "framer-motion";
import floatingIsland from "@/assets/floating-island.png";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden noise-overlay py-4">
      {/* Floating island background */}
      <img
        src={floatingIsland}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-10 blur-sm animate-float-slow pointer-events-none select-none"
      />

      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl text-primary text-shadow-pixel tracking-wider mb-2 leading-tight">
            CRAFTED.PL
          </h1>
          <p className="font-pixel text-xs sm:text-sm text-muted-foreground tracking-widest">
            ITEM SHOP
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mt-3"
        >
          Ulepsz swoją rozgrywkę na najlepszym serwerze
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span>127 online</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <span className="font-mono text-foreground">crafted.pl</span>
        </motion.div>
      </div>
    </section>
  );
}
