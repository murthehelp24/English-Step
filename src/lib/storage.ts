'use client';

import {
  StoredAppData,
  UserProfile,
  LessonProgress,
  ExerciseAttempt,
  MistakeItem,
  ReviewItem,
  ChatMessage,
} from '@/types/learning';

const APP_DATA_KEY = 'english_steps_user_data_v1';

const DEFAULT_PROFILE: UserProfile = {
  id: 'local-owner',
  name: 'ผู้เรียน',
  email: 'owner@englishsteps.local',
  timezone: 'Asia/Bangkok',
  target_minutes: 60,
  theme_preference: 'system',
  started_at: new Date().toISOString(),
  onboarding_completed: false,
};

const INITIAL_DATA: StoredAppData = {
  profile: DEFAULT_PROFILE,
  lessons_progress: {},
  mistakes: [],
  review_items: [],
  saved_vocabulary: [],
  chat_messages: {},
  last_sync_at: undefined,
};

export function getStoredData(): StoredAppData {
  if (typeof window === 'undefined') {
    return INITIAL_DATA;
  }
  try {
    const raw = localStorage.getItem(APP_DATA_KEY);
    if (!raw) return INITIAL_DATA;
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_DATA,
      ...parsed,
      profile: { ...DEFAULT_PROFILE, ...(parsed.profile || {}) },
    };
  } catch (e) {
    console.error('Failed to parse stored app data:', e);
    return INITIAL_DATA;
  }
}

export function saveStoredData(data: StoredAppData): void {
  if (typeof window === 'undefined') return;
  try {
    data.last_sync_at = new Date().toISOString();
    localStorage.setItem(APP_DATA_KEY, JSON.stringify(data));
    // Dispatch custom event for reactive cross-component updates
    window.dispatchEvent(new Event('english_steps_storage_updated'));
  } catch (e) {
    console.error('Failed to save app data:', e);
  }
}

// User Profile Operations
export function updateProfile(updates: Partial<UserProfile>): UserProfile {
  const data = getStoredData();
  data.profile = { ...data.profile, ...updates };
  saveStoredData(data);
  return data.profile;
}

// Lesson Progress Operations
export function getLessonProgress(lessonId: string): LessonProgress {
  const data = getStoredData();
  return (
    data.lessons_progress[lessonId] || {
      lesson_id: lessonId,
      status: 'not_started',
      last_activity_at: new Date().toISOString(),
      attempts: {},
    }
  );
}

export function saveExerciseAttempt(
  lessonId: string,
  exerciseId: string,
  userAnswer: string,
  isCorrect: boolean,
  feedback?: string,
  hintUsed: boolean = false
): ExerciseAttempt {
  const data = getStoredData();
  const currentProgress = getLessonProgress(lessonId);

  const attempt: ExerciseAttempt = {
    id: `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    lesson_id: lessonId,
    exercise_id: exerciseId,
    user_answer: userAnswer,
    is_correct: isCorrect,
    hint_used: hintUsed,
    feedback,
    attempted_at: new Date().toISOString(),
  };

  currentProgress.attempts[exerciseId] = attempt;
  currentProgress.last_activity_at = new Date().toISOString();
  if (currentProgress.status === 'not_started') {
    currentProgress.status = 'in_progress';
    currentProgress.started_at = new Date().toISOString();
  }

  data.lessons_progress[lessonId] = currentProgress;
  saveStoredData(data);
  return attempt;
}

export function saveWritingSubmission(lessonId: string, submission: string): void {
  const data = getStoredData();
  const currentProgress = getLessonProgress(lessonId);
  currentProgress.writing_submission = submission;
  currentProgress.last_activity_at = new Date().toISOString();
  data.lessons_progress[lessonId] = currentProgress;
  saveStoredData(data);
}

export function completeLesson(lessonId: string): void {
  const data = getStoredData();
  const currentProgress = getLessonProgress(lessonId);
  currentProgress.status = 'completed';
  currentProgress.completed_at = new Date().toISOString();
  currentProgress.last_activity_at = new Date().toISOString();
  data.lessons_progress[lessonId] = currentProgress;
  saveStoredData(data);
}

// Mistake & Spaced Repetition Review Operations
export function recordMistake(
  lessonId: string,
  lessonTitle: string,
  exerciseId: string,
  prompt: string,
  originalAnswer: string,
  correctAnswer: string,
  explanation: string,
  category: string = 'general'
): MistakeItem {
  const data = getStoredData();

  const mistake: MistakeItem = {
    id: `mistake-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    lesson_id: lessonId,
    lesson_title: lessonTitle,
    exercise_id: exerciseId,
    prompt,
    original_answer: originalAnswer,
    correct_answer: correctAnswer,
    explanation,
    category,
    recorded_at: new Date().toISOString(),
    resolved: false,
  };

  data.mistakes.unshift(mistake);

  // Automatically enqueue for Spaced Repetition: Stage 1 = due in 1 day (or immediate for testing)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const reviewItem: ReviewItem = {
    id: `review-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    mistake_id: mistake.id,
    lesson_id: lessonId,
    prompt,
    correct_answer: correctAnswer,
    explanation,
    stage: 1, // Stage 1 (1d), Stage 2 (3d), Stage 3 (7d), Stage 4 (14d)
    next_due_at: tomorrow.toISOString(),
    history: [],
  };

  data.review_items.push(reviewItem);
  saveStoredData(data);
  return mistake;
}

export function getDueReviewItems(): ReviewItem[] {
  const data = getStoredData();
  const now = new Date();
  return data.review_items.filter((item) => new Date(item.next_due_at) <= now);
}

export function getAllReviewItems(): ReviewItem[] {
  const data = getStoredData();
  return data.review_items;
}

export function submitReviewAttempt(
  reviewItemId: string,
  userAnswer: string,
  isCorrect: boolean
): ReviewItem | undefined {
  const data = getStoredData();
  const itemIndex = data.review_items.findIndex((item) => item.id === reviewItemId);
  if (itemIndex === -1) return undefined;

  const item = data.review_items[itemIndex];
  const now = new Date();
  item.last_reviewed_at = now.toISOString();
  item.history.push({
    reviewed_at: now.toISOString(),
    user_answer: userAnswer,
    is_correct: isCorrect,
  });

  const INTERVALS = [1, 3, 7, 14]; // Spaced repetition days

  if (isCorrect) {
    if (item.stage < 4) {
      item.stage += 1;
      const nextDue = new Date();
      nextDue.setDate(nextDue.getDate() + INTERVALS[item.stage - 1]);
      item.next_due_at = nextDue.toISOString();
    } else {
      // Completed all 4 stages
      const mistake = data.mistakes.find((m) => m.id === item.mistake_id);
      if (mistake) mistake.resolved = true;
    }
  } else {
    // If mistake repeated, reset back to stage 1 (due in 1 day)
    item.stage = 1;
    const nextDue = new Date();
    nextDue.setDate(nextDue.getDate() + 1);
    item.next_due_at = nextDue.toISOString();
  }

  data.review_items[itemIndex] = item;
  saveStoredData(data);
  return item;
}

// Vocabulary Bookmark Operations
export function toggleSaveVocabulary(enWord: string): boolean {
  const data = getStoredData();
  const index = data.saved_vocabulary.indexOf(enWord);
  let isSaved = false;
  if (index > -1) {
    data.saved_vocabulary.splice(index, 1);
    isSaved = false;
  } else {
    data.saved_vocabulary.push(enWord);
    isSaved = true;
  }
  saveStoredData(data);
  return isSaved;
}

export function isVocabularySaved(enWord: string): boolean {
  const data = getStoredData();
  return data.saved_vocabulary.includes(enWord);
}

// Chat Messages Operations
export function getChatMessages(lessonId: string): ChatMessage[] {
  const data = getStoredData();
  return data.chat_messages[lessonId] || [];
}

export function addChatMessage(lessonId: string, role: 'user' | 'assistant', content: string): ChatMessage {
  const data = getStoredData();
  if (!data.chat_messages[lessonId]) {
    data.chat_messages[lessonId] = [];
  }
  const message: ChatMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    lesson_id: lessonId,
    role,
    content,
    timestamp: new Date().toISOString(),
  };
  data.chat_messages[lessonId].push(message);
  saveStoredData(data);
  return message;
}

// Data Export & Reset (Clause 12: Data ownership, backup & restore)
export function exportUserDataAsJSON(): string {
  const data = getStoredData();
  return JSON.stringify(data, null, 2);
}

export function importUserDataFromJSON(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') return false;
    saveStoredData(parsed);
    return true;
  } catch (e) {
    console.error('Import failed:', e);
    return false;
  }
}

export function resetAllUserData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(APP_DATA_KEY);
  window.dispatchEvent(new Event('english_steps_storage_updated'));
}
