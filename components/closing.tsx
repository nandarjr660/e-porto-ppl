'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

export default function Closing() {
  const coreValues = [
    { num: "01", title: "Empati", desc: "Memahami dunia siswa, berpihak pada kebutuhan belajar mereka." },
    { num: "02", title: "Disiplin", desc: "Konsisten pada tujuan, menghargai waktu dan komitmen." },
    { num: "03", title: "Aktif", desc: "Menjadi fasilitator yang proaktif menghidupkan suasana kelas." },
    { num: "04", title: "Reflektif", desc: "Terus mengevaluasi diri untuk pembelajaran yang lebih baik." }
  ];

  return (
    <section
      id="closing"
      /* PERBAIKAN: Ganti min-h-[100dvh] jadi min-h-[100svh] khusus untuk HP biar layar kalem dan nggak memanjang saat address bar ngilang */
      className="relative w-full min-h-[100svh] md:min-h-[100dvh] bg-[#0F172A] overflow-x-hidden overflow-y-auto flex flex-col items-center justify-between px-6 md:px-12 py-16 md:py-20 text-center font-sans border-t border-[#1E293B]"
    >

      {/* --- BACKGROUND GLOW (Aura Biru Baja di tengah gelap) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#406093] opacity-10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* --- HEADER --- */}
      <motion.header
        className="flex-none flex flex-col items-center gap-4 relative z-10 w-full mb-8 md:mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 md:w-16 h-[1px] bg-[#93C5FD]"></div>
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#93C5FD]">Model Guru yang Dituju</h2>
          <div className="w-12 md:w-16 h-[1px] bg-[#93C5FD]"></div>
        </div>
      </motion.header>

      {/* --- TENGAH: Visi & Paragraf --- */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10 w-full lg:w-[90%] my-6">
        
        <motion.h1
          className="text-3xl md:text-4xl lg:text-[3.2rem] font-black uppercase tracking-tight leading-[1.1] text-[#F8FAFC] max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.1 }}
        >
          "Bukan sekadar mentransfer ilmu, melainkan membimbing, menginspirasi, dan menciptakan <span className="text-[#93C5FD] italic font-serif">pengalaman bermakna.</span>"
        </motion.h1>

        {/* Efek Manifesto Card: Kotak Kaca Eksklusif Biru Gelap */}
        <motion.div
          className="mt-8 md:mt-12 relative w-full max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#1E293B]/60 to-transparent border border-[#406093]/30 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)] group"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.25 }}
        >
          {/* Garis cahaya dekoratif Biru Muda */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent opacity-60 group-hover:opacity-100 group-hover:w-1/2 transition-all duration-700"></div>
          
          <p className="text-sm md:text-base lg:text-[1.1rem] opacity-90 leading-relaxed font-medium mx-auto text-[#F8FAFC] text-center relative z-10 px-4 md:px-8">
            <span className="absolute -top-4 left-0 text-5xl md:text-6xl text-[#406093]/30 font-serif leading-none">"</span>
            Melalui rangkaian Praktik Pengalaman Lapangan (PPL) ini, saya menyadari bahwa ruang kelas adalah laboratorium kehidupan. Visi saya terbentuk dari interaksi nyata bersama siswa, di mana seorang guru harus hadir secara utuh untuk mereka.
            <span className="absolute -bottom-8 right-0 text-5xl md:text-6xl text-[#406093]/30 font-serif leading-none rotate-180">"</span>
          </p>
        </motion.div>

      </main>

      {/* --- BAWAH: Core Values & Identitas --- */}
      <footer className="flex-none relative z-10 flex flex-col gap-10 md:gap-14 border-t border-[#1E293B]/50 pt-10 w-full lg:w-[90%] mx-auto mt-10">

        <div className="w-full">
          <motion.p
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-50 mb-8 md:mb-10 text-[#F8FAFC] text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Karakter & Kompetensi Guru
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-12 text-[#F8FAFC] text-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {coreValues.map((val, idx) => (
              <motion.div key={idx} className="relative border-t border-[#1E293B]/50 pt-4 group" variants={staggerItem}>
                {/* Angka Raksasa (01, 02) menggunakan Slate yang sangat pudar */}
                <div className="absolute right-0 top-0 text-6xl md:text-7xl font-black text-[#F8FAFC]/5 -mt-4 md:-mt-6 group-hover:text-[#93C5FD]/10 transition-colors duration-500 pointer-events-none">
                  {val.num}
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-[0.2em] text-[#93C5FD] mb-2 relative z-10">
                  {val.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base opacity-80 font-medium leading-relaxed max-w-[90%] relative z-10">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Identitas akhir */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center md:items-end mt-4 pt-6 border-t border-[#1E293B]/50 text-[#F8FAFC] gap-4 md:gap-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
           {/* Opsional: Kamu bisa meletakkan nama/copyright di sini jika mau */}
        </motion.div>
      </footer>

    </section>
  );
}