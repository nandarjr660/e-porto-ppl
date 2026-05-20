'use client';

import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '@/lib/motion';

export default function Closing() {
  return (
    <footer
      id="closing"
      className="relative w-full bg-[#0F172A] px-6 md:px-12 py-8 border-t border-[#1E293B]/50 text-center font-sans"
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-[#F8FAFC] gap-4 md:gap-0"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#93C5FD] rounded-full animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8FAFC]/40">Terbuka untuk Kolaborasi</span>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8FAFC]/30">
          Hasmunandar &copy; {new Date().getFullYear()} &middot; PPG E-Portfolio
        </p>
      </motion.div>
    </footer>
  );
}