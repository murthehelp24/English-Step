import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST() {
  try {
    const supabase = await createServerSupabaseClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Logout error:', err);
    return NextResponse.json(
      { error: 'ไม่สามารถออกจากระบบได้ กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}
