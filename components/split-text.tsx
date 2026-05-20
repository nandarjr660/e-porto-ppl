'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type InViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

type SplitTextProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  text?: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  ease?: 'linear' | 'power2.out' | 'power3.out' | 'power4.out';
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: Record<string, string | number>;
  to?: Record<string, string | number>;
  threshold?: number;
  rootMargin?: `${number}px` | `${number}%` | `${number}rem` | `${number}em`;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end' | 'inherit';
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
  startDelay?: number;
};

const EASE_MAP = {
  linear: 'linear',
  'power2.out': [0.22, 1, 0.36, 1],
  'power3.out': [0.25, 1, 0.5, 1],
  'power4.out': [0.17, 0.84, 0.44, 1],
} as const;

function splitContent(text: string, splitType: NonNullable<SplitTextProps['splitType']>) {
  if (splitType === 'words') {
    return text.split(/(\s+)/).map((part, index) => ({
      key: `word-${index}`,
      content: part,
      isSpace: /^\s+$/.test(part),
    }));
  }

  return Array.from(text).map((char, index) => ({
    key: `char-${index}`,
    content: char,
    isSpace: char === ' ',
  }));
}

export default function SplitText({
  tag = 'p',
  text = '',
  className = '',
  segmentClassName = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'inherit',
  onLetterAnimationComplete,
  showCallback,
  startDelay = 0,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);
  const hasCompletedRef = useRef(false);
  const isInView = useInView(ref, { amount: threshold, margin: rootMargin as InViewOptions['margin'], once: true });
  const prefersReducedMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  const segments = useMemo(() => splitContent(text, splitType), [text, splitType]);
  const lastAnimatedIndex = useMemo(() => {
    for (let index = segments.length - 1; index >= 0; index -= 1) {
      if (!segments[index].isSpace) {
        return index;
      }
    }

    return -1;
  }, [segments]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || hasStartedRef.current || prefersReducedMotion) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      timeoutRef.current = window.setTimeout(() => {
        hasStartedRef.current = true;
        setIsActive(true);
      }, startDelay * 1000);
    });

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, prefersReducedMotion, startDelay]);

  const handleAnimationComplete = () => {
    if (hasCompletedRef.current) {
      return;
    }

    hasCompletedRef.current = true;

    if (showCallback || onLetterAnimationComplete) {
      onLetterAnimationComplete?.();
    }
  };

  const setElementRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const renderTag = (content: React.ReactNode, ariaLabel?: string) => {
    const sharedProps = {
      ref: setElementRef,
      className,
      style: prefersReducedMotion ? { textAlign } : { textAlign, overflow: 'hidden' as const },
      ...(ariaLabel ? { 'aria-label': ariaLabel } : {}),
    };

    switch (tag) {
      case 'h1':
        return <h1 {...sharedProps}>{content}</h1>;
      case 'h2':
        return <h2 {...sharedProps}>{content}</h2>;
      case 'h3':
        return <h3 {...sharedProps}>{content}</h3>;
      case 'h4':
        return <h4 {...sharedProps}>{content}</h4>;
      case 'h5':
        return <h5 {...sharedProps}>{content}</h5>;
      case 'h6':
        return <h6 {...sharedProps}>{content}</h6>;
      case 'span':
        return <span {...sharedProps}>{content}</span>;
      default:
        return <p {...sharedProps}>{content}</p>;
    }
  };

  if (prefersReducedMotion) {
    return renderTag(text);
  }

  return renderTag(
    <span aria-hidden="true" className="inline-block whitespace-pre-wrap">
      {segments.map((segment, index) => {
        if (segment.isSpace) {
          return <span key={segment.key}>{segment.content}</span>;
        }

        return (
          <motion.span
            key={segment.key}
            className={`inline-block will-change-transform will-change-[opacity] ${segmentClassName}`.trim()}
            initial={from}
            animate={isActive ? to : from}
            transition={{
              duration,
              delay: (delay * index) / 1000,
              ease: EASE_MAP[ease],
            }}
            onAnimationComplete={index === lastAnimatedIndex ? handleAnimationComplete : undefined}
          >
            {segment.content}
          </motion.span>
        );
      })}
    </span>,
    text
  );
}
