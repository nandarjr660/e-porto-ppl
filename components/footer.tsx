'use client';

import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '@/lib/motion';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/hsmnandar', label: 'Instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/hasmunandar', label: 'LinkedIn' },
    { name: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hasmunandar660@gmail.com&su=Halo&body=Saya%20ingin%20menghubungi%20Anda', label: 'Email' }
  ];

  return (
    <footer id="footer" className="w-full bg-[#F8FAFC] text-[#1E293B] font-sans border-t border-[#1E293B]/10">
      <motion.div
        className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {/* Kiri: Identitas */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-[#406093] rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#406093]">Terbuka untuk Kolaborasi</span>
          </div>
          <h3 className="text-base md:text-lg font-black uppercase tracking-widest text-[#1E293B]">Hasmunandar</h3>
          <p className="text-xs text-[#1E293B]/50 font-medium">Calon Guru Profesional — SDN Pengasinan IX</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1E293B]/30 mt-2">© 2026 PPG E-Portfolio</p>
        </div>

        {/* Kanan: Kontak */}
        <div className="flex flex-col gap-2 items-start md:items-end">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1E293B]/40 mb-1">Hubungi Saya</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-[#1E293B]/15 text-[11px] font-bold uppercase tracking-widest text-[#1E293B]/60 hover:border-[#406093] hover:text-[#406093] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
