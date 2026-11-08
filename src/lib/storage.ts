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
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { generateUuid } from '@/lib/uuid';

const APP_DATA_KEY = 'english_steps_user_data_v1';
const PENDING_BACKUP_KEY = 'english_steps_pending_local_backup_v1';

const DEFAULT_PROFILE: UserProfile = {
  id: 'local-owner',
  name: 'ผู้เรียน',
  email: 'owner@englishsteps.local',
  role: 'owner',
  experience_level: 'zero',
  learning_goal: 'comprehensive',
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

function emitSyncStatus(status: 'syncing' | 'synced' | 'error' | 'local', message?: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent('english_steps_sync_status', {
      detail: { status, message },
    })
  );
}

async function postSyncAction(payload: Record<string, unknown>): Promise<boolean> {
  if (typeof window === 'undefined' || !isSupabaseConfigured) {
    return false;
  }

  try {
    emitSyncStatus('syncing');
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      emitSyncStatus('error', errData.error || 'ซิงก์ข้อมูลไม่สำเร็จ');
      return false;
    }

    emitSyncStatus('synced');
    return true;
  } catch {
    emitSyncStatus('error', 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ซิงก์ได้ชั่วคราว');
    return false;
  }
}

function hasMeaningfulProgress(data: StoredAppData): boolean {
  return (
    Object.keys(data.lessons_progress || {}).length > 0 ||
    (data.mistakes || []).length > 0 ||
    (data.review_items || []).length > 0 ||
    (data.saved_vocabulary || []).length > 0
  );
}

export function getPendingLocalBackup(): StoredAppData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(PENDING_BACKUP_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredAppData;
  } catch {
    return null;
  }
}

export function clearPendingLocalBackup(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PENDING_BACKUP_KEY);
  window.dispatchEvent(new Event('english_steps_storage_updated'));
}

export async function importPendingLocalBackupToCloud(): Promise<boolean> {
  const backup = getPendingLocalBackup();
  if (!backup) return false;

  const ok = await postSyncAction({
    action: 'import_full_data',
    data: backup,
  });

  if (ok) {
    clearPendingLocalBackup();
    await syncFromCloud();
  }
  return ok;
}

export async function syncFromCloud(): Promise<{
  ok: boolean;
  mode: 'cloud' | 'local' | 'unauthenticated' | 'error';
  data?: StoredAppData;
}> {
  if (typeof window === 'undefined' || !isSupabaseConfigured) {
    return { ok: false, mode: 'local' };
  }

  try {
    emitSyncStatus('syncing');
    const res = await fetch('/api/sync', { method: 'GET', cache: 'no-store' });

    if (res.status === 401 || res.status === 403) {
      emitSyncStatus('local');
      return { ok: false, mode: 'unauthenticated' };
    }

    if (!res.ok) {
      emitSyncStatus('error', 'โหลดข้อมูลจากคลาวด์ไม่สำเร็จ');
      return { ok: false, mode: 'error' };
    }

    const payload = await res.json();
    if (payload.mode !== 'cloud' || !payload.data) {
      return { ok: false, mode: 'local' };
    }

    const cloudData = payload.data as StoredAppData;
    const localData = getStoredData();

    // Preserve pre-login local progress separately so the user can choose explicitly to import it
    if (
      localData.profile.id === 'local-owner' &&
      hasMeaningfulProgress(localData) &&
      !hasMeaningfulProgress(cloudData) &&
      !localStorage.getItem(PENDING_BACKUP_KEY)
    ) {
      localStorage.setItem(PENDING_BACKUP_KEY, JSON.stringify(localData));
    }

    // Preserve local vocabulary cache if optional SQL column hasn't been added yet
    if (payload.hasSavedVocabColumn === false && localData.saved_vocabulary.length > 0) {
      cloudData.saved_vocabulary = localData.saved_vocabulary;
    }

    saveStoredData(cloudData);
    emitSyncStatus('synced');
    return { ok: true, mode: 'cloud', data: cloudData };
  } catch {
    emitSyncStatus('error', 'ไม่สามารถเชื่อมต่อคลาวด์ได้ชั่วคราว');
    return { ok: false, mode: 'error' };
  }
}

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
    window.dispatchEvent(new Event('english_steps_storage_updated'));
  } catch (e) {
    console.error('Failed to save app data:', e);
  }
}

// User Profile Operations
export function updateProfile(
  updates: Partial<UserProfile>,
  options: { skipCloudSync?: boolean } = {}
): UserProfile {
  const data = getStoredData();
  data.profile = { ...data.profile, ...updates };
  saveStoredData(data);

  if (!options.skipCloudSync) {
    void postSyncAction({
      action: 'update_profile',
      updates: {
        name: updates.name,
        timezone: updates.timezone,
        target_minutes: updates.target_minutes,
        theme_preference: updates.theme_preference,
        onboarding_completed: updates.onboarding_completed,
        started_at: updates.started_at,
        experience_level: updates.experience_level,
        learning_goal: updates.learning_goal,
      },
    });
  }

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
  const nowIso = new Date().toISOString();

  const attempt: ExerciseAttempt = {
    id: generateUuid(),
    lesson_id: lessonId,
    exercise_id: exerciseId,
    user_answer: userAnswer,
    is_correct: isCorrect,
    hint_used: hintUsed,
    feedback,
    attempted_at: nowIso,
  };

  currentProgress.attempts[exerciseId] = attempt;
  currentProgress.last_activity_at = nowIso;
  if (currentProgress.status === 'not_started') {
    currentProgress.status = 'in_progress';
    currentProgress.started_at = nowIso;
  }

  data.lessons_progress[lessonId] = currentProgress;
  saveStoredData(data);

  void postSyncAction({
    action: 'save_attempt',
    lesson_id: lessonId,
    attempt: {
      id: attempt.id,
      exercise_id: attempt.exercise_id,
      user_answer: attempt.user_answer,
      is_correct: attempt.is_correct,
      hint_used: attempt.hint_used,
      feedback: attempt.feedback,
      attempted_at: attempt.attempted_at,
    },
    status: currentProgress.status,
    started_at: currentProgress.started_at,
    last_activity_at: nowIso,
  });

  return attempt;
}

const writingSyncTimers: Record<string, ReturnType<typeof setTimeout>> = {};

export function saveWritingSubmission(lessonId: string, submission: string): void {
  const data = getStoredData();
  const currentProgress = getLessonProgress(lessonId);
  const nowIso = new Date().toISOString();
  currentProgress.writing_submission = submission;
  currentProgress.last_activity_at = nowIso;
  if (currentProgress.status === 'not_started') {
    currentProgress.status = 'in_progress';
    currentProgress.started_at = nowIso;
  }
  data.lessons_progress[lessonId] = currentProgress;
  saveStoredData(data);

  if (writingSyncTimers[lessonId]) {
    clearTimeout(writingSyncTimers[lessonId]);
  }
  writingSyncTimers[lessonId] = setTimeout(() => {
    void postSyncAction({
      action: 'save_writing',
      lesson_id: lessonId,
      writing_submission: submission,
      last_activity_at: nowIso,
    });
    delete writingSyncTimers[lessonId];
  }, 600);
}

export function completeLesson(lessonId: string): void {
  const data = getStoredData();
  const currentProgress = getLessonProgress(lessonId);
  const nowIso = new Date().toISOString();
  currentProgress.status = 'completed';
  currentProgress.completed_at = nowIso;
  currentProgress.last_activity_at = nowIso;
  data.lessons_progress[lessonId] = currentProgress;
  saveStoredData(data);

  void postSyncAction({
    action: 'complete_lesson',
    lesson_id: lessonId,
    completed_at: nowIso,
    last_activity_at: nowIso,
  });
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
  const nowIso = new Date().toISOString();

  const mistake: MistakeItem = {
    id: generateUuid(),
    lesson_id: lessonId,
    lesson_title: lessonTitle,
    exercise_id: exerciseId,
    prompt,
    original_answer: originalAnswer,
    correct_answer: correctAnswer,
    explanation,
    category,
    recorded_at: nowIso,
    resolved: false,
  };

  data.mistakes.unshift(mistake);

  // Spaced Repetition Stage 1 = due in 1 day
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const reviewItem: ReviewItem = {
    id: generateUuid(),
    mistake_id: mistake.id,
    lesson_id: lessonId,
    prompt,
    correct_answer: correctAnswer,
    explanation,
    stage: 1, // Stage 1 (1d), Stage 2 (3d), Stage 3 (7d), Stage 4 (14d)
    next_due_at: tomorrow.toISOString(),
    history: [],
  };

  data.review_items.unshift(reviewItem);
  saveStoredData(data);

  void postSyncAction({
    action: 'record_mistake',
    mistake: {
      id: mistake.id,
      lesson_id: mistake.lesson_id,
      exercise_id: mistake.exercise_id,
      prompt: mistake.prompt,
      original_answer: mistake.original_answer,
      correct_answer: mistake.correct_answer,
      explanation: mistake.explanation,
      category: mistake.category,
      recorded_at: mistake.recorded_at,
      resolved: mistake.resolved,
    },
    review_item: {
      id: reviewItem.id,
      mistake_id: reviewItem.mistake_id,
      lesson_id: reviewItem.lesson_id,
      prompt: reviewItem.prompt,
      correct_answer: reviewItem.correct_answer,
      explanation: reviewItem.explanation,
      stage: reviewItem.stage,
      next_due_at: reviewItem.next_due_at,
    },
  });

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
  const nowIso = now.toISOString();
  item.last_reviewed_at = nowIso;
  item.history.push({
    reviewed_at: nowIso,
    user_answer: userAnswer,
    is_correct: isCorrect,
  });

  const INTERVALS = [1, 3, 7, 14]; // Spaced repetition days
  let resolved = false;

  if (isCorrect) {
    if (item.stage < 4) {
      item.stage += 1;
      const nextDue = new Date();
      nextDue.setDate(nextDue.getDate() + INTERVALS[item.stage - 1]);
      item.next_due_at = nextDue.toISOString();
    } else {
      resolved = true;
      const mistake = data.mistakes.find((m) => m.id === item.mistake_id);
      if (mistake) mistake.resolved = true;
    }
  } else {
    item.stage = 1;
    const nextDue = new Date();
    nextDue.setDate(nextDue.getDate() + 1);
    item.next_due_at = nextDue.toISOString();
  }

  data.review_items[itemIndex] = item;
  saveStoredData(data);

  void postSyncAction({
    action: 'submit_review',
    review_item_id: item.id,
    mistake_id: item.mistake_id,
    stage: item.stage,
    next_due_at: item.next_due_at,
    last_reviewed_at: nowIso,
    resolved,
    history: item.history,
  });

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

  void postSyncAction({
    action: 'save_vocabulary',
    saved_vocabulary: data.saved_vocabulary,
  });

  return isSaved;
}

export function isVocabularySaved(enWord: string): boolean {
  const data = getStoredData();
  return data.saved_vocabulary.includes(enWord);
}

// Chat Messages Operations (Server persistence handled directly by POST /api/chat)
export function getChatMessages(lessonId: string): ChatMessage[] {
  const data = getStoredData();
  return data.chat_messages[lessonId] || [];
}

export function addChatMessage(
  lessonId: string,
  role: 'user' | 'assistant',
  content: string
): ChatMessage {
  const data = getStoredData();
  if (!data.chat_messages[lessonId]) {
    data.chat_messages[lessonId] = [];
  }
  const message: ChatMessage = {
    id: generateUuid(),
    lesson_id: lessonId,
    role,
    content,
    timestamp: new Date().toISOString(),
  };
  data.chat_messages[lessonId].push(message);
  saveStoredData(data);
  return message;
}

// Data Export & Reset
export function exportUserDataAsJSON(): string {
  const data = getStoredData();
  return JSON.stringify(data, null, 2);
}

export function importUserDataFromJSON(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') return false;
    saveStoredData(parsed as StoredAppData);

    void postSyncAction({
      action: 'import_full_data',
      data: parsed,
    });

    return true;
  } catch (e) {
    console.error('Import failed:', e);
    return false;
  }
}

export function resetAllUserData(options: { localOnly?: boolean } = {}): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(APP_DATA_KEY);
  localStorage.removeItem(PENDING_BACKUP_KEY);
  window.dispatchEvent(new Event('english_steps_storage_updated'));

  if (!options.localOnly) {
    void postSyncAction({ action: 'reset_progress' });
  }
}
