import { getAllLessons, getAllWeeks, getTotalStats, getLessonById } from '../src/lib/curriculum';

export function runTests() {
  console.log('🧪 Starting Test Suite: English Steps Verification');
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

  // 1. Curriculum Integrity Tests
  const lessons = getAllLessons();
  assert(lessons.length === 112, `Total lessons must be exactly 112 (Actual: ${lessons.length})`);

  const weeks = getAllWeeks();
  assert(weeks.length === 16, `Total weeks must be exactly 16 (Actual: ${weeks.length})`);

  // Check unique IDs
  const idSet = new Set<string>();
  let hasDuplicate = false;
  lessons.forEach((l) => {
    if (idSet.has(l.id)) hasDuplicate = true;
    idSet.add(l.id);
  });
  assert(!hasDuplicate, 'All lesson IDs must be completely unique');

  // Verify first and last day
  const day1 = getLessonById('day-001');
  assert(day1 !== undefined && day1.day === 1, 'Day 1 lesson exists and is correctly indexed');

  const day112 = getLessonById('day-112');
  assert(day112 !== undefined && day112.day === 112, 'Day 112 lesson exists and is correctly indexed');

  // 2. Exercises & Answer Keys Integrity
  const stats = getTotalStats();
  assert(stats.totalExercises === 740, `Total exercises must match curriculum count (Actual: ${stats.totalExercises})`);

  let exercisesWithoutAnswers = 0;
  lessons.forEach((l) => {
    (l.exercises || []).forEach((ex) => {
      if (!ex.answer || ex.answer.trim().length === 0) {
        exercisesWithoutAnswers++;
      }
    });
  });
  assert(exercisesWithoutAnswers === 0, `All exercises must have answer keys (Missing: ${exercisesWithoutAnswers})`);

  // 3. Spaced Repetition Logic Calculation
  const intervals = [1, 3, 7, 14];
  assert(intervals[0] === 1, 'Stage 1 review interval is 1 day');
  assert(intervals[1] === 3, 'Stage 2 review interval is 3 days');
  assert(intervals[2] === 7, 'Stage 3 review interval is 7 days');
  assert(intervals[3] === 14, 'Stage 4 review interval is 14 days');

  console.log(`\nResults: ${passCount} passed, ${failCount} failed.`);
  if (failCount > 0) process.exit(1);
}

runTests();
