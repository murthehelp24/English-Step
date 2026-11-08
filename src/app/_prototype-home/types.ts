// PROTOTYPE — throwaway. Shared props for the homepage mood/tone variants.
// Question: "What should the new, easier homepage look & feel like?"
// Three variants on the real `/` route, switchable via `?variant=A|B|C`.
// No `?variant` = the current production homepage.
import type { LessonSummary } from '@/types/curriculum';

export interface HomeVariantProps {
  lesson: LessonSummary;
  weekLessons: LessonSummary[];
  currentDay: number;
  totalDays: number;
  completedCount: number;
  completedIds: Set<string>;
  dueCount: number;
  totalReviewCount: number;
  reviewSample: { original: string; correct: string };
}

// STUB: the summary has no per-section minutes, so split the lesson time
// into the 4 core parts proportionally. Good enough to judge the layout.
export function lessonParts(minutes: number) {
  const m = minutes || 60;
  return [
    { key: 'sound', th: 'เสียง & IPA', en: 'Listen', min: Math.round(m * 0.25) },
    { key: 'vocab', th: 'ศัพท์ & Chunks', en: 'Words', min: Math.round(m * 0.25) },
    { key: 'practice', th: 'แบบฝึก', en: 'Practice', min: Math.round(m * 0.3) },
    { key: 'speak', th: 'ฝึกพูด 4/3/2', en: 'Speak', min: Math.round(m * 0.2) },
  ];
}
