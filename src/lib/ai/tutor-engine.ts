import { Lesson } from '@/types/curriculum';

export interface TutorResponse {
  message: string;
  hint?: string;
  isCorrect?: boolean;
  model: string;
  usageTokens?: number;
}

export function generateTutorResponse(
  lesson: Lesson,
  userMessage: string,
  chatHistory: { role: 'user' | 'assistant'; content: string }[] = []
): TutorResponse {
  const cleanInput = userMessage.trim().toLowerCase();
  const turnCount = chatHistory.length;

  // 1. Ask about Sound Focus / IPA / Connected Speech / Pronunciation
  if (
    cleanInput.includes('ออกเสียง') ||
    cleanInput.includes('ipa') ||
    cleanInput.includes('เสียง') ||
    cleanInput.includes('shadowing') ||
    cleanInput.includes('connected')
  ) {
    if (lesson.sound_focus) {
      return {
        message: `🔊 โฟกัสเสียงของบทนี้ (${lesson.sound_focus.title}):\n\n• ตัวอย่าง IPA: ${lesson.sound_focus.ipa}\n• Connected Speech: ${lesson.sound_focus.connected_speech}\n• วิธีซ้อม: ${lesson.sound_focus.drill}\n\nแนะนำให้กดฟังแบบ 0.75x ตามบทอ่านก่อน 1 รอบ แล้วค่อยเพิ่มเป็น 0.9x–1.0x แบบ Shadowing ตามเสียงทันทีครับ`,
        model: 'intelligent-curriculum-tutor-v2',
      };
    }
  }

  // 2. Ask about Thai L1 Warnings / Common Mistakes
  if (
    cleanInput.includes('พลาด') ||
    cleanInput.includes('คนไทย') ||
    cleanInput.includes('จุดผิด') ||
    cleanInput.includes('ทำไมผิด') ||
    cleanInput.includes('l1')
  ) {
    if (lesson.l1_warning) {
      return {
        message: `⚠️ จุดที่คนไทยมักพลาดในบทนี้:\n\n• ตัวอย่างที่มักหลุด: ${lesson.l1_warning.mistake_example}\n• สาเหตุจากภาษาไทย: ${lesson.l1_warning.why_thai_fails}\n• วิธีแก้ให้จำแม่น: ${lesson.l1_warning.fix_rule}\n\nลองเช็กประโยคที่ตัวเองพิมพ์ว่ายังมีกับดักข้อนี้อยู่ไหมนะครับ!`,
        model: 'intelligent-curriculum-tutor-v2',
      };
    }
  }

  // 3. Ask for Vocabulary & Lexical Chunks summary or Hints
  if (
    cleanInput.includes('คำศัพท์') ||
    cleanInput.includes('chunk') ||
    cleanInput.includes('collocation') ||
    cleanInput.includes('ใบ้') ||
    cleanInput.includes('hint') ||
    cleanInput.includes('ช่วยหน่อย') ||
    cleanInput.includes('ไม่เข้าใจ')
  ) {
    const vocabList = lesson.vocabulary
      .map(
        (v) =>
          `• ${v.en}${v.ipa ? ` ${v.ipa}` : ''} = ${v.th}${
            v.chunk ? `\n  ↳ ก้อนคำ: "${v.chunk}" (${v.chunk_th || ''})` : ''
          }`
      )
      .join('\n');

    return {
      message: `ไม่ต้องกังวลครับ สรุปคำศัพท์และก้อนคำสำคัญ (Chunks) ของบทนี้ให้แล้ว:\n\n${vocabList}\n\nตัวอย่างประโยคจากบทเรียน:\n"${lesson.examples[0]?.en || ''}" (${lesson.examples[0]?.th || ''})\n\nลองหยิบ 1 ก้อนคำไปแต่งเป็นประโยคของตัวเองส่งมาให้ครูตรวจได้เลยครับ!`,
      model: 'intelligent-curriculum-tutor-v2',
    };
  }

  // 4. Match specific vocabulary item in user query
  const matchedVocab = lesson.vocabulary.find(
    (v) => cleanInput.includes(v.en.toLowerCase()) || cleanInput.includes(v.th)
  );
  if (matchedVocab) {
    const example = lesson.examples.find((e) =>
      e.en.toLowerCase().includes(matchedVocab.en.toLowerCase())
    );
    return {
      message: `คำว่า "${matchedVocab.en}"${matchedVocab.ipa ? ` ${matchedVocab.ipa}` : ''} แปลว่า "${matchedVocab.th}" ครับ\n${
        matchedVocab.chunk
          ? `• ก้อนคำที่ควรจำทั้งชุด: "${matchedVocab.chunk}" (${matchedVocab.chunk_th || ''})\n`
          : ''
      }${example ? `• ตัวอย่างในประโยค: "${example.en}" (${example.th})\n` : ''}\nลองใช้ก้อนคำนี้แต่ง 1 ประโยคเกี่ยวกับชีวิตจริงของคุณส่งมาให้ครูช่วยดูได้นะครับ!`,
      model: 'intelligent-curriculum-tutor-v2',
    };
  }

  // 5. Check exact/normalized exercise answers
  for (const ex of lesson.exercises) {
    const target = ex.answer.trim().toLowerCase();
    if (
      cleanInput === target ||
      cleanInput.replace(/[.,!?]/g, '') === target.replace(/[.,!?]/g, '')
    ) {
      return {
        message: `ถูกต้องเลยครับ! เก่งมาก 👍\nเฉลยคือ: "${ex.answer}"\nคำอธิบาย: ${ex.explanation}\n\nพร้อมลองข้อต่อไปหรือแต่งประโยคเพิ่มไหมครับ?`,
        isCorrect: true,
        model: 'intelligent-curriculum-tutor-v2',
      };
    }
  }

  // 6. Lightweight L1 Sentence Self-Check when the user types an English sentence to test
  const looksLikeEnglishSentence =
    /[a-zA-Z]{2,}/.test(userMessage) && userMessage.trim().split(/\s+/).length >= 3;

  if (looksLikeEnglishSentence) {
    const trimmed = userMessage.trim();
    const tips: string[] = [];

    if (/^i\s|\si\s/.test(trimmed)) {
      tips.push('สังเกตคำว่า "I" (ฉัน) ต้องใช้ตัวพิมพ์ใหญ่ "I" เสมอแม้จะอยู่กลางประโยค');
    }
    if (/^[a-z]/.test(trimmed)) {
      tips.push('อักษรตัวแรกของประโยคภาษาอังกฤษควรขึ้นต้นด้วยตัวพิมพ์ใหญ่ครับ');
    }
    if (!/[.!?]$/.test(trimmed)) {
      tips.push('อย่าลืมปิดท้ายประโยคด้วยเครื่องหมาย . หรือ ? นะครับ');
    }
    if (/\b(i|he|she|it|we|they)\s+(very|happy|busy|tired|ready|free)\b/i.test(trimmed)) {
      tips.push('ระวังจุดพลาดคนไทย: หน้าคำคุณศัพท์ (happy, busy, tired ฯลฯ) ต้องมี verb to be (am/is/are หรือ was/were) เสมอ');
    }
    if (/\binformations\b|\badvices\b|\bfurnitures\b|\bluggages\b/i.test(trimmed)) {
      tips.push('ระวังคำนามนับไม่ได้ (information, advice, furniture, luggage) ห้ามเติม -s นะครับ');
    }

    if (tips.length > 0) {
      return {
        message: `เยี่ยมเลยที่กล้าลองเขียนเองครับ! ลองดูจุดเล็กๆ ที่ครูช่วยเช็กให้จากประโยค "${trimmed}":\n\n${tips
          .map((t, i) => `${i + 1}. ${t}`)
          .join('\n')}\n\nลองปรับแล้วส่งกลับมาอีกรอบ หรือเทียบกับแนวทางตัวอย่างของบทเรียน: "${lesson.writing_sample || lesson.examples[0]?.en || ''}" ได้เลยครับ!`,
        model: 'intelligent-curriculum-tutor-v2',
      };
    }

    return {
      message: `ประโยค "${trimmed}" โครงสร้างชัดเจนดีมากครับ! 👌\nลองเช็กเพิ่มเติมอีกนิดกับกติกาของบทนี้ (${lesson.l1_warning?.fix_rule || lesson.objective}) และเทียบความลื่นไหลกับตัวอย่าง: "${lesson.writing_sample || lesson.examples[0]?.en || ''}" นะครับ`,
      model: 'intelligent-curriculum-tutor-v2',
    };
  }

  // 7. Contextual default tutor guidance
  const encouragement = turnCount > 2 ? ' ขยันฝึกมากครับ!' : '';
  return {
    message: `ครูอยู่ตรงนี้ช่วยคุณครับ${encouragement} บทเรียนวันนี้คือ "${lesson.title}"${
      lesson.cefr_level ? ` (ระดับ ${lesson.cefr_level})` : ''
    }\n\n• เป้าหมาย: ${lesson.objective}${
      lesson.l1_warning ? `\n• ข้อควรระวัง: ${lesson.l1_warning.fix_rule}` : ''
    }\n\nพิมพ์คำศัพท์ที่อยากถาม พิมพ์ประโยคภาษาอังกฤษให้ครูช่วยเช็ก หรือกดปุ่มคำถามด่วนด้านล่างได้เลยครับ!`,
    model: 'intelligent-curriculum-tutor-v2',
  };
}
