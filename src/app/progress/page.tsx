'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllLessons, getAllPhases, getAllWeeks } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { BookOpen, Clock, Target, Award, ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

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
    <div
      className="min-h-screen py-8 sm:py-10 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Header Block */}
        <div
          className="bg-white rounded-[28px] p-6 sm:p-9 space-y-3"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold"
              style={{ background: '#FFE7C2', color: '#8A4A00' }}
            >
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span>Master Track 252 วัน</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-extrabold bg-[#F4F0FF] text-[#6C4CF1] border border-[#E8E0FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>6 Phases • 36 โมดูล</span>
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-[900] tracking-tight"
            style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
          >
            พัฒนาการของคุณ 📈
          </h1>
          <p className="text-base font-semibold max-w-xl leading-relaxed" style={{ color: '#6E6690' }}>
            บันทึกผลการฝึกฝนจริงทุกวันโดยไม่ปรุงแต่ง วันละ 60 นาทีตามหลักวิทยาศาสตร์การเรียนรู้ สม่ำเสมอและมั่นคง
          </p>
        </div>

        {/* Overview Stat Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1: Completed lessons */}
          <div
            className="p-6 bg-white rounded-[24px] space-y-3 border-2 border-[#EEE6D6] hover:border-[#6C4CF1]/40 transition-all"
          >
            <div className="flex items-center justify-between text-sm font-extrabold" style={{ color: '#2A1F4A' }}>
              <span>บทเรียนที่จบแล้ว</span>
              <BookOpen className="w-5 h-5 text-[#6C4CF1]" />
            </div>
            <div
              className="text-4xl font-[900]"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              {completedLessons.length}{' '}
              <span className="text-base font-extrabold text-[#6E6690]">/ 252 วัน</span>
            </div>
            <div className="w-full bg-[#FFF9EE] h-3 rounded-full overflow-hidden border border-[#EEE6D6]">
              <div
                className="bg-[#6C4CF1] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-xs text-[#6E6690] font-bold">
              สำเร็จ {progressPercent}% ของเส้นทาง Master Track
            </div>
          </div>

          {/* 2: Exercises attempt */}
          <div
            className="p-6 bg-white rounded-[24px] space-y-3 border-2 border-[#EEE6D6] hover:border-[#FF7AA8]/40 transition-all"
          >
            <div className="flex items-center justify-between text-sm font-extrabold" style={{ color: '#2A1F4A' }}>
              <span>แบบฝึกหัดที่ทำ</span>
              <Target className="w-5 h-5 text-[#FF7AA8]" />
            </div>
            <div
              className="text-4xl font-[900]"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              {totalAttempts}{' '}
              <span className="text-base font-extrabold text-[#6E6690]">ครั้ง</span>
            </div>
            <div className="text-sm font-extrabold text-[#FF7AA8]">
              ความแม่นยำเฉลี่ย {accuracy}%
            </div>
            <div className="text-xs text-[#6E6690] font-semibold">
              ถูก {correctAttempts} จาก {totalAttempts} ข้อ
            </div>
          </div>

          {/* 3: Writing count */}
          <div
            className="p-6 bg-white rounded-[24px] space-y-3 border-2 border-[#EEE6D6] hover:border-orange-300 transition-all"
          >
            <div className="flex items-center justify-between text-sm font-extrabold" style={{ color: '#2A1F4A' }}>
              <span>งานเขียนและบันทึก</span>
              <Clock className="w-5 h-5 text-orange-500" />
            </div>
            <div
              className="text-4xl font-[900]"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              {totalWritingCount}{' '}
              <span className="text-base font-extrabold text-[#6E6690]">ชิ้น</span>
            </div>
            <div className="text-sm text-[#8A4A00] font-extrabold">
              บันทึกเก็บไว้เทียบพัฒนาการ
            </div>
            <div className="text-xs text-[#6E6690] font-semibold">
              พร้อมครู AI ตรวจและช่วยเกลา
            </div>
          </div>

          {/* 4: Vocab saved */}
          <div
            className="p-6 bg-white rounded-[24px] space-y-3 border-2 border-[#EEE6D6] hover:border-green-300 transition-all"
          >
            <div className="flex items-center justify-between text-sm font-extrabold" style={{ color: '#2A1F4A' }}>
              <span>คำศัพท์ที่บันทึก</span>
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div
              className="text-4xl font-[900]"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              {appData?.saved_vocabulary?.length || 0}{' '}
              <span className="text-base font-extrabold text-[#6E6690]">คำ</span>
            </div>
            <div className="text-sm font-extrabold text-[#16A34A]">
              ในสมุดคำศัพท์ส่วนตัว
            </div>
            <div className="text-xs text-[#6E6690] font-semibold">
              จากทั้งหมด 1,600+ Chunks
            </div>
          </div>
        </div>

        {/* Phase Mastery Cards (6 Phases) */}
        <section
          className="p-6 sm:p-8 bg-white rounded-[28px] space-y-6"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="space-y-1">
            <h2
              className="text-2xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              ความก้าวหน้าราย Phase (6 ระดับการเรียนรู้)
            </h2>
            <p className="text-sm font-semibold text-[#6E6690]">
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
                  className={`p-5 rounded-[22px] border-2 space-y-3 transition-all ${
                    isPhaseDone
                      ? 'bg-[#E6F9C4]/40 border-[#C8F04A]'
                      : 'bg-[#FFF9EE] border-[#EEE6D6]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-extrabold">
                    <span
                      className="px-3 py-0.5 rounded-full"
                      style={{ background: '#FFE7C2', color: '#8A4A00' }}
                    >
                      Phase {p.phase} • {p.cefr}
                    </span>
                    <span style={{ color: isPhaseDone ? '#16A34A' : '#6E6690' }}>
                      {finishedInPhase}/{phaseLessons.length} วัน ({phasePct}%)
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-base font-extrabold"
                      style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#6E6690] mt-1 line-clamp-2 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-[#EEE6D6]">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isPhaseDone ? 'bg-[#16A34A]' : 'bg-[#6C4CF1]'
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
        <section
          className="p-6 sm:p-8 bg-white rounded-[28px] space-y-6"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="space-y-1">
            <h2
              className="text-2xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              ความคืบหน้ารายโมดูล (36 สัปดาห์)
            </h2>
            <p className="text-sm font-semibold text-[#6E6690]">
              โมดูลละ 7 วัน พร้อมแบบทบทวนและหมุดหมายวัดผลระดับสากล
            </p>
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
                  className="p-5 bg-[#FFF9EE] rounded-[22px] space-y-3 border-2 border-[#EEE6D6] hover:border-[#6C4CF1] transition-all"
                >
                  <div className="flex items-center justify-between text-sm font-extrabold">
                    <div className="flex items-center gap-1.5">
                      <span style={{ color: '#2A1F4A' }}>
                        โมดูล {week.week}
                      </span>
                      {week.cefr_level && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#F4F0FF] text-[#6C4CF1] font-mono font-bold">
                          {week.cefr_level}
                        </span>
                      )}
                    </div>
                    <span style={{ color: isWeekDone ? '#16A34A' : '#6E6690' }}>
                      {finishedInWeek}/7 วัน
                    </span>
                  </div>

                  <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-[#EEE6D6]">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isWeekDone ? 'bg-[#16A34A]' : 'bg-[#6C4CF1]'
                      }`}
                      style={{ width: `${(finishedInWeek / 7) * 100}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm pt-1 gap-2">
                    <span className="text-[#6E6690] text-xs font-semibold truncate max-w-[170px]" title={week.title}>
                      {week.title}
                    </span>
                    <Link
                      href={`/weeks/${week.week}`}
                      className="text-[#6C4CF1] text-xs font-extrabold hover:underline inline-flex items-center gap-0.5 shrink-0"
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
    </div>
  );
}
