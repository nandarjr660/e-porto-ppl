'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeUp, VIEWPORT } from '@/lib/motion';

export default function Lampiran() {
  const archiveData = [
    {
      cycle: "01",
      title: "Siklus Pertama",
      status: "Selesai",
      docs: [
        { label: "Lampiran 7 (Perangkat)", file: "https://drive.google.com/file/d/10_GQ9fLTDnZA3lqqjqBvuEnONFksWLf-/view?usp=drive_link", desc: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran" },
        { label: "Lampiran 8 (Praktik)", file: "https://drive.google.com/file/d/1VvNLe_uNuvl_yT79J2zyPxQOEFyT0pBt/view?usp=drive_link", desc: "Instrumen Penilaian Praktik Mengajar" }
      ]
    },
    {
      cycle: "02",
      title: "Siklus Kedua",
      status: "Selesai",
      docs: [
        { label: "Lampiran 7 (Perangkat)", file: "https://drive.google.com/file/d/1C49A7-3JwViqTgUHEMktcAyFTw0tjSSG/view?usp=sharing", desc: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran" },
        { label: "Lampiran 8 (Praktik)", file: "https://drive.google.com/file/d/1LS-4ffw72n87_-hZAKBrdISOd-0yprFj/view?usp=sharing", desc: "Instrumen Penilaian Praktik Mengajar" }
      ]
    },
    {
      cycle: "03",
      title: "Siklus Ketiga",
      status: "Berlangsung",
      docs: [
        { label: "Lampiran 7 (Perangkat)", file: "k", desc: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran" },
        { label: "Lampiran 8 (Praktik)", file: "k", desc: "Instrumen Penilaian Praktik Mengajar" }
      ]
    }
  ];

  return (
    <section
      id="lampiran"
      className="relative w-full min-h-[100svh] lg:min-h-[100dvh] bg-[#F8FAFC] text-[#1E293B] px-6 pt-24 pb-16 md:pt-32 md:px-10 lg:px-16 font-sans flex flex-col"
    >
      {/* Dekorasi titik-titik */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-[0.04] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      {/* HEADER */}
      <motion.header
        className="flex-none flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div className="space-y-3" variants={staggerItem}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#406093]" />
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#406093]">Dokumen Resmi PPL</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter leading-none text-[#1E293B]">
            Lampiran
          </h1>
        </motion.div>

        <motion.div className="text-left md:text-right" variants={staggerItem}>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Rata-Rata Nilai Akhir</p>
          <div className="flex items-baseline gap-2 md:justify-end">
            <span className="text-5xl md:text-7xl font-black leading-none text-[#406093]">84,5</span>
            <span className="text-lg md:text-xl font-bold opacity-30">/ 100</span>
          </div>
        </motion.div>
      </motion.header>

      {/* Progress Siklus */}
      <motion.div
        className="flex-none flex items-center gap-0 mb-10 md:mb-14 relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {archiveData.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all duration-500
                ${item.status === 'Selesai'
                  ? 'bg-[#406093] border-[#406093] text-white'
                  : 'bg-white border-[#406093]/30 text-[#1E293B]/30'}`}>
                {item.status === 'Selesai' ? '✓' : item.cycle}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider whitespace-nowrap
                ${item.status === 'Selesai' ? 'text-[#406093]' : 'text-[#1E293B]/30'}`}>
                {item.title.split(' ')[1]}
              </span>
            </div>
            {idx < archiveData.length - 1 && (
              <div className={`w-14 md:w-20 h-[2px] mb-5 mx-2 rounded-full
                ${idx < 2 ? 'bg-[#406093]' : 'bg-[#1E293B]/10'}`} />
            )}
          </div>
        ))}
      </motion.div>

      {/* DAFTAR SIKLUS */}
      <div className="flex-1 w-full relative z-10 border-t border-[#1E293B]/10">
        {archiveData.map((item, idx) => (
          <motion.div
            key={idx}
            className="group flex flex-col lg:flex-row border-b border-[#1E293B]/10 py-8 md:py-12 gap-6 lg:gap-16 hover:bg-white transition-all duration-500 px-4 md:px-6 rounded-2xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {/* KIRI */}
            <motion.div className="lg:w-1/4 flex flex-row lg:flex-col gap-4 lg:gap-3 items-center lg:items-start shrink-0" variants={staggerItem}>
              <span className={`text-6xl md:text-8xl font-black tracking-tighter leading-none transition-all duration-500
                ${item.status === 'Berlangsung' ? 'text-[#1E293B]/10' : 'text-[#406093]/20 group-hover:text-[#406093]/40'}`}>
                {item.cycle}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className={`text-base md:text-lg font-black uppercase tracking-tight transition-colors duration-500
                  ${item.status === 'Berlangsung' ? 'text-[#1E293B]/30' : 'text-[#1E293B] group-hover:text-[#406093]'}`}>
                  {item.title}
                </h2>
                <span className={`inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest w-fit px-2.5 py-1 rounded-full border
                  ${item.status === 'Selesai'
                    ? 'bg-[#406093]/10 text-[#406093] border-[#406093]/20'
                    : 'bg-[#1E293B]/5 text-[#1E293B]/30 border-[#1E293B]/10'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Selesai' ? 'bg-[#406093]' : 'bg-[#1E293B]/20 animate-pulse'}`} />
                  {item.status}
                </span>
              </div>
            </motion.div>

            {/* KANAN: Dokumen */}
            <div className="lg:w-3/4 flex flex-col gap-3 justify-center">
              {item.docs.map((doc, dIdx) => {
                const isDisabled = item.cycle === "03";
                return (
                  <motion.div key={dIdx} variants={staggerItem}>
                    {isDisabled ? (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-[#1E293B]/8 bg-[#1E293B]/[0.02] opacity-40 cursor-not-allowed">
                        <div>
                          <h4 className="text-sm md:text-base font-bold">{doc.label}</h4>
                          <p className="text-[11px] opacity-50 mt-0.5">{doc.desc}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-[0.15em] shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          Belum Tersedia
                        </span>
                      </div>
                    ) : (
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/doc flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-[#1E293B]/10 bg-white hover:border-[#406093]/40 hover:shadow-md transition-all duration-300"
                      >
                        <div>
                          <h4 className="text-sm md:text-base font-bold group-hover/doc:text-[#406093] transition-colors">{doc.label}</h4>
                          <p className="text-[11px] text-[#1E293B]/50 mt-0.5">{doc.desc}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#406093] text-[#F8FAFC] text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm group-hover/doc:bg-[#1E293B] transition-all duration-300 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 15V3" /><path d="M7 10l5 5 5-5" /><path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
                          </svg>
                          Unduh PDF
                        </span>
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER ACTION */}
      <motion.div
        className="flex-none mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1E293B]/10 relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#1E293B]/30">Dokumen Lengkap PPG 2026 · Telah disetujui DPL & GP</p>
        <button className="px-8 py-3.5 bg-[#406093] text-[#F8FAFC] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#1E293B] hover:scale-105 transition-all duration-300 shadow-md">
          Unduh Seluruh Arsip (.ZIP)
        </button>
      </motion.div>

    </section>
  );
}
