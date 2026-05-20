'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

const cultureItems = [
  {
    title: "Baju Bodo",
    desc: "Salah satu busana adat tertua di dunia khas suku Bugis-Makassar, yang sering dikenakan dalam upacara adat di Gowa.",
    img: "/image/bajubodo.jpg",
    tag: "Busana Adat",
    color: "#E11D48",
    fact: "Warisan budaya sejak abad ke-16"
  },
  {
    title: "Es Pisang Ijo",
    desc: "Kuliner ikonik Makassar berbahan pisang raja yang dibalut adonan tepung hijau, disajikan dengan sumsum dan sirup merah.",
    img: "/image/pisjo.jpg",
    tag: "Kuliner Khas",
    color: "#059669",
    fact: "Hidangan wajib saat Ramadhan tiba"
  },
  {
    title: "Balla Lompoa",
    desc: "Rumah adat kerajaan Gowa yang berarti 'Rumah Besar', kini menjadi museum yang menyimpan sejarah kebesaran Gowa.",
    img: "/image/balla.jpg",
    tag: "Rumah Adat",
    color: "#D97706",
    fact: "Saksi bisu kejayaan kerajaan Gowa"
  },
  {
    title: "Aksara Lontara",
    desc: "Sistem tulisan tradisional masyarakat Bugis-Makassar yang digunakan untuk menuliskan sejarah, hukum, dan sastra luhur.",
    img: "/image/Lontara-1.jpg",
    tag: "Huruf Lontarak",
    color: "#6366F1",
    fact: "Aksara kuno yang masih dipelajari hingga kini"
  }
];

const accentColors = ["bg-rose-600", "bg-emerald-600", "bg-amber-600", "bg-indigo-500"];

export default function LocalCulture() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#406093]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#406093]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#406093]/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#406093]">Warisan Budaya</span>
            <div className="w-8 h-[1px] bg-[#406093]/40" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#1E293B] leading-[0.9]">
            Identitas <br className="md:hidden" />
            <span className="font-serif italic lowercase tracking-normal text-[#406093] bg-gradient-to-r from-[#406093] to-[#60A5FA] bg-clip-text text-transparent">Gowa</span>
          </h2>
          <p className="text-sm md:text-base text-[#1E293B]/50 font-medium mt-4 max-w-xl mx-auto">
            Beberapa keunikan dari tanah kelahiran saya
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#406093] to-[#60A5FA] mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {cultureItems.map((item, idx) => (
            <motion.div 
              key={idx}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out border border-[#1E293B]/5 hover:border-[#406093]/20 hover:-translate-y-1.5"
              variants={staggerItem}
            >
              {/* Decorative corner gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-bl from-[#406093]/10 to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              {/* Image container */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/70 via-[#1E293B]/10 to-transparent" />

                {/* Tag badge - styled with icon */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                    <span className={`w-1.5 h-1.5 rounded-full ${accentColors[idx]}`} />
                    {item.tag}
                  </div>
                </div>

                {/* Number indicator */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-[40px] font-black text-white/10 leading-none select-none">0{idx + 1}</span>
                </div>

                {/* Subtle corner ornament */}
                <div className="absolute top-4 right-4 w-6 h-6 opacity-30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                    <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 relative">
                {/* Accent line */}
                <div className={`w-10 h-[3px] rounded-full mb-4 transition-all duration-500 group-hover:w-16 ${accentColors[idx]}`} />

                {/* Title with decorative element */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-black text-[#1E293B] tracking-tight leading-tight group-hover:text-[#406093] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="shrink-0 mt-1">
                    <svg className={`w-5 h-5 ${accentColors[idx].replace('bg-', 'text-')} opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-[0.95rem] text-[#1E293B]/70 leading-relaxed font-medium text-justify">
                  {item.desc}
                </p>

                {/* Fun fact */}
                <div className="mt-4 pt-4 border-t border-[#1E293B]/5 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 shrink-0 text-[#406093]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1E293B]/40">
                    {item.fact}
                  </span>
                </div>

                {/* Bottom gradient line on hover */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-full transition-all duration-500 group-hover:w-3/4 ${accentColors[idx]}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer quote */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#1E293B]/5 shadow-sm">
            <span className="text-[#406093] text-lg leading-none italic font-serif">&quot;</span>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1E293B]/50">
              Menghargai budaya sendiri adalah <span className="text-[#406093]">langkah pertama</span> mengenali jati diri
            </p>
            <span className="text-[#406093] text-lg leading-none italic font-serif rotate-180">&quot;</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
