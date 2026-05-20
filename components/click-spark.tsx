'use client';

import type { ReactNode, PointerEvent as ReactPointerEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Spark = {
  id: number;
  x: number;
  y: number;
};

type ClickSparkProps = {
  children: ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  className?: string;
};

export default function ClickSpark({
  children,
  sparkColor = '#ffffff',
  sparkSize = 23,
  sparkRadius = 60,
  sparkCount = 10,
  duration = 400,
  className,
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const nextSparkIdRef = useRef(0);
  const cleanupTimersRef = useRef<Map<number, number>>(new Map());
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timers = cleanupTimersRef.current;

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
      timers.clear();
    };
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.button !== 0) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const id = nextSparkIdRef.current;

    nextSparkIdRef.current += 1;

    setSparks((currentSparks) => currentSparks.concat({
      id,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }));

    const timer = window.setTimeout(() => {
      setSparks((currentSparks) => currentSparks.filter((spark) => spark.id !== id));
      cleanupTimersRef.current.delete(id);
    }, duration);

    cleanupTimersRef.current.set(id, timer);
  };

  return (
    <div className={className ?? 'relative min-h-screen'} onPointerDownCapture={handlePointerDown}>
      {children}

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <AnimatePresence>
          {sparks.map((spark) => (
            <div
              key={spark.id}
              className="absolute left-0 top-0"
              style={{ transform: `translate(${spark.x}px, ${spark.y}px)` }}
            >
              {Array.from({ length: sparkCount }, (_, index) => {
                const angle = (360 / sparkCount) * index + (spark.id % 2 === 0 ? 0 : 180 / sparkCount);
                const radians = (angle * Math.PI) / 180;
                const distanceX = Math.cos(radians) * sparkRadius;
                const distanceY = Math.sin(radians) * sparkRadius;

                return (
                  <motion.span
                    key={`${spark.id}-${index}`}
                    className="absolute left-0 top-0 block -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: `${sparkSize}px`,
                      height: '2px',
                      backgroundColor: sparkColor,
                      rotate: `${angle}deg`,
                      transformOrigin: 'center',
                      boxShadow: `0 0 10px ${sparkColor}`,
                    }}
                    initial={{ x: 0, y: 0, opacity: 1, scaleX: 0.35, scaleY: 1 }}
                    animate={{ x: distanceX, y: distanceY, opacity: 0, scaleX: 1, scaleY: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: duration / 1000, ease: [0.25, 1, 0.5, 1] }}
                  />
                );
              })}

              <motion.span
                className="absolute left-0 top-0 block -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: sparkColor,
                  boxShadow: `0 0 16px ${sparkColor}`,
                }}
                initial={{ opacity: 0.9, scale: 0.2 }}
                animate={{ opacity: 0, scale: 1.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration / 1000, ease: 'easeOut' }}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
