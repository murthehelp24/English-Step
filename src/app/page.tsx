'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllLessons, getLessonsByWeek } from '@/lib/curriculum';
import { getStoredData, getDueReviewItems, getAllReviewItems } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { speechService } from '@/lib/speech';
import { Volume2, Check } from 'lucide-react';

// Palette for Sunny Path
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

export default function TodayPage() {
  const [appData, setAppData] = useState<StoredAppData | null>(null);
  const [currentDayNumber, setCurrentDayNumber] = useState(1);
  const [dueCount, setDueCount] = useState(0);
  const [totalReviewCount, setTotalReviewCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [latestReviewSample, setLatestReviewSample] = useState<{
    original: string;
    correct: string;
  }>({
    original: 'I is a designer.',
    correct: 'I am a designer.',
  });

  const allLessons = getAllLessons();

  useEffect(() => {
    const load = () => {
      const data = getStoredData();
      setAppData(data);

      let nextDay = 1;
      let completed = 0;
      const lessonsList = getAllLessons();
      for (const lesson of lessonsList) {
        const prog = data.lessons_progress[lesson.id];
        if (prog?.status === 'completed') {
          completed++;
        }
      }
      for (const lesson of lessonsList) {
        const prog = data.lessons_progress[lesson.id];
        if (!prog || prog.status !== 'completed') {
          nextDay = lesson.day;
          break;
        }
      }
      setCurrentDayNumber(nextDay);
      setCompletedCount(completed);

      const due = getDueReviewItems();
      const allReviews = getAllReviewItems();
      setDueCount(due.length);
      setTotalReviewCount(allReviews.length);

      if (allReviews.length > 0) {
        const latest = allReviews[0];
        const mistake = data.mistakes.find((m) => m.id === latest.mistake_id);
        if (mistake) {
          setLatestReviewSample({
            original: mistake.original_answer,
            correct: mistake.correct_answer,
          });
        }
      }
    };

    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const currentLesson = allLessons.find((l) => l.day === currentDayNumber) || allLessons[0];
  const currentWeekLessons = getLessonsByWeek(currentLesson?.week || 1);

  const headlineEnglish = currentLesson?.headlineEnglish || 'English has twenty-six letters.';
  const headlineThai = currentLesson?.headlineThai || currentLesson?.title || 'ภาษาอังกฤษมีตัวอักษร 26 ตัว';

  const completedIds = new Set(
    Object.entries(appData?.lessons_progress ?? {})
      .filter(([, pr]) => pr.status === 'completed')
      .map(([id]) => id)
  );

  const totalDays = allLessons.length || 252;
  const pct = completedCount / totalDays;
  const R = 52;
  const C = 2 * Math.PI * R;
  const offsets = [0, 70, 100, 70, 0, -70, -100]; // zig-zag x-offsets (px)

  const lessonParts = [
    { key: 'sound', th: 'ฟัง & จับเสียง IPA', min: 12, icon: '👂', bg: '#FFF1F6' },
    { key: 'vocab', th: 'ศัพท์ & ก้อนคำ Chunks', min: 15, icon: '🧩', bg: '#EEF8FF' },
    { key: 'practice', th: 'แบบฝึกหัด Interleaved', min: 18, icon: '✏️', bg: '#F4F0FF' },
    { key: 'speak', th: 'ฝึกพูดคล่อง 4/3/2', min: 15, icon: '🎤', bg: '#F3FBE3' },
  ];

  return (
    <div
      style={{ background: c.bg, color: c.ink, fontFamily: "Mali, 'Nunito', sans-serif" }}
      className="min-h-screen pb-16 transition-colors duration-200"
    >
      {/* Main 3-Column Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 pt-6 grid grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)_320px] gap-6 items-start">
        {/* =========================================================================
            LEFT COLUMN: Friendly Progress Ring & Today's Headline Card
            ========================================================================= */}
          <aside
            className="rounded-[28px] p-6 text-center space-y-4"
            style={{ background: c.card, border: `2px solid ${c.line}` }}
          >
            <div>
              <p className="font-bold text-sm" style={{ color: c.soft }}>
                สวัสดี! วันนี้ไปต่อกัน 👋
              </p>
              <svg viewBox="0 0 130 130" className="w-36 h-36 mx-auto my-2 -rotate-90">
                <circle cx="65" cy="65" r={R} fill="none" stroke="#F1ECFF" strokeWidth="13" />
                <circle
                  cx="65"
                  cy="65"
                  r={R}
                  fill="none"
                  stroke={c.violet}
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={C * (1 - Math.max(pct, 0.02))}
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="-mt-[105px] mb-[50px]">
                <div className="text-3xl font-[900]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {currentLesson.day}
                </div>
                <div className="text-xs font-semibold" style={{ color: c.soft }}>
                  จาก {totalDays} วัน
                </div>
              </div>
            </div>

            {/* Headline Sentence Box (Clean, without the bulky chunky bottom button) */}
            <div className="rounded-2xl p-4 text-left space-y-1.5" style={{ background: '#F4F0FF' }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold" style={{ color: c.violet }}>
                  ประโยคเด็ดวันนี้
                </span>
                <button
                  type="button"
                  onClick={() => speechService.speak(headlineEnglish)}
                  className="text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 hover:opacity-80 transition-opacity active:scale-95"
                  style={{ background: '#E8E0FF', color: c.violet }}
                  title="ฟังเสียงอ่าน"
                  aria-label="ฟังเสียงอ่านประโยค"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>ฟังเสียง</span>
                </button>
              </div>

              <div className="text-base sm:text-lg font-extrabold leading-snug" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {headlineEnglish}
              </div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: c.soft }}>
                {headlineThai}
              </div>
            </div>
          </aside>

          {/* =========================================================================
              CENTER COLUMN: The Winding Sunny Path (Clean, Smooth Flat Nodes)
              ========================================================================= */}
          <section
            className="rounded-[28px] px-6 py-8 relative overflow-hidden text-center"
            style={{ background: 'linear-gradient(180deg,#EFE9FF 0%,#FFF3E0 100%)' }}
          >
            <div>
              <span
                className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-extrabold tracking-wide"
                style={{ background: c.lime, color: '#2A1F4A' }}
              >
                สัปดาห์ {currentLesson.week} · {currentLesson.cefr_level || 'Pre-A1'}
              </span>
              <h1
                className="text-xl sm:text-2xl font-extrabold mt-3 leading-snug"
                style={{ color: c.ink }}
              >
                {currentLesson.week_title}
              </h1>
            </div>

            {/* 7-Day Path */}
            <ol className="mt-14 mb-8 flex flex-col items-center gap-6">
              {currentWeekLessons.map((l, i) => {
                const done = completedIds.has(l.id);
                const now = l.day === currentDayNumber;
                const locked = !done && !now && l.day > currentDayNumber;

                return (
                  <li
                    key={l.id}
                    className="relative flex flex-col items-center group"
                    style={{ transform: `translateX(${offsets[i % 7]}px)` }}
                  >
                    {/* Bouncing Pointer Badge on the active day */}
                    {now && (
                      <span
                        className="absolute -top-10 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold text-white animate-bounce shadow-md z-10"
                        style={{ background: c.ink }}
                      >
                        เริ่มตรงนี้!
                      </span>
                    )}

                    <Link
                      href={`/lessons/${l.id}`}
                      title={l.title}
                      className={`w-[74px] h-[74px] rounded-full grid place-items-center text-2xl font-[900] transition-all hover:scale-105 active:scale-95 ${
                        now ? 'ring-[5px] ring-white shadow-lg' : 'shadow-sm'
                      }`}
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        background: now ? c.violet : done ? c.lime : '#E4DFEE',
                        color: now ? '#fff' : locked ? '#8E85A8' : c.ink,
                      }}
                    >
                      {done ? <Check className="w-8 h-8 stroke-[3]" /> : l.day}
                    </Link>

                    <span
                      className="mt-2 text-xs font-bold max-w-[150px] text-center line-clamp-2 leading-tight"
                      style={{ color: now ? c.ink : c.soft }}
                    >
                      {l.title}
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* =========================================================================
              RIGHT COLUMN: Today's Missions & Mistake Review Card
              ========================================================================= */}
          <aside className="space-y-5">
            {/* Missions Card */}
            <div
              className="rounded-[28px] p-6 space-y-3"
              style={{ background: c.card, border: `2px solid ${c.line}` }}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-lg">ภารกิจวันนี้ 🎯</h2>
                <span className="text-xs font-bold" style={{ color: c.soft }}>{currentLesson.minutes || 60} นาที</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold" style={{ color: c.soft }}>
                {currentLesson.title}
              </p>

              <ul className="space-y-2.5 pt-1">
                {lessonParts.map((part) => (
                  <li
                    key={part.key}
                    className="flex items-center gap-3 p-3 rounded-2xl"
                    style={{ background: part.bg }}
                  >
                    <span className="text-xl">{part.icon}</span>
                    <span className="flex-1 text-xs sm:text-sm font-bold">{part.th}</span>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-white shadow-xs">
                      {part.min}′
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mistake Review Card */}
            <Link
              href="/review"
              className="block rounded-[28px] p-6 hover:-translate-y-1 transition-transform border border-pink-200"
              style={{ background: '#FFE4EE' }}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-lg" style={{ color: c.ink }}>แก้จุดพลาด 💪</h2>
                <span
                  className="px-3 py-1 rounded-full text-xs font-extrabold text-white"
                  style={{ background: c.pink }}
                >
                  {dueCount || totalReviewCount || 0}
                </span>
              </div>
              <div className="mt-3 rounded-2xl bg-white p-3.5 text-xs sm:text-sm space-y-1">
                <div className="line-through font-medium" style={{ color: '#C24A6E' }}>
                  {latestReviewSample.original}
                </div>
                <div className="font-bold flex items-center gap-1.5" style={{ color: '#3E8A1E' }}>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>{latestReviewSample.correct}</span>
                </div>
              </div>
            </Link>
          </aside>
        </div>
      </div>
  );
}
