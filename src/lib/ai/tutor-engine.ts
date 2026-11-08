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

  // Use chat history length for conversational flow awareness
  const turnCount = chatHistory.length;

  // 1. Check if user is asking for hint
  if (
    cleanInput.includes('ใบ้') ||
    cleanInput.includes('hint') ||
    cleanInput.includes('ช่วยหน่อย') ||
    cleanInput.includes('ไม่เข้าใจ')
  ) {
    const vocabList = lesson.vocabulary.map((v) => `• ${v.en} (${v.th})`).join('\n');
    return {
      message: `ไม่ต้องกังวลครับ ลองดูคำสำคัญของบทนี้ก่อนนะ:\n\n${vocabList}\n\nลองสังเกตรูปประโยคตัวอย่าง: "${lesson.examples[0]?.en || ''}"\nแล้วลองพิมพ์ใหม่อีกครั้งได้เลยครับ ครูคอยตรวจให้!`,
      model: 'intelligent-curriculum-tutor-v1',
    };
  }

  // 2. Check if user answers an exercise or asks about an example
  // Check against vocabulary
  const matchedVocab = lesson.vocabulary.find(
    (v) => cleanInput.includes(v.en.toLowerCase()) || cleanInput.includes(v.th)
  );
  if (matchedVocab) {
    const example = lesson.examples.find((e) =>
      e.en.toLowerCase().includes(matchedVocab.en.toLowerCase())
    );
    return {
      message: `ดีมากครับ! คำว่า "${matchedVocab.en}" แปลว่า "${matchedVocab.th}"\n${
        example ? `ตัวอย่างการใช้: "${example.en}" (${example.th})` : ''
      }\n\nลองแต่งประโยคสั้น ๆ ของตัวเองโดยใช้คำนี้ดูไหมครับ?`,
      model: 'intelligent-curriculum-tutor-v1',
    };
  }

  // 3. Check exercises answers
  for (const ex of lesson.exercises) {
    const target = ex.answer.trim().toLowerCase();
    if (cleanInput === target || cleanInput.replace(/[.,!?]/g, '') === target.replace(/[.,!?]/g, '')) {
      return {
        message: `ถูกต้องเลยครับ! เก่งมาก 👍\nประโยคนี้คือ "${ex.answer}"\nคำอธิบาย: ${ex.explanation}\n\nพร้อมทำข้อต่อไปหรือยังครับ?`,
        isCorrect: true,
        model: 'intelligent-curriculum-tutor-v1',
      };
    }
  }

  // 4. General supportive tutor response contextualized with the current lesson
  const encouragement = turnCount > 2 ? ' ขยันฝึกมากครับ!' : '';
  return {
    message: `ครูฟังอยู่ครับ${encouragement} ในบทเรียนเรื่อง "${lesson.title}" วันนี้ จุดประสงค์คือ: ${lesson.objective}\n\nประโยคหลักคือ: "${lesson.reading}"\n\nอยากให้ครูช่วยอธิบายคำศัพท์ ข้อไหน หรืออยากลองพิมพ์ประโยคให้ครูตรวจดีครับ? พิมพ์มาได้เลยนะ ไม่ต้องกลัวผิดครับ!`,
    model: 'intelligent-curriculum-tutor-v1',
  };
}
