import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';

export default function GlimpseCard() {
  return (
    <section className="h-[100dvh] w-full snap-start snap-always flex items-center justify-center p-4 sm:p-6 bg-[#F7F1E6] select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[360px] h-[85dvh] max-h-[620px] bg-[#5C1826] rounded-t-[160px] rounded-b-3xl shadow-2xl p-7 sm:p-9 flex flex-col items-center justify-between text-center overflow-hidden text-[#FAF5ED]"
      >
        {/* Delicate Corner Flower in Top-Right of Arch Dome */}
        <div className="absolute top-2 right-2 w-14 h-14 sm:w-16 sm:h-16 pointer-events-none z-10 opacity-90">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <ellipse cx="32" cy="24" rx="16" ry="9" transform="rotate(-52 32 24)" fill="#FAF5ED" opacity="0.88" />
            <ellipse cx="45" cy="32" rx="14" ry="8" transform="rotate(35 45 32)" fill="#FAF5ED" opacity="0.88" />
            <ellipse cx="36" cy="38" rx="13" ry="8.5" transform="rotate(10 36 38)" fill="#FAF5ED" opacity="0.88" />
            
            <circle cx="56" cy="56" r="6.5" fill="#B8935A" />
            <ellipse cx="66" cy="58" rx="13" ry="7.5" transform="rotate(-35 66 58)" fill="#FAF5ED" opacity="0.88" />
            <ellipse cx="61" cy="65" rx="11" ry="7" transform="rotate(25 61 65)" fill="#FAF5ED" opacity="0.88" />
          </svg>
        </div>

        {/* Top Header Group */}
        <div className="flex flex-col items-center pt-3 z-20">
          <p dir="rtl" lang="ar" className="text-sm sm:text-base font-serif text-[#FAF5ED] mb-1.5 leading-relaxed tracking-wide">
            {WEDDING_DATA.couple.bismillahArabic}
          </p>
          <p className="text-[10px] sm:text-[11px] font-serif italic text-[#B8935A] tracking-wide">
            {WEDDING_DATA.couple.bismillahEnglish}
          </p>
        </div>

        {/* Center Couple Names Group */}
        <div className="flex flex-col items-center my-auto py-6 z-20">
          <h1 className="font-serif italic text-4xl sm:text-[46px] text-[#B8935A] leading-none tracking-tight">
            {WEDDING_DATA.couple.name1}
          </h1>
          <span className="font-serif italic text-2xl sm:text-3xl text-[#B8935A] my-3">
            &amp;
          </span>
          <h1 className="font-serif italic text-4xl sm:text-[46px] text-[#B8935A] leading-none tracking-tight">
            {WEDDING_DATA.couple.name2}
          </h1>
        </div>

        {/* Bottom Quote */}
        <div className="pb-2 z-20">
          <p className="font-serif italic text-xs sm:text-sm text-[#B8935A] tracking-wide">
            "{WEDDING_DATA.couple.glimpseQuote}"
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export { GlimpseCard };
