'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeUp, VIEWPORT } from '@/lib/motion';
import SplitText from '@/components/split-text';

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
    status: "Selesai",
    docs: [
      { label: "Lampiran 7 (Perangkat)", file: "#", desc: "Instrumen Penilaian Penyusunan Perangkat Pembelajaran" },
      { label: "Lampiran 8 (Praktik)", file: "#", desc: "Instrumen Penilaian Praktik Mengajar" }
    ]
  }
];

export default function Lampiran() {
  return (
    <section
      id="lampiran"
      className="relative w-full min-h-[100svh] lg:min-h-[100dvh] bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-[#1E293B] px-6 pt-24 pb-16 md:pt-32 md:px-10 lg:px-16 font-sans flex flex-col overflow-hidden"
    >
      {/* ——— BLUR ORBS ——— */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-[#406093]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-[#60A5FA]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#406093]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 opacity-[0.03] pointer-events-none hidden md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      <motion.header
        className="flex-none flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div className="space-y-3" variants={staggerItem}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gradient-to-r from-[#406093] to-[#60A5FA] rounded-full" />
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#406093]">Dokumen Resmi PPL</p>
            <div className="w-1.5 h-1.5 rounded-full bg-[#406093] animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter leading-none text-[#1E293B]">
            <SplitText text="Lampiran" delay={50} />
          </h1>
        </motion.div>

        <motion.div className="relative" variants={staggerItem}>
          <div className="absolute -inset-4 bg-[#406093]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative backdrop-blur-xl bg-white/30 border border-white/60 rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1E293B]/40 mb-1">Rata-Rata Nilai Akhir</p>
            <div className="flex items-baseline gap-2 md:justify-end">
              <span className="text-5xl md:text-7xl font-black leading-none text-[#406093]">84,5</span>
              <span className="text-lg md:text-xl font-bold text-[#1E293B]/20">/ 100</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 md:justify-end">
              {[1,2,3].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 2 ? 'bg-[#406093]' : 'bg-[#1E293B]/10'}`} />
              ))}
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#1E293B]/30 ml-1">2/3 Siklus</span>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ——— TIMELINE PROGRESS ——— */}
      <motion.div
        className="flex-none flex items-center gap-0 mb-12 md:mb-16 relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {archiveData.map((item, idx) => (
          <div key={idx} className="flex items-center group">
            <div className="flex flex-col items-center gap-2">
              <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black border-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg
                ${item.status === 'Selesai'
                  ? 'bg-[#406093] border-[#406093] text-white shadow-md shadow-[#406093]/30'
                  : 'bg-white/70 backdrop-blur-sm border-[#406093]/20 text-[#1E293B]/30'}`}>
                {item.status === 'Selesai' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <span className="text-xs font-black">{item.cycle}</span>
                  )}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-300
                ${item.status === 'Selesai' ? 'text-[#406093]' : 'text-[#1E293B]/30'}`}>
                {item.title.split(' ')[1]}
              </span>
            </div>
            {idx < archiveData.length - 1 && (
              <div className={`w-16 md:w-28 h-[3px] mb-7 mx-2 rounded-full transition-all duration-500 relative
                ${idx < 2 ? 'bg-gradient-to-r from-[#406093] to-[#406093]/30' : 'bg-[#1E293B]/10'}`}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#406093] animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* ——— DOKUMEN LIST ——— */}
      <div className="flex-1 w-full relative z-10 space-y-6">
        {archiveData.map((item, idx) => (
          <motion.div
            key={idx}
            className="group backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-6 md:p-8 hover:bg-white/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
              <motion.div className="lg:w-1/4 flex flex-row lg:flex-col gap-4 lg:gap-3 items-center lg:items-start shrink-0" variants={staggerItem}>
                <div className="relative">
                  <span className={`text-6xl md:text-8xl font-black tracking-tighter leading-none transition-all duration-500
                    ${item.status === 'Berlangsung' ? 'text-[#1E293B]/10' : 'text-[#406093]/10 group-hover:text-[#406093]/20'}`}>
                    {item.cycle}
                  </span>
                  {item.status === 'Selesai' && (
                    <div className="absolute -top-1 -right-2 w-3 h-3 bg-[#406093] rounded-full border-2 border-white shadow-sm" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className={`text-base md:text-lg font-black uppercase tracking-tight transition-colors duration-500
                    ${item.status === 'Berlangsung' ? 'text-[#1E293B]/30' : 'text-[#1E293B]'}`}>
                    {item.title}
                  </h2>
                  <span className={`inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest w-fit px-3 py-1 rounded-full border transition-all duration-300
                    ${item.status === 'Selesai'
                      ? 'bg-[#406093]/10 text-[#406093] border-[#406093]/20'
                      : 'bg-[#1E293B]/5 text-[#1E293B]/30 border-[#1E293B]/10'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Selesai' ? 'bg-[#406093]' : 'bg-[#1E293B]/20 animate-pulse'}`} />
                    {item.status}
                  </span>
                </div>
              </motion.div>

              <div className="lg:w-3/4 flex flex-col gap-3 justify-center">
                {item.docs.map((doc, dIdx) => {
                  const isDisabled = doc.file === '#';
                  return (
                    <motion.div key={dIdx} variants={staggerItem}>
                      {isDisabled ? (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 rounded-2xl border border-dashed border-[#1E293B]/10 bg-[#1E293B]/[0.01] opacity-40 cursor-not-allowed backdrop-blur-sm">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                              <h4 className="text-base md:text-lg font-bold">{doc.label}</h4>
                              <p className="text-xs md:text-sm text-[#1E293B]/40 mt-0.5">{doc.desc}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-[0.15em] shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Belum Tersedia
                          </span>
                        </div>
                      ) : (
                        <a
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/doc flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-[#406093]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative w-10 h-10 rounded-xl bg-[#406093]/10 border border-[#406093]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/doc:bg-[#406093]/15 transition-colors duration-300 overflow-hidden">
                              <svg className="w-5 h-5 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#406093] rounded-[2px] flex items-center justify-center text-[6px] font-black text-white uppercase leading-none">PDF</div>
                            </div>
                            <div>
                              <h4 className="text-base md:text-lg font-bold group-hover/doc:text-[#406093] transition-colors">{doc.label}</h4>
                              <p className="text-xs md:text-sm text-[#1E293B]/50 mt-0.5">{doc.desc}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#406093] text-[#F8FAFC] text-[10px] font-bold uppercase tracking-[0.15em] shadow-md group-hover/doc:bg-[#1E293B] hover:shadow-lg transition-all duration-300 shrink-0">
                            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15V3" /><path d="M7 10l5 5 5-5" /><path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" /></svg>
                            Unduh PDF
                          </span>
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex-none mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1E293B]/10 relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#406093] animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#1E293B]/30">Dokumen Lengkap PPG 2026 · Telah disetujui DPL & GP</p>
        </div>
        <button className="group/zip inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#406093] to-[#1E293B] text-[#F8FAFC] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Unduh Seluruh Arsip (.ZIP)
        </button>
      </motion.div>
    </section>
  );
}
