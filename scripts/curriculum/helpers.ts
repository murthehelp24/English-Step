import {
  SoundFocusBlock,
  ThaiL1WarningBlock,
} from '../../src/types/curriculum';
import {
  CustomDrillSpec,
  DayAuthorSpec,
  ExampleTuple,
  ModuleSeed,
  VocabTuple,
} from './types';

export interface CompactDayInput {
  day: number;
  type?: 'lesson' | 'review' | 'assessment';
  title: string;
  objective: string;
  explanation: string;
  extra?: string;
  sound?:
    | [title: string, ipa: string, connected_speech: string, drill: string]
    | SoundFocusBlock;
  sound_focus?: SoundFocusBlock;
  l1?:
    | [mistake_example: string, why_thai_fails: string, fix_rule: string]
    | ThaiL1WarningBlock;
  l1_warning?: ThaiL1WarningBlock;
  vocab: VocabTuple[];
  examples: ExampleTuple[];
  reading: string;
  listenQ?: string;
  listening_question?: string;
  listenA?: string;
  listening_answer?: string;
  dictation?: string;
  dictation_sentence?: string;
  listenNote?: string;
  listening_note?: string;
  drills: CustomDrillSpec[];
  writing: string;
  writingSample?: string;
  writing_sample?: string;
  writingNote?: string;
  writing_sample_note?: string;
  speakingTopic?: string;
  speaking_topic?: string;
  speakingBullets?: string[];
  speaking_bullets?: string[];
  homework?: string;
}

export interface ModuleMeta {
  week: number;
  phase: number;
  phase_title: string;
  cefr_level: string;
  title: string;
  summary: string;
  focus: string;
}

function normalizeSound(e: CompactDayInput): SoundFocusBlock {
  if (e.sound_focus) return e.sound_focus;
  if (Array.isArray(e.sound)) {
    return {
      title: e.sound[0],
      ipa: e.sound[1],
      connected_speech: e.sound[2],
      drill: e.sound[3],
    };
  }
  if (e.sound) return e.sound;
  throw new Error(`Missing sound/sound_focus on day ${e.day}`);
}

function normalizeL1(e: CompactDayInput): ThaiL1WarningBlock {
  if (e.l1_warning) return e.l1_warning;
  if (Array.isArray(e.l1)) {
    return {
      mistake_example: e.l1[0],
      why_thai_fails: e.l1[1],
      fix_rule: e.l1[2],
    };
  }
  if (e.l1) return e.l1;
  throw new Error(`Missing l1/l1_warning on day ${e.day}`);
}

export function createModule(meta: ModuleMeta, entries: CompactDayInput[]): ModuleSeed {
  const days: DayAuthorSpec[] = entries.map((e) => {
    const sound_focus = normalizeSound(e);
    const l1_warning = normalizeL1(e);
    return {
      day: e.day,
      week: meta.week,
      week_title: meta.title,
      phase: meta.phase,
      phase_title: meta.phase_title,
      cefr_level: meta.cefr_level,
      type: e.type,
      title: e.title,
      objective: e.objective,
      explanation: e.explanation,
      extra: e.extra,
      sound_focus,
      l1_warning,
      vocab: e.vocab,
      examples: e.examples,
      reading: e.reading,
      listening_question: e.listenQ ?? e.listening_question ?? '',
      listening_answer: e.listenA ?? e.listening_answer ?? '',
      dictation_sentence: e.dictation ?? e.dictation_sentence ?? '',
      listening_note: e.listenNote ?? e.listening_note ?? sound_focus.connected_speech,
      drills: e.drills,
      writing: e.writing,
      writing_sample: e.writingSample ?? e.writing_sample ?? '',
      writing_sample_note:
        e.writingNote ??
        e.writing_sample_note ??
        'ตรวจดู Subject + Verb, ตัวสะกดท้ายคำ และจุดเชื่อมความหมายก่อนจบขั้นตอน',
      speaking_topic: e.speakingTopic ?? e.speaking_topic ?? '',
      speaking_bullets: e.speakingBullets ?? e.speaking_bullets ?? [],
      homework: e.homework,
    };
  });

  return {
    ...meta,
    days,
  };
}
