# Portofolio PPL Hasmunandar - Project Guidelines

This document serves as the primary source of truth for the project's architecture, design patterns, and coding standards. Adhering to these guidelines ensures consistency and quality across the codebase.

## 🎯 Project Overview

An E-Portfolio for **Praktik Pengalaman Lapangan (PPL)** within the **PPG Prajabatan 2026** program. It highlights the teaching journey, artifacts, and reflections of **Hasmunandar** at **SDN Pengasinan IX**.

### Core Themes

- **Academic Professionalism:** Clean, structured, and informative layout for educational content.
- **Local Identity:** Integration of "Tanah Gowa" (South Sulawesi) cultural elements (Baju Bodo, Lontara, etc.).
- **Modern Interactive UI:** High-quality animations (Framer Motion) and interactive components (ClickSpark, SplitText).

---

## 🛠 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4 (using `@tailwindcss/postcss`)
- **Animations:** Framer Motion 12
- **Language:** TypeScript
- **Icons:** Custom SVG & Lucide-style iconography

---

## 🎨 Design System

### Color Palette

- **Background:** `#0E2922` (Deep Jungle Green - Main Layout)
- **Text:** `#F4F4F2` (Off-White - Primary Text)
- **Accent:** `#406093` (Steel Blue - Hero, Buttons, Borders)
- **Secondary Background:** `#F8FAFC` (Light Gray - Used in Hero and specific sections)
- **Secondary Text:** `#1E293B` (Slate - Used on light backgrounds)

### Typography

- **Primary:** `Inter` (Sans-serif, default)
- **Decorative:** Serif Italic (used for "Welcome", "Gowa", and quotes)
- **Headings:** Bold/Black uppercase with tight tracking (`tracking-tighter`).

---

## 🏗 Architectural Patterns

### Folder Structure

- `app/`: Routing and page components.
- `components/`: Reusable UI components.
- `lib/`: Shared utilities and animation variants (`motion.ts`).
- `public/`: Assets (images, icons, videos).
- `data/`: (If needed) Local JSON/TS files for content.

### Components

- **Client Components:** Use `'use client'` strictly when using hooks (state, effects) or Framer Motion.
- **Maintenance Mode:** Controlled via `app/layout.tsx`. Set `IS_MAINTENANCE_MODE = true` to activate a clean server-side redirect for all traffic.
- **Animations:** Prefer reusing variants from `lib/motion.ts`. Available variants:
  - `fadeUp`: Standard reveal from bottom.
  - `fadeUpHero`: Larger reveal for primary headlines.
  - `fadeLeft`: Slide and fade from left (best for images).
  - `fadeIn`: Simple opacity and scale reveal.
  - `revealHeight`: Cinematic vertical expansion (use with `overflow-hidden`).
  - `staggerContainer` & `staggerItem`: For grid or list items.
- **Viewport Config:** Use the `VIEWPORT` constant from `lib/motion.ts` for all `whileInView` props to maintain consistency (`once: true`, `margin: '-80px'`).
- **SEO:** Update `metadata` and `StructuredData` in `app/layout.tsx` for any global changes.

---

## 📏 Coding Conventions

### 1. Naming & Syntax

- Components: PascalCase (e.g., `LocalCulture.tsx`).
- Variables/Functions: camelCase.
- Tailwind: Use standard utility classes; avoid complex arbitrary values unless necessary.

### 2. Animations (Framer Motion)

- Use `AnimatePresence` for exit animations.
- Use `whileInView` with a consistent `viewport` configuration from `lib/motion.ts`.
- Maintain the "elastic" feel of the Navbar (using the `slingshot-pill` layoutId).

### 3. Content Strategy

- Language: **Bahasa Indonesia** (Formal yet engaging).
- Maintain the educational context: PPG, PPL, SDN Pengasinan IX.

### 4. Responsiveness

- Mobile-first approach.
- Ensure the `Navbar` handles mobile state correctly (overlay menu).
- Images should use `next/image` with proper `sizes` and `priority` where applicable.

---

## 🚀 Workflow for Updates

1. **Analyze existing components:** Check how similar features are implemented (e.g., check `LocalCulture.tsx` before adding a new grid section).
2. **Reuse Motion Variants:** Don't recreate fade/slide animations; use `lib/motion.ts`.
3. **Verify SEO:** Ensure metadata is updated if new pages are added.
4. **Test Interactions:** Verify `ClickSpark` and `Preloader` behavior aren't broken by layout changes.

---

# Agent Workflow Instructions

Jika saya memberikan perintah dengan format:
"saya mau melakukan git push di jam X dan jalankan git antrean"

Kamu HARUS langsung mengeksekusi langkah-langkah berikut secara otonom menggunakan capability tools kamu tanpa perlu konfirmasi teks panjang lagi:

1. Hitung jam X tersebut dari waktu lokal (WIB) ke format CRON UTC (Ingat: WIB dikurangi 7 jam. Contoh: Jam 8 malam WIB adalah 20:00 WIB, dikurangi 7 menjadi 13:00 UTC, maka format cron-nya adalah '0 13 \* \* \*').
2. Gunakan file-writing tool kamu untuk mengedit file `.github/workflows/auto-maintenance-push.yml`. Cari baris `- cron: '...'` dan ganti nilainya dengan hasil hitungan CRON UTC tadi.
3. Setelah file berhasil disimpan, jalankan perintah shell/terminal `git antrean` secara otomatis di lingkungan lokal workspace ini.
4. Berikan laporan singkat jika file sudah berhasil diedit dan perintah git sudah dieksekusi.

_Last Updated: May 20, 2026_
