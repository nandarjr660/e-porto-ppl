'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeUp, VIEWPORT } from '@/lib/motion';

export default function Lampiran() {
  // Data Dokumen Resmi per Siklus
  const archiveData = [
    {
      cycle: "01",
      title: "Siklus Pertama",
      docs: [
        { label: "Lampiran 7 (Perangkat)", file: "#", desc: "Format: PDF berkas hasil observasi resmi." },
        { label: "Lampiran 8 (Praktik)", file: "#", desc: "Format: PDF lembar kerja siswa." }
      ]
    },
    {
      cycle: "02",
      title: "Siklus Kedua",
      docs: [
        { label: "Lampiran 7 (Perangkat)", file: "#", desc: "Format: PDF berkas hasil observasi resmi." },
        { label: "Lampiran 8 (Praktik)", file: "#", desc: "Format: PDF lembar kerja siswa." }
      ]
    },
    {
      cycle: "03",
      title: "Siklus Ketiga",
      docs: [
        { label: "Lampiran 7 (Perangkat)", file: "#", desc: "Format: PDF berkas hasil observasi resmi." },
        { label: "Lampiran 8 (Praktik)", file: "#", desc: "Format: PDF lembar kerja siswa." }
      ]
    }
  ];

  return (
    <section
      id="lampiran"
      /* PERBAIKAN: Ganti min-h-screen (100vh) jadi min-h-[100svh] khusus untuk HP biar stabil */
      className="relative w-full min-h-[100svh] lg:min-h-[100dvh] bg-[#F1F5F9] text-[#1E293B] px-6 pt-24 pb-16 md:pt-32 md:px-10 lg:px-16 font-sans flex flex-col border-t border-[#1E293B]/5 shadow-[inset_0_2px_10px_rgba(30,41,59,0.02)]"
    >

      {/* HEADER: Judul Editorial */}
      <motion.header
        className="flex-none flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div className="space-y-4" variants={staggerItem}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#406093]"></div>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#406093]">Dokumen Resmi PPL</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter leading-none text-[#1E293B]">
            Lampiran
          </h1>
        </motion.div>

        {/* Nilai Akhir Keseluruhan */}
        <motion.div className="text-left md:text-right" variants={staggerItem}>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Rata-Rata Nilai Akhir</p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl md:text-8xl font-black leading-none text-[#406093]">95</span>
            <span className="text-xl md:text-2xl font-bold opacity-40">/ 100</span>
          </div>
        </motion.div>
      </motion.header>

      {/* MAIN CONTENT: Vertical Editorial Stack */}
      <div className="flex-1 w-full border-t border-[#1E293B]/20">
        {archiveData.map((item, idx) => (
          <motion.div
            key={idx}
            /* Efek Hover Kertas Putih Bersih akan semakin menonjol di atas latar abu-abu muda ini */
            className="flex flex-col lg:flex-row border-b border-[#1E293B]/10 py-10 md:py-16 gap-8 lg:gap-16 group hover:bg-white hover:shadow-sm transition-all duration-500 px-4 md:px-8 rounded-2xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >

            {/* KIRI: Indikator Siklus */}
            <motion.div
              className="lg:w-1/3 flex flex-col justify-between shrink-0"
              variants={staggerItem}
            >
              <div>
                <span className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none text-[#1E293B] opacity-5 group-hover:text-[#406093] group-hover:opacity-100 transition-all duration-700">
                  {item.cycle}
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-4 text-[#1E293B] group-hover:text-[#406093] transition-colors duration-500">{item.title}</h2>
              </div>
              <div className="hidden lg:block mt-auto text-[10px] font-bold uppercase tracking-widest opacity-40 italic">
                *Telah disetujui DPL &amp; GP
              </div>
            </motion.div>

            {/* KANAN: List Dokumen */}
            <div className="lg:w-2/3 flex flex-col gap-6 lg:gap-10 justify-center">
              {item.docs.map((doc, dIdx) => (
                <motion.a
                  key={dIdx}
                  href={doc.file}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 group/link"
                  variants={staggerItem}
                >
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold group-hover/link:text-[#406093] transition-colors">{doc.label}</h4>
                    <p className="text-xs md:text-sm opacity-60 mt-2">{doc.desc}</p>
                  </div>

                  {/* Tombol Unduh PDF */}
                  <div className="mt-2 sm:mt-0 shrink-0">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#406093] text-[#F8FAFC] text-[11px] font-bold uppercase tracking-[0.15em] shadow-lg group-hover/link:bg-[#1E293B] group-hover/link:-translate-y-0.5 group-hover/link:shadow-xl transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 15V3" />
                        <path d="M7 10l5 5 5-5" />
                        <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
                      </svg>
                      Unduh PDF
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER ACTION */}
      <motion.footer
        className="flex-none mt-16 flex flex-col items-center justify-center gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <button className="px-10 py-5 bg-[#406093] text-[#F8FAFC] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1E293B] hover:scale-105 transition-all duration-300 shadow-xl">
          Unduh Seluruh Arsip (.ZIP)
        </button>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#1E293B] opacity-40">Dokumen Lengkap PPG 2026</p>
      </motion.footer>

    </section>
  );
}