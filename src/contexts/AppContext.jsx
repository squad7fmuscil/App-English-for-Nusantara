import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("learning-progress");
    return saved ? JSON.parse(saved) : {};
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("app-settings");
    return saved
      ? JSON.parse(saved)
      : {
          soundEnabled: true,
          fontSize: "medium",
          theme: "light",
        };
  });

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("learning-progress", JSON.stringify(progress));
  }, [progress]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  // Update chapter progress
  const updateProgress = (chapterId, unitId, data) => {
    setProgress((prev) => ({
      ...prev,
      [chapterId]: {
        ...prev[chapterId],
        [unitId]: {
          ...prev[chapterId]?.[unitId],
          ...data,
          lastAccessed: new Date().toISOString(),
        },
      },
    }));
  };

  // Get chapter progress
  const getChapterProgress = (chapterId) => {
    return progress[chapterId] || {};
  };

  // Check if unit is completed
  const isUnitCompleted = (chapterId, unitId) => {
    return progress[chapterId]?.[unitId]?.completed || false;
  };

  // Get total progress percentage
  const getTotalProgress = () => {
    const totalUnits = Object.keys(progress).reduce((acc, chapterId) => {
      return acc + Object.keys(progress[chapterId]).length;
    }, 0);

    const completedUnits = Object.keys(progress).reduce((acc, chapterId) => {
      return (
        acc +
        Object.values(progress[chapterId]).filter((u) => u.completed).length
      );
    }, 0);

    return totalUnits > 0 ? Math.round((completedUnits / totalUnits) * 100) : 0;
  };

  // Update settings
  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem("learning-progress");
  };

  const value = {
    progress,
    settings,
    updateProgress,
    getChapterProgress,
    isUnitCompleted,
    getTotalProgress,
    updateSettings,
    resetProgress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
