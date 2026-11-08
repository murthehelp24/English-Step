'use client';
// PROTOTYPE — throwaway floating variant switcher. Hidden in production builds.
import { useEffect } from 'react';

interface Props {
  variants: { key: string; name: string }[];
  current: string | null;
  onChange: (key: string | null) => void;
}

export function PrototypeSwitcher({ variants, current, onChange }: Props) {
  // Cycle includes "—" (current production page) so it's easy to compare.
  const keys: (string | null)[] = [null, ...variants.map((v) => v.key)];
  const idx = Math.max(0, keys.indexOf(current));
  const go = (step: number) => onChange(keys[(idx + step + keys.length) % keys.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (process.env.NODE_ENV === 'production') return null;

  const label = current ? `${current} · ${variants.find((v) => v.key === current)?.name}` : 'เดิม · หน้าปัจจุบัน';

  return (
    <div
      style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 rounded-full bg-black/90 text-white px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,.35)] ring-1 ring-white/20 text-sm"
    >
      <button onClick={() => go(-1)} className="w-8 h-8 rounded-full hover:bg-white/15" aria-label="แบบก่อนหน้า">←</button>
      <span className="px-2 sm:min-w-[190px] text-center font-semibold whitespace-nowrap text-xs sm:text-sm">
        <span className="opacity-60 mr-1 hidden sm:inline">PROTOTYPE</span>
        {label}
      </span>
      <button onClick={() => go(1)} className="w-8 h-8 rounded-full hover:bg-white/15" aria-label="แบบถัดไป">→</button>
    </div>
  );
}
