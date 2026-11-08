'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lesson, LessonSummary } from '@/types/curriculum';
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
  Volume2,
  Eye,
  EyeOff,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Clock,
  ChevronRight,
  Headphones,
  BookOpen,
  PenTool,
  CheckCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonWorkspaceProps {
  lesson: Lesson;
  prevLesson: LessonSummary | null;
  nextLesson: LessonSummary | null;
  totalDays: number;
}

const SPEAKING_ROUNDS = [
  { round: 1, label: 'รอบที่ 1 (4 นาที)', seconds: 240, hint: 'เล่าไอเดียทั้งหมดแบบสบายๆ ยังไม่ต้องกังวลความเร็ว' },
  { round: 2, label: 'รอบที่ 2 (3 นาที)', seconds: 180, hint: 'ตัดช่วงอ้ำอึ้งออก พูดประโยคหลักให้กระชับขึ้น' },
  { round: 3, label: 'รอบที่ 3 (2 นาที)', seconds: 120, hint: 'พูดให้จบใน 2 นาทีแบบลื่นไหล ไม่แปลไทยในหัว' },
] as const;

/**
 * Intelligent content formatter: turns raw explanation text into scannable,
 * beautifully styled cards and bullet points with high readability.
 */
function FormattedExplanation({ text }: { text: string }) {
  if (!text) return null;

  // Split by double newlines into logical chunks
  const paragraphs = text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {paragraphs.map((para, pIdx) => {
        // If the paragraph is a list of bullet points
        const lines = para.split('\n').map((l) => l.trim()).filter(Boolean);
        const isBulletList = lines.length > 1 && lines.every((l) => l.startsWith('-') || l.startsWith('•') || /^\d+\./.test(l));

        if (isBulletList) {
          return (
            <ul key={pIdx} className="space-y-2.5 my-3 pl-1">
              {lines.map((line, lIdx) => {
                const cleaned = line.replace(/^[-•\d.]\s*/, '');
                return (
                  <li key={lIdx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/90 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span>{renderHighlightedText(cleaned)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Regular paragraph
        return (
          <p key={pIdx} className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            {renderHighlightedText(para)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Helper to highlight **bold** and `code` spans nicely inside Thai text
 */
function renderHighlightedText(text: string) {
  // Simple regex parser for **bold** and `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-extrabold text-foreground bg-lesson-badge/30 px-1 py-0.5 rounded">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={idx} className="font-display font-bold text-accent bg-surface px-1.5 py-0.5 rounded text-sm sm:text-base border border-border">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export function LessonWorkspace({
  lesson,
  prevLesson,
  nextLesson,
  totalDays,
}: LessonWorkspaceProps) {
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentExIndex, setCurrentExIndex] = useState<number>(0);
  const [showAllExercises, setShowAllExercises] = useState<boolean>(false);
  const [showTutorOnDesktop, setShowTutorOnDesktop] = useState<boolean>(true);
  const [mobileTab, setMobileTab] = useState<'study' | 'tutor'>('study');
  const [writingInput, setWritingInput] = useState('');
  const [savedVocabMap, setSavedVocabMap] = useState<Record<string, boolean>>({});
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');

  // Step 3 Blind Shadowing toggle
  const [hidePassageForBlindShadowing, setHidePassageForBlindShadowing] = useState(false);

  // Step 5 4/3/2 Speaking Fluency Timer
  const [speakingRoundIdx, setSpeakingRoundIdx] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(SPEAKING_ROUNDS[0].seconds);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let initialized = false;
    const syncLessonState = () => {
      const prog = getLessonProgress(lesson.id);
      setProgress(prog);
      if (!initialized) {
        setWritingInput(prog.writing_submission || '');
        initialized = true;
      }

      const vMap: Record<string, boolean> = {};
      lesson.vocabulary.forEach((v) => {
        vMap[v.en] = isVocabularySaved(v.en);
      });
      setSavedVocabMap(vMap);
    };

    syncLessonState();
    setCurrentStep(1);
    setCurrentExIndex(0);
    setHidePassageForBlindShadowing(false);
    setIsTimerRunning(false);
    setSpeakingRoundIdx(0);
    setSecondsLeft(SPEAKING_ROUNDS[0].seconds);

    const onCloudOrStorageUpdate = () => {
      const prog = getLessonProgress(lesson.id);
      setProgress(prog);
      setWritingInput((prev) =>
        prev === '' && prog.writing_submission ? prog.writing_submission : prev
      );

      const vMap: Record<string, boolean> = {};
      lesson.vocabulary.forEach((v) => {
        vMap[v.en] = isVocabularySaved(v.en);
      });
      setSavedVocabMap(vMap);
    };

    window.addEventListener('english_steps_storage_updated', onCloudOrStorageUpdate);
    return () => window.removeEventListener('english_steps_storage_updated', onCloudOrStorageUpdate);
  }, [lesson.id, lesson.vocabulary]);

  useEffect(() => {
    if (!isTimerRunning) return;
    if (secondsLeft <= 0) {
      setIsTimerRunning(false);
      return;
    }
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [isTimerRunning, secondsLeft]);

  const handleSelectSpeakingRound = (idx: number) => {
    setIsTimerRunning(false);
    setSpeakingRoundIdx(idx);
    setSecondsLeft(SPEAKING_ROUNDS[idx].seconds);
  };

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
        particleCount: 70,
        spread: 70,
        origin: { y: 0.65 },
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
    { id: 1, label: '1. ปูพื้นฐาน & โครงสร้าง', icon: BookOpen, time: '10 นาที' },
    { id: 2, label: '2. ระบบเสียง IPA & คำศัพท์', icon: Volume2, time: '12 นาที' },
    { id: 3, label: '3. ฟัง อ่าน & Shadowing', icon: Headphones, time: '13 นาที' },
    { id: 4, label: `4. แบบฝึกหัด (${attemptsCount}/${totalExercises})`, icon: CheckCircle, time: '15 นาที' },
    { id: 5, label: '5. เขียน พูด 4/3/2 & จบบท', icon: PenTool, time: '10 นาที' },
  ];

  const minsDisplay = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secsDisplay = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-10 py-5 sm:py-7 space-y-6 transition-colors duration-200">
      {/* =========================================================================
          TOP FOCUS APP BAR (Back, Metadata, Step Progress & AI Tutor Toggle)
          ========================================================================= */}
      <header className="bg-background rounded-2xl p-4 sm:p-5 border border-border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Back Link & Lesson Title */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <Link
              href="/"
              className="font-bold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>หน้าแรก</span>
            </Link>
            <span className="text-border">/</span>
            <span className="font-extrabold text-accent">
              สัปดาห์ที่ {lesson.week} • วันที่ {lesson.day} / {totalDays}
            </span>
            {lesson.cefr_level && (
              <span className="px-2.5 py-0.5 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-extrabold">
                {lesson.cefr_level}
              </span>
            )}
            {typeof lesson.phase === 'number' && (
              <span className="px-2 py-0.5 rounded-full bg-surface text-foreground text-xs font-bold border border-border/60">
                Phase {lesson.phase}
              </span>
            )}
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight">
            {lesson.title}
          </h1>
        </div>

        {/* Right: Save Status, Completion & Tutor Button */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
              saveStatus === 'saved'
                ? 'bg-success-bg text-success'
                : 'bg-lesson-badge text-lesson-badge-fg'
            }`}
          >
            {saveStatus === 'saved' ? '✓ บันทึกอัตโนมัติแล้ว' : 'กำลังบันทึก...'}
          </span>

          {isCompleted && (
            <span className="inline-flex items-center gap-1.5 bg-success-bg text-success text-xs font-bold px-3 py-1.5 rounded-full border border-success/30">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>เรียนจบแล้ว</span>
            </span>
          )}

          <button
            type="button"
            onClick={() => setShowTutorOnDesktop(!showTutorOnDesktop)}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-review-surface text-review-accent text-sm font-bold hover:brightness-95 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{showTutorOnDesktop ? 'ย่อครู AI' : 'เปิดครู AI'}</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          PROGRESSIVE STEP BAR (5 Interactive Step Tabs with Micro-Progress)
          ========================================================================= */}
      <nav className="space-y-2">
        {/* Micro Progress Line */}
        <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-accent h-full rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>

        {/* Step Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {steps.map((st) => {
            const isActive = currentStep === st.id;
            const isPast = currentStep > st.id;
            const Icon = st.icon;

            return (
              <button
                key={st.id}
                type="button"
                onClick={() => {
                  setCurrentStep(st.id);
                  setMobileTab('study');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : isPast
                    ? 'bg-success-bg border-success/30 text-foreground hover:bg-success-bg/80'
                    : 'bg-background border-border text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : isPast ? 'text-success' : 'text-muted-foreground'}`} />
                <span>{st.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded font-normal ${isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'text-muted-foreground'}`}>
                  {st.time}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Tab Switcher (Study vs AI Tutor) */}
      <div className="lg:hidden flex gap-2 bg-surface p-1 rounded-xl border border-border">
        <button
          type="button"
          onClick={() => setMobileTab('study')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors ${
            mobileTab === 'study'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground'
          }`}
        >
          เนื้อหาบทเรียน (ขั้นที่ {currentStep}/5)
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('tutor')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-1.5 ${
            mobileTab === 'tutor'
              ? 'bg-background text-review-accent shadow-sm'
              : 'text-muted-foreground'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>ถามครู AI</span>
        </button>
      </div>

      {/* =========================================================================
          MAIN WORKSPACE GRID (Left: Step Focus Canvas • Right: AI Tutor Panel)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left: Active Step Content */}
        <main
          className={`${
            showTutorOnDesktop ? 'lg:col-span-7' : 'lg:col-span-12'
          } space-y-6 ${mobileTab === 'study' ? 'block' : 'hidden lg:block'}`}
        >
          {/* STEP 1: Foundation, Objective & Core Insights */}
          {currentStep === 1 && (
            <section className="bg-lesson-surface rounded-3xl p-6 sm:p-9 space-y-6 border border-lesson-badge/30 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-extrabold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ขั้นตอนที่ 1 จาก 5 • ปูพื้นฐาน &amp; โครงสร้าง ({lesson.minutes || 60} นาที)</span>
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  สมดุล 4 แกน Input-Output
                </span>
              </div>

              {/* Objective Banner */}
              <div className="bg-background rounded-2xl p-5 sm:p-6 space-y-2 border border-border/60">
                <div className="text-xs font-extrabold text-accent uppercase tracking-wide">
                  🎯 เป้าหมายของบทเรียนวันนี้
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-foreground leading-relaxed">
                  {lesson.objective}
                </div>
              </div>

              {/* Formatted Explanation (Chunked, Scannable Cards) */}
              <div className="bg-background rounded-2xl p-6 sm:p-7 space-y-4 border border-border/60">
                <div className="text-xs font-extrabold text-muted-foreground uppercase tracking-wide pb-2 border-b border-border/50">
                  💡 คำอธิบายหลักประจำบทเรียน (อ่านง่าย ทีละประเด็น)
                </div>
                <FormattedExplanation text={lesson.explanation} />
              </div>

              {/* 60-Min Four Strands Time Plan */}
              {lesson.time_breakdown && lesson.time_breakdown.length > 0 && (
                <div className="bg-background/90 rounded-2xl p-5 sm:p-6 space-y-3.5 border border-border/60">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-muted-foreground uppercase tracking-wide">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>แผนเวลาเรียน {lesson.minutes || 60} นาที (Four Strands สมดุลสมอง)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {lesson.time_breakdown.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-surface border border-border/40 text-xs sm:text-sm"
                      >
                        <span className="font-bold text-foreground">{item.label}</span>
                        <span className="font-extrabold text-accent shrink-0 ml-2 bg-lesson-badge/30 px-2 py-0.5 rounded">
                          {item.minutes} นาที
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Context Note if exists */}
              {lesson.extra && (
                <div className="bg-background rounded-2xl p-5 space-y-2 border border-border/60">
                  <div className="text-xs font-bold text-muted-foreground uppercase">ข้อมูลเสริมสำหรับการเรียน</div>
                  <div className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-wrap">
                    {lesson.extra}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* STEP 2: Sound Focus (IPA) + Vocab & Lexical Chunks */}
          {currentStep === 2 && (
            <section className="bg-surface rounded-3xl p-6 sm:p-9 space-y-6 border border-border/60 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-extrabold">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>ขั้นตอนที่ 2 จาก 5 • ระบบเสียง IPA + ศัพท์ &amp; ก้อนคำ ({lesson.vocabulary.length} ชุด)</span>
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  จำศัพท์เป็นก้อน (Chunks) ไม่ท่องเดี่ยว
                </span>
              </div>

              {/* Sound Focus Hero Card */}
              {lesson.sound_focus && (
                <div className="p-6 bg-review-surface rounded-2xl space-y-3.5 border border-review-accent/30">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-review-accent">
                    <Volume2 className="w-4 h-4 shrink-0" />
                    <span>ระบบเสียงประจำบท: {lesson.sound_focus.title}</span>
                  </div>
                  <div className="bg-background rounded-xl p-4 sm:p-5 space-y-2.5 text-sm sm:text-base border border-border/50">
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-foreground">
                      {lesson.sound_focus.ipa}
                    </div>
                    <div className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">เสียงเชื่อมจริง (Connected Speech): </strong>
                      {lesson.sound_focus.connected_speech}
                    </div>
                    <div className="text-foreground font-semibold pt-1 text-sm bg-lesson-surface p-3 rounded-lg border border-lesson-badge/30">
                      🎯 ซ้อมปาก 2 นาที: {lesson.sound_focus.drill}
                    </div>
                  </div>
                </div>
              )}

              {/* Vocabulary Cards */}
              <div className="space-y-3.5">
                {lesson.vocabulary.map((vocab, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 bg-background rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border/60 hover:border-accent/40 transition-colors shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                          {vocab.en}
                        </span>
                        {vocab.ipa && (
                          <span className="font-display text-xs sm:text-sm font-semibold text-review-accent bg-review-surface px-2.5 py-0.5 rounded-lg border border-review-accent/20">
                            {vocab.ipa}
                          </span>
                        )}
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

                      <div className="text-base sm:text-lg text-muted-foreground font-medium">
                        ความหมาย: <strong className="text-foreground">{vocab.th}</strong>
                      </div>

                      {vocab.chunk && (
                        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl bg-lesson-surface border border-lesson-badge/30 text-xs sm:text-sm">
                          <span className="font-bold text-lesson-badge-fg">ก้อนคำจำใช้ (Chunk):</span>
                          <span className="font-display font-extrabold text-foreground">
                            &ldquo;{vocab.chunk}&rdquo;
                          </span>
                          {vocab.chunk_th && (
                            <span className="text-muted-foreground">— {vocab.chunk_th}</span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="self-start sm:self-center shrink-0">
                      <AudioPlayer
                        text={vocab.chunk ? `${vocab.en}. ${vocab.chunk}` : vocab.en}
                        label="ฟังเสียง"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* STEP 3: Listening, Reading & 3-Round Shadowing */}
          {currentStep === 3 && (
            <section className="bg-review-surface rounded-3xl p-6 sm:p-9 space-y-6 border border-review-accent/25 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background text-review-accent text-xs font-extrabold">
                    <Headphones className="w-3.5 h-3.5" />
                    <span>ขั้นตอนที่ 3 จาก 5 • ฟัง อ่าน &amp; Shadowing 3 รอบ</span>
                  </span>
                  <h2 className="text-2xl font-extrabold text-foreground mt-2">
                    ฝึกฟังจับใจความและออกเสียงตาม
                  </h2>
                </div>
                <AudioPlayer text={lesson.reading} label="ฟังบทอ่านเต็ม" slowRate />
              </div>

              {/* 3-Round Shadowing Guide & Blind Mode Button */}
              <div className="p-5 sm:p-6 bg-background rounded-2xl space-y-3.5 border border-border/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-extrabold text-foreground">
                    เทคนิค Shadowing 3 รอบ (10 นาทีต่อวัน)
                  </div>
                  <button
                    type="button"
                    onClick={() => setHidePassageForBlindShadowing((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface text-xs font-bold text-foreground hover:text-accent border border-border transition-colors"
                  >
                    {hidePassageForBlindShadowing ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>เปิดข้อความ (รอบ 1–2)</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>ปิดข้อความเพื่อฝึกฟังล้วน (Blind รอบ 3)</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-muted-foreground">
                  <div className="p-3 rounded-xl bg-surface border border-border/40">
                    <strong className="text-foreground block font-bold mb-1">รอบ 1 • 0.75x</strong>
                    ฟังพร้อมดูข้อความ สังเกตเสียงเชื่อมและพยางค์เน้น
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-border/40">
                    <strong className="text-foreground block font-bold mb-1">รอบ 2 • 0.9x</strong>
                    ออกเสียงตามทันที (ดีเลย์ครึ่งจังหวะ) เลียนแบบทำนองเสียง
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-border/40">
                    <strong className="text-foreground block font-bold mb-1">รอบ 3 • 1.0x (Blind)</strong>
                    กดซ่อนตัวหนังสือแล้วพูดตามเสียงให้ทัน
                  </div>
                </div>
              </div>

              {/* Full Reading Passage Box */}
              <div className="p-6 sm:p-7 bg-background rounded-2xl space-y-2 border border-border/60">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                  บทอ่านประจำวัน (Reading Passage)
                </div>
                {hidePassageForBlindShadowing ? (
                  <div className="py-8 text-center space-y-2">
                    <div className="text-base sm:text-lg font-bold text-foreground">
                      🎧 โหมด Blind Shadowing เปิดอยู่
                    </div>
                    <p className="text-sm text-muted-foreground">
                      กดปุ่ม &ldquo;ฟังบทอ่านเต็ม&rdquo; ด้านบนแล้วพูดตามเสียง โดยไม่มองตัวหนังสือ
                    </p>
                  </div>
                ) : (
                  <div className="font-display text-lg sm:text-xl font-bold text-foreground leading-relaxed">
                    {lesson.reading}
                  </div>
                )}
              </div>

              {/* Sentence-by-sentence Breakdown */}
              {lesson.examples && lesson.examples.length > 0 && (
                <div className="space-y-3">
                  <div className="text-sm font-bold text-foreground">
                    เจาะลึกทีละประโยคพร้อมเสียงอ่าน:
                  </div>
                  {lesson.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-background rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-border/60"
                    >
                      <div className="space-y-1">
                        <div className="font-display text-lg sm:text-xl font-bold text-foreground">
                          {ex.en}
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground">{ex.th}</div>
                        {ex.note && (
                          <div className="text-xs text-accent font-semibold pt-0.5">{ex.note}</div>
                        )}
                      </div>
                      <div className="self-start sm:self-center shrink-0">
                        <AudioPlayer text={ex.en} label="ฟัง" slowRate />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Dictogloss / Listening Note */}
              {(lesson.listening?.note || lesson.listening?.dictogloss_prompt) && (
                <div className="text-sm text-muted-foreground bg-background rounded-2xl p-5 space-y-1.5 border border-border/60 leading-relaxed">
                  {lesson.listening?.note && (
                    <div>
                      <strong className="text-foreground font-bold">จุดสังเกตการฟัง: </strong>
                      {lesson.listening.note}
                    </div>
                  )}
                  {lesson.listening?.dictogloss_prompt && (
                    <div>
                      <strong className="text-review-accent font-bold">เทคนิค Dictogloss: </strong>
                      {lesson.listening.dictogloss_prompt}
                    </div>
                  )}
                </div>
              )}
            </section>
          )}

          {/* STEP 4: Exercises (Interleaved + Error Fix + Choice) */}
          {currentStep === 4 && (
            <section className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground">
                    แบบฝึกหัดประจำวัน
                  </h2>
                  <div className="text-sm text-muted-foreground font-medium mt-0.5">
                    ทำแล้ว {attemptsCount} จาก {totalExercises} ข้อ (ผสม Interleaved ทบทวนระยะยาว)
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllExercises(!showAllExercises)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-sm font-bold text-foreground hover:bg-surface/80 transition-colors"
                >
                  <List className="w-4 h-4" />
                  <span>{showAllExercises ? 'สลับทำทีละข้อ' : 'ดูทุกข้อในหน้าเดียว'}</span>
                </button>
              </div>

              {!showAllExercises ? (
                <div className="space-y-5">
                  {/* Question Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {lesson.exercises.map((ex, idx) => {
                      const att = progress?.attempts[ex.id];
                      const isCurrent = idx === currentExIndex;
                      return (
                        <button
                          key={ex.id}
                          type="button"
                          onClick={() => setCurrentExIndex(idx)}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                            isCurrent
                              ? 'bg-dark-chip text-dark-chip-fg border-dark-chip shadow-sm'
                              : att?.is_correct
                              ? 'bg-success-bg text-success border-success/30'
                              : att
                              ? 'bg-error-bg text-error border-error/30'
                              : 'bg-surface text-muted-foreground border-border hover:text-foreground'
                          }`}
                        >
                          ข้อ {idx + 1}
                          {att?.is_correct ? ' ✓' : ''}
                        </button>
                      );
                    })}
                  </div>

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

                  {/* Previous / Next Question Controls */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      disabled={currentExIndex === 0}
                      onClick={() => setCurrentExIndex((i) => Math.max(0, i - 1))}
                      className="px-5 py-2.5 rounded-xl bg-surface border border-border text-sm font-bold text-foreground disabled:opacity-40 hover:bg-surface/80 transition-all"
                    >
                      ← ข้อก่อนหน้า
                    </button>
                    <button
                      type="button"
                      disabled={currentExIndex >= totalExercises - 1}
                      onClick={() => setCurrentExIndex((i) => Math.min(totalExercises - 1, i + 1))}
                      className="px-5 py-2.5 rounded-xl bg-surface border border-border text-sm font-bold text-foreground disabled:opacity-40 hover:bg-surface/80 transition-all"
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

          {/* STEP 5: Writing, 4/3/2 Speaking Fluency Timer & Complete Lesson */}
          {currentStep === 5 && (
            <section className="bg-lesson-surface rounded-3xl p-6 sm:p-9 space-y-6 border border-lesson-badge/30 shadow-sm">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-extrabold">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>ขั้นตอนที่ 5 จาก 5 • เขียนสื่อสาร พูด 4/3/2 และจบวัน</span>
                </span>
                <h2 className="text-2xl font-extrabold text-foreground mt-3">
                  งานเขียนประจำวัน (Output)
                </h2>
              </div>

              <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
                {lesson.writing}
              </p>

              <textarea
                rows={4}
                value={writingInput}
                onChange={(e) => handleWritingChange(e.target.value)}
                placeholder="ลองพิมพ์ประโยคภาษาอังกฤษของคุณที่นี่ (ระบบบันทึกให้อัตโนมัติ หรือส่งให้ครู AI ตรวจได้)..."
                className="w-full bg-background border-2 border-control-border rounded-2xl p-4 sm:p-5 text-base sm:text-lg font-display text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />

              {lesson.writing_sample && (
                <div className="p-5 sm:p-6 bg-background rounded-2xl space-y-2 border border-border/60">
                  <div className="text-xs font-bold text-muted-foreground uppercase">
                    ตัวอย่างโครงประโยคสำหรับเทียบ
                  </div>
                  <div className="font-display text-lg font-bold text-foreground leading-relaxed">
                    {lesson.writing_sample}
                  </div>
                  {lesson.writing_sample_note && (
                    <div className="text-sm text-muted-foreground">
                      {lesson.writing_sample_note}
                    </div>
                  )}
                </div>
              )}

              {/* 4 / 3 / 2 Speaking Fluency Timer Module */}
              {lesson.speaking_432 && (
                <div className="p-6 sm:p-7 bg-review-surface rounded-2xl space-y-4 border border-review-accent/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-review-accent">
                      <Timer className="w-4 h-4 shrink-0" />
                      <span>ฝึกพูดคล่องแบบ 4 / 3 / 2 นาที (No-New-Words Fluency)</span>
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                      {minsDisplay}:{secsDisplay}
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4 sm:p-5 space-y-2.5 border border-border/50">
                    <div className="font-bold text-foreground text-base">
                      หัวข้อ: {lesson.speaking_432.topic}
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                      {lesson.speaking_432.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Round Selector & Timer Controls */}
                  <div className="flex flex-wrap items-center gap-2">
                    {SPEAKING_ROUNDS.map((r, idx) => (
                      <button
                        key={r.round}
                        type="button"
                        onClick={() => handleSelectSpeakingRound(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                          speakingRoundIdx === idx
                            ? 'bg-review-accent text-review-accent-fg shadow-sm'
                            : 'bg-background text-foreground hover:bg-surface border border-border'
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {SPEAKING_ROUNDS[speakingRoundIdx].hint}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsTimerRunning((r) => !r)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-extrabold hover:brightness-105 active:scale-[0.99] transition-all shadow-sm"
                      >
                        {isTimerRunning ? (
                          <>
                            <Pause className="w-4 h-4" />
                            <span>หยุดชั่วคราว</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            <span>เริ่มจับเวลา</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsTimerRunning(false);
                          setSecondsLeft(SPEAKING_ROUNDS[speakingRoundIdx].seconds);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-background text-muted-foreground hover:text-foreground text-sm font-bold border border-border transition-colors"
                        aria-label="รีเซ็ตเวลา"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>รีเซ็ต</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {lesson.homework && (
                <div className="p-5 bg-background rounded-2xl text-sm sm:text-base text-foreground leading-relaxed border border-border/60">
                  <strong className="text-accent font-bold">เช็กลิสต์ก่อนจบบท: </strong>
                  {lesson.homework}
                </div>
              )}

              {/* Completion Celebration Callout */}
              <div className="p-6 bg-success-bg rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-success/30">
                <div className="space-y-1">
                  <div className="font-extrabold text-base sm:text-lg text-success flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span>
                      {isCompleted
                        ? `คุณเรียนจบวันที่ ${lesson.day} เรียบร้อยแล้ว!`
                        : 'เรียนครบทั้ง 5 ขั้นตอนแล้ว!'}
                    </span>
                  </div>
                  <div className="text-sm text-foreground/80">
                    {isCompleted
                      ? 'คุณสามารถกลับมาทบทวนได้ตลอดเวลา หรือไปต่อยังบทถัดไป'
                      : 'กดปุ่มด้านขวาเพื่อบันทึกว่าเรียนจบบทนี้และเพิ่ม Streak'}
                  </div>
                </div>

                {!isCompleted ? (
                  <button
                    type="button"
                    onClick={handleCompleteLesson}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-base font-extrabold px-7 py-4 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all whitespace-nowrap shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>จบบทเรียนวันที่ {lesson.day} 🎉</span>
                  </button>
                ) : nextLesson ? (
                  <Link
                    href={`/lessons/${nextLesson.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-success text-white text-base font-extrabold px-7 py-4 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all whitespace-nowrap shadow-sm"
                  >
                    <span>ไปวันที่ {nextLesson.day} ต่อ</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                ) : null}
              </div>
            </section>
          )}

          {/* =========================================================================
              STICKY BOTTOM NAVIGATION (Effortless Next / Prev Action)
              ========================================================================= */}
          <div className="flex items-center justify-between pt-3 pb-6 border-t border-border/50">
            <button
              type="button"
              onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
              disabled={currentStep === 1}
              className="px-5 py-3 rounded-xl bg-surface border border-border text-sm font-bold text-foreground disabled:opacity-30 hover:bg-surface/80 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ขั้นก่อนหน้า</span>
            </button>

            <div className="text-xs font-bold text-muted-foreground hidden sm:block">
              ขั้นตอนที่ {currentStep} จาก 5 • {steps[currentStep - 1].label.split('•')[0]}
            </div>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((s) => Math.min(5, s + 1))}
                className="px-7 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-extrabold hover:brightness-105 active:scale-[0.99] transition-all flex items-center gap-2 shadow-sm"
              >
                <span>ขั้นถัดไป: {steps[currentStep].label.split('•')[0]}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-3 text-sm font-bold">
                {prevLesson && (
                  <Link
                    href={`/lessons/${prevLesson.id}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ← วันที่ {prevLesson.day}
                  </Link>
                )}
                {nextLesson && (
                  <Link href={`/lessons/${nextLesson.id}`} className="text-accent hover:underline flex items-center gap-1">
                    <span>วันที่ {nextLesson.day}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </main>

        {/* Right: AI Tutor Panel */}
        {showTutorOnDesktop && (
          <aside
            className={`lg:col-span-5 ${
              mobileTab === 'tutor' ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="lg:sticky lg:top-6 h-[640px]">
              <TutorChatPanel lesson={lesson} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
