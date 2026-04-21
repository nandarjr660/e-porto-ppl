import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Profile from "@/components/profile";
import Artifact from "@/components/artifact";
import Lampiran from "@/components/lampiran";
import Closing from "@/components/closing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    /**
     * scroll-smooth: Membuat transisi antar section mulus saat klik navbar.
     * scroll-pt-[100px]: Memberikan jarak aman di atas agar judul tidak tertutup navbar.
     */
    <main className="bg-[#0E2922] w-full min-h-screen text-[#F4F4F2] overflow-x-hidden font-sans scroll-smooth scroll-pt-[100px]">
      
      {/* NAVBAR MORPHING: 
          Akan menempel di atas pada Hero, lalu berubah jadi Pill saat scroll.
      */}
      <Navbar />

      {/* SECTION 1: PEMBUKA (ID: hero) */}
      <Hero />
      
      {/* SECTION 2: PROFIL (ID: profil) */}
      <Profile />
      
      {/* SECTION 3: ARTEFAK & SIKLUS (ID: artifact) */}
      <Artifact />
      
      {/* SECTION 4: LAMPIRAN & ARSIP (ID: lampiran) */}
      <Lampiran />
      
      {/* SECTION 5: VISI & PENUTUP (ID: closing) */}
      <Closing />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}