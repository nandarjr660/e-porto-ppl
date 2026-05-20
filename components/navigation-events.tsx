'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

function getHashTarget(hash: string) {
  const targetId = decodeURIComponent(hash.replace(/^#/, ''));

  if (!targetId) {
    return null;
  }

  return document.getElementById(targetId);
}

/**
 * NavigationEvents:
 * - Menambahkan `data-transitioning` ke <html> saat route berubah agar
 *   scroll-behavior: smooth tidak aktif selama page transition (mencegah lag).
 * - Mereset scroll ke posisi atas secara instan setiap pindah halaman.
 * - Menangani anchor internal agar scroll tetap jalan tanpa menambahkan `#...` ke URL.
 */
export default function NavigationEvents() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const getCleanUrl = () => `${window.location.pathname}${window.location.search}`;

    const scrollToHashTarget = (hash: string, behavior: ScrollBehavior) => {
      const target = getHashTarget(hash);

      if (!target) {
        return false;
      }

      target.scrollIntoView({ behavior, block: 'start' });
      return true;
    };

    const handleHashAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest('a[href]');

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute('href');

      if (!href || !href.includes('#')) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (url.origin !== window.location.origin || !url.hash) {
        return;
      }

      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
        return;
      }

      if (!scrollToHashTarget(url.hash, 'smooth')) {
        return;
      }

      event.preventDefault();

      if (window.location.hash) {
        window.history.replaceState(window.history.state, '', getCleanUrl());
      }
    };

    const cleanupHashTimer = window.setTimeout(() => {
      if (!window.location.hash) {
        return;
      }

      if (!scrollToHashTarget(window.location.hash, 'auto')) {
        return;
      }

      window.history.replaceState(window.history.state, '', getCleanUrl());
    }, 0);

    document.addEventListener('click', handleHashAnchorClick);

    return () => {
      window.clearTimeout(cleanupHashTimer);
      document.removeEventListener('click', handleHashAnchorClick);
    };
  }, [pathname]);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    const html = document.documentElement;

    // 1. Tandai bahwa sedang dalam transisi (nonaktifkan smooth scroll)
    html.setAttribute('data-transitioning', 'true');

    // 2. Reset scroll ke atas secara instan
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    // 3. Hapus atribut setelah animasi selesai (~400ms)
    const timer = setTimeout(() => {
      html.removeAttribute('data-transitioning');
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
