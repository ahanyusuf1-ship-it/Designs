import React from 'react';
import { motion } from 'framer-motion';

interface ScrollCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollCard: React.FC<ScrollCardProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.2, 0.8, 0.2, 1], // Smooth cinematic easing matching reference
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollCard;
