'use client';

import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '@/lib/motion';

const dataPedoman = [
  {
    id: '01',
    label: 'Karakter',
    title: 'Sosok Teladan & Ramah',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    color: 'emerald',
    text: 'Menjadi guru yang tidak hanya menyampaikan materi, tetapi mampu mempraktikkan apa yang diajarkan. Membangun kedekatan emosional secara ramah dan suportif, agar siswa merasa aman dan nyaman saat berinteraksi.',
  },
  {
    id: '02',
    label: 'Filosofi',
    title: 'Semangat Ki Hajar Dewantara',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    color: 'rose',
    text: 'Menghidupkan nilai-nilai luhur pendidikan: Di depan memberi teladan (Ing Ngarso Sung Tulodo), di tengah membangun semangat (Ing Madyo Mangun Karso), dan di belakang memberikan dorongan (Tut Wuri Handayani). Makna semboyan ini saya aplikasikan dengan menciptakan ekosistem belajar yang aktif dan menyenangkan.',
  },
  {
    id: '03',
    label: 'Adaptasi',
    title: 'Pemanfaatan Teknologi',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    color: 'blue',
    text: 'Memanfaatkan teknologi sebagai katalisator pembelajaran. Menerapkan pembelajaran yang menyenangkan dan variatif melalui penggunaan media berbasis teknologi, guna mendidik siswa agar melek digital dan mampu mengikuti perkembangan zaman tanpa melupakan etika.',
  },
  {
    id: '04',
    label: 'Kompetensi',
    title: 'Inovasi Pembelajaran',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    color: 'dark',
    text: 'Mengembangkan kompetensi profesional dengan kemampuan mandiri dalam menciptakan media dan skenario pembelajaran digital. Merancang proses belajar yang relevan dan terintegrasi penuh dengan teknologi terkini.',
  },
];

const colorMap: Record<string, { badge: string; bg: string; border: string; glow: string; textHighlight: string }> = {
  rose: {
    badge: 'bg-rose-500/10 text-rose-600 border-rose-200/50',
    bg: 'bg-gradient-to-br from-white via-white to-rose-50/50',
    border: 'border-rose-100/50',
    glow: 'bg-rose-400/20',
    textHighlight: 'text-rose-600',
  },
  blue: {
    badge: 'bg-[#406093]/10 text-[#406093] border-[#406093]/20',
    bg: 'bg-gradient-to-br from-white via-white to-blue-50/50',
    border: 'border-blue-100/50',
    glow: 'bg-[#406093]/20',
    textHighlight: 'text-[#406093]',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50',
    bg: 'bg-gradient-to-br from-white via-white to-emerald-50/50',
    border: 'border-emerald-100/50',
    glow: 'bg-emerald-400/20',
    textHighlight: 'text-emerald-600',
  },
  dark: {
    badge: 'bg-white/10 text-white border-white/20',
    bg: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]',
    border: 'border-[#1E293B]',
    glow: 'bg-white/[0.05]',
    textHighlight: 'text-white',
  }
};

export default function Pedoman() {
  return (
    <section id="pedoman" className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] bg-noise pt-[56px] font-sans text-[#1E293B]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#406093]/[0.06] to-transparent" />
      <div className="pointer-events-none absolute right-[-8rem] top-28 h-64 w-64 rounded-full bg-[#406093]/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-16 left-[-5rem] h-56 w-56 rounded-full bg-emerald-200/30 blur-[100px]" />

      <div className="sticky top-[56px] z-40 border-b border-[#1E293B]/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#406093] animate-pulse" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#406093]/70">Visi Pendidik</p>
              <h1 className="text-sm font-bold uppercase tracking-[0.18em] text-[#1E293B] md:text-base">Pedoman Mengajar</h1>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-full border border-[#406093]/20 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#406093]">
              4 Pilar
            </span>
            <span className="rounded-full border border-[#1E293B]/10 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">
              Humanis & Adaptif
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
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

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#406093]/20 bg-white/80 px-4 py-2 shadow-sm">
                <svg className="h-4 w-4 text-[#406093]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#406093]">Prinsip Utama</span>
              </div>

              <div className="mt-6 max-w-4xl">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.25em] text-[#406093]">Pedoman Mengajar</p>
                <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-[#1E293B] md:text-6xl lg:text-[5.5rem]">
                  <span className="inline-block pb-2">Disegani,</span>
                  <br />
                  <span className="inline-block font-serif font-normal italic text-[#406093]/70 pt-2 pb-2 pr-4">bukan ditakuti.</span>
                </h2>
                <div className="mt-6 h-1.5 w-16 rounded-full bg-[#406093]" />
              </div>

              <div className="mt-8 max-w-4xl text-base font-medium leading-relaxed text-[#475569] md:text-lg">
                Bagi saya, otoritas seorang pendidik tidak dibangun lewat ancaman atau hukuman, melainkan melalui keramahan, kepedulian, dan empati yang tulus. Saya tidak merujuk pada satu sosok spesifik yang sempurna, melainkan berupaya mewujudkan nilai-nilai keteladanan itu sendiri secara nyata. Dengan memposisikan diri sebagai pendidik yang bersahabat namun tetap tegas dalam prinsip, saya percaya rasa hormat dari siswa akan tumbuh secara alami, menjadikan saya sosok yang disegani, bukan ditakuti.
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#1E293B]/10 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#1E293B]">
                  Humanis
                </span>
                <span className="rounded-full border border-[#406093]/20 bg-[#406093]/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#406093]">
                  Tegas dalam prinsip
                </span>
                <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-700">
                  Rasa hormat alami
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pl-2">
              <div className="h-full rounded-[2rem] border border-[#1E293B]/10 bg-[#1E293B] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] md:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/60">Makna Utama</p>
                <p className="mt-4 text-2xl font-black leading-tight tracking-tight md:text-[2rem]">
                  Ketegasan hadir tanpa rasa takut.
                </p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white/75 md:text-base">
                  Guru yang dihormati bukan sekadar didengar, tetapi dipercaya. Relasi itulah yang menjadi dasar seluruh pendekatan mengajar saya.
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#60A5FA]" />
                    <p className="text-sm font-semibold leading-relaxed text-white/80">Keramahan membangun kedekatan emosional.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                    <p className="text-sm font-semibold leading-relaxed text-white/80">Keteladanan menumbuhkan kepercayaan.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-300" />
                    <p className="text-sm font-semibold leading-relaxed text-white/80">Konsistensi menjaga wibawa pendidik.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="space-y-6 lg:col-span-4 lg:sticky lg:top-[148px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#406093]">Empat Pilar</p>
              <h3 className="mt-3 text-2xl lg:text-[1.65rem] font-black leading-tight tracking-tight text-[#1E293B]">
                Nilai yang menopang cara saya mengajar
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#475569] md:text-base">
                Empat pilar ini menjadi turunan praktis dari prinsip utama di atas: bagaimana rasa hormat dibangun, dijaga, dan diterjemahkan ke dalam pengalaman belajar siswa.
              </p>

              <div className="mt-6 space-y-3">
                {dataPedoman.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#1E293B]/10 bg-[#F8FAFC] px-4 py-3 transition-colors duration-300 hover:border-[#406093]/20 hover:bg-white">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#406093] text-[10px] font-black tracking-widest text-white">
                        {item.id}
                      </span>
                      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#406093]">{item.label}</p>
                    </div>
                    <p className="text-sm font-semibold leading-snug text-[#1E293B]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#406093]/10 bg-gradient-to-r from-[#406093]/[0.08] via-white to-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#406093]">Arah Utama</p>
              <p className="text-sm font-semibold leading-relaxed text-[#334155] md:text-base">
                Ketegasan tetap hadir, tetapi dibangun melalui keteladanan, empati, pembelajaran yang relevan, dan inovasi yang dekat dengan kebutuhan siswa.
              </p>
            </div>
          </motion.div>

          <div className="relative flex flex-col gap-6 md:gap-7 lg:col-span-8">
            {dataPedoman.map((card) => {
              const isDark = card.color === 'dark';
              const c = colorMap[card.color];

              return (
                <article
                  key={card.id}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] hover:border-[#406093]/20 md:p-8 ${c.bg} ${c.border}`}
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
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-inner ${c.badge}`}>
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
