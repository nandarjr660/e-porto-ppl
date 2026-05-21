'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

const cultureItems = [
  {
    title: "Balla Lompoa",
    desc: "Balla Lompoa merupakan mahakarya arsitektur tradisional Makassar yang berfungsi sebagai istana Kerajaan Gowa sekaligus pusat pemerintahan di masa lalu. Dibangun pada tahun 1936, struktur panggung berbahan kayu jati ini kini menjadi museum yang menyimpan koleksi benda pusaka kerajaan, termasuk mahkota emas Salokoa. Secara filosofis, bentuk bangunannya yang megah mencerminkan kejayaan Gowa sebagai kekuatan maritim dan perdagangan yang disegani di Nusantara.",
    img: "/image/balla.jpg",
    tag: "Architecture",
    year: "1936",
    color: "#D97706",
    gridClass: "lg:col-span-6 lg:row-span-2 h-[450px] md:h-[600px]",
  },
  {
    title: "Baju Bodo",
    desc: "Diakui sebagai salah satu busana adat tertua di dunia, Baju Bodo adalah pakaian tradisional perempuan Bugis-Makassar yang memiliki ciri khas potongan segi empat dengan lengan pendek. Terbuat dari kain kasa atau sutra alam, warna Baju Bodo secara tradisional menandakan status sosial dan usia pemakainya. Busana ini bukan sekadar pakaian, melainkan simbol keanggunan, martabat, dan kelembutan perempuan Sulawesi Selatan yang tetap eksis melintasi berbagai zaman.",
    img: "/image/bajubodo.jpg",
    tag: "Textile",
    year: "16th Century",
    color: "#E11D48",
    gridClass: "lg:col-span-6 lg:row-span-1 h-[300px] md:h-[288px]",
  },
  {
    title: "Es Pisang Ijo",
    desc: "Kuliner ikonik ini merupakan representasi harmonis dari kekayaan hasil alam Sulawesi Selatan. Terdiri dari pisang raja yang dibalut adonan tepung berwarna hijau dari perasan daun suji, disajikan dengan bubur sumsum lembut, sirup DHT khas Makassar, dan es serut. Warna hijaunya melambangkan kesuburan dan harapan, menjadikannya bukan hanya sekadar hidangan penutup yang menyegarkan, tetapi juga warisan rasa yang mengakar kuat dalam memori kolektif masyarakat.",
    img: "/image/pisjo.jpg",
    tag: "Culinary",
    year: "Traditional",
    color: "#059669",
    gridClass: "lg:col-span-6 lg:row-span-1 h-[300px] md:h-[288px]",
  },
  {
    title: "Aksara Lontara",
    desc: "Aksara Lontara adalah sistem tulisan tradisional masyarakat Bugis-Makassar yang memiliki bentuk dasar geometris berupa garis lurus dan titik. Nama 'Lontara' berasal dari pohon lontar, karena pada awalnya tulisan ini digoreskan pada daun lontar yang disusun menjadi gulungan panjang. Lebih dari sekadar alat komunikasi, aksara ini merupakan jembatan literasi kuno yang mendokumentasikan kearifan lokal, sejarah, hukum (Pappaseng), hingga mahakarya sastra dunia, I La Galigo.",
    img: "/image/Lontara-1.jpg",
    tag: "Scripts",
    year: "Ancient",
    color: "#406093",
    gridClass: "lg:col-span-12 lg:row-span-1 h-[300px] md:h-[350px]",
  }
];

export default function LocalCulture() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#FFFFFF] text-[#1E293B] overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#406093 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#406093]">Identitas Lokal</span>
              <div className="w-12 h-[1px] bg-[#406093]/20" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1E293B]">
              Tanah <br />
              <span className="font-serif italic lowercase tracking-normal text-[#406093]">Gowa</span>
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
             <p className="text-[11px] text-[#475569] font-medium uppercase tracking-widest leading-relaxed">
               Menelusuri akar budaya yang membentuk karakter dan ketangguhan Sulawesi Selatan.
             </p>
          </div>
        </motion.div>

        {/* Bento Grid Gallery */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {cultureItems.map((item, idx) => (
            <motion.div 
              key={idx}
              onClick={() => toggleItem(idx)}
              className={`group relative overflow-hidden bg-[#F8FAFC] rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#406093]/10 cursor-pointer ${item.gridClass}`}
              variants={staggerItem}
            >
              {/* Image Container with Zoom & Parallax-ish Effect */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-1000 ease-out brightness-[0.85] group-hover:scale-110 group-hover:brightness-[0.7] ${activeIndex === idx ? 'scale-110 brightness-[0.7]' : ''}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80 ${activeIndex === idx ? 'opacity-80' : ''}`} />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-black uppercase tracking-widest text-white">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-bold text-white/60 tracking-tighter uppercase">{item.year}</span>
                </div>

                <div className={`transform transition-all duration-500 group-hover:-translate-y-2 ${activeIndex === idx ? '-translate-y-2' : ''}`}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white mb-3 leading-none">
                    {item.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 md:group-hover:max-h-[300px] md:group-hover:opacity-100 md:group-hover:mt-2'}`}>
                    <p className="text-xs md:text-sm text-white/90 font-medium leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Number */}
              <div className={`absolute top-4 right-6 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-20 ${activeIndex === idx ? 'opacity-20' : ''}`}>
                 <span className="text-6xl font-black text-white">0{idx + 1}</span>
              </div>
              
              {/* Interaction Hint (Bottom Bar) */}
              <div 
                className={`absolute bottom-0 left-0 h-1.5 transition-all duration-700 group-hover:w-full ${activeIndex === idx ? 'w-full' : 'w-0'}`}
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Section Footer */}
        <motion.div 
          className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#475569]/40">Warisan Tanah Para Daeng</span>
           <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#406093]/10" />
              <p className="font-serif italic text-xl text-[#406093]">Siri&apos; na Pacce</p>
              <div className="w-12 h-[1px] bg-[#406093]/10" />
           </div>
        </motion.div>
      </div>
    </section>
  );
}
