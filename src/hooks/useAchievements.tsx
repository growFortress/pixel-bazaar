import { useState, useCallback, createContext, useContext, ReactNode } from "react";

interface Achievement {
  id: string;
  title: string;
  description: string;
}

interface AchievementContextType {
  achievements: Achievement[];
  showAchievement: (title: string, description: string) => void;
  dismissAchievement: (id: string) => void;
}

const AchievementContext = createContext<AchievementContextType | null>(null);

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const showAchievement = useCallback((title: string, description: string) => {
    const id = Date.now().toString();
    setAchievements((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setAchievements((prev) => prev.filter((a) => a.id !== id));
    }, 3000);
  }, []);

  const dismissAchievement = useCallback((id: string) => {
    setAchievements((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <AchievementContext.Provider value={{ achievements, showAchievement, dismissAchievement }}>
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const ctx = useContext(AchievementContext);
  if (!ctx) throw new Error("useAchievements must be used within AchievementProvider");
  return ctx;
}
