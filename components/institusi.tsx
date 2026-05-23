'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';
import Image from 'next/image';

const Institusi = memo(function Institusi() {
  const kampusMapUrl = "https://maps.app.goo.gl/LPfTj2g1xCYwtz8U7";
  const sekolahMapUrl = "https://maps.google.com/?q=SDN+Pengasinan+IX+Bekasi";
  const kampusWebUrl = "https://unismabekasi.ac.id/";
  const sekolahWebUrl = "https://sekolahanak.com/sekolah/sd-negeri-pengasinan-ix/";

  return (
    <div id="institusi" className="w-full flex flex-col font-sans bg-[#F8FAFC]">
      
      {/* =========================================
          SECTION 1: KAMPUS LPTK
          ========================================= */}
      <section className="w-full flex flex-col md:flex-row relative z-10">
        
        <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col border-r-0 md:border-r border-[#1E293B]/10 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
          
          <div className="p-8 md:p-12 lg:p-16 border-b border-[#1E293B]/10 flex flex-col justify-end md:min-h-[40vh]">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
              <motion.div className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#406093] mb-6" variants={staggerItem}>
                <span className="w-8 h-8 rounded-lg bg-[#406093] text-white flex items-center justify-center text-xs font-bold">01</span>
                LPTK Penyelenggara
              </motion.div>
              <motion.h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1E293B]" variants={staggerItem}>
                <a href={kampusWebUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#406093] transition-all duration-300 group inline-block">
                  Universitas <br/> <span className="font-serif italic lowercase tracking-normal text-[#406093] group-hover:text-[#60A5FA] transition-colors duration-300">Muhammadiyah</span> <br/> Indonesia
                  <span className="block h-[2px] w-0 bg-[#406093] group-hover:w-full transition-all duration-500 mt-1" />
                </a>
              </motion.h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#1E293B]/10">
            <div className="p-6 md:p-8 lg:p-10 border-r border-[#1E293B]/10 hover:bg-white transition-colors duration-300">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-3 h-3 text-[#406093]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Lokasi</span>
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E293B]">Bekasi, Jawa Barat</div>
            </div>
            <div className="p-6 md:p-8 lg:p-10 hover:bg-white transition-colors duration-300">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-3 h-3 text-[#406093]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Program</span>
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E293B]">PPG Prajab 2026</div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 flex-1 bg-gradient-to-b from-[#F1F5F9]/50 to-transparent flex items-center">
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-[#1E293B]/75 leading-relaxed font-medium text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6 }}
            >
              Universitas Muhammadiyah Indonesia (UM Indonesia)—sebelumnya Universitas Islam 45 (UNISMA)—merupakan Lembaga Pendidikan Tenaga Kependidikan (LPTK) tempat saya menempuh program <strong className="text-[#406093]">Pendidikan Profesi Guru (PPG) Prajabatan</strong>. Di kampus inilah fondasi pedagogik, kompetensi profesional, dan filosofi pendidikan saya ditempa secara komprehensif sebelum diimplementasikan langsung di sekolah mitra.
            </motion.p>
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 h-[50vh] md:h-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#406093]/10 z-10 mix-blend-overlay" />
          <Image 
            src="/image/kampus.jpg" 
            alt="Kampus LPTK" 
            fill
            quality={50}
            loading="lazy"
            className="object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <a
             href={kampusMapUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="absolute bottom-6 left-6 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 hover:bg-white/20 hover:text-[#93C5FD]"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
             Lihat Lokasi
           </a>
         </div>

       </section>

       {/* =========================================
           SECTION 2: SEKOLAH PPL
           ========================================= */}
       <section className="w-full flex flex-col md:flex-row-reverse relative z-10">
        
        <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col border-l-0 md:border-l border-[#1E293B]/10 bg-gradient-to-bl from-[#F8FAFC] to-[#F1F5F9]">
          
          <div className="p-8 md:p-12 lg:p-16 border-b border-[#1E293B]/10 flex flex-col justify-end md:min-h-[40vh]">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="md:text-right">
              <motion.div className="flex items-center gap-3 md:justify-end text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#406093] mb-6" variants={staggerItem}>
                <span className="w-8 h-8 rounded-lg bg-[#406093] text-white flex items-center justify-center text-xs font-bold">02</span>
                Sekolah Mitra PPL
              </motion.div>
              <motion.h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1E293B]" variants={staggerItem}>
                <a href={sekolahWebUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#406093] transition-all duration-300 group inline-block">
                  SDN <br/> <span className="font-serif italic lowercase tracking-normal text-[#406093] group-hover:text-[#60A5FA] transition-colors duration-300">Pengasinan</span> <br/> IX
                  <span className="block h-[2px] w-0 bg-[#406093] group-hover:w-full transition-all duration-500 mt-1 ml-auto" />
                </a>
              </motion.h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#1E293B]/10">
            <div className="p-6 md:p-8 lg:p-10 border-r border-[#1E293B]/10 hover:bg-white transition-colors duration-300">
              <div className="flex items-center gap-2 mb-2 md:justify-end">
                <svg className="w-3 h-3 text-[#406093]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Lokasi</span>
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E293B] md:text-right">Bekasi, Jawa Barat</div>
            </div>
            <div className="p-6 md:p-8 lg:p-10 hover:bg-white transition-colors duration-300">
              <div className="flex items-center gap-2 mb-2 md:justify-end">
                <svg className="w-3 h-3 text-[#406093]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Fokus</span>
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E293B] md:text-right">PPL Terbimbing</div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 flex-1 bg-gradient-to-b from-[#F1F5F9]/50 to-transparent flex items-center">
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-[#1E293B]/75 leading-relaxed font-medium text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6 }}
            >
              Sekolah ini menjadi lokasi pengabdian saya dalam mempraktikkan ilmu pedagogik secara langsung. Selama masa PPL, saya bertanggung jawab sebagai <strong className="text-[#406093]">guru model di kelas 3</strong>, merancang alur pembelajaran yang aktif, serta mengelola dinamika kelas secara profesional.
            </motion.p>
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 h-[50vh] md:h-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#406093]/10 z-10 mix-blend-overlay" />
          <Image 
            src="/image/sekolah.jpg" 
            alt="SDN Pengasinan IX" 
            fill
            quality={50}
            loading="lazy"
            className="object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <a
             href={sekolahMapUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="absolute bottom-6 left-6 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 hover:bg-white/20 hover:text-[#93C5FD]"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
             Lihat Lokasi
           </a>
        </div>

      </section>

    </div>
  );
});

export default Institusi;
