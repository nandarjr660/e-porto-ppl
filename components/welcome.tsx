'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto hide setelah 5.5 detik (blur in 0.5s + hold 4.5s + blur out 0.5s)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#F8FAFC]"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Teks dengan efek blur → jelas → blur */}
          <div className="text-center px-6 max-w-3xl space-y-8 md:space-y-12">
            {/* Baris 1 & 2 */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ 
                filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 5.5,
                times: [0, 0.09, 0.91, 1],
                ease: 'easeInOut'
              }}
            >
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#1E293B]">
                Selamat datang di
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-[#1E293B] mt-1">
                <span className="font-black text-[#406093]">Portofolio PPL Terbimbing</span> saya
              </p>
            </motion.div>

            {/* Baris 3 - dengan delay */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#406093] italic"
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ 
                filter: ['blur(10px)', 'blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
                opacity: [0, 0, 1, 1, 0]
              }}
              transition={{ 
                duration: 5.5,
                times: [0, 0.15, 0.25, 0.91, 1],
                ease: 'easeInOut'
              }}
            >
              "Semoga hari Anda menyenangkan"
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
