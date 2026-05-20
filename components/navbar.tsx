'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navDistance, setNavDistance] = useState(0);
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const controls = useAnimationControls();

  const menuItems = useMemo(() => [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { name: 'Artefak', href: '/artefak' },
    { name: 'Analisis', href: '/analisis' },
    { name: 'Lampiran', href: '/lampiran' },
    { name: 'Pedoman', href: '/pedoman' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      const prevIndex = menuItems.findIndex(item => item.href === prevPathRef.current);
      const currentIndex = menuItems.findIndex(item => item.href === pathname);
      const distance = Math.abs(currentIndex - prevIndex);

      setNavDistance(distance);

      // Jarak dekat: stretch ekstrem, bounce banyak
      // Jarak jauh: stretch sedang, bounce lebih sedikit
      const scaleX = distance <= 2
        ? [1, 1.8, 0.85, 1.15, 0.95, 1]
        : [1, 1.5, 0.9, 1.08, 0.97, 1];

      const scaleY = distance <= 2
        ? [1, 0.82, 1.12, 0.88, 1.06, 1]
        : [1, 0.88, 1.06, 0.94, 1.03, 1];

      controls.start({
        scaleX,
        scaleY,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
          times: [0, 0.18, 0.38, 0.58, 0.78, 1]
        }
      });
      prevPathRef.current = pathname;
    }
  }, [pathname, controls, menuItems]);

  return (
    <>
      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'top-0 md:top-4' : 'top-0'}`}>
        
        <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-between 
          ${scrolled 
            ? 'w-full md:max-w-[90%] lg:max-w-5xl bg-[#1E293B]/94 border-b md:border border-[#406093]/25 px-4 md:px-5 py-2 md:rounded-full shadow-[0_18px_40px_rgba(15,23,42,0.28)]' 
            : 'w-full max-w-full bg-[#1E293B] px-6 lg:px-12 py-4 rounded-none border-b border-[#F8FAFC]/5'
          }`}
        >
          
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <div className={`bg-[#406093] flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-6 h-6 rounded-full' : 'w-8 h-8 rounded-md'}`}>
              <span className="text-[#F8FAFC] font-black text-[10px] md:text-xs">N</span>
            </div>
            <Link 
              href="/" 
              className={`text-[#F8FAFC] font-bold tracking-tight transition-all duration-500 cursor-pointer ${scrolled ? 'text-xs' : 'text-sm'}`}
            >
              Nand.
            </Link>
          </div>

          {/* Menu Utama (Desktop) */}
          <ul className="hidden md:flex items-center gap-2 relative">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative z-10">
                  <Link
                    href={item.href}
                    className={`relative z-10 flex flex-col items-center justify-center px-4 py-2 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-[#F8FAFC]/60 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="slingshot-pill"
                        className="absolute inset-0 rounded-full bg-[#406093] -z-10 shadow-[0_0_20px_rgba(64,96,147,0.5)]"
                        style={{ transformOrigin: "center center" }}
                        animate={controls}
                        transition={{
                          type: "spring",
                          stiffness: navDistance <= 2 ? 200 : 450,
                          damping: navDistance <= 2 ? 12 : 22,
                          mass: navDistance <= 2 ? 1.2 : 0.7,
                          restDelta: 0.001
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Tombol Kontak & Hamburger */}
          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`hidden md:inline-flex items-center gap-2 font-bold uppercase tracking-widest hover:bg-[#406093] hover:text-[#F8FAFC] hover:border-[#406093] transition-all duration-500 cursor-pointer
              ${scrolled 
                ? 'px-4 py-1.5 text-[9px] rounded-full text-[#F8FAFC] border border-[#F8FAFC]/20 bg-white/5' 
                : 'px-5 py-2 text-[10px] rounded-lg text-[#F8FAFC] border border-[#F8FAFC]/30'}`}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Kontak
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center transition-all duration-300 active:scale-90"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5">
                <div className={`w-5 h-[1.5px] bg-[#F8FAFC] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
                <div className={`w-5 h-[1.5px] bg-[#F8FAFC] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <div className={`w-5 h-[1.5px] bg-[#F8FAFC] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#0F172A]/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#406093]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <ul className="flex flex-col items-center gap-8 relative z-10">
              {menuItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setIsOpen(false)}
                      className={`group relative text-3xl font-black uppercase tracking-[0.15em] transition-all duration-300 ${isActive ? 'text-[#93C5FD]' : 'text-[#F8FAFC]/50 hover:text-[#F8FAFC]'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#93C5FD] rounded-full" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="relative z-10"
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#406093] rounded-full text-xs font-bold uppercase tracking-widest text-[#F8FAFC] shadow-lg shadow-[#406093]/30 hover:bg-[#1E293B] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Hubungi Saya
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
