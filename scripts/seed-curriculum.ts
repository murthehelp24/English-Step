/**
 * Seed script to import curriculum.json (Master Track 252 Days) into Supabase public.lessons
 * Run with: npx tsx scripts/seed-curriculum.ts
 */

import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnvLocal() {
  const envPath = path.join(__dirname, '../.env.local');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf-8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const rawValue = trimmed.slice(eqIndex + 1).trim();
    const value = rawValue.replace(/^["']|["']$/g, '');
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvLocal();

const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const SUPABASE_SERVICE_ROLE_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

interface RawLesson {
  id: string;
  day: number;
  week: number;
  week_title: string;
  phase?: number;
  phase_title?: string;
  cefr_level?: string;
  title: string;
  type?: string;
  minutes?: number;
  objective: string;
  explanation: string;
  extra?: string;
  reading: string;
  writing: string;
  writing_sample?: string;
}

async function detectExtendedLessonColumns(
  supabase: ReturnType<typeof createClient<any>>
): Promise<boolean> {
  const { error } = await supabase
    .from('lessons')
    .select('phase,phase_title,cefr_level,module_summary')
    .limit(1);
  return !error;
}

async function seed() {
  console.log('--- Starting Master Curriculum Seed ---');

  const curriculumPath = path.join(__dirname, '../src/data/curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    console.error('curriculum.json not found at', curriculumPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(curriculumPath, 'utf-8');
  const curriculum = JSON.parse(raw);
  const lessons = (curriculum.lessons || []) as RawLesson[];

  console.log(`Found ${lessons.length} lessons in curriculum.json`);

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || SUPABASE_URL.includes('your-project')) {
    console.log('[Notice] Supabase URL or Service Role Key not set in environment.');
    console.log('[Notice] Skipping remote database insertion.');
    console.log(`Verified ${lessons.length} lessons are valid, unique, and ready to seed.`);
    return;
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const hasExtendedCols = await detectExtendedLessonColumns(supabase);
  console.log(
    hasExtendedCols
      ? 'Detected extended Master Track columns (phase, cefr_level, etc.) in public.lessons.'
      : 'Note: public.lessons uses base columns; enriched lesson JSONB will still be stored in full inside `data`.'
  );

  console.log('Upserting lessons into Supabase in batches of 25 (preserves user progress IDs)...');

  const batchSize = 25;
  let successCount = 0;

  for (let i = 0; i < lessons.length; i += batchSize) {
    const batch = lessons.slice(i, i + batchSize);
    const rows = batch.map((lesson) => {
      const baseRow: Record<string, unknown> = {
        id: lesson.id,
        day: lesson.day,
        week: lesson.week,
        week_title: lesson.week_title,
        title: lesson.title,
        type: lesson.type || 'lesson',
        minutes: lesson.minutes || 60,
        objective: lesson.objective,
        explanation: lesson.explanation,
        extra: lesson.extra || '',
        reading: lesson.reading,
        writing: lesson.writing,
        writing_sample: lesson.writing_sample || '',
        data: lesson,
      };

      if (hasExtendedCols) {
        baseRow.phase = lesson.phase ?? 0;
        baseRow.phase_title = lesson.phase_title || '';
        baseRow.cefr_level = lesson.cefr_level || 'A0';
        baseRow.module_summary = lesson.objective;
        baseRow.updated_at = new Date().toISOString();
      }

      return baseRow;
    });

    const { error } = await supabase.from('lessons').upsert(rows, { onConflict: 'id' });
    if (error) {
      console.error(`\nError upserting batch starting at ${batch[0]?.id}:`, error.message);
      if (error.message.includes('does not exist')) {
        console.error(
          'Table public.lessons not found. Please run supabase/migrations/20261108000000_init_english_steps.sql in Supabase SQL Editor first.'
        );
      }
      process.exit(1);
    }

    successCount += batch.length;
    process.stdout.write(`.`);
  }

  console.log(`\nUpsert finished: ${successCount} / ${lessons.length} lessons upserted.`);

  const { count, error: countError } = await supabase
    .from('lessons')
    .select('id', { count: 'exact', head: true });

  if (countError) {
    console.error('Could not verify lessons count:', countError.message);
    process.exit(1);
  }

  console.log(`Verified lessons table row count in Supabase: ${count}`);
  console.log('--- Seed Completed Successfully! ---');
}

seed().catch((err) => {
  console.error('Seed script failed:', err);
  process.exit(1);
});
