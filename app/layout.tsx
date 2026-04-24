import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasmunandar | E-Portfolio PPL Terbimbing",
  description: "E-Portfolio Praktik Pengalaman Lapangan (PPL) Terbimbing oleh Hasmunandar. Refleksi dan rekam jejak pembelajaran bermakna di kelas 3 SDN Pengasinan IX.",
  keywords: ['Portofolio PPL', 'PPG Prajabatan 2026', 'Hasmunandar', 'SDN Pengasinan IX', 'Universitas Muhammadiyah Indonesia', 'Guru SD', 'Bekasi'],
  authors: [{ name: 'Hasmunandar' }],
  openGraph: {
    title: 'Hasmunandar | E-Portfolio PPL Terbimbing',
    description: 'Jelajahi rekam jejak, artefak pembelajaran kelas 3, dan visi mengajar saya selama Praktik Pengalaman Lapangan di SDN Pengasinan IX.',
    url: 'https://hsmnandar.vercel.app', 
    siteName: 'Portofolio PPL Hasmunandar',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
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