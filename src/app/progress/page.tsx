'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllLessons, getAllPhases, getAllWeeks } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { BookOpen, Clock, Target, Award, ArrowUpRight } from 'lucide-react';

export default function ProgressPage() {
  const [appData, setAppData] = useState<StoredAppData | null>(null);

  const allLessons = getAllLessons();
  const phases = getAllPhases();
  const weeks = getAllWeeks();

  useEffect(() => {
    const load = () => setAppData(getStoredData());
    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const completedLessons = allLessons.filter(
    (l) => appData?.lessons_progress[l.id]?.status === 'completed'
  );

  let totalAttempts = 0;
  let correctAttempts = 0;
  let totalWritingCount = 0;

  if (appData) {
    Object.values(appData.lessons_progress).forEach((prog) => {
      if (prog.writing_submission && prog.writing_submission.trim().length > 0) {
        totalWritingCount++;
      }
      Object.values(prog.attempts).forEach((att) => {
        totalAttempts++;
        if (att.is_correct) correctAttempts++;
      });
    });
  }

  const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
  const progressPercent = Math.round((completedLessons.length / 252) * 100);

  return (
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Header Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
            Master Track 252 วัน
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-background text-foreground text-xs font-bold border border-border">
            6 Phases • 36 โมดูล
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          พัฒนาการของคุณ
        </h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          บันทึกผลการฝึกฝนจริงทุกวันโดยไม่ปรุงแต่ง วันละ 60 นาทีตามหลักวิทยาศาสตร์การเรียนรู้ สม่ำเสมอและมั่นคง
        </p>
      </div>

      {/* Overview Stat Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 bg-lesson-surface rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-foreground text-sm font-bold">
            <span>บทเรียนที่จบแล้ว</span>
            <BookOpen className="w-5 h-5 text-accent" />
          </div>
          <div className="text-4xl font-display font-extrabold text-foreground">
            {completedLessons.length}{' '}
            <span className="text-base font-bold text-muted-foreground">/ 252 วัน</span>
          </div>
          <div className="w-full bg-background h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-accent h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground font-semibold">
            สำเร็จ {progressPercent}% ของเส้นทาง Master Track
          </div>
        </div>

        <div className="p-6 bg-review-surface rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-foreground text-sm font-bold">
            <span>แบบฝึกหัดที่ทำ</span>
            <Target className="w-5 h-5 text-review-accent" />
          </div>
          <div className="text-4xl font-display font-extrabold text-foreground">
            {totalAttempts}{' '}
            <span className="text-base font-bold text-muted-foreground">ครั้ง</span>
          </div>
          <div className="text-sm font-semibold text-review-accent">
            ความแม่นยำเฉลี่ย {accuracy}%
          </div>
          <div className="text-xs text-muted-foreground">
            ถูก {correctAttempts} จาก {totalAttempts} ข้อ
          </div>
        </div>

        <div className="p-6 bg-surface rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-foreground text-sm font-bold">
            <span>งานเขียนและบันทึก</span>
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div className="text-4xl font-display font-extrabold text-foreground">
            {totalWritingCount}{' '}
            <span className="text-base font-bold text-muted-foreground">ชิ้น</span>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            บันทึกเก็บไว้เทียบพัฒนาการ
          </div>
          <div className="text-xs text-muted-foreground">
            พร้อม AI ตรวจและ Rubric
          </div>
        </div>

        <div className="p-6 bg-success-bg rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-foreground text-sm font-bold">
            <span>คำศัพท์ที่บันทึก</span>
            <Award className="w-5 h-5 text-success" />
          </div>
          <div className="text-4xl font-display font-extrabold text-foreground">
            {appData?.saved_vocabulary?.length || 0}{' '}
            <span className="text-base font-bold text-muted-foreground">คำ</span>
          </div>
          <div className="text-sm font-semibold text-success">
            ในสมุดคำศัพท์ส่วนตัว
          </div>
          <div className="text-xs text-muted-foreground">
            จากทั้งหมด 1,600+ Chunks
          </div>
        </div>
      </div>

      {/* Phase Mastery Cards (6 Phases) */}
      <section className="p-6 sm:p-8 bg-surface rounded-2xl space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-foreground">
            ความก้าวหน้าราย Phase (6 ระดับการเรียนรู้)
          </h2>
          <p className="text-sm text-muted-foreground">
            วิวัฒนาการทักษะภาษาอังกฤษจากฐานศูนย์สู่ความคล่องตัวระดับใช้งานจริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {phases.map((p) => {
            const [startDay, endDay] = p.days_range;
            const phaseLessons = allLessons.filter(
              (l) => l.day >= startDay && l.day <= endDay
            );
            const finishedInPhase = phaseLessons.filter(
              (l) => appData?.lessons_progress[l.id]?.status === 'completed'
            ).length;
            const isPhaseDone = finishedInPhase === phaseLessons.length && phaseLessons.length > 0;
            const phasePct = Math.round((finishedInPhase / phaseLessons.length) * 100) || 0;

            return (
              <div
                key={p.phase}
                className={`p-5 rounded-xl border space-y-3 transition-all ${
                  isPhaseDone
                    ? 'bg-success-bg/40 border-success/40'
                    : 'bg-background border-border/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="px-2.5 py-0.5 rounded-full bg-lesson-badge text-lesson-badge-fg">
                    Phase {p.phase} • {p.cefr}
                  </span>
                  <span className={isPhaseDone ? 'text-success' : 'text-muted-foreground'}>
                    {finishedInPhase}/{phaseLessons.length} วัน ({phasePct}%)
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {p.summary}
                  </p>
                </div>

                <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isPhaseDone ? 'bg-success' : 'bg-accent'
                    }`}
                    style={{ width: `${phasePct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Progress Breakdown by Module (36 Weeks) */}
      <section className="p-6 sm:p-8 bg-surface rounded-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-foreground">
              ความคืบหน้ารายโมดูล (36 สัปดาห์)
            </h2>
            <p className="text-sm text-muted-foreground">
              โมดูลละ 7 วัน พร้อมแบบทบทวนและหมุดหมายวัดผลระดับสากล
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeks.map((week) => {
            const weekLessons = allLessons.filter((l) => l.week === week.week);
            const finishedInWeek = weekLessons.filter(
              (l) => appData?.lessons_progress[l.id]?.status === 'completed'
            ).length;
            const isWeekDone = finishedInWeek === 7;

            return (
              <div
                key={week.week}
                className="p-5 bg-background rounded-xl space-y-3 border border-border/50"
              >
                <div className="flex items-center justify-between text-sm font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="text-foreground">
                      โมดูล {week.week}
                    </span>
                    {week.cefr_level && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-surface text-muted-foreground font-mono">
                        {week.cefr_level}
                      </span>
                    )}
                  </div>
                  <span className={isWeekDone ? 'text-success' : 'text-muted-foreground'}>
                    {finishedInWeek}/7 วัน
                  </span>
                </div>

                <div className="w-full bg-surface h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isWeekDone ? 'bg-success' : 'bg-accent'
                    }`}
                    style={{ width: `${(finishedInWeek / 7) * 100}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-sm pt-1 gap-2">
                  <span className="text-muted-foreground text-xs truncate max-w-[170px]" title={week.title}>
                    {week.title}
                  </span>
                  <Link
                    href={`/weeks/${week.week}`}
                    className="text-accent text-xs font-bold hover:underline inline-flex items-center gap-0.5 shrink-0"
                  >
                    <span>ดู</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
