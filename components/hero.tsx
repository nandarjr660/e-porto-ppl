'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeUpHero, staggerContainer, staggerItem, revealHeight, VIEWPORT } from '@/lib/motion';

export default function Hero() {
  // Link Google Maps SDN Pengasinan IX
  const mapsUrl = "https://maps.app.goo.gl/1Dvt8RRe48u9K9GPA";

  return (
    <section
      id="hero"
      /* BG Putih Awan dan Teks Slate Gelap */
      className="relative w-full h-[100dvh] bg-[#F8FAFC] text-[#1E293B] px-4 pb-6 pt-24 md:px-10 md:pb-8 md:pt-28 flex flex-col overflow-hidden font-sans border-b border-[#1E293B]/10"
    >

      {/* --- GRAPHIC ELEMENTS (no animation, purely decorative) --- */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10 pointer-events-none hidden md:block z-0" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute bottom-24 right-10 w-32 h-32 opacity-10 pointer-events-none hidden md:block z-0" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

      {/* --- TOP HEADER --- */}
      <motion.header
        className="flex-none relative z-10 flex justify-between items-center w-full pb-3 border-b border-[#1E293B]/20"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          E-Portfolio PPL
        </div>
        <div className="text-[10px] md:text-xs font-bold tracking-[0.5em] opacity-40 uppercase">
          Hasmunandar
        </div>
        <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-40 uppercase">
          Bekasi, 2026
        </div>
      </motion.header>

      {/* --- MAIN AREA --- */}
      <main className="flex-1 relative z-10 flex flex-col w-full mt-4 md:mt-5 min-h-0">

        <motion.div
          className="flex-none mb-4 md:mb-5"
          variants={fadeUpHero}
          initial="hidden"
          animate="visible"
        >
          {/* Teks dengan Penekanan Kata Kunci Biru Baja (#406093) */}
          <h1 className="text-[9vw] md:text-[7vw] lg:text-[8vh] font-black uppercase tracking-tighter leading-none">
            MENDIDIK DENGAN <span className="text-[#406093]">KEPEDULIAN</span>, <br className="hidden md:block" /> MENCIPTAKAN PENGALAMAN <span className="text-[#406093] italic font-serif lowercase">bermakna.</span> 
          </h1>
        </motion.div>

        {/* YEAR & PARAGRAPH ROW */}
        <motion.div
          className="flex-none flex flex-col md:flex-row md:items-end gap-2 md:gap-10 mb-4 md:mb-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Angka Tahun diberi warna Biru Baja (#406093) */}
          <motion.div
            className="text-[5rem] md:text-[7rem] lg:text-[12vh] font-bold leading-[0.8] text-[#406093] tracking-tight"
            variants={staggerItem}
          >
            2026
          </motion.div>
          <motion.p
            className="text-xs md:text-sm lg:text-[2vh] font-medium leading-relaxed max-w-2xl md:pb-1 lg:pb-2 text-justify md:text-left opacity-90"
            variants={staggerItem}
          >
            Portofolio ini merupakan rangkuman pengalaman belajar selama praktik lapangan yang berlokasi di SDN Pengasinan IX.
          </motion.p>
        </motion.div>

        {/* HERO IMAGE — cinematic curtain reveal ORISINAL milikmu + HOVER TEXT + MAPS LINK */}
        <motion.div
          className="flex-1 min-h-[120px] w-full relative rounded-2xl md:rounded-[2rem] overflow-hidden group border border-[#1E293B]/10 shadow-sm"
          variants={revealHeight}
          initial="hidden"
          animate="visible"
          style={{ transformOrigin: 'top' }}
        >
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
            {/* OVERLAY TEKS: SDN PENGASINAN IX (Muncul saat hover) */}
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#1E293B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
              <div className="px-6 py-3 border border-white/40 bg-white/10 backdrop-blur-md rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] whitespace-nowrap">
                  SDN PENGASINAN IX
                </p>
              </div>
            </div>

            <motion.img
              src="/sekolah.jpg"
              alt="Kegiatan PPL"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /* Animasi Orisinal: Ditarik panjang (scaleY: 2) lalu kembali presisi (scaleY: 1) */
              initial={{ scaleY: 2, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
              style={{ transformOrigin: 'top' }}
            />
          </a>
        </motion.div>

      </main>

      {/* --- BOTTOM PILLS --- */}
      <motion.footer
        className="flex-none relative z-10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 w-full pt-4 mt-4 md:mt-5 border-t border-[#1E293B]/10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full md:w-auto px-6 py-2.5 md:py-3 rounded-full border border-[#1E293B] text-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] hover:text-[#F8FAFC]"
          variants={staggerItem}
        >
          Hasmunandar
        </motion.div>

        <motion.a
          href="#profil"
          className="w-full md:w-auto px-8 py-2.5 md:py-3 rounded-full border border-[#406093] bg-[#406093] text-[#F8FAFC] text-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] hover:border-[#1E293B] shadow-md hover:scale-105 group"
          variants={staggerItem}
        >
          Jelajahi ↓
        </motion.a>

        <motion.div
          className="w-full md:w-auto px-6 py-2.5 md:py-3 rounded-full border border-[#1E293B] text-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#1E293B] hover:text-[#F8FAFC]"
          variants={staggerItem}
        >
          SDN Pengasinan IX
        </motion.div>
      </motion.footer>

    </section>
  );
}