'use client';

import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '@/lib/motion';

const dataPilar = [
  {
    id: '01',
    label: 'Karakter',
    title: 'Sosok Teladan & Ramah',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: 'emerald',
    text: 'Menjadi guru yang tidak hanya menyampaikan materi, tetapi mampu mempraktikkan apa yang diajarkan. Membangun kedekatan emosional secara ramah dan suportif, agar siswa merasa aman dan nyaman saat berinteraksi.',
  },
  {
    id: '02',
    label: 'Filosofi',
    title: 'Semangat Ki Hajar Dewantara',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    color: 'rose',
    text: 'Menghidupkan nilai-nilai luhur pendidikan: Di depan memberi teladan (Ing Ngarso Sung Tulodo), di tengah membangun semangat (Ing Madyo Mangun Karso), dan di belakang memberikan dorongan (Tut Wuri Handayani). Makna semboyan ini saya aplikasikan dengan menciptakan ekosistem belajar yang aktif dan menyenangkan.',
  },
  {
    id: '03',
    label: 'Adaptasi',
    title: 'Pemanfaatan Teknologi',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    color: 'blue',
    text: 'Memanfaatkan teknologi sebagai katalisator pembelajaran. Menerapkan pembelajaran yang menyenangkan dan variatif melalui penggunaan media berbasis teknologi, guna mendidik siswa agar melek digital dan mampu mengikuti perkembangan zaman tanpa melupakan etika.',
  },
  {
    id: '04',
    label: 'Kompetensi',
    title: 'Inovasi Pembelajaran',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    color: 'dark',
    text: 'Mengembangkan kompetensi profesional dengan kemampuan mandiri dalam menciptakan media dan skenario pembelajaran digital. Merancang proses belajar yang relevan dan terintegrasi penuh dengan teknologi terkini.',
  },
];

const refleksiAkhir = [
  {
    id: 'K',
    label: 'Kekuatan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: 'emerald',
    items: [
      'Kemampuan membangun relasi emosional yang hangat dengan siswa, menciptakan lingkungan belajar yang aman dan nyaman.',
      'Adaptif dalam memanfaatkan teknologi sebagai media pembelajaran yang variatif dan interaktif.',
      'Mampu merancang skenario pembelajaran inovatif yang relevan dengan kebutuhan siswa di era digital.',
      'Konsisten dalam menerapkan nilai-nilai keteladanan dan komunikasi yang humanis di dalam dan luar kelas.',
    ],
  },
  {
    id: 'L',
    label: 'Kelemahan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
    ),
    color: 'amber',
    items: [
      'Manajemen waktu dalam menyusun perangkat pembelajaran secara menyeluruh masih perlu ditingkatkan agar lebih efisien.',
      'Pendalaman terhadap materi tertentu, terutama yang bersifat abstrak, masih memerlukan eksplorasi lebih lanjut.',
      'Konsistensi dalam melakukan evaluasi formatif secara terjadwal belum sepenuhnya berjalan optimal.',
      'Penguasaan teknik diferensiasi pembelajaran masih perlu diperkuat untuk mengakomodasi keberagaman gaya belajar siswa.',
    ],
  },
  {
    id: 'R',
    label: 'Rencana Tindak Lanjut',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    color: 'blue',
    items: [
      'Mengikuti pelatihan dan workshop pengembangan media pembelajaran digital untuk memperkaya metode mengajar.',
      'Menyusun jadwal evaluasi diri secara berkala setiap akhir pekan untuk merefleksikan capaian dan hambatan pembelajaran.',
      'Mempelajari teknik differentiated instruction melalui kajian literatur dan diskusi dengan rekan sejawat.',
      'Berkolaborasi dengan guru pamong dan dosen pembimbing untuk mendapatkan masukan konstruktif secara berkelanjutan.',
      'Mengembangkan portofolio digital sebagai sarana dokumentasi dan bahan refleksi peningkatan kompetensi pedagogik.',
    ],
  },
];

const colorMap: Record<string, { badge: string; bg: string; border: string; glow: string; textHighlight: string; dot: string }> = {
  rose: {
    badge: 'bg-rose-500/10 text-rose-600 border-rose-200/50',
    bg: 'bg-gradient-to-br from-white via-white to-rose-50/50',
    border: 'border-rose-100/50',
    glow: 'bg-rose-400/20',
    textHighlight: 'text-rose-600',
    dot: 'bg-rose-500',
  },
  blue: {
    badge: 'bg-[#406093]/10 text-[#406093] border-[#406093]/20',
    bg: 'bg-gradient-to-br from-white via-white to-blue-50/50',
    border: 'border-blue-100/50',
    glow: 'bg-[#406093]/20',
    textHighlight: 'text-[#406093]',
    dot: 'bg-[#406093]',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50',
    bg: 'bg-gradient-to-br from-white via-white to-emerald-50/50',
    border: 'border-emerald-100/50',
    glow: 'bg-emerald-400/20',
    textHighlight: 'text-emerald-600',
    dot: 'bg-emerald-500',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-600 border-amber-200/50',
    bg: 'bg-gradient-to-br from-white via-white to-amber-50/50',
    border: 'border-amber-100/50',
    glow: 'bg-amber-400/20',
    textHighlight: 'text-amber-600',
    dot: 'bg-amber-500',
  },
  dark: {
    badge: 'bg-white/10 text-white border-white/20',
    bg: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]',
    border: 'border-[#1E293B]',
    glow: 'bg-white/[0.05]',
    textHighlight: 'text-white',
    dot: 'bg-white',
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardUp = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export default function Pedoman() {
  return (
    <section id="refleksi" className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] bg-noise pt-[56px] font-sans text-[#1E293B]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#406093]/[0.06] to-transparent" />
      <div className="pointer-events-none absolute right-[-8rem] top-28 h-64 w-64 rounded-full bg-[#406093]/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-16 left-[-5rem] h-56 w-56 rounded-full bg-emerald-200/30 blur-[100px]" />

      <div className="sticky top-[56px] z-40 border-b border-[#1E293B]/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#406093] animate-pulse" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#406093]/70">Refleksi Pedagogik</p>
              <h1 className="text-sm font-bold uppercase tracking-[0.18em] text-[#1E293B] md:text-base">Pedoman & Refleksi</h1>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-full border border-[#406093]/20 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#406093]">
              3 Bagian
            </span>
            <span className="rounded-full border border-[#1E293B]/10 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">
              Reflektif & Mendalam
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* ========== SECTION 1: REFLEKSI MODEL GURU ========== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.9),rgba(239,246,255,0.95))] p-8 shadow-[0_30px_100px_rgba(15,23,42,0.1)] backdrop-blur-xl md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#406093] via-[#60A5FA] to-transparent" />
          <div className="pointer-events-none absolute -right-12 top-0 h-64 w-64 rounded-full bg-[#406093]/10 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-emerald-200/25 blur-[90px]" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#406093]/20 bg-white/80 px-4 py-2 shadow-sm">
              <svg className="h-4 w-4 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#406093]">Refleksi — Bagian 1</span>
            </div>

            <div className="mt-6">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.25em] text-[#406093]">Model Guru yang Dituju</p>
              <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-[#1E293B] md:text-6xl lg:text-[5.5rem]">
                <span className="inline-block pb-2">Disegani,</span>
                <br />
                <span className="inline-block font-serif font-normal italic text-[#406093]/70 pt-2 pb-2 pr-4">bukan ditakuti.</span>
              </h2>
              <div className="mt-6 h-1.5 w-16 rounded-full bg-[#406093]" />
            </div>

            <div className="mt-8 space-y-4 text-base font-medium leading-relaxed text-[#475569] md:text-lg">
              <p>
                Refleksi saya terhadap model guru yang ingin saya wujudkan tidak merujuk pada satu sosok spesifik yang sempurna. Saya tidak memiliki idola tunggal dalam dunia pendidikan. Sebaliknya, saya berupaya menyerap dan mewujudkan nilai-nilai keteladanan itu sendiri secara nyata dalam interaksi sehari-hari dengan siswa.
              </p>
              <p>
                Otoritas seorang pendidik, menurut saya, tidak dibangun lewat ancaman atau hukuman, melainkan melalui keramahan, kepedulian, dan empati yang tulus. Dengan memposisikan diri sebagai pendidik yang bersahabat namun tetap tegas dalam prinsip, rasa hormat dari siswa akan tumbuh secara alami. Saya ingin menjadi guru yang disegani karena keteladanan, bukan ditakuti karena kekuasaan.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#1E293B]/10 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#1E293B]">
                Humanis
              </span>
              <span className="rounded-full border border-[#406093]/20 bg-[#406093]/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#406093]">
                Tegas dalam prinsip
              </span>
              <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-700">
                Keteladanan nyata
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========== SECTION 2: REFLEKSI FILOSOFI MENGAJAR ========== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10"
        >
          <div className="flex items-center gap-3">
            <svg className="h-4 w-4 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#406093]">Refleksi — Bagian 2</span>
          </div>
          <h2 className="mt-3 text-4xl font-black leading-[1.1] tracking-tight text-[#1E293B] md:text-5xl">
            Filosofi Mengajar
          </h2>
          <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-[#475569] md:text-lg">
            Empat pilar ini merupakan refleksi dari nilai-nilai yang menopang cara saya mengajar — nilai-nilai yang saya yakini, saya hayati, dan saya praktikkan dalam setiap interaksi pembelajaran di kelas.
          </p>
          <div className="mt-4 h-1.5 w-16 rounded-full bg-[#406093]" />
        </motion.div>

        <div className="mt-8">
          <motion.div
            className="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {dataPilar.map((card) => {
              const isDark = card.color === 'dark';
              const c = colorMap[card.color];

              return (
                <motion.article
                  key={card.id}
                  variants={cardUp}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:border-[#406093]/20 md:p-8 ${c.bg} ${c.border}`}
                >
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${isDark ? 'from-white/50 via-white/20 to-transparent' : 'from-[#406093]/80 via-[#60A5FA]/25 to-transparent'}`} />
                  <div className={`pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${c.glow}`} />
                  <div className={`pointer-events-none absolute right-6 top-5 text-6xl font-black tracking-[-0.08em] ${isDark ? 'text-white/[0.05]' : 'text-[#1E293B]/[0.05]'}`}>
                    {card.id}
                  </div>

                  {isDark && (
                    <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#F8FAFC 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                  )}

                  <div className="relative z-10">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start gap-4 pr-16">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-inner transition-transform duration-500 group-hover:scale-110 ${c.badge}`}>
                          {card.icon}
                        </div>

                        <div>
                          <span className={`mb-2 inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${c.badge}`}>
                            {card.label}
                          </span>
                          <h3 className={`text-2xl font-black tracking-tight md:text-[1.75rem] ${c.textHighlight}`}>
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] ${c.badge}`}>
                        Pilar {card.id}
                      </span>
                    </div>

                    <div className={`mt-6 h-px w-full ${isDark ? 'bg-gradient-to-r from-white/20 via-white/10 to-transparent' : 'bg-gradient-to-r from-[#1E293B]/10 via-[#406093]/10 to-transparent'}`} />

                    <p className={`mt-6 text-base font-medium leading-relaxed md:text-lg max-w-prose ${isDark ? 'text-white/80' : 'text-[#475569]'}`}>
                      {card.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* ========== SECTION 3: REFLEKSI AKHIR ========== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 md:mt-20"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.9),rgba(239,246,255,0.95))] p-8 shadow-[0_30px_100px_rgba(15,23,42,0.1)] backdrop-blur-xl md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-[#406093] to-amber-400" />
            <div className="pointer-events-none absolute -left-12 top-0 h-64 w-64 rounded-full bg-emerald-200/20 blur-[110px]" />
            <div className="pointer-events-none absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-amber-200/20 blur-[90px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#406093]">Refleksi — Bagian 3</span>
              </div>

              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-[#1E293B] md:text-5xl lg:text-6xl">
                Refleksi Akhir
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-[#475569] md:text-lg">
                Setelah melalui rangkaian Praktik Pengalaman Lapangan di SDN Pengasinan IX, saya melakukan perenungan mendalam untuk mengidentifikasi capaian, hambatan, dan langkah pengembangan diri ke depan sebagai calon pendidik profesional.
              </p>

              <div className="mt-2 h-1.5 w-16 rounded-full bg-[#406093]" />

              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
                {refleksiAkhir.map((item) => {
                  const c = colorMap[item.color];
                  const isEmerald = item.color === 'emerald';
                  const isAmber = item.color === 'amber';
                  const isBlue = item.color === 'blue';

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VIEWPORT}
                      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: isEmerald ? 0 : isAmber ? 0.15 : 0.3 }}
                      className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] hover:-translate-y-2 md:p-7 ${c.bg} ${c.border}`}
                    >
                      <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${isEmerald ? 'from-emerald-400/80 via-emerald-300/25' : isAmber ? 'from-amber-400/80 via-amber-300/25' : 'from-[#406093]/80 via-[#60A5FA]/25'} to-transparent`} />
                      <div className={`pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${c.glow}`} />

                      <div className="relative z-10">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-inner ${c.badge}`}>
                          {item.icon}
                        </div>

                        <h3 className={`mt-5 text-2xl font-black tracking-tight md:text-[1.65rem] ${c.textHighlight}`}>
                          {item.label}
                        </h3>

                        <div className={`mt-4 h-px w-full bg-gradient-to-r ${isEmerald ? 'from-emerald-200/60 via-emerald-100/40 to-transparent' : isAmber ? 'from-amber-200/60 via-amber-100/40 to-transparent' : 'from-blue-200/60 via-blue-100/40 to-transparent'}`} />

                        <ul className="mt-4 space-y-3">
                          {item.items.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`} />
                              <p className="text-sm font-medium leading-relaxed text-[#475569] md:text-base">{point}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
