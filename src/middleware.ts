import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

const isSupabaseEnabled = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('your-project') &&
    !supabaseAnonKey.includes('your_supabase')
);

function isOwnerEmail(email?: string | null): boolean {
  const ownerEmail = (process.env.OWNER_EMAIL || '').trim().toLowerCase();
  if (!ownerEmail) return Boolean(email);
  if (!email) return false;
  return email.trim().toLowerCase() === ownerEmail;
}

function getSafeNextPath(nextParam: string | null): string {
  if (!nextParam) return '/';
  if (!nextParam.startsWith('/') || nextParam.startsWith('//')) return '/';
  return nextParam;
}

export async function middleware(request: NextRequest) {
  if (!isSupabaseEnabled) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname, search } = request.nextUrl;
  const isPublicPage = pathname === '/login' || pathname.startsWith('/auth/');
  const isApiRoute = pathname.startsWith('/api/');

  // Let API handlers enforce JSON 401/403 status cleanly
  if (isApiRoute) {
    return response;
  }

  // Unauthenticated access to protected page -> redirect to /login
  if (!user && !isPublicPage) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    const nextPath = pathname + (search || '');
    if (nextPath && nextPath !== '/') {
      loginUrl.searchParams.set('next', nextPath);
    }
    return NextResponse.redirect(loginUrl);
  }

  // Authenticated with non-owner email -> revoke/block access
  if (user && !isOwnerEmail(user.email)) {
    if (!isPublicPage) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      loginUrl.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(loginUrl);
    }
    return response;
  }

  // Authorized owner visiting /login -> send straight to dashboard or requested page
  if (user && isOwnerEmail(user.email) && pathname === '/login') {
    const nextPath = getSafeNextPath(request.nextUrl.searchParams.get('next'));
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = nextPath === '/login' ? '/' : nextPath;
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
