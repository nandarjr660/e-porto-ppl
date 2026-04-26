export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hasmunandar",
    "jobTitle": "Calon Guru Profesional",
    "description": "Mahasiswa PPG Prajabatan 2026 yang melaksanakan Praktik Pengalaman Lapangan (PPL) Terbimbing di SDN Pengasinan IX, Bekasi. Fokus pada pembelajaran bermakna dengan pendekatan Problem Based Learning.",
    "url": "https://ppl-hasmunandar.vercel.app",
    "image": "https://ppl-hasmunandar.vercel.app/image/nandar.jpg",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universitas Muhammadiyah Indonesia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bekasi",
        "addressRegion": "Jawa Barat",
        "addressCountry": "ID"
      }
    },
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "SDN Pengasinan IX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bekasi",
        "addressRegion": "Jawa Barat",
        "addressCountry": "ID"
      }
    },
    "knowsAbout": [
      "Pendidikan Dasar",
      "Problem Based Learning",
      "Pembelajaran IPAS",
      "Manajemen Kelas",
      "Asesmen Pembelajaran",
      "Kurikulum Merdeka"
    ],
    "award": [
      "Nilai Rata-rata PPL: 84.5/100"
    ],
    "sameAs": [
      "https://instagram.com/hsmnandar",
      "https://linkedin.com/in/hasmunandar"
    ]
  };

  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "E-Portfolio PPL Terbimbing Hasmunandar",
    "description": "Dokumentasi lengkap Praktik Pengalaman Lapangan (PPL) Terbimbing meliputi 3 siklus pembelajaran di kelas 3A SDN Pengasinan IX. Mencakup perangkat pembelajaran, refleksi, dan artefak mengajar dengan pendekatan Problem Based Learning.",
    "author": {
      "@type": "Person",
      "name": "Hasmunandar"
    },
    "datePublished": "2026-04-09",
    "inLanguage": "id-ID",
    "keywords": "PPL, PPG Prajabatan 2026, Portofolio Guru, Problem Based Learning, IPAS, SDN Pengasinan IX, Pembelajaran Bermakna",
    "educationalLevel": "Sekolah Dasar",
    "teaches": "IPAS (Ilmu Pengetahuan Alam dan Sosial)",
    "hasPart": [
      {
        "@type": "LearningResource",
        "name": "Siklus 1: Sumber Energi Di Sekitar Kita",
        "description": "Pembelajaran IPAS menggunakan model Problem Based Learning dengan benda konkret. Siswa mampu menyebutkan, menjelaskan, dan mengelompokkan sumber energi.",
        "educationalLevel": "Kelas 3 SD",
        "learningResourceType": "Modul Ajar",
        "dateCreated": "2026-04-09"
      },
      {
        "@type": "LearningResource",
        "name": "Siklus 2: Yuk, Makan Sampai Habis",
        "description": "Analisis konsep perubahan energi dengan aktivitas fisik pembuktian. Siswa merumuskan solusi penghematan energi di kelas.",
        "educationalLevel": "Kelas 3 SD",
        "learningResourceType": "Modul Ajar",
        "dateCreated": "2026-04-16"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
      />
    </>
  );
}
