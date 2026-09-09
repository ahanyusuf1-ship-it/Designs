import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { StaggerGroup, StaggerItem } from './StaggerGroup';

export default function CountdownCard() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(WEDDING_DATA.couple.targetDateIso).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
      minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[440px] h-[90dvh] max-h-[740px] bg-[#FAF5ED] rounded-2xl shadow-xl flex flex-col justify-between items-center px-6 py-10 sm:px-8 sm:py-12 text-center overflow-hidden my-auto">

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

      <StaggerGroup className="w-full flex flex-col justify-center items-center relative z-20 py-4 gap-6 sm:gap-7 my-auto">
        
        {/* --- TOP FOOTER HEADER GROUP (Moved down) --- */}
        <StaggerItem className="w-full flex flex-col items-center">
          {/* Organic 5-Petal Burgundy Flower Cluster Motif */}
          <div className="w-10 h-8 sm:w-11 sm:h-9 mx-auto mb-2 pointer-events-none">
            <svg viewBox="0 0 100 90" className="w-full h-full">
              <ellipse cx="32" cy="24" rx="16" ry="9" transform="rotate(-52 32 24)" fill="#7A2436" opacity="0.9" />
              <ellipse cx="45" cy="32" rx="14" ry="8" transform="rotate(35 45 32)" fill="#7A2436" opacity="0.9" />
              <ellipse cx="36" cy="38" rx="13" ry="8.5" transform="rotate(10 36 38)" fill="#7A2436" opacity="0.9" />
              
              <circle cx="56" cy="56" r="6.5" fill="#5C1826" />
              <ellipse cx="66" cy="58" rx="13" ry="7.5" transform="rotate(-35 66 58)" fill="#7A2436" opacity="0.9" />
              <ellipse cx="61" cy="65" rx="11" ry="7" transform="rotate(25 61 65)" fill="#7A2436" opacity="0.9" />
            </svg>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#73685F] mb-0.5">
            With love,
          </p>
          <h2 className="font-serif italic text-3xl sm:text-[34px] text-[#7A2436] font-normal leading-tight mb-2.5">
            Ramees &amp; Shameena
          </h2>

          {/* Gold Hairline Divider */}
          <div className="w-14 sm:w-16 h-[1px] bg-[#B8935A]/60 mx-auto" />
        </StaggerItem>

        {/* --- CENTER SIMPLE COUNTDOWN --- */}
        <StaggerItem className="w-full flex flex-col items-center">
          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#2E2824] font-normal mb-4 sm:mb-5">
            Until our special day
          </h3>

          {/* Counter Grid Row */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 w-full max-w-[330px] mb-4 sm:mb-5">
            {/* Days */}
            <div className="flex flex-col items-center min-w-[48px] sm:min-w-[56px]">
              <span className="font-serif text-3xl sm:text-4xl text-[#5C1826] font-normal tracking-tight">
                {timeLeft.days}
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#B8935A] mt-1">
                DAYS
              </span>
            </div>

            <span className="font-serif text-xl sm:text-2xl text-[#B8935A] -mt-4.5">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center min-w-[48px] sm:min-w-[56px]">
              <span className="font-serif text-3xl sm:text-4xl text-[#5C1826] font-normal tracking-tight">
                {timeLeft.hours}
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#B8935A] mt-1">
                HOURS
              </span>
            </div>

            <span className="font-serif text-xl sm:text-2xl text-[#B8935A] -mt-4.5">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center min-w-[48px] sm:min-w-[56px]">
              <span className="font-serif text-3xl sm:text-4xl text-[#5C1826] font-normal tracking-tight">
                {timeLeft.minutes}
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#B8935A] mt-1">
                MINUTES
              </span>
            </div>

            <span className="font-serif text-xl sm:text-2xl text-[#B8935A] -mt-4.5">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center min-w-[48px] sm:min-w-[56px]">
              <span className="font-serif text-3xl sm:text-4xl text-[#5C1826] font-normal tracking-tight">
                {timeLeft.seconds}
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#B8935A] mt-1">
                SECONDS
              </span>
            </div>
          </div>

          {/* Hashtag */}
          <p className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-[#B8935A]">
            {WEDDING_DATA.couple.hashtag}
          </p>
        </StaggerItem>

        {/* --- BOTTOM FOOTER LINE (Moved up closer to countdown) --- */}
        <StaggerItem className="w-full flex flex-col items-center">
          <p className="font-serif italic text-xs sm:text-sm text-[#73685F] text-center">
            Made with love for our wedding day
          </p>
        </StaggerItem>

      </StaggerGroup>
    </div>
  );
}

export { CountdownCard };
