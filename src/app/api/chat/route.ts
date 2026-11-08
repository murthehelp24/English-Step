import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerLessonById } from '@/lib/curriculum-server';
import { generateTutorResponse } from '@/lib/ai/tutor-engine';
import {
  createAdminSupabaseClient,
  getVerifiedOwnerSession,
} from '@/lib/supabase/server';

const ChatRequestSchema = z.object({
  lesson_id: z.string().min(1),
  message: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant', 'system']),
        content: z.string(),
      })
    )
    .optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getVerifiedOwnerSession();
    // Auth requirement temporarily bypassed per user request

    const rawBody = await req.json();
    const parsed = ChatRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'ข้อมูลที่ส่งมาไม่ถูกต้อง ต้องระบุ lesson_id และข้อความ' },
        { status: 400 }
      );
    }

    const { lesson_id, message, history } = parsed.data;

    const lesson = await getServerLessonById(lesson_id);
    if (!lesson) {
      return NextResponse.json({ error: 'ไม่พบบทเรียนที่ระบุ' }, { status: 404 });
    }

    // Check monthly AI usage cap if configured & authenticated
    const monthlyBudget = Number(process.env.AI_MONTHLY_BUDGET_USD || '10');
    if (session.configured && session.supabase && session.user && monthlyBudget > 0) {
      const monthStart = new Date();
      monthStart.setDate(1);
      monthStart.setHours(0, 0, 0, 0);

      const { data: usageRows } = await session.supabase
        .from('usage_events')
        .select('estimated_cost_usd')
        .eq('user_id', session.user.id)
        .gte('created_at', monthStart.toISOString());

      const totalSpent = (usageRows || []).reduce(
        (sum, row) => sum + Number(row.estimated_cost_usd || 0),
        0
      );

      if (totalSpent >= monthlyBudget) {
        return NextResponse.json(
          {
            error:
              'ยอดใช้งานครู AI ภายนอกถึงงบประมาณที่ตั้งไว้สำหรับเดือนนี้แล้ว (คุณยังเรียนจากเนื้อหาและแบบฝึกหัดต่อได้ปกติครับ)',
          },
          { status: 429 }
        );
      }
    }

    const apiKey =
      process.env.AI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.OPENAI_API_KEY;

    // External LLM adapter hook (uses server-side secret only when real key is set)
    if (apiKey && !apiKey.includes('your_ai_provider')) {
      // Future external provider call can be plugged in here without exposing keys to client
    }

    // Server-side Intelligent Curriculum Tutor v2 (IPA + Thai L1 + Lexical Chunks + Grammar Self-Check)
    const tutorResponse = generateTutorResponse(
      lesson,
      message,
      (history || []).filter(
        (h): h is { role: 'user' | 'assistant'; content: string } =>
          h.role === 'user' || h.role === 'assistant'
      )
    );

    const timestamp = new Date().toISOString();

    if (session.configured && session.supabase && session.user) {
      await session.supabase.from('messages').insert([
        {
          user_id: session.user.id,
          lesson_id,
          role: 'user',
          content: message.trim(),
          created_at: timestamp,
        },
        {
          user_id: session.user.id,
          lesson_id,
          role: 'assistant',
          content: tutorResponse.message,
          model: tutorResponse.model,
          created_at: new Date(Date.now() + 10).toISOString(),
        },
      ]);

      const adminClient = createAdminSupabaseClient();
      if (adminClient) {
        await adminClient.from('usage_events').insert({
          user_id: session.user.id,
          provider: 'server-curriculum-tutor',
          model: tutorResponse.model,
          tokens_input: message.length,
          tokens_output: tutorResponse.message.length,
          estimated_cost_usd: 0,
        });
      }
    }

    return NextResponse.json({
      success: true,
      role: 'assistant',
      content: tutorResponse.message,
      isCorrect: tutorResponse.isCorrect,
      model: tutorResponse.model,
      lesson_id,
      timestamp,
    });
  } catch (err: unknown) {
    console.error('Chat API Error:', err);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการประมวลผลของครู AI กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}
