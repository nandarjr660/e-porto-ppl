'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, fadeLeft } from '@/lib/motion';
import Image from 'next/image';
import Shuffle from '@/components/shuffle';
import SplitText from '@/components/split-text';
import TypingText from '@/components/typing-text';

export default function Hero() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [morphDone, setMorphDone] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader === 'true') {
      setMorphDone(true);
      setTimeout(() => {
        setIsFirstVisit(false);
      }, 0);
    }
  }, []);

  useEffect(() => {
    const handler = () => setMorphDone(true);
    window.addEventListener('preloader:morph', handler);
    return () => window.removeEventListener('preloader:morph', handler);
  }, []);

  const getDelay = (delay: number) => isFirstVisit ? delay : delay - 1.2;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-[#F8FAFC] text-[#1E293B] px-4 pb-6 pt-24 md:px-10 md:pb-8 md:pt-28 flex flex-col overflow-hidden font-sans"
    >

      {/* --- GRAPHIC ELEMENTS (Original) --- */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-bl from-[#406093]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-gradient-to-tr from-[#406093]/3 to-transparent rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-40 h-40 opacity-[0.04] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <div className="absolute bottom-1/3 right-10 w-40 h-40 opacity-[0.04] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      {/* --- TOP HEADER (Original) --- */}
      <motion.header
        className="flex-none relative z-10 flex justify-between items-center w-full pb-3 border-b border-[#1E293B]/20"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: getDelay(2.2) }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#406093] animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#475569]">
            E-Portfolio PPL
          </span>
        </div>
        <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">
          Bekasi, 2026
        </div>
      </motion.header>

      {/* --- MAIN AREA --- */}
      <main className="flex-1 relative z-10 flex flex-col md:flex-row justify-center items-center md:items-center w-full min-h-0 py-8 md:py-0 gap-10 md:gap-16 lg:gap-20 max-w-7xl mx-auto">
        
        {/* Kiri: Foto dengan Bingkai Modern & Efek Hover (Pusatkan di Mobile) */}
        <motion.div 
          className="relative w-full md:w-[45%] h-auto md:h-auto flex-shrink-0 flex flex-col items-center md:items-end justify-center z-10"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: getDelay(2.5) }}
        >
          <div className="relative w-[65%] sm:w-[55%] md:w-[90%] lg:w-[85%] aspect-[4/5] md:translate-x-0 lg:translate-x-4 group cursor-default">
            {/* Outer Glow/Shadow - Only visible on hover */}
            <div className="absolute inset-0 bg-[#406093]/20 blur-2xl rounded-full scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            
            {/* Image Frame (Modern Format) */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-transparent bg-transparent transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:rotate-1 group-hover:bg-white/50 group-hover:backdrop-blur-sm group-hover:border-[#406093]/40 group-hover:shadow-[0_40px_80px_rgba(64,96,147,0.3)]">
              <Image 
                src="/image/berandaaa.png" 
                alt="Hero Portofolio Hasmunandar" 
                fill
                sizes="(max-width: 768px) 65vw, 45vw"
                className="object-cover object-top filter contrast-[1.02] brightness-100 group-hover:brightness-105 transition-all duration-700"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/50 via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#406093]/40 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#406093]/40 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500" />
          </div>
        </motion.div>

        {/* Kanan: Teks Hero Utama (Original Font & Layout) */}
        <motion.div 
          className="w-full md:w-[55%] flex flex-col items-center md:items-start justify-center text-center md:text-left z-20 md:pl-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: getDelay(2.7) }}
        >
          <motion.h2 variants={staggerItem} className="relative text-3xl md:text-4xl lg:text-[48px] xl:text-[58px] font-medium tracking-tight text-[#406093] mb-1 md:mb-2 leading-none font-serif italic lowercase inline-flex items-center gap-0">
            <Shuffle
              text="Welcome to my"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              startDelay={Math.max(getDelay(2.7), 0)}
              className="inline-block"
            />
            <motion.span
              className="relative inline-flex items-center justify-center w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-1.5 -mr-0.5"
              initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
              animate={morphDone ? { opacity: 1, scale: 1, rotateZ: 0 } : { opacity: 0, scale: 0, rotateZ: 180 }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ perspective: "400px", transformStyle: "preserve-3d" }}
            >
              <span className="absolute inset-0 rounded-full bg-[#406093]/20 blur-sm will-change-transform" />
              <motion.span
                className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#406093] will-change-transform"
                animate={morphDone ? { y: [0, -3, 0] } : { y: 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
          </motion.h2>
          <motion.div variants={staggerItem} className="w-full">
            <SplitText
              tag="h1"
              text="PORTOFOLIO"
              className="text-[clamp(2.5rem,11vw,8rem)] md:text-[clamp(3rem,8vw,10rem)] lg:text-[85px] xl:text-[105px] font-black uppercase tracking-tighter leading-none text-[#1E293B] whitespace-nowrap"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              showCallback
              startDelay={Math.max(getDelay(2.8), 0)}
            />
          </motion.div>
          <motion.div variants={staggerItem} className="w-full mt-2 md:mt-4">
            <TypingText
              tag="p"
              text="Mahasiswa PPG Prajabatan 2026"
              className="text-base md:text-lg lg:text-2xl font-bold text-[#406093] tracking-tighter uppercase leading-none"
              speed={45}
              threshold={0.1}
              rootMargin="-100px"
              startDelay={Math.max(getDelay(3.0), 0)}
            />
          </motion.div>
          
          <motion.p variants={staggerItem} className="text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-md lg:max-w-xl xl:max-w-2xl text-[#475569] mt-6 md:mt-10 px-4 md:px-0">
            Portofolio ini merupakan rangkuman pengalaman belajar selama praktik lapangan yang berlokasi di <span className="text-[#406093] font-bold">SDN Pengasinan IX</span>.
          </motion.p>
        </motion.div>

      </main>

      {/* --- BOTTOM PILLS (Original) --- */}
      <motion.footer
        className="flex-none relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 w-full pt-4 mt-auto border-t border-[#1E293B]/10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: getDelay(3.2) }}
      >
        <motion.div
          className="w-full md:w-auto px-5 py-2 md:py-2.5 rounded-full border border-[#1E293B]/20 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#475569] cursor-default"
          variants={staggerItem}
        >
          Hasmunandar
        </motion.div>

        <motion.a
          href="#intro"
          className="group w-full md:w-auto px-8 py-3 md:py-3.5 rounded-full bg-[#406093] text-[#F8FAFC] flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] shadow-lg shadow-[#406093]/25 hover:shadow-[#1E293B]/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2"
          variants={staggerItem}
        >
          <span>Jelajahi Portofolio</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.a>

        <motion.div
          className="w-full md:w-auto px-5 py-2 md:py-2.5 rounded-full bg-[#1E293B]/5 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#475569] cursor-default"
          variants={staggerItem}
        >
          SDN Pengasinan IX
        </motion.div>
      </motion.footer>

    </section>
  );
}
