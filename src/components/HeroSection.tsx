import React from 'react';
import { motion } from 'framer-motion';
import { CornerFloralCluster, SingleFlower } from './FloralMotif';
import { WEDDING_DATA } from '../config/weddingData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-[#FBF7F0] flex justify-center overflow-hidden">
      {/* Floating Floral Drizzle Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floral-drizzle-particle" style={{ left: '8%', animationDuration: '11s', animationDelay: '0s' }}>
          <SingleFlower size={14} color="#802336" />
        </div>
        <div className="floral-drizzle-particle" style={{ left: '25%', animationDuration: '14s', animationDelay: '2s' }}>
          <SingleFlower size={10} color="#C19A5B" />
        </div>
        <div className="floral-drizzle-particle" style={{ left: '75%', animationDuration: '10s', animationDelay: '1s' }}>
          <SingleFlower size={16} color="#4A1525" />
        </div>
        <div className="floral-drizzle-particle" style={{ left: '88%', animationDuration: '13s', animationDelay: '3s' }}>
          <SingleFlower size={12} color="#C19A5B" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-lg bg-[#FBF7F0] border border-[#C19A5B]/40 rounded-3xl p-8 sm:p-12 text-center shadow-lg overflow-hidden my-4"
      >
        {/* Corner Burgundy Flower Clusters */}
        <CornerFloralCluster position="top-right" />
        <CornerFloralCluster position="bottom-left" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="spaced-caps text-[#C19A5B] font-semibold text-xs tracking-[0.3em] mb-2">
            INVITATION
          </span>
          <span className="spaced-caps text-[#7A6F72] text-[10px] tracking-[0.25em] mb-8">
            {WEDDING_DATA.couple.invitationSubtitle}
          </span>

          {/* Couple Full Names */}
          <h1 className="font-serif italic text-4xl sm:text-5xl text-[#802336] leading-tight mb-2">
            {WEDDING_DATA.couple.fullName1}
          </h1>
          <span className="font-serif italic text-lg text-[#2D2325] my-1">
            and
          </span>
          <h1 className="font-serif italic text-4xl sm:text-5xl text-[#802336] leading-tight mb-8">
            {WEDDING_DATA.couple.fullName2}
          </h1>

          <p className="spaced-caps text-[11px] text-[#7A6F72] leading-relaxed max-w-xs mb-8 tracking-[0.2em]">
            {WEDDING_DATA.couple.invitationRequest}
          </p>

          {/* Gold Hairline Divider Line */}
          <div className="w-32 h-[1px] bg-[#C19A5B] my-6 opacity-70" />

          {/* Date */}
          <p className="font-sans font-medium text-lg text-[#2D2325] tracking-widest uppercase mb-4">
            {WEDDING_DATA.couple.weddingDate}
          </p>

          <span className="spaced-caps text-[10px] text-[#C19A5B] mb-1">
            VENUE
          </span>
          <p className="font-sans text-sm font-semibold text-[#2D2325]">
            {WEDDING_DATA.couple.heroVenue}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
