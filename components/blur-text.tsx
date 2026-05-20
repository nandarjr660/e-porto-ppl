'use client';

import { motion, useReducedMotion } from 'framer-motion';

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  onAnimationComplete?: () => void;
  className?: string;
};

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function BlurText({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className,
}: BlurTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const segments = animateBy === 'letters' ? Array.from(text) : text.split(' ');
  const offset = direction === 'top' ? -18 : 18;
  const baseDelay = delay / 1000;

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;

        return (
          <motion.span
            key={`${segment}-${index}`}
            className={`inline-block will-change-transform will-change-[filter] ${animateBy === 'words' && !isLast ? 'mr-[0.25em]' : ''}`}
            initial={{ opacity: 0, y: offset, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.65,
              delay: baseDelay + index * (animateBy === 'words' ? 0.12 : 0.04),
              ease: EASE,
            }}
            onAnimationComplete={isLast ? onAnimationComplete : undefined}
            aria-hidden="true"
          >
            {segment}
          </motion.span>
        );
      })}
    </span>
  );
}
