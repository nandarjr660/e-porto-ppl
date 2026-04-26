import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'E-Portfolio PPL Hasmunandar',
    short_name: 'PPL Hasmunandar',
    description: 'Portofolio Praktik Pengalaman Lapangan (PPL) Terbimbing oleh Hasmunandar di SDN Pengasinan IX',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#406093',
    icons: [
      {
        src: '/image/nandar.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
