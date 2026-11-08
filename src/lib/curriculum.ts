import rawCurriculum from '@/data/curriculum.json';
import { CurriculumData, Lesson, WeekOverview, VocabularyItem } from '@/types/curriculum';

export const curriculumData = rawCurriculum as unknown as CurriculumData;

export function getAllLessons(): Lesson[] {
  return curriculumData.lessons || [];
}

export function getLessonById(id: string): Lesson | undefined {
  return curriculumData.lessons.find((l) => l.id === id);
}

export function getLessonByDay(dayNumber: number): Lesson | undefined {
  return curriculumData.lessons.find((l) => l.day === dayNumber);
}

export function getLessonsByWeek(weekNumber: number): Lesson[] {
  return curriculumData.lessons.filter((l) => l.week === weekNumber);
}

export function getAllWeeks(): WeekOverview[] {
  if (curriculumData.weeks && curriculumData.weeks.length > 0) {
    return curriculumData.weeks;
  }
  // Fallback to derive from lessons
  const weekMap = new Map<number, WeekOverview>();
  curriculumData.lessons.forEach((l) => {
    if (!weekMap.has(l.week)) {
      weekMap.set(l.week, {
        week: l.week,
        title: l.week_title,
        lesson_ids: [],
      });
    }
    weekMap.get(l.week)!.lesson_ids.push(l.id);
  });
  return Array.from(weekMap.values()).sort((a, b) => a.week - b.week);
}

export function getWeekByNumber(weekNumber: number): WeekOverview | undefined {
  const weeks = getAllWeeks();
  return weeks.find((w) => w.week === weekNumber);
}

export function getAllVocabulary(): (VocabularyItem & { lesson_id: string; week: number })[] {
  const allVocab: (VocabularyItem & { lesson_id: string; week: number })[] = [];
  curriculumData.lessons.forEach((l) => {
    if (Array.isArray(l.vocabulary)) {
      l.vocabulary.forEach((v) => {
        allVocab.push({
          ...v,
          lesson_id: l.id,
          week: l.week,
        });
      });
    }
  });
  return allVocab;
}

export function getTotalStats() {
  const lessons = getAllLessons();
  const weeks = getAllWeeks();
  let totalExercises = 0;
  let totalVocab = 0;
  lessons.forEach((l) => {
    totalExercises += (l.exercises || []).length;
    totalVocab += (l.vocabulary || []).length;
  });

  return {
    totalDays: lessons.length,
    totalWeeks: weeks.length,
    totalExercises,
    totalVocab,
  };
}
