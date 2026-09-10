import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import { BurgundyButterfly } from './BurgundyButterfly';

export default function HeroInvitationCard() {
  return (
    <div className="relative w-full max-w-[440px] h-[90dvh] max-h-[740px] bg-[#FAF5ED] rounded-2xl shadow-xl flex flex-col justify-center items-center px-6 py-10 sm:px-8 sm:py-12 text-center overflow-hidden my-auto">

      {/* --- BURGUNDY BUTTERFLIES ANIMATION --- */}
      <BurgundyButterfly className="absolute top-8 right-8 sm:top-10 sm:right-12" size={48} />
      <BurgundyButterfly className="absolute bottom-12 left-8 sm:bottom-14 sm:left-10" size={34} />

      {/* --- MAIN CORNER FLOWERS --- */}
      {/* Top-Right Organic Petal Cluster */}
      <div className="absolute -top-1 -right-1 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-10 opacity-90">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="32" cy="24" rx="16" ry="9" transform="rotate(-52 32 24)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="45" cy="32" rx="14" ry="8" transform="rotate(35 45 32)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="36" cy="38" rx="13" ry="8.5" transform="rotate(10 36 38)" fill="#7A2436" opacity="0.9" />
          
          <circle cx="56" cy="56" r="6.5" fill="#5C1826" />
          <ellipse cx="66" cy="58" rx="13" ry="7.5" transform="rotate(-35 66 58)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="61" cy="65" rx="11" ry="7" transform="rotate(25 61 65)" fill="#7A2436" opacity="0.9" />
        </svg>
      </div>

      {/* Bottom-Left Organic Petal Cluster */}
      <div className="absolute -bottom-1 -left-1 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-10 opacity-90">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="35" cy="75" rx="16" ry="10" transform="rotate(-30 35 75)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="20" cy="60" rx="15" ry="9" transform="rotate(40 20 60)" fill="#7A2436" opacity="0.9" />
          <ellipse cx="50" cy="65" rx="13" ry="8" transform="rotate(15 50 65)" fill="#7A2436" opacity="0.9" />
          <circle cx="22" cy="38" r="6.5" fill="#5C1826" />
          <ellipse cx="14" cy="32" rx="10" ry="6" transform="rotate(-40 14 32)" fill="#7A2436" opacity="0.9" />
        </svg>
      </div>

      {/* --- SCATTERED PETALS --- */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <span className="absolute top-[14%] left-[28%] w-[5px] h-[5px] bg-[#7A2436]/30 rounded-[50%_0_50%_50%] rotate-45" />
        <span className="absolute top-[16%] right-[26%] w-[4px] h-[6px] bg-[#B8935A]/30 rounded-[50%_0_50%_50%] -rotate-25" />
        <span className="absolute top-[22%] left-[14%] w-[5px] h-[4px] bg-[#7A2436]/25 rounded-[50%_0_50%_50%] rotate-70" />
        <span className="absolute top-[25%] right-[16%] w-[5px] h-[5px] bg-[#7A2436]/30 rounded-[50%_0_50%_50%] -rotate-50" />

        <span className="absolute top-[42%] left-[10%] w-[5px] h-[6px] bg-[#7A2436]/30 rounded-[50%_0_50%_50%] rotate-30" />
        <span className="absolute top-[46%] right-[11%] w-[4px] h-[5px] bg-[#B8935A]/30 rounded-[50%_0_50%_50%] -rotate-15" />
        <span className="absolute top-[58%] left-[12%] w-[5px] h-[5px] bg-[#7A2436]/25 rounded-[50%_0_50%_50%] rotate-80" />
        <span className="absolute top-[60%] right-[12%] w-[5px] h-[5px] bg-[#7A2436]/30 rounded-[50%_0_50%_50%] -rotate-35" />

        <span className="absolute bottom-[22%] left-[20%] w-[4px] h-[6px] bg-[#B8935A]/30 rounded-[50%_0_50%_50%] rotate-15" />
        <span className="absolute bottom-[20%] right-[22%] w-[5px] h-[5px] bg-[#7A2436]/30 rounded-[50%_0_50%_50%] -rotate-60" />
        <span className="absolute bottom-[14%] left-[30%] w-[5px] h-[4px] bg-[#7A2436]/25 rounded-[50%_0_50%_50%] rotate-40" />
        <span className="absolute bottom-[13%] right-[32%] w-[4px] h-[5px] bg-[#B8935A]/30 rounded-[50%_0_50%_50%] -rotate-20" />
      </div>

      {/* Center Content Group with Staggered Cascading Reveal */}
      <StaggerGroup className="relative z-20 flex flex-col items-center w-full max-w-[340px] pt-4">
        
        {/* INVITATION label */}
        <StaggerItem>
          <span className="text-[12px] font-sans font-medium tracking-[3px] uppercase text-[#B8935A] mb-[12px] block">
            INVITATION
          </span>
        </StaggerItem>

        {/* TOGETHER WITH THEIR FAMILIES */}
        <StaggerItem>
          <p className="text-[10px] font-sans font-normal tracking-[2px] uppercase text-[#73685F] mb-[20px]">
            {WEDDING_DATA.couple.invitationSubtitle}
          </p>
        </StaggerItem>

        {/* Couple Names Block */}
        <StaggerItem>
          <div className="flex flex-col items-center mb-[20px]">
            <h1 className="font-serif italic text-[32px] sm:text-[34px] text-[#7A2436] leading-none font-normal">
              {WEDDING_DATA.couple.fullName1}
            </h1>
            <span className="font-serif italic text-[15px] text-[#73685F] my-[6px]">
              and
            </span>
            <h1 className="font-serif italic text-[32px] sm:text-[34px] text-[#7A2436] leading-none font-normal">
              {WEDDING_DATA.couple.fullName2}
            </h1>
          </div>
        </StaggerItem>

        {/* REQUEST THE HONOUR */}
        <StaggerItem>
          <p className="text-[10px] font-sans font-normal tracking-[1px] uppercase text-[#73685F] max-w-[260px] leading-[1.65] mb-[12px] no-underline">
            {WEDDING_DATA.couple.invitationRequest}
          </p>
        </StaggerItem>

        {/* Date & Venue Line */}
        <StaggerItem className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-[1px] bg-[#B8935A]/60 mx-auto mb-[12px]" />

          <p className="font-sans font-medium text-[14px] tracking-[1px] text-[#5C1826] uppercase mb-[8px]">
            {WEDDING_DATA.couple.weddingDate}
          </p>

          <span className="text-[10px] font-sans font-normal tracking-[2px] uppercase text-[#73685F] mb-[4px] block">
            VENUE
          </span>

          <p className="font-serif text-[14px] text-[#2E2824] leading-snug">
            {WEDDING_DATA.couple.heroVenue}
          </p>
        </StaggerItem>
      </StaggerGroup>
    </div>
  );
}

export { HeroInvitationCard };
