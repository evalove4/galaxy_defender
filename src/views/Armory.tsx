import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { ArrowRight, Coins, Bolt, Crosshair, Shield } from 'lucide-react';

export default function Armory() {
  const { credits, upgrades, upgradeModule } = useGame();

  const getIcon = (id: string) => {
    switch (id) {
      case 'fire-rate': return <Bolt />;
      case 'move-speed': return <Crosshair />;
      case 'shield': return <Shield />;
      default: return null;
    }
  };

  return (
    <div className="relative z-20 flex flex-col w-full max-w-6xl py-10 px-6 md:px-0 mb-32">
      <div className="w-full flex justify-end mb-8">
        <div className="bg-[#0d0d16] border-2 border-arcade-secondary px-8 py-4 rounded-xl flex items-center gap-4 shadow-[0_0_15px_rgba(20,209,255,0.4)]">
          <Coins className="text-arcade-secondary w-6 h-6" />
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#84967e] font-bold">AVAILABLE CREDITS</span>
            <span className="font-mono text-3xl text-arcade-secondary font-bold">
              {credits.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
        {/* Ship Display */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[450px] bg-[#0d0d16]/50 border border-[#3b4b37] rounded-3xl overflow-hidden p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(114,255,112,0.05)_0%,_transparent_70%)]" />
          
          {/* Diagnostic Grids */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <div className="w-96 h-96 border-2 border-dashed border-arcade-primary rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[120%] h-[1px] bg-arcade-primary/30" />
            <div className="absolute h-[120%] w-[1px] bg-arcade-primary/30" />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-64 h-80 flex flex-col items-center justify-between py-12 relative">
               {/* Cyber Ship Mockup */}
               <div className="w-48 h-64 border-2 border-arcade-primary shadow-[0_0_20px_rgba(114,255,112,0.2)] rounded-3xl flex flex-col items-center p-4 backdrop-blur-sm">
                  <div className="w-12 h-1 bg-arcade-primary mb-8 neon-glow-green" />
                  <RocketIcon />
                  <div className="flex gap-2 mt-auto">
                    <motion.div 
                        animate={{ height: [12, 24, 12] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-3 bg-arcade-secondary/40 rounded-b-full" 
                    />
                    <motion.div 
                        animate={{ height: [24, 48, 24] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-5 bg-arcade-secondary shadow-[0_0_15px_#14d1ff] rounded-b-full" 
                    />
                    <motion.div 
                        animate={{ height: [12, 24, 12] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="w-3 bg-arcade-secondary/40 rounded-b-full" 
                    />
                  </div>
               </div>
            </div>
            
            <div className="mt-8 flex flex-col items-center bg-black/60 px-6 py-2 border border-arcade-primary/30 rounded-full">
              <span className="font-mono text-[10px] text-arcade-primary tracking-widest font-bold uppercase">
                Ship Diagnostics // SECURE_LINE_ACTIVE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Upgrades List */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {upgrades.map((upgrade, idx) => {
            const isAffordable = credits >= upgrade.cost;
            const isMaxed = upgrade.level >= upgrade.maxLevel;

            return (
              <motion.div
                key={upgrade.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className={`
                  relative bg-[#292932] border-l-4 p-6 rounded-r-xl transition-all duration-300
                  ${upgrade.id === 'move-speed' ? 'border-arcade-secondary' : 'border-arcade-primary'}
                  ${isAffordable && !isMaxed ? 'hover:scale-[1.02] cursor-pointer' : ''}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className={upgrade.id === 'move-speed' ? 'text-arcade-secondary' : 'text-arcade-primary'}>
                      {getIcon(upgrade.id)}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-white font-bold tracking-wider">{upgrade.name}</h3>
                      <p className="text-[10px] font-mono text-[#84967e] font-bold">{upgrade.description}</p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 font-mono text-xs rounded font-bold
                    ${upgrade.id === 'move-speed' ? 'bg-arcade-secondary text-[#001f28]' : 'bg-arcade-primary text-[#002203]'}
                  `}>
                    LVL {upgrade.level.toString().padStart(2, '0')}
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: upgrade.maxLevel }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-4 flex-1 transition-all duration-500 rounded-sm
                        ${i < upgrade.level 
                          ? (upgrade.id === 'move-speed' ? 'bg-arcade-secondary shadow-[0_0_8px_rgba(20,209,255,0.6)]' : 'bg-arcade-primary neon-glow-green') 
                          : 'bg-[#13131b]'}
                      `}
                    />
                  ))}
                </div>

                <button
                  disabled={!isAffordable || isMaxed}
                  onClick={() => upgradeModule(upgrade.id)}
                  className={`
                    w-full py-4 font-bold flex justify-between items-center px-6 rounded-lg transition-all active:scale-95 group
                    ${isMaxed 
                      ? 'bg-gray-800 text-gray-500 border border-gray-700'
                      : isAffordable
                        ? upgrade.id === 'move-speed'
                          ? 'border-2 border-arcade-secondary text-arcade-secondary hover:bg-arcade-secondary/10'
                          : 'bg-arcade-primary text-[#002203] hover:brightness-110'
                        : 'bg-arcade-error/10 text-arcade-error border border-arcade-error/30'}
                  `}
                >
                  <span className="flex items-center gap-2 font-mono tracking-widest text-sm font-bold uppercase">
                    {isMaxed ? 'SYSTEM MAXIMIZED' : isAffordable ? <>INITIATE UPGRADE <ArrowRight size={16} /></> : 'INSUFFICIENT CREDITS'}
                  </span>
                  {!isMaxed && (
                    <span className="font-mono text-lg font-bold">
                      {upgrade.cost.toLocaleString()}
                    </span>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RocketIcon() {
  return (
    <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 text-arcade-primary flex items-center justify-center"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[0_0_15px_rgba(114,255,112,0.8)]">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/>
        <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/>
      </svg>
    </motion.div>
  )
}
