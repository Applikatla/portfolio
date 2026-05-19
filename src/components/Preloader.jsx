import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => onComplete(), 800); // Hold at 100% briefly before animating out
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999999] bg-[#050505] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <div className="w-full max-w-md px-8 flex flex-col items-center gap-8">
        
        {/* Futuristic Glowing Counter */}
        <div className="text-7xl md:text-9xl font-black relative w-full text-center flex justify-center tracking-tighter">
          {/* Outlined Background Text */}
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] absolute">
            {progress}%
          </span>
          {/* Filled Text that clips based on progress */}
          <span 
            className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10 transition-all duration-300"
            style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
          >
            {progress}%
          </span>
        </div>
        
        {/* Sleek Loading Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-orange-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs tracking-[0.5em] text-gray-500 uppercase font-mono mt-4"
        >
          System Initializing
        </motion.div>
      </div>
    </motion.div>
  );
};
