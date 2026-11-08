'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllWeeks, getAllLessons, getAllPhases } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { Search, CheckCircle2, ArrowUpRight, Sparkles, Map } from 'lucide-react';

export default function WeeksArchivePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [appData, setAppData] = useState<StoredAppData | null>(null);

  const phases = getAllPhases();
  const weeks = getAllWeeks();
  const allLessons = getAllLessons();

  useEffect(() => {
    const load = () => setAppData(getStoredData());
    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const filteredWeeks = weeks
    .filter((w) => selectedPhase === 'all' || (w.phase ?? 0) === selectedPhase)
    .map((w) => {
      const weekLessons = allLessons.filter((l) => l.week === w.week);
      if (!searchQuery.trim()) {
        return { ...w, lessons: weekLessons };
      }
      const q = searchQuery.toLowerCase();
      const matched = weekLessons.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.objective.toLowerCase().includes(q) ||
          (l.headlineEnglish && l.headlineEnglish.toLowerCase().includes(q)) ||
          (l.headlineThai && l.headlineThai.includes(q)) ||
          (l.cefr_level && l.cefr_level.toLowerCase().includes(q))
      );
      return { ...w, lessons: matched };
    })
    .filter((w) => w.lessons.length > 0);

  return (
    <div
      className="min-h-screen py-8 sm:py-10 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Header Block */}
        <div
          className="bg-white rounded-[28px] p-6 sm:p-9 space-y-6"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold"
                  style={{ background: '#FFE7C2', color: '#8A4A00' }}
                >
                  <Map className="w-4 h-4 text-orange-600" />
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
                คลังบทเรียน 36 สัปดาห์
              </h1>
              <p className="text-base font-semibold max-w-xl leading-relaxed" style={{ color: '#6E6690' }}>
                เส้นทางการเรียนรู้ภาษาอังกฤษตั้งแต่ศูนย์ (Pre-A1) สู่ความคล่องตัวใช้งานจริง (High B2 / C1) ตามหลัก Paul Nation&apos;s Four Strands
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-80">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6C4CF1]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นตามหัวข้อ หรือเนื้อหา..."
                className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-full pl-12 pr-4 py-3 text-base font-semibold text-[#2A1F4A] placeholder:text-[#6E6690] focus:border-[#6C4CF1] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Phase Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-[#EEE6D6]">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                selectedPhase === 'all'
                  ? 'bg-[#6C4CF1] text-white shadow-sm'
                  : 'bg-[#FFF9EE] text-[#6E6690] hover:text-[#2A1F4A] border border-[#EEE6D6]'
              }`}
            >
              ทั้งหมด (36 โมดูล)
            </button>
            {phases.map((p) => {
              const isSelected = selectedPhase === p.phase;
              return (
                <button
                  key={p.phase}
                  onClick={() => setSelectedPhase(p.phase)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#6C4CF1] text-white shadow-sm'
                      : 'bg-[#FFF9EE] text-[#6E6690] hover:text-[#2A1F4A] border border-[#EEE6D6]'
                  }`}
                >
                  Phase {p.phase}: {p.cefr}
                </button>
              );
            })}
          </div>
        </div>

        {/* Weeks List */}
        <div className="space-y-6">
          {filteredWeeks.length === 0 ? (
            <div
              className="bg-white rounded-[28px] p-12 text-center space-y-3"
              style={{ border: '2px solid #EEE6D6' }}
            >
              <div className="text-4xl">🔍</div>
              <div className="text-xl font-extrabold" style={{ color: '#2A1F4A' }}>
                ไม่พบบทเรียนที่ตรงกับคำค้นหา
              </div>
              <p className="text-sm font-semibold" style={{ color: '#6E6690' }}>
                ลองค้นด้วยคำสั้นๆ หรือเปลี่ยนตัวกรอง Phase ดูนะครับ
              </p>
            </div>
          ) : (
            filteredWeeks.map((week) => {
              const completedCount = week.lessons.filter(
                (l) => appData?.lessons_progress[l.id]?.status === 'completed'
              ).length;

              return (
                <section
                  key={week.week}
                  className="p-6 sm:p-8 bg-white rounded-[28px] space-y-6 transition-all hover:shadow-sm"
                  style={{ border: '2px solid #EEE6D6' }}
                >
                  {/* Week Title & Summary */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EEE6D6]">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full font-extrabold text-xs"
                          style={{ background: '#FFE7C2', color: '#8A4A00' }}
                        >
                          สัปดาห์ที่ {String(week.week).padStart(2, '0')}
                        </span>
                        {week.cefr_level && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#F4F0FF] text-[#6C4CF1] text-xs font-extrabold">
                            {week.cefr_level}
                          </span>
                        )}
                        <span className="px-3 py-0.5 rounded-full bg-[#E6F9C4] text-[#3A6B0A] text-xs font-extrabold">
                          จบแล้ว {completedCount}/{week.lessons.length} วัน
                        </span>
                      </div>
                      <h2
                        className="text-xl sm:text-2xl font-[900] tracking-tight"
                        style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                      >
                        {week.title}
                      </h2>
                      {week.summary && (
                        <p className="text-sm font-semibold max-w-3xl leading-relaxed" style={{ color: '#6E6690' }}>
                          {week.summary}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <Link
                        href={`/weeks/${week.week}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F4F0FF] text-[#6C4CF1] border border-[#E8E0FF] hover:bg-[#6C4CF1] hover:text-white font-extrabold text-sm transition-all"
                      >
                        <span>ดูภาพรวมสัปดาห์</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Lessons Grid inside Week */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {week.lessons.map((lesson) => {
                      const prog = appData?.lessons_progress[lesson.id];
                      const isCompleted = prog?.status === 'completed';

                      return (
                        <Link
                          key={lesson.id}
                          href={`/lessons/${lesson.id}`}
                          className={`p-5 rounded-[22px] transition-all group flex flex-col justify-between gap-4 border-2 ${
                            isCompleted
                              ? 'bg-[#E6F9C4]/40 border-[#C8F04A] hover:bg-[#E6F9C4]/60'
                              : 'bg-[#FFF9EE] border-[#EEE6D6] hover:border-[#6C4CF1]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs font-extrabold mb-2">
                              <span style={{ color: isCompleted ? '#16A34A' : '#6C4CF1' }}>
                                วันที่ {lesson.day} • {lesson.type === 'assessment' ? 'หมุดหมายวัดผล' : lesson.type === 'review' ? 'ทบทวนสัปดาห์' : 'บทเรียน'}
                              </span>
                              {isCompleted ? (
                                <span className="inline-flex items-center gap-1 text-[#16A34A] font-extrabold">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span>จบแล้ว</span>
                                </span>
                              ) : (
                                <span className="text-[#6E6690]">{lesson.minutes || 60} นาที</span>
                              )}
                            </div>
                            <h3
                              className="text-base font-extrabold transition-colors line-clamp-2"
                              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                            >
                              {lesson.title}
                            </h3>
                            <p className="text-sm font-medium mt-1.5 line-clamp-2 leading-relaxed" style={{ color: '#6E6690' }}>
                              {lesson.objective}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#EEE6D6] text-xs font-bold text-[#6E6690] flex items-center justify-between">
                            <span>
                              ศัพท์ {lesson.vocabCount || 6} คำ · แบบฝึก {lesson.exerciseCount || 8} ข้อ
                            </span>
                            <span className="text-[#6C4CF1] font-extrabold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                              เข้าเรียน →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
