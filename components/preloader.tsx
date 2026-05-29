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
      await animate(".dot-1", { y: [0, -25, 0] }, { duration: 0.6, ease: "easeOut" });
      await animate(".dot-1", { y: [0, -15, 0] }, { duration: 0.5, ease: "easeOut" });
      await Promise.all([
        animate(".dot-1", { x: -30 }, { duration: 0.5, ease: "backOut" }),
        animate(".dot-2", { opacity: 1 }, { duration: 0.1 }),
        animate(".dot-3", { x: 30, opacity: 1 }, { duration: 0.5, ease: "backOut" })
      ]);
      await animate(".dot", { y: [0, -20, 0] }, { duration: 0.5, repeat: 1, ease: "easeInOut" });
      animate(".dot-1", { y: [0, -30, 5, -15, 0] }, { duration: 1.5, ease: "easeInOut" });
      animate(".dot-2", { y: [0, 10, -25, 10, 0] }, { duration: 1.5, ease: "easeInOut" });
      await animate(".dot-3", { y: [0, -15, -5, -30, 0] }, { duration: 1.5, ease: "easeInOut" });
      await Promise.all([
        animate(".dot-wrapper", { rotate: 360, scale: 0.5 }, { duration: 0.8, ease: "backIn" }),
        animate(".dot-1", { x: 0 }, { duration: 0.8, ease: "backIn" }),
        animate(".dot-3", { x: 0 }, { duration: 0.8, ease: "backIn" })
      ]);
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
      <div className="complete-text absolute text-[#93C5FD] text-[11px] font-black tracking-[0.4em] uppercase opacity-0" style={{ willChange: "transform, filter, opacity" }}>
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
      }, 2000);

      const timer2 = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenPreloader', 'true');
      }, 4000);

      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('preloader:morph'));
    }}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.6 } }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0F172A]/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, rotateX: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{
              scale: 0,
              rotateX: 75,
              rotateZ: 3,
              y: -40,
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            className="relative bg-gradient-to-br from-[#0F172A] via-[#1a2540] to-[#0F172A] border border-white/10 rounded-3xl px-10 md:px-14 py-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] will-change-transform overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#406093]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#60A5FA]/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#406093]/50 to-transparent" />

            <div className="relative z-10 overflow-hidden h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F8FAFC] tracking-tight max-w-2xl leading-relaxed text-center"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex justify-center items-center scale-75 md:scale-100 mt-4"
            >
              <CustomLoader />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
