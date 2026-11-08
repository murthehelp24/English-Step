'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllWeeks, getAllLessons, getAllPhases } from '@/lib/curriculum';
import { getStoredData } from '@/lib/storage';
import { StoredAppData } from '@/types/learning';
import { Search, CheckCircle2, ArrowUpRight } from 'lucide-react';

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
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Nordic Bright Header Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
              Master Track 252 วัน
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-background text-foreground text-xs font-bold border border-border">
              6 Phases • 36 โมดูล
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            คลังบทเรียน 36 สัปดาห์
          </h1>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            เส้นทางการเรียนรู้ภาษาอังกฤษตั้งแต่ศูนย์ (Pre-A1) สู่ความคล่องตัวใช้งานจริง (High B2 / C1) ตามหลัก Paul Nation’s Four Strands
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full lg:w-80">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นตามหัวข้อ หรือเนื้อหา..."
            className="w-full bg-background border-2 border-control-border rounded-xl pl-11 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Phase Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedPhase('all')}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            selectedPhase === 'all'
              ? 'bg-dark-chip text-dark-chip-fg shadow-sm'
              : 'bg-surface text-muted-foreground hover:text-foreground'
          }`}
        >
          ทั้งหมด (36 โมดูล)
        </button>
        {phases.map((p) => (
          <button
            key={p.phase}
            onClick={() => setSelectedPhase(p.phase)}
            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              selectedPhase === p.phase
                ? 'bg-dark-chip text-dark-chip-fg shadow-sm'
                : 'bg-surface text-muted-foreground hover:text-foreground'
            }`}
          >
            Phase {p.phase}: {p.cefr}
          </button>
        ))}
      </div>

      {/* Weeks List */}
      <div className="space-y-6">
        {filteredWeeks.length === 0 ? (
          <div className="bg-surface rounded-2xl p-10 text-center space-y-2">
            <div className="text-lg font-extrabold text-foreground">ไม่พบบทเรียนที่ตรงกับคำค้นหา</div>
            <p className="text-sm text-muted-foreground">
              ลองค้นด้วยคำภาษาอังกฤษสั้นๆ หรือเลือกตัวกรอง Phase อื่นดูครับ
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
                className="p-6 sm:p-8 bg-surface rounded-2xl space-y-6"
              >
                {/* Week Title & Summary */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                        สัปดาห์ที่ {String(week.week).padStart(2, '0')}
                      </span>
                      {week.cefr_level && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-background text-foreground text-xs font-bold border border-border">
                          {week.cefr_level}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      {week.title}
                    </h2>
                    {week.summary && (
                      <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
                        {week.summary}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm flex-shrink-0">
                    <span className="px-3.5 py-1.5 rounded-full bg-background font-bold text-muted-foreground">
                      จบแล้ว {completedCount}/{week.lessons.length} วัน
                    </span>
                    <Link
                      href={`/weeks/${week.week}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-background text-foreground hover:text-accent font-bold transition-colors border border-border"
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
                        className={`p-5 rounded-xl transition-all group flex flex-col justify-between gap-4 ${
                          isCompleted
                            ? 'bg-success-bg hover:opacity-90'
                            : 'bg-background hover:ring-2 hover:ring-accent border border-border/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold mb-2">
                            <span className={isCompleted ? 'text-success' : 'text-accent'}>
                              วันที่ {lesson.day} • {lesson.type === 'assessment' ? 'หมุดหมายวัดผล' : lesson.type === 'review' ? 'ทบทวนสัปดาห์' : 'บทเรียน'}
                            </span>
                            {isCompleted ? (
                              <span className="inline-flex items-center gap-1 text-success">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>จบแล้ว</span>
                              </span>
                            ) : (
                              <span className="text-muted-foreground">{lesson.minutes} นาที</span>
                            )}
                          </div>
                          <h3 className="text-base font-extrabold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                            {lesson.objective}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-border text-xs font-semibold text-muted-foreground flex items-center justify-between">
                          <span>
                            ศัพท์ {lesson.vocabCount || 6} คำ · แบบฝึก {lesson.exerciseCount || 8} ข้อ
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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
  );
}
