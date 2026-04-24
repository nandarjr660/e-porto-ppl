'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

interface SiklusItem {
  id: string;
  title: string;
  rppTitle: string;
  tanggal: string;
  durasi: string;
  kelas: string;
  desc: string;
  img: string;
  konteks: string;
  tujuan: string;
  plus: string;
  minus: string;
  teori: string;
  nilai: {
    gp: number;
    dpl: number;
  };
  gallery: string[];
  rppLink: string;
  mediaLink: string;
}

export default function Artifact() {
  const [activeCycle, setActiveCycle] = useState<string | null>(null);
  
  // State untuk Pop-up Galeri dan Index Foto Slider
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const dataSiklus: SiklusItem[] = [
    {
      id: "01",
      title: "SIKLUS 1",
      rppTitle: "Topik: Ekosistem & Rantai Makanan (IPAS)",
      tanggal: "12 APRIL 2026",
      durasi: "2 x 35 MENIT",
      kelas: "Kelas 3",
      desc: "Pembelajaran mengenai keseimbangan ekosistem menggunakan model Problem Based Learning (PBL). Siswa memecahkan masalah nyata terkait penurunan populasi hewan tertentu di lingkungan sekitar.",
      img: "/sekolah.jpg", 
      konteks: "Diterapkan pada materi IPAS untuk mendorong siswa Kelas 3 berpikir kritis melalui masalah lingkungan.",
      tujuan: "Siswa mampu mengidentifikasi masalah, melakukan investigasi mandiri, dan menyajikan solusi secara kreatif.",
      plus: "Siswa sangat antusias karena materi dikaitkan dengan fenomena sehari-hari di sekitar sekolah.",
      minus: "Manajemen waktu saat fase investigasi kelompok perlu pendampingan lebih intensif.",
      teori: "Mengacu pada teori konstruktivisme, di mana siswa membangun pengetahuan melalui pengalaman langsung dan kolaborasi.",
      nilai: { gp: 95, dpl: 96 },
      gallery: ["/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg"],
      rppLink: "#",
      mediaLink: "#"
    },
    {
      id: "02",
      title: "SIKLUS 2",
      rppTitle: "Topik: Teks Eksplanasi Ilmiah (B. Indonesia)",
      tanggal: "26 APRIL 2026",
      durasi: "2 x 35 MENIT",
      kelas: "Kelas 3",
      desc: "Menganalisis struktur teks eksplanasi ilmiah menggunakan pendekatan PBL. Siswa mengamati video fenomena alam dan menyusun teks eksplanasi berdasarkan urutan sebab-akibat.",
      img: "/sekolah.jpg",
      konteks: "Penggunaan media presentasi interaktif untuk membantu siswa memahami struktur teks yang abstrak.",
      tujuan: "Meningkatkan kemampuan literasi siswa dalam menyusun argumen yang logis dan terstruktur.",
      plus: "Partisipasi siswa meningkat drastis; siswa lebih mudah merangkai kata melalui visualisasi fenomena alam.",
      minus: "Memerlukan persiapan teknis ekstra untuk memastikan perangkat penayangan video berfungsi.",
      teori: "Diperkuat kerangka TPACK (Technological Pedagogical Content Knowledge) dalam penyajian materi Kelas 3.",
      nilai: { gp: 96, dpl: 98 },
      gallery: ["/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg"],
      rppLink: "#",
      mediaLink: "#"
    },
    {
      id: "03",
      title: "SIKLUS 3",
      rppTitle: "Topik: Rangkaian Listrik Sederhana (IPAS)",
      tanggal: "10 MEI 2026",
      durasi: "2 x 35 MENIT",
      kelas: "Kelas 3",
      desc: "Praktikum pembuatan rangkaian listrik seri dan paralel. Siswa diberikan masalah 'padamnya lampu di satu ruangan tanpa mematikan ruangan lain' (PBL) dan mencari solusinya melalui percobaan.",
      img: "/sekolah.jpg",
      konteks: "Implementasi asesmen formatif sekaligus praktikum langsung agar siswa memahami konsep kelistrikan.",
      tujuan: "Siswa dapat membedakan dan merakit sendiri rangkaian seri dan paralel dengan tepat.",
      plus: "Pembelajaran sangat bermakna (meaningful) karena siswa bereksperimen langsung dengan alat peraga.",
      minus: "Pengelolaan alat dan bahan praktikum membutuhkan pengawasan ketat demi keselamatan.",
      teori: "Menggunakan prinsip Experiential Learning (Kolb) dipadukan dengan PBL untuk pemahaman mendalam.",
      nilai: { gp: 97, dpl: 98 },
      gallery: ["/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg", "/sekolah.jpg"],
      rppLink: "#",
      mediaLink: "#"
    }
  ];

  const activeData = dataSiklus.find(s => s.id === activeCycle);

  // FUNGSI NAVIGASI SLIDER CAROUSEL
  const handleNextPhoto = () => {
    if (activeData) setCurrentPhotoIndex((prev) => (prev + 1) % activeData.gallery.length);
  };
  const handlePrevPhoto = () => {
    if (activeData) setCurrentPhotoIndex((prev) => (prev - 1 + activeData.gallery.length) % activeData.gallery.length);
  };

  return (
    <section 
      id="artifact" 
      /* PERBAIKAN: Gunakan min-h-[100svh] agar layar HP tidak memanjang saat scroll */
      className="relative w-full min-h-[100svh] lg:h-[100dvh] bg-[#F8FAFC] text-[#1E293B] font-sans overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col pt-24 pb-10 px-6 md:px-10 lg:px-12 border-b border-[#1E293B]/10"
    >
      
      {/* HEADER UTAMA */}
      <motion.header
        className="flex-none mb-6 lg:mb-6 relative z-30 transition-all duration-700"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div className="flex items-center gap-4 mb-2" variants={staggerItem}>
          <div className="w-12 h-[1px] bg-[#406093]"></div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#406093]">Dedikasi di SDN Pengasinan IX</p>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-[#1E293B]"
          variants={staggerItem}
        >
          Rekam Jejak Mengajar
        </motion.h1>
      </motion.header>

      {/* CONTAINER UTAMA */}
      <div className="relative flex-1 w-full min-h-0 border-t border-[#1E293B]/10 pt-6 flex flex-col lg:block">

        {/* 1. KARTU SIKLUS UTAMA */}
        {dataSiklus.map((item: SiklusItem, idx: number) => {
          const isSelected = activeCycle === item.id;
          let lgTransform = "lg:translate-x-0 lg:scale-100";
          let lgOpacity = "lg:opacity-100";
          let mobileDisplay = "block";

          if (activeCycle) {
            if (isSelected) {
              if (idx === 0) lgTransform = "lg:translate-x-0 lg:scale-[0.95]";
              if (idx === 1) lgTransform = "lg:-translate-x-[100%] lg:scale-[0.95]";
              if (idx === 2) lgTransform = "lg:-translate-x-[200%] lg:scale-[0.95]";
            } else {
              lgTransform = "lg:translate-x-[200vw] lg:scale-100";
              lgOpacity = "lg:opacity-0 lg:pointer-events-none";
              mobileDisplay = "hidden lg:block";
            }
          }

          const leftPos = idx === 0 ? "lg:left-0" : idx === 1 ? "lg:left-[33.333%]" : "lg:left-[66.666%]";

          return (
            <motion.div
              key={item.id}
              className={`relative lg:absolute top-0 h-auto lg:h-full w-full lg:w-[33.333%] lg:pr-6 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 mb-8 lg:mb-0 ${leftPos} ${lgTransform} ${lgOpacity} ${mobileDisplay}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: idx * 0.15 }}
            >
              <div className={`relative h-full flex flex-col transition-all duration-700 ${isSelected ? 'bg-white border border-[#406093]/20 rounded-2xl p-6 shadow-xl' : 'border-b lg:border-b-0 lg:border-r border-[#1E293B]/10 pb-8 lg:pb-0 lg:pr-6'}`}>

                <div className="absolute top-4 right-4 text-8xl md:text-9xl font-black leading-none text-[#1E293B]/5 pointer-events-none">{item.id}</div>

                <motion.div
                  className="relative z-10 flex flex-col gap-2 flex-none"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                >
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#406093] leading-none">{item.title}</h2>
                    <h3 className="text-sm lg:text-base font-bold mt-2 text-[#1E293B]/90">{item.rppTitle}</h3>
                  </motion.div>

                  <motion.div className="flex flex-wrap gap-2 mt-3" variants={staggerItem}>
                    <span className="px-3 py-1.5 bg-[#F1F5F9] border border-[#406093]/20 rounded-md text-[10px] lg:text-xs font-bold tracking-widest text-[#406093] shadow-sm">{item.tanggal}</span>
                    <span className="px-3 py-1.5 bg-[#F1F5F9] border border-[#406093]/20 rounded-md text-[10px] lg:text-xs font-bold tracking-widest text-[#406093] shadow-sm">{item.durasi}</span>
                    <span className="px-3 py-1.5 bg-[#F1F5F9] border border-[#406093]/20 rounded-md text-[10px] lg:text-xs font-bold tracking-widest text-[#406093] shadow-sm">{item.kelas}</span>
                  </motion.div>

                  <motion.p className="text-sm lg:text-[0.95rem] opacity-80 leading-relaxed font-medium mt-4 text-justify" variants={staggerItem}>
                    {item.desc}
                  </motion.p>
                </motion.div>

                {/* ANIMASI GAMBAR ORISINAL DENGAN KUNCI TINGGI UNTUK HP */}
                <motion.div
                  /* PERBAIKAN: Tinggi fix di HP (h-[180px]) dan kembali flex-1 di layar laptop (md) */
                  className="w-full flex-1 h-[180px] md:h-auto min-h-[140px] max-h-[220px] mt-6 mb-5 rounded-xl overflow-hidden border border-[#1E293B]/10 relative cursor-pointer group bg-[#F8FAFC]"
                  onClick={() => setActiveCycle(isSelected ? null : item.id)}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: idx * 0.15 + 0.3 }}
                  style={{ transformOrigin: 'top' }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    initial={{ scaleY: 2, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: idx * 0.15 + 0.35 }}
                    style={{ transformOrigin: 'top' }}
                  />
                  <div className="absolute inset-0 bg-[#406093]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </motion.div>

                <motion.button 
                  onClick={() => setActiveCycle(isSelected ? null : item.id)}
                  className={`mt-auto w-full py-4 rounded-xl text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 flex justify-center items-center gap-2 flex-none ${
                    isSelected 
                      ? 'bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0] border border-[#1E293B]/10' 
                      : 'bg-[#406093] text-[#F8FAFC] hover:bg-[#1E293B] shadow-[0_4px_14px_0_rgba(64,96,147,0.39)]'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {isSelected ? 'Tutup Detail' : 'Baca Selengkapnya'}
                  {!isSelected && <span className="text-lg leading-none">→</span>}
                </motion.button>

              </div>
            </motion.div>
          );
        })}

        {/* 2. PANEL DETAIL SAMPING */}
        <div 
          className={`relative lg:absolute top-0 right-0 h-auto lg:h-full w-full lg:w-[66.666%] lg:pl-6 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 mt-2 lg:mt-0 pb-10 lg:pb-0 ${activeCycle ? 'block lg:translate-x-0 opacity-100' : 'hidden lg:flex lg:translate-x-[50%] opacity-0 pointer-events-none'}`}
        >
          {activeData && (
            <div className="h-full w-full flex flex-col lg:flex-row gap-8 lg:gap-10">
              
              {/* KIRI: TEKS ANALISIS */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#F1F5F9] text-[#406093] border border-[#406093]/20 text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">Konteks</span>
                    <p className="text-base lg:text-lg opacity-90 leading-relaxed font-medium">{activeData.konteks}</p>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#F1F5F9] text-[#406093] border border-[#406093]/20 text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">Tujuan</span>
                    <p className="text-base lg:text-lg opacity-90 leading-relaxed font-medium">{activeData.tujuan}</p>
                  </div>
                </div>

                <hr className="border-[#1E293B]/10 my-6 lg:my-4" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-2 border-[#10B981] pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981] mb-2">Kelebihan</h4>
                    <p className="text-base lg:text-lg opacity-90 leading-relaxed font-medium">{activeData.plus}</p>
                  </div>
                  <div className="border-l-2 border-[#F59E0B] pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B] mb-2">Kekurangan</h4>
                    <p className="text-base lg:text-lg opacity-90 leading-relaxed font-medium">{activeData.minus}</p>
                  </div>
                </div>

                <hr className="border-[#1E293B]/10 my-6 lg:my-4" />

                <div className="bg-[#F1F5F9] rounded-xl p-5 border border-[#1E293B]/5">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#406093] mb-2">Kajian Teori Pendukung</h4>
                  <p className="text-base lg:text-lg opacity-90 leading-relaxed italic font-medium">"{activeData.teori}"</p>
                </div>
              </div>

              {/* KANAN: GALERI, NILAI, TOMBOL */}
              <div className="w-full lg:w-[32%] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1E293B]/10 pt-8 lg:pt-0 lg:pl-8 py-2">
                <div className="mb-8 lg:mb-0">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E293B] mb-4">Galeri Dokumentasi</h4>
                  
                  {/* KUNCI EFEK MENYUSUT 1: Wrapper dibungkus <motion.div> dengan layoutId */}
                  <motion.div 
                    layoutId={`gallery-wrapper-${activeData.id}`}
                    className="grid grid-cols-2 gap-3 cursor-pointer group bg-white p-2 rounded-2xl border border-[#1E293B]/10 shadow-sm"
                    onClick={() => { setIsGalleryOpen(true); setCurrentPhotoIndex(0); }}
                  >
                    {activeData.gallery.slice(0,2).map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-200 relative">
                        <img src={img} alt="Dokumentasi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        
                        {/* Jika foto lebih dari 2, munculkan teks overlay "+X Foto" */}
                        {i === 1 && activeData.gallery.length > 2 && (
                          <div className="absolute inset-0 bg-[#1E293B]/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#406093]/80">
                            <span className="text-white font-black text-xs tracking-widest uppercase">
                              +{activeData.gallery.length - 2} Foto
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                  <p className="text-[9px] font-bold text-[#406093] mt-3 opacity-70 uppercase tracking-wider text-center flex items-center justify-center gap-1">
                    <span className="text-sm"></span> Klik untuk melihat semua
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2">Guru Pamong</p>
                      <span className="text-5xl font-black text-[#406093] leading-none">{activeData.nilai.gp}</span>
                    </div>
                    <div className="w-[1px] h-10 bg-[#1E293B]/20 mx-2"></div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2">DPL</p>
                      <span className="text-5xl font-black text-[#406093] leading-none">{activeData.nilai.dpl}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a href={activeData.rppLink} className="w-full py-4 bg-[#1E293B] text-[#F8FAFC] rounded-xl text-center text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#406093] shadow-md transition-colors">
                      Unduh RPP
                    </a>
                    <a href={activeData.mediaLink} target="_blank" className="w-full py-4 border-2 border-[#406093]/20 rounded-xl text-center text-[#406093] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#406093]/5 transition-colors">
                      Akses Media
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* POP-UP (MODAL) EFEK SLIDER NGINTIP & MENYUSUT */}
      <AnimatePresence>
        {isGalleryOpen && activeData && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 pointer-events-auto">
            
            {/* Latar Belakang Kaca Buram */}
            <motion.div 
              className="absolute inset-0 bg-[#1E293B]/80 backdrop-blur-md"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsGalleryOpen(false)}
            />

            {/* KUNCI EFEK MENYUSUT 2: Kotak Modal dihubungkan ke layoutId Thumbnail */}
            <motion.div
              layoutId={`gallery-wrapper-${activeData.id}`}
              className="relative bg-[#F8FAFC] w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col border border-white/20 z-10"
            >
              {/* Header Modal */}
              <div className="flex justify-between items-center p-5 lg:px-8 border-b border-[#1E293B]/10 flex-none bg-white relative z-50">
                <div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter text-[#406093] leading-none">{activeData.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E293B]/50 mt-1">Galeri Dokumentasi Lengkap</p>
                </div>
                <button 
                  onClick={() => setIsGalleryOpen(false)} 
                  className="w-10 h-10 rounded-full bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0] hover:text-red-500 transition-colors flex items-center justify-center font-black text-lg"
                >
                  ✕
                </button>
              </div>
              
              {/* EFEK SLIDER "NGINTIP" (CENTER MODE) */}
              <div className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#E2E8F0] py-10">
                
                {/* Tombol Panah PC */}
                <button onClick={handlePrevPhoto} className="absolute left-4 z-40 w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-2xl hover:bg-white shadow-lg hidden md:flex text-[#1E293B]">‹</button>
                <button onClick={handleNextPhoto} className="absolute right-4 z-40 w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-2xl hover:bg-white shadow-lg hidden md:flex text-[#1E293B]">›</button>

                <AnimatePresence initial={false}>
                  {activeData.gallery.map((img, i) => {
                    const total = activeData.gallery.length;
                    
                    // Rumus menentukan posisi foto: Tengah(0), Kanan(1), Kiri(-1)
                    let offset = i - currentPhotoIndex;
                    if (offset < -1) offset += total;
                    if (offset > 1) offset -= total;
                    
                    // Sembunyikan foto yang berada di urutan selain -1, 0, 1
                    if (offset < -1 || offset > 1) return null; 

                    return (
                      <motion.img
                        key={i}
                        src={img}
                        // Fitur Drag/Swipe untuk pengguna Mobile
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.8}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = offset.x;
                          if (swipe < -50) handleNextPhoto(); // Swipe Kiri
                          else if (swipe > 50) handlePrevPhoto(); // Swipe Kanan
                        }}
                        className={`absolute w-[75%] md:w-[60%] max-w-2xl aspect-[4/3] md:aspect-video object-cover rounded-2xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white`}
                        initial={false}
                        // Animasi perpindahan gambar (Ngintip)
                        animate={{
                          x: offset === 0 ? "0%" : offset === 1 ? "60%" : "-60%", 
                          scale: offset === 0 ? 1 : 0.85, 
                          opacity: offset === 0 ? 1 : 0.4, 
                          zIndex: offset === 0 ? 30 : 20,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={() => {
                          if (offset === 1) handleNextPhoto();
                          if (offset === -1) handlePrevPhoto();
                        }}
                      />
                    );
                  })}
                </AnimatePresence>

                {/* Dots Indikator */}
                <div className="absolute bottom-4 flex gap-2 z-40">
                  {activeData.gallery.map((_, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === currentPhotoIndex ? 'w-8 bg-[#406093]' : 'w-2 bg-[#1E293B]/20'}`} />
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}