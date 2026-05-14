import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { Trophy } from 'lucide-react';

export default function Ranks() {
  const { leaderboard } = useGame();

  const getRankStyle = (rank: number) => {
    switch(rank) {
      case 1: return { border: 'border-[#FFD700]', glow: 'shadow-[0_0_15px_rgba(255,215,0,0.5)]', color: 'text-[#FFD700]' };
      case 2: return { border: 'border-[#C0C0C0]', glow: 'shadow-[0_0_15px_rgba(192,192,192,0.4)]', color: 'text-[#C0C0C0]' };
      case 3: return { border: 'border-[#CD7F32]', glow: 'shadow-[0_0_15px_rgba(205,127,50,0.4)]', color: 'text-[#CD7F32]' };
      default: return { border: 'border-[#3b4b37]', glow: '', color: 'text-[#84967e]' };
    }
  };

  return (
    <div className="relative z-20 flex flex-col w-full max-w-4xl py-10 px-6 md:px-0">
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-arcade-secondary uppercase tracking-[0.2em] mb-2 font-bold italic">
          Galactic Hall of Fame
        </h2>
        <div className="h-1 w-32 bg-arcade-secondary shadow-[0_0_8px_rgba(20,209,255,0.6)]" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboard.slice(0, 3).map((entry, idx) => {
            const styles = getRankStyle(entry.rank);
            const isFirst = entry.rank === 1;
            
            return (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`
                  relative bg-[#1f1f27] border-2 p-8 flex flex-col items-center justify-center overflow-hidden
                  ${styles.border} ${styles.glow} ${isFirst ? 'scale-110 z-10' : 'order-last md:order-none'}
                `}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Trophy size={isFirst ? 80 : 60} />
                </div>
                <span className={`font-mono text-4xl mb-2 font-bold ${styles.color}`}>
                  0{entry.rank}
                </span>
                <h3 className="font-display text-xl text-white mb-2 uppercase text-center font-bold">{entry.username}</h3>
                <p className="font-mono text-2xl text-arcade-secondary font-bold">{entry.score.toLocaleString()}</p>
                
                <div className="mt-4 flex gap-2">
                  {Array.from({ length: 4 - entry.rank }).map((_, i) => (
                    <div key={i} className={`w-2 h-2 ${isFirst ? 'bg-arcade-accent' : 'bg-arcade-secondary'} animate-pulse`} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-3">
          {leaderboard.slice(3).map((entry, idx) => (
            <motion.div
              key={entry.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
              className="flex items-center justify-between bg-[#1b1b23] border border-[#3b4b37] p-4 px-8 hover:border-arcade-secondary transition-colors group cursor-default"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-xl text-[#84967e] group-hover:text-arcade-secondary w-8 font-bold">
                  {entry.rank.toString().padStart(2, '0')}
                </span>
                <span className="font-mono text-xl uppercase tracking-wider font-bold">{entry.username}</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-1 h-4 bg-arcade-primary" />
                  <div className="w-1 h-4 bg-arcade-primary" />
                  <div className="w-1 h-4 bg-arcade-primary" />
                </div>
                <span className="font-mono text-xl text-white font-bold">{entry.score.toLocaleString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
