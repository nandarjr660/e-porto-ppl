'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

export default function Institusi() {
  // Link Google Maps sudah di-update
  const kampusMapUrl = "https://share.google/8RnJYfrV3QJi7L89k";
  const sekolahMapUrl = "https://maps.google.com/?q=SDN+Pengasinan+IX+Bekasi"; // Sesuaikan dengan link asli sekolah nanti

  return (
    <div id="institusi" className="w-full flex flex-col font-sans">
      
      {/* =========================================
          SECTION 1: KAMPUS LPTK
          ========================================= */}
      {/* PERBAIKAN: min-h-[100svh] untuk kunci layar HP */}
      <section className="relative w-full min-h-[100svh] lg:min-h-[100dvh] flex flex-col-reverse lg:flex-row bg-[#1E293B] text-[#F8FAFC] overflow-hidden">
        
        {/* KIRI: Area Teks */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-xl"
          >
            <motion.div className="flex items-center gap-4 mb-8" variants={staggerItem}>
              <div className="w-10 h-[1px] bg-[#93C5FD]"></div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#93C5FD]">
                LPTK Penyelenggara
              </p>
            </motion.div>
            
            {/* JUDUL BISA DI-KLIK (Link Maps) + ANIMASI SVG */}
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-8" variants={staggerItem}>
              <a 
                href={kampusMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/title flex flex-wrap items-center gap-2 md:gap-4 text-[#F8FAFC] hover:text-[#93C5FD] transition-colors duration-300"
              >
                <span>Universitas Muhammadiyah Indonesia</span>
                {/* SVG Ikon Panah Kanan Atas */}
                <span className="opacity-0 -translate-x-4 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </a>
            </motion.h2>
            
            {/* PILL CARDS INFO */}
            <motion.div className="flex flex-wrap gap-3 mb-10" variants={staggerItem}>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0F172A]/50 border border-[#93C5FD]/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#93C5FD]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#93C5FD]">Bekasi, Jawa Barat</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0F172A]/50 border border-[#93C5FD]/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#93C5FD]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#93C5FD]">PPG Prajabatan 2026</span>
              </div>
            </motion.div>

            {/* DESKRIPSI KAMPUS */}
            <motion.p className="text-sm md:text-base opacity-80 leading-relaxed font-medium" variants={staggerItem}>
              Mengawali langkah besarnya, Universitas Muhammadiyah Indonesia (UM Indonesia) resmi berdiri pada tahun 2026. Kampus yang sebelumnya bernama Universitas Islam 45 (UNISMA) Bekasi ini diakuisisi oleh organisasi Muhammadiyah dan bertransformasi menjadi kampus yang fokus memproduksi lulusan dengan kompetensi dan <i>skill</i> siap kerja.
            </motion.p>
          </motion.div>
        </div>

        {/* KANAN: Area Gambar dengan Efek Reveal */}
        {/* PERBAIKAN: Tinggi absolut min-h-[300px] untuk gambar agar stabil di HP */}
        <div className="w-full lg:w-1/2 h-[40vh] min-h-[300px] md:h-[45vh] lg:h-[100dvh] relative bg-gray-900 overflow-hidden group">
          <motion.img 
            src="/kampus.jpg" 
            alt="Kampus LPTK" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#1E293B] via-[#1E293B]/80 to-transparent w-full pointer-events-none transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
          <div className="lg:hidden absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
        </div>

        {/* EFEK TRANSISI HALUS KE BAWAH */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#0F172A] to-transparent z-20 pointer-events-none"></div>

      </section>


      {/* =========================================
          SECTION 2: SEKOLAH PPL
          ========================================= */}
      {/* PERBAIKAN: min-h-[100svh] untuk kunci layar HP */}
      <section className="relative w-full min-h-[100svh] lg:min-h-[100dvh] flex flex-col lg:flex-row bg-[#0F172A] text-[#F8FAFC] overflow-hidden">
        
        {/* KIRI: Area Gambar dengan Efek Reveal */}
        {/* PERBAIKAN: Tinggi absolut min-h-[300px] untuk gambar agar stabil di HP */}
        <div className="w-full lg:w-1/2 h-[40vh] min-h-[300px] md:h-[45vh] lg:h-[100dvh] relative bg-gray-900 overflow-hidden order-1 lg:order-1 group">
          <motion.img 
            src="/sekolah.jpg" 
            alt="SDN Pengasinan IX" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/80 to-transparent w-full pointer-events-none transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
          <div className="lg:hidden absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
        </div>

        {/* KANAN: Area Teks */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-end p-8 md:p-16 lg:p-24 relative z-10 order-2 lg:order-2 text-left lg:text-right">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-xl flex flex-col lg:items-end"
          >
            <motion.div className="flex items-center gap-4 mb-8" variants={staggerItem}>
              <div className="hidden lg:block w-10 h-[1px] bg-[#93C5FD]"></div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#93C5FD]">
                Sekolah Mitra PPL
              </p>
              <div className="lg:hidden w-10 h-[1px] bg-[#93C5FD]"></div>
            </motion.div>
            
            {/* JUDUL BISA DI-KLIK (Link Maps) + ANIMASI SVG */}
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-8" variants={staggerItem}>
              <a 
                href={sekolahMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/title flex flex-wrap items-center lg:justify-end gap-2 md:gap-4 text-[#F8FAFC] hover:text-[#93C5FD] transition-colors duration-300"
              >
                {/* SVG Ikon Panah (Kiri untuk Desktop) */}
                <span className="hidden lg:inline-block opacity-0 translate-x-4 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 lg:w-12 lg:h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0h11.25m-11.25 0v11.25" />
                  </svg>
                </span>
                
                <span>SDN PENGASINAN IX</span>
                
                {/* SVG Ikon Panah (Kanan untuk HP) */}
                <span className="lg:hidden opacity-0 -translate-x-4 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </a>
            </motion.h2>
            
            {/* PILL CARDS INFO */}
            <motion.div className="flex flex-wrap lg:justify-end gap-3 mb-10" variants={staggerItem}>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1E293B]/50 border border-[#93C5FD]/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#93C5FD]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#93C5FD]">Bekasi, Jawa Barat</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1E293B]/50 border border-[#93C5FD]/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#93C5FD]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#93C5FD]">PPL Terbimbing</span>
              </div>
            </motion.div>

            {/* DESKRIPSI SEKOLAH */}
            <motion.p className="text-sm md:text-base lg:text-lg opacity-80 leading-relaxed font-medium lg:text-right" variants={staggerItem}>
              Sekolah ini menjadi lokasi pengabdian saya dalam mempraktikkan ilmu pedagogik secara langsung. Selama masa PPL, saya bertanggung jawab sebagai guru model di kelas 3, merancang alur pembelajaran yang aktif, serta mengelola dinamika kelas secara profesional.
            </motion.p>
          </motion.div>
        </div>

      </section>
      
    </div>
  );
}