import { NavLink } from 'react-router-dom';
import { Rocket, Trophy, Shield, Settings, Joystick } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { motion } from 'motion/react';

export function TopBar() {
  const { hiScore } = useGame();
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-arcade-surface/80 backdrop-blur-sm border-b-2 border-arcade-primary shadow-[0_0_15px_rgba(114,255,112,0.4)]">
      <div className="flex items-center gap-4">
        <Rocket className="text-arcade-primary w-8 h-8 fill-arcade-primary" />
        <h1 className="font-display text-2xl md:text-4xl text-arcade-primary neon-text-green tracking-tighter uppercase">
          GALAXY DEFENDER
        </h1>
      </div>
      <div className="hidden md:flex flex-col items-end">
        <span className="font-mono text-xl text-arcade-primary tracking-widest">
          HI-SCORE: {hiScore.toLocaleString()}
        </span>
        <div className="h-1 w-full bg-arcade-primary mt-1 opacity-50" />
      </div>
    </header>
  );
}

export function BottomNav() {
  const navItems = [
    { to: "/", icon: Joystick, label: "PLAY" },
    { to: "/armory", icon: Shield, label: "ARMORY" },
    { to: "/ranks", icon: Trophy, label: "RANKS" },
    { to: "/config", icon: Settings, label: "CONFIG" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-[#0d0d16]/90 backdrop-blur-md border-t-2 border-arcade-secondary shadow-[0_-4px_12px_rgba(20,209,255,0.3)]">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `
            flex flex-col items-center justify-center px-4 py-2 transition-all duration-300 rounded-lg gap-1
            ${isActive 
              ? 'bg-arcade-secondary text-[#001f28] shadow-[0_0_10px_rgba(20,209,255,0.6)] scale-110 active' 
              : 'text-[#84967e] hover:text-arcade-secondary hover:bg-white/5'}
          `}
        >
          {({ isActive }) => (
            <>
              <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              <span className="font-mono text-[10px] font-bold">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
