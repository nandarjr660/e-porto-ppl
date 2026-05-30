'use client';
import { useState, useEffect, useRef, useMemo, startTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    startTransition(() => {
      setPrefersReduced(mq.matches);
    });
    const handler = (e: MediaQueryListEvent) => {
      startTransition(() => {
        setPrefersReduced(e.matches);
      });
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReduced;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navDistance, setNavDistance] = useState(0);
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const controls = useAnimationControls();
  const prefersReduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const menuItems = useMemo(() => [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { name: 'Artefak', href: '/artefak' },

    { name: 'Lampiran', href: '/lampiran' },
    { name: 'Refleksi', href: '/refleksi' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    firstLinkRef.current?.focus();
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      const prevIndex = menuItems.findIndex(item => item.href === prevPathRef.current);
      const currentIndex = menuItems.findIndex(item => item.href === pathname);
      const distance = Math.abs(currentIndex - prevIndex);
      setNavDistance(distance);

      if (!prefersReduced) {
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
      }
      prevPathRef.current = pathname;
    }
  }, [pathname, controls, menuItems, prefersReduced]);

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
                        animate={prefersReduced ? {} : controls}
                        transition={prefersReduced ? { duration: 0 } : {
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
              ref={toggleRef}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center transition-all duration-300 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B] rounded-lg"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-1.5">
                <motion.div
                  className="w-5 h-[1.5px] bg-[#F8FAFC] rounded-full"
                  animate={isOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
                  transition={prefersReduced ? { duration: 0 } : { duration: 0.3 }}
                />
                <motion.div
                  className="w-5 h-[1.5px] bg-[#F8FAFC] rounded-full"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={prefersReduced ? { duration: 0 } : { duration: 0.2 }}
                />
                <motion.div
                  className="w-5 h-[1.5px] bg-[#F8FAFC] rounded-full"
                  animate={isOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
                  transition={prefersReduced ? { duration: 0 } : { duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-[#0F172A]/60 backdrop-blur-md md:hidden flex flex-col items-center justify-center"
            aria-hidden={!isOpen}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#406093]/8 blur-[80px] rounded-full pointer-events-none" />

            <ul className="flex flex-col items-center gap-5 relative z-10">
              {menuItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={idx}
                    initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={prefersReduced ? { duration: 0 } : { delay: idx * 0.04, duration: 0.3 }}
                  >
                    <Link
                      ref={idx === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative text-xl md:text-2xl font-black uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:text-[#93C5FD] ${isActive ? 'text-[#93C5FD]' : 'text-[#F8FAFC]/50 hover:text-[#F8FAFC]'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#93C5FD] rounded-full" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReduced ? { duration: 0 } : { delay: 0.28, duration: 0.3 }}
              className="relative z-10 mt-8"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    document.getElementById('footer')?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
                  }, 150);
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#406093] rounded-full text-[11px] font-bold uppercase tracking-widest text-[#F8FAFC] shadow-lg shadow-[#406093]/25 hover:bg-[#4f74ad] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
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
