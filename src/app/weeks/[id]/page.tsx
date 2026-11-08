'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonsByWeek, getAllWeeks } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface WeekPageProps {
  params: Promise<{ id: string }>;
}

export default function WeekDetailPage({ params }: WeekPageProps) {
  const resolvedParams = use(params);
  const weekNumber = parseInt(resolvedParams.id, 10);

  if (isNaN(weekNumber) || weekNumber < 1 || weekNumber > 36) {
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
    <div
      className="min-h-screen py-8 sm:py-10 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Header Block */}
        <div
          className="bg-white rounded-[28px] p-6 sm:p-9 space-y-5"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/weeks"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F4F0FF] text-sm font-extrabold text-[#6C4CF1] border border-[#E8E0FF] hover:bg-[#6C4CF1] hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>กลับคลัง 36 โมดูล</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {currentWeek?.cefr_level && (
                <span className="px-3 py-1 rounded-full bg-[#F4F0FF] text-[#6C4CF1] text-xs font-extrabold">
                  {currentWeek.cefr_level}
                </span>
              )}
              <span
                className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold"
                style={{ background: '#FFE7C2', color: '#8A4A00' }}
              >
                โมดูลที่ {String(weekNumber).padStart(2, '0')} • จบแล้ว {completedCount}/7 วัน
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h1
              className="text-3xl sm:text-4xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              {currentWeek?.title || `สัปดาห์ที่ ${weekNumber}`}
            </h1>
            {currentWeek?.summary ? (
              <p className="text-base font-semibold max-w-3xl leading-relaxed" style={{ color: '#6E6690' }}>
                {currentWeek.summary}
              </p>
            ) : (
              <p className="text-base font-semibold max-w-2xl leading-relaxed" style={{ color: '#6E6690' }}>
                รวมบทเรียนทั้ง 7 วัน พร้อมคำอธิบาย ตัวอย่างเสียงอ่าน และแบบฝึกหัดของโมดูลนี้
              </p>
            )}
          </div>
        </div>

        {/* Week Lessons Timeline */}
        <section
          className="bg-white rounded-[28px] p-6 sm:p-8 space-y-6"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <h2
            className="text-2xl font-[900] tracking-tight"
            style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
          >
            บทเรียน 7 วันในสัปดาห์นี้
          </h2>

          <div className="space-y-4">
            {weekLessons.map((lesson) => {
              const prog = appData?.lessons_progress[lesson.id];
              const isCompleted = prog?.status === 'completed';

              return (
                <div
                  key={lesson.id}
                  className={`p-5 sm:p-6 rounded-[24px] flex flex-col md:flex-row md:items-center justify-between gap-5 border-2 transition-all ${
                    isCompleted
                      ? 'bg-[#E6F9C4]/40 border-[#C8F04A]'
                      : 'bg-[#FFF9EE] border-[#EEE6D6] hover:border-[#6C4CF1]'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-extrabold">
                      <span style={{ color: isCompleted ? '#16A34A' : '#6C4CF1' }}>
                        วันที่ {lesson.day} • {lesson.type === 'assessment' ? 'หมุดหมายวัดผล' : lesson.type === 'review' ? 'ทบทวนสัปดาห์' : 'บทเรียน'}
                      </span>
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[#16A34A]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>จบแล้ว</span>
                        </span>
                      ) : (
                        <span className="text-[#6E6690] font-semibold">{lesson.minutes || 60} นาที</span>
                      )}
                    </div>

                    <h3
                      className="text-lg sm:text-xl font-extrabold"
                      style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                    >
                      {lesson.title}
                    </h3>
                    <p className="text-sm font-semibold max-w-2xl leading-relaxed" style={{ color: '#6E6690' }}>
                      {lesson.objective}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/lessons/${lesson.id}`}
                      className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-extrabold transition-all shadow-xs ${
                        isCompleted
                          ? 'bg-white border border-[#EEE6D6] text-[#2A1F4A] hover:bg-[#F4F0FF]'
                          : 'bg-[#6C4CF1] text-white hover:bg-[#5838DF]'
                      }`}
                    >
                      <span>{isCompleted ? 'ทบทวนบทนี้' : 'เข้าเรียนเลย 🚀'}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
