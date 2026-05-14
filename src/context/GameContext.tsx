import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState } from '../types';
import { gameService } from '../services/gameService';

interface GameContextType extends GameState {
  upgradeModule: (id: string) => Promise<void>;
  loading: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gameService.getGameData().then((data) => {
      setState(data);
      setLoading(false);
    });
  }, []);

  const upgradeModule = async (id: string) => {
    if (!state) return;
    
    // Optimistic update logic could go here
    const result = await gameService.upgradeModule(id);
    if (result.success) {
      setState(prev => {
        if (!prev) return null;
        const upgrade = prev.upgrades.find(u => u.id === id);
        if (!upgrade || prev.credits < upgrade.cost) return prev;

        return {
          ...prev,
          credits: prev.credits - upgrade.cost,
          upgrades: prev.upgrades.map(u => 
            u.id === id ? { ...u, level: Math.min(u.level + 1, u.maxLevel), cost: Math.floor(u.cost * 1.5) } : u
          )
        };
      });
    }
  };

  if (!state) {
    return (
      <div className="h-screen w-screen bg-arcade-surface flex items-center justify-center font-mono text-arcade-primary animate-pulse">
        INITIALIZING SYSTEM...
      </div>
    );
  }

  return (
    <GameContext.Provider value={{ ...state, upgradeModule, loading }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
