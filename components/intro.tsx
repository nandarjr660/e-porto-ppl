'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SplitText from '@/components/split-text';
import { staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

const Intro = memo(function Intro() {
  return (
    <section
      id="intro"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-[#1E293B] flex flex-col items-center justify-center text-center font-sans overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#406093]/[0.02] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-[#406093]/[0.02] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-24 h-24 opacity-[0.03] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-[0.03] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div className="flex items-center gap-4 mb-8" variants={staggerItem}>
          <div className="w-10 h-[1px] bg-[#406093]/40"></div>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#406093]">
            Pengantar
          </p>
          <div className="w-10 h-[1px] bg-[#406093]/40"></div>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-8"
          variants={staggerItem}
          aria-label="Selamat Datang di e-portfolio PPL"
        >
          <SplitText
            tag="span"
            text="Selamat Datang di"
            className="inline-block"
            delay={35}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
          />
          <span className="relative inline-block md:block md:mt-1" aria-hidden="true">
            <span className="inline-flex items-baseline gap-[0.18em]">
              <SplitText
                tag="span"
                text="e-portfolio"
                className="inline-block font-serif italic lowercase tracking-normal"
                segmentClassName="bg-gradient-to-r from-[#406093] to-[#60A5FA] bg-clip-text text-transparent"
                delay={35}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 32 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-80px"
                startDelay={0.2}
              />
              <SplitText
                tag="span"
                text="PPL"
                className="inline-block"
                delay={35}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 32 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-80px"
                startDelay={0.32}
              />
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#406093]/30 to-[#60A5FA]/30 rounded-full hidden md:block" />
          </span>
        </motion.h2>

        <motion.div 
          className="relative max-w-3xl"
          variants={staggerItem}
        >
          {/* Decorative quote marks */}
          <span className="absolute -top-6 -left-4 text-6xl md:text-7xl text-[#406093]/5 font-serif leading-none select-none">&quot;</span>
          
          <p className="text-sm md:text-base lg:text-[1.1rem] text-[#1E293B]/75 leading-relaxed font-medium text-justify">
            Portofolio ini disusun sebagai bentuk refleksi dan rekam jejak profesional selama menjalankan <span className="text-[#406093] font-bold">Praktik Pengalaman Lapangan (PPL)</span>. Di sini, Anda dapat mengeksplorasi profil pendidik saya, melihat kumpulan artefak pembelajaran dari berbagai siklus, serta meninjau dokumen lampiran yang mendukung proses mengajar saya di kelas.
          </p>
          
          <span className="absolute -bottom-8 -right-4 text-6xl md:text-7xl text-[#406093]/5 font-serif leading-none select-none rotate-180">&quot;</span>
        </motion.div>

        {/* Navigation hints */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
          variants={staggerItem}
        >
          {["Profil", "Artefak", "Lampiran"].map((item, idx) => (
            <Link
              key={idx}
              href={idx === 0 ? "/profil" : idx === 1 ? "/artefak" : "/lampiran"}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#1E293B]/10 text-[10px] font-bold uppercase tracking-widest text-[#1E293B]/50 hover:text-[#406093] hover:border-[#406093]/30 hover:shadow-md transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#406093]/30 group-hover:bg-[#406093] transition-colors duration-300" />
              {item}
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Intro;
