export type ThemePreference = 'light' | 'dark' | 'system';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  timezone: string;
  target_minutes: number;
  theme_preference: ThemePreference;
  started_at: string;
  onboarding_completed: boolean;
}

export type LessonStatus = 'not_started' | 'in_progress' | 'completed';

export interface ExerciseAttempt {
  id: string;
  lesson_id: string;
  exercise_id: string;
  user_answer: string;
  is_correct: boolean;
  score?: number; // 0-100
  hint_used: boolean;
  feedback?: string;
  attempted_at: string;
}

export interface LessonProgress {
  lesson_id: string;
  status: LessonStatus;
  started_at?: string;
  completed_at?: string;
  last_activity_at: string;
  writing_submission?: string;
  attempts: Record<string, ExerciseAttempt>; // exercise_id -> latest attempt
}

export interface MistakeItem {
  id: string;
  lesson_id: string;
  lesson_title: string;
  exercise_id: string;
  prompt: string;
  original_answer: string;
  correct_answer: string;
  explanation: string;
  category: string;
  recorded_at: string;
  resolved: boolean;
}

export interface ReviewItem {
  id: string;
  mistake_id: string;
  lesson_id: string;
  prompt: string;
  correct_answer: string;
  explanation: string;
  stage: number; // 1, 2, 3, 4 (corresponding to intervals: 1d, 3d, 7d, 14d)
  next_due_at: string;
  last_reviewed_at?: string;
  history: {
    reviewed_at: string;
    user_answer: string;
    is_correct: boolean;
  }[];
}

export interface ChatMessage {
  id: string;
  lesson_id?: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

export interface StoredAppData {
  profile: UserProfile;
  lessons_progress: Record<string, LessonProgress>;
  mistakes: MistakeItem[];
  review_items: ReviewItem[];
  saved_vocabulary: string[]; // array of en words
  chat_messages: Record<string, ChatMessage[]>; // lesson_id -> messages
  last_sync_at?: string;
}
