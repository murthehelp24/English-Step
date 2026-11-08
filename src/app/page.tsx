'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllLessons, getLessonsByWeek } from '@/lib/curriculum';
import { getStoredData, getDueReviewItems, getAllReviewItems } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  BookOpen,
  RotateCcw,
  Sparkles,
  Calendar,
  Check,
  ChevronRight,
  Clock,
} from 'lucide-react';

export default function TodayPage() {
  const [appData, setAppData] = useState<StoredAppData | null>(null);
  const [currentDayNumber, setCurrentDayNumber] = useState(1);
  const [dueCount, setDueCount] = useState(0);
  const [totalReviewCount, setTotalReviewCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [savedVocabCount, setSavedVocabCount] = useState(0);
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
      setSavedVocabCount(data.saved_vocabulary?.length || 0);

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

  const headlineEnglish = currentLesson?.headlineEnglish || 'Hello, World.';
  const headlineThai = currentLesson?.headlineThai || currentLesson?.title || '';

  const streakDays = Math.max(1, completedCount);
  const progressPercent = Math.round((completedCount / 252) * 100);

  return (
    <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-10 py-6 sm:py-8 space-y-8 transition-colors duration-200">
      {/* =========================================================================
          TOP STATS SUMMARY BAR (Quick-glance cards)
          ========================================================================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Streak */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/60 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-current text-accent" />
          </div>
          <div>
            <div className="text-xs font-bold text-muted-foreground">Streak ต่อเนื่อง</div>
            <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              {streakDays} วัน 🔥
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/60 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-muted-foreground">เป้าหมายรวม 252 วัน</div>
            <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              {completedCount} <span className="text-sm font-semibold text-muted-foreground">/ 252 บท ({progressPercent}%)</span>
            </div>
          </div>
        </div>

        {/* Saved Vocabulary */}
        <Link
          href="/vocabulary"
          className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/60 flex items-center gap-3.5 hover:border-accent/40 transition-colors group"
        >
          <div className="w-11 h-11 rounded-xl bg-lesson-badge/40 text-lesson-badge-fg flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
              คำศัพท์ & Chunks
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              {savedVocabCount > 0 ? `${savedVocabCount} คำบันทึก` : '1,600+ คำ'}
            </div>
          </div>
        </Link>

        {/* Due SRS Reviews */}
        <Link
          href="/review"
          className={`p-4 sm:p-5 rounded-2xl border flex items-center gap-3.5 transition-colors group ${
            dueCount > 0
              ? 'bg-review-surface border-review-accent/40'
              : 'bg-surface border-border/60 hover:border-border'
          }`}
        >
          <div className="w-11 h-11 rounded-xl bg-review-accent/15 text-review-accent flex items-center justify-center shrink-0">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
              ทบทวนจุดผิด (SRS)
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              {dueCount > 0 ? (
                <span className="text-review-accent">{dueCount} ข้อรอตรวจ</span>
              ) : (
                <span className="text-success text-lg sm:text-xl font-bold">✓ เคลียร์ครบแล้ว</span>
              )}
            </div>
          </div>
        </Link>
      </section>

      {/* =========================================================================
          MAIN STUDY STAGE (Today's Focus Hero + Review Sidecard)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Focus Stage: Warm Butter Yellow Hero (8 cols) */}
        <article className="lg:col-span-8 bg-lesson-surface rounded-3xl p-6 sm:p-9 lg:p-10 flex flex-col justify-between gap-6 sm:gap-8 border border-lesson-badge/30 shadow-sm">
          <div className="space-y-4 sm:space-y-5">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs sm:text-sm font-extrabold">
                  Phase {currentLesson?.phase ?? 0} • {currentLesson?.cefr_level || 'Pre-A1'}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-bold border border-border">
                  สัปดาห์ที่ {currentLesson?.week} • วันที่ {currentLesson?.day} / 252
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{currentLesson?.minutes || 60} นาที / วัน</span>
              </span>
            </div>

            {/* Title & Objective */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                {currentLesson?.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {currentLesson?.objective}
              </p>
            </div>
          </div>

          {/* Key Audio Sentence Card */}
          <div className="bg-background rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border/50">
            <div className="space-y-1">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                ประโยคสำคัญประจำวัน
              </div>
              <div className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                {headlineEnglish}
              </div>
              {headlineThai && (
                <div className="text-sm sm:text-base text-muted-foreground">
                  {headlineThai}
                </div>
              )}
            </div>
            <div className="self-start sm:self-center shrink-0">
              <AudioPlayer text={headlineEnglish} label="ฟังเสียงตัวอย่าง" />
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border/40">
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
              ครบ 4 แกน: เสียง &amp; IPA · ศัพท์ {currentLesson?.vocabCount || 6} คำ · แบบฝึก {currentLesson?.exerciseCount || 8} ข้อ · ฝึกพูด 4/3/2
            </div>

            <Link
              href={`/lessons/${currentLesson?.id}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground text-base font-extrabold hover:brightness-105 active:scale-[0.99] transition-all shadow-sm"
            >
              <span>เริ่มเรียนวันที่ {currentLesson?.day}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </article>

        {/* Right Stage: Sky Mist SRS Review Card (4 cols) */}
        <aside className="lg:col-span-4 bg-review-surface rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 border border-review-accent/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 text-review-accent text-xs font-extrabold">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Spaced Repetition System</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                {dueCount > 0
                  ? `มี ${dueCount} ข้อรอทบทวน`
                  : totalReviewCount > 0
                  ? `บันทึกไว้ ${totalReviewCount} ข้อ`
                  : 'ระบบทบทวนจุดผิด'}
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                ทบทวนซ้ำตามรอบ 1, 3, 7, 14, 30 วัน เพื่อล้างจุดพลาดแบบคนไทย ไม่ให้เผลอพูดหรือเขียนผิดซ้ำ
              </p>
            </div>

            {/* Mistake Comparison Card */}
            <div className="bg-background rounded-2xl p-4 sm:p-5 space-y-2 border border-border/60 text-sm sm:text-base">
              <div className="text-xs font-bold text-muted-foreground">ตัวอย่างจุดแก้ให้ถูก:</div>
              <div className="font-display line-through text-error font-medium">
                {latestReviewSample.original}
              </div>
              <div className="font-display font-bold text-success flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>{latestReviewSample.correct}</span>
              </div>
            </div>
          </div>

          <Link
            href="/review"
            className="w-full py-3.5 px-5 rounded-2xl bg-review-accent text-review-accent-fg text-sm font-extrabold text-center hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>ฝึกทบทวนทันที {dueCount > 0 ? `(${dueCount} ข้อ)` : ''}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </aside>
      </div>

      {/* =========================================================================
          CURRENT WEEK 7-DAY TIMELINE STRIP
          ========================================================================= */}
      <section className="bg-surface rounded-3xl p-6 sm:p-8 space-y-5 border border-border/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-foreground">
                สัปดาห์ที่ {currentLesson?.week}: {currentLesson?.week_title}
              </h2>
              <div className="text-xs text-muted-foreground font-semibold">
                7 วันแห่งการฝึกฝน • วันละ 60 นาที
              </div>
            </div>
          </div>

          <Link
            href="/weeks"
            className="text-xs sm:text-sm font-bold text-accent hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>ดูแผนที่ทั้ง 36 โมดูล (252 วัน)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 7 Days Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {currentWeekLessons.map((lesson) => {
            const prog = appData?.lessons_progress[lesson.id];
            const isCurrent = lesson.day === currentDayNumber;
            const isCompleted = prog?.status === 'completed';

            return (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.id}`}
                className={`p-4 rounded-2xl text-left transition-all relative flex flex-col justify-between min-h-[110px] border ${
                  isCurrent
                    ? 'bg-dark-chip text-dark-chip-fg font-bold border-accent ring-2 ring-accent/30 shadow-md'
                    : isCompleted
                    ? 'bg-success-bg border-success/30 text-foreground hover:brightness-95'
                    : 'bg-background border-border text-foreground hover:border-accent/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span
                    className={
                      isCurrent
                        ? 'text-accent'
                        : isCompleted
                        ? 'text-success'
                        : 'text-muted-foreground'
                    }
                  >
                    วันที่ {lesson.day}
                  </span>
                  {isCompleted && (
                    <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                  {isCurrent && !isCompleted && (
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  )}
                </div>

                <div className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                  {lesson.title}
                </div>

                <div className="text-[11px] text-muted-foreground pt-1">
                  {isCurrent ? '• วันนี้' : isCompleted ? '• จบแล้ว' : '60 นาที'}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
