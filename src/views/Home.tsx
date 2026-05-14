import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-12 w-full max-w-4xl py-20">
      {/* Title Area */}
      <div className="relative group text-center">
        <div className="absolute -inset-8 bg-arcade-primary/10 blur-3xl rounded-full" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl text-arcade-primary drop-shadow-[0_0_20px_rgba(114,255,112,0.9)] animate-pulse uppercase">
            GALAXY DEFENDER
          </h1>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-8 h-1 bg-arcade-secondary" />
            <div className="w-24 h-1 bg-arcade-accent shadow-[0_0_10px_rgba(0,255,65,0.8)]" />
            <div className="w-8 h-1 bg-arcade-secondary" />
          </div>
        </motion.div>
      </div>

      {/* Main Action */}
      <motion.div 
        className="flex flex-col items-center gap-8 w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button 
          onClick={() => navigate('/game')}
          className="group relative px-12 py-6 bg-arcade-primary text-[#002203] font-mono text-2xl border-4 border-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(114,255,112,0.5)]"
        >
          <span className="relative z-10 font-bold uppercase">INSERT COIN / START GAME</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          <div className="absolute -inset-2 border-2 border-arcade-primary opacity-50 animate-ping rounded-sm" />
        </button>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-6 md:px-0">
          <div className="bg-[#1f1f27] border border-[#84967e] p-6 flex flex-col items-center gap-2 hover:border-arcade-secondary transition-colors group cursor-pointer">
            <span className="text-arcade-secondary group-hover:animate-bounce">🕹️</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest">CONTROLS</span>
          </div>
          <div className="bg-[#1f1f27] border border-[#84967e] p-6 flex flex-col items-center gap-2 hover:border-arcade-secondary transition-colors group cursor-pointer" onClick={() => navigate('/ranks')}>
            <span className="text-arcade-secondary group-hover:animate-pulse">🎖️</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest">LEADERBOARD</span>
          </div>
          <div className="bg-[#1f1f27] border border-[#84967e] p-6 flex flex-col items-center gap-2 hover:border-arcade-secondary transition-colors group cursor-pointer">
            <span className="text-arcade-secondary">⚙️</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest">SYSTEM</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative UI */}
      <div className="absolute bottom-[-100px] left-[-200px] hidden lg:flex flex-col gap-2 font-mono text-arcade-primary/20 text-[10px]">
        <p>SYSTEM STATUS: READY</p>
        <p>VECTORS: CALIBRATED</p>
        <p>WEAPONS: ONLINE</p>
        <p>ENCRYPTION: ARCADE-LEVEL-4</p>
      </div>
    </div>
  );
}
