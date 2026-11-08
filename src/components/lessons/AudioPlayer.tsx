'use client';

import React, { useState, useEffect } from 'react';
import { speechService } from '@/lib/speech';
import { Volume2, VolumeX, Square } from 'lucide-react';

interface AudioPlayerProps {
  text: string;
  label?: string;
  slowRate?: boolean;
}

const SPEED_OPTIONS = [0.75, 0.9, 1.0] as const;

export function AudioPlayer({ text, label = 'ฟังเสียงอ่าน', slowRate = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState<number>(slowRate ? 0.75 : 0.9);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(speechService.isSupported());
  }, []);

  const handlePlay = () => {
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
      return;
    }

    speechService.speak(text, {
      rate,
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const cycleRate = () => {
    const currentIndex = SPEED_OPTIONS.findIndex((r) => Math.abs(r - rate) < 0.05);
    const nextRate = SPEED_OPTIONS[(currentIndex + 1) % SPEED_OPTIONS.length];
    setRate(nextRate);
    if (isPlaying) {
      speechService.speak(text, {
        rate: nextRate,
        onStart: () => setIsPlaying(true),
        onEnd: () => setIsPlaying(false),
        onError: () => setIsPlaying(false),
      });
    }
  };

  if (!supported) {
    return (
      <div className="text-sm text-muted-foreground flex items-center gap-1.5 py-1">
        <VolumeX className="w-4 h-4" />
        <span>เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง</span>
      </div>
    );
  }

  const rateLabel =
    rate <= 0.76 ? 'ช้า 0.75x' : rate <= 0.92 ? 'กลาง 0.9x' : 'ปกติ 1.0x';

  return (
    <div className="inline-flex items-center gap-2 bg-[#F4F0FF] border border-[#E8E0FF] px-3.5 py-1.5 rounded-full text-xs sm:text-sm">
      <button
        type="button"
        onClick={handlePlay}
        className="flex items-center gap-1.5 font-extrabold text-[#6C4CF1] hover:text-[#4B2FC9] transition-colors"
        aria-label={isPlaying ? 'หยุดเล่นเสียง' : label || 'ฟังเสียง'}
      >
        {isPlaying ? (
          <>
            <Square className="w-3.5 h-3.5 fill-current text-[#FF7AA8]" />
            <span className="text-[#FF7AA8]">หยุด</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-[#6C4CF1]" />
            {label && <span>{label}</span>}
          </>
        )}
      </button>

      <span className="w-px h-3.5 bg-[#D8CEF8]" />

      {/* Speed Rate Cycle (0.75x -> 0.9x -> 1.0x) */}
      <button
        type="button"
        onClick={cycleRate}
        className="text-[11px] font-bold text-[#6E6690] hover:text-[#2A1F4A] transition-colors px-1 whitespace-nowrap"
        title="สลับความเร็วเสียง (ช้า 0.75x / กลาง 0.9x / ปกติ 1.0x)"
        aria-label={`ความเร็วเสียง: ${rateLabel}`}
      >
        {rateLabel}
      </button>
    </div>
  );
}
