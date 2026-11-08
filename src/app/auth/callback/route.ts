import { NextResponse, type NextRequest } from 'next/server';
import { createServerSupabaseClient, isOwnerEmail } from '@/lib/supabase/server';

function getSafeNextPath(nextParam: string | null): string {
  if (!nextParam) return '/';
  if (!nextParam.startsWith('/') || nextParam.startsWith('//')) return '/';
  return nextParam;
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = getSafeNextPath(searchParams.get('next'));

  if (code) {
    const supabase = await createServerSupabaseClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user || !isOwnerEmail(user.email)) {
          await supabase.auth.signOut();
          return NextResponse.redirect(`${origin}/login?error=unauthorized`);
        }

        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
}
