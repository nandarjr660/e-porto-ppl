'use client';

import { motion } from 'framer-motion';

/**
 * Global Spatial Template
 * Implements "Depth Parallax Reveal" entrance animation for all pages.
 * 
 * Philosophy: The page is treated as a 3D stage. Every navigation transition
 * feels like moving through layers of space (push/pull depth).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Start slightly pushed back (Z-axis), smaller, and blurred
      initial={{ 
        opacity: 0, 
        scale: 0.96, 
        filter: "blur(10px)",
        translateZ: "-100px" 
      }}
      // Spring forward into focus with organic "weight"
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)",
        translateZ: "0px"
      }}
      // Smoothly push back and fade out on exit
      exit={{ 
        opacity: 0, 
        scale: 1.04, 
        filter: "blur(10px)",
        translateZ: "50px"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1,
        restDelta: 0.001
      }}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1200px"
      }}
      className="flex-1 w-full will-change-[transform,opacity,filter]"
    >
      {children}
    </motion.div>
  );
}
