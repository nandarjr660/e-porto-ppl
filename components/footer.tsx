'use client';

import { memo, useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT } from '@/lib/motion';

type FooterVariant = 'full' | 'simple';

const EMAIL = 'hasmunandar660@gmail.com';
const ACCESS_KEY = 'bc434b7e-e03f-43a1-b20c-f61bc69e6fc0';

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/hsmnandar', icon: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.258 1.228.601 1.789 1.162.561.561.904 1.129 1.162 1.789.248.638.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.828 4.828 0 0 1-1.162 1.789c-.561.561-1.129.904-1.789 1.162-.638.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.828 4.828 0 0 1-1.789-1.162c-.561-.561-.904-1.129-1.162-1.789-.248-.638-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.828 4.828 0 0 1 1.162-1.789c.561-.561 1.129-.904 1.789-1.162.638-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/hasmunandar', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function FooterContent({ variant }: { variant: FooterVariant }) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    setErrorMsg('');
    const formData = new FormData(formRef.current);
    formData.append('access_key', ACCESS_KEY);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Terjadi kesalahan.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Koneksi bermasalah. Coba lagi.');
    }
  };

  return (
    <footer id={variant === 'full' ? 'footer' : 'ffooter'} className="w-full bg-[#0F172A] text-[#F8FAFC] font-sans border-t border-white/5 relative overflow-hidden">
      {variant === 'full' && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#93C5FD]/30 to-transparent" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#93C5FD]/[0.03] rounded-full blur-[60px] pointer-events-none" />
        </>
      )}

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-14 pb-10" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
        {variant === 'full' && (
          <motion.div variants={staggerItem} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E293B] via-[#1a2540] to-[#0F172A] shadow-[0_32px_80px_rgba(0,0,0,0.4)] mb-10 hover:scale-[1.005] hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#406093] to-transparent" />
            <motion.div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#406093]/10 blur-[80px] pointer-events-none will-change-transform" animate={{ y: [0, -12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#60A5FA]/5 blur-[60px] pointer-events-none will-change-transform" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 flex flex-col justify-between p-8 md:p-10 lg:border-r border-white/[0.06]">
                <div>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#406093]/30 bg-[#406093]/10 px-3.5 py-1.5 mb-6">
                    <svg className="w-3.5 h-3.5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#93C5FD]">Pesan & Saran</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black leading-snug tracking-tight text-white">Ada yang ingin<br /><span className="text-[#93C5FD]">disampaikan?</span></h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-white/40">Tinggalkan pesan, saran, atau komentar untuk penulis. Setiap masukan sangat berarti dan akan dibaca langsung.</p>
                </div>
                <div className="mt-8 space-y-3">
                  {[
                    { d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Langsung ke email saya' },
                    { d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', text: 'Identitas tetap terjaga' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 shrink-0 rounded-lg bg-[#406093]/15 border border-[#406093]/20 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={item.d} /></svg>
                      </div>
                      <span className="text-xs text-white/40 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 p-8 md:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-full gap-5 py-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/25 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">Pesan terkirim!</p>
                      <p className="text-sm text-white/40 mt-1">Terima kasih — saya akan membacanya secepatnya.</p>
                    </div>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-[0.28em] text-white/80">Pesan / Saran / Komentar</label>
                      <textarea name="message" required rows={5} placeholder="Tulis apapun yang ingin kamu sampaikan..." aria-describedby="message-desc" className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#406093]/60 focus:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] transition-all duration-300 resize-none leading-relaxed" />
                      <span id="message-desc" className="sr-only">Tulis pesan, saran, atau komentar untuk penulis</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.28em] text-white/80">Nama</label>
                        <input type="text" name="name" required placeholder="Nama atau alias" className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#406093]/60 focus:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] transition-all duration-300" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.28em] text-white/80">Email <span className="normal-case tracking-normal text-white/40">(opsional)</span></label>
                        <input type="email" name="email" inputMode="email" placeholder="email@contoh.com" className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#406093]/60 focus:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] transition-all duration-300" />
                      </div>
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-rose-400">{errorMsg}</p>
                        <button type="button" onClick={() => setStatus('idle')} className="text-[10px] font-bold text-[#93C5FD] underline hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] rounded">Coba lagi</button>
                      </div>
                    )}
                    <button type="submit" disabled={status === 'sending'} className="mt-auto w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#406093] hover:bg-[#4f74ad] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#406093]/20 hover:shadow-[#406093]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] group">
                      {status === 'sending' ? (
                        <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Mengirim...</>
                      ) : (
                        <><svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>Kirim Pesan</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div variants={staggerItem} className={variant === 'full' ? '' : 'py-6'}>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[#F8FAFC] gap-4 md:gap-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#93C5FD] rounded-full animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8FAFC]/40">Terbuka untuk Kolaborasi</span>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8FAFC]/30">
              Hasmunandar &copy; {new Date().getFullYear()} &middot; PPG E-Portfolio
            </p>
          </div>
        </motion.div>

        {variant === 'full' && (
          <motion.div variants={staggerItem} className="relative mt-8 pt-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-sm" />
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#F8FAFC]">Hasmunandar</h3>
                <p className="text-sm text-[#F8FAFC]/40 font-medium">Calon Guru Profesional — SDN Pengasinan IX</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-4 py-3 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300">
                  {socials.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-[#F8FAFC]/60 hover:text-[#93C5FD] hover:bg-[#93C5FD]/[0.06] transition-all duration-300 hover:-translate-y-0.5 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.icon} /></svg>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{s.name}</span>
                    </a>
                  ))}
                  <div className="h-5 w-px bg-white/[0.06]" />
                  <a href={`mailto:${EMAIL}`} className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-[#F8FAFC]/60 hover:text-[#93C5FD] hover:bg-[#93C5FD]/[0.06] transition-all duration-300 hover:-translate-y-0.5 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
                  </a>
                  <button onClick={handleCopy} className="px-2.5 py-2 rounded-xl text-[#F8FAFC]/50 hover:text-[#10B981] hover:bg-[#10B981]/[0.06] transition-all duration-300 relative will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#406093] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]">
                    {copied ? (
                      <svg className="w-3.5 h-3.5 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    )}
                    {copied && <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest bg-[#10B981] text-white px-2.5 py-1 rounded-lg whitespace-nowrap shadow-lg z-50">Tersalin</span>}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </footer>
  );
}

const Footer = memo(function Footer({ variant = 'full' }: { variant?: FooterVariant }) {
  return <FooterContent variant={variant} />;
});

export default Footer;
