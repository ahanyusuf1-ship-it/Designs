import React from 'react';

interface CardSlideProps {
  children: React.ReactNode;
  id?: string;
  showPetals?: boolean;
}

export default function CardSlide({ children, id, showPetals = true }: CardSlideProps) {
  return (
    <div
      id={id}
      className="relative w-full max-w-[430px] h-full max-h-[820px] bg-[#FAF5ED] rounded-2xl shadow-xl p-3.5 sm:p-4 overflow-hidden my-auto"
    >
      {/* --- Floral Corner Clusters --- */}
      <div className="absolute -top-2 -right-2 w-28 h-28 pointer-events-none z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#5c1c28]">
          <ellipse cx="65" cy="25" rx="16" ry="10" transform="rotate(-25 65 25)" />
          <ellipse cx="80" cy="40" rx="15" ry="9" transform="rotate(45 80 40)" />
          <ellipse cx="50" cy="35" rx="13" ry="8" transform="rotate(10 50 35)" />
          <circle cx="78" cy="62" r="7" className="fill-[#3b1219]" />
          <ellipse cx="88" cy="68" rx="10" ry="6" transform="rotate(-30 88 68)" />
        </svg>
      </div>

      <div className="absolute -bottom-2 -left-2 w-28 h-28 pointer-events-none z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#5c1c28]">
          <ellipse cx="35" cy="75" rx="16" ry="10" transform="rotate(-30 35 75)" />
          <ellipse cx="20" cy="60" rx="15" ry="9" transform="rotate(40 20 60)" />
          <ellipse cx="50" cy="65" rx="13" ry="8" transform="rotate(15 50 65)" />
          <circle cx="22" cy="38" r="7" className="fill-[#3b1219]" />
          <ellipse cx="14" cy="32" rx="10" ry="6" transform="rotate(-40 14 32)" />
        </svg>
      </div>

      {/* --- Floating Accent Petals --- */}
      {showPetals && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <span className="absolute top-[16%] left-[48%] w-2 h-3.5 bg-[#b58b8b] rounded-full rotate-45 opacity-60" />
          <span className="absolute top-[28%] right-[22%] w-2 h-3 bg-[#d4b996] rounded-full -rotate-12 opacity-70" />
          <span className="absolute top-[38%] left-[10%] w-1.5 h-3 bg-[#c79b9b] rounded-full rotate-12 opacity-50" />
          <span className="absolute bottom-[24%] right-[32%] w-2.5 h-1.5 bg-[#c79b9b] rounded-full -rotate-25 opacity-60" />
          <span className="absolute bottom-[18%] left-[24%] w-2 h-3 bg-[#d4b996] rounded-full rotate-45 opacity-70" />
        </div>
      )}

      {/* 2. THE INNER CONTAINER */}
      <div className="w-full h-full rounded-xl p-2 sm:p-2.5 flex flex-col">
        {/* Inner Container */}
        <div className="w-full h-full rounded-lg flex flex-col justify-between items-center text-center px-4 py-8 sm:py-10 relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export { CardSlide };
