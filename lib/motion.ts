/**
 * motion.ts — Centralized Framer Motion variants
 * Modern Editorial reveal animations for the PPL Portfolio.
 *
 * Easing: [0.25, 1, 0.5, 1] — premium magazine feel (slow-out).
 * All animations use `once: true` via whileInView to avoid re-triggering.
 */

import type { Variants } from 'framer-motion';

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

/** Single element: fade up from y+40 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/** Single element: large fade up for hero headlines (y+60) */
export const fadeUpHero: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

/** Single element: fade up from left (for images/photos) */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

/** Simple opacity fade — for background decorations or images */
export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE },
  },
};

/**
 * Cinematic height reveal — container grows from height 0 to auto.
 * Use with `overflow-hidden` on the target element.
 * Inner image should use `scaleY` inverse to prevent distortion.
 */
export const revealHeight: Variants = {
  hidden: { opacity: 0, scaleY: 0, originY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.3 },
  },
};

/** Wrapper that staggers its children with a 0.12s delay between each */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/** Child item inside a staggerContainer — same as fadeUp */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Shared viewport config: animate once, start 80px before element enters */
export const VIEWPORT = { once: true, margin: '-80px' } as const;
