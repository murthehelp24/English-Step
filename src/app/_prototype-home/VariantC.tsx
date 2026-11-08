'use client';
// PROTOTYPE — Variant C "Focus Studio": calm-professional, task-oriented.
// Structure: persistent dark sidebar nav (always one tap to anywhere) + main
// column that is a *checklist* of today's 4 sessions, each startable on its own
// (primary affordance = "continue next session"), with a review queue rail.
import Link from 'next/link';
import { speechService } from '@/lib/speech';
import { HomeVariantProps, lessonParts } from './types';

const c = {
  side: '#0E1B24',
  sideSoft: '#8AA0AD',
  bg: '#F3F6F7',
  card: '#FFFFFF',
  ink: '#0E1B24',
  soft: '#5B6B75',
  line: '#E1E7EA',
  teal: '#0F9B8E',
  tealSoft: '#E0F4F1',
  amber: '#E59A1A',
  amberSoft: '#FDF1DC',
};

const nav = [
  ['วันนี้', '/', '◉'],
  ['บทเรียน 36 สัปดาห์', '/weeks', '▦'],
  ['ทบทวน', '/review', '↻'],
  ['คำศัพท์ & Chunks', '/vocabulary', '◇'],
  ['พัฒนาการ', '/progress', '▤'],
  ['ตั้งค่า', '/settings', '⚙'],
];

export function VariantC(p: HomeVariantProps) {
  const { lesson } = p;
  const parts = lessonParts(lesson.minutes);
  const pct = Math.round((p.completedCount / p.totalDays) * 100);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[248px_minmax(0,1fr)]" style={{ background: c.bg, color: c.ink, fontFamily: "Anuphan, 'Inter', sans-serif" }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600;700&family=Inter:wght@500;600;700&display=swap" />

      {/* Sidebar */}
      <aside className="lg:sticky lg:top-0 lg:h-screen flex lg:flex-col gap-1 p-3 lg:p-5 overflow-x-auto" style={{ background: c.side, color: '#fff' }}>
        <div className="hidden lg:block px-2 pb-6">
          <div className="font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>English Steps</div>
          <div className="text-xs" style={{ color: c.sideSoft }}>252 วัน · Pre-A1 → B2</div>
        </div>
        {nav.map(([t, h, i]) => {
          const active = h === '/';
          return (
            <Link key={h} href={h} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm whitespace-nowrap"
              style={{ background: active ? 'rgba(255,255,255,.1)' : undefined, color: active ? '#fff' : c.sideSoft }}>
              <span className="w-4 text-center">{i}</span>{t}
              {h === '/review' && p.dueCount > 0 && (
                <span className="ml-auto text-[11px] px-1.5 rounded" style={{ background: c.amber, color: c.side }}>{p.dueCount}</span>
              )}
            </Link>
          );
        })}
        <div className="hidden lg:block mt-auto px-2">
          <div className="flex justify-between text-xs mb-2" style={{ color: c.sideSoft }}>
            <span>ความคืบหน้าทั้งหลักสูตร</span><span>{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,.12)' }}>
            <div className="h-full rounded-full" style={{ width: `${Math.max(pct, 2)}%`, background: c.teal }} />
          </div>
        </div>
      </aside>

      <main className="p-5 sm:p-8 lg:p-10 pb-28 max-w-[1200px] w-full">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm" style={{ color: c.soft }}>วันที่ {lesson.day} / {p.totalDays} · สัปดาห์ {lesson.week} · Phase {lesson.phase} · {lesson.cefr_level}</p>
            <h1 className="text-2xl sm:text-[30px] font-bold leading-tight mt-1">{lesson.title}</h1>
          </div>
          <Link href={`/lessons/${lesson.id}`} className="px-5 py-3 rounded-lg text-sm font-semibold text-white hover:brightness-110" style={{ background: c.teal }}>
            ทำต่อ: {parts[0].th} →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6">
          <div className="space-y-6">
            {/* Key sentence strip */}
            <div className="flex items-center gap-4 rounded-xl p-5" style={{ background: c.card, border: `1px solid ${c.line}` }}>
              <button onClick={() => speechService.speak(lesson.headlineEnglish)} aria-label="ฟังเสียง"
                className="w-11 h-11 shrink-0 rounded-full grid place-items-center text-white" style={{ background: c.ink }}>▶</button>
              <div className="min-w-0">
                <div className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{lesson.headlineEnglish}</div>
                <div className="text-sm" style={{ color: c.soft }}>{lesson.headlineThai}</div>
              </div>
            </div>

            {/* Today's checklist */}
            <section className="rounded-xl overflow-hidden" style={{ background: c.card, border: `1px solid ${c.line}` }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `1px solid ${c.line}` }}>
                <h2 className="font-semibold">แผนวันนี้</h2>
                <span className="text-sm" style={{ color: c.soft }}>0 / {parts.length} เสร็จ · ~{lesson.minutes} นาที</span>
              </div>
              <ul>
                {parts.map((part, i) => (
                  <li key={part.key} className="flex items-center gap-4 px-5 py-4" style={{ borderTop: i ? `1px solid ${c.line}` : undefined, background: i === 0 ? c.tealSoft : undefined }}>
                    <span className="w-6 h-6 rounded-md shrink-0" style={{ border: `2px solid ${i === 0 ? c.teal : c.line}` }} />
                    <div className="flex-1">
                      <div className="font-medium">{part.th}</div>
                      <div className="text-xs" style={{ color: c.soft }}>{part.en} · {part.min} นาที</div>
                    </div>
                    <Link href={`/lessons/${lesson.id}`} className="text-sm font-semibold px-3 py-1.5 rounded-md"
                      style={i === 0 ? { background: c.teal, color: '#fff' } : { color: c.teal, border: `1px solid ${c.line}` }}>
                      {i === 0 ? 'เริ่ม' : 'เปิด'}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Week table */}
            <section className="rounded-xl" style={{ background: c.card, border: `1px solid ${c.line}` }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `1px solid ${c.line}` }}>
                <h2 className="font-semibold">สัปดาห์ {lesson.week}: {lesson.week_title}</h2>
                <Link href="/weeks" className="text-sm" style={{ color: c.teal }}>ทั้งหมด →</Link>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {p.weekLessons.map((l) => {
                    const done = p.completedIds.has(l.id);
                    const now = l.day === p.currentDay;
                    return (
                      <tr key={l.id} style={{ borderTop: `1px solid ${c.line}` }}>
                        <td className="pl-5 py-3 w-20" style={{ color: c.soft }}>วัน {l.day}</td>
                        <td className="py-3"><Link href={`/lessons/${l.id}`} className="hover:underline">{l.title}</Link></td>
                        <td className="pr-5 py-3 text-right whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded"
                            style={now ? { background: c.tealSoft, color: c.teal } : done ? { background: '#E8F5E9', color: '#2E7D32' } : { color: c.soft }}>
                            {now ? 'วันนี้' : done ? 'เสร็จ' : `${l.minutes} นาที`}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </div>

          {/* Right rail: review queue */}
          <aside className="space-y-6">
            <section className="rounded-xl p-5" style={{ background: c.amberSoft }}>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9A6200' }}>คิวทบทวน</div>
              <div className="text-4xl font-bold mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{p.dueCount}</div>
              <div className="text-sm" style={{ color: c.soft }}>ข้อถึงรอบวันนี้ · บันทึกไว้ทั้งหมด {p.totalReviewCount}</div>
              <div className="mt-4 rounded-lg bg-white p-3 text-sm">
                <div className="line-through" style={{ color: '#B3401E' }}>{p.reviewSample.original}</div>
                <div className="font-semibold" style={{ color: '#2E7D32' }}>{p.reviewSample.correct}</div>
              </div>
              <Link href="/review" className="mt-4 block text-center py-2.5 rounded-lg text-sm font-semibold" style={{ background: c.ink, color: '#fff' }}>
                เริ่มทบทวน
              </Link>
            </section>
            <section className="rounded-xl p-5" style={{ background: c.card, border: `1px solid ${c.line}` }}>
              <div className="text-sm font-semibold">รอบทบทวน</div>
              <div className="mt-3 flex gap-2 text-xs">
                {[1, 3, 7, 14, 30].map((d) => (
                  <span key={d} className="flex-1 text-center py-2 rounded-md" style={{ background: c.bg }}>{d} วัน</span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
