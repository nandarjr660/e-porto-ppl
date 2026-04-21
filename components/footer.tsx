'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/nandarjr660', label: 'IG' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/hasmunandar', label: 'LN' },
    { name: 'Email', href: 'mailto:hasmunandar@example.com', label: 'EM' }
  ];

  return (
    <footer id="footer" className="w-full bg-[#F1F5F9] text-[#1E293B] pt-20 pb-10 md:pt-32 md:pb-16 px-6 md:px-12 flex flex-col font-sans border-t border-[#1E293B]/10 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:gap-y-16 items-start">

        {/* BAGIAN 1: Judul Contact Me */}
        <motion.div
          className="order-1 flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.h2
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-60 mb-4"
            variants={staggerItem}
          >
            Get in Touch
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-[0.85] text-[#406093]"
            variants={staggerItem}
          >
            CONTACT<br/>ME.
          </motion.h1>
        </motion.div>

        {/* BAGIAN 2: Social Links — stagger per baris */}
        <motion.div
          className="order-2 lg:col-start-2 lg:row-span-2 flex flex-col w-full pt-4 lg:pt-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-50 mb-8 hidden lg:block text-right text-[#1E293B]"
            variants={staggerItem}
          >
            Connect With Me
          </motion.p>

          <div className="flex flex-col w-full border-t border-[#1E293B]/20">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center py-6 md:py-8 border-b border-[#1E293B]/20 hover:border-[#406093] transition-colors duration-500"
                variants={staggerItem}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 group-hover:text-[#406093] transition-colors duration-500">
                    {link.label}
                  </span>
                  <span className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none text-[#1E293B] group-hover:text-[#406093] transition-colors duration-500">
                    {link.name}
                  </span>
                </div>
                <span className="text-xl md:text-3xl font-light opacity-30 group-hover:text-[#406093] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* BAGIAN 3: Info Hasmunandar & Copyright */}
        <motion.div
          className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-2 pt-8 lg:pt-0 mt-4 lg:mt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center gap-3 mb-3">
            {/* Dot pulse warna biru muda sesuai tema */}
            <div className="w-2 h-2 bg-[#406093] rounded-full animate-pulse"></div>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
              Available for Collaboration
            </p>
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#1E293B]">Hasmunandar</h3>
          <p className="text-xs font-medium opacity-80">
            Calon Guru Profesional — SDN Pengasinan IX
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mt-6">
            © 2026 PPG E-Portfolio
          </p>
        </motion.div>

      </div>
    </footer>
  );
}