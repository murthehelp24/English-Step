import { NextResponse, type NextRequest } from 'next/server';

/**
 * Authentication Middleware (Temporarily Bypassed per user request)
 * The login gate is removed so anyone can enter and study directly without logging in.
 * If someone accesses /login, they are redirected straight to the home dashboard.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /login directly to home dashboard /
  if (pathname === '/login') {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = '/';
    homeUrl.search = '';
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|icon-.*\\.png|apple-icon\\.png|robots.txt|sitemap.xml).*)',
  ],
};
