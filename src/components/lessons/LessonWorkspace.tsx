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
        prev === (prog.writing_submission || '') ? prev : prog.writing_submission || ''
      );
    };

    window.addEventListener('english_steps_storage_updated', onCloudOrStorageUpdate);
    return () =>
      window.removeEventListener('english_steps_storage_updated', onCloudOrStorageUpdate);
  }, [lesson.id, lesson.vocabulary]);

  // Speaking timer countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTimerRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#6C4CF1', '#FF7AA8', '#C8F04A'],
        });
      } catch {}
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, secondsLeft]);

  const handleSelectSpeakingRound = (idx: number) => {
    setSpeakingRoundIdx(idx);
    setSecondsLeft(SPEAKING_ROUNDS[idx].seconds);
    setIsTimerRunning(false);
  };

  const handleToggleVocab = (enWord: string) => {
    const isSaved = toggleSaveVocabulary(enWord);
    setSavedVocabMap((prev) => ({ ...prev, [enWord]: isSaved }));
  };

  const handleWritingChange = (val: string) => {
    setWritingInput(val);
    setSaveStatus('saving');
    saveWritingSubmission(lesson.id, val);
    setTimeout(() => {
      setSaveStatus('saved');
    }, 400);
  };

  const handleCompleteLesson = () => {
    completeLesson(lesson.id);
    setProgress(getLessonProgress(lesson.id));
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6C4CF1', '#FF7AA8', '#C8F04A', '#7CC8FF'],
      });
    } catch {}
  };

  const steps = [
    { id: 1, label: '1. จุดประสงค์ & แผนเรียน' },
    { id: 2, label: '2. เสียง IPA & ศัพท์' },
    { id: 3, label: '3. ฟัง & Shadowing' },
    { id: 4, label: '4. แบบฝึกหัด' },
    { id: 5, label: '5. เขียน & พูด 4/3/2' },
  ];

  const totalExercises = lesson.exercises.length;
  const attemptsCount = progress ? Object.keys(progress.attempts).length : 0;
  const isCompleted = progress?.status === 'completed';

  const minsDisplay = Math.floor(secondsLeft / 60);
  const secsDisplay = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div
      className="min-h-screen py-6 sm:py-8 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-6">
        {/* Top Header Card */}
        <div
          className="bg-white rounded-[28px] p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <Link
                href="/weeks"
                className="font-extrabold inline-flex items-center gap-1 transition-colors hover:opacity-80"
                style={{ color: '#6C4CF1' }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>คลัง 36 โมดูล</span>
              </Link>
              <span className="text-[#EEE6D6]">|</span>
              {typeof lesson.phase === 'number' && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#F4F0FF] text-[#6C4CF1] font-extrabold text-xs">
                  Phase {lesson.phase}
                </span>
              )}
              {lesson.cefr_level && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFE7C2] text-[#8A4A00] font-extrabold text-xs">
                  {lesson.cefr_level}
                </span>
              )}
              <span className="font-extrabold text-[#6E6690]">
                สัปดาห์ที่ {lesson.week} • วันที่ {lesson.day} จาก {totalDays}
              </span>
            </div>
            <h1
              className="text-2xl sm:text-3xl font-[900] tracking-tight leading-snug"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              {lesson.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-extrabold ${
                saveStatus === 'saved'
                  ? 'bg-[#E6F9C4] text-[#3A6B0A]'
                  : 'bg-[#FFE7C2] text-[#8A4A00]'
              }`}
            >
              {saveStatus === 'saved' ? '✓ บันทึกอัตโนมัติแล้ว' : 'กำลังบันทึก...'}
            </span>

            {isCompleted && (
              <span className="inline-flex items-center gap-1.5 bg-[#E6F9C4] text-[#3A6B0A] text-xs font-extrabold px-3.5 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>เรียนจบแล้ว</span>
              </span>
            )}

            <button
              type="button"
              onClick={() => setShowTutorOnDesktop(!showTutorOnDesktop)}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F0FF] text-[#6C4CF1] border border-[#E8E0FF] text-sm font-extrabold hover:bg-[#6C4CF1] hover:text-white transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{showTutorOnDesktop ? 'ซ่อนครู AI' : 'เปิดครู AI'}</span>
            </button>
          </div>
        </div>

        {/* Stepper Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#6C4CF1] text-white shadow-sm'
                    : 'bg-white text-[#6E6690] hover:text-[#2A1F4A] border border-[#EEE6D6]'
                }`}
              >
                {st.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Study / Tutor Switcher */}
        <div className="lg:hidden flex gap-2 bg-white p-1 rounded-2xl border border-[#EEE6D6]">
          <button
            type="button"
            onClick={() => setMobileTab('study')}
            className={`flex-1 py-2 rounded-xl text-sm font-extrabold transition-colors ${
              mobileTab === 'study'
                ? 'bg-[#6C4CF1] text-white shadow-xs'
                : 'text-[#6E6690]'
            }`}
          >
            เนื้อหาบทเรียน
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('tutor')}
            className={`flex-1 py-2 rounded-xl text-sm font-extrabold transition-colors ${
              mobileTab === 'tutor'
                ? 'bg-[#6C4CF1] text-white shadow-xs'
                : 'text-[#6E6690]'
            }`}
          >
            ถามครู AI
          </button>
        </div>

        {/* Main Content Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Step Focus Area */}
          <div
            className={`${
              showTutorOnDesktop ? 'lg:col-span-7' : 'lg:col-span-12'
            } space-y-6 ${mobileTab === 'study' ? 'block' : 'hidden lg:block'}`}
          >
            {/* STEP 1: Foundation, Time Plan & Thai L1 Trap Fix */}
            {currentStep === 1 && (
              <section
                className="bg-white rounded-[28px] p-6 sm:p-8 space-y-6"
                style={{ border: '2px solid #EEE6D6' }}
              >
                <div>
                  <span
                    className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold"
                    style={{ background: '#FFE7C2', color: '#8A4A00' }}
                  >
                    ขั้นตอนที่ 1 จาก 5 • ทำความเข้าใจและแก้จุดคิดแบบไทย ({lesson.minutes || 60} นาที)
                  </span>
                  <h2
                    className="text-2xl font-[900] mt-3 tracking-tight"
                    style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                  >
                    จุดประสงค์และโครงสร้างวันนี้
                  </h2>
                </div>

                <div
                  className="rounded-2xl p-5 sm:p-6 space-y-4"
                  style={{ background: '#F8F6FF', border: '1px solid #E8E0FF' }}
                >
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide mb-1" style={{ color: '#6C4CF1' }}>
                      สิ่งที่คุณจะทำได้หลังจบบทนี้
                    </div>
                    <p className="text-lg font-extrabold leading-relaxed" style={{ color: '#2A1F4A' }}>
                      {lesson.objective}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E0FF] text-base leading-relaxed whitespace-pre-line text-[#3D335A]">
                    {lesson.explanation}
                  </div>
                </div>

                {/* Thai L1 Warning / Trap Fix Box (Soft Rose, Full-width, Clean Border, No harsh vertical line) */}
                {lesson.l1_warning && (
                  <div
                    className="rounded-[24px] p-5 sm:p-6 space-y-3"
                    style={{ background: '#FFE4EE', border: '2px solid #FFD0E0' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white text-[#C24A6E] font-extrabold text-xs shadow-xs">
                        💡 กันดักภาษาไทยที่มักพลาด (Thai L1 Fix)
                      </span>
                    </div>

                    <div className="text-sm font-bold text-[#C24A6E]">
                      <span className="font-extrabold text-[#2A1F4A]">มักเผลอพูด/เขียนผิดว่า: </span>
                      <span className="line-through">{lesson.l1_warning.mistake_example}</span>
                    </div>

                    <div className="text-sm font-semibold text-[#6E6690]">
                      <span className="font-extrabold text-[#2A1F4A]">เหตุผลจากภาษาไทย: </span>
                      {lesson.l1_warning.why_thai_fails}
                    </div>

                    <div className="bg-white p-3.5 rounded-2xl text-sm font-extrabold text-[#2A1F4A] border border-pink-100 flex items-start gap-2">
                      <span className="text-[#3E8A1E] font-extrabold shrink-0">✓ วิธีแก้ทันที:</span>
                      <span className="leading-relaxed">{lesson.l1_warning.fix_rule}</span>
                    </div>
                  </div>
                )}

                {/* 60-Min Four Strands Breakdown */}
                {lesson.time_breakdown && lesson.time_breakdown.length > 0 && (
                  <div
                    className="rounded-2xl p-5 space-y-3"
                    style={{ background: '#FFF9EE', border: '1px solid #EEE6D6' }}
                  >
                    <div className="text-xs font-extrabold uppercase tracking-wide" style={{ color: '#6E6690' }}>
                      แผนเวลาเรียน {lesson.minutes || 60} นาที (สมดุล 4 แกน Input · Output · โครงสร้าง · ความคล่อง)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {lesson.time_breakdown.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-[#EEE6D6] text-xs sm:text-sm"
                        >
                          <span className="font-extrabold text-[#2A1F4A]">{item.label}</span>
                          <span className="font-[900] text-[#6C4CF1] shrink-0 ml-2">
                            {item.minutes} นาที
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {lesson.extra && (
                  <div className="bg-[#FFF9EE] rounded-2xl p-5 border border-[#EEE6D6] space-y-1.5">
                    <div className="text-xs font-extrabold text-[#6E6690] uppercase">ข้อมูลอ้างอิงเพิ่มเติม</div>
                    <div className="text-base text-[#2A1F4A] leading-relaxed whitespace-pre-wrap font-medium">
                      {lesson.extra}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* STEP 2: Sound Focus (IPA / Connected Speech) + Vocab & Lexical Chunks */}
            {currentStep === 2 && (
              <section
                className="bg-white rounded-[28px] p-6 sm:p-8 space-y-6"
                style={{ border: '2px solid #EEE6D6' }}
              >
                <div>
                  <span
                    className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold"
                    style={{ background: '#FFE7C2', color: '#8A4A00' }}
                  >
                    ขั้นตอนที่ 2 จาก 5 • ระบบเสียง IPA + ศัพท์ &amp; ก้อนคำ (Chunks)
                  </span>
                  <h2
                    className="text-2xl font-[900] mt-3 tracking-tight"
                    style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                  >
                    โฟกัสการออกเสียงและคำศัพท์ ({lesson.vocabulary.length} ชุด)
                  </h2>
                </div>

                {/* Sound Focus Card */}
                {lesson.sound_focus && (
                  <div
                    className="p-5 sm:p-6 rounded-2xl space-y-3"
                    style={{ background: '#FFF3E0', border: '1px solid #FFE0B2' }}
                  >
                    <div className="flex items-center gap-2 text-sm font-extrabold" style={{ color: '#8A4A00' }}>
                      <Volume2 className="w-4 h-4 shrink-0 text-orange-600" />
                      <span>ฝึกเสียง &amp; จังหวะ: {lesson.sound_focus.title}</span>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm sm:text-base border border-orange-100">
                      <div className="font-mono font-bold text-lg" style={{ color: '#FF7AA8' }}>
                        {lesson.sound_focus.ipa}
                      </div>
                      <div className="text-[#6E6690] leading-relaxed">
                        <span className="font-extrabold text-[#2A1F4A]">เสียงเชื่อมจริง (Connected Speech): </span>
                        {lesson.sound_focus.connected_speech}
                      </div>
                      <div className="text-[#2A1F4A] font-extrabold pt-1">
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
                      className="p-5 bg-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 border-[#EEE6D6] hover:border-[#6C4CF1]/40 transition-all"
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span
                            className="text-2xl font-[900] tracking-tight"
                            style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                          >
                            {vocab.en}
                          </span>
                          {vocab.ipa && (
                            <span
                              className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full"
                              style={{ background: '#FFE4EE', color: '#FF7AA8' }}
                            >
                              {vocab.ipa}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => handleToggleVocab(vocab.en)}
                            className={`p-1.5 rounded-full transition-colors ${
                              savedVocabMap[vocab.en]
                                ? 'bg-[#FFE4EE] text-[#FF7AA8]'
                                : 'text-[#6E6690] hover:text-[#2A1F4A]'
                            }`}
                            title={savedVocabMap[vocab.en] ? 'บันทึกแล้ว' : 'บันทึกเข้าสมุดคำศัพท์'}
                            aria-label={savedVocabMap[vocab.en] ? 'ยกเลิกบันทึกคำศัพท์' : 'บันทึกคำศัพท์'}
                          >
                            <Bookmark className={`w-4 h-4 ${savedVocabMap[vocab.en] ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                        <div className="text-base text-[#6E6690] font-semibold">
                          ความหมาย: <span className="text-[#2A1F4A] font-extrabold">{vocab.th}</span>
                        </div>
                        {vocab.chunk && (
                          <div
                            className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm"
                            style={{ background: '#F8F6FF', border: '1px solid #E8E0FF' }}
                          >
                            <span className="font-extrabold" style={{ color: '#6C4CF1' }}>Chunk:</span>
                            <span className="font-bold text-[#2A1F4A]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                              {vocab.chunk}
                            </span>
                            {vocab.chunk_th && (
                              <span className="text-[#6E6690] font-medium">— {vocab.chunk_th}</span>
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
              <section
                className="bg-white rounded-[28px] p-6 sm:p-8 space-y-6"
                style={{ border: '2px solid #EEE6D6' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span
                      className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold"
                      style={{ background: '#FFE7C2', color: '#8A4A00' }}
                    >
                      ขั้นตอนที่ 3 จาก 5 • อ่าน ฟัง &amp; Shadowing 3 รอบ
                    </span>
                    <h2
                      className="text-2xl font-[900] mt-3 tracking-tight"
                      style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                    >
                      ฝึกฟังจับใจความและพูดตามเสียง
                    </h2>
                  </div>
                  <AudioPlayer text={lesson.reading} label="ฟังบทอ่านทั้งหมด" slowRate />
                </div>

                {/* 3-Round Shadowing Protocol Strip + Blind Mode Toggle */}
                <div
                  className="p-5 rounded-2xl space-y-3"
                  style={{ background: '#F8F6FF', border: '1px solid #E8E0FF' }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm font-[900]" style={{ color: '#2A1F4A' }}>
                      วิธีซ้อม Shadowing 3 รอบ (วันละ 10 นาที)
                    </div>
                    <button
                      type="button"
                      onClick={() => setHidePassageForBlindShadowing((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-extrabold text-[#6C4CF1] border border-[#E8E0FF] hover:bg-[#6C4CF1] hover:text-white transition-all"
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#6E6690]">
                    <div className="p-3 rounded-xl bg-white border border-[#E8E0FF]">
                      <span className="font-extrabold text-[#2A1F4A] block mb-0.5">รอบ 1 • 0.75x</span>
                      ฟังพร้อมดูข้อความ จับเสียงเชื่อมและเน้นพยางค์
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E8E0FF]">
                      <span className="font-extrabold text-[#2A1F4A] block mb-0.5">รอบ 2 • 0.9x</span>
                      ออกเสียงตามทันทีช้ากว่าเสียงต้นฉบับครึ่งจังหวะ
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E8E0FF]">
                      <span className="font-extrabold text-[#2A1F4A] block mb-0.5">รอบ 3 • 1.0x (Blind)</span>
                      กดปิดข้อความด้านล่างแล้วพูดตามเสียงอย่างเดียว
                    </div>
                  </div>
                </div>

                {/* Full Reading Box */}
                <div
                  className="p-6 rounded-2xl space-y-2 bg-[#FFF9EE]"
                  style={{ border: '1px solid #EEE6D6' }}
                >
                  <div className="text-xs font-extrabold text-[#6E6690] uppercase tracking-wide">บทอ่านประจำวัน</div>
                  {hidePassageForBlindShadowing ? (
                    <div className="py-8 text-center space-y-2">
                      <div className="text-lg font-extrabold text-[#2A1F4A]">
                        🎧 โหมด Blind Listening / Shadowing กำลังเปิดอยู่
                      </div>
                      <p className="text-sm font-semibold text-[#6E6690]">
                        กด &ldquo;ฟังบทอ่านทั้งหมด&rdquo; ด้านบนแล้วจับใจความ + พูดตามโดยไม่มองตัวหนังสือ
                      </p>
                    </div>
                  ) : (
                    <div
                      className="text-lg sm:text-xl font-bold leading-relaxed text-[#2A1F4A]"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {lesson.reading}
                    </div>
                  )}
                </div>

                {/* Sentence-by-sentence breakdown */}
                {lesson.examples && lesson.examples.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-sm font-extrabold text-[#2A1F4A]">
                      ประโยคตัวอย่างสำคัญพร้อมคำแปล
                    </div>
                    {lesson.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 bg-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#EEE6D6]"
                      >
                        <div>
                          <div
                            className="text-lg sm:text-xl font-bold text-[#2A1F4A]"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            {ex.en}
                          </div>
                          <div className="text-base text-[#6E6690] font-semibold mt-0.5">{ex.th}</div>
                          {ex.note && (
                            <div className="text-xs text-[#6C4CF1] font-bold mt-1">{ex.note}</div>
                          )}
                        </div>
                        <div className="self-start sm:self-center shrink-0">
                          <AudioPlayer text={ex.en} label="ฟัง" slowRate />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* STEP 4: Exercises (Interleaved + Dictogloss + Error Fix + Choice) */}
            {currentStep === 4 && (
              <section className="space-y-5">
                <div
                  className="bg-white rounded-[28px] p-6 sm:p-7 flex flex-wrap items-center justify-between gap-3"
                  style={{ border: '2px solid #EEE6D6' }}
                >
                  <div>
                    <h2
                      className="text-2xl font-[900] tracking-tight"
                      style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                    >
                      แบบฝึกหัดประจำวัน
                    </h2>
                    <div className="text-sm text-[#6E6690] font-bold mt-0.5">
                      ทำแล้ว {attemptsCount} จาก {totalExercises} ข้อ (ผสม Interleaved ทบทวนระยะยาวในตัว)
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowAllExercises(!showAllExercises)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F0FF] text-[#6C4CF1] border border-[#E8E0FF] text-sm font-extrabold hover:bg-[#6C4CF1] hover:text-white transition-all"
                  >
                    <List className="w-4 h-4" />
                    <span>{showAllExercises ? 'สลับเป็นทีละข้อ' : 'ดูทั้งหมดในหน้าเดียว'}</span>
                  </button>
                </div>

                {!showAllExercises ? (
                  <div className="space-y-5">
                    {/* Exercise Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      {lesson.exercises.map((ex, idx) => {
                        const att = progress?.attempts[ex.id];
                        const isCurrent = idx === currentExIndex;
                        return (
                          <button
                            key={ex.id}
                            type="button"
                            onClick={() => setCurrentExIndex(idx)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                              isCurrent
                                ? 'bg-[#6C4CF1] text-white shadow-sm'
                                : att?.is_correct
                                ? 'bg-[#E6F9C4] text-[#3A6B0A] border border-[#C8F04A]'
                                : att
                                ? 'bg-[#FFE4EE] text-[#C24A6E] border border-pink-200'
                                : 'bg-white text-[#6E6690] hover:text-[#2A1F4A] border border-[#EEE6D6]'
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
                        className="px-5 py-2.5 rounded-full bg-white border border-[#EEE6D6] text-sm font-extrabold text-[#2A1F4A] disabled:opacity-30 hover:bg-[#F4F0FF] transition-all"
                      >
                        ← ข้อก่อนหน้า
                      </button>
                      <button
                        type="button"
                        disabled={currentExIndex >= totalExercises - 1}
                        onClick={() => setCurrentExIndex((i) => Math.min(totalExercises - 1, i + 1))}
                        className="px-5 py-2.5 rounded-full bg-[#6C4CF1] text-white text-sm font-extrabold disabled:opacity-30 hover:bg-[#5838DF] transition-all shadow-sm"
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
              <section
                className="bg-white rounded-[28px] p-6 sm:p-8 space-y-6"
                style={{ border: '2px solid #EEE6D6' }}
              >
                <div>
                  <span
                    className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold"
                    style={{ background: '#FFE7C2', color: '#8A4A00' }}
                  >
                    ขั้นตอนที่ 5 จาก 5 • เขียนสื่อสาร พูด 4/3/2 และสรุปบท
                  </span>
                  <h2
                    className="text-2xl font-[900] mt-3 tracking-tight"
                    style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                  >
                    งานเขียนประจำวัน (Output)
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#2A1F4A] leading-relaxed font-bold">
                  {lesson.writing}
                </p>

                <textarea
                  rows={4}
                  value={writingInput}
                  onChange={(e) => handleWritingChange(e.target.value)}
                  placeholder="ลองเขียนประโยคภาษาอังกฤษของคุณที่นี่ (ระบบบันทึกให้อัตโนมัติ หรือส่งข้อความให้ครู AI ทางขวาช่วยตรวจได้)..."
                  className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-2xl p-4 text-base sm:text-lg font-bold text-[#2A1F4A] placeholder:text-[#6E6690] focus:border-[#6C4CF1] focus:outline-none"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                />

                {lesson.writing_sample && (
                  <div className="p-5 bg-[#F8F6FF] rounded-2xl border border-[#E8E0FF] space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wide text-[#6C4CF1]">
                      ตัวอย่างโครงประโยคสำหรับเทียบ
                    </div>
                    <div
                      className="text-lg font-extrabold text-[#2A1F4A] leading-relaxed"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {lesson.writing_sample}
                    </div>
                    {lesson.writing_sample_note && (
                      <div className="text-sm font-semibold text-[#6E6690]">
                        {lesson.writing_sample_note}
                      </div>
                    )}
                  </div>
                )}

                {/* 4 / 3 / 2 Speaking Fluency Timer Module */}
                {lesson.speaking_432 && (
                  <div
                    className="p-5 sm:p-6 rounded-2xl space-y-4"
                    style={{ background: '#FFE4EE', border: '1px solid #FFD0E0' }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-sm font-extrabold text-[#C24A6E]">
                        <Timer className="w-4 h-4 shrink-0" />
                        <span>ฝึกพูดคล่องแบบ 4 / 3 / 2 นาที (No-New-Words Fluency)</span>
                      </div>
                      <div
                        className="text-2xl font-[900] text-[#2A1F4A]"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {minsDisplay}:{secsDisplay}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 space-y-2 border border-pink-100">
                      <div className="font-extrabold text-[#2A1F4A] text-base">
                        หัวข้อ: {lesson.speaking_432.topic}
                      </div>
                      <ul className="space-y-1 text-sm font-semibold text-[#6E6690] list-disc pl-5">
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
                          className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors ${
                            speakingRoundIdx === idx
                              ? 'bg-[#FF7AA8] text-white shadow-xs'
                              : 'bg-white text-[#2A1F4A] border border-pink-200 hover:bg-[#FFF4E0]'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <span className="text-xs sm:text-sm text-[#6E6690] font-semibold">
                        {SPEAKING_ROUNDS[speakingRoundIdx].hint}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setIsTimerRunning((r) => !r)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6C4CF1] text-white text-sm font-extrabold hover:bg-[#5838DF] shadow-sm transition-all active:scale-95"
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
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-pink-200 text-[#6E6690] hover:text-[#2A1F4A] text-sm font-extrabold"
                          aria-label="รีเซ็ตเวลา"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>รีเซ็ต</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Completion Callout */}
                <div className="p-6 bg-[#E6F9C4] border border-[#C8F04A] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-[900] text-lg text-[#2A1F4A]">
                      {isCompleted
                        ? `คุณเรียนจบวันที่ ${lesson.day} เรียบร้อยแล้ว! 🎉`
                        : 'เรียนครบถึงขั้นตอนสุดท้ายแล้ว 🚀'}
                    </div>
                    <div className="text-sm font-semibold text-[#4B3F72] mt-0.5">
                      {isCompleted
                        ? 'สามารถกลับมาทบทวนหรือไปยังบทเรียนวันถัดไปได้เลย'
                        : 'กดปุ่มเพื่อบันทึกว่าเรียนจบวันนี้ และรับคะแนน XP'}
                    </div>
                  </div>

                  {!isCompleted ? (
                    <button
                      type="button"
                      onClick={handleCompleteLesson}
                      className="inline-flex items-center justify-center gap-2 bg-[#6C4CF1] text-white text-base font-[900] px-7 py-3.5 rounded-full hover:bg-[#5838DF] transition-all shadow-md active:scale-95 whitespace-nowrap"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>จบบทเรียนวันที่ {lesson.day}</span>
                    </button>
                  ) : nextLesson ? (
                    <Link
                      href={`/lessons/${nextLesson.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white text-base font-[900] px-7 py-3.5 rounded-full hover:bg-green-700 transition-all shadow-md whitespace-nowrap"
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
                className="px-5 py-2.5 rounded-full bg-white border border-[#EEE6D6] text-sm font-extrabold text-[#2A1F4A] disabled:opacity-30 hover:bg-[#F4F0FF] transition-all"
              >
                ← ขั้นก่อนหน้า
              </button>

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => Math.min(5, s + 1))}
                  className="px-6 py-2.5 rounded-full bg-[#6C4CF1] text-white text-sm font-extrabold hover:bg-[#5838DF] transition-all shadow-sm active:scale-95"
                >
                  ไปขั้นถัดไป →
                </button>
              ) : (
                <div className="flex items-center gap-3 text-sm font-extrabold">
                  {prevLesson && (
                    <Link
                      href={`/lessons/${prevLesson.id}`}
                      className="text-[#6E6690] hover:text-[#2A1F4A]"
                    >
                      ← วันที่ {prevLesson.day}
                    </Link>
                  )}
                  {nextLesson && (
                    <Link href={`/lessons/${nextLesson.id}`} className="text-[#6C4CF1] hover:underline">
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
              <div className="lg:sticky lg:top-20 h-[640px]">
                <TutorChatPanel lesson={lesson} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
