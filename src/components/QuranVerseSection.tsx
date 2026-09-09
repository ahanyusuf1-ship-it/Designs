import React from 'react';
import { motion } from 'framer-motion';

interface QuranVerseProps {
  arabic: string;
  english: string;
  reference: string;
}

export const QuranVerseSection: React.FC<QuranVerseProps> = ({ arabic, english, reference }) => {
  return (
    <section className="py-8 px-4 bg-[#FBF7F0] flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg wireframe-card p-8 text-center bg-white border border-[#E8DEC8] rounded-2xl shadow-sm"
      >
        {/* Arabic Verse */}
        <p className="font-arabic text-2xl sm:text-3xl text-[#2D2325] leading-relaxed mb-6">
          {arabic}
        </p>

        {/* English Translation */}
        <p className="font-serif italic text-base sm:text-lg text-[#2D2325] leading-relaxed mb-6 max-w-md mx-auto">
          {english}
        </p>

        {/* Reference Label */}
        <div className="pt-2 border-t border-[#E8DEC8]/60 inline-block px-6">
          <span className="spaced-caps text-xs text-[#7A6F72] tracking-[0.3em]">
            {reference}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
