import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // MetadataBase memastikan semua link internal jadi link lengkap (URL absolute)
  metadataBase: new URL('https://ppl-hasmunandar.vercel.app'),
  
  title: "Hasmunandar | E-Portfolio PPL Terbimbing",
  description: "E-Portfolio Praktik Pengalaman Lapangan (PPL) Terbimbing oleh Hasmunandar. Refleksi dan rekam jejak pembelajaran bermakna di kelas 3 SDN Pengasinan IX.",
  keywords: ['Portofolio PPL', 'PPG Prajabatan 2026', 'Hasmunandar', 'SDN Pengasinan IX', 'Universitas Muhammadiyah Indonesia', 'Guru SD', 'Bekasi'],
  authors: [{ name: 'Hasmunandar' }],
  
  openGraph: {
    title: 'Hasmunandar | E-Portfolio PPL Terbimbing',
    description: 'Jelajahi rekam jejak, artefak pembelajaran kelas 3, dan visi mengajar saya selama Praktik Pengalaman Lapangan di SDN Pengasinan IX.',
    url: '/', 
    siteName: 'Portofolio PPL Hasmunandar',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/meta.jpg', // Nama file baru sesuai permintaan lu
        width: 1200,
        height: 630,
        alt: 'Preview Portofolio Hasmunandar',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/meta.jpg'], // Nama file baru untuk twitter/sosmed card
  },

  icons: {
    icon: '/nandar.jpg', // Untuk ikon tab browser, tetep pake foto profil asli biar keliatan jelas
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