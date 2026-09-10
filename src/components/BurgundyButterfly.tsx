import { motion } from 'framer-motion';

interface BurgundyButterflyProps {
  className?: string;
  size?: number; // width/height in px
}

export function BurgundyButterfly({ className = '', size = 46 }: BurgundyButterflyProps) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: -8, opacity: 0 }}
      animate={{
        x: [0, 18, 8, 24, 0],
        y: [0, -12, -24, -8, 0],
        rotate: [-8, 6, -4, 10, -8],
        opacity: [0.75, 1, 0.85, 1, 0.75],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={`pointer-events-none z-30 ${className}`}
      style={{ width: size, height: size, perspective: 400 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_8px_rgba(74,18,30,0.3)]">
        <defs>
          <linearGradient id="burgundyWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9E2B43" />
            <stop offset="60%" stopColor="#7A2436" />
            <stop offset="100%" stopColor="#4A121E" />
          </linearGradient>
          <linearGradient id="goldVein" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAD7B0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#CBB68E" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* LEFT WING (Flapping animation) */}
        <motion.g
          animate={{ rotateY: [0, 58, 0, 48, 0] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          {/* Main Upper Wing */}
          <path
            d="M50 48 C35 20, 10 18, 8 40 C6 55, 30 65, 50 54 Z"
            fill="url(#burgundyWing)"
            stroke="#4A121E"
            strokeWidth="0.8"
          />
          {/* Main Lower Wing */}
          <path
            d="M50 54 C32 60, 18 78, 28 88 C40 94, 48 72, 50 62 Z"
            fill="url(#burgundyWing)"
            stroke="#4A121E"
            strokeWidth="0.8"
          />
          {/* Gold Vein / Filigree Patterns */}
          <path d="M50 48 C40 32, 20 28, 14 40" stroke="url(#goldVein)" strokeWidth="1" fill="none" />
          <path d="M50 54 C40 65, 26 76, 32 84" stroke="url(#goldVein)" strokeWidth="0.8" fill="none" />
          <circle cx="16" cy="36" r="2" fill="#EAD7B0" opacity="0.85" />
        </motion.g>

        {/* RIGHT WING (Flapping in sync) */}
        <motion.g
          animate={{ rotateY: [0, -58, 0, -48, 0] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          {/* Main Upper Wing */}
          <path
            d="M50 48 C65 20, 90 18, 92 40 C94 55, 70 65, 50 54 Z"
            fill="url(#burgundyWing)"
            stroke="#4A121E"
            strokeWidth="0.8"
          />
          {/* Main Lower Wing */}
          <path
            d="M50 54 C68 60, 82 78, 72 88 C60 94, 52 72, 50 62 Z"
            fill="url(#burgundyWing)"
            stroke="#4A121E"
            strokeWidth="0.8"
          />
          {/* Gold Vein / Filigree Patterns */}
          <path d="M50 48 C60 32, 80 28, 86 40" stroke="url(#goldVein)" strokeWidth="1" fill="none" />
          <path d="M50 54 C60 65, 74 76, 68 84" stroke="url(#goldVein)" strokeWidth="0.8" fill="none" />
          <circle cx="84" cy="36" r="2" fill="#EAD7B0" opacity="0.85" />
        </motion.g>

        {/* BUTTERFLY BODY & ANTENNAE */}
        <g>
          {/* Body */}
          <ellipse cx="50" cy="53" rx="2.5" ry="14" fill="#3B0E17" />
          {/* Head */}
          <circle cx="50" cy="37" r="3" fill="#3B0E17" />
          {/* Left Antenna */}
          <path d="M49 35 C44 26, 38 22, 35 20" stroke="#3B0E17" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="35" cy="20" r="1" fill="#CBB68E" />
          {/* Right Antenna */}
          <path d="M51 35 C56 26, 62 22, 65 20" stroke="#3B0E17" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="65" cy="20" r="1" fill="#CBB68E" />
        </g>
      </svg>
    </motion.div>
  );
}

export default BurgundyButterfly;
