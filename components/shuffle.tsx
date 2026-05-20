'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type ShuffleProps = {
  text: string;
  shuffleDirection?: 'left' | 'right';
  duration?: number;
  animationMode?: 'sequential' | 'evenodd';
  shuffleTimes?: number;
  ease?: 'linear' | 'power2.out' | 'power3.out' | 'power4.out';
  stagger?: number;
  threshold?: number;
  triggerOnce?: boolean;
  triggerOnHover?: boolean;
  respectReducedMotion?: boolean;
  loop?: boolean;
  loopDelay?: number;
  startDelay?: number;
  className?: string;
};

const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getEase(progress: number, ease: ShuffleProps['ease']) {
  if (ease === 'linear') return progress;
  if (ease === 'power2.out') return 1 - Math.pow(1 - progress, 2);
  if (ease === 'power4.out') return 1 - Math.pow(1 - progress, 4);
  return 1 - Math.pow(1 - progress, 3);
}

function buildRevealOrder(
  text: string,
  direction: NonNullable<ShuffleProps['shuffleDirection']>,
  mode: NonNullable<ShuffleProps['animationMode']>
) {
  const base = Array.from(text)
    .map((char, index) => ({ char, index }))
    .filter(({ char }) => char !== ' ')
    .map(({ index }) => index);

  const directional = direction === 'right' ? [...base].reverse() : base;

  if (mode !== 'evenodd') {
    return directional;
  }

  return directional.filter((_, index) => index % 2 === 0).concat(directional.filter((_, index) => index % 2 === 1));
}

function getRandomChar(seed: number) {
  return RANDOM_CHARS[seed % RANDOM_CHARS.length];
}

export default function Shuffle({
  text,
  shuffleDirection = 'left',
  duration = 0.35,
  animationMode = 'sequential',
  shuffleTimes = 1,
  ease = 'power3.out',
  stagger = 0.03,
  threshold = 0.1,
  triggerOnce = true,
  triggerOnHover = false,
  respectReducedMotion = true,
  loop = false,
  loopDelay = 0,
  startDelay = 0,
  className,
}: ShuffleProps) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);
  const loopTimeoutRef = useRef<number | null>(null);
  const startAnimationRef = useRef<() => void>(() => undefined);
  const hasAnimatedRef = useRef(false);
  const isRunningRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(containerRef, { amount: threshold, once: triggerOnce });

  const targetChars = useMemo(() => Array.from(text), [text]);
  const revealOrder = useMemo(
    () => buildRevealOrder(text, shuffleDirection, animationMode),
    [text, shuffleDirection, animationMode]
  );

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (startTimeoutRef.current) window.clearTimeout(startTimeoutRef.current);
      if (loopTimeoutRef.current) window.clearTimeout(loopTimeoutRef.current);
    };
  }, []);

  const startAnimation = useCallback(() => {
    if ((respectReducedMotion && prefersReducedMotion) || !text.trim()) {
      setDisplayText(text);
      hasAnimatedRef.current = true;
      return;
    }

    if (triggerOnce && hasAnimatedRef.current) {
      return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (startTimeoutRef.current) window.clearTimeout(startTimeoutRef.current);
    if (loopTimeoutRef.current) window.clearTimeout(loopTimeoutRef.current);

    const orderMap = new Map(revealOrder.map((charIndex, orderIndex) => [charIndex, orderIndex]));
    const charDurationMs = Math.max(duration, 0.1) * 1000;
    const charStaggerMs = Math.max(stagger, 0) * 1000;
    const scrambleStepMs = Math.max(24, 90 / Math.max(shuffleTimes, 1));

    const run = () => {
      const startedAt = performance.now();
      isRunningRef.current = true;

      const tick = (now: number) => {
        let isComplete = true;

        const nextText = targetChars.map((targetChar, index) => {
          if (targetChar === ' ') return ' ';

          const orderIndex = orderMap.get(index) ?? 0;
          const localElapsed = now - startedAt - orderIndex * charStaggerMs;

          if (localElapsed <= 0) {
            isComplete = false;
            return targetChar;
          }

          const progress = Math.min(localElapsed / charDurationMs, 1);
          const easedProgress = getEase(progress, ease);

          if (easedProgress >= 1) {
            return targetChar;
          }

          isComplete = false;
          const scrambleFrame = Math.floor(localElapsed / scrambleStepMs);
          return getRandomChar(index * 17 + orderIndex * 13 + scrambleFrame * 7);
        });

        setDisplayText(nextText.join(''));

        if (isComplete) {
          setDisplayText(text);
          hasAnimatedRef.current = true;
          isRunningRef.current = false;

          if (loop) {
            loopTimeoutRef.current = window.setTimeout(() => {
              hasAnimatedRef.current = false;
              startAnimationRef.current();
            }, loopDelay * 1000);
          }

          return;
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    if (startDelay > 0) {
      startTimeoutRef.current = window.setTimeout(run, startDelay * 1000);
      return;
    }

    run();
  }, [
    duration,
    ease,
    loop,
    loopDelay,
    prefersReducedMotion,
    respectReducedMotion,
    revealOrder,
    shuffleTimes,
    stagger,
    startDelay,
    targetChars,
    text,
    triggerOnce,
  ]);

  useEffect(() => {
    startAnimationRef.current = startAnimation;
  }, [startAnimation]);

  useEffect(() => {
    if (isInView) {
      const frame = window.requestAnimationFrame(() => {
        startAnimation();
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }
  }, [isInView, startAnimation]);

  const handleMouseEnter = () => {
    if (triggerOnHover && !isRunningRef.current) {
      startAnimation();
    }
  };

  return (
    <span
      ref={containerRef}
      className={className}
      aria-label={text}
      onMouseEnter={handleMouseEnter}
    >
      <span aria-hidden="true" className="whitespace-pre-wrap">
        {displayText}
      </span>
    </span>
  );
}
