'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';
import Image from 'next/image';
import SplitText from '@/components/split-text';
import TypingText from '@/components/typing-text';

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
  hasilKerja: string;
  mediaBelajar: string;
  nilai: { gp: number; dpl: number };
  galleryMedia: string[];
  galleryHasil: string[];
  galleryDokumentasi: string[];
  rppLink: string;
  mediaLink: string;
  isOngoing?: boolean;
}

const dataSiklus: SiklusItem[] = [
  {
    id: '01',
    title: 'Siklus 1',
    rppTitle: 'Sumber Energi Di Sekitar Kita (IPAS)',
    tanggal: '9 April 2026',
    durasi: '2 × 35 Menit',
    kelas: 'Kelas 3A',
    desc: 'Pembelajaran mengenai Sumber Energi Di Sekitar Kita menggunakan model Problem Based Learning (PBL). Siswa mampu menyebutkan, menjelaskan dan mengelompokkan sumber energi yang ada di sekitar mereka.',
    img: '/class/s16.jpg',
    konteks: 'Implementasi pembelajaran IPAS Bab 4 Topik B untuk memfasilitasi siswa Kelas 3A dalam mengenali berbagai sumber energi di lingkungan sekitar.',
    tujuan: 'Melalui pengamatan benda konkret, siswa mampu menyebutkan, menjelaskan, dan mengelompokkan berbagai benda berdasarkan sumber energinya dengan benar.',
    plus: 'Siswa sangat antusias karena penggunaan benda konkret memudahkan mereka dalam mengaitkan materi sumber energi dengan kehidupan sehari-hari.',
    minus: 'Manajemen kelas belum optimal serta diperlukannya penguatan pada penyusunan instrumen asesmen dan artikulasi Tujuan Pembelajaran (TP).',
    teori: 'Berlandaskan teori konstruktivisme Piaget, di mana siswa membangun pemahaman bermakna melalui manipulasi benda konkret dan interaksi sosial dalam kelompok.',
    hasilKerja: 'Siswa berhasil mengelompokkan gambar/benda konkret ke tabel pengamatan energi dengan akurasi 85%. LKPD diisi secara berkelompok dengan diskusi yang aktif.',
    mediaBelajar: 'Benda-benda konkret di sekitar (kipas angin kecil, senter), kartu gambar sumber energi, dan proyektor untuk video interaktif.',
    nilai: { gp: 86, dpl: 87 },
    galleryMedia: ['/image/sekolah.jpg', '/image/kampus.jpg', '/image/sekolah.jpg'],
    galleryHasil: ['/image/kampus.jpg', '/image/sekolah.jpg', '/image/kampus.jpg'],
    galleryDokumentasi: [
      '/class/s11.jpg', '/class/s12.jpg', '/class/s13.jpg',
      '/class/s14.jpg', '/class/s15.jpg', '/class/s16.jpg',
    ],
    rppLink: 'https://drive.google.com/file/d/1zb98GgGuXshl7GuIHXUvvn-F7yIwOy_2/view?usp=sharing',
    mediaLink: 'https://drive.google.com/drive/folders/1X_jEN-yMCjnwBATn3wKIkNo9VxeveTgq?usp=drive_link',
  },
  {
    id: '02',
    title: 'Siklus 2',
    rppTitle: 'Yuk, Makan Sampai Habis (IPAS)',
    tanggal: '16 April 2026',
    durasi: '2 × 35 Menit',
    kelas: 'Kelas 3A',
    desc: "Menganalisis konsep perubahan energi pada Topik 'Yuk, Makan Sampai Habis' menggunakan model PBL. Siswa melakukan aktivitas fisik pembuktian energi dan merumuskan solusi penghematan energi di kelas.",
    img: '/class/s23.jpeg',
    konteks: 'Penggunaan media presentasi interaktif dan aktivitas fisik untuk membantu siswa memahami konsep perubahan energi secara nyata.',
    tujuan: 'Meningkatkan kemampuan bernalar kritis siswa dalam merumuskan ide penghematan energi makanan dan listrik.',
    plus: 'Suasana kelas terbangun sangat kondusif; siswa berpartisipasi dengan lebih aktif dan antusias selama proses pembelajaran berlangsung.',
    minus: 'Pelaksanaan asesmen belum optimal; diperlukan manajemen waktu yang lebih terstruktur agar penerapan alur sintak PBL lebih jelas dan terarah.',
    teori: 'Diperkuat pendekatan Deep Learning (Mindful, Meaningful, Joyful) and TPACK dalam penyajian materi Kelas 3A.',
    hasilKerja: 'Siswa merancang poster sederhana tentang cara menghemat energi di rumah dan mempresentasikan hasilnya di depan kelas dengan penuh percaya diri.',
    mediaBelajar: 'Video animasi perubahan energi makanan, lembar kerja proyek (LKPD berbasis proyek), dan alat peraga makanan tiruan.',
    nilai: { gp: 85, dpl: 80 },
    galleryMedia: ['/image/sekolah.jpg', '/image/kampus.jpg', '/image/sekolah.jpg'],
    galleryHasil: ['/image/kampus.jpg', '/image/sekolah.jpg', '/image/kampus.jpg'],
    galleryDokumentasi: [
      '/class/s21.jpeg', '/class/s22.jpeg', '/class/s23.jpeg',
      '/class/s24.jpeg', '/class/s25.jpeg', '/class/s26.jpeg',
    ],
    rppLink: 'https://drive.google.com/file/d/1LFTlmODklknM7Q1CKe57_CVnELQhnQmb/view?usp=sharing',
    mediaLink: 'https://drive.google.com/drive/folders/17kBHSABNpqfLY9q8WBpRnoFcJxNGP68x?usp=sharing',
  },
  {
    id: '03',
    title: 'Siklus 3',
    rppTitle: 'Ragam bentang Alam di Indonesia (IPAS)',
    tanggal: '13 Mei 2026',
    durasi: '2 × 35 Menit',
    kelas: 'Kelas 3A',
    desc: 'Pembelajaran mengenai Ragam Bentang Alam di Indonesia menggunakan model Problem Based Learning (PBL). Siswa diajak untuk mengenali karakteristik geografis dan kekayaan alam di berbagai daerah.',
    img: '/class/33.jpeg',
    konteks: 'Mempelajari karakteristik geografis dan ragam bentang alam di Indonesia untuk memperluas wawasan kebangsaan siswa.',
    tujuan: 'Siswa dapat mengidentifikasi berbagai macam bentang alam di Indonesia beserta ciri-cirinya secara akurat.',
    plus: 'Siswa sangat tertarik dan antusias saat mengeksplorasi gambar-gambar bentang alam dari berbagai daerah.',
    minus: 'Beberapa siswa masih membutuhkan pendampingan lebih saat membedakan karakteristik spesifik dari setiap bentang alam.',
    teori: 'Pendekatan pembelajaran kontekstual yang menghubungkan konsep geografi dengan lingkungan sekitar siswa secara nyata.',
    hasilKerja: 'Siswa berhasil menyusun peta konsep sederhana mengenai klasifikasi bentang alam dengan baik.',
    mediaBelajar: 'Gambar-gambar bentang alam, video dokumenter singkat, dan peta Indonesia interaktif.',
    nilai: { gp: 0, dpl: 0 },
    galleryMedia: ['/image/sekolah.jpg', '/image/kampus.jpg', '/image/sekolah.jpg'],
    galleryHasil: ['/image/kampus.jpg', '/image/sekolah.jpg', '/image/kampus.jpg'],
    galleryDokumentasi: [
      '/class/31.jpeg', '/class/32.jpeg', '/class/37.jpeg',
      '/class/34.jpeg', '/class/35.jpeg', '/class/36.jpeg',
    ],
    rppLink: '#',
    mediaLink: '#',
  },
];

function GallerySection({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <div>
      <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#406093] mb-3 flex items-center gap-2">
        <span className="w-3 h-[2px] bg-[#406093] inline-block" />
        {title}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="aspect-square rounded-xl overflow-hidden bg-[#E2E8F0] group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2"
          >
            <Image
              src={img}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 200px"
            />
            <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/30 transition-all duration-300 flex items-center justify-center">
              <svg className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[300] bg-[#0F172A]/95 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex-none flex justify-between items-center px-6 py-4 border-b border-white/10">
              <p className="text-xs font-black uppercase tracking-widest text-white/50">{title} — {lightbox + 1} / {images.length}</p>
              <button onClick={() => setLightbox(null)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 relative flex items-center justify-center p-6">
              <motion.div key={lightbox} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full h-full max-w-5xl">
                <Image src={images[lightbox]} alt="" fill className="object-contain" sizes="90vw" />
              </motion.div>
              {images.length > 1 && (
                <>
                  <button onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)} className="absolute left-6 md:left-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={() => setLightbox((lightbox + 1) % images.length)} className="absolute right-6 md:right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </>
              )}
            </div>
            <div className="flex-none flex items-center justify-center gap-2 p-6 overflow-x-auto custom-scrollbar border-t border-white/10">
              {images.map((img, i) => (
                <button key={i} onClick={() => setLightbox(i)} className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] ${i === lightbox ? 'ring-2 ring-[#406093] scale-110' : 'opacity-40 hover:opacity-80'}`}>
                  <Image src={img} alt="" fill className="object-cover" sizes="100px" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BentoGallery({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-black uppercase tracking-wider text-[#1E293B]">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {title}
          </span>
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className={`group relative overflow-hidden rounded-2xl bg-gray-100 border border-[#1E293B]/10 transition-all duration-500 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2
              ${i === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-[4/3]'}
            `}
          >
            <div className={`relative ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3]'}`}>
              <Image
                src={img}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                 <div className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[300] bg-[#0F172A]/98 backdrop-blur-2xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <div className="flex-none flex justify-between items-center px-8 py-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#93C5FD] mb-1">Dokumentasi Praktik</span>
                  <p className="text-xs font-bold text-white/50 tracking-widest">{title} — Foto {lightbox + 1}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             
              <div className="flex-1 relative flex items-center justify-center p-4 md:p-10">
                 <motion.div key={lightbox} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="relative w-full h-full">
                   <Image src={images[lightbox]} alt="" fill className="object-contain" sizes="80vw" />
                 </motion.div>
                
                {images.length > 1 && (
                  <>
                    <button onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)} className="absolute left-6 md:left-12 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={() => setLightbox((lightbox + 1) % images.length)} className="absolute right-6 md:right-12 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </>
                )}
             </div>

             <div className="flex-none p-8 flex items-center justify-center gap-3 overflow-x-auto max-w-full custom-scrollbar">
                {images.map((img, i) => (
                   <button key={i} onClick={() => setLightbox(i)} className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 border-2 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] ${i === lightbox ? 'border-[#93C5FD] scale-110 shadow-lg shadow-[#93C5FD]/20' : 'border-transparent opacity-30 hover:opacity-100'}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="100px" />
                  </button>
                ))}
             </div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
}

export default function Artifact() {
  const [activeId, setActiveId] = useState('01');
  const data = dataSiklus.find(s => s.id === activeId)!;

  return (
    <section id="artifact" className="w-full bg-[#F8FAFC] bg-noise text-[#1E293B] font-sans overflow-x-hidden pt-[56px]">

      {/* STICKY HEADER + TABS */}
      <div className="sticky top-[56px] z-40 bg-[#F8FAFC]/80 backdrop-blur-xl border-b border-[#1E293B]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#406093] mb-1">Dedikasi di SDN Pengasinan IX</p>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1E293B] leading-none">
              <SplitText text="Rekam Jejak Mengajar" delay={40} />
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl self-start sm:self-auto border border-[#1E293B]/5 shadow-sm">
            {dataSiklus.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`relative px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] ${
                  activeId === s.id
                    ? 'text-white shadow-md'
                    : 'text-[#475569] hover:text-[#1E293B]'
                }`}
              >
                <span className="relative z-10">{s.title}</span>
                {activeId === s.id && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-[#406093] rounded-xl z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="min-h-[80vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10"
        >
          {data.isOngoing ? (
            /* ── ONGOING STATE ── */
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#F1F5F9] border-2 border-dashed border-[#406093]/30 flex items-center justify-center text-[#406093]">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase text-[#1E293B] mb-2">Sedang Berlangsung</h2>
                <div className="text-[#475569] max-w-md leading-relaxed text-center mx-auto">
                  <TypingText text="Siklus 3 saat ini sedang berlangsung sehingga dokumen pendukung belum tersedia. Pantau terus untuk pembaruan." speed={25} />
                </div>
              </div>
              <div className="relative w-full max-w-md h-48 opacity-60 mt-4 overflow-hidden rounded-2xl border border-[#1E293B]/10">
                <Image src={data.img} alt="SDN Pengasinan IX" fill className="object-cover" sizes="(max-width: 768px) 100vw, 450px" />
              </div>
            </motion.div>
          ) : (
            /* ── FULL DETAIL ── */
            <div className="space-y-12">

              {/* HERO SECTION */}
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <motion.div variants={staggerItem} className="flex items-center gap-3">
                    <span className="text-6xl font-black text-[#1E293B]/5 leading-none select-none">{data.id}</span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#406093] mb-1">Topik Pembelajaran</p>
                      <h2 className="text-2xl lg:text-3xl font-black text-[#1E293B] leading-tight">{data.rppTitle}</h2>
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItem} className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-[#406093]/10 text-[#406093] text-[11px] font-black uppercase tracking-widest rounded-lg">{data.tanggal}</span>
                    <span className="px-3 py-1.5 bg-[#406093]/10 text-[#406093] text-[11px] font-black uppercase tracking-widest rounded-lg">{data.durasi}</span>
                    <span className="px-3 py-1.5 bg-[#406093]/10 text-[#406093] text-[11px] font-black uppercase tracking-widest rounded-lg">{data.kelas}</span>
                  </motion.div>
                  <motion.p variants={staggerItem} className="text-base text-[#475569] leading-relaxed font-medium text-left">{data.desc}</motion.p>

                  {/* DOKUMEN PEMBELAJARAN */}
                  <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href={data.rppLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-[#1E293B] hover:bg-[#406093] text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2">
                      <svg className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <span className="text-xs font-black uppercase tracking-widest">Modul Ajar</span>
                    </a>
                    <a href={data.mediaLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-white hover:bg-[#F1F5F9] text-[#1E293B] border border-[#1E293B]/15 px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2">
                      <svg className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                      <span className="text-xs font-black uppercase tracking-widest">Akses Media</span>
                    </a>
                  </motion.div>
                </div>

                {/* COVER IMAGE */}
                <motion.div variants={staggerItem} className="relative rounded-2xl overflow-hidden aspect-video bg-[#E2E8F0] shadow-xl border border-[#1E293B]/10 group">
                  <Image src={data.img} alt={data.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" />
                </motion.div>
              </motion.div>

              <div className="w-full h-px bg-[#1E293B]/10" />

              {/* KONTEKS & TUJUAN */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 border border-[#1E293B]/10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <svg className="w-24 h-24 text-[#406093]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#406093] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#406093] text-white flex items-center justify-center shadow-lg shadow-[#406093]/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span> 
                    Konteks Pembelajaran
                  </h4>
                  <p className="text-[1.05rem] font-semibold leading-relaxed text-[#334155] text-left">{data.konteks}</p>
                </div>

                <div className="group bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 border border-[#1E293B]/10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <svg className="w-24 h-24 text-[#406093]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#406093] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#406093] text-white flex items-center justify-center shadow-lg shadow-[#406093]/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span> 
                    Tujuan Pembelajaran
                  </h4>
                  <p className="text-[1.05rem] font-semibold leading-relaxed text-[#334155] text-left">{data.tujuan}</p>
                </div>
              </motion.div>

              {/* REFLEKSI / PLUS MINUS */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group p-8 rounded-3xl bg-[#10B981]/5 border border-[#10B981]/20 overflow-hidden transition-all duration-500 hover:bg-[#10B981]/10">
                  <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-[#10B981]/5 select-none transition-transform group-hover:scale-110">+</div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#10B981] mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-[#10B981] text-white flex items-center justify-center shadow-lg shadow-[#10B981]/30">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                    </span>
                    Kelebihan
                  </h4>
                  <p className="text-lg font-bold leading-relaxed text-[#065F46] relative z-10 text-left">{data.plus}</p>
                </div>

                <div className="relative group p-8 rounded-3xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 overflow-hidden transition-all duration-500 hover:bg-[#F59E0B]/10">
                  <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-[#F59E0B]/5 select-none transition-transform group-hover:scale-110">−</div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F59E0B] mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center shadow-lg shadow-[#F59E0B]/30">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                    </span>
                    Kekurangan
                  </h4>
                  <p className="text-lg font-bold leading-relaxed text-[#92400E] relative z-10 text-left">{data.minus}</p>
                </div>
              </motion.div>

              {/* MEDIA PEMBELAJARAN + FOTO */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="bg-white rounded-2xl border border-[#1E293B]/10 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#1E293B]/10">
                  <h3 className="text-base font-black uppercase tracking-wider text-[#1E293B]">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      Media Pembelajaran
                    </span>
                  </h3>
                  <p className="mt-2 text-[0.95rem] font-medium text-[#475569] leading-relaxed text-left">{data.mediaBelajar}</p>
                </div>
                {data.galleryMedia.length > 0 && (
                  <div className="p-6 bg-slate-50">
                    <GallerySection images={data.galleryMedia} title="Media & Alat Peraga" />
                  </div>
                )}
              </motion.div>

              {/* HASIL KERJA SISWA */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="bg-white rounded-2xl border border-[#1E293B]/10 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#1E293B]/10">
                  <h3 className="text-base font-black uppercase tracking-wider text-[#1E293B]">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 shrink-0 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Hasil Kerja Siswa
                    </span>
                  </h3>
                  <p className="mt-2 text-[0.95rem] font-medium text-[#475569] leading-relaxed text-left">{data.hasilKerja}</p>
                </div>
                {data.galleryHasil.length > 0 && (
                  <div className="p-6 bg-slate-50">
                    <GallerySection images={data.galleryHasil} title="Sampel Pekerjaan Siswa" />
                  </div>
                )}
              </motion.div>

              {/* TEORI */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="p-6 border-l-4 border-[#406093] bg-[#EEF2FF] rounded-r-2xl border border-[#406093]/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#406093]/60 mb-3">Kajian Teori Pendukung</h4>
                <p className="text-lg font-serif italic text-[#334155] leading-relaxed text-left">&quot;{data.teori}&quot;</p>
              </motion.div>

              {/* DOKUMEN SIKLUS (BENTO) */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="bg-white rounded-2xl border border-[#1E293B]/10 shadow-sm p-6">
                <BentoGallery images={data.galleryDokumentasi} title="Dokumentasi Siklus" />
              </motion.div>

            </div>
          )}
        </motion.div>
      </AnimatePresence>
      </div>
    </section>
  );
}
