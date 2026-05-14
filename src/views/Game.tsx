import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Game() {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-8 w-full h-full py-20 px-6">
      <div className="bg-black/80 border-4 border-arcade-primary p-12 text-center max-w-2xl relative overflow-hidden neon-glow-green">
        {/* Scanlines inside the box */}
        <div className="absolute inset-0 crt-overlay opacity-50" />
        
        <h2 className="font-display text-4xl text-arcade-primary mb-6 animate-pulse">MISSION START</h2>
        <p className="font-mono text-lg mb-8 leading-relaxed">
          YOU ARE THE LAST DEFENDER OF SECTOR 7.<br />
          NEUTRALIZE ALL INCOMING THREATS.<br />
          <span className="text-arcade-secondary">PROTECT THE GALACTIC CORE AT ALL COSTS.</span>
        </p>

        <div className="grid grid-cols-2 gap-4">
           <button 
             onClick={() => navigate('/')}
             className="border-2 border-arcade-error text-arcade-error font-mono py-3 hover:bg-arcade-error/10 transition-all uppercase font-bold"
           >
             Abort Mission
           </button>
           <button 
             className="bg-arcade-primary text-[#002203] font-mono py-3 hover:brightness-110 transition-all uppercase font-bold"
           >
             Engage
           </button>
        </div>
      </div>

      <div className="flex gap-4 font-mono text-[10px] text-[#84967e]">
        <span>WASD - MOVE</span>
        <span>SPACE - FIRE</span>
        <span>SHIFT - SHIELD</span>
      </div>
    </div>
  );
}
