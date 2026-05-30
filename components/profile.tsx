'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';
import SplitText from '@/components/split-text';
import BlurText from '@/components/blur-text';
import TiltCard from '@/components/spatial/tilt-card';

export default function Profile() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll parallax for content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const yContent = useTransform(springScroll, [0, 1], [100, -100]);
  const yImage = useTransform(springScroll, [0, 1], [50, -50]);

  return (
    <section 
      id="profil" 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-[#1E293B] px-6 py-24 md:px-12 lg:px-24 font-sans overflow-hidden flex flex-col justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* ——— DECORATIVE ——— */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#406093]/[0.03] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#406093]/[0.02] to-transparent pointer-events-none z-0" />
      <div className="absolute top-20 left-10 w-32 h-32 opacity-[0.03] pointer-events-none hidden lg:block z-0" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#406093]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#60A5FA]/8 rounded-full blur-[110px] pointer-events-none" />

      <main className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* ——— KIRI: FOTO PROFIL ——— */}
        <motion.div
          className="lg:col-span-5 w-full flex flex-col gap-6"
          style={{ y: yImage }}
        >
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-fit mx-auto lg:mx-0 group">
             <TiltCard className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/image/nandar.png" 
                    alt="Hasmunandar, S.Pd. - Mahasiswa PPG Prajabatan 2026"
                    width={500}
                    height={625}
                    priority
                    className="object-cover transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/50 via-transparent to-transparent opacity-60" />
                </div>
             </TiltCard>
             
             {/* Badge Nama — floating */}
             <motion.div 
               className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] md:w-[80%] bg-[#0F172A]/40 backdrop-blur-2xl text-white px-6 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-20 border border-white/10 hover:bg-[#0F172A]/50 transition-all duration-500 overflow-hidden group/badge flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)]"
               style={{ transform: "translateZ(40px)" }}
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <div className="flex items-center gap-3 relative z-10">
                   <div className="relative shrink-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-[2px] border-[#0F172A]/40 z-10" />
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-60" />
                      <div className="absolute inset-0 w-5 h-5 -translate-x-1 -translate-y-1 rounded-full bg-emerald-400/20 blur-sm" />
                   </div>
                   <div className="flex flex-col justify-center text-left">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300 mb-0.5">Mahasiswa PPG</p>
                      <p className="text-xs md:text-sm font-bold tracking-tight truncate text-white drop-shadow-md">Hasmunandar, S.Pd.</p>
                   </div>
                </div>
             </motion.div>

             <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#406093]/20 rounded-tl-2xl pointer-events-none hidden md:block" />
          </div>
        </motion.div>

        {/* ——— KANAN: KONTEN NARASI ——— */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ y: yContent }}
        >
          {/* 01. TENTANG SAYA */}
          <motion.div 
            variants={staggerItem} 
            className="space-y-4"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#406093] text-white flex items-center justify-center text-[10px] font-black shadow-lg shadow-[#406093]/20">01</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#406093]/30 to-transparent"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-[#1E293B]">
              <SplitText text="Tentang Saya" delay={50} />
            </h3>
            <p className="text-base md:text-lg font-medium leading-relaxed text-[#334155] text-left">
              Saya <span className="text-[#406093] font-bold">Hasmunandar</span>, seorang pendidik muda yang lahir dan dibesarkan di tanah bersejarah <span className="font-bold">Kabupaten Gowa, Sulawesi Selatan</span>. Sebagai putra daerah yang mewarisi nilai-nilai ketangguhan, saya percaya bahwa pendidikan adalah jembatan terbaik untuk membawa perubahan nyata bagi generasi mendatang. Perjalanan profesional saya kini berfokus pada pengembangan diri melalui program Pendidikan Profesi Guru (PPG) Prajabatan.
            </p>
          </motion.div>

          {/* ——— VISUAL DIVIDER ——— */}
          <motion.div variants={staggerItem} className="relative my-2">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#406093]/20 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#406093]/30" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#406093]/50">Refleksi</span>
                <div className="w-2 h-2 rounded-full bg-[#406093]/30" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#406093]/20 to-transparent" />
            </div>
          </motion.div>

          {/* 02. INSPIRASI */}
          <motion.div 
            variants={staggerItem} 
            className="space-y-4"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#406093] text-white flex items-center justify-center text-[10px] font-black shadow-lg shadow-[#406093]/20">02</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#406093]/30 to-transparent"></div>
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight text-[#1E293B]">
              Filosofi <span className="italic font-serif text-[#406093]">Siri&apos; Na Pacce</span>
            </h4>
            <p className="text-base md:text-lg font-medium leading-relaxed text-[#334155] text-left">
              Inspirasi mengajar saya berakar pada falsafah luhur <span className="italic font-bold">Siri&apos; Na Pacce</span>. Bagi saya, <span className="font-bold">Siri&apos;</span> melambangkan harga diri dan integritas dalam menjalankan tugas, sementara <span className="font-bold text-[#406093]">Pacce</span> adalah wujud empati serta kasih sayang yang mendalam kepada sesama. Dalam konteks kelas, nilai ini saya terjemahkan sebagai komitmen untuk tidak hanya mengajar, tetapi juga peduli sepenuhnya terhadap pertumbuhan karakter dan kebahagiaan setiap peserta didik.
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* ——— QUOTE CARD ——— */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl mx-auto mt-16 md:mt-24 px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <TiltCard className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#406093]/30 via-[#60A5FA]/20 to-[#406093]/30 rounded-[2.3rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative backdrop-blur-xl bg-white/70 border border-white/80 px-8 md:px-16 py-8 md:py-10 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-r from-[#406093]/8 to-transparent blur-2xl rounded-full pointer-events-none" />

            <div className="flex items-start gap-4">
              <span className="text-4xl md:text-5xl text-[#406093]/20 font-serif leading-none italic -mt-2 shrink-0">&quot;</span>
              <div className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-[#334155] text-center md:text-left">
                <BlurText text="Pendidikan tidak merubah dunia, pendidikan merubah manusia, manusia merubah dunia." delay={50} />
              </div>
              <span className="text-4xl md:text-5xl text-[#406093]/20 font-serif leading-none italic rotate-180 shrink-0 -mb-2 self-end">&quot;</span>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <div className="h-px w-8 bg-gradient-to-r from-[#406093]/30 to-transparent hidden md:block" />
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#406093]/60">
                Paulo Freire
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-[#406093]/30 to-transparent hidden md:block" />
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
