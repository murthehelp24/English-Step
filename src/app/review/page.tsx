'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredData, submitReviewAttempt, recordMistake } from '@/lib/storage';
import { StoredAppData, ReviewItem } from '@/types/learning';
import { Check, X, ArrowRight, ArrowUpRight, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReviewPage() {
  const [appData, setAppData] = useState<StoredAppData | null>(null);
  const [activeTab, setActiveTab] = useState<'due' | 'all'>('due');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [feedbackMap, setFeedbackMap] = useState<Record<string, { isCorrect: boolean; submittedAnswer: string }>>({});

  useEffect(() => {
    const load = () => setAppData(getStoredData());
    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const now = new Date();
  const allReviews = appData?.review_items || [];
  const dueReviews = allReviews.filter((item) => new Date(item.next_due_at) <= now);
  const displayItems = activeTab === 'due' ? dueReviews : allReviews;

  const handleAnswerSubmit = (item: ReviewItem) => {
    const rawUser = userAnswers[item.id] || '';
    const userAns = rawUser.trim().toLowerCase();
    const targetAns = item.correct_answer.trim().toLowerCase();

    const cleanUser = userAns.replace(/[.,!?]/g, '');
    const cleanTarget = targetAns.replace(/[.,!?]/g, '');
    const isCorrect = cleanUser === cleanTarget;

    submitReviewAttempt(item.id, rawUser, isCorrect);
    setFeedbackMap((prev) => ({
      ...prev,
      [item.id]: { isCorrect, submittedAnswer: rawUser.trim() },
    }));
    setAppData(getStoredData());

    if (isCorrect) {
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#6C4CF1', '#FF7AA8', '#C8F04A'],
        });
      } catch {}
    }
  };

  const handleAddSampleMistake = () => {
    recordMistake(
      'day-001',
      'ตัวอักษรใหญ่และเล็ก',
      'gap',
      'เติมคำจากรูปประโยคที่เรียน: A is a ____.',
      'book',
      'letter',
      'ภาษาอังกฤษมีตัวอักษร 26 ตัว A คือตัวอักษรหนึ่งตัว (letter)',
      'gap'
    );
    setAppData(getStoredData());
  };

  const stageIntervals = ['1 วัน', '3 วัน', '7 วัน', '14 วัน'];

  return (
    <div
      className="min-h-screen py-8 sm:py-10 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Header Block (Sunny Rose Card) */}
        <div
          className="rounded-[28px] p-6 sm:p-9 space-y-6"
          style={{ background: '#FFE4EE', border: '2px solid #FFD0E0' }}
        >
          <div className="space-y-3">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-white shadow-xs"
              style={{ color: '#C24A6E' }}
            >
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>สมุดทบทวน Spaced Repetition</span>
            </span>
            <h1
              className="text-3xl sm:text-4xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              สมุดทบทวนข้อผิดพลาด 💪
            </h1>
            <p className="text-base font-semibold max-w-2xl leading-relaxed" style={{ color: '#6E6690' }}>
              ระบบทบทวนตามระยะห่าง 1, 3, 7 และ 14 วัน หยิบคำที่เคยเขียนผิดมาลองฝึกใหม่ให้จำได้ขึ้นใจ ไม่ต้องกลัวผิด ยิ่งแก้ ยิ่งจำแม่น
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setActiveTab('due')}
              className={`px-5 py-2.5 text-sm font-extrabold rounded-full transition-all shadow-xs ${
                activeTab === 'due'
                  ? 'bg-[#FF7AA8] text-white shadow-sm'
                  : 'bg-white text-[#2A1F4A] border border-pink-200 hover:bg-white/80'
              }`}
            >
              ถึงกำหนดทบทวน ({dueReviews.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 text-sm font-extrabold rounded-full transition-all shadow-xs ${
                activeTab === 'all'
                  ? 'bg-[#FF7AA8] text-white shadow-sm'
                  : 'bg-white text-[#2A1F4A] border border-pink-200 hover:bg-white/80'
              }`}
            >
              รายการทั้งหมด ({allReviews.length})
            </button>
          </div>
        </div>

        {/* Review Content */}
        <div>
          {displayItems.length === 0 ? (
            <div
              className="p-10 sm:p-14 text-center bg-white rounded-[28px] space-y-4"
              style={{ border: '2px solid #EEE6D6' }}
            >
              <div className="text-5xl">🎉</div>
              <div
                className="text-2xl font-[900]"
                style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
              >
                {activeTab === 'due'
                  ? 'ไม่มีข้อผิดพลาดที่ถึงกำหนดทบทวนในตอนนี้!'
                  : 'ยังไม่มีข้อผิดพลาดที่บันทึกไว้'}
              </div>
              <p className="text-base font-semibold max-w-lg mx-auto leading-relaxed" style={{ color: '#6E6690' }}>
                เมื่อคุณทำแบบฝึกหัดในบทเรียนแล้วตอบผิด ระบบจะบันทึกข้อนั้นไว้ในสมุดทบทวนนี้โดยอัตโนมัติ เพื่อกระจายเวลาเตือนให้ทบทวนซ้ำ
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleAddSampleMistake}
                  className="inline-flex items-center gap-2 text-sm font-extrabold bg-[#FFF9EE] border-2 border-[#EEE6D6] px-6 py-3 rounded-full text-[#6C4CF1] hover:bg-[#F4F0FF] transition-all"
                >
                  <span>ลองเพิ่มโจทย์ตัวอย่างสำหรับทดสอบ</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {displayItems.map((item) => {
                const feedback = feedbackMap[item.id];
                const mistakeRecord = appData?.mistakes.find((m) => m.id === item.mistake_id);
                const stageLabel = stageIntervals[Math.min(Math.max(item.stage - 1, 0), 3)];

                return (
                  <article
                    key={item.id}
                    className="p-6 sm:p-8 bg-white rounded-[28px] space-y-5 transition-all hover:shadow-sm"
                    style={{ border: '2px solid #EEE6D6' }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="px-3.5 py-1 rounded-full font-extrabold text-xs"
                          style={{ background: '#FFE7C2', color: '#8A4A00' }}
                        >
                          ขั้นที่ {item.stage}/4 • ระยะ {stageLabel}
                        </span>
                        <Link
                          href={`/lessons/${item.lesson_id}`}
                          className="font-extrabold hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                          style={{ color: '#6C4CF1' }}
                        >
                          <span>{mistakeRecord?.lesson_title || 'บทเรียนต้นทาง'}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: '#6E6690' }}>
                        <Calendar className="w-4 h-4 text-[#FF7AA8]" />
                        <span>
                          กำหนดทบทวน: {new Date(item.next_due_at).toLocaleDateString('th-TH')}
                        </span>
                      </div>
                    </div>

                    {/* Prompt */}
                    <div
                      className="text-lg sm:text-xl font-extrabold leading-relaxed whitespace-pre-line"
                      style={{ color: '#2A1F4A' }}
                    >
                      {item.prompt}
                    </div>

                    {/* Review Answer Input / Results */}
                    {!feedback ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if ((userAnswers[item.id] || '').trim()) {
                            handleAnswerSubmit(item);
                          }
                        }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
                      >
                        <input
                          type="text"
                          value={userAnswers[item.id] || ''}
                          onChange={(e) =>
                            setUserAnswers((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          placeholder="ลองพิมพ์คำตอบที่ถูกต้อง..."
                          className="flex-1 bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-full px-5 py-3.5 text-base sm:text-lg font-bold text-[#2A1F4A] placeholder:text-[#6E6690] focus:border-[#6C4CF1] focus:outline-none"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        />
                        <button
                          type="submit"
                          disabled={!(userAnswers[item.id] || '').trim()}
                          className="inline-flex items-center justify-center gap-2 bg-[#FF7AA8] text-white text-base font-[900] px-7 py-3.5 rounded-full hover:bg-pink-600 disabled:opacity-40 transition-all shadow-sm active:scale-95 whitespace-nowrap"
                        >
                          <span>ตรวจคำตอบ</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-4 pt-1">
                        <div
                          className={`p-4 rounded-2xl text-base font-extrabold flex items-center gap-3 border ${
                            feedback.isCorrect
                              ? 'bg-[#E6F9C4] border-[#C8F04A] text-[#1D5E06]'
                              : 'bg-[#FFE4EE] border-pink-200 text-[#C24A6E]'
                          }`}
                        >
                          {feedback.isCorrect ? (
                            <>
                              <Check className="w-5 h-5 text-green-600 stroke-[3] shrink-0" />
                              <span>ถูกต้องครับ! เลื่อนระยะทบทวนไปขั้นถัดไปแล้ว 🎉</span>
                            </>
                          ) : (
                            <>
                              <X className="w-5 h-5 text-pink-600 stroke-[3] shrink-0" />
                              <span>ยังไม่ตรงกับเฉลย ระบบจะนัดกลับมาทบทวนใหม่ใน 1 วันครับ</span>
                            </>
                          )}
                        </div>

                        <div className="p-5 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] space-y-2.5">
                          {!feedback.isCorrect && feedback.submittedAnswer && (
                            <div className="text-sm font-semibold line-through text-[#C24A6E]">
                              คำตอบล่าสุด: {feedback.submittedAnswer}
                            </div>
                          )}
                          {mistakeRecord?.original_answer && (
                            <div className="text-xs font-semibold line-through text-[#C24A6E]/80">
                              ที่เคยตอบผิดเดิม: {mistakeRecord.original_answer}
                            </div>
                          )}
                          <div
                            className="text-lg sm:text-xl font-[900] text-[#1D5E06] flex items-center gap-2"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                            <span>เฉลย: {item.correct_answer}</span>
                          </div>
                          {item.explanation && (
                            <div className="text-sm sm:text-base text-[#4B3F72] pt-2 border-t border-[#EEE6D6] leading-relaxed font-medium">
                              <span className="font-extrabold text-[#2A1F4A]">คำอธิบาย: </span>
                              {item.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
