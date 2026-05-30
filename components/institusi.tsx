'use client';

import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';
import Image from 'next/image';
import TiltCard from '@/components/spatial/tilt-card';

const Institusi = memo(function Institusi() {
  const kampusMapUrl = "https://maps.app.goo.gl/LPfTj2g1xCYwtz8U7";
  const sekolahMapUrl = "https://maps.google.com/?q=SDN+Pengasinan+IX+Bekasi";
  const kampusWebUrl = "https://unismabekasi.ac.id/";
  const sekolahWebUrl = "https://sekolahanak.com/sekolah/sd-negeri-pengasinan-ix/";

  const kampusRef = useRef<HTMLElement>(null);
  const sekolahRef = useRef<HTMLElement>(null);

  const { scrollYProgress: scrollKampus } = useScroll({
    target: kampusRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollSekolah } = useScroll({
    target: sekolahRef,
    offset: ["start end", "end start"]
  });

  const yKampus = useTransform(scrollKampus, [0, 1], [-100, 100]);
  const ySekolah = useTransform(scrollSekolah, [0, 1], [-100, 100]);

  return (
    <div id="institusi" className="w-full flex flex-col font-sans bg-[#F8FAFC] relative overflow-hidden" style={{ perspective: "1500px" }}>
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#406093]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-emerald-200/25 blur-[120px]" />

      {/* KAMPUS LPTK */}
      <section ref={kampusRef} className="group/section relative z-10 flex flex-col md:flex-row">
        <div className="relative z-10 flex w-full flex-col border-b border-[#1E293B]/10 bg-white/60 backdrop-blur-xl transition-all duration-500 md:w-1/2 md:border-b-0 md:border-r md:border-[#1E293B]/10 hover:bg-white/80">
          <div className="flex min-h-[30vh] flex-col justify-end border-b border-[#1E293B]/10 p-8 md:min-h-[35vh] md:p-12 lg:p-16">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
              <motion.div className="mb-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#406093] md:text-xs" variants={staggerItem}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#406093] text-xs font-bold text-white shadow-lg shadow-[#406093]/20">01</span>
                LPTK Penyelenggara
              </motion.div>
              <motion.h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.85] text-[#1E293B] md:text-5xl lg:text-7xl" variants={staggerItem}>
                Universitas <br/> <span className="font-serif italic lowercase tracking-normal text-[#406093]">Muhammadiyah</span> <br/> Indonesia
              </motion.h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#1E293B]/10">
            <div className="flex items-start gap-3 border-r border-[#1E293B]/10 p-6 transition-all duration-300 hover:bg-white/80 md:p-8 lg:p-10">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#406093]/10 text-[#406093]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Lokasi</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1E293B] md:sm">Bekasi, Jawa Barat</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-6 transition-all duration-300 hover:bg-white/80 md:p-8 lg:p-10">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#406093]/10 text-[#406093]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Program</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1E293B] md:sm">PPG Prajab 2026</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-b from-transparent to-[#F1F5F9]/30 p-8 md:p-12 lg:p-16">
            <TiltCard className="relative rounded-2xl border border-[#406093]/10 bg-white/60 p-6 backdrop-blur-sm transition-all duration-500 md:p-8">
              <div className="pointer-events-none absolute -right-4 -top-4 text-6xl font-serif italic text-[#406093]/5">&quot;</div>
              <p className="text-sm leading-relaxed text-[#1E293B]/80 md:text-base lg:text-lg font-medium text-justify">
                Universitas Muhammadiyah Indonesia (UM Indonesia)—sebelumnya Universitas Islam 45 (UNISMA)—merupakan Lembaga Pendidikan Tenaga Kependidikan (LPTK) tempat saya menempuh program <strong className="text-[#406093]">Pendidikan Profesi Guru (PPG) Prajabatan</strong>. Di kampus inilah fondasi pedagogik, kompetensi profesional, dan filosofi pendidikan saya ditempa secara komprehensif sebelum diimplementasikan langsung di sekolah mitra.
              </p>
              <a
                href={kampusWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#406093] px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-[#406093]/20 transition-all duration-300 hover:bg-[#1E293B] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Kunjungi Website
              </a>
            </TiltCard>
          </div>
        </div>

        <div className="relative h-[50vh] w-full overflow-hidden md:h-auto md:w-1/2">
          <div className="absolute inset-0 z-10 bg-[#406093]/10 mix-blend-overlay" />
          <motion.div style={{ y: yKampus }} className="absolute inset-0 h-[120%] -top-[10%]">
            <Image
              src="/image/kampus.jpg"
              alt="Kampus LPTK"
              fill
              quality={50}
              loading="lazy"
              className="scale-100 object-cover transition-all duration-700 ease-in-out md:grayscale md:group-hover/section:grayscale-0 md:group-hover/section:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/30 to-transparent opacity-0 transition-opacity duration-500 md:group-hover/section:opacity-100" />
          <a
            href={kampusMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 z-30 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:text-[#93C5FD] md:group-hover/section:opacity-100 md:group-hover/section:translate-y-0 md:translate-y-2"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Lihat Lokasi
          </a>
        </div>
      </section>

      {/* SEKOLAH PPL */}
      <section ref={sekolahRef} className="group/section relative z-10 flex flex-col md:flex-row-reverse">
        <div className="relative z-10 flex w-full flex-col border-b border-[#1E293B]/10 bg-white/60 backdrop-blur-xl transition-all duration-500 md:w-1/2 md:border-b-0 md:border-l md:border-[#1E293B]/10 hover:bg-white/80">
          <div className="flex min-h-[30vh] flex-col justify-end border-b border-[#1E293B]/10 p-8 md:min-h-[35vh] md:p-12 lg:p-16">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="md:text-right">
              <motion.div className="mb-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#406093] md:justify-end md:text-xs" variants={staggerItem}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#406093] text-xs font-bold text-white shadow-lg shadow-[#406093]/20">02</span>
                Sekolah Mitra PPL
              </motion.div>
              <motion.h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.85] text-[#1E293B] md:text-5xl lg:text-7xl" variants={staggerItem}>
                SDN <br/> <span className="font-serif italic lowercase tracking-normal text-[#406093]">Pengasinan</span> <br/> IX
              </motion.h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#1E293B]/10">
            <div className="flex items-start gap-3 border-r border-[#1E293B]/10 p-6 transition-all duration-300 hover:bg-white/80 md:p-8 lg:p-10">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#406093]/10 text-[#406093]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Lokasi</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1E293B] md:sm">Bekasi, Jawa Barat</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-6 transition-all duration-300 hover:bg-white/80 md:p-8 lg:p-10">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#406093]/10 text-[#406093]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">Fokus</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1E293B] md:sm">PPL Terbimbing</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-b from-transparent to-[#F1F5F9]/30 p-8 md:p-12 lg:p-16">
            <TiltCard className="relative rounded-2xl border border-[#406093]/10 bg-white/60 p-6 backdrop-blur-sm transition-all duration-500 md:p-8">
              <div className="pointer-events-none absolute -left-4 -top-4 text-6xl font-serif italic text-[#406093]/5">&quot;</div>
              <p className="text-sm leading-relaxed text-[#1E293B]/80 md:text-base lg:text-lg font-medium text-justify">
                Sekolah ini menjadi lokasi pengabdian saya dalam mempraktikkan ilmu pedagogik secara langsung. Selama masa PPL, saya bertanggung jawab sebagai <strong className="text-[#406093]">guru model di kelas 3</strong>, merancang alur pembelajaran yang aktif, serta mengelola dinamika kelas secara profesional.
              </p>
              <a
                href={sekolahWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#406093] px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-[#406093]/20 transition-all duration-300 hover:bg-[#1E293B] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Kunjungi Website
              </a>
            </TiltCard>
          </div>
        </div>

        <div className="relative h-[50vh] w-full overflow-hidden md:h-auto md:w-1/2">
          <div className="absolute inset-0 z-10 bg-[#406093]/10 mix-blend-overlay" />
          <motion.div style={{ y: ySekolah }} className="absolute inset-0 h-[120%] -top-[10%]">
            <Image
              src="/image/sekolah.jpg"
              alt="SDN Pengasinan IX"
              fill
              quality={50}
              loading="lazy"
              className="scale-100 object-cover transition-all duration-700 ease-in-out md:grayscale md:group-hover/section:grayscale-0 md:group-hover/section:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/30 to-transparent opacity-0 transition-opacity duration-500 md:group-hover/section:opacity-100" />
          <a
            href={sekolahMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 z-30 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:text-[#93C5FD] md:group-hover/section:opacity-100 md:group-hover/section:translate-y-0 md:translate-y-2"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Lihat Lokasi
          </a>
        </div>
      </section>
    </div>
  );
});

export default Institusi;
