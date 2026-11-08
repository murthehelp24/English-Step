'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonById, getAllLessons } from '@/lib/curriculum';
import {
  getLessonProgress,
  completeLesson,
  saveWritingSubmission,
  toggleSaveVocabulary,
  isVocabularySaved,
} from '@/lib/storage';
import { LessonProgress } from '@/types/learning';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import { ExerciseCard } from '@/components/lessons/ExerciseCard';
import { TutorChatPanel } from '@/components/lessons/TutorChatPanel';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  MessageSquare,
  Check,
  List,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export default function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = use(params);
  const lesson = getLessonById(resolvedParams.id);

  if (!lesson) {
    notFound();
  }

  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentExIndex, setCurrentExIndex] = useState<number>(0);
  const [showAllExercises, setShowAllExercises] = useState<boolean>(false);
  const [showTutorOnDesktop, setShowTutorOnDesktop] = useState<boolean>(true);
  const [mobileTab, setMobileTab] = useState<'study' | 'tutor'>('study');
  const [writingInput, setWritingInput] = useState('');
  const [savedVocabMap, setSavedVocabMap] = useState<Record<string, boolean>>({});
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  useEffect(() => {
    const prog = getLessonProgress(lesson.id);
    setProgress(prog);
    setWritingInput(prog.writing_submission || '');

    const vMap: Record<string, boolean> = {};
    lesson.vocabulary.forEach((v) => {
      vMap[v.en] = isVocabularySaved(v.en);
    });
    setSavedVocabMap(vMap);
    setCurrentStep(1);
    setCurrentExIndex(0);
  }, [lesson.id, lesson.vocabulary]);

  const handleToggleVocab = (enWord: string) => {
    const isNowSaved = toggleSaveVocabulary(enWord);
    setSavedVocabMap((prev) => ({ ...prev, [enWord]: isNowSaved }));
  };

  const handleWritingChange = (text: string) => {
    setWritingInput(text);
    setSaveStatus('saving');
    saveWritingSubmission(lesson.id, text);
    setTimeout(() => setSaveStatus('saved'), 450);
  };

  const handleCompleteLesson = () => {
    completeLesson(lesson.id);
    setProgress(getLessonProgress(lesson.id));
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF5A1F', '#FFE28A', '#15803D', '#1D72D8'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const isCompleted = progress?.status === 'completed';
  const attemptsCount = Object.keys(progress?.attempts || {}).length;
  const totalExercises = lesson.exercises.length;

  const steps = [
    { id: 1, label: '1. ปูพื้นฐาน' },
    { id: 2, label: '2. คำศัพท์' },
    { id: 3, label: '3. ฝึกฟังและอ่าน' },
    { id: 4, label: `4. แบบฝึก (${attemptsCount}/${totalExercises})` },
    { id: 5, label: '5. เขียนและจบบท' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-7 space-y-6 transition-colors duration-200">
      {/* Top Bar: Back Link, Title, Save Status & AI Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-border">
        <div className="space-y-1">
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/"
              className="font-bold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>กลับหน้าแรก</span>
            </Link>
            <span className="text-border">|</span>
            <span className="font-bold text-accent">
              สัปดาห์ที่ {lesson.week} • วันที่ {lesson.day} จาก 112
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {lesson.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
              saveStatus === 'saved'
                ? 'bg-success-bg text-success'
                : 'bg-lesson-badge text-lesson-badge-fg'
            }`}
          >
            {saveStatus === 'saved' ? '✓ บันทึกอัตโนมัติแล้ว' : 'กำลังบันทึก...'}
          </span>

          {isCompleted && (
            <span className="inline-flex items-center gap-1.5 bg-success-bg text-success text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5" />
              <span>เรียนจบแล้ว</span>
            </span>
          )}

          <button
            type="button"
            onClick={() => setShowTutorOnDesktop(!showTutorOnDesktop)}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-review-surface text-review-accent text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{showTutorOnDesktop ? 'ซ่อนครู AI' : 'เปิดครู AI'}</span>
          </button>
        </div>
      </div>

      {/* Stepper Navigation Pills (Nordic Bright style) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {steps.map((st) => {
          const isActive = currentStep === st.id;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => {
                setCurrentStep(st.id);
                setMobileTab('study');
              }}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface text-muted-foreground hover:text-foreground'
              }`}
            >
              {st.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Study / Tutor Switcher */}
      <div className="lg:hidden flex gap-2 bg-surface p-1 rounded-xl">
        <button
          type="button"
          onClick={() => setMobileTab('study')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors ${
            mobileTab === 'study'
              ? 'bg-background text-foreground'
              : 'text-muted-foreground'
          }`}
        >
          เนื้อหาบทเรียน
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('tutor')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors ${
            mobileTab === 'tutor'
              ? 'bg-background text-review-accent'
              : 'text-muted-foreground'
          }`}
        >
          ถามครู AI
        </button>
      </div>

      {/* Main Content Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Step Focus Area */}
        <div
          className={`${
            showTutorOnDesktop ? 'lg:col-span-7' : 'lg:col-span-12'
          } space-y-6 ${mobileTab === 'study' ? 'block' : 'hidden lg:block'}`}
        >
          {/* STEP 1: Foundation & Explanation */}
          {currentStep === 1 && (
            <section className="bg-lesson-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                  ขั้นตอนที่ 1 จาก 5 • ทำความเข้าใจ
                </span>
                <h2 className="text-2xl font-extrabold text-foreground mt-3">
                  จุดประสงค์และคำอธิบายวันนี้
                </h2>
              </div>

              <div className="bg-background rounded-xl p-5 sm:p-6 space-y-4">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wide mb-1">
                    สิ่งที่คุณจะได้เรียนรู้
                  </div>
                  <p className="text-lg font-bold text-foreground leading-relaxed">
                    {lesson.objective}
                  </p>
                </div>

                <div className="pt-4 border-t border-border text-base sm:text-lg text-foreground/90 leading-relaxed">
                  {lesson.explanation}
                </div>
              </div>

              {lesson.extra && (
                <div className="bg-background rounded-xl p-5 space-y-2">
                  <div className="text-sm font-bold text-muted-foreground">ข้อมูลอ้างอิงเพิ่มเติม</div>
                  <div className="font-display text-base sm:text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                    {lesson.extra}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* STEP 2: Vocabulary */}
          {currentStep === 2 && (
            <section className="bg-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                    ขั้นตอนที่ 2 จาก 5 • คำศัพท์สำคัญ
                  </span>
                  <h2 className="text-2xl font-extrabold text-foreground mt-3">
                    คำศัพท์วันนี้ ({lesson.vocabulary.length} คำ)
                  </h2>
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  กดฟังเสียงทีละคำได้เลยครับ
                </span>
              </div>

              <div className="space-y-3">
                {lesson.vocabulary.map((vocab, i) => (
                  <div
                    key={i}
                    className="p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-display text-2xl font-extrabold text-foreground">
                          {vocab.en}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleToggleVocab(vocab.en)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            savedVocabMap[vocab.en]
                              ? 'bg-lesson-surface text-accent'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                          title={savedVocabMap[vocab.en] ? 'บันทึกแล้ว' : 'บันทึกเข้าสมุดคำศัพท์'}
                          aria-label={savedVocabMap[vocab.en] ? 'ยกเลิกบันทึกคำศัพท์' : 'บันทึกคำศัพท์'}
                        >
                          <Bookmark className={`w-4 h-4 ${savedVocabMap[vocab.en] ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <div className="text-base text-muted-foreground font-medium">
                        แปลว่า: <span className="text-foreground font-bold">{vocab.th}</span>
                      </div>
                    </div>
                    <div className="self-start sm:self-center">
                      <AudioPlayer text={vocab.en} label="ฟังเสียง" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* STEP 3: Listening & Reading */}
          {currentStep === 3 && (
            <section className="bg-review-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-background text-review-accent text-xs font-bold">
                    ขั้นตอนที่ 3 จาก 5 • ฝึกฟังและอ่าน
                  </span>
                  <h2 className="text-2xl font-extrabold text-foreground mt-3">
                    ฟังเสียงแล้วลองอ่านตาม
                  </h2>
                </div>
                <AudioPlayer text={lesson.reading} label="ฟังบทอ่านทั้งหมด" slowRate />
              </div>

              {/* Full Reading Box */}
              <div className="p-6 bg-background rounded-xl space-y-2">
                <div className="text-xs font-bold text-muted-foreground uppercase">บทอ่านประจำวัน</div>
                <div className="font-display text-xl sm:text-2xl font-bold text-foreground leading-relaxed">
                  {lesson.reading}
                </div>
              </div>

              {/* Sentence-by-sentence breakdown */}
              {lesson.examples && lesson.examples.length > 0 && (
                <div className="space-y-3">
                  <div className="text-sm font-bold text-foreground">
                    แยกอ่านทีละประโยคพร้อมคำแปล
                  </div>
                  {lesson.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-display text-lg sm:text-xl font-bold text-foreground">
                          {ex.en}
                        </div>
                        <div className="text-base text-muted-foreground mt-0.5">
                          {ex.th}
                        </div>
                      </div>
                      <div className="self-start sm:self-center">
                        <AudioPlayer text={ex.en} label="ฟัง" slowRate />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {lesson.listening?.note && (
                <div className="text-sm text-muted-foreground bg-background/70 p-4 rounded-xl">
                  คำแนะนำ: {lesson.listening.note}
                </div>
              )}
            </section>
          )}

          {/* STEP 4: Exercises (One-by-one focus mode + toggle all) */}
          {currentStep === 4 && (
            <section className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground">
                    แบบฝึกหัดประจำวัน
                  </h2>
                  <div className="text-sm text-muted-foreground font-medium mt-0.5">
                    ทำแล้ว {attemptsCount} จาก {totalExercises} ข้อ (ตรวจคำตอบทันทีทีละข้อ)
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllExercises(!showAllExercises)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface text-sm font-bold text-foreground hover:opacity-85 transition-opacity"
                >
                  <List className="w-4 h-4" />
                  <span>{showAllExercises ? 'สลับเป็นทีละข้อ' : 'ดูทั้งหมดในหน้าเดียว'}</span>
                </button>
              </div>

              {!showAllExercises ? (
                <div className="space-y-5">
                  {/* Question Selector Numbers */}
                  <div className="flex flex-wrap items-center gap-2">
                    {lesson.exercises.map((ex, idx) => {
                      const att = progress?.attempts[ex.id];
                      const isCurrent = idx === currentExIndex;
                      return (
                        <button
                          key={ex.id}
                          type="button"
                          onClick={() => setCurrentExIndex(idx)}
                          className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                            isCurrent
                              ? 'bg-dark-chip text-dark-chip-fg'
                              : att?.is_correct
                              ? 'bg-success-bg text-success'
                              : att
                              ? 'bg-error-bg text-error'
                              : 'bg-surface text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          ข้อ {idx + 1}
                          {att?.is_correct ? ' ✓' : ''}
                        </button>
                      );
                    })}
                  </div>

                  {/* Single Focused Exercise Card */}
                  {lesson.exercises[currentExIndex] && (
                    <ExerciseCard
                      key={lesson.exercises[currentExIndex].id}
                      lessonId={lesson.id}
                      lessonTitle={lesson.title}
                      exercise={lesson.exercises[currentExIndex]}
                      index={currentExIndex}
                      totalCount={totalExercises}
                      existingAttempt={progress?.attempts[lesson.exercises[currentExIndex].id]}
                      onAttemptSaved={() => setProgress(getLessonProgress(lesson.id))}
                    />
                  )}

                  {/* Quick Prev/Next Question Controls */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      disabled={currentExIndex === 0}
                      onClick={() => setCurrentExIndex((i) => Math.max(0, i - 1))}
                      className="px-4 py-2 rounded-xl bg-surface text-sm font-bold text-foreground disabled:opacity-40 hover:opacity-85 transition-opacity"
                    >
                      ← ข้อก่อนหน้า
                    </button>
                    <button
                      type="button"
                      disabled={currentExIndex >= totalExercises - 1}
                      onClick={() => setCurrentExIndex((i) => Math.min(totalExercises - 1, i + 1))}
                      className="px-4 py-2 rounded-xl bg-surface text-sm font-bold text-foreground disabled:opacity-40 hover:opacity-85 transition-opacity"
                    >
                      ข้อถัดไป →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {lesson.exercises.map((exercise, index) => (
                    <ExerciseCard
                      key={exercise.id}
                      lessonId={lesson.id}
                      lessonTitle={lesson.title}
                      exercise={exercise}
                      index={index}
                      totalCount={totalExercises}
                      existingAttempt={progress?.attempts[exercise.id]}
                      onAttemptSaved={() => setProgress(getLessonProgress(lesson.id))}
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* STEP 5: Writing & Complete Lesson */}
          {currentStep === 5 && (
            <section className="bg-lesson-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                  ขั้นตอนที่ 5 จาก 5 • ฝึกเขียนและจบบท
                </span>
                <h2 className="text-2xl font-extrabold text-foreground mt-3">
                  งานเขียนประจำวัน
                </h2>
              </div>

              <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
                {lesson.writing}
              </p>

              <textarea
                rows={4}
                value={writingInput}
                onChange={(e) => handleWritingChange(e.target.value)}
                placeholder="ลองเขียนประโยคภาษาอังกฤษของคุณที่นี่ (ระบบบันทึกให้อัตโนมัติ)..."
                className="w-full bg-background border-2 border-control-border rounded-xl p-4 text-base sm:text-lg font-display text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />

              {lesson.writing_sample && (
                <div className="p-5 bg-background rounded-xl space-y-2">
                  <div className="text-xs font-bold text-muted-foreground uppercase">
                    ตัวอย่างโครงประโยคสำหรับเทียบ
                  </div>
                  <div className="font-display text-lg font-bold text-foreground">
                    {lesson.writing_sample}
                  </div>
                  {lesson.writing_sample_note && (
                    <div className="text-sm text-muted-foreground">
                      {lesson.writing_sample_note}
                    </div>
                  )}
                </div>
              )}

              {lesson.homework && (
                <div className="p-4 bg-background/70 rounded-xl text-sm text-foreground">
                  <span className="font-bold text-accent">ทบทวนเพิ่มเติม: </span>
                  {lesson.homework}
                </div>
              )}

              {/* Completion Callout */}
              <div className="p-5 bg-success-bg rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-extrabold text-base text-success">
                    {isCompleted
                      ? `คุณเรียนจบวันที่ ${lesson.day} เรียบร้อยแล้ว!`
                      : `เรียนครบถึงขั้นตอนสุดท้ายแล้ว`}
                  </div>
                  <div className="text-sm text-foreground/80 mt-0.5">
                    {isCompleted
                      ? 'สามารถกลับมาทบทวนหรือไปยังบทเรียนวันถัดไปได้เลย'
                      : 'กดปุ่มเพื่อบันทึกว่าเรียนจบวันนี้'}
                  </div>
                </div>

                {!isCompleted ? (
                  <button
                    type="button"
                    onClick={handleCompleteLesson}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-base font-extrabold px-6 py-3.5 rounded-xl hover:brightness-105 transition-all whitespace-nowrap"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>จบบทเรียนวันที่ {lesson.day}</span>
                  </button>
                ) : nextLesson ? (
                  <Link
                    href={`/lessons/${nextLesson.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-success text-white text-base font-extrabold px-6 py-3.5 rounded-xl hover:brightness-105 transition-all whitespace-nowrap"
                  >
                    <span>ไปวันที่ {nextLesson.day} ต่อ</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                ) : null}
              </div>
            </section>
          )}

          {/* Step-by-Step Bottom Navigation Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
              disabled={currentStep === 1}
              className="px-5 py-3 rounded-xl bg-surface text-sm font-bold text-foreground disabled:opacity-30 hover:opacity-85 transition-opacity"
            >
              ← ขั้นก่อนหน้า
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((s) => Math.min(5, s + 1))}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-extrabold hover:brightness-105 transition-all"
              >
                ไปขั้นถัดไป →
              </button>
            ) : (
              <div className="flex items-center gap-3 text-sm font-bold">
                {prevLesson && (
                  <Link href={`/lessons/${prevLesson.id}`} className="text-muted-foreground hover:text-foreground">
                    ← วันที่ {prevLesson.day}
                  </Link>
                )}
                {nextLesson && (
                  <Link href={`/lessons/${nextLesson.id}`} className="text-accent hover:underline">
                    วันที่ {nextLesson.day} →
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: AI Tutor Panel */}
        {showTutorOnDesktop && (
          <div
            className={`lg:col-span-5 ${
              mobileTab === 'tutor' ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="lg:sticky lg:top-6 h-[620px]">
              <TutorChatPanel lesson={lesson} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
