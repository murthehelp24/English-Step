import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

export const isServerSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('your-project') &&
    !supabaseAnonKey.includes('your_supabase')
);

export function isOwnerEmail(email?: string | null): boolean {
  const ownerEmail = (process.env.OWNER_EMAIL || '').trim().toLowerCase();
  if (!ownerEmail) return Boolean(email);
  if (!email) return false;
  return email.trim().toLowerCase() === ownerEmail;
}

export async function createServerSupabaseClient() {
  if (!isServerSupabaseConfigured) return null;

  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Called from a Server Component where setting cookies is handled by middleware
        }
      },
    },
  });
}

export function createAdminSupabaseClient() {
  const serviceRoleKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();
  if (!isServerSupabaseConfigured || !serviceRoleKey || serviceRoleKey.includes('your_supabase')) {
    return null;
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function getVerifiedOwnerSession() {
  if (!isServerSupabaseConfigured) {
    return {
      configured: false as const,
      supabase: null,
      user: null,
      isOwner: true,
    };
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return {
      configured: false as const,
      supabase: null,
      user: null,
      isOwner: false,
    };
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      configured: true as const,
      supabase,
      user: null,
      isOwner: false,
    };
  }

  const owner = isOwnerEmail(user.email);

  return {
    configured: true as const,
    supabase,
    user,
    isOwner: owner,
  };
}
