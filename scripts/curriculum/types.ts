import {
  ExerciseItem,
  ExerciseKind,
  Lesson,
  PhaseOverview,
  WeekOverview,
} from '../../src/types/curriculum';

export type VocabTuple = [
  en: string,
  th: string,
  ipa: string,
  chunk: string,
  chunk_th: string
];

export type ExampleTuple = [en: string, th: string, note?: string];

export interface CustomDrillSpec {
  kind: ExerciseKind;
  prompt: string;
  answer: string;
  explanation: string;
  choices?: string[];
  audio_text?: string;
}

export interface DayAuthorSpec {
  day: number;
  week: number;
  week_title: string;
  phase: number;
  phase_title: string;
  cefr_level: string;
  type?: 'lesson' | 'review' | 'assessment';
  title: string;
  objective: string;
  explanation: string;
  extra?: string;
  sound_focus: {
    title: string;
    ipa: string;
    connected_speech: string;
    drill: string;
  };
  l1_warning: {
    mistake_example: string;
    why_thai_fails: string;
    fix_rule: string;
  };
  vocab: VocabTuple[];
  examples: ExampleTuple[];
  reading: string;
  listening_question: string;
  listening_answer: string;
  dictation_sentence: string;
  listening_note: string;
  drills: CustomDrillSpec[];
  writing: string;
  writing_sample: string;
  writing_sample_note: string;
  speaking_topic: string;
  speaking_bullets: string[];
  homework?: string;
}

export const MASTER_PHASES: PhaseOverview[] = [
  {
    phase: 0,
    title: 'Phase 0: ปลดล็อกระบบเสียงและโครงสร้างฐานศูนย์',
    cefr: 'Pre-A1 (เริ่มจาก 0)',
    summary:
      'ปรับหูและปากให้จับเสียงภาษาอังกฤษที่ไม่มีในภาษาไทย เข้าใจจังหวะ Stress-Timed, Final Consonants, Phonics และการเรียงประโยคแกนหลักก่อนเริ่มจำประโยคผิดๆ',
    weeks: [1, 2],
    days_range: [1, 14],
  },
  {
    phase: 1,
    title: 'Phase 1: รากฐานการสื่อสารและโครงสร้างประโยคแกนหลัก',
    cefr: 'Solid A1',
    summary:
      'สร้างประโยคบอกเล่า ปฏิเสธ คำถามอย่างถูกต้องด้วย Be/Do/Have, Articles (a/an/the), นามนับได้-ไม่ได้, กิจวัตร Present Simple/Continuous และเหตุการณ์ในอดีต Past Simple',
    weeks: [3, 4, 5, 6, 7, 8],
    days_range: [15, 56],
  },
  {
    phase: 2,
    title: 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน',
    cefr: 'A2 → Early B1',
    summary:
      'ต่อยอดเล่าเรื่องต่อเนื่องด้วย Past Continuous & Present Perfect, เลือกใช้อนาคต 4 แบบอย่างเป็นธรรมชาติ, Modals, เปรียบเทียบ, Phrasal Verbs, Relative Clauses และ Conditionals พื้นฐาน',
    weeks: [9, 10, 11, 12, 13, 14, 15, 16],
    days_range: [57, 112],
  },
  {
    phase: 3,
    title: 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง',
    cefr: 'Solid B1 → Early B2',
    summary:
      'ควบคุมลำดับเวลาซับซ้อน (Perfect Continuous/Past Perfect), Passive Voice ในข่าวและงาน, Indirect Diplomacy, Reported Speech, การคาดเดาอย่างมีเหตุผล และตัวเชื่อม Discourse Markers',
    weeks: [17, 18, 19, 20, 21, 22, 23, 24],
    days_range: [113, 168],
  },
  {
    phase: 4,
    title: 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา',
    cefr: 'B2 Operational Fluency',
    summary:
      'ใช้งาน Collocations & Multi-word Phrasal Verbs ระดับ B2, ปรับระดับโทนภาษา (Register), การเห็นต่างอย่างสุภาพ (Hedging), Participle/Cleft Sentences และ Blind Shadowing ความเร็วธรรมชาติ',
    weeks: [25, 26, 27, 28, 29, 30, 31, 32],
    days_range: [169, 224],
  },
  {
    phase: 5,
    title: 'Phase 5: ความแม่นยำระดับสูงและการต่อยอดใช้จริงตลอดชีวิต',
    cefr: 'High-B2 → C1 Synthesis',
    summary:
      'สังเคราะห์ทักษะครบ 4 ด้านด้วย Inversion, Subjunctive, สำนวนตามบริบทวัฒนธรรม โปรเจกต์เขียนและพูด 4/3/2 ขั้นสูง พร้อมวางระบบชีวิตประจำวันให้อยู่กับภาษาอังกฤษได้จริง',
    weeks: [33, 34, 35, 36],
    days_range: [225, 252],
  },
];

function padDay(day: number): string {
  return `day-${String(day).padStart(3, '0')}`;
}

function makeReorderPrompt(sentence: string): { prompt: string; answer: string } {
  const clean = sentence.trim().replace(/[.!?]+$/, '');
  const words = clean.split(/\s+/);
  if (words.length < 3) {
    return {
      prompt: `เรียงคำให้เป็นประโยคที่ถูกต้อง: ${words.join(' / ')}`,
      answer: sentence.trim(),
    };
  }
  const rotated = [...words.slice(1), words[0]];
  // Deterministic interleaving scramble so first and last aren't adjacent trivially
  const scrambled: string[] = [];
  let left = 0;
  let right = rotated.length - 1;
  while (left <= right) {
    if (left === right) {
      scrambled.push(rotated[left]);
    } else {
      scrambled.push(rotated[right], rotated[left]);
    }
    left++;
    right--;
  }
  return {
    prompt: `เรียงคำต่อไปนี้ให้เป็นประโยคภาษาอังกฤษที่ถูกต้อง:\n[ ${scrambled.join('  /  ')} ]`,
    answer: sentence.trim(),
  };
}

export interface ModuleSeed {
  week: number;
  phase: number;
  phase_title: string;
  cefr_level: string;
  title: string;
  summary: string;
  focus: string;
  days: DayAuthorSpec[];
}

export function buildAllLessons(modules: ModuleSeed[]): {
  weeks: WeekOverview[];
  lessons: Lesson[];
} {
  const weeks: WeekOverview[] = [];
  const lessons: Lesson[] = [];
  const reviewPool: { day: number; ex: ExerciseItem; title: string }[] = [];

  for (const mod of modules) {
    const lessonIds: string[] = [];

    for (const spec of mod.days) {
      const id = padDay(spec.day);
      lessonIds.push(id);
      const dayType =
        spec.type ||
        (spec.day % 7 === 0
          ? [14, 56, 112, 168, 224, 252].includes(spec.day)
            ? 'assessment'
            : 'review'
          : 'lesson');

      const exercises: ExerciseItem[] = [];
      let qNum = 1;
      const pushEx = (item: Omit<ExerciseItem, 'id'>) => {
        exercises.push({
          id: `${id}-q${qNum++}`,
          ...item,
        });
      };

      // 1. Author-crafted targeted drills (gap, choice, error_fix, translation, comprehension)
      for (const d of spec.drills) {
        pushEx({
          kind: d.kind,
          prompt: d.prompt,
          answer: d.answer,
          explanation: d.explanation,
          choices: d.choices,
          audio_text: d.audio_text,
        });
      }

      // 2. Listening Comprehension + Dictation / Dictogloss
      pushEx({
        kind: 'comprehension',
        prompt: `ฟังบทอ่านประจำวันแล้วตอบคำถามนี้เป็นภาษาอังกฤษ:\n"${spec.listening_question}"`,
        answer: spec.listening_answer,
        explanation: `คำตอบนี้อ้างอิงจากบทอ่าน/บทฟังประจำวัน (${spec.title}) โดยจับสารสำคัญจากบริบทจริง`,
        audio_text: spec.reading,
      });

      pushEx({
        kind: 'dictation',
        prompt: 'กดฟังเสียงประโยคสำคัญด้านล่าง แล้วพิมพ์ประโยคภาษาอังกฤษที่ได้ยินให้ครบทุกคำ (ระวังเสียงท้ายคำและตัวพิมพ์ใหญ่):',
        answer: spec.dictation_sentence,
        explanation: `รูปประโยคเต็มคือ "${spec.dictation_sentence}" — ${spec.listening_note}`,
        audio_text: spec.dictation_sentence,
      });

      // 3. Example sentence reorder (Active Syntax Reinforcement)
      const exampleForReorder = spec.examples[1]?.[0] || spec.examples[0]?.[0];
      if (exampleForReorder) {
        const reorder = makeReorderPrompt(exampleForReorder);
        pushEx({
          kind: 'reorder',
          prompt: reorder.prompt,
          answer: reorder.answer,
          explanation: `ลำดับคำที่ถูกต้องคือ "${reorder.answer}" (${spec.examples[1]?.[1] || spec.examples[0]?.[1]})`,
        });
      }

      // 4. Lexical Chunk Recall from today's vocabulary
      const targetVocab = spec.vocab[1] || spec.vocab[0];
      if (targetVocab) {
        pushEx({
          kind: 'recall',
          prompt: `จำก้อนคำ (Collocation/Chunk) จากบทนี้: ความหมาย "${targetVocab[4]}" ในภาษาอังกฤษคือก้อนคำใด? (คำใบ้ขึ้นต้นด้วย "${targetVocab[3].slice(0, 2)}...")`,
          answer: targetVocab[3],
          explanation: `"${targetVocab[3]}" แปลว่า "${targetVocab[4]}" (จากคำหลัก ${targetVocab[0]} ${targetVocab[2]}) การจำทั้งก้อนช่วยให้หยิบใช้ตอนพูดได้ทันที`,
        });
      }

      // 5. Interleaved Spaced Review from earlier days (reinforces long-term memory!)
      if (reviewPool.length >= 3) {
        const extraReviewCount = dayType === 'assessment' ? 3 : dayType === 'review' ? 2 : 1;
        for (let r = 0; r < extraReviewCount; r++) {
          const poolIdx = (spec.day * 7 + r * 13) % reviewPool.length;
          const prev = reviewPool[poolIdx];
          if (prev && prev.day < spec.day) {
            pushEx({
              kind: prev.ex.kind,
              prompt: `[ทบทวนสลับบทจากวันที่ ${prev.day}: ${prev.title}] ${prev.ex.prompt}`,
              answer: prev.ex.answer,
              explanation: `${prev.ex.explanation} (การทบทวนสลับบทช่วยป้องกันการลืมและฝึกสมองแยกแยะโครงสร้าง)`,
              choices: prev.ex.choices,
              audio_text: prev.ex.audio_text,
            });
          }
        }
      }

      // Seed pool with this lesson's strongest non-audio drill for future interleaving
      const seedCandidate = exercises.find((e) => e.kind === 'error_fix' || e.kind === 'gap');
      if (seedCandidate) {
        reviewPool.push({ day: spec.day, ex: seedCandidate, title: spec.title });
      }

      const lesson: Lesson = {
        id,
        day: spec.day,
        week: spec.week,
        week_title: spec.week_title,
        title: spec.title,
        phase: spec.phase,
        phase_title: spec.phase_title,
        cefr_level: spec.cefr_level,
        type: dayType,
        minutes: 60,
        objective: spec.objective,
        explanation: spec.explanation,
        extra: spec.extra || '',
        sound_focus: spec.sound_focus,
        l1_warning: spec.l1_warning,
        time_breakdown: [
          { label: '1. ปูพื้นฐาน & จุดพลาดคนไทย', minutes: 10 },
          { label: '2. ระบบเสียง IPA + ศัพท์ & Chunks', minutes: 12 },
          { label: '3. อ่าน ฟัง & Shadowing 3 รอบ', minutes: 13 },
          { label: '4. แบบฝึก Interleaved & Dictogloss', minutes: 15 },
          { label: '5. เขียนสื่อสาร & พูด 4/3/2', minutes: 10 },
        ],
        vocabulary: spec.vocab.map(([en, th, ipa, chunk, chunk_th]) => ({
          en,
          th,
          ipa,
          chunk,
          chunk_th,
        })),
        examples: spec.examples.map(([en, th, note]) => ({ en, th, note })),
        listening: {
          script: spec.reading,
          question: spec.listening_question,
          answer: spec.listening_answer,
          dictation: spec.dictation_sentence,
          note: spec.listening_note,
          connected_speech: spec.sound_focus.connected_speech,
          dictogloss_prompt:
            'ฟังบทอ่านแบบไม่ดูข้อความ 2 รอบ จดเฉพาะคำสำคัญ แล้วลองเรียบเรียงสาระสำคัญเป็นภาษาอังกฤษก่อนเทียบต้นฉบับ',
        },
        reading: spec.reading,
        exercises,
        writing: spec.writing,
        writing_sample: spec.writing_sample,
        writing_sample_note: spec.writing_sample_note,
        speaking_432: {
          topic: spec.speaking_topic,
          bullets: spec.speaking_bullets,
          sample_outline: spec.writing_sample,
        },
        review_days: [
          Math.max(1, spec.day - 1),
          Math.max(1, spec.day - 3),
          Math.max(1, spec.day - 7),
        ],
        homework:
          spec.homework ||
          'ก่อนจบบท: 1) เช็กเสียงท้ายคำและ Stress ของทุกคำในบท 2) ตรวจงานเขียนว่ามี Subject + Verb ครบทุกประโยคและผันเวลาตรงกับบริบท 3) ทำ Shadowing รอบที่ 3 แบบปิดตัวอักษร 1 รอบ',
      };

      lessons.push(lesson);
    }

    weeks.push({
      week: mod.week,
      phase: mod.phase,
      phase_title: mod.phase_title,
      cefr_level: mod.cefr_level,
      title: mod.title,
      summary: mod.summary,
      focus: mod.focus,
      lesson_ids: lessonIds,
    });
  }

  return { weeks, lessons };
}
