import { NextRequest, NextResponse } from 'next/server';
import { getLessonById } from '@/lib/curriculum';
import { generateTutorResponse } from '@/lib/ai/tutor-engine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { lesson_id, message, history } = body;

    if (!lesson_id || !message) {
      return NextResponse.json(
        { error: 'ต้องระบุ lesson_id และ message' },
        { status: 400 }
      );
    }

    const lesson = getLessonById(lesson_id);
    if (!lesson) {
      return NextResponse.json(
        { error: 'ไม่พบบทเรียนที่ระบุ' },
        { status: 404 }
      );
    }

    const apiKey = process.env.AI_API_KEY || process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

    // If an external API key is provided, we can route to external provider (e.g., Gemini / OpenAI)
    if (apiKey) {
      // Future live external provider call
    }

    // Server-side Intelligent Curriculum Tutor fallback (always reliable, no external secret needed)
    const tutorResponse = generateTutorResponse(lesson, message, history || []);

    return NextResponse.json({
      success: true,
      role: 'assistant',
      content: tutorResponse.message,
      isCorrect: tutorResponse.isCorrect,
      model: tutorResponse.model,
      lesson_id,
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    console.error('Chat API Error:', err);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการประมวลผลของครู AI กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}
