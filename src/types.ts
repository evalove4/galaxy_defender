export interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
}

export interface ShipUpgrade {
  id: string;
  name: string;
  description: string;
  level: number;
  maxLevel: number;
  cost: number;
  icon: string;
}

export interface GameState {
  credits: number;
  hiScore: number;
  upgrades: ShipUpgrade[];
  leaderboard: LeaderboardEntry[];
}
