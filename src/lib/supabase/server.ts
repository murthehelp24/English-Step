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

export function isMultiUserEnabled(): boolean {
  return (process.env.ALLOW_MULTI_USER || '').trim().toLowerCase() === 'true';
}

export function isOwnerEmail(email?: string | null): boolean {
  const ownerEmail = (process.env.OWNER_EMAIL || '').trim().toLowerCase();
  if (!ownerEmail) return Boolean(email);
  if (!email) return false;
  return email.trim().toLowerCase() === ownerEmail;
}

export function isAuthorizedUser(email?: string | null): boolean {
  if (!email) return false;
  if (isMultiUserEnabled()) return true;
  return isOwnerEmail(email);
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
      isAuthorized: true,
      role: 'owner' as const,
    };
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return {
      configured: false as const,
      supabase: null,
      user: null,
      isOwner: false,
      isAuthorized: false,
      role: 'learner' as const,
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
      isAuthorized: false,
      role: 'learner' as const,
    };
  }

  const owner = isOwnerEmail(user.email);
  const authorized = isAuthorizedUser(user.email);

  return {
    configured: true as const,
    supabase,
    user,
    isOwner: owner,
    isAuthorized: authorized,
    role: (owner ? 'owner' : 'learner') as 'owner' | 'learner',
  };
}
