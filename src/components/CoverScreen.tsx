import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SingleFlower, HairlineFlowerDivider } from './FloralMotif';
import { WEDDING_DATA } from '../config/weddingData';

interface CoverScreenProps {
  onOpen: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({ onOpen }) => {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, -250], [1, 0.3]);
  const scale = useTransform(y, [0, -250], [1, 0.95]);

  const handleDragEnd = (_: any, info: { offset: { y: number }; velocity: { y: number } }) => {
    // 80px-120px drag resistance threshold or fast upward flick (-300px/s velocity)
    if (info.offset.y < -80 || info.velocity.y < -300) {
      onOpen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100vh' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={{ top: 0.8, bottom: 0 }}
      style={{ y, opacity, scale }}
      onDragEnd={handleDragEnd}
      onClick={onOpen}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 select-none cursor-pointer bg-[#FBF7F0] touch-lock h-[100vh] h-[100dvh] w-screen overflow-hidden"
    >
      {/* Top Hairline Floral Divider */}
      <div className="w-full max-w-xs mt-10 pointer-events-none">
        <HairlineFlowerDivider />
      </div>

      {/* Centered Envelope & Wax Seal Graphic */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-sm px-4 pointer-events-none">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full aspect-[4/3] bg-white border border-[#E8DEC8] rounded-xl shadow-xl flex items-center justify-center overflow-hidden"
        >
          {/* Envelope Diagonal Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="50%" y2="50%" stroke="#E8DEC8" strokeWidth="1" />
            <line x1="100%" y1="0" x2="50%" y2="50%" stroke="#E8DEC8" strokeWidth="1" />
            <line x1="0" y1="100%" x2="50%" y2="50%" stroke="#E8DEC8" strokeWidth="1" />
            <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="#E8DEC8" strokeWidth="1" />
          </svg>

          {/* Deep Burgundy Central Wax Seal */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-[#4A1525] border-2 border-[#C19A5B] flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105">
            <SingleFlower size={28} color="#C19A5B" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Vertical Indicator Bar & SWIPE TO OPEN */}
      <div className="mb-10 flex flex-col items-center animate-bounce-slow pointer-events-none">
        <div className="w-[2px] h-6 bg-[#C19A5B] mb-3 opacity-80" />
        <p className="spaced-caps text-[#4A1525] font-semibold tracking-[0.3em]">
          {WEDDING_DATA.couple.coverTagline}
        </p>
      </div>
    </motion.div>
  );
};
