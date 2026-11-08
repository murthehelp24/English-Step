export interface VocabularyItem {
  en: string;
  th: string;
  ipa?: string;
  chunk?: string;
  chunk_th?: string;
}

export interface ExampleItem {
  en: string;
  th: string;
  note?: string;
}

export interface ListeningBlock {
  script: string;
  question: string;
  answer: string;
  dictation: string;
  note: string;
  connected_speech?: string;
  dictogloss_prompt?: string;
}

export interface SoundFocusBlock {
  title: string;
  ipa: string;
  connected_speech: string;
  drill: string;
}

export interface ThaiL1WarningBlock {
  mistake_example: string;
  why_thai_fails: string;
  fix_rule: string;
}

export interface Speaking432Block {
  topic: string;
  bullets: string[];
  sample_outline?: string;
}

export interface TimeBreakdownItem {
  label: string;
  minutes: number;
}

export type ExerciseKind =
  | 'recall'
  | 'gap'
  | 'reorder'
  | 'comprehension'
  | 'translation'
  | 'dictation'
  | 'dictogloss'
  | 'error_fix'
  | 'choice'
  | 'free';

export interface ExerciseItem {
  id: string;
  kind: ExerciseKind;
  prompt: string;
  answer: string;
  explanation: string;
  choices?: string[];
  audio_text?: string;
}

export interface Lesson {
  id: string; // e.g. "day-001"
  day: number;
  week: number;
  week_title: string;
  title: string;
  phase?: number;
  phase_title?: string;
  cefr_level?: string;
  type: 'lesson' | 'review' | 'assessment';
  minutes: number;
  objective: string;
  explanation: string;
  extra?: string;
  sound_focus?: SoundFocusBlock;
  l1_warning?: ThaiL1WarningBlock;
  time_breakdown?: TimeBreakdownItem[];
  vocabulary: VocabularyItem[];
  examples: ExampleItem[];
  listening: ListeningBlock;
  reading: string;
  exercises: ExerciseItem[];
  writing: string;
  writing_sample: string;
  writing_sample_note?: string;
  speaking_432?: Speaking432Block;
  review_days?: number[];
  homework?: string;
}

export interface LessonSummary {
  id: string;
  day: number;
  week: number;
  week_title: string;
  phase: number;
  phase_title: string;
  cefr_level: string;
  title: string;
  type: 'lesson' | 'review' | 'assessment';
  minutes: number;
  objective: string;
  vocabCount: number;
  exerciseCount: number;
  headlineEnglish: string;
  headlineThai: string;
}

export interface WeekOverview {
  week: number;
  phase?: number;
  phase_title?: string;
  cefr_level?: string;
  title: string;
  summary?: string;
  focus?: string;
  lesson_ids: string[];
}

export interface PhaseOverview {
  phase: number;
  title: string;
  cefr: string;
  summary: string;
  weeks: number[];
  days_range: [number, number];
}

export interface VocabularyIndexEntry extends VocabularyItem {
  lesson_id: string;
  day: number;
  week: number;
  phase: number;
  cefr_level: string;
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
  phases?: PhaseOverview[];
  weeks: WeekOverview[];
  lessons: Lesson[];
}

export interface CurriculumIndex {
  title: string;
  version: string;
  duration_days: number;
  minutes_per_day: number;
  total_exercises: number;
  total_vocab: number;
  phases: PhaseOverview[];
  weeks: WeekOverview[];
  lessons: LessonSummary[];
}
