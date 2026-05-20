'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import BlurText from '@/components/blur-text';

function CustomLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      if (!isMounted) return;

      // 1. 1 titik putih memantul
      await animate(".dot-1", { y: [0, -25, 0] }, { duration: 0.6, ease: "easeOut" });
      await animate(".dot-1", { y: [0, -15, 0] }, { duration: 0.5, ease: "easeOut" });
      
      // 2. Berpecah jadi 3
      await Promise.all([
        animate(".dot-1", { x: -30 }, { duration: 0.5, ease: "backOut" }),
        animate(".dot-2", { opacity: 1 }, { duration: 0.1 }),
        animate(".dot-3", { x: 30, opacity: 1 }, { duration: 0.5, ease: "backOut" })
      ]);

      // 3. Memantul atas bawah bersamaan
      await animate(".dot", { y: [0, -20, 0] }, { duration: 0.5, repeat: 1, ease: "easeInOut" });

      // 4. Memantul tidak beraturan (random)
      animate(".dot-1", { y: [0, -30, 5, -15, 0] }, { duration: 1.5, ease: "easeInOut" });
      animate(".dot-2", { y: [0, 10, -25, 10, 0] }, { duration: 1.5, ease: "easeInOut" });
      await animate(".dot-3", { y: [0, -15, -5, -30, 0] }, { duration: 1.5, ease: "easeInOut" });

      // 5. 3 titik berputar dan menjadi satu
      await Promise.all([
        animate(".dot-wrapper", { rotate: 360, scale: 0.5 }, { duration: 0.8, ease: "backIn" }),
        animate(".dot-1", { x: 0 }, { duration: 0.8, ease: "backIn" }),
        animate(".dot-3", { x: 0 }, { duration: 0.8, ease: "backIn" })
      ]);

      // 6. Berubah jadi teks "complete"
      animate(".dot-wrapper", { opacity: 0, scale: 0 }, { duration: 0.2 });
      await animate(".complete-text", { opacity: 1, scale: [0.5, 1.1, 1], filter: ["blur(8px)", "blur(0px)"] }, { duration: 0.5, ease: "easeOut" });
    };

    sequence();
    return () => { isMounted = false; };
  }, [animate]);

  return (
    <div ref={scope} className="relative flex items-center justify-center w-40 h-16">
      <div className="dot-wrapper absolute flex items-center justify-center">
        <div className="dot dot-1 absolute w-3 h-3 bg-white rounded-full z-10" />
        <div className="dot dot-2 absolute w-3 h-3 bg-white rounded-full opacity-0" />
        <div className="dot dot-3 absolute w-3 h-3 bg-white rounded-full opacity-0" />
      </div>
      <div 
        className="complete-text absolute text-[#93C5FD] text-[11px] font-black tracking-[0.4em] uppercase opacity-0"
        style={{ willChange: "transform, filter, opacity" }}
      >
        Complete
      </div>
    </div>
  );
}

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  const messages = [
    "Selamat datang di Portofolio PPL Terbimbing saya",
    "Selamat menjelajah dan semoga hari anda menyenangkan"
  ];

  useLayoutEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    
    if (hasSeenPreloader) {
      requestAnimationFrame(() => {
        setShouldRender(false);
        setIsVisible(false);
      });
    } else {
      document.body.style.overflow = 'hidden';

      const timer1 = setTimeout(() => {
        setIndex(1);
      }, 3500); 

      const timer2 = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenPreloader', 'true');
      }, 7000); 

      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => document.body.style.overflow = 'unset'}>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          // Transisi BERGESER KE ATAS (Slide Up)
          exit={{ y: '-100%', transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[999] bg-[#0F172A] flex items-center justify-center px-6 text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[60vw] h-[60vw] bg-[#406093] opacity-10 blur-[120px] rounded-full" />

          <div className="relative z-10 overflow-hidden h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F8FAFC] tracking-tight max-w-2xl leading-relaxed"
              >
                <BlurText
                  key={`blur-${index}`}
                  text={messages[index]}
                  delay={index === 0 ? 1000 : 120}
                  animateBy="words"
                  direction="top"
                  className="inline"
                />
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Custom Loading Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center scale-75 md:scale-100"
          >
            <CustomLoader />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
