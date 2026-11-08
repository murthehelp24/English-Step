/**
 * Build Master Track Curriculum (252 Days / 6 Phases / 36 Modules)
 * Run with: npx tsx scripts/curriculum/build-master.ts
 */

import fs from 'fs';
import path from 'path';
import { buildAllLessons, MASTER_PHASES } from './types';
import { PHASE0_MODULES } from './phase0';
import { PHASE1A_MODULES } from './phase1a';
import { PHASE1B_MODULES } from './phase1b';
import { PHASE2A_MODULES } from './phase2a';
import { PHASE2B_MODULES } from './phase2b';
import { PHASE3A_MODULES } from './phase3a';
import { PHASE3B_MODULES } from './phase3b';
import { PHASE4A_MODULES } from './phase4a';
import { PHASE4B_MODULES } from './phase4b';
import { PHASE5_MODULES } from './phase5';
import { CurriculumData, CurriculumIndex, LessonSummary, VocabularyIndexEntry } from '../../src/types/curriculum';

const MILESTONE_DAYS = new Set([14, 56, 112, 168, 224, 252]);
const FORBIDDEN_EXAM_TERMS = /\b(toeic|ielts|toefl|cu-tep|tu-get)\b/i;

function buildMaster() {
  console.log('🔨 Building English Steps Master Track (252 Days / 6 Phases / 36 Modules)...');

  const allModules = [
    ...PHASE0_MODULES,
    ...PHASE1A_MODULES,
    ...PHASE1B_MODULES,
    ...PHASE2A_MODULES,
    ...PHASE2B_MODULES,
    ...PHASE3A_MODULES,
    ...PHASE3B_MODULES,
    ...PHASE4A_MODULES,
    ...PHASE4B_MODULES,
    ...PHASE5_MODULES,
  ];

  const { weeks, lessons } = buildAllLessons(allModules);

  // Strict Validation Suite
  const errors: string[] = [];

  if (weeks.length !== 36) {
    errors.push(`Expected 36 weeks, got ${weeks.length}`);
  }
  if (lessons.length !== 252) {
    errors.push(`Expected 252 lessons, got ${lessons.length}`);
  }

  const seenIds = new Set<string>();
  const seenDays = new Set<number>();

  for (let i = 0; i < weeks.length; i++) {
    const expectedWeek = i + 1;
    if (weeks[i].week !== expectedWeek) {
      errors.push(`Week sequence mismatch at index ${i}: expected ${expectedWeek}, got ${weeks[i].week}`);
    }
    if (weeks[i].lesson_ids.length !== 7) {
      errors.push(`Week ${weeks[i].week} has ${weeks[i].lesson_ids.length} lessons (expected 7)`);
    }
  }

  let totalExercises = 0;
  let totalVocab = 0;

  for (let i = 0; i < lessons.length; i++) {
    const l = lessons[i];
    const expectedDay = i + 1;
    const expectedId = `day-${String(expectedDay).padStart(3, '0')}`;

    if (l.day !== expectedDay) {
      errors.push(`Day sequence mismatch at index ${i}: expected ${expectedDay}, got ${l.day}`);
    }
    if (l.id !== expectedId) {
      errors.push(`ID sequence mismatch at day ${l.day}: expected ${expectedId}, got ${l.id}`);
    }
    if (seenIds.has(l.id)) errors.push(`Duplicate lesson ID: ${l.id}`);
    if (seenDays.has(l.day)) errors.push(`Duplicate day number: ${l.day}`);
    seenIds.add(l.id);
    seenDays.add(l.day);

    if (!l.title || l.title.trim().length < 3) errors.push(`${l.id}: missing title`);
    if (!l.objective || l.objective.trim().length < 10) errors.push(`${l.id}: missing/short objective`);
    if (!l.explanation || l.explanation.trim().length < 80) errors.push(`${l.id}: short explanation`);
    if (!l.reading || l.reading.trim().length < 70) errors.push(`${l.id}: short reading passage`);
    if (!l.writing || l.writing.trim().length < 10) errors.push(`${l.id}: missing writing prompt`);
    if (!l.writing_sample || l.writing_sample.trim().length < 20) errors.push(`${l.id}: short writing_sample`);
    if (!l.sound_focus?.ipa || !l.sound_focus?.connected_speech) errors.push(`${l.id}: missing sound_focus`);
    if (!l.l1_warning?.mistake_example || !l.l1_warning?.fix_rule) errors.push(`${l.id}: missing l1_warning`);
    if (!l.speaking_432?.topic || !l.speaking_432.bullets?.length) errors.push(`${l.id}: missing speaking_432`);
    if (!l.vocabulary || l.vocabulary.length < 6) {
      errors.push(`${l.id}: vocabulary count ${l.vocabulary?.length || 0} < 6`);
    }
    if (!l.exercises || l.exercises.length < 6) {
      errors.push(`${l.id}: exercises count ${l.exercises?.length || 0} < 6`);
    }

    if (MILESTONE_DAYS.has(l.day) && l.type !== 'assessment') {
      errors.push(`${l.id}: milestone day must have type 'assessment', got '${l.type}'`);
    }
    if (!MILESTONE_DAYS.has(l.day) && l.day % 7 === 0 && l.type !== 'review') {
      errors.push(`${l.id}: day % 7 === 0 must have type 'review', got '${l.type}'`);
    }

    totalVocab += l.vocabulary.length;
    totalExercises += l.exercises.length;

    for (const ex of l.exercises) {
      if (!ex.answer || !ex.answer.trim()) {
        errors.push(`${ex.id}: empty answer`);
      }
      if (!ex.explanation || !ex.explanation.trim()) {
        errors.push(`${ex.id}: empty explanation`);
      }
      if (ex.choices) {
        if (ex.choices.length < 2) {
          errors.push(`${ex.id}: choices has < 2 options`);
        } else if (!ex.choices.includes(ex.answer)) {
          errors.push(
            `${ex.id}: choice mismatch! answer=${JSON.stringify(ex.answer)} is not in choices=${JSON.stringify(ex.choices)}`
          );
        }
      }
    }

    const serialized = JSON.stringify(l);
    if (FORBIDDEN_EXAM_TERMS.test(serialized)) {
      errors.push(`${l.id}: contains forbidden standardized test term (TOEIC/IELTS/etc.)`);
    }
  }

  if (errors.length > 0) {
    console.error(`\n❌ Validation failed with ${errors.length} error(s):`);
    errors.slice(0, 30).forEach((e) => console.error('  -', e));
    if (errors.length > 30) console.error(`  ... and ${errors.length - 30} more.`);
    process.exit(1);
  }

  const fullCurriculum: CurriculumData = {
    title: 'English Steps — Master Track',
    version: '2.0.0-master',
    created: '2026-11-08',
    locale: 'th',
    timezone: 'Asia/Bangkok',
    status: 'complete 252-day master curriculum verified',
    duration_days: lessons.length,
    minutes_per_day: 60,
    phases: MASTER_PHASES,
    weeks,
    lessons,
  };

  const summaries: LessonSummary[] = lessons.map((l) => ({
    id: l.id,
    day: l.day,
    week: l.week,
    week_title: l.week_title,
    phase: l.phase ?? 0,
    phase_title: l.phase_title ?? '',
    cefr_level: l.cefr_level ?? 'Pre-A1',
    title: l.title,
    type: l.type,
    minutes: l.minutes || 60,
    objective: l.objective,
    vocabCount: l.vocabulary.length,
    exerciseCount: l.exercises.length,
    headlineEnglish: l.examples[0]?.en || l.reading.split('.')[0] + '.',
    headlineThai: l.examples[0]?.th || l.title,
  }));

  const indexData: CurriculumIndex = {
    title: fullCurriculum.title,
    version: fullCurriculum.version,
    duration_days: lessons.length,
    minutes_per_day: 60,
    total_exercises: totalExercises,
    total_vocab: totalVocab,
    phases: MASTER_PHASES,
    weeks,
    lessons: summaries,
  };

  const vocabIndex: VocabularyIndexEntry[] = [];
  for (const l of lessons) {
    for (const v of l.vocabulary) {
      vocabIndex.push({
        ...v,
        lesson_id: l.id,
        day: l.day,
        week: l.week,
        phase: l.phase ?? 0,
        cefr_level: l.cefr_level ?? 'Pre-A1',
      });
    }
  }

  const dataDir = path.join(__dirname, '../../src/data');
  fs.mkdirSync(dataDir, { recursive: true });

  const fullPath = path.join(dataDir, 'curriculum.json');
  const indexPath = path.join(dataDir, 'curriculum-index.json');
  const vocabPath = path.join(dataDir, 'vocabulary-index.json');

  fs.writeFileSync(fullPath, JSON.stringify(fullCurriculum), 'utf-8');
  fs.writeFileSync(indexPath, JSON.stringify(indexData), 'utf-8');
  fs.writeFileSync(vocabPath, JSON.stringify(vocabIndex), 'utf-8');

  const sizeMb = (p: string) => (fs.statSync(p).size / (1024 * 1024)).toFixed(2) + ' MB';
  const sizeKb = (p: string) => (fs.statSync(p).size / 1024).toFixed(1) + ' KB';

  console.log('\n✅ Master Curriculum Built & Validated Successfully!');
  console.log(`  • Phases: ${MASTER_PHASES.length} (Phase 0 – Phase 5)`);
  console.log(`  • Modules (Weeks): ${weeks.length}`);
  console.log(`  • Lessons (Days): ${lessons.length} (Day 1 – Day 252)`);
  console.log(`  • Vocabulary entries: ${totalVocab}`);
  console.log(`  • Total Exercises: ${totalExercises}`);
  console.log(`  • curriculum.json: ${sizeMb(fullPath)}`);
  console.log(`  • curriculum-index.json: ${sizeKb(indexPath)}`);
  console.log(`  • vocabulary-index.json: ${sizeKb(vocabPath)}`);
}

buildMaster();
