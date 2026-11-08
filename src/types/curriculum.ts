export interface VocabularyItem {
  en: string;
  th: string;
}

export interface ExampleItem {
  en: string;
  th: string;
}

export interface ListeningBlock {
  script: string;
  question: string;
  answer: string;
  dictation: string;
  note: string;
}

export type ExerciseKind = 'recall' | 'gap' | 'reorder' | 'comprehension' | 'translation' | 'dictation' | 'choice' | 'free';

export interface ExerciseItem {
  id: string;
  kind: ExerciseKind;
  prompt: string;
  answer: string;
  explanation: string;
  choices?: string[];
}

export interface Lesson {
  id: string; // e.g. "day-001"
  day: number;
  week: number;
  week_title: string;
  title: string;
  type: 'lesson' | 'review' | 'assessment';
  minutes: number;
  objective: string;
  explanation: string;
  extra?: string;
  vocabulary: VocabularyItem[];
  examples: ExampleItem[];
  listening: ListeningBlock;
  reading: string;
  exercises: ExerciseItem[];
  writing: string;
  writing_sample: string;
  writing_sample_note?: string;
  review_days?: number[];
  homework?: string;
}

export interface WeekOverview {
  week: number;
  title: string;
  summary?: string;
  focus?: string;
  lesson_ids: string[];
}

export interface CurriculumData {
  title: string;
  version: string;
  created: string;
  locale: string;
  timezone: string;
  status: string;
  duration_days: number;
  minutes_per_day: number;
  guide_markdown?: string;
  weeks: WeekOverview[];
  lessons: Lesson[];
}
