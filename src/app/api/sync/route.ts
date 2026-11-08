import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getLessonSummaryById } from '@/lib/curriculum';
import { getVerifiedOwnerSession } from '@/lib/supabase/server';
import { generateUuid, isValidUuid } from '@/lib/uuid';
import {
  ChatMessage,
  ExerciseAttempt,
  ExperienceLevel,
  LessonProgress,
  MistakeItem,
  ReviewItem,
  StoredAppData,
  ThemePreference,
  UserRole,
} from '@/types/learning';

const ProfileUpdateSchema = z.object({
  action: z.literal('update_profile'),
  updates: z.object({
    name: z.string().max(100).optional(),
    timezone: z.string().max(100).optional(),
    target_minutes: z.number().int().min(5).max(360).optional(),
    theme_preference: z.enum(['light', 'dark', 'system']).optional(),
    onboarding_completed: z.boolean().optional(),
    started_at: z.string().optional(),
    experience_level: z.enum(['zero', 'beginner', 'intermediate']).optional(),
    learning_goal: z.string().max(100).optional(),
  }),
});

const SaveAttemptSchema = z.object({
  action: z.literal('save_attempt'),
  lesson_id: z.string().min(1),
  attempt: z.object({
    id: z.string().min(1),
    exercise_id: z.string().min(1),
    user_answer: z.string(),
    is_correct: z.boolean(),
    hint_used: z.boolean(),
    feedback: z.string().optional(),
    attempted_at: z.string(),
  }),
  status: z.enum(['not_started', 'in_progress', 'completed']),
  started_at: z.string().optional(),
  last_activity_at: z.string(),
});

const SaveWritingSchema = z.object({
  action: z.literal('save_writing'),
  lesson_id: z.string().min(1),
  writing_submission: z.string(),
  last_activity_at: z.string(),
});

const CompleteLessonSchema = z.object({
  action: z.literal('complete_lesson'),
  lesson_id: z.string().min(1),
  completed_at: z.string(),
  last_activity_at: z.string(),
});

const RecordMistakeSchema = z.object({
  action: z.literal('record_mistake'),
  mistake: z.object({
    id: z.string().min(1),
    lesson_id: z.string().min(1),
    exercise_id: z.string().min(1),
    prompt: z.string(),
    original_answer: z.string(),
    correct_answer: z.string(),
    explanation: z.string(),
    category: z.string(),
    recorded_at: z.string(),
    resolved: z.boolean(),
  }),
  review_item: z.object({
    id: z.string().min(1),
    mistake_id: z.string().min(1),
    lesson_id: z.string().min(1),
    prompt: z.string(),
    correct_answer: z.string(),
    explanation: z.string(),
    stage: z.number().int().min(1).max(4),
    next_due_at: z.string(),
  }),
});

const SubmitReviewSchema = z.object({
  action: z.literal('submit_review'),
  review_item_id: z.string().min(1),
  mistake_id: z.string().min(1),
  stage: z.number().int().min(1).max(4),
  next_due_at: z.string(),
  last_reviewed_at: z.string(),
  resolved: z.boolean(),
  history: z
    .array(
      z.object({
        reviewed_at: z.string(),
        user_answer: z.string(),
        is_correct: z.boolean(),
      })
    )
    .optional(),
});

const SaveVocabSchema = z.object({
  action: z.literal('save_vocabulary'),
  saved_vocabulary: z.array(z.string()),
});

const ResetProgressSchema = z.object({
  action: z.literal('reset_progress'),
});

const ImportFullDataSchema = z.object({
  action: z.literal('import_full_data'),
  data: z.object({
    profile: z
      .object({
        name: z.string().optional(),
        timezone: z.string().optional(),
        target_minutes: z.number().optional(),
        theme_preference: z.enum(['light', 'dark', 'system']).optional(),
        onboarding_completed: z.boolean().optional(),
        experience_level: z.enum(['zero', 'beginner', 'intermediate']).optional(),
        learning_goal: z.string().optional(),
      })
      .optional(),
    lessons_progress: z.record(z.string(), z.any()).optional(),
    mistakes: z.array(z.any()).optional(),
    review_items: z.array(z.any()).optional(),
    saved_vocabulary: z.array(z.string()).optional(),
    chat_messages: z.record(z.string(), z.array(z.any())).optional(),
  }),
});

const SyncActionSchema = z.discriminatedUnion('action', [
  ProfileUpdateSchema,
  SaveAttemptSchema,
  SaveWritingSchema,
  CompleteLessonSchema,
  RecordMistakeSchema,
  SubmitReviewSchema,
  SaveVocabSchema,
  ResetProgressSchema,
  ImportFullDataSchema,
]);

function isMissingColumnError(err: { code?: string; message?: string } | null): boolean {
  if (!err) return false;
  return (
    err.code === '42703' ||
    err.code === 'PGRST204' ||
    Boolean(err.message && err.message.includes('column'))
  );
}

export async function GET() {
  try {
    const session = await getVerifiedOwnerSession();
    if (!session.configured || !session.supabase) {
      return NextResponse.json({ mode: 'local', configured: false });
    }
    if (!session.user) {
      return NextResponse.json({ error: 'กรุณาเข้าสู่ระบบก่อนใช้งาน' }, { status: 401 });
    }
    if (!session.isAuthorized) {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์เข้าถึงระบบ' }, { status: 403 });
    }

    const userId = session.user.id;
    const sb = session.supabase;

    const [
      profileRes,
      progressRes,
      attemptsRes,
      mistakesRes,
      reviewsRes,
      messagesRes,
    ] = await Promise.all([
      sb.from('profiles').select('*').eq('id', userId).maybeSingle(),
      sb.from('lesson_progress').select('*').eq('user_id', userId),
      sb
        .from('attempts')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: true }),
      sb
        .from('mistakes')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false }),
      sb
        .from('review_items')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false }),
      sb
        .from('messages')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: true }),
    ]);

    let profileRow = profileRes.data;
    if (!profileRow && !profileRes.error) {
      const { data: insertedProfile } = await sb
        .from('profiles')
        .upsert(
          {
            id: userId,
            email: session.user.email || '',
            name: 'ผู้เรียน',
            timezone: 'Asia/Bangkok',
            target_minutes: 60,
            theme_preference: 'system',
            onboarding_completed: false,
          },
          { onConflict: 'id' }
        )
        .select('*')
        .maybeSingle();
      profileRow = insertedProfile;
    }

    const lessonsProgressMap: Record<string, LessonProgress> = {};
    for (const row of progressRes.data || []) {
      lessonsProgressMap[row.lesson_id] = {
        lesson_id: row.lesson_id,
        status: row.status,
        started_at: row.started_at || undefined,
        completed_at: row.completed_at || undefined,
        last_activity_at: row.last_activity_at || new Date().toISOString(),
        writing_submission: row.writing_submission || undefined,
        attempts: {},
      };
    }

    for (const row of attemptsRes.data || []) {
      if (!lessonsProgressMap[row.lesson_id]) {
        lessonsProgressMap[row.lesson_id] = {
          lesson_id: row.lesson_id,
          status: 'in_progress',
          last_activity_at: row.created_at,
          attempts: {},
        };
      }
      const attemptObj: ExerciseAttempt = {
        id: row.id,
        lesson_id: row.lesson_id,
        exercise_id: row.exercise_id,
        user_answer: row.user_answer,
        is_correct: row.is_correct,
        hint_used: Boolean(row.hint_used),
        feedback: row.feedback || undefined,
        attempted_at: row.created_at,
      };
      lessonsProgressMap[row.lesson_id].attempts[row.exercise_id] = attemptObj;
    }

    const mistakes: MistakeItem[] = (mistakesRes.data || []).map((row) => ({
      id: row.id,
      lesson_id: row.lesson_id,
      lesson_title: getLessonSummaryById(row.lesson_id)?.title || row.lesson_id,
      exercise_id: row.exercise_id,
      prompt: row.prompt,
      original_answer: row.original_answer,
      correct_answer: row.correct_answer,
      explanation: row.explanation,
      category: row.category || 'general',
      recorded_at: row.created_at,
      resolved: Boolean(row.resolved),
    }));

    const reviewItems: ReviewItem[] = (reviewsRes.data || []).map((row) => ({
      id: row.id,
      mistake_id: row.mistake_id,
      lesson_id: row.lesson_id,
      prompt: row.prompt,
      correct_answer: row.correct_answer,
      explanation: row.explanation,
      stage: row.stage || 1,
      next_due_at: row.next_due_at,
      last_reviewed_at: row.last_reviewed_at || undefined,
      history: Array.isArray(row.history) ? row.history : [],
    }));

    const chatMessages: Record<string, ChatMessage[]> = {};
    for (const row of messagesRes.data || []) {
      if (!chatMessages[row.lesson_id]) {
        chatMessages[row.lesson_id] = [];
      }
      chatMessages[row.lesson_id].push({
        id: row.id,
        lesson_id: row.lesson_id,
        role: row.role,
        content: row.content,
        timestamp: row.created_at,
      });
    }

    const savedVocab = Array.isArray(profileRow?.saved_vocabulary)
      ? profileRow.saved_vocabulary
      : null;

    const appData: StoredAppData = {
      profile: {
        id: userId,
        name: profileRow?.name || 'ผู้เรียน',
        email: profileRow?.email || session.user.email || '',
        role: (profileRow?.role || session.role) as UserRole,
        experience_level: (profileRow?.experience_level || 'zero') as ExperienceLevel,
        learning_goal: profileRow?.learning_goal || 'comprehensive',
        timezone: profileRow?.timezone || 'Asia/Bangkok',
        target_minutes: profileRow?.target_minutes || 60,
        theme_preference: (profileRow?.theme_preference || 'system') as ThemePreference,
        started_at:
          profileRow?.started_at ||
          profileRow?.created_at ||
          new Date().toISOString(),
        onboarding_completed: Boolean(profileRow?.onboarding_completed),
      },
      lessons_progress: lessonsProgressMap,
      mistakes,
      review_items: reviewItems,
      saved_vocabulary: savedVocab || [],
      chat_messages: chatMessages,
      last_sync_at: new Date().toISOString(),
    };

    return NextResponse.json({
      mode: 'cloud',
      configured: true,
      hasSavedVocabColumn: savedVocab !== null,
      data: appData,
    });
  } catch (err) {
    console.error('GET /api/sync failed:', err);
    return NextResponse.json(
      { error: 'ไม่สามารถโหลดข้อมูลจาก Supabase ได้' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getVerifiedOwnerSession();
    if (!session.configured || !session.supabase) {
      return NextResponse.json({ mode: 'local', synced: false });
    }
    if (!session.user) {
      return NextResponse.json({ error: 'กรุณาเข้าสู่ระบบก่อนใช้งาน' }, { status: 401 });
    }
    if (!session.isAuthorized) {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์เข้าถึงระบบ' }, { status: 403 });
    }

    const rawBody = await req.json();
    const parsed = SyncActionSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'รูปแบบข้อมูลสำหรับซิงก์ไม่ถูกต้อง' },
        { status: 400 }
      );
    }

    const payload = parsed.data;
    const sb = session.supabase;
    const userId = session.user.id;

    switch (payload.action) {
      case 'update_profile': {
        const updateFields: Record<string, unknown> = {
          id: userId,
          email: session.user.email || '',
          updated_at: new Date().toISOString(),
        };
        if (payload.updates.name !== undefined) updateFields.name = payload.updates.name;
        if (payload.updates.timezone !== undefined) updateFields.timezone = payload.updates.timezone;
        if (payload.updates.target_minutes !== undefined)
          updateFields.target_minutes = payload.updates.target_minutes;
        if (payload.updates.theme_preference !== undefined)
          updateFields.theme_preference = payload.updates.theme_preference;
        if (payload.updates.onboarding_completed !== undefined)
          updateFields.onboarding_completed = payload.updates.onboarding_completed;
        if (payload.updates.started_at !== undefined)
          updateFields.started_at = payload.updates.started_at;
        if (payload.updates.experience_level !== undefined)
          updateFields.experience_level = payload.updates.experience_level;
        if (payload.updates.learning_goal !== undefined)
          updateFields.learning_goal = payload.updates.learning_goal;

        let { error } = await sb
          .from('profiles')
          .upsert(updateFields, { onConflict: 'id' });

        // Fallback gracefully if optional migration columns aren't added yet in SQL Editor
        if (error && isMissingColumnError(error)) {
          delete updateFields.started_at;
          delete updateFields.experience_level;
          delete updateFields.learning_goal;
          const retry = await sb
            .from('profiles')
            .upsert(updateFields, { onConflict: 'id' });
          error = retry.error;
        }
        if (error) throw error;
        return NextResponse.json({ synced: true });
      }

      case 'save_attempt': {
        await sb.from('lesson_progress').upsert(
          {
            user_id: userId,
            lesson_id: payload.lesson_id,
            status: payload.status,
            started_at: payload.started_at || payload.last_activity_at,
            last_activity_at: payload.last_activity_at,
          },
          { onConflict: 'user_id,lesson_id' }
        );

        const attemptId = isValidUuid(payload.attempt.id)
          ? payload.attempt.id
          : generateUuid();

        const { error } = await sb.from('attempts').upsert(
          {
            id: attemptId,
            user_id: userId,
            lesson_id: payload.lesson_id,
            exercise_id: payload.attempt.exercise_id,
            user_answer: payload.attempt.user_answer,
            is_correct: payload.attempt.is_correct,
            hint_used: payload.attempt.hint_used,
            feedback: payload.attempt.feedback || null,
            created_at: payload.attempt.attempted_at,
          },
          { onConflict: 'id' }
        );
        if (error) throw error;
        return NextResponse.json({ synced: true });
      }

      case 'save_writing': {
        const { error } = await sb.from('lesson_progress').upsert(
          {
            user_id: userId,
            lesson_id: payload.lesson_id,
            writing_submission: payload.writing_submission,
            last_activity_at: payload.last_activity_at,
          },
          { onConflict: 'user_id,lesson_id' }
        );
        if (error) throw error;
        return NextResponse.json({ synced: true });
      }

      case 'complete_lesson': {
        const { error } = await sb.from('lesson_progress').upsert(
          {
            user_id: userId,
            lesson_id: payload.lesson_id,
            status: 'completed',
            completed_at: payload.completed_at,
            last_activity_at: payload.last_activity_at,
          },
          { onConflict: 'user_id,lesson_id' }
        );
        if (error) throw error;
        return NextResponse.json({ synced: true });
      }

      case 'record_mistake': {
        const mistakeId = isValidUuid(payload.mistake.id)
          ? payload.mistake.id
          : generateUuid();
        const reviewId = isValidUuid(payload.review_item.id)
          ? payload.review_item.id
          : generateUuid();

        const { error: mErr } = await sb.from('mistakes').upsert(
          {
            id: mistakeId,
            user_id: userId,
            lesson_id: payload.mistake.lesson_id,
            exercise_id: payload.mistake.exercise_id,
            prompt: payload.mistake.prompt,
            original_answer: payload.mistake.original_answer,
            correct_answer: payload.mistake.correct_answer,
            explanation: payload.mistake.explanation,
            category: payload.mistake.category || 'general',
            resolved: payload.mistake.resolved,
            created_at: payload.mistake.recorded_at,
          },
          { onConflict: 'id' }
        );
        if (mErr) throw mErr;

        const { error: rErr } = await sb.from('review_items').upsert(
          {
            id: reviewId,
            user_id: userId,
            mistake_id: mistakeId,
            lesson_id: payload.review_item.lesson_id,
            prompt: payload.review_item.prompt,
            correct_answer: payload.review_item.correct_answer,
            explanation: payload.review_item.explanation,
            stage: payload.review_item.stage,
            next_due_at: payload.review_item.next_due_at,
          },
          { onConflict: 'id' }
        );
        if (rErr) throw rErr;
        return NextResponse.json({ synced: true });
      }

      case 'submit_review': {
        const updateObj: Record<string, unknown> = {
          stage: payload.stage,
          next_due_at: payload.next_due_at,
          last_reviewed_at: payload.last_reviewed_at,
        };
        if (payload.history) {
          updateObj.history = payload.history;
        }

        let { error } = await sb
          .from('review_items')
          .update(updateObj)
          .eq('id', payload.review_item_id)
          .eq('user_id', userId);

        if (error && isMissingColumnError(error)) {
          delete updateObj.history;
          const retry = await sb
            .from('review_items')
            .update(updateObj)
            .eq('id', payload.review_item_id)
            .eq('user_id', userId);
          error = retry.error;
        }
        if (error) throw error;

        if (payload.resolved && isValidUuid(payload.mistake_id)) {
          await sb
            .from('mistakes')
            .update({ resolved: true })
            .eq('id', payload.mistake_id)
            .eq('user_id', userId);
        }
        return NextResponse.json({ synced: true });
      }

      case 'save_vocabulary': {
        const { error } = await sb
          .from('profiles')
          .update({
            saved_vocabulary: payload.saved_vocabulary,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId);

        if (error && isMissingColumnError(error)) {
          return NextResponse.json({ synced: false, needsMigration: true });
        }
        if (error) throw error;
        return NextResponse.json({ synced: true });
      }

      case 'reset_progress': {
        await Promise.all([
          sb.from('review_items').delete().eq('user_id', userId),
          sb.from('mistakes').delete().eq('user_id', userId),
          sb.from('attempts').delete().eq('user_id', userId),
          sb.from('messages').delete().eq('user_id', userId),
          sb.from('lesson_progress').delete().eq('user_id', userId),
        ]);
        return NextResponse.json({ synced: true });
      }

      case 'import_full_data': {
        const { data } = payload;

        if (data.profile) {
          const pFields: Record<string, unknown> = {
            id: userId,
            email: session.user.email || '',
            updated_at: new Date().toISOString(),
          };
          if (data.profile.name) pFields.name = data.profile.name;
          if (data.profile.timezone) pFields.timezone = data.profile.timezone;
          if (typeof data.profile.target_minutes === 'number')
            pFields.target_minutes = data.profile.target_minutes;
          if (data.profile.theme_preference)
            pFields.theme_preference = data.profile.theme_preference;
          if (typeof data.profile.onboarding_completed === 'boolean')
            pFields.onboarding_completed = data.profile.onboarding_completed;
          await sb.from('profiles').upsert(pFields, { onConflict: 'id' });
        }

        if (Array.isArray(data.saved_vocabulary) && data.saved_vocabulary.length > 0) {
          await sb
            .from('profiles')
            .update({ saved_vocabulary: data.saved_vocabulary })
            .eq('id', userId);
        }

        if (data.lessons_progress) {
          const progressRows: Record<string, unknown>[] = [];
          const attemptRows: Record<string, unknown>[] = [];

          for (const [lessonId, prog] of Object.entries(data.lessons_progress)) {
            if (!getLessonSummaryById(lessonId) || !prog || typeof prog !== 'object') continue;
            const p = prog as LessonProgress;
            progressRows.push({
              user_id: userId,
              lesson_id: lessonId,
              status: p.status || 'not_started',
              started_at: p.started_at || null,
              completed_at: p.completed_at || null,
              writing_submission: p.writing_submission || null,
              last_activity_at: p.last_activity_at || new Date().toISOString(),
            });

            if (p.attempts && typeof p.attempts === 'object') {
              for (const att of Object.values(p.attempts)) {
                if (!att || !att.exercise_id) continue;
                attemptRows.push({
                  id: isValidUuid(att.id) ? att.id : generateUuid(),
                  user_id: userId,
                  lesson_id: lessonId,
                  exercise_id: att.exercise_id,
                  user_answer: att.user_answer || '',
                  is_correct: Boolean(att.is_correct),
                  hint_used: Boolean(att.hint_used),
                  feedback: att.feedback || null,
                  created_at: att.attempted_at || new Date().toISOString(),
                });
              }
            }
          }

          if (progressRows.length > 0) {
            await sb
              .from('lesson_progress')
              .upsert(progressRows, { onConflict: 'user_id,lesson_id' });
          }
          if (attemptRows.length > 0) {
            await sb.from('attempts').upsert(attemptRows, { onConflict: 'id' });
          }
        }

        const mistakeIdMap: Record<string, string> = {};
        if (Array.isArray(data.mistakes) && data.mistakes.length > 0) {
          const mistakeRows: Record<string, unknown>[] = [];
          for (const rawMistake of data.mistakes) {
            const m = rawMistake as MistakeItem;
            if (!m || !getLessonSummaryById(m.lesson_id)) continue;
            const mappedId = isValidUuid(m.id) ? m.id : generateUuid();
            mistakeIdMap[m.id] = mappedId;
            mistakeRows.push({
              id: mappedId,
              user_id: userId,
              lesson_id: m.lesson_id,
              exercise_id: m.exercise_id || 'unknown',
              prompt: m.prompt || '',
              original_answer: m.original_answer || '',
              correct_answer: m.correct_answer || '',
              explanation: m.explanation || '',
              category: m.category || 'general',
              resolved: Boolean(m.resolved),
              created_at: m.recorded_at || new Date().toISOString(),
            });
          }
          if (mistakeRows.length > 0) {
            await sb.from('mistakes').upsert(mistakeRows, { onConflict: 'id' });
          }
        }

        if (Array.isArray(data.review_items) && data.review_items.length > 0) {
          const reviewRows: Record<string, unknown>[] = [];
          for (const rawRev of data.review_items) {
            const r = rawRev as ReviewItem;
            if (!r || !getLessonSummaryById(r.lesson_id)) continue;
            const mappedMistakeId =
              mistakeIdMap[r.mistake_id] ||
              (isValidUuid(r.mistake_id) ? r.mistake_id : null);
            if (!mappedMistakeId) continue;

            reviewRows.push({
              id: isValidUuid(r.id) ? r.id : generateUuid(),
              user_id: userId,
              mistake_id: mappedMistakeId,
              lesson_id: r.lesson_id,
              prompt: r.prompt || '',
              correct_answer: r.correct_answer || '',
              explanation: r.explanation || '',
              stage: Math.min(4, Math.max(1, r.stage || 1)),
              next_due_at: r.next_due_at || new Date().toISOString(),
              last_reviewed_at: r.last_reviewed_at || null,
            });
          }
          if (reviewRows.length > 0) {
            await sb.from('review_items').upsert(reviewRows, { onConflict: 'id' });
          }
        }

        if (data.chat_messages) {
          const msgRows: Record<string, unknown>[] = [];
          for (const [lessonId, list] of Object.entries(data.chat_messages)) {
            if (!getLessonSummaryById(lessonId) || !Array.isArray(list)) continue;
            for (const rawMsg of list) {
              const msg = rawMsg as ChatMessage;
              if (!msg || !msg.content) continue;
              msgRows.push({
                id: isValidUuid(msg.id) ? msg.id : generateUuid(),
                user_id: userId,
                lesson_id: lessonId,
                role: msg.role || 'user',
                content: msg.content,
                created_at: msg.timestamp || new Date().toISOString(),
              });
            }
          }
          if (msgRows.length > 0) {
            await sb.from('messages').upsert(msgRows, { onConflict: 'id' });
          }
        }

        return NextResponse.json({ synced: true });
      }
    }
  } catch (err) {
    console.error('POST /api/sync failed:', err);
    return NextResponse.json(
      { error: 'ซิงก์ข้อมูลกับ Supabase ไม่สำเร็จ' },
      { status: 500 }
    );
  }
}
