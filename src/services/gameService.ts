import { GameState } from '../types';

const INITIAL_STATE: GameState = {
  credits: 12450,
  hiScore: 99999,
  upgrades: [
    {
      id: 'fire-rate',
      name: 'FIRE RATE',
      description: 'PLASMA CANNON CYCLE SPEED',
      level: 4,
      maxLevel: 8,
      cost: 2500,
      icon: 'bolt'
    },
    {
      id: 'move-speed',
      name: 'MOVE SPEED',
      description: 'THRUSTER VECTORING CAPACITY',
      level: 2,
      maxLevel: 8,
      cost: 1800,
      icon: 'speed'
    },
    {
      id: 'shield',
      name: 'SHIELD',
      description: 'KINETIC DISPERSION FIELD',
      level: 7,
      maxLevel: 8,
      cost: 5000,
      icon: 'shield'
    }
  ],
  leaderboard: [
    { rank: 1, username: 'VOID_WALKER', score: 1240000 },
    { rank: 2, username: 'X-WING_FLYER', score: 842500 },
    { rank: 3, username: 'NEBULAX_99', score: 715200 },
    { rank: 4, username: 'STAR_COMMANDER', score: 590300 },
    { rank: 5, username: 'PIXEL_REAPER', score: 512000 },
    { rank: 6, username: 'NOVA_SQUAD', score: 488150 },
    { rank: 7, username: 'ORBITAL_DROP', score: 450000 },
    { rank: 8, username: 'LASER_LOOPS', score: 412900 },
    { rank: 9, username: 'DR0ID_MAKER', score: 395000 },
    { rank: 10, username: 'REBEL_SCRUM', score: 382200 }
  ]
};

export const gameService = {
  getGameData: async (): Promise<GameState> => {
    // Simulate API fetch
    return new Promise((resolve) => {
      setTimeout(() => resolve(INITIAL_STATE), 500);
    });
  },

  upgradeModule: async (moduleId: string): Promise<{ success: boolean; newState?: GameState }> => {
    // Simulate POST request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 300);
    });
  }
};
