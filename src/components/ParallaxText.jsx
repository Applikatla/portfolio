import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxText = ({ baseVelocity = 100, children }) => {
  const containerRef = useRef(null);
  
  // Track scroll position relative to the element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress (0 to 1) to an x offset (0 to baseVelocity)
  const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap flex m-0 w-full pointer-events-none select-none">
      <motion.div 
        className="font-black uppercase text-8xl sm:text-[120px] md:text-[200px] leading-[0.8] text-white/[0.03] tracking-tighter flex whitespace-nowrap" 
        style={{ x }}
      >
        <span className="block pr-[100px]">{children} </span>
        <span className="block pr-[100px]">{children} </span>
        <span className="block pr-[100px]">{children} </span>
        <span className="block pr-[100px]">{children} </span>
      </motion.div>
    </div>
  );
};
