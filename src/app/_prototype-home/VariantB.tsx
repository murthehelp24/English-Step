'use client';
// PROTOTYPE — Variant B "Sunny Path": playful, encouraging, game-like.
// Structure: the week is a winding path of round stops (primary affordance = tap
// the glowing stop). Progress ring + missions on the sides. Mobile gets a
// bottom tab bar instead of a top nav.
import Link from 'next/link';
import { speechService } from '@/lib/speech';
import { HomeVariantProps, lessonParts } from './types';

const c = {
  bg: '#FFF9EE',
  ink: '#2A1F4A',
  soft: '#6E6690',
  violet: '#6C4CF1',
  violetDark: '#4B2FC9',
  lime: '#C8F04A',
  pink: '#FF7AA8',
  sky: '#7CC8FF',
  card: '#FFFFFF',
  line: '#EEE6D6',
};

const chunky = (bg: string, shadow: string) => ({ background: bg, boxShadow: `0 5px 0 ${shadow}` });

export function VariantB(p: HomeVariantProps) {
  const { lesson } = p;
  const parts = lessonParts(lesson.minutes);
  const pct = p.completedCount / p.totalDays;
  const R = 52;
  const C = 2 * Math.PI * R;
  const offsets = [0, 70, 100, 70, 0, -70, -100]; // zig-zag x-offsets (px)

  return (
    <div style={{ background: c.bg, color: c.ink, fontFamily: "Mali, 'Nunito', sans-serif" }} className="min-h-screen pb-28">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mali:wght@400;500;600;700&family=Nunito:wght@600;800;900&display=swap" />

      <header className="max-w-[1180px] mx-auto px-5 pt-5 flex items-center justify-between">
        <span className="text-2xl font-[900]" style={{ fontFamily: 'Nunito, sans-serif', color: c.violet }}>
          English<span style={{ color: c.pink }}>Steps</span> 🐾
        </span>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="px-3 py-1.5 rounded-full" style={{ background: '#FFE7C2' }}>🔥 3 วันติด</span>
          <span className="px-3 py-1.5 rounded-full hidden sm:inline" style={{ background: '#E6F9C4' }}>⭐ {p.completedCount * 10} XP</span>
        </div>
      </header>

      <main className="max-w-[1180px] mx-auto px-5 mt-6 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 items-start">
        {/* Left: friendly progress */}
        <aside className="rounded-[28px] p-6 text-center" style={{ background: c.card, border: `2px solid ${c.line}` }}>
          <p className="font-semibold" style={{ color: c.soft }}>สวัสดี! วันนี้ไปต่อกัน 👋</p>
          <svg viewBox="0 0 130 130" className="w-40 h-40 mx-auto my-3 -rotate-90">
            <circle cx="65" cy="65" r={R} fill="none" stroke="#F1ECFF" strokeWidth="14" />
            <circle cx="65" cy="65" r={R} fill="none" stroke={c.violet} strokeWidth="14" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={C * (1 - Math.max(pct, 0.02))} />
          </svg>
          <div className="-mt-[118px] mb-[62px]">
            <div className="text-3xl font-[900]" style={{ fontFamily: 'Nunito, sans-serif' }}>{lesson.day}</div>
            <div className="text-xs" style={{ color: c.soft }}>จาก {p.totalDays} วัน</div>
          </div>
          <div className="rounded-2xl p-4 text-left" style={{ background: '#F4F0FF' }}>
            <div className="text-xs font-semibold" style={{ color: c.violet }}>ประโยคเด็ดวันนี้</div>
            <div className="text-lg font-bold mt-1" style={{ fontFamily: 'Nunito, sans-serif' }}>{lesson.headlineEnglish}</div>
            <div className="text-sm" style={{ color: c.soft }}>{lesson.headlineThai}</div>
            <button onClick={() => speechService.speak(lesson.headlineEnglish)}
              className="mt-3 w-full py-2 rounded-xl font-bold text-white active:translate-y-[3px] transition-transform"
              style={chunky(c.sky, '#4E9ED6')}>🔊 ฟังเลย</button>
          </div>
        </aside>

        {/* Center: the path */}
        <section className="rounded-[28px] px-6 py-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#EFE9FF 0%,#FFF3E0 100%)' }}>
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold" style={{ background: c.lime }}>
              สัปดาห์ {lesson.week} · {lesson.cefr_level}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold mt-3 leading-snug">{lesson.week_title}</h1>
          </div>

          <ol className="mt-16 flex flex-col items-center gap-5">
            {p.weekLessons.map((l, i) => {
              const done = p.completedIds.has(l.id);
              const now = l.day === p.currentDay;
              const locked = !done && !now && l.day > p.currentDay;
              return (
                <li key={l.id} className="relative flex flex-col items-center" style={{ transform: `translateX(${offsets[i % 7]}px)` }}>
                  {now && (
                    <span className="absolute -top-11 whitespace-nowrap px-3 py-1.5 rounded-xl text-sm font-bold text-white animate-bounce"
                      style={{ background: c.ink }}>เริ่มตรงนี้!</span>
                  )}
                  <Link
                    href={`/lessons/${l.id}`}
                    title={l.title}
                    className={`w-[74px] h-[74px] rounded-full grid place-items-center text-2xl font-[900] active:translate-y-[4px] transition-transform ${now ? 'ring-[6px] ring-white' : ''}`}
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      ...(now ? chunky(c.violet, c.violetDark) : done ? chunky(c.lime, '#9CC52A') : chunky('#E4DFEE', '#C9C2D8')),
                      color: now ? '#fff' : locked ? '#A79FBF' : c.ink,
                    }}
                  >
                    {done ? '✓' : l.day}
                  </Link>
                  <span className="mt-2 text-xs font-semibold max-w-[140px] text-center line-clamp-2" style={{ color: now ? c.ink : c.soft }}>
                    {l.title}
                  </span>
                </li>
              );
            })}
          </ol>

          <Link href={`/lessons/${lesson.id}`}
            className="mt-10 block w-full max-w-[360px] mx-auto text-center py-4 rounded-2xl text-lg font-bold text-white active:translate-y-[4px] transition-transform"
            style={chunky(c.violet, c.violetDark)}>
            ไปเรียนวันที่ {lesson.day} กันเลย 🚀
          </Link>
        </section>

        {/* Right: missions + review */}
        <aside className="space-y-5">
          <div className="rounded-[28px] p-6" style={{ background: c.card, border: `2px solid ${c.line}` }}>
            <h2 className="font-bold text-lg">ภารกิจวันนี้ 🎯</h2>
            <p className="text-sm mb-3" style={{ color: c.soft }}>{lesson.title}</p>
            <ul className="space-y-2.5">
              {parts.map((part, i) => (
                <li key={part.key} className="flex items-center gap-3 p-3 rounded-2xl" style={{ background: ['#FFF1F6', '#EEF8FF', '#F4F0FF', '#F3FBE3'][i] }}>
                  <span className="text-xl">{['👂', '🧩', '✏️', '🎤'][i]}</span>
                  <span className="flex-1 text-sm font-semibold">{part.th}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white">{part.min}′</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/review" className="block rounded-[28px] p-6 hover:-translate-y-0.5 transition-transform" style={{ background: '#FFE4EE' }}>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">แก้จุดพลาด 💪</h2>
              <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{ background: c.pink }}>
                {p.dueCount || p.totalReviewCount || 0}
              </span>
            </div>
            <div className="mt-3 rounded-2xl bg-white p-3 text-sm">
              <div className="line-through" style={{ color: '#C24A6E' }}>{p.reviewSample.original}</div>
              <div className="font-bold" style={{ color: '#3E8A1E' }}>✓ {p.reviewSample.correct}</div>
            </div>
          </Link>
        </aside>
      </main>

      {/* Mobile bottom tab bar */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-4 text-center text-[11px] font-semibold pt-2 pb-16"
        style={{ background: c.card, borderTop: `2px solid ${c.line}` }}>
        {[['🏠', 'วันนี้', '/'], ['🗺️', 'บทเรียน', '/weeks'], ['🔁', 'ทบทวน', '/review'], ['📈', 'พัฒนาการ', '/progress']].map(([i, t, h]) => (
          <Link key={h} href={h} style={{ color: h === '/' ? c.violet : c.soft }}><div className="text-xl">{i}</div>{t}</Link>
        ))}
      </nav>
      <nav className="hidden lg:flex justify-center gap-3 mt-8 text-sm font-semibold">
        {[['🗺️ บทเรียนทั้งหมด', '/weeks'], ['📚 คำศัพท์', '/vocabulary'], ['📈 พัฒนาการ', '/progress'], ['⚙️ ตั้งค่า', '/settings']].map(([t, h]) => (
          <Link key={h} href={h} className="px-4 py-2 rounded-full bg-white" style={{ border: `2px solid ${c.line}` }}>{t}</Link>
        ))}
      </nav>
    </div>
  );
}
