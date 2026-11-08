'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllLessons } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { BookOpen, Clock, Target, Award, ArrowUpRight } from 'lucide-react';

export default function ProgressPage() {
  const [appData, setAppData] = useState<StoredAppData | null>(null);

  const allLessons = getAllLessons();

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
  const progressPercent = Math.round((completedLessons.length / 112) * 100);

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Header Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 space-y-2">
        <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
          สถิติการเรียนจริง
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          พัฒนาการของคุณ
        </h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          บันทึกผลการฝึกฝนจริงทุกวันโดยไม่ปรุงแต่ง เรียนวันละก้าว สม่ำเสมอและมั่นคง
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
            <span className="text-base font-bold text-muted-foreground">/ 112 วัน</span>
          </div>
          <div className="w-full bg-background h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-accent h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
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
        </div>

        <div className="p-6 bg-surface rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-foreground text-sm font-bold">
            <span>งานเขียนที่บันทึก</span>
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div className="text-4xl font-display font-extrabold text-foreground">
            {totalWritingCount}{' '}
            <span className="text-base font-bold text-muted-foreground">ชิ้น</span>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            บันทึกเก็บไว้เทียบพัฒนาการ
          </div>
        </div>

        <div className="p-6 bg-success-bg rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-foreground text-sm font-bold">
            <span>คำศัพท์ที่บันทึก</span>
            <Award className="w-5 h-5 text-success" />
          </div>
          <div className="text-4xl font-display font-extrabold text-foreground">
            {appData?.saved_vocabulary.length || 0}{' '}
            <span className="text-base font-bold text-muted-foreground">คำ</span>
          </div>
          <div className="text-sm font-semibold text-success">
            ในสมุดคำศัพท์ส่วนตัว
          </div>
        </div>
      </div>

      {/* Progress Breakdown by Week */}
      <section className="p-6 sm:p-8 bg-surface rounded-2xl space-y-6">
        <h2 className="text-2xl font-extrabold text-foreground">
          ความคืบหน้ารายสัปดาห์ (16 สัปดาห์)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => {
            const weekNum = i + 1;
            const weekLessons = allLessons.filter((l) => l.week === weekNum);
            const finishedInWeek = weekLessons.filter(
              (l) => appData?.lessons_progress[l.id]?.status === 'completed'
            ).length;
            const isWeekDone = finishedInWeek === 7;

            return (
              <div
                key={weekNum}
                className="p-5 bg-background rounded-xl space-y-3"
              >
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-foreground">
                    สัปดาห์ที่ {weekNum}
                  </span>
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
                  <span className="text-muted-foreground truncate">
                    {weekLessons[0]?.week_title}
                  </span>
                  <Link
                    href={`/weeks/${weekNum}`}
                    className="text-accent font-bold hover:underline inline-flex items-center gap-0.5 shrink-0"
                  >
                    <span>ดู</span>
                    <ArrowUpRight className="w-4 h-4" />
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
