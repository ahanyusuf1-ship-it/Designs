import React from 'react';
import { StaggerGroup, StaggerItem } from './StaggerGroup';

export default function VenuesLocationCard() {
  return (
    <div className="relative w-full max-w-[440px] min-h-[660px] sm:min-h-[700px] bg-[#FAF5ED] rounded-2xl shadow-xl flex flex-col justify-center items-center py-10 px-7 sm:py-12 sm:px-9 text-center overflow-hidden my-auto">

      {/* Top-Right Floral Cluster */}
      <div className="absolute -top-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-0 opacity-85">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="65" cy="25" rx="16" ry="10" transform="rotate(-25 65 25)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="80" cy="40" rx="15" ry="9" transform="rotate(45 80 40)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="50" cy="35" rx="13" ry="8" transform="rotate(10 50 35)" fill="#7A2436" opacity="0.9" />
          <circle cx="78" cy="62" r="7" fill="#5C1826" />
          <ellipse cx="88" cy="68" rx="10" ry="6" transform="rotate(-30 88 68)" fill="#7A2436" opacity="0.9" />
        </svg>
      </div>

      {/* Bottom-Left Floral Cluster */}
      <div className="absolute -bottom-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-0 opacity-85">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="35" cy="75" rx="16" ry="10" transform="rotate(-30 35 75)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="20" cy="60" rx="15" ry="9" transform="rotate(40 20 60)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="50" cy="65" rx="13" ry="8" transform="rotate(15 50 65)" fill="#7A2436" opacity="0.9" />
          <circle cx="22" cy="38" r="7" fill="#5C1826" />
          <ellipse cx="14" cy="32" rx="10" ry="6" transform="rotate(-40 14 32)" fill="#7A2436" opacity="0.9" />
        </svg>
      </div>

      <StaggerGroup className="w-full flex flex-col items-center relative z-10 py-1">

        {/* --- TOP HEADING GROUP --- */}
        <StaggerItem className="mb-11 sm:mb-14">
          <header className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-1.5">
              <div className="w-10 sm:w-14 h-[1px] bg-[#B8935A]/60" />
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-[#B8935A]">
                WHERE TO FIND US
              </span>
              <div className="w-10 sm:w-14 h-[1px] bg-[#B8935A]/60" />
            </div>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-[#5C1826] tracking-tight font-normal leading-tight">
              Venues
            </h2>
          </header>
        </StaggerItem>

        {/* --- DUAL VENUE CARDS --- */}
        <StaggerItem className="w-full flex justify-center mt-4 sm:mt-6 mb-8 sm:mb-10">
          <div className="w-full max-w-[295px] sm:max-w-[315px] flex flex-col gap-5 sm:gap-6">
            
            {/* Nikah Venue Card */}
            <div className="bg-[#FAF5ED] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.025)] py-5 px-4 sm:py-6 sm:px-5 flex flex-col justify-center items-center text-center">
              {/* Organic 5-Petal Burgundy Flower Cluster Motif */}
              <div className="w-10 h-8 sm:w-11 sm:h-9 mx-auto mb-1.5 pointer-events-none">
                <svg viewBox="0 0 100 90" className="w-full h-full">
                  <ellipse cx="32" cy="24" rx="16" ry="9" transform="rotate(-52 32 24)" fill="#7A2436" opacity="0.9" />
                  <ellipse cx="45" cy="32" rx="14" ry="8" transform="rotate(35 45 32)" fill="#7A2436" opacity="0.9" />
                  <ellipse cx="36" cy="38" rx="13" ry="8.5" transform="rotate(10 36 38)" fill="#7A2436" opacity="0.9" />
                  
                  <circle cx="56" cy="56" r="6.5" fill="#5C1826" />
                  <ellipse cx="66" cy="58" rx="13" ry="7.5" transform="rotate(-35 66 58)" fill="#7A2436" opacity="0.9" />
                  <ellipse cx="61" cy="65" rx="11" ry="7" transform="rotate(25 61 65)" fill="#7A2436" opacity="0.9" />
                </svg>
              </div>

              {/* Uppercase Category Label */}
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#B8935A] mb-2 block">
                NIKAH CEREMONY
              </span>

              {/* Venue Name */}
              <h3 className="font-serif text-xl sm:text-[22px] text-[#2E2824] leading-snug mb-0.5 font-normal">
                Thavakkal convention centre
              </h3>

              {/* Location */}
              <p className="text-xs sm:text-[13px] font-sans text-stone-500 font-light mb-3.5">
                Othukkungal, Kerala
              </p>

              {/* Google Maps Button */}
              <a
                href="https://maps.google.com/?q=Thavakkal+convention+centre+Othukkungal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5C1826]/10 text-[#5C1826] text-[9px] sm:text-[10px] font-sans tracking-[0.18em] uppercase font-medium hover:bg-[#5C1826] hover:text-white transition-all duration-300"
              >
                <span>Open Google Maps</span>
                <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Reception Venue Card */}
            <div className="bg-[#FAF5ED] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.025)] py-5 px-4 sm:py-6 sm:px-5 flex flex-col justify-center items-center text-center">
              {/* Organic 5-Petal Burgundy Flower Cluster Motif */}
              <div className="w-10 h-8 sm:w-11 sm:h-9 mx-auto mb-1.5 pointer-events-none">
                <svg viewBox="0 0 100 90" className="w-full h-full">
                  <ellipse cx="32" cy="24" rx="16" ry="9" transform="rotate(-52 32 24)" fill="#7A2436" opacity="0.9" />
                  <ellipse cx="45" cy="32" rx="14" ry="8" transform="rotate(35 45 32)" fill="#7A2436" opacity="0.9" />
                  <ellipse cx="36" cy="38" rx="13" ry="8.5" transform="rotate(10 36 38)" fill="#7A2436" opacity="0.9" />
                  
                  <circle cx="56" cy="56" r="6.5" fill="#5C1826" />
                  <ellipse cx="66" cy="58" rx="13" ry="7.5" transform="rotate(-35 66 58)" fill="#7A2436" opacity="0.9" />
                  <ellipse cx="61" cy="65" rx="11" ry="7" transform="rotate(25 61 65)" fill="#7A2436" opacity="0.9" />
                </svg>
              </div>

              {/* Uppercase Category Label */}
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#B8935A] mb-2 block">
                WEDDING RECEPTION
              </span>

              {/* Venue Name */}
              <h3 className="font-serif text-xl sm:text-[22px] text-[#2E2824] leading-snug mb-0.5 font-normal">
                Ajwa convention centre
              </h3>

              {/* Location */}
              <p className="text-xs sm:text-[13px] font-sans text-stone-500 font-light mb-3.5">
                Padaparamba, Kerala
              </p>

              {/* Google Maps Button */}
              <a
                href="https://maps.google.com/?q=Ajwa+convention+centre+Padaparamba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5C1826]/10 text-[#5C1826] text-[9px] sm:text-[10px] font-sans tracking-[0.18em] uppercase font-medium hover:bg-[#5C1826] hover:text-white transition-all duration-300"
              >
                <span>Open Google Maps</span>
                <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </StaggerItem>

        {/* --- CLOSING LINE --- */}
        <StaggerItem className="mt-8 sm:mt-10">
          <div className="flex items-center gap-3 sm:gap-4 z-20">
            <div className="w-10 sm:w-16 h-[1px] bg-[#B8935A]/60" />
            <p className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-[#B8935A]">
              MALAPPURAM, KERALA
            </p>
            <div className="w-10 sm:w-16 h-[1px] bg-[#B8935A]/60" />
          </div>
        </StaggerItem>
      </StaggerGroup>
    </div>
  );
}

export { VenuesLocationCard };
