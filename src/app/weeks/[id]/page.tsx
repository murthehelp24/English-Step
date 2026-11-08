'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonsByWeek, getAllWeeks } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WeekPageProps {
  params: Promise<{ id: string }>;
}

export default function WeekDetailPage({ params }: WeekPageProps) {
  const resolvedParams = use(params);
  const weekNumber = parseInt(resolvedParams.id, 10);

  if (isNaN(weekNumber) || weekNumber < 1 || weekNumber > 16) {
    notFound();
  }

  const [appData, setAppData] = useState<StoredAppData | null>(null);
  const weeks = getAllWeeks();
  const currentWeek = weeks.find((w) => w.week === weekNumber);
  const weekLessons = getLessonsByWeek(weekNumber);

  useEffect(() => {
    const load = () => setAppData(getStoredData());
    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const completedCount = weekLessons.filter(
    (l) => appData?.lessons_progress[l.id]?.status === 'completed'
  ).length;

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Header Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/weeks"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background text-sm font-bold text-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับคลังบทเรียน</span>
          </Link>

          <span className="px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
            สัปดาห์ที่ {String(weekNumber).padStart(2, '0')} • จบแล้ว {completedCount}/7 วัน
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {currentWeek?.title || `สัปดาห์ที่ ${weekNumber}`}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            รวมบทเรียนทั้ง 7 วัน พร้อมคำอธิบาย ตัวอย่างเสียงอ่าน และแบบฝึกหัดของสัปดาห์นี้
          </p>
        </div>
      </div>

      {/* Week Lessons Timeline */}
      <section className="bg-surface rounded-2xl p-6 sm:p-8 space-y-5">
        <h2 className="text-xl font-extrabold text-foreground">
          บทเรียน 7 วันในสัปดาห์นี้
        </h2>

        <div className="space-y-4">
          {weekLessons.map((lesson) => {
            const prog = appData?.lessons_progress[lesson.id];
            const isCompleted = prog?.status === 'completed';

            return (
              <div
                key={lesson.id}
                className="p-5 sm:p-6 bg-background rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <span className="text-accent">วันที่ {lesson.day}</span>
                    <span className="text-border">•</span>
                    <span className="text-muted-foreground">{lesson.minutes} นาที</span>
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-success-bg text-success text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>เรียนจบแล้ว</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground">
                    {lesson.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                    {lesson.objective}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <AudioPlayer text={lesson.reading} label="ฟังบทอ่าน" />
                  <Link
                    href={`/lessons/${lesson.id}`}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-extrabold px-5 py-2.5 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all"
                  >
                    <span>เปิดบทเรียน</span>
                    <ArrowRight className="w-4 h-4" />
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
