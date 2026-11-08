'use client';

import React, { useState } from 'react';
import { ExerciseItem } from '@/types/curriculum';
import { ExerciseAttempt } from '@/types/learning';
import { saveExerciseAttempt, recordMistake } from '@/lib/storage';
import { AudioPlayer } from './AudioPlayer';
import { Check, X, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface ExerciseCardProps {
  lessonId: string;
  lessonTitle: string;
  exercise: ExerciseItem;
  index: number;
  totalCount?: number;
  existingAttempt?: ExerciseAttempt;
  onAttemptSaved?: () => void;
}

export function ExerciseCard({
  lessonId,
  lessonTitle,
  exercise,
  index,
  totalCount,
  existingAttempt,
  onAttemptSaved,
}: ExerciseCardProps) {
  const [inputAnswer, setInputAnswer] = useState(existingAttempt?.user_answer || '');
  const [submittedAttempt, setSubmittedAttempt] = useState<ExerciseAttempt | undefined>(
    existingAttempt
  );
  const [showHint, setShowHint] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasChoices = Array.isArray(exercise.choices) && exercise.choices.length > 0;

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const evaluateAnswer = (userAns: string, targetAns: string): boolean => {
    if (userAns.trim() === targetAns.trim()) return true;

    const normUser = normalizeText(userAns);
    const normTarget = normalizeText(targetAns);

    if (normUser === normTarget) return true;

    const targetVariants = targetAns
      .split(/[;]/)
      .map((t) => normalizeText(t))
      .filter(Boolean);

    for (const v of targetVariants) {
      if (normUser === v) return true;
    }

    if (!hasChoices && targetAns.includes('/')) {
      const slashVariants = targetAns
        .split('/')
        .map((t) => normalizeText(t))
        .filter(Boolean);
      for (const v of slashVariants) {
        if (normUser === v) return true;
      }
    }

    return false;
  };

  const submitValue = (rawValue: string) => {
    if (!rawValue.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const isCorrect = evaluateAnswer(rawValue, exercise.answer);

    const attempt = saveExerciseAttempt(
      lessonId,
      exercise.id,
      rawValue.trim(),
      isCorrect,
      isCorrect ? 'ถูกต้องแล้วครับ ยอดเยี่ยมมาก!' : 'ยังไม่ตรงกับเฉลย ลองทบทวนคำอธิบายดูนะครับ',
      showHint
    );

    if (!isCorrect) {
      recordMistake(
        lessonId,
        lessonTitle,
        exercise.id,
        exercise.prompt,
        rawValue.trim(),
        exercise.answer,
        exercise.explanation,
        exercise.kind
      );
    }

    setSubmittedAttempt(attempt);
    setIsSubmitting(false);
    if (onAttemptSaved) onAttemptSaved();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitValue(inputAnswer);
  };

  const handleRetry = () => {
    setSubmittedAttempt(undefined);
    setInputAnswer('');
    setShowHint(false);
  };

  const kindLabels: Record<string, string> = {
    recall: 'ทดสอบความจำ (Active Recall)',
    gap: 'เติมคำในช่องว่าง',
    reorder: 'เรียงลำดับประโยค',
    comprehension: 'จับใจความจากบทอ่าน',
    translation: 'แปลสื่อความหมาย',
    dictation: 'ฟังแล้วเขียนตาม (Dictation)',
    dictogloss: 'จับโครงสร้าง Dictogloss',
    error_fix: 'แก้จุดผิด',
    choice: 'เลือกคำตอบที่ถูกต้อง',
    free: 'ตอบอิสระ',
  };

  const playableAudioText =
    exercise.audio_text || (exercise.kind === 'dictation' ? exercise.answer : undefined);

  return (
    <div
      className="p-6 sm:p-7 bg-white rounded-[24px] space-y-5 transition-colors duration-200"
      style={{ border: '2px solid #EEE6D6', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      {/* Header: Number & Category */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span
          className="inline-block px-3.5 py-1 rounded-full font-extrabold text-xs"
          style={{ background: '#FFE7C2', color: '#8A4A00' }}
        >
          ข้อที่ {index + 1}{totalCount ? ` จาก ${totalCount}` : ''}
        </span>
        <span className="font-bold text-xs" style={{ color: '#6E6690' }}>
          {kindLabels[exercise.kind] || exercise.kind}
        </span>
      </div>

      {/* Prompt */}
      <div
        className="font-extrabold text-lg sm:text-xl leading-relaxed whitespace-pre-line"
        style={{ color: '#2A1F4A' }}
      >
        {exercise.prompt}
      </div>

      {/* Audio helper for dictation / dictogloss / listening comprehension */}
      {playableAudioText && (
        <div>
          <AudioPlayer
            text={playableAudioText}
            label={
              exercise.kind === 'dictation'
                ? 'กดฟังเสียงประโยคนี้'
                : exercise.kind === 'dictogloss'
                ? 'ฟังบทพูด Dictogloss (2 รอบ)'
                : 'ฟังเสียงบทอ่านสำหรับคำถามนี้'
            }
            slowRate
          />
        </div>
      )}

      {/* Form / Answer input or Multiple-Choice selector */}
      {!submittedAttempt ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {hasChoices ? (
            <div className="grid grid-cols-1 gap-2.5">
              {exercise.choices!.map((choice, cIdx) => {
                const isSelected = inputAnswer === choice;
                return (
                  <button
                    key={cIdx}
                    type="button"
                    onClick={() => setInputAnswer(choice)}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-2 border-[#6C4CF1] bg-[#F4F0FF] font-extrabold text-[#2A1F4A]'
                        : 'border-2 border-[#EEE6D6] bg-[#FFF9EE] hover:border-[#6C4CF1]/50 text-[#2A1F4A]'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#6C4CF1] text-white'
                          : 'bg-white text-[#6E6690] border border-[#EEE6D6]'
                      }`}
                    >
                      {String.fromCharCode(65 + cIdx)}
                    </span>
                    <span className="text-base leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {choice}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <input
              type="text"
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
              placeholder="พิมพ์คำตอบของคุณที่นี่..."
              className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-2xl px-4 py-3.5 text-[#2A1F4A] placeholder:text-[#6E6690] text-base sm:text-lg font-bold focus:border-[#6C4CF1] focus:outline-none transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            />
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2.5 rounded-full bg-[#FFF9EE] border border-[#EEE6D6] text-sm font-extrabold text-[#6E6690] hover:text-[#2A1F4A] inline-flex items-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-[#6C4CF1]" />
              <span>{showHint ? 'ซ่อนคำใบ้' : 'ขอคำใบ้'}</span>
            </button>

            <button
              type="submit"
              disabled={!inputAnswer.trim() || isSubmitting}
              className="inline-flex items-center gap-2 bg-[#6C4CF1] text-white font-[900] text-base px-7 py-3 rounded-full hover:bg-[#5838DF] disabled:opacity-40 transition-all shadow-sm active:scale-95"
            >
              <span>ตรวจคำตอบ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="p-4 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] text-sm sm:text-base text-[#2A1F4A] leading-relaxed">
              <span className="font-extrabold text-[#6C4CF1]">คำใบ้: </span>
              {exercise.explanation.slice(0, 140)}
              {exercise.explanation.length > 140 ? '...' : ''}
            </div>
          )}
        </form>
      ) : (
        /* Result State */
        <div className="space-y-4 pt-1">
          <div
            className={`p-4 rounded-2xl flex items-start gap-3 border ${
              submittedAttempt.is_correct
                ? 'bg-[#E6F9C4] border-[#C8F04A] text-[#2A1F4A]'
                : 'bg-[#FFE4EE] border-pink-200 text-[#2A1F4A]'
            }`}
          >
            {submittedAttempt.is_correct ? (
              <Check className="w-6 h-6 shrink-0 mt-0.5 text-green-600 stroke-[3]" />
            ) : (
              <X className="w-6 h-6 shrink-0 mt-0.5 text-pink-600 stroke-[3]" />
            )}
            <div className="text-base">
              <div className="font-extrabold">
                {submittedAttempt.is_correct ? 'ถูกต้องครับ ยอดเยี่ยมมาก! 🎉' : 'ยังไม่ตรงกับเฉลย'}
              </div>
              <div className="text-sm font-semibold text-[#6E6690] mt-1">
                คำตอบของคุณ:{' '}
                <span className="font-extrabold text-[#2A1F4A]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {submittedAttempt.user_answer}
                </span>
              </div>
            </div>
          </div>

          {/* Correct answer & explanation */}
          <div className="p-5 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] text-base space-y-2">
            <div>
              <span className="text-xs font-extrabold text-[#6E6690] block uppercase">เฉลยที่ถูกต้อง</span>
              <span
                className="font-extrabold text-[#2A1F4A] text-lg sm:text-xl"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {exercise.answer}
              </span>
            </div>
            {exercise.explanation && (
              <div className="text-sm sm:text-base text-[#4B3F72] leading-relaxed pt-2 border-t border-[#EEE6D6]">
                <span className="font-extrabold text-[#2A1F4A]">คำอธิบาย: </span>
                {exercise.explanation}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EEE6D6] text-sm font-extrabold text-[#6E6690] hover:text-[#2A1F4A] hover:bg-[#F4F0FF] transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-[#6C4CF1]" />
              <span>ลองทำใหม่อีกรอบ</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
