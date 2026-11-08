'use client';
// PROTOTYPE — Variant A "Paper & Ink": calm, editorial, one thing at a time.
// Structure: centred single column → today's sentence is the hero → 4 steps as a
// numbered list → week as a vertical timeline. Review is a quiet one-line notice.
import Link from 'next/link';
import { speechService } from '@/lib/speech';
import { HomeVariantProps, lessonParts } from './types';

const c = {
  paper: '#F5F0E6',
  card: '#FBF8F2',
  ink: '#1E2B25',
  soft: '#5E6B63',
  line: '#DDD5C5',
  accent: '#B6502C',
  green: '#2F6B4F',
};

export function VariantA(p: HomeVariantProps) {
  const { lesson } = p;
  const parts = lessonParts(lesson.minutes);
  const pct = Math.round((p.completedCount / p.totalDays) * 100);

  return (
    <div style={{ background: c.paper, color: c.ink, fontFamily: "'Noto Serif Thai', 'Fraunces', serif" }} className="min-h-screen">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Noto+Serif+Thai:wght@400;500;700&family=Anuphan:wght@400;500;600&display=swap"
      />
      {/* Top bar: minimal */}
      <header className="max-w-[760px] mx-auto px-6 pt-7 pb-4 flex items-center justify-between" style={{ fontFamily: 'Anuphan, sans-serif' }}>
        <span style={{ fontFamily: 'Fraunces, serif' }} className="text-xl font-semibold tracking-tight">
          English <em style={{ color: c.accent }}>Steps</em>
        </span>
        <nav className="flex gap-5 text-[15px]" style={{ color: c.soft }}>
          <Link href="/weeks" className="hover:underline">บทเรียน</Link>
          <Link href="/review" className="hover:underline">
            ทบทวน{p.dueCount > 0 && <span style={{ color: c.accent }}> · {p.dueCount}</span>}
          </Link>
          <Link href="/vocabulary" className="hover:underline hidden sm:inline">คำศัพท์</Link>
          <Link href="/progress" className="hover:underline hidden sm:inline">พัฒนาการ</Link>
        </nav>
      </header>

      <main className="max-w-[760px] mx-auto px-6 pb-32">
        {/* Progress as a thin rule */}
        <div className="flex items-center gap-3 text-[13px] mt-4" style={{ fontFamily: 'Anuphan, sans-serif', color: c.soft }}>
          <span>วันที่ {lesson.day} จาก {p.totalDays}</span>
          <div className="flex-1 h-px relative" style={{ background: c.line }}>
            <div className="absolute inset-y-0 left-0" style={{ width: `${Math.max(pct, 1)}%`, background: c.ink, height: 2, top: -0.5 }} />
          </div>
          <span>{pct}%</span>
        </div>

        {/* Hero: the sentence */}
        <section className="pt-14 pb-12 text-center">
          <p className="text-[13px] tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'Anuphan, sans-serif', color: c.accent }}>
            ประโยคของวันนี้
          </p>
          <h1 style={{ fontFamily: 'Fraunces, serif' }} className="text-[40px] sm:text-[56px] leading-[1.1] font-semibold tracking-tight">
            “{lesson.headlineEnglish || 'Hello, world.'}”
          </h1>
          <p className="mt-4 text-lg" style={{ color: c.soft }}>{lesson.headlineThai}</p>
          <button
            onClick={() => speechService.speak(lesson.headlineEnglish)}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ border: `1px solid ${c.line}`, fontFamily: 'Anuphan, sans-serif', background: c.card }}
          >
            <span aria-hidden>▶</span> ฟังเสียง
          </button>
        </section>

        {/* Lesson intro + single CTA */}
        <section className="rounded-[4px] p-8 sm:p-10" style={{ background: c.card, border: `1px solid ${c.line}` }}>
          <p className="text-[13px]" style={{ fontFamily: 'Anuphan, sans-serif', color: c.soft }}>
            บทที่ {lesson.day} · สัปดาห์ {lesson.week} · {lesson.cefr_level} · ~{lesson.minutes} นาที
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold leading-snug mt-2">{lesson.title}</h2>
          <p className="mt-3 leading-relaxed" style={{ color: c.soft }}>{lesson.objective}</p>

          <ol className="mt-8" style={{ fontFamily: 'Anuphan, sans-serif' }}>
            {parts.map((part, i) => (
              <li key={part.key} className="flex items-baseline gap-4 py-3" style={{ borderTop: `1px solid ${c.line}` }}>
                <span style={{ fontFamily: 'Fraunces, serif', color: c.accent }} className="text-lg w-6">{i + 1}</span>
                <span className="flex-1 text-[16px]">{part.th}</span>
                <span className="text-sm" style={{ color: c.soft }}>{part.min} นาที</span>
              </li>
            ))}
          </ol>

          <Link
            href={`/lessons/${lesson.id}`}
            className="mt-8 flex items-center justify-center gap-2 w-full py-4 text-[17px] font-semibold rounded-[4px] hover:opacity-90"
            style={{ background: c.ink, color: c.paper, fontFamily: 'Anuphan, sans-serif' }}
          >
            เริ่มบทเรียนวันนี้ →
          </Link>
        </section>

        {/* Review: quiet notice */}
        <Link
          href="/review"
          className="mt-6 flex items-center gap-4 px-6 py-4 rounded-[4px] hover:opacity-90"
          style={{ border: `1px dashed ${c.line}`, fontFamily: 'Anuphan, sans-serif' }}
        >
          <span className="text-sm" style={{ color: c.green }}>ทบทวน</span>
          <span className="flex-1 text-[15px]">
            <s style={{ color: c.soft }}>{p.reviewSample.original}</s>
            <span className="mx-2" style={{ color: c.soft }}>→</span>
            <b style={{ color: c.green }}>{p.reviewSample.correct}</b>
          </span>
          <span className="text-sm whitespace-nowrap" style={{ color: c.soft }}>
            {p.dueCount > 0 ? `${p.dueCount} ข้อรอ →` : 'ยังไม่มีข้อค้าง'}
          </span>
        </Link>

        {/* Week as timeline */}
        <section className="mt-16">
          <h3 className="text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Anuphan, sans-serif', color: c.soft }}>
            สัปดาห์ {lesson.week}
          </h3>
          <p className="text-xl font-bold mt-1 mb-6">{lesson.week_title}</p>
          <ol className="relative pl-8" style={{ borderLeft: `1px solid ${c.line}`, fontFamily: 'Anuphan, sans-serif' }}>
            {p.weekLessons.map((l) => {
              const done = p.completedIds.has(l.id);
              const now = l.day === p.currentDay;
              return (
                <li key={l.id} className="relative pb-6 last:pb-0">
                  <span
                    className="absolute -left-[37px] top-1.5 w-[11px] h-[11px] rounded-full"
                    style={{
                      background: now ? c.accent : done ? c.green : c.paper,
                      border: `1px solid ${now ? c.accent : done ? c.green : c.soft}`,
                      boxShadow: now ? `0 0 0 4px ${c.paper}, 0 0 0 5px ${c.accent}` : undefined,
                    }}
                  />
                  <Link href={`/lessons/${l.id}`} className="group block">
                    <span className="text-[13px]" style={{ color: now ? c.accent : c.soft }}>
                      วันที่ {l.day}{now ? ' · วันนี้' : done ? ' · เรียนแล้ว' : ''}
                    </span>
                    <span className={`block text-[16px] group-hover:underline ${now ? 'font-semibold' : ''}`} style={{ color: done && !now ? c.soft : c.ink }}>
                      {l.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
          <Link href="/weeks" className="inline-block mt-8 text-sm underline" style={{ fontFamily: 'Anuphan, sans-serif', color: c.soft }}>
            ดูทั้ง 36 สัปดาห์
          </Link>
        </section>
      </main>
    </div>
  );
}
