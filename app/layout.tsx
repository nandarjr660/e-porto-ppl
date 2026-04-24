import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasmunandar | E-Portfolio PPL Terbimbing",
  description: "E-Portfolio Praktik Pengalaman Lapangan (PPL) Terbimbing oleh Hasmunandar. Refleksi dan rekam jejak pembelajaran bermakna di kelas 3 SDN Pengasinan IX.",
  keywords: ['Portofolio PPL', 'PPG Prajabatan 2026', 'Hasmunandar', 'SDN Pengasinan IX', 'Universitas Muhammadiyah Indonesia', 'Guru SD', 'Bekasi'],
  authors: [{ name: 'Hasmunandar' }],
  
  // Konfigurasi untuk tampilan Share (WA, Telegram, FB)
  openGraph: {
    title: 'Hasmunandar | E-Portfolio PPL Terbimbing',
    description: 'Jelajahi rekam jejak, artefak pembelajaran kelas 3, dan visi mengajar saya selama Praktik Pengalaman Lapangan di SDN Pengasinan IX.',
    url: 'https://hsmnandar.vercel.app', 
    siteName: 'Portofolio PPL Hasmunandar',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/nandar.jpg', // Menggunakan foto profil lu
        width: 1200,
        height: 630,
        alt: 'Preview Portofolio Hasmunandar',
      },
    ],
  },

  // Perintah khusus untuk memicu tampilan "Full/Large Image" di sosmed
  twitter: {
    card: 'summary_large_image',
    images: ['/nandar.jpg'],
  },

  // Mengganti favicon tab browser dengan foto profil
  icons: {
    icon: '/nandar.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}