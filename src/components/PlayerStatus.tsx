import { useState } from "react";
import { motion } from "framer-motion";

export default function PlayerStatus() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-card pixel-border rounded px-3 py-2 hover:bg-surface-hover transition-colors"
      >
        {/* Pixel avatar placeholder */}
        <div className="w-6 h-6 bg-secondary rounded pixel-art flex items-center justify-center text-xs">
          👤
        </div>
        <span className="text-sm font-medium text-foreground hidden sm:block">Gracz</span>
        <span className="text-xs text-primary font-bold">0.00 PLN</span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 top-full mt-2 bg-card pixel-border rounded p-3 min-w-[200px]"
        >
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Saldo:</span>
              <span className="text-primary font-bold">0.00 PLN</span>
            </div>
            <div className="border-t border-border my-2" />
            <button className="w-full text-left px-2 py-1 rounded hover:bg-surface-hover text-foreground transition-colors text-xs">
              📦 Moje zakupy
            </button>
            <button className="w-full text-left px-2 py-1 rounded hover:bg-surface-hover text-foreground transition-colors text-xs">
              💰 Doładuj konto
            </button>
            <button className="w-full text-left px-2 py-1 rounded hover:bg-surface-hover text-muted-foreground transition-colors text-xs">
              🚪 Wyloguj
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
