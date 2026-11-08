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
  AlertTriangle,
  Volume2,
  Eye,
  EyeOff,
  Timer,
  Play,
  Pause,
  RotateCcw,
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
    { id: 1, label: '1. ปูพื้นฐาน & จุดพลาด' },
    { id: 2, label: '2. เสียง IPA & คำศัพท์' },
    { id: 3, label: '3. ฟัง อ่าน & Shadowing' },
    { id: 4, label: `4. แบบฝึก (${attemptsCount}/${totalExercises})` },
    { id: 5, label: '5. เขียน พูด 4/3/2 & จบบท' },
  ];

  const minsDisplay = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secsDisplay = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-7 space-y-6 transition-colors duration-200">
      {/* Top Bar: Back Link, Metadata, Save Status & AI Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-border">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5 text-sm">
            <Link
              href="/"
              className="font-bold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>กลับหน้าแรก</span>
            </Link>
            <span className="text-border">|</span>
            {typeof lesson.phase === 'number' && (
              <span className="px-2.5 py-0.5 rounded-full bg-surface text-foreground text-xs font-extrabold">
                Phase {lesson.phase}
              </span>
            )}
            {lesson.cefr_level && (
              <span className="px-2.5 py-0.5 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-extrabold">
                {lesson.cefr_level}
              </span>
            )}
            <span className="font-bold text-accent">
              สัปดาห์ที่ {lesson.week} • วันที่ {lesson.day} จาก {totalDays}
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

      {/* Stepper Navigation Pills (Nordic Bright) */}
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
          {/* STEP 1: Foundation, Time Plan & Thai L1 Trap Fix */}
          {currentStep === 1 && (
            <section className="bg-lesson-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                  ขั้นตอนที่ 1 จาก 5 • ทำความเข้าใจและแก้จุดคิดแบบไทย ({lesson.minutes || 60} นาที)
                </span>
                <h2 className="text-2xl font-extrabold text-foreground mt-3">
                  จุดประสงค์และโครงสร้างวันนี้
                </h2>
              </div>

              <div className="bg-background rounded-xl p-5 sm:p-6 space-y-4">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wide mb-1">
                    สิ่งที่คุณจะทำได้หลังจบบทนี้
                  </div>
                  <p className="text-lg font-bold text-foreground leading-relaxed">
                    {lesson.objective}
                  </p>
                </div>

                <div className="pt-4 border-t border-border text-base sm:text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                  {lesson.explanation}
                </div>
              </div>

              {/* Thai L1 Warning Block */}
              {lesson.l1_warning && (
                <div className="bg-background rounded-xl p-5 sm:p-6 space-y-3 border-l-4 border-error">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-error">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>กับดักภาษาไทยที่มักพลาด (Thai L1 Fix)</span>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base leading-relaxed">
                    <div>
                      <span className="font-bold text-foreground">มักเผลอพูด/เขียนผิดว่า: </span>
                      <span className="text-error font-medium">{lesson.l1_warning.mistake_example}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">เหตุผลจากภาษาไทย: </span>
                      <span className="text-muted-foreground">{lesson.l1_warning.why_thai_fails}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-success-bg text-success font-bold">
                      วิธีแก้ทันที: {lesson.l1_warning.fix_rule}
                    </div>
                  </div>
                </div>
              )}

              {/* 60-Min Four Strands Breakdown */}
              {lesson.time_breakdown && lesson.time_breakdown.length > 0 && (
                <div className="bg-background/80 rounded-xl p-5 space-y-3">
                  <div className="text-xs font-bold text-muted-foreground uppercase">
                    แผนเวลาเรียน {lesson.minutes || 60} นาที (สมดุล 4 แกน Input · Output · โครงสร้าง · ความคล่อง)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {lesson.time_breakdown.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-surface text-xs sm:text-sm"
                      >
                        <span className="font-bold text-foreground">{item.label}</span>
                        <span className="font-extrabold text-accent shrink-0 ml-2">
                          {item.minutes} นาที
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

          {/* STEP 2: Sound Focus (IPA / Connected Speech) + Vocab & Lexical Chunks */}
          {currentStep === 2 && (
            <section className="bg-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                    ขั้นตอนที่ 2 จาก 5 • ระบบเสียง IPA + ศัพท์ &amp; ก้อนคำ (Chunks)
                  </span>
                  <h2 className="text-2xl font-extrabold text-foreground mt-3">
                    โฟกัสการออกเสียงและคำศัพท์ ({lesson.vocabulary.length} ชุด)
                  </h2>
                </div>
              </div>

              {/* Sound Focus Card */}
              {lesson.sound_focus && (
                <div className="p-5 sm:p-6 bg-review-surface rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-review-accent">
                    <Volume2 className="w-4 h-4 shrink-0" />
                    <span>ฝึกเสียง &amp; จังหวะ: {lesson.sound_focus.title}</span>
                  </div>
                  <div className="bg-background rounded-lg p-4 space-y-2 text-sm sm:text-base">
                    <div className="font-display font-bold text-foreground">
                      {lesson.sound_focus.ipa}
                    </div>
                    <div className="text-muted-foreground leading-relaxed">
                      <span className="font-bold text-foreground">เสียงเชื่อมจริง (Connected Speech): </span>
                      {lesson.sound_focus.connected_speech}
                    </div>
                    <div className="text-foreground font-semibold pt-1">
                      🎯 แบบฝึกปาก 2 นาที: {lesson.sound_focus.drill}
                    </div>
                  </div>
                </div>
              )}

              {/* Vocabulary + Collocation/Chunk Cards */}
              <div className="space-y-3">
                {lesson.vocabulary.map((vocab, i) => (
                  <div
                    key={i}
                    className="p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-display text-2xl font-extrabold text-foreground">
                          {vocab.en}
                        </span>
                        {vocab.ipa && (
                          <span className="font-display text-sm font-semibold text-review-accent bg-review-surface px-2.5 py-0.5 rounded-md">
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
                      <div className="text-base text-muted-foreground font-medium">
                        ความหมาย: <span className="text-foreground font-bold">{vocab.th}</span>
                      </div>
                      {vocab.chunk && (
                        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg bg-lesson-surface text-xs sm:text-sm">
                          <span className="font-bold text-lesson-badge-fg">Chunk:</span>
                          <span className="font-display font-bold text-foreground">
                            {vocab.chunk}
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
                        label="ฟังคำ & ก้อนคำ"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* STEP 3: Listening, Reading & 3-Round Shadowing */}
          {currentStep === 3 && (
            <section className="bg-review-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-background text-review-accent text-xs font-bold">
                    ขั้นตอนที่ 3 จาก 5 • อ่าน ฟัง &amp; Shadowing 3 รอบ
                  </span>
                  <h2 className="text-2xl font-extrabold text-foreground mt-3">
                    ฝึกฟังจับใจความและพูดตามเสียง
                  </h2>
                </div>
                <AudioPlayer text={lesson.reading} label="ฟังบทอ่านทั้งหมด" slowRate />
              </div>

              {/* 3-Round Shadowing Protocol Strip + Blind Mode Toggle */}
              <div className="p-4 sm:p-5 bg-background rounded-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-extrabold text-foreground">
                    วิธีซ้อม Shadowing 3 รอบ (วันละ 10 นาที)
                  </div>
                  <button
                    type="button"
                    onClick={() => setHidePassageForBlindShadowing((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-xs font-bold text-foreground hover:text-accent transition-colors"
                  >
                    {hidePassageForBlindShadowing ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>เปิดดูข้อความ (รอบ 1–2)</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>ปิดข้อความฝึกฟังล้วน (รอบ 3)</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div className="p-2.5 rounded-lg bg-surface">
                    <span className="font-bold text-foreground block">รอบ 1 • 0.75x</span>
                    ฟังพร้อมดูข้อความ จับเสียงเชื่อมและเน้นพยางค์
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface">
                    <span className="font-bold text-foreground block">รอบ 2 • 0.9x</span>
                    ออกเสียงตามทันทีช้ากว่าเสียงต้นฉบับครึ่งจังหวะ
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface">
                    <span className="font-bold text-foreground block">รอบ 3 • 1.0x (Blind)</span>
                    กดปิดข้อความด้านล่างแล้วพูดตามเสียงอย่างเดียว
                  </div>
                </div>
              </div>

              {/* Full Reading Box */}
              <div className="p-6 bg-background rounded-xl space-y-2">
                <div className="text-xs font-bold text-muted-foreground uppercase">บทอ่านประจำวัน</div>
                {hidePassageForBlindShadowing ? (
                  <div className="py-6 text-center space-y-2">
                    <div className="text-base font-bold text-foreground">
                      🎧 โหมด Blind Listening / Shadowing กำลังเปิดอยู่
                    </div>
                    <p className="text-sm text-muted-foreground">
                      กด &ldquo;ฟังบทอ่านทั้งหมด&rdquo; ด้านบนแล้วจับใจความ + พูดตามโดยไม่มองตัวหนังสือ
                    </p>
                  </div>
                ) : (
                  <div className="font-display text-lg sm:text-xl font-bold text-foreground leading-relaxed">
                    {lesson.reading}
                  </div>
                )}
              </div>

              {/* Sentence-by-sentence breakdown */}
              {lesson.examples && lesson.examples.length > 0 && (
                <div className="space-y-3">
                  <div className="text-sm font-bold text-foreground">
                    ประโยคตัวอย่างสำคัญพร้อมคำแปล
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
                        <div className="text-base text-muted-foreground mt-0.5">{ex.th}</div>
                        {ex.note && (
                          <div className="text-xs text-accent font-semibold mt-1">{ex.note}</div>
                        )}
                      </div>
                      <div className="self-start sm:self-center shrink-0">
                        <AudioPlayer text={ex.en} label="ฟัง" slowRate />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {(lesson.listening?.note || lesson.listening?.dictogloss_prompt) && (
                <div className="text-sm text-muted-foreground bg-background/80 p-4 rounded-xl space-y-1.5 leading-relaxed">
                  {lesson.listening?.note && (
                    <div>
                      <span className="font-bold text-foreground">จุดสังเกตในการฟัง: </span>
                      {lesson.listening.note}
                    </div>
                  )}
                  {lesson.listening?.dictogloss_prompt && (
                    <div>
                      <span className="font-bold text-review-accent">เทคนิค Dictogloss: </span>
                      {lesson.listening.dictogloss_prompt}
                    </div>
                  )}
                </div>
              )}
            </section>
          )}

          {/* STEP 4: Exercises (Interleaved + Dictogloss + Error Fix + Choice) */}
          {currentStep === 4 && (
            <section className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground">
                    แบบฝึกหัดประจำวัน
                  </h2>
                  <div className="text-sm text-muted-foreground font-medium mt-0.5">
                    ทำแล้ว {attemptsCount} จาก {totalExercises} ข้อ (ผสม Interleaved ทบทวนระยะยาวในตัว)
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

          {/* STEP 5: Writing, 4/3/2 Speaking Fluency Timer & Complete Lesson */}
          {currentStep === 5 && (
            <section className="bg-lesson-surface rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
                  ขั้นตอนที่ 5 จาก 5 • เขียนสื่อสาร พูด 4/3/2 และสรุปบท
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
                placeholder="ลองเขียนประโยคภาษาอังกฤษของคุณที่นี่ (ระบบบันทึกให้อัตโนมัติ หรือส่งข้อความให้ครู AI ทางขวาช่วยตรวจได้)..."
                className="w-full bg-background border-2 border-control-border rounded-xl p-4 text-base sm:text-lg font-display text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />

              {lesson.writing_sample && (
                <div className="p-5 bg-background rounded-xl space-y-2">
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
                <div className="p-5 sm:p-6 bg-review-surface rounded-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-review-accent">
                      <Timer className="w-4 h-4 shrink-0" />
                      <span>ฝึกพูดคล่องแบบ 4 / 3 / 2 นาที (No-New-Words Fluency)</span>
                    </div>
                    <div className="font-display text-2xl font-extrabold text-foreground">
                      {minsDisplay}:{secsDisplay}
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-4 space-y-2.5">
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
                            ? 'bg-review-accent text-review-accent-fg'
                            : 'bg-background text-foreground hover:opacity-85'
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-extrabold hover:brightness-105"
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
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-background text-muted-foreground hover:text-foreground text-sm font-bold"
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
                <div className="p-4 bg-background/80 rounded-xl text-sm text-foreground leading-relaxed">
                  <span className="font-bold text-accent">เช็กลิสต์ก่อนจบบท: </span>
                  {lesson.homework}
                </div>
              )}

              {/* Completion Callout */}
              <div className="p-5 bg-success-bg rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-extrabold text-base text-success">
                    {isCompleted
                      ? `คุณเรียนจบวันที่ ${lesson.day} เรียบร้อยแล้ว!`
                      : 'เรียนครบถึงขั้นตอนสุดท้ายแล้ว'}
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
                  <Link
                    href={`/lessons/${prevLesson.id}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
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
