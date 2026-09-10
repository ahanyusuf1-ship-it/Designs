import { useState } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeIntroProps {
  onComplete: () => void;
}

export function EnvelopeIntro({ onComplete }: EnvelopeIntroProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Sequence:
    // 0ms - 500ms: Flap opens
    // 400ms - 1300ms: Maroon card rises out of envelope
    // 1300ms - 2600ms: Card holds for ~1.3s
    // 2600ms: Transitions to main invite
    setTimeout(() => {
      onComplete();
    }, 2600);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onClick={handleOpen}
      onWheel={(e) => {
        if (e.deltaY > 15) handleOpen();
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF6F0] cursor-pointer select-none px-4"
    >
      {/* --- MASTER ENVELOPE RIG (Total height 480px) --- */}
      <div className="relative w-[340px] sm:w-[420px] h-[440px] sm:h-[480px] flex items-center justify-center">

        {/* 1. ENVELOPE BASE CONTAINER */}
        <div className="absolute top-[160px] sm:top-[170px] w-full h-[260px] sm:h-[290px]">
          {/* Interior Back Panel with Gold Texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#CBB68E] via-[#DBC9A6] to-[#C4AF85] rounded-b-2xl shadow-2xl border border-[#BFA779] overflow-hidden z-0">
            <div className="w-full h-full bg-[radial-gradient(#f0e2c8_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40" />
          </div>
        </div>

        {/* 2. TOP FLAP (Drawn inside positive SVG viewBox so it CANNOT be clipped) */}
        <div className={`absolute top-0 w-full h-[320px] pointer-events-none ${isOpen ? 'z-[5]' : 'z-20'}`}>
          <svg viewBox="0 0 420 320" className="w-full h-full overflow-visible drop-shadow-md">
            <defs>
              <linearGradient id="goldLining" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#C2AC82" />
                <stop offset="50%" stopColor="#E2D1AC" />
                <stop offset="100%" stopColor="#F5E9CE" />
              </linearGradient>
            </defs>

            {/* OPEN FLAP: Pointed triangle reaching apex at (210, 15) */}
            {isOpen ? (
              <motion.g
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: '210px 170px' }}
              >
                {/* Cream Paper Rim */}
                <polygon points="0,170 420,170 210,15" fill="#F4EFE6" stroke="#E6DFD1" strokeWidth="1" />
                {/* Gold Foil Lining Inset */}
                <polygon points="16,170 404,170 210,32" fill="url(#goldLining)" />
              </motion.g>
            ) : (
              /* CLOSED FLAP: Triangle pointing down to (210, 310) */
              <g>
                <polygon points="0,170 420,170 210,310" fill="#FAF7F0" stroke="#E6DFD1" strokeWidth="1" />
              </g>
            )}
          </svg>
        </div>

        {/* 3. THE RECTANGULAR CREAM CARD WITH MAROON ARCH (Fitted Red Spec) */}
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={
            isOpen
              ? {
                  y: -85, // Positioned exactly at the red rectangle boundary
                  opacity: 1,
                }
              : { y: 90, opacity: 0 }
          }
          transition={{
            y: { delay: 0.35, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
            opacity: { delay: 0.25, duration: 0.2 },
          }}
          className={`absolute ${
            isOpen ? 'z-[20]' : 'z-10'
          } bg-[#FAF5ED] rounded-none shadow-2xl p-4 sm:p-5 w-[310px] sm:w-[370px] h-[345px] sm:h-[410px] relative flex flex-col items-center justify-center border border-[#E6DFD1] select-none`}
        >
          {/* Inner Maroon Arch Container (#42121B) */}
          <div className="w-full h-full bg-[#42121B] rounded-t-[125px] sm:rounded-t-[155px] rounded-b-xl sm:rounded-b-2xl shadow-md overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 text-center relative">
            {/* Inner Content Group (Vertically Centered inside Arch Dome) */}
            <div className="w-full max-w-[220px] sm:max-w-[260px] flex flex-col items-center text-center my-auto py-0.5">
              {/* Line 1: Arabic Bismillah */}
              <p dir="rtl" lang="ar" className="font-serif text-sm sm:text-[18px] text-[#F3E5CA] tracking-wide leading-relaxed mb-0.5 sm:mb-1 break-words max-w-[92%]">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>

              {/* Line 2: English Translation */}
              <p className="font-serif italic text-[8.5px] sm:text-[10px] text-[#D8C7A5] tracking-wide font-light mb-3 sm:mb-4 max-w-[88%] break-words">
                In the name of Allah, the Most Beneficent and Merciful
              </p>

              {/* Line 3: Names with Ampersand Spacing */}
              <div className="w-full flex items-center justify-center gap-1.5 sm:gap-2.5 mb-3 sm:mb-4 px-1">
                <span className="font-serif italic text-[clamp(1.05rem,4vw,1.5rem)] text-[#FAF2E1] tracking-normal leading-tight whitespace-nowrap">
                  Ramees
                </span>
                <span className="font-serif font-normal text-sm sm:text-lg text-[#D8C7A5] italic">
                  &amp;
                </span>
                <span className="font-serif italic text-[clamp(1.05rem,4vw,1.5rem)] text-[#FAF2E1] tracking-normal leading-tight whitespace-nowrap">
                  Shameena
                </span>
              </div>

              {/* Line 4: Special Day Quote */}
              <p className="font-serif italic text-[10.5px] sm:text-xs text-[#D8C7A5] leading-relaxed max-w-[190px] sm:max-w-[220px] break-words">
                “Your presence will make our day special.”
              </p>
            </div>
          </div>

          {/* Ivory Flower Accent (Placed outside overflow-hidden so it is 100% visible on top-right shoulder) */}
          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 w-7 h-7 sm:w-9 sm:h-9 pointer-events-none z-20 opacity-95 drop-shadow-sm">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FAF5ED]">
              <circle cx="50" cy="24" r="18" />
              <circle cx="76" cy="50" r="18" />
              <circle cx="50" cy="76" r="18" />
              <circle cx="24" cy="50" r="18" />
              <circle cx="50" cy="50" r="9" className="fill-[#CBB68E]" />
            </svg>
          </div>
        </motion.div>

        {/* 4. FRONT ENVELOPE POCKET (Layer 30: Concells lower card) */}
        <div className="absolute top-[160px] sm:top-[170px] w-full h-[260px] sm:h-[290px] z-30 pointer-events-none">
          <svg viewBox="0 0 420 290" className="w-full h-full drop-shadow-[0_-4px_14px_rgba(0,0,0,0.06)]" preserveAspectRatio="none">
            {/* Left side fold */}
            <polygon points="0,0 0,290 210,165" fill="#F4EFE6" stroke="#E6DFD1" strokeWidth="0.8" />
            {/* Right side fold */}
            <polygon points="420,0 420,290 210,165" fill="#F4EFE6" stroke="#E6DFD1" strokeWidth="0.8" />
            {/* Bottom triangular flap */}
            <polygon points="0,290 420,290 210,148" fill="#FAF7F0" stroke="#E6DFD1" strokeWidth="0.8" />
          </svg>

          {/* Wax Seal with Gold 4-Petal Cross */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[51%] -translate-y-1/2 w-12 h-12 rounded-full bg-[#52131F] shadow-[0_4px_14px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-auto">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#EAD7B0] drop-shadow-sm">
              <path d="M12 2C12.8 5 15 7.2 18 8C15 8.8 12.8 11 12 14C11.2 11 9 8.8 6 8C9 7.2 11.2 5 12 2Z" />
              <circle cx="12" cy="8" r="1.5" className="fill-[#42121B]" />
            </svg>
          </div>
        </div>

      </div>

      {/* Tap / Scroll Cue */}
      <motion.p
        animate={{ opacity: isOpen ? 0 : 0.75 }}
        transition={{ duration: 0.3 }}
        className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#7a2e38] mt-4"
      >
        Click or scroll to open
      </motion.p>
    </motion.div>
  );
}

export default EnvelopeIntro;
