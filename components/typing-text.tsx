'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type InViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

type TypingTextProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  threshold?: number;
  rootMargin?: `${number}px` | `${number}%`;
  cursor?: boolean;
  cursorChar?: string;
  hideCursorOnComplete?: boolean;
  onTypingComplete?: () => void;
};

export default function TypingText({
  tag = 'p',
  text,
  className,
  speed = 45,
  startDelay = 0,
  threshold = 0.1,
  rootMargin = '-100px',
  cursor = true,
  cursorChar = '|',
  hideCursorOnComplete = true,
  onTypingComplete,
}: TypingTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);
  const stepTimeoutRef = useRef<number | null>(null);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(cursor);
  const isInView = useInView(ref, { amount: threshold, margin: rootMargin as InViewOptions['margin'], once: true });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (startTimeoutRef.current) {
        window.clearTimeout(startTimeoutRef.current);
      }

      if (stepTimeoutRef.current) {
        window.clearTimeout(stepTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isInView || startedRef.current) {
      return;
    }

    const typeNext = () => {
      stepTimeoutRef.current = window.setTimeout(() => {
        setVisibleCount((currentCount) => {
          const nextCount = Math.min(currentCount + 1, text.length);

          if (nextCount >= text.length && !completedRef.current) {
            completedRef.current = true;

            if (hideCursorOnComplete) {
              setShowCursor(false);
            }

            onTypingComplete?.();
          } else {
            typeNext();
          }

          return nextCount;
        });
      }, speed);
    };

    frameRef.current = window.requestAnimationFrame(() => {
      startTimeoutRef.current = window.setTimeout(() => {
        startedRef.current = true;
        typeNext();
      }, startDelay * 1000);
    });

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (startTimeoutRef.current) {
        window.clearTimeout(startTimeoutRef.current);
      }

      if (stepTimeoutRef.current) {
        window.clearTimeout(stepTimeoutRef.current);
      }
    };
  }, [hideCursorOnComplete, isInView, onTypingComplete, prefersReducedMotion, speed, startDelay, text]);

  const visibleText = prefersReducedMotion ? text : text.slice(0, visibleCount);
  const shouldShowCursor = cursor && showCursor && (!hideCursorOnComplete || visibleCount < text.length);
  const setElementRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const content = (
    <>
      <span aria-hidden="true" className="whitespace-pre-wrap">
        {visibleText}
      </span>
      {shouldShowCursor ? <span aria-hidden="true" className="ml-[0.08em] animate-pulse">{cursorChar}</span> : null}
    </>
  );

  const sharedProps = { ref: setElementRef, className, 'aria-label': text };

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
}
