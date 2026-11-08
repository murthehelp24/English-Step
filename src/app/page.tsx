'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllLessons, getLessonsByWeek } from '@/lib/curriculum';
import { getStoredData, getDueReviewItems, getAllReviewItems } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TodayPage() {
  const [appData, setAppData] = useState<StoredAppData | null>(null);
  const [currentDayNumber, setCurrentDayNumber] = useState(1);
  const [dueCount, setDueCount] = useState(0);
  const [totalReviewCount, setTotalReviewCount] = useState(0);
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
      const lessonsList = getAllLessons();
      for (const lesson of lessonsList) {
        const prog = data.lessons_progress[lesson.id];
        if (!prog || prog.status !== 'completed') {
          nextDay = lesson.day;
          break;
        }
      }
      setCurrentDayNumber(nextDay);

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

  const mainExample = currentLesson?.examples?.[0];
  const headlineEnglish =
    mainExample?.en || currentLesson?.reading?.split('.')[0] + '.' || 'Hello, World.';
  const headlineThai = mainExample?.th || currentLesson?.title || '';

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Main Two-Block Study Stage (Nordic Bright) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        {/* Left Block: Warm Butter Yellow Lesson Card (8 cols) */}
        <article className="lg:col-span-8 bg-lesson-surface rounded-2xl p-7 sm:p-10 flex flex-col justify-between gap-7">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
                สัปดาห์ที่ {currentLesson?.week} • วันที่ {currentLesson?.day}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                ประมาณ {currentLesson?.minutes || 60} นาที
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              {currentLesson?.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {currentLesson?.objective}
            </p>
          </div>

          {/* Highlighted Example Sentence White Card */}
          <div className="bg-background rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-muted-foreground">ประโยคสำคัญวันนี้</div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                {headlineEnglish}
              </div>
              {headlineThai && (
                <div className="text-base text-muted-foreground mt-1">
                  {headlineThai}
                </div>
              )}
            </div>
            <div className="self-start sm:self-center">
              <AudioPlayer text={headlineEnglish} label="ฟังเสียงอ่าน" />
            </div>
          </div>

          {/* Bottom Summary & Primary CTA Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="text-sm font-semibold text-muted-foreground">
              4 กิจกรรม: อธิบาย · ศัพท์ {currentLesson?.vocabulary?.length || 0} คำ · แบบฝึก {currentLesson?.exercises?.length || 0} ข้อ · เขียนสั้นๆ
            </div>

            <Link
              href={`/lessons/${currentLesson?.id}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-base font-extrabold hover:brightness-105 active:scale-[0.99] transition-all whitespace-nowrap"
            >
              <span>เริ่มเรียนวันที่ {currentLesson?.day}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </article>

        {/* Right Block: Soft Sky Mist Review Card (4 cols) */}
        <aside className="lg:col-span-4 bg-review-surface rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="text-sm font-extrabold text-review-accent">
              ทบทวนข้อที่เคยผิด
            </div>
            <h2 className="text-2xl font-extrabold text-foreground">
              {dueCount > 0
                ? `รอทบทวน ${dueCount} ข้อ`
                : totalReviewCount > 0
                ? `บันทึกไว้ ${totalReviewCount} ข้อ`
                : 'พร้อมฝึกทบทวน'}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              หยิบคำที่เคยเขียนผิดมาลองฝึกใหม่ตามรอบ 1, 3, 7 และ 14 วัน จะได้จำได้แม่นขึ้น
            </p>

            {/* Mistake vs Correction White Card */}
            <div className="bg-background rounded-xl p-4 sm:p-5 space-y-2 text-base">
              <div className="font-display line-through text-error">
                {latestReviewSample.original}
              </div>
              <div className="font-display font-bold text-success flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span>{latestReviewSample.correct}</span>
              </div>
            </div>
          </div>

          <Link
            href="/review"
            className="w-full py-3.5 px-5 rounded-xl bg-review-accent text-review-accent-fg text-sm font-extrabold text-center hover:brightness-105 active:scale-[0.99] transition-all"
          >
            ไปหน้าทบทวน {dueCount > 0 ? `(${dueCount})` : ''}
          </Link>
        </aside>
      </div>

      {/* Horizontal Week Strip */}
      <section className="space-y-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold text-foreground">
            วันเรียนในสัปดาห์ที่ {currentLesson?.week}: {currentLesson?.week_title}
          </h2>
          <Link
            href="/weeks"
            className="text-sm font-bold text-accent hover:underline"
          >
            ดูครบทั้ง 16 สัปดาห์ →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {currentWeekLessons.map((lesson) => {
            const prog = appData?.lessons_progress[lesson.id];
            const isCurrent = lesson.day === currentDayNumber;
            const isCompleted = prog?.status === 'completed';

            return (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.id}`}
                className={`p-4 rounded-xl text-left transition-all ${
                  isCurrent
                    ? 'bg-dark-chip text-dark-chip-fg font-bold'
                    : isCompleted
                    ? 'bg-success-bg text-foreground hover:opacity-90'
                    : 'bg-surface text-foreground hover:opacity-85'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span
                    className={
                      isCurrent
                        ? 'text-[#FF8A5B] dark:text-[#B83205]'
                        : isCompleted
                        ? 'text-success'
                        : 'text-muted-foreground'
                    }
                  >
                    วันที่ {lesson.day}
                    {isCurrent ? ' · วันนี้' : isCompleted ? ' · จบแล้ว' : ''}
                  </span>
                </div>
                <div className="text-sm font-bold line-clamp-2 leading-snug">
                  {lesson.title}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
