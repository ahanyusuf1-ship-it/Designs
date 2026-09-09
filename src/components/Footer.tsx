import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText(WEDDING_DATA.couple.hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer className="w-full pt-10 pb-16 px-4 text-center flex flex-col items-center gap-3 bg-[#FBF7F0] border-t border-[#4A1525]/15 mt-auto">
      {/* Floral Accent */}
      <div className="flex items-center justify-center gap-2 text-[#4A1525] text-xs opacity-70">
        <span>✿</span>
        <span>✿</span>
        <span>✿</span>
      </div>

      <p className="font-serif italic text-xs text-stone-500">With love,</p>
      <h2 className="font-serif text-2xl text-[#4A1525]">
        {WEDDING_DATA.couple.name1} &amp; {WEDDING_DATA.couple.name2}
      </h2>

      <button
        onClick={handleCopyHashtag}
        className="mt-2 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#4A1525]/30 text-[10px] tracking-widest uppercase text-[#4A1525] hover:bg-[#4A1525]/5 transition-colors"
      >
        <span>{WEDDING_DATA.couple.hashtag}</span>
        {copied ? (
          <Check size={12} className="text-emerald-700" />
        ) : (
          <Copy size={11} className="opacity-70" />
        )}
      </button>

      <p className="text-[11px] text-stone-400 mt-1">
        Made with love for our wedding day
      </p>
    </footer>
  );
};
