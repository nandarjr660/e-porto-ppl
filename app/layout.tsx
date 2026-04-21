import type { Metadata } from "next";
import { Inter } from "next/font/google"; // <--- Perhatikan: harus ada /font/ di tengahnya
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Portfolio PPL I - Nandar",
  description: "Refleksi Pembelajaran di SDN Pengasinan IX",
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