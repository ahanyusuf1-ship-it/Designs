import React from 'react';
import { StaggerGroup, StaggerItem } from './StaggerGroup';

interface QuranVerseCardProps {
  id?: string;
  arabicLines?: string[];
  english?: string;
  reference?: string;
  headerLabel?: string;
}

export default function QuranVerseCard({
  id = 'card-verse-1',
  arabicLines = [
    'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا',
    'قُرَّةَ أَعْيُنٍ',
  ],
  english = '“Our Lord, grant us from among our spouses and offspring comfort to our eyes.”',
  reference = 'Quran 25:74',
  headerLabel = 'Bismillah',
}: QuranVerseCardProps) {
  return (
    <div
      id={id}
      className="relative w-full max-w-[440px] h-[90dvh] max-h-[740px] bg-[#FAF5ED] rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 sm:p-8 text-center overflow-hidden my-auto"
    >

      {/* Floral Corners */}
      <div className="absolute -top-3 -right-3 w-24 h-24 pointer-events-none z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#5c1c28] opacity-90">
          <ellipse cx="65" cy="25" rx="16" ry="10" transform="rotate(-25 65 25)" />
          <ellipse cx="80" cy="40" rx="15" ry="9" transform="rotate(45 80 40)" />
          <ellipse cx="50" cy="35" rx="13" ry="8" transform="rotate(10 50 35)" />
          <circle cx="78" cy="62" r="7" className="fill-[#3b1219]" />
        </svg>
      </div>
      <div className="absolute -bottom-3 -left-3 w-24 h-24 pointer-events-none z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#5c1c28] opacity-90">
          <ellipse cx="35" cy="75" rx="16" ry="10" transform="rotate(-30 35 75)" />
          <ellipse cx="20" cy="60" rx="15" ry="9" transform="rotate(40 20 60)" />
          <ellipse cx="50" cy="65" rx="13" ry="8" transform="rotate(15 50 65)" />
          <circle cx="22" cy="38" r="7" className="fill-[#3b1219]" />
        </svg>
      </div>

      {/* Scattered Petals */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-[22%] left-[45%] w-2 h-3.5 bg-[#b58b8b] rounded-full rotate-45 opacity-50" />
        <span className="absolute top-[35%] right-[18%] w-2 h-3 bg-[#d4b996] rounded-full -rotate-12 opacity-60" />
        <span className="absolute bottom-[30%] right-[26%] w-2 h-3 bg-[#d4b996] rounded-full rotate-30 opacity-60" />
        <span className="absolute bottom-[20%] left-[28%] w-2.5 h-1.5 bg-[#c79b9b] rounded-full -rotate-25 opacity-55" />
      </div>

      {/* Tight Centered Typographic Cluster */}
      <StaggerGroup className="relative z-20 flex flex-col items-center max-w-[340px] px-2">
        {/* Eyebrow Header: Close above Arabic verse */}
        <StaggerItem>
          <span className="text-[11px] font-sans font-semibold tracking-[0.35em] uppercase text-[#A78A58] mb-6 block">
            {headerLabel}
          </span>
        </StaggerItem>

        {/* Arabic Calligraphy */}
        <StaggerItem>
          {arabicLines.map((line, index) => (
            <p
              key={index}
              dir="rtl"
              lang="ar"
              className={`font-serif text-2xl sm:text-[30px] text-[#5c1c28] leading-[1.8] sm:leading-[1.9] tracking-wide ${
                index === arabicLines.length - 1 ? 'mb-4' : ''
              }`}
            >
              {line}
            </p>
          ))}
        </StaggerItem>

        {/* Translation & Citation */}
        <StaggerItem className="flex flex-col items-center">
          <div className="w-14 h-[1px] bg-[#A78A58]/60 my-2" />
          <p className="font-serif italic text-sm sm:text-base text-[#73685F] leading-relaxed mb-6 mt-1">
            {english}
          </p>
          <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#A78A58]">
            {reference}
          </span>
        </StaggerItem>
      </StaggerGroup>
    </div>
  );
}

export { QuranVerseCard };
