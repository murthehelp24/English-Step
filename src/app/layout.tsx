import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { CloudSyncProvider } from '@/components/auth/CloudSyncProvider';
import { Navbar } from '@/components/layout/Navbar';

const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-thai',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-en',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'English Steps — ภาษาอังกฤษทีละก้าว จาก 0 สู่การใช้งานจริง',
  description:
    'หลักสูตรเรียนภาษาอังกฤษ 252 วัน 6 Phases 36 Modules (Pre-A1 ถึง High-B2/C1) วันละ 60 นาที พร้อม IPA, Chunks, Shadowing 3 รอบ, ครู AI และระบบทบทวน Spaced Repetition',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${ibmPlexThai.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('english_steps_theme');
                  var theme = stored || 'system';
                  var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-body transition-colors duration-200">
        <ThemeProvider>
          <CloudSyncProvider />
          <Navbar />
          <main className="flex-1 pb-16">{children}</main>
          <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground bg-background">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="font-medium text-foreground">English Steps — ภาษาอังกฤษทีละก้าว ในทุกวันของคุณ</div>
              <div className="text-muted-foreground">
                เรียนวันละนิด สม่ำเสมอ ไม่ต้องรีบ
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
