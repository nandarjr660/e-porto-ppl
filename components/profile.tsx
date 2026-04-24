'use client';

import Image from 'next/image'; // <-- TAMBAHAN IMPORT
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

export default function Profile() {
  return (
    <section 
      id="profil" 
      className="relative w-full min-h-[100svh] md:min-h-[100dvh] bg-[#F8FAFC] text-[#1E293B] px-4 py-4 md:px-10 lg:py-6 font-sans overflow-hidden flex flex-col pt-24 md:pt-28"
    >

      {/* --- DEKORASI --- */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 pointer-events-none hidden lg:block z-0" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute top-0 bottom-0 left-6 md:left-10 w-[1px] bg-[#1E293B]/10 hidden md:block z-0"></div>

      {/* --- HEADER --- */}
      <motion.header
        className="flex-none relative z-10 flex items-center gap-4 mb-3 lg:mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="w-12 h-[1px] bg-[#1E293B]"></div>
        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          Profil Mahasiswa
        </h2>
      </motion.header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 min-h-0 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

        {/* KIRI: Foto Profil */}
        <motion.div
          className="lg:col-span-4 w-full h-[40vh] min-h-[300px] md:h-[50vh] lg:h-[70vh] max-h-[600px] relative group shrink-0 lg:shrink"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-[#1E293B]/10 bg-gray-200 z-10 shadow-sm transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(30,41,59,0.3)]">
            
            {/* PERBAIKAN: Foto Profile dengan Next/Image */}
            <Image
              src="/nandar.jpg" 
              alt="Hasmunandar"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-[#406093]/10 mix-blend-overlay pointer-events-none transition-opacity duration-700 ease-out group-hover:opacity-0"></div>
          </div>

          <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 bg-[#406093] text-[#F8FAFC] px-5 py-2 lg:px-6 lg:py-3 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest z-20 shadow-xl flex items-center gap-2">
             <span className="w-2 h-2 bg-[#93C5FD] rounded-full animate-pulse"></span>
             Hasmunandar
          </div>
        </motion.div>

        {/* KANAN: Narasi Profil */}
        <motion.div
          className="lg:col-span-8 w-full flex flex-col justify-center min-h-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p
            className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] text-[#406093] mb-1 lg:mb-2"
            variants={staggerItem}
          >
            Hasmunandar
          </motion.p>

          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-[1.1] mb-3 lg:mb-4 text-[#1E293B]"
            variants={staggerItem}
          >
            "Mewarisi Keberanian Gowa, Mendidik dengan Kepedulian."
          </motion.h3>

          <motion.p
            className="text-sm md:text-base lg:text-[1.05rem] font-medium leading-relaxed mb-3 lg:mb-4 pr-2 text-justify"
            variants={staggerItem}
          >
            Saya lahir dan ditempa di <span className="font-black uppercase tracking-wide text-[#406093]">Kabupaten Gowa, Sulawesi Selatan</span>—tanah yang melahirkan ketangguhan Sultan Hasanuddin, sang 'Ayam Jantan dari Timur'. Keunikan daerah saya tidak hanya terletak pada sejarah heroiknya, tetapi pada filosofi luhur <span className="italic font-bold">Siri' Na Pacce</span>. Bagi saya, wujud nyata dari <span className="italic text-[#406093] font-bold">Pacce</span> (kepedulian dan empati sosial) di era modern adalah dengan menjadi seorang guru; sebuah keberanian untuk mengambil peran dalam mencerdaskan anak-anak bangsa dan merangkul setiap potensi yang mereka miliki.
          </motion.p>

          <motion.div
            className="pl-4 border-l-2 border-[#406093] mb-3 lg:mb-4"
            variants={staggerItem}
          >
            <p className="text-xs md:text-sm lg:text-base leading-relaxed opacity-80 font-medium pr-2 text-justify">
              Membawa semangat juang tersebut, saya menjadikan filosofi <span className="font-bold text-[#406093]">Ki Hajar Dewantara</span> sebagai kompas. Mengajar bukan sekadar mentransfer ilmu, melainkan 'menuntun' kodrat anak. Visi saya bermuara pada penciptaan ekosistem kelas yang <span className="italic font-bold text-[#406093]">Joyful, Mindful, dan Meaningful</span>—di mana setiap murid merasa bahagia, hadir secara sadar, dan menemukan makna sejati dalam proses belajar mereka.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#1E293B] text-[#F8FAFC] p-4 lg:p-5 rounded-xl relative overflow-hidden group mt-1"
            variants={staggerItem}
          >
            <div className="absolute -right-2 -top-6 text-6xl lg:text-7xl font-serif opacity-20">"</div>
            <p className="text-sm md:text-base lg:text-lg font-bold tracking-wide relative z-10 italic">
              "Pendidikan bukanlah persiapan untuk hidup; pendidikan itu sendiri adalah kehidupan."
            </p>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mt-2 opacity-60 relative z-10">
              — John Dewey
            </p>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
}