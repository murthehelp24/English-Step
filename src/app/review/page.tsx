'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStoredData, submitReviewAttempt, recordMistake } from '@/lib/storage';
import { StoredAppData, ReviewItem } from '@/types/learning';
import { Check, X, ArrowRight, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
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
          particleCount: 35,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#FF5A1F', '#FFE28A', '#15803D', '#1D72D8'],
        });
      } catch {}
    }
  };

  // Add sample demo mistake if review is empty, so user can test right away
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
    <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8 transition-colors duration-200">
      {/* Header Block (Soft Sky Mist) */}
      <div className="bg-review-surface rounded-3xl p-6 sm:p-9 space-y-6 border border-review-accent/20">
        <div className="space-y-2">
          <span className="inline-block px-3.5 py-1 rounded-full bg-background text-review-accent text-sm font-bold">
            สมุดทบทวน Spaced Repetition
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            สมุดทบทวนข้อผิดพลาด
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            ระบบทบทวนตามระยะห่าง 1, 3, 7 และ 14 วัน หยิบคำที่เคยเขียนผิดมาลองฝึกใหม่ให้จำได้ขึ้นใจ
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('due')}
            className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'due'
                ? 'bg-review-accent text-review-accent-fg'
                : 'bg-background text-foreground hover:opacity-85'
            }`}
          >
            ถึงกำหนดทบทวน ({dueReviews.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-review-accent text-review-accent-fg'
                : 'bg-background text-foreground hover:opacity-85'
            }`}
          >
            รายการทั้งหมด ({allReviews.length})
          </button>
        </div>
      </div>

      {/* Review Content */}
      <div>
        {displayItems.length === 0 ? (
          <div className="p-10 sm:p-12 text-center bg-surface rounded-2xl space-y-4">
            <CheckCircle2 className="w-12 h-12 text-success mx-auto" />
            <div className="text-xl font-extrabold text-foreground">
              {activeTab === 'due'
                ? 'ไม่มีข้อผิดพลาดที่ถึงกำหนดทบทวนในตอนนี้!'
                : 'ยังไม่มีข้อผิดพลาดที่บันทึกไว้'}
            </div>
            <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              เมื่อคุณทำแบบฝึกหัดในบทเรียนแล้วตอบผิด ระบบจะบันทึกข้อนั้นไว้ในสมุดทบทวนนี้โดยอัตโนมัติ
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAddSampleMistake}
                className="inline-flex items-center gap-2 text-sm font-bold bg-background px-5 py-3 rounded-xl text-foreground hover:text-accent transition-colors"
              >
                <span>เพิ่มโจทย์ตัวอย่างสำหรับทดสอบ</span>
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
                  className="p-6 sm:p-8 bg-surface rounded-2xl space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg font-bold text-xs sm:text-sm">
                        ขั้นที่ {item.stage}/4 • ระยะ {stageLabel}
                      </span>
                      <Link
                        href={`/lessons/${item.lesson_id}`}
                        className="font-bold text-review-accent hover:underline inline-flex items-center gap-1"
                      >
                        <span>{mistakeRecord?.lesson_title || 'บทเรียนต้นทาง'}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>
                        กำหนดทบทวน: {new Date(item.next_due_at).toLocaleDateString('th-TH')}
                      </span>
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="text-lg sm:text-xl font-extrabold text-foreground leading-relaxed">
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
                        className="flex-1 bg-background border-2 border-control-border rounded-xl px-4 py-3.5 text-base sm:text-lg font-display text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={!(userAnswers[item.id] || '').trim()}
                        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-base font-extrabold px-6 py-3.5 rounded-xl hover:brightness-105 disabled:opacity-40 transition-all"
                      >
                        <span>ตรวจคำตอบ</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4 pt-1">
                      <div
                        className={`p-4 rounded-xl text-base font-bold flex items-center gap-3 ${
                          feedback.isCorrect
                            ? 'bg-success-bg text-success'
                            : 'bg-error-bg text-error'
                        }`}
                      >
                        {feedback.isCorrect ? (
                          <>
                            <Check className="w-5 h-5 text-success flex-shrink-0" />
                            <span>ถูกต้องครับ! เลื่อนระยะทบทวนไปขั้นถัดไปแล้ว</span>
                          </>
                        ) : (
                          <>
                            <X className="w-5 h-5 text-error flex-shrink-0" />
                            <span>ยังไม่ตรงกับเฉลย ระบบจะนัดกลับมาทบทวนใหม่ใน 1 วันครับ</span>
                          </>
                        )}
                      </div>

                      <div className="p-5 bg-background rounded-xl space-y-2.5">
                        {!feedback.isCorrect && feedback.submittedAnswer && (
                          <div className="font-display text-base line-through text-error">
                            คำตอบล่าสุด: {feedback.submittedAnswer}
                          </div>
                        )}
                        {mistakeRecord?.original_answer && (
                          <div className="font-display text-sm line-through text-error/90">
                            ที่เคยตอบผิดเดิม: {mistakeRecord.original_answer}
                          </div>
                        )}
                        <div className="font-display text-lg sm:text-xl font-extrabold text-success flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                          <span>เฉลย: {item.correct_answer}</span>
                        </div>
                        {item.explanation && (
                          <div className="text-sm sm:text-base text-muted-foreground pt-2 border-t border-border leading-relaxed">
                            <span className="font-bold text-foreground">คำอธิบาย: </span>
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
  );
}
