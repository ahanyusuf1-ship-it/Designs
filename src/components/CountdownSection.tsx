import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../config/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(WEDDING_DATA.couple.targetDateIso) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', val: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', val: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MIN', val: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SEC', val: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="w-full bg-[#fbf7f0] rounded-2xl border border-[#4A1525]/15 p-5 text-center shadow-sm">
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#4A1525]/80 block mb-4">
        Counting Down to Our Day
      </span>
      <div className="grid grid-cols-4 gap-2">
        {timeUnits.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center p-2.5 rounded-xl bg-[#f5efeb]/80 border border-stone-200/60 shadow-xs"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold text-[#4A1525]">
              {item.val}
            </span>
            <span className="text-[9px] tracking-wider text-stone-500 mt-0.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
