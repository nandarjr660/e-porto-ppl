import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sedang Diperbarui | Portofolio Hasmunandar',
  description: 'Mohon maaf, portofolio sedang dalam proses pembaruan untuk memberikan pengalaman yang lebih baik.',
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6 overflow-hidden font-sans select-none">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#406093]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-[#406093]/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-xl w-full text-center relative z-[10000] flex flex-col items-center scale-[0.85] md:scale-90 origin-center">
        {/* Image Container */}
        <div className="relative w-full aspect-video max-w-sm mb-8 animate-pulse-slow pointer-events-none">
          <Image
            src="/image/mainte.png"
            alt="Maintenance Illustration"
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#406093]/10 text-[#406093] text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#406093] animate-ping" />
            System Update
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase">
            <span className="text-[#406093]">Sistem Dalam</span> <br /> 
            <span className="text-rose-600">Pemeliharaan</span>
          </h1>
          
          <p className="text-base md:text-lg text-[#1E293B]/60 font-medium leading-relaxed max-w-lg mx-auto">
            Mohon maaf, saat ini portofolio saya sedang dalam tahap <span className="text-[#406093] font-bold">pembaruan konten</span> atau perbaikan sistem agar dapat memberikan pengalaman yang lebih optimal. 
            <br className="hidden md:block" />
            Silakan berkunjung kembali dalam beberapa waktu ke depan.
          </p>

          <div className="pt-8 md:pt-12 flex justify-center w-full relative z-20">
            <a 
              href="mailto:hasmunandar660@gmail.com"
              className="group relative flex items-center justify-center gap-3 px-6 md:px-10 py-3.5 md:py-4 bg-[#1E293B] rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl shadow-[#1E293B]/20 w-full max-w-[280px] md:max-w-xs lg:max-w-sm cursor-pointer hover:bg-[#406093] hover:scale-[1.03] hover:shadow-[#406093]/30 active:scale-[0.98]"
              style={{ isolation: 'isolate', touchAction: 'manipulation' }}
            >
              <svg className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-12 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10 pointer-events-none tracking-widest">Hubungi via Email</span>
            </a>
          </div>

        </div>

        {/* Footer Info */}
        <div className="mt-16 md:mt-24 w-full text-[10px] font-bold uppercase tracking-[0.3em] text-[#1E293B]/30">
          Hasmunandar &copy; 2026 • PPG Prajabatan
        </div>
      </div>
    </div>
  );
}
