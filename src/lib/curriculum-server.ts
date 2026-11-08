import { CurriculumData, Lesson } from '@/types/curriculum';
import { createServerSupabaseClient, isServerSupabaseConfigured } from '@/lib/supabase/server';

let localLessonMapCache: Map<string, Lesson> | null = null;

async function getLocalLessonMap(): Promise<Map<string, Lesson>> {
  if (localLessonMapCache) return localLessonMapCache;

  const mod = await import('@/data/curriculum.json');
  const data = (mod.default || mod) as unknown as CurriculumData;
  const map = new Map<string, Lesson>();
  for (const lesson of data.lessons || []) {
    map.set(lesson.id, lesson);
  }
  localLessonMapCache = map;
  return map;
}

/**
 * Fetches full single lesson server-side:
 * 1) Tries live Supabase `public.lessons` (`data` JSONB + indexed metadata)
 * 2) Falls back seamlessly to server-side `curriculum.json` cache (never shipped to client JS)
 */
export async function getServerLessonById(id: string): Promise<Lesson | null> {
  if (isServerSupabaseConfigured) {
    try {
      const supabase = await createServerSupabaseClient();
      if (supabase) {
        const { data: row, error } = await supabase
          .from('lessons')
          .select('id, day, week, week_title, title, type, minutes, objective, explanation, extra, reading, writing, writing_sample, data')
          .eq('id', id)
          .maybeSingle();

        if (!error && row?.data && typeof row.data === 'object') {
          const payload = row.data as Lesson;
          return {
            ...payload,
            id: row.id || payload.id,
            day: row.day || payload.day,
            week: row.week || payload.week,
            week_title: row.week_title || payload.week_title,
            title: row.title || payload.title,
          };
        }
      }
    } catch (err) {
      console.warn(`Supabase lesson fetch fallback for ${id}:`, err);
    }
  }

  const localMap = await getLocalLessonMap();
  return localMap.get(id) ?? null;
}

export async function getServerAllLessons(): Promise<Lesson[]> {
  const localMap = await getLocalLessonMap();
  return Array.from(localMap.values()).sort((a, b) => a.day - b.day);
}
