'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mengubah bentuk navbar saat di-scroll melewati 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Profile', href: '#profil' },
    { name: 'Artifacts', href: '#artifact' },
    { name: 'Appendix', href: '#lampiran' },
    { name: 'Vision', href: '#closing' },
  ];

  return (
    <nav className={`hidden md:block fixed left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'top-4 px-4 md:px-8' : 'top-0 px-0'}`}>
      
      <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-between 
        ${scrolled 
          // BG saat nge-scroll jadi kapsul: Slate Gelap transparan (#1E293B/90)
          ? 'max-w-[90%] lg:max-w-4xl bg-[#1E293B]/80 backdrop-blur-lg border border-[#F8FAFC]/10 px-6 py-2.5 rounded-full shadow-2xl' 
          // BG saat di atas (Hero): transparan atau Slate Gelap solid
          : 'max-w-full bg-[#1E293B] px-6 lg:px-12 py-4 rounded-none border-b border-[#F8FAFC]/5'
        }`}>
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          {/* Kotak Logo menggunakan Biru Baja (#406093) */}
          <div className={`bg-[#406093] flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-6 h-6 rounded-full' : 'w-8 h-8 rounded-md'}`}>
            <span className="text-[#F8FAFC] font-black text-[10px] md:text-xs">N</span>
          </div>
          <a href="#hero" className={`text-[#F8FAFC] font-bold tracking-tight transition-all duration-500 hidden sm:block ${scrolled ? 'text-xs' : 'text-sm'}`}>
            Nand.
          </a>
        </div>

        {/* Menu Utama (Diperbarui dengan Efek The Editorial Brackets & Tema Biru Baja) */}
        <ul className="flex items-center gap-8 md:gap-12">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a 
                href={item.href} 
                className="group relative flex items-center justify-center py-1 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#F8FAFC]/70 hover:text-[#F8FAFC] transition-all duration-300"
              >
                {/* Tanda Kurung Kiri: Menggunakan Biru Baja terang atau Biru Muda (#93C5FD) */}
                <span className="absolute left-0 opacity-0 translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:-translate-x-3 md:group-hover:-translate-x-4 text-[#93C5FD] font-medium text-sm">
                  [
                </span>
                
                {/* Teks Menu Asli */}
                <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-105">
                  {item.name}
                </span>
                
                {/* Tanda Kurung Kanan: Menggunakan Biru Baja terang atau Biru Muda (#93C5FD) */}
                <span className="absolute right-0 opacity-0 -translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-x-3 md:group-hover:translate-x-4 text-[#93C5FD] font-medium text-sm">
                  ]
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Kontak */}
        <div className="hidden md:block">
           <a href="#footer" className={`hidden md:block border text-center font-bold uppercase tracking-widest hover:bg-[#406093] hover:text-[#F8FAFC] hover:border-[#406093] transition-all duration-500 
           ${scrolled 
             ? 'px-4 py-1.5 text-[9px] rounded-full text-[#F8FAFC] border-[#F8FAFC]/20' 
             : 'px-5 py-2 text-[10px] rounded-md text-[#406093] border-[#406093]'}`}>
              Connect
           </a>
        </div>

      </div>
    </nav>
  );
}