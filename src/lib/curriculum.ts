import rawIndex from '@/data/curriculum-index.json';
import rawVocabularyIndex from '@/data/vocabulary-index.json';
import {
  CurriculumIndex,
  LessonSummary,
  PhaseOverview,
  VocabularyIndexEntry,
  WeekOverview,
} from '@/types/curriculum';

export const curriculumIndex = rawIndex as unknown as CurriculumIndex;
const vocabularyIndex = rawVocabularyIndex as unknown as VocabularyIndexEntry[];

export function getAllPhases(): PhaseOverview[] {
  return curriculumIndex.phases || [];
}

export function getAllWeeks(): WeekOverview[] {
  return curriculumIndex.weeks || [];
}

export function getWeeksByPhase(phase: number): WeekOverview[] {
  return getAllWeeks().filter((w) => (w.phase ?? 0) === phase);
}

export function getWeekByNumber(weekNumber: number): WeekOverview | undefined {
  return getAllWeeks().find((w) => w.week === weekNumber);
}

export function getAllLessonSummaries(): LessonSummary[] {
  return curriculumIndex.lessons || [];
}

/**
 * Backward-compatible lightweight accessor returning lesson summaries
 * without shipping full curriculum bodies to the client bundle.
 */
export function getAllLessons(): LessonSummary[] {
  return getAllLessonSummaries();
}

export function getLessonSummaryById(id: string): LessonSummary | undefined {
  return getAllLessonSummaries().find((l) => l.id === id);
}

export function getLessonSummaryByDay(dayNumber: number): LessonSummary | undefined {
  return getAllLessonSummaries().find((l) => l.day === dayNumber);
}

export function getLessonSummariesByWeek(weekNumber: number): LessonSummary[] {
  return getAllLessonSummaries().filter((l) => l.week === weekNumber);
}

export function getLessonsByWeek(weekNumber: number): LessonSummary[] {
  return getLessonSummariesByWeek(weekNumber);
}

export function getLessonNeighbors(lessonId: string): {
  prevLesson: LessonSummary | null;
  nextLesson: LessonSummary | null;
} {
  const summaries = getAllLessonSummaries();
  const idx = summaries.findIndex((l) => l.id === lessonId);
  return {
    prevLesson: idx > 0 ? summaries[idx - 1] : null,
    nextLesson: idx >= 0 && idx < summaries.length - 1 ? summaries[idx + 1] : null,
  };
}

export function getAllVocabulary(): VocabularyIndexEntry[] {
  return vocabularyIndex;
}

export function getTotalStats() {
  const lessons = getAllLessonSummaries();
  const weeks = getAllWeeks();
  const phases = getAllPhases();

  return {
    totalDays: curriculumIndex.duration_days || lessons.length,
    totalWeeks: weeks.length,
    totalPhases: phases.length,
    totalExercises:
      curriculumIndex.total_exercises ||
      lessons.reduce((sum, l) => sum + (l.exerciseCount || 0), 0),
    totalVocab:
      curriculumIndex.total_vocab ||
      vocabularyIndex.length ||
      lessons.reduce((sum, l) => sum + (l.vocabCount || 0), 0),
  };
}
