import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 star-field"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1.3, 1.2],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 star-field scale-150 rotate-12"
      />
      <div className="absolute inset-0 crt-overlay z-10 opacity-30" />
    </div>
  );
}
