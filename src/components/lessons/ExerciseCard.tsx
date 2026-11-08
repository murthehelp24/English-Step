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

    // Also allow slash variants only when NOT selecting from fixed choice labels containing '/'
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

    setInputAnswer(rawValue.trim());
    setSubmittedAttempt(attempt);
    setIsSubmitting(false);
    onAttemptSaved?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitValue(inputAnswer);
  };

  const handleRetry = () => {
    setSubmittedAttempt(undefined);
  };

  const kindLabels: Record<string, string> = {
    recall: 'คำศัพท์และ Chunks',
    gap: 'เติมคำในช่องว่าง',
    reorder: 'เรียงคำเป็นประโยค',
    comprehension: 'ฟังและจับใจความ',
    translation: 'เขียนภาษาอังกฤษ',
    dictation: 'ฟังแล้วเขียนตามเสียง',
    dictogloss: 'Dictogloss ฟังจับโครงสร้าง',
    error_fix: 'แก้จุดพลาดแบบคนไทย',
    choice: 'เลือกคำตอบที่ถูกต้อง',
    free: 'ตอบอิสระ',
  };

  const playableAudioText =
    exercise.audio_text || (exercise.kind === 'dictation' ? exercise.answer : undefined);

  return (
    <div className="p-6 sm:p-8 bg-lesson-surface rounded-2xl space-y-5 transition-colors duration-200">
      {/* Header: Number & Category */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="inline-block px-3 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg font-bold">
          ข้อที่ {index + 1}{totalCount ? ` จาก ${totalCount}` : ''}
        </span>
        <span className="font-semibold text-muted-foreground">
          {kindLabels[exercise.kind] || exercise.kind}
        </span>
      </div>

      {/* Prompt */}
      <div className="text-foreground font-bold text-lg sm:text-xl leading-relaxed whitespace-pre-line">
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
                    className={`w-full text-left p-4 rounded-xl bg-background transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'ring-2 ring-accent font-bold text-foreground'
                        : 'hover:opacity-90 text-foreground'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-surface text-muted-foreground'
                      }`}
                    >
                      {String.fromCharCode(65 + cIdx)}
                    </span>
                    <span className="font-display text-base leading-relaxed">{choice}</span>
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
              className="w-full bg-background border-2 border-control-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-display focus:border-accent focus:outline-none transition-colors"
            />
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2.5 rounded-xl bg-background text-sm font-bold text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{showHint ? 'ซ่อนคำใบ้' : 'ขอคำใบ้'}</span>
            </button>

            <button
              type="submit"
              disabled={!inputAnswer.trim() || isSubmitting}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-extrabold text-base px-7 py-3 rounded-xl hover:brightness-105 disabled:opacity-40 transition-all"
            >
              <span>ตรวจคำตอบ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="p-4 bg-background rounded-xl text-sm sm:text-base text-foreground leading-relaxed">
              <span className="font-bold text-accent">คำใบ้: </span>
              {exercise.explanation.slice(0, 140)}
              {exercise.explanation.length > 140 ? '...' : ''}
            </div>
          )}
        </form>
      ) : (
        /* Result State */
        <div className="space-y-4 pt-1">
          <div
            className={`p-4 rounded-xl flex items-start gap-3 ${
              submittedAttempt.is_correct
                ? 'bg-success-bg text-success'
                : 'bg-error-bg text-error'
            }`}
          >
            {submittedAttempt.is_correct ? (
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5 text-success" />
            ) : (
              <X className="w-6 h-6 flex-shrink-0 mt-0.5 text-error" />
            )}
            <div className="text-base">
              <div className="font-bold">
                {submittedAttempt.is_correct ? 'ถูกต้องครับ ยอดเยี่ยม!' : 'ยังไม่ตรงกับเฉลย'}
              </div>
              <div className="text-sm text-foreground mt-1">
                คำตอบของคุณ:{' '}
                <span className="font-display font-semibold">{submittedAttempt.user_answer}</span>
              </div>
            </div>
          </div>

          {/* Correct answer & explanation */}
          <div className="p-5 bg-background rounded-xl text-base space-y-2">
            <div>
              <span className="text-sm font-bold text-muted-foreground block">เฉลยที่ถูกต้อง</span>
              <span className="font-bold text-foreground font-display text-lg sm:text-xl">
                {exercise.answer}
              </span>
            </div>
            {exercise.explanation && (
              <div className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 border-t border-border">
                <span className="font-bold text-foreground">คำอธิบาย: </span>
                {exercise.explanation}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ลองทำใหม่อีกรอบ</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
