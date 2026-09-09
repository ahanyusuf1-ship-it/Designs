import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

interface AudioPlayerProps {
  shouldPlay: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio autoplay blocked or interrupted:", err);
      });
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={WEDDING_DATA.audio.fallbackAudioUrl}
        loop
        preload="auto"
      />

      {/* Floating Audio Control Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {isPlaying && !isMuted && (
          <div className="hidden sm:flex items-center gap-1.5 bg-[#FAF5ED]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs text-[#2E2824]">
            <Music size={12} className="text-[#B8935A] animate-spin" style={{ animationDuration: '6s' }} />
            <div className="flex items-end gap-[2px] h-3 px-1">
              <div className="eq-bar" />
              <div className="eq-bar" />
              <div className="eq-bar" />
              <div className="eq-bar" />
            </div>
            <span className="spaced-caps text-[10px] text-[#73685F]">MUSIC</span>
          </div>
        )}

        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className="w-12 h-12 rounded-full bg-[#5C1826] text-[#B8935A] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          {isPlaying && !isMuted ? (
            <Volume2 size={20} className="group-hover:text-white" />
          ) : (
            <VolumeX size={20} className="opacity-80 group-hover:opacity-100" />
          )}
        </button>
      </div>
    </>
  );
};
