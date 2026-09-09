import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SingleFlower } from './FloralMotif';
import { WEDDING_DATA } from '../config/weddingData';

interface GlimpseSectionProps {
  onComplete: () => void;
}

export const GlimpseSection: React.FC<GlimpseSectionProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2600); // Holds ~2.6s matching reference timing

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      onClick={onComplete} // Allow tap-to-skip
      className="fixed inset-0 z-50 bg-[#FBF7F0] flex flex-col items-center justify-center p-6 cursor-pointer touch-none h-[100vh] h-[100dvh] w-screen overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[360px] bg-[#4A1525] text-[#C19A5B] rounded-t-[180px] rounded-b-3xl p-8 text-center shadow-2xl relative overflow-hidden border border-[#C19A5B]/30 flex flex-col items-center justify-center min-h-[460px]"
      >
        {/* Top-Right Decorative Flower Badge */}
        <div className="absolute top-6 right-6 opacity-30 pointer-events-none">
          <SingleFlower size={42} color="#FBF7F0" />
        </div>

        {/* Bismillah Arch Dome Design */}
        <div className="w-48 h-28 border-t-2 border-x-2 border-[#C19A5B]/40 rounded-t-full flex items-center justify-center mb-6 pt-6">
          <p dir="rtl" lang="ar" className="font-arabic text-2xl sm:text-3xl text-[#FBF7F0] leading-relaxed">
            {WEDDING_DATA.couple.bismillahArabic}
          </p>
        </div>

        {/* English Translation */}
        <p className="font-serif italic text-xs sm:text-sm text-[#C19A5B] leading-relaxed mb-6">
          {WEDDING_DATA.couple.bismillahEnglish}
        </p>

        {/* Couple Names */}
        <div className="my-4">
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#C19A5B] font-normal tracking-wide">
            {WEDDING_DATA.couple.name1}
          </h2>
          <span className="block font-serif italic text-2xl text-[#FBF7F0] my-1">
            &
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#C19A5B] font-normal tracking-wide">
            {WEDDING_DATA.couple.name2}
          </h2>
        </div>

        <p className="font-serif italic text-xs text-[#FBF7F0]/80 mt-4 mb-2">
          "{WEDDING_DATA.couple.glimpseQuote}"
        </p>

        <span className="text-[10px] tracking-[0.2em] uppercase text-[#C19A5B]/60 mt-4">
          Tap anywhere to skip
        </span>
      </motion.div>
    </motion.section>
  );
};
