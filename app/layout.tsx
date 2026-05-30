import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import StructuredData from "./structured-data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MaintenancePage from "./maintenance/page";

const ClickSpark = dynamic(() => import("@/components/click-spark"));
const Preloader = dynamic(() => import("@/components/preloader"));
const NavigationEvents = dynamic(() => import("@/components/navigation-events"));

const inter = Inter({ subsets: ["latin"] });

// Set TRUE untuk mengaktifkan mode maintenance di seluruh web secara instan
const IS_MAINTENANCE_MODE = true;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#406093',
};

export const metadata: Metadata = {
  // MetadataBase memastikan semua link internal jadi link lengkap (URL absolute)
  metadataBase: new URL('https://ppl-hasmunandar.vercel.app'),

  title: "Hasmunandar | E-Portfolio PPL Terbimbing",
  description: "E-Portfolio Praktik Pengalaman Lapangan (PPL) Terbimbing oleh Hasmunandar. Refleksi dan rekam jejak pembelajaran bermakna di kelas 3 SDN Pengasinan IX.",
  keywords: ['Portofolio PPL', 'PPG Prajabatan 2026', 'Hasmunandar', 'SDN Pengasinan IX', 'Universitas Muhammadiyah Indonesia', 'Guru SD', 'Bekasi'],
  authors: [{ name: 'Hasmunandar' }],

  verification: {
    google: '4bxJJVPgCCP6EWmk2KaReb8YqjvhWA2H79ZSO7gIpZk',
  },

  openGraph: {
    title: 'Hasmunandar | E-Portfolio PPL Terbimbing',
    description: 'Jelajahi rekam jejak, artefak pembelajaran kelas 3, dan visi mengajar saya selama Praktik Pengalaman Lapangan di SDN Pengasinan IX.',
    url: '/',
    siteName: 'Portofolio PPL Hasmunandar',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/image/meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview Portofolio Hasmunandar',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/image/meta.jpg'],
  },

  icons: {
    icon: '/image/nandar.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (IS_MAINTENANCE_MODE) {
    return (
      <html lang="id">
        <body className={`${inter.className} antialiased bg-white w-full min-h-screen`}>
          <MaintenancePage />
        </body>
      </html>
    );
  }

  return (
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased bg-[#0E2922] w-full min-h-screen text-[#F4F4F2]`} suppressHydrationWarning>
        <ClickSpark
          sparkColor="#406093"
          sparkSize={23}
          sparkRadius={60}
          sparkCount={10}
          duration={400}
        >
          <Preloader />
          <NavigationEvents />
          <Navbar />
          {/* SENTINEL untuk trigger navbar transformation jika dibutuhkan */}
          <div id="navbar-sentinel" className="absolute top-0 left-0 w-full h-[1px] pointer-events-none" />

          <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
            <main className="w-full flex-1 font-sans scroll-pt-[100px]">
              {children}
            </main>

            <Footer variant="full" />
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
