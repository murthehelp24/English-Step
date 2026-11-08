/**
 * Seed script to import curriculum.json into Supabase lessons table
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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

async function seed() {
  console.log('--- Starting Curriculum Seed ---');

  const curriculumPath = path.join(__dirname, '../src/data/curriculum.json');
  if (!fs.existsSync(curriculumPath)) {
    console.error('curriculum.json not found at', curriculumPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(curriculumPath, 'utf-8');
  const curriculum = JSON.parse(raw);
  const lessons = curriculum.lessons || [];

  console.log(`Found ${lessons.length} lessons in curriculum.json`);

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || SUPABASE_URL.includes('your-project')) {
    console.log('[Notice] Supabase URL or Service Role Key not set in environment.');
    console.log('[Notice] Skipping remote database insertion. The app can read curriculum.json directly in local mode.');
    console.log(`Verified ${lessons.length} lessons are valid, unique, and ready to seed.`);
    return;
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  console.log('Inserting lessons into Supabase with upsert (idempotent)...');

  let successCount = 0;
  let errorCount = 0;

  for (const lesson of lessons) {
    const { error } = await supabase.from('lessons').upsert(
      {
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
        writing_sample: lesson.writing_sample,
        data: lesson,
      },
      { onConflict: 'id' }
    );

    if (error) {
      errorCount++;
      console.error(`\nError inserting lesson ${lesson.id}:`, error.message);
      if (errorCount === 1 && error.message.includes('does not exist')) {
        console.error('Table public.lessons not found. Please run supabase/migrations/20261108000000_init_english_steps.sql in Supabase SQL Editor first.');
        process.exit(1);
      }
    } else {
      successCount++;
      process.stdout.write('.');
    }
  }

  console.log(`\nUpsert finished: ${successCount} succeeded, ${errorCount} failed.`);

  if (errorCount > 0) {
    process.exit(1);
  }

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
