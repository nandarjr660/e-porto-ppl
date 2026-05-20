'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';
import SplitText from '@/components/split-text';
import TypingText from '@/components/typing-text';

export default function Profile() {
  return (
    <section 
      id="profil" 
      className="relative w-full min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-[#1E293B] px-6 py-24 md:px-12 lg:px-24 font-sans overflow-hidden flex flex-col justify-center"
    >
      {/* --- DECORATIVE ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#406093]/[0.03] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#406093]/[0.02] to-transparent pointer-events-none z-0" />
      <div className="absolute top-20 left-10 w-32 h-32 opacity-[0.03] pointer-events-none hidden lg:block z-0" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

      <main className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* KIRI: FOTO PROFIL */}
        <motion.div
          className="lg:col-span-5 w-full flex flex-col gap-6"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Container Foto */}
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:w-fit mx-auto lg:mx-0">
             <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] group">
                <div className="relative overflow-hidden">
                  <Image
                    src="/image/nandar.png" 
                    alt="Hasmunandar"
                    width={500}
                    height={625}
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/50 via-transparent to-transparent opacity-60" />
                </div>
             </div>
             
             {/* Badge Nama — bottom edge */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] md:w-[80%] bg-[#0F172A]/40 backdrop-blur-2xl text-white px-6 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-20 border border-white/10 hover:bg-[#0F172A]/50 hover:scale-105 transition-all duration-500 overflow-hidden group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
             </div>

             {/* Decorative corner */}
             <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#406093]/20 rounded-tl-2xl pointer-events-none hidden md:block" />
          </div>
        </motion.div>

        {/* KANAN: KONTEN NARASI */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* 01. TENTANG SAYA */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#406093] text-white flex items-center justify-center text-[10px] font-black">01</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#406093]/30 to-transparent"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-[#1E293B]">
              <SplitText text="Tentang Saya" delay={50} />
            </h3>
            <p className="text-base md:text-lg font-medium leading-relaxed text-[#1E293B]/75 text-justify">
              Saya <span className="text-[#406093] font-bold">Hasmunandar</span>, seorang pendidik muda yang lahir dan dibesarkan di tanah bersejarah <span className="font-bold">Kabupaten Gowa, Sulawesi Selatan</span>. Sebagai putra daerah yang mewarisi nilai-nilai ketangguhan, saya percaya bahwa pendidikan adalah jembatan terbaik untuk membawa perubahan nyata bagi generasi mendatang. Perjalanan profesional saya kini berfokus pada pengembangan diri melalui program Pendidikan Profesi Guru (PPG) Prajabatan.
            </p>
          </motion.div>

          {/* 02. INSPIRASI */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#406093] text-white flex items-center justify-center text-[10px] font-black">02</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#406093]/30 to-transparent"></div>
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight text-[#1E293B]">
              Filosofi <span className="italic font-serif text-[#406093]">Siri&apos; Na Pacce</span>
            </h4>
            <p className="text-base md:text-lg font-medium leading-relaxed text-[#1E293B]/75 text-justify">
              Inspirasi mengajar saya berakar pada falsafah luhur <span className="italic font-bold">Siri&apos; Na Pacce</span>. Bagi saya, <span className="font-bold">Siri&apos;</span> melambangkan harga diri dan integritas dalam menjalankan tugas, sementara <span className="font-bold text-[#406093]">Pacce</span> adalah wujud empati serta kasih sayang yang mendalam kepada sesama. Dalam konteks kelas, nilai ini saya terjemahkan sebagai komitmen untuk tidak hanya mengajar, tetapi juga peduli sepenuhnya terhadap pertumbuhan karakter dan kebahagiaan setiap peserta didik.
            </p>
          </motion.div>


        </motion.div>
      </main>

      {/* 04. QUOTES - PILL STYLE */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl mx-auto mt-16 md:mt-24 px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="bg-gradient-to-r from-[#1E293B] via-[#1E293B] to-[#1E293B]/95 px-8 md:px-16 py-6 md:py-8 rounded-[2rem] border border-[#406093]/20 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 relative overflow-hidden group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#406093]/20 to-[#60A5FA]/20 rounded-[2.1rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-r from-[#406093]/10 to-transparent blur-2xl rounded-full pointer-events-none"></div>

          <div className="flex items-center gap-4">
            <span className="text-3xl md:text-4xl text-[#406093]/40 font-serif leading-none italic">&quot;</span>
            <div className="text-base md:text-lg lg:text-xl font-medium italic text-[#F8FAFC] text-center leading-relaxed">
              <TypingText text="Pendidikan tidak merubah dunia, pendidikan merubah manusia, manusia merubah dunia." speed={30} />
            </div>
            <span className="text-3xl md:text-4xl text-[#406093]/40 font-serif leading-none italic rotate-180">&quot;</span>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-[1px] w-8 bg-gradient-to-r from-[#406093]/50 to-transparent hidden md:block"></div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#93C5FD]">
              Paulo Freire
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
