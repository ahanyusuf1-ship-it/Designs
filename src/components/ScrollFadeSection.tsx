import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollFadeSectionProps {
  children: React.ReactNode;
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  id?: string;
}

export function ScrollFadeSection({
  children,
  className = '',
  containerRef,
  id,
}: ScrollFadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ['start end', 'end start'],
  });

  // Fade in as it enters (0 -> 0.45), stay visible (0.45 -> 0.55), fade out as it leaves (0.55 -> 1)
  const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [60, 0, 0, -60]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ opacity, y }}
      className={`min-h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 select-none ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default ScrollFadeSection;
