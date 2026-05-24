'use client';

import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '@/lib/motion';

const data = {
  kendala: [
    'Pada tahap penyusunan, kendala utama yang saya hadapi adalah menyelaraskan struktur modul ajar dengan kerangka Kurikulum Merdeka berbasis pembelajaran mendalam (Deep Learning). Tantangan ini mencakup pemahaman dalam memetakan Capaian Pembelajaran (CP), merumuskan Tujuan Pembelajaran (TP) yang tepat, hingga merancang instrumen asesmen (diagnostik, formatif, dan sumatif) yang komprehensif. Saya juga perlu menyesuaikan pemilihan media pembelajaran yang menyenangkan, menerapkan pembelajaran berdiferensiasi untuk mengakomodasi gaya belajar siswa yang beragam, serta memastikan modul dirancang untuk menciptakan pengalaman belajar yang joyful, mindful, dan meaningful.',
    'Selanjutnya pada tahap pelaksanaan PPL siklus, penerapan modul yang telah dirancang terkadang tidak sepenuhnya berjalan mulus di lapangan. Saya menghadapi kesulitan dalam penanganan kelas, seperti siswa yang kurang kooperatif dan ribut, sehingga estimasi waktu pembelajaran kerap meleset. Secara personal, saya juga merasa kurang percaya diri dan kesulitan bersikap tegas (cenderung memilih diam jika lelah) dalam menghadapi situasi tersebut. Kurangnya pengalaman mengajar ini menyadarkan saya bahwa masih banyak hal yang perlu terus dipelajari dan dievaluasi ke depannya.'
  ],
  teori: 'Secara keseluruhan, praktik pengajaran ini berlandaskan pada teori Konstruktivisme (Piaget), di mana siswa membangun pemahamannya sendiri melalui pengalaman langsung dan interaksi sosial. Model utama yang diadaptasi adalah Problem Based Learning (PBL) yang diintegrasikan dengan kerangka TPACK (Technological Pedagogical Content Knowledge) dan pendekatan Deep Learning. Pendekatan kontekstual juga digunakan secara konsisten agar siswa dapat menghubungkan materi teoritis dengan lingkungan nyata di sekitar mereka.',
  faktor: 'Kunci kesuksesan pembelajaran di ketiga siklus ini terletak pada penggunaan media pembelajaran yang variatif dan interaktif. Penggunaan benda-benda konkret, media presentasi visual, serta aktivitas fisik terbukti sangat efektif meningkatkan antusiasme dan partisipasi aktif siswa Kelas 3A. Lingkungan belajar menjadi kondusif karena peserta didik difasilitasi untuk berkolaborasi, berdiskusi memecahkan masalah, dan mempresentasikan hasil karyanya secara langsung.',
  perubahan: 'Untuk mengakomodasi situasi kelas yang berbeda, beberapa penyesuaian (pembelajaran berdiferensiasi) sangat dimungkinkan. Pada kelas dengan fasilitas teknologi terbatas, media presentasi dapat diganti dengan poster cetak atau alat peraga sederhana dari lingkungan sekitar. Selain itu, bagi kelas dengan tingkat kesiapan belajar yang lebih rendah, tahap penyelidikan PBL dapat dimodifikasi menjadi inkuiri terbimbing (guided inquiry) dengan instruksi step-by-step yang lebih detail.'
};

const cards = [
  {
    id: '01',
    label: 'Hambatan Proses',
    title: 'Kendala Penyusunan & Pelaksanaan',
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
    color: 'rose',
    text: data.kendala,
  },
  {
    id: '02',
    label: 'Landasan Akademis',
    title: 'Konsep Pedagogi',
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    color: 'blue',
    text: data.teori,
  },
  {
    id: '03',
    label: 'Kunci Pencapaian',
    title: 'Faktor Keberhasilan',
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: 'emerald',
    text: data.faktor,
  },
  {
    id: '04',
    label: 'Adaptasi',
    title: 'Perubahan Komponen',
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    ),
    color: 'dark',
    text: data.perubahan,
  },
];

const colorMap: Record<string, { badge: string; bg: string; border: string; glow: string }> = {
  rose: {
    badge: 'bg-rose-500/10 text-rose-600 border-rose-200/50',
    bg: 'bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(255,255,255,0.95),rgba(255,241,242,0.9))]',
    border: 'border-rose-100/70',
    glow: 'bg-rose-400/15',
  },
  blue: {
    badge: 'bg-[#406093]/10 text-[#406093] border-[#406093]/20',
    bg: 'bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(255,255,255,0.95),rgba(239,246,255,0.92))]',
    border: 'border-blue-100/70',
    glow: 'bg-[#406093]/15',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50',
    bg: 'bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(255,255,255,0.95),rgba(236,253,245,0.92))]',
    border: 'border-emerald-100/70',
    glow: 'bg-emerald-400/15',
  },
};

export default function Analisis() {
  return (
    <section id="analisis" className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFC] bg-noise pt-[56px] font-sans text-[#1E293B]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#406093]/[0.06] to-transparent" />
      <div className="pointer-events-none absolute right-[-6rem] top-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-[#406093]/10 to-transparent blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-4rem] left-[-4rem] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-emerald-200/40 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 left-10 hidden h-40 w-40 opacity-[0.03] md:block" style={{ backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="sticky top-[56px] z-40 border-b border-[#1E293B]/10 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <div>
            <div className="mb-1.5 flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-[#406093] animate-pulse" />
              <div className="h-3 w-px bg-[#406093]/20" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#406093]/70">Evaluasi Keseluruhan Siklus</p>
            </div>
            <h1 className="text-2xl font-black uppercase leading-none tracking-tight text-[#1E293B] md:text-3xl">
              Analisis Pedagogi
            </h1>
          </div>
          <div className="hidden items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-500 md:flex">
            <span>Refleksi</span>
            <span className="w-8 h-px bg-[#1E293B]/20" />
            <span>Teori</span>
            <span className="w-8 h-px bg-[#1E293B]/20" />
            <span>Adaptasi</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-12"
        >
          {cards.map((card, idx) => {
            const isDark = card.color === 'dark';
            const c = colorMap[card.color];
            const isWide = idx === 0 || idx === cards.length - 1;
            const layoutClass = isWide ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <div
                key={card.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2.25rem] border p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] hover:border-[#406093]/20 md:p-9 lg:p-10 ${layoutClass}
                  ${isDark
                    ? 'bg-[linear-gradient(145deg,#0F172A,#162235,#1E293B)] border-[#1E293B] text-white'
                    : `${c.bg} ${c.border} text-[#1E293B]`
                  }`}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${isDark ? 'from-white/40 via-white/10 to-transparent' : 'from-[#406093]/80 via-[#60A5FA]/20 to-transparent'}`} />
                <div className={`pointer-events-none absolute left-0 top-10 h-24 w-1 rounded-r-full ${isDark ? 'bg-white/15' : 'bg-[#406093]/15'}`} />
                <div className={`absolute -right-6 -top-6 h-40 w-40 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${isDark ? 'bg-white/[0.04]' : c.glow}`} />
                <div className={`pointer-events-none absolute bottom-5 right-6 text-[4.5rem] font-black leading-none tracking-[-0.08em] ${isDark ? 'text-white/[0.05]' : 'text-[#1E293B]/[0.05]'}`}>
                  {card.id}
                </div>

                {isDark && (
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F8FAFC 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                )}

                <div className="relative z-10 flex h-full flex-col">
                  <div className={`mb-7 flex gap-5 ${isWide ? 'flex-col md:flex-row md:items-start md:justify-between' : 'items-start justify-between'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-inner md:h-14 md:w-14 ${isDark ? 'border-white/20 bg-white/10 text-white' : c.badge}`}>
                        {card.icon}
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className={`text-[10px] font-black uppercase tracking-[0.28em] ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                            {card.id}
                          </span>
                          <span className={`h-px w-10 ${isDark ? 'bg-white/10' : 'bg-[#406093]/15'}`} />
                        </div>

                        <h3 className={`mb-2 text-[10px] font-black uppercase tracking-[0.32em] ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                          {card.label}
                        </h3>
                        <h2 className={`text-xl font-black uppercase tracking-tight md:text-2xl ${isWide ? 'lg:text-[2rem]' : ''} ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
                          {card.title}
                        </h2>
                      </div>
                    </div>

                    <div className={`flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 ${isDark ? 'border-white/15 bg-white/5' : 'border-[#1E293B]/10 bg-white/70'}`}>
                      <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/60' : 'bg-[#406093]/70'}`} />
                      <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/35' : 'bg-[#406093]/40'}`} />
                      <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-[#406093]/20'}`} />
                    </div>
                  </div>

                  <div className={`mb-6 h-px ${isWide ? 'w-full max-w-[10rem]' : 'w-16'} rounded-full ${isDark ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-[#406093]/25 to-transparent'}`} />

                  <div className="mt-auto">
                    <div className={`rounded-[1.5rem] border p-5 md:p-6 ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-white/80 bg-white/75 backdrop-blur-sm'}`}>
                      {Array.isArray(card.text) ? (
                        <div className={isWide ? 'grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8' : 'space-y-4'}>
                          {card.text.map((paragraph, i) => (
                            <p key={i} className={`text-base font-medium leading-relaxed text-left ${isDark ? 'text-white/80' : 'text-slate-700'}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className={`text-base font-medium leading-relaxed text-left ${isDark ? 'text-white/80' : 'text-slate-700'} ${isWide ? 'max-w-4xl' : 'max-w-prose'}`}>
                          {card.text}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/35' : 'bg-[#406093]/35'}`} />
                      <span className={`h-px w-10 ${isDark ? 'bg-white/10' : 'bg-[#1E293B]/10'}`} />
                      <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-[#406093]/20'}`} />
                    </div>

                    <div className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'border-white/15 text-white/50' : 'border-[#1E293B]/10 text-slate-500'}`}>
                      {card.id}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500 md:mt-16"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1E293B]/25" />
          Sintesis Refleksi — Siklus 1–3
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#1E293B]/25" />
        </motion.div>
      </div>
    </section>
  );
}
