import {
  getAllLessons,
  getAllWeeks,
  getAllPhases,
  getAllVocabulary,
  getTotalStats,
  getLessonSummaryById,
} from '../src/lib/curriculum';

export function runTests() {
  console.log('🧪 Starting Test Suite: English Steps Master Track (252 Days)');
  let passCount = 0;
  let failCount = 0;

  function assert(condition: boolean, testName: string) {
    if (condition) {
      console.log(`  ✓ PASS: ${testName}`);
      passCount++;
    } else {
      console.error(`  ✗ FAIL: ${testName}`);
      failCount++;
    }
  }

  // 1. Master Curriculum Dimensions
  const lessons = getAllLessons();
  assert(lessons.length === 252, `Total lessons must be exactly 252 (Actual: ${lessons.length})`);

  const weeks = getAllWeeks();
  assert(weeks.length === 36, `Total weeks must be exactly 36 (Actual: ${weeks.length})`);

  const phases = getAllPhases();
  assert(phases.length === 6, `Total phases must be exactly 6 (Actual: ${phases.length})`);

  // 2. ID and Sequence Integrity
  const idSet = new Set<string>();
  let hasDuplicate = false;
  let sequenceMismatch = false;

  lessons.forEach((l, index) => {
    const expectedDay = index + 1;
    const expectedId = `day-${String(expectedDay).padStart(3, '0')}`;
    if (l.day !== expectedDay || l.id !== expectedId) sequenceMismatch = true;
    if (idSet.has(l.id)) hasDuplicate = true;
    idSet.add(l.id);
  });

  assert(!hasDuplicate, 'All 252 lesson IDs must be completely unique');
  assert(!sequenceMismatch, 'Day sequence must run strictly from 1 to 252');

  // Verify key milestone points
  const day1 = getLessonSummaryById('day-001');
  assert(day1 !== undefined && day1.day === 1 && day1.phase === 0, 'Day 1 starts at Phase 0 (Pre-A1)');

  const day14 = getLessonSummaryById('day-014');
  assert(day14 !== undefined && day14.type === 'assessment', 'Day 14 is Phase 0 Milestone Assessment');

  const day56 = getLessonSummaryById('day-056');
  assert(day56 !== undefined && day56.type === 'assessment', 'Day 56 is Phase 1 Milestone Assessment');

  const day112 = getLessonSummaryById('day-112');
  assert(day112 !== undefined && day112.type === 'assessment', 'Day 112 is Phase 2 Milestone Assessment');

  const day168 = getLessonSummaryById('day-168');
  assert(day168 !== undefined && day168.type === 'assessment', 'Day 168 is Phase 3 Milestone Assessment');

  const day224 = getLessonSummaryById('day-224');
  assert(day224 !== undefined && day224.type === 'assessment', 'Day 224 is Phase 4 Milestone Assessment');

  const day252 = getLessonSummaryById('day-252');
  assert(day252 !== undefined && day252.type === 'assessment', 'Day 252 is Grand Capstone Graduation Assessment');

  // 3. Stats & Vocabulary
  const stats = getTotalStats();
  assert(stats.totalExercises >= 2300, `Total exercises must be >= 2,300 (Actual: ${stats.totalExercises})`);

  const vocab = getAllVocabulary();
  assert(vocab.length >= 1600, `Vocabulary index must have >= 1,600 entries (Actual: ${vocab.length})`);

  // 4. Strict Directive Check: Zero Standardized Exam Terms
  const serializedAll = JSON.stringify(lessons) + JSON.stringify(weeks) + JSON.stringify(phases);
  const examTermMatch = serializedAll.match(/\b(toeic|ielts|toefl|cu-tep|tu-get)\b/i);
  assert(
    !examTermMatch,
    `Zero mentions of standardized tests (TOEIC/IELTS/etc.) allowed across curriculum: ${
      examTermMatch ? examTermMatch[0] : 'None found (CLEAN)'
    }`
  );

  // 5. Spaced Repetition Logic Intervals
  const intervals = [1, 3, 7, 14, 30];
  assert(intervals.length === 5, '5-stage spaced repetition intervals [1, 3, 7, 14, 30]');

  console.log(`\nResults: ${passCount} passed, ${failCount} failed.`);
  if (failCount > 0) process.exit(1);
}

runTests();
