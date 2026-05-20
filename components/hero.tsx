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

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader === 'true') {
      setTimeout(() => {
        setIsFirstVisit(false);
      }, 0);
    }
  }, []);

  const getDelay = (delay: number) => isFirstVisit ? delay : delay - 7.5;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-[#F8FAFC] text-[#1E293B] px-4 pb-6 pt-24 md:px-10 md:pb-8 md:pt-28 flex flex-col overflow-hidden font-sans"
    >

      {/* --- GRAPHIC ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-bl from-[#406093]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-gradient-to-tr from-[#406093]/3 to-transparent rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-40 h-40 opacity-[0.04] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <div className="absolute bottom-1/3 right-10 w-40 h-40 opacity-[0.04] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      {/* --- TOP HEADER --- */}
      <motion.header
        className="flex-none relative z-10 flex justify-between items-center w-full pb-3 border-b border-[#1E293B]/20"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: getDelay(7.8) }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#406093] animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1E293B]/70">
            E-Portfolio PPL
          </span>
        </div>
        <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#1E293B]/60 uppercase">
          Bekasi, 2026
        </div>
      </motion.header>

      {/* --- MAIN AREA --- */}
      <main className="flex-1 relative z-10 flex flex-col md:flex-row justify-center items-center md:items-stretch w-full min-h-0 py-4 md:py-0 max-w-7xl mx-auto">
        
        {/* Kiri: Foto */}
        <motion.div 
          className="relative w-full md:w-1/2 h-[45vh] md:h-auto flex-shrink-0 flex flex-col items-end justify-center md:justify-center z-10"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: getDelay(8.1) }}
        >
          <div className="relative w-[90%] md:w-[130%] lg:w-[140%] flex-1 md:translate-x-10 lg:translate-x-16 group">
            <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-3 group-hover:rotate-1 group-hover:brightness-105 group-hover:shadow-2xl group-hover:shadow-[#406093]/30 rounded-lg">
              <Image 
                src="/image/berandaaa.png" 
                alt="Hero Portofolio Hasmunandar" 
                fill 
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-contain object-top md:object-[center_15%]" 
                priority 
              />
            </div>
          </div>
        </motion.div>

        {/* Kanan: Teks Hero Utama */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left z-20 mt-6 md:mt-0 md:-ml-4 lg:-ml-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: getDelay(8.4) }}
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-[45px] xl:text-[55px] font-medium tracking-tight text-[#406093] mb-1 md:mb-2 leading-none font-serif italic lowercase">
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
              startDelay={Math.max(getDelay(8.4), 0)}
              className="inline-block"
            />
          </motion.h2>
          <motion.div variants={staggerItem} className="w-full">
            <SplitText
              tag="h1"
              text="PORTOFOLIO"
              className="text-[clamp(3rem,12vw,8rem)] md:text-[clamp(3.5rem,6vw,8rem)] lg:text-[80px] xl:text-[100px] font-black uppercase tracking-tighter leading-none text-[#1E293B]"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              showCallback
              startDelay={Math.max(getDelay(8.52), 0)}
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
              startDelay={Math.max(getDelay(8.7), 0)}
            />
          </motion.div>
          
          <motion.p variants={staggerItem} className="text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-md lg:max-w-xl text-[#1E293B]/70 mt-6 md:mt-10 px-4 md:px-0">
            Portofolio ini merupakan rangkuman pengalaman belajar selama praktik lapangan yang berlokasi di <span className="text-[#406093] font-bold">SDN Pengasinan IX</span>.
          </motion.p>
        </motion.div>

      </main>

      {/* --- BOTTOM PILLS --- */}
      <motion.footer
        className="flex-none relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 w-full pt-4 mt-auto border-t border-[#1E293B]/10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: getDelay(8.8) }}
      >
        <motion.div
          className="w-full md:w-auto px-5 py-2 md:py-2.5 rounded-full border border-[#1E293B]/20 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] hover:text-[#F8FAFC] text-[#1E293B]/60"
          variants={staggerItem}
        >
          Hasmunandar
        </motion.div>

        <motion.a
          href="#intro"
          className="w-full md:w-auto px-8 py-3 md:py-3.5 rounded-full bg-[#406093] text-[#F8FAFC] text-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] shadow-lg shadow-[#406093]/25 hover:shadow-[#1E293B]/25 hover:scale-[1.02] active:scale-[0.98]"
          variants={staggerItem}
        >
          Jelajahi Portofolio ↓
        </motion.a>

        <motion.div
          className="w-full md:w-auto px-5 py-2 md:py-2.5 rounded-full bg-[#1E293B]/5 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] hover:text-[#F8FAFC] text-[#1E293B]/60"
          variants={staggerItem}
        >
          SDN Pengasinan IX
        </motion.div>
      </motion.footer>

    </section>
  );
}
