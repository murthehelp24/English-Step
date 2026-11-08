'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '@/components/theme-provider';
import { getAllLessons } from '@/lib/curriculum';
import {
  getStoredData,
  getDueReviewItems,
  resetAllUserData,
} from '@/lib/storage';
import { isSupabaseConfigured, supabase } from '@/lib/supabase/client';
import {
  Home,
  Compass,
  RotateCcw,
  BookMarked,
  BarChart2,
  Settings,
  Sun,
  Moon,
  Laptop,
  Flame,
  LogOut,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface AppNavigationProps {
  children: React.ReactNode;
}

export function AppNavigation({ children }: AppNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [currentDay, setCurrentDay] = useState(1);
  const [completedCount, setCompletedCount] = useState(0);
  const [dueReviewsCount, setDueReviewsCount] = useState(0);
  const [authEmail, setAuthEmail] = useState<string | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const syncStats = () => {
      const data = getStoredData();
      const allLessons = getAllLessons();
      let nextDay = 1;
      let completed = 0;
      for (const l of allLessons) {
        if (data.lessons_progress[l.id]?.status === 'completed') {
          completed++;
        } else if (nextDay === 1 && !data.lessons_progress[l.id]?.status) {
          nextDay = l.day;
        }
      }
      for (const l of allLessons) {
        if (data.lessons_progress[l.id]?.status !== 'completed') {
          nextDay = l.day;
          break;
        }
      }
      setCurrentDay(nextDay);
      setCompletedCount(completed);
      setDueReviewsCount(getDueReviewItems().length);
    };

    syncStats();
    window.addEventListener('english_steps_storage_updated', syncStats);
    return () => window.removeEventListener('english_steps_storage_updated', syncStats);
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setAuthEmail(data.user?.email || null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthEmail(session?.user?.email || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      if (supabase) {
        await supabase.auth.signOut();
      }
      await fetch('/api/auth/logout', { method: 'POST' });
      resetAllUserData({ localOnly: true });
      router.push('/login');
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const isLoginPage = pathname === '/login' || pathname === '/onboarding';
  const isLessonRoom = pathname.startsWith('/lessons/');

  // Streak calculation: 1 + completed count
  const streakDays = Math.max(1, completedCount);
  const progressPct = Math.round((completedCount / 252) * 100);

  const navItems = [
    {
      href: '/',
      label: 'หน้าแรก',
      icon: Home,
      exact: true,
    },
    {
      href: '/weeks',
      label: 'แผนที่การเรียน (36 โมดูล)',
      icon: Compass,
      exact: false,
    },
    {
      href: '/review',
      label: 'ทบทวนจุดผิด (SRS)',
      badge: dueReviewsCount > 0 ? `${dueReviewsCount}` : undefined,
      icon: RotateCcw,
      exact: false,
    },
    {
      href: '/vocabulary',
      label: 'คลังคำศัพท์ & Chunks',
      icon: BookMarked,
      exact: false,
    },
    {
      href: '/progress',
      label: 'สถิติ & พัฒนาการ',
      icon: BarChart2,
      exact: false,
    },
  ];

  if (isLoginPage || isLessonRoom) {
    return (
      <div className="min-h-screen bg-slate-50/60 dark:bg-[#0c0e12] transition-colors duration-200">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-[#0c0e12] flex flex-col lg:flex-row transition-colors duration-200">
      {/* =========================================================================
          DESKTOP SIDEBAR (Visible on lg: screens and up, fixed w-64)
          ========================================================================= */}
      <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 left-0 bg-background border-r border-border z-30 select-none">
        {/* Brand Header */}
        <div className="p-5 border-b border-border">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-lg text-foreground tracking-tight leading-tight">
                English Steps
              </div>
              <div className="text-xs font-semibold text-muted-foreground">
                252 Days • Zero to Fluency
              </div>
            </div>
          </Link>
        </div>

        {/* Daily Streak & Level Card */}
        <div className="p-4 border-b border-border/60">
          <div className="p-3.5 rounded-xl bg-lesson-surface/70 border border-lesson-badge/30 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 text-accent">
                <Flame className="w-4 h-4 fill-current text-accent" />
                <span>Streak {streakDays} วัน</span>
              </span>
              <span className="text-muted-foreground font-semibold">
                วันที่ {currentDay} / 252
              </span>
            </div>

            {/* Micro Progress Bar */}
            <div className="w-full bg-background/80 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-accent h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(2, progressPct)}%` }}
              />
            </div>

            <Link
              href={`/lessons/day-${String(currentDay).padStart(3, '0')}`}
              className="w-full py-2 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-bold flex items-center justify-between hover:brightness-105 active:scale-[0.99] transition-all"
            >
              <span>เรียนต่อวันที่ {currentDay}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Main Navigation Menu */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-dark-chip text-dark-chip-fg shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-muted-foreground'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-review-surface text-review-accent text-xs font-extrabold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User / Theme / Utility Footer */}
        <div className="p-3 border-t border-border space-y-2">
          {/* Theme switcher */}
          <button
            type="button"
            onClick={cycleTheme}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            <div className="flex items-center gap-2.5">
              {theme === 'system' ? (
                <Laptop className="w-4 h-4 text-accent" />
              ) : resolvedTheme === 'dark' ? (
                <Moon className="w-4 h-4 text-accent" />
              ) : (
                <Sun className="w-4 h-4 text-accent" />
              )}
              <span>ธีม: {theme === 'system' ? 'ตามระบบ' : theme === 'dark' ? 'โหมดมืด' : 'โหมดสว่าง'}</span>
            </div>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-surface border border-border">
              {theme}
            </span>
          </button>

          {/* Settings & Profile link */}
          <div className="flex items-center gap-1 pt-1">
            <Link
              href="/settings"
              className={`flex-1 flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                pathname.startsWith('/settings')
                  ? 'bg-accent/10 text-accent font-extrabold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-surface'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="truncate">{authEmail ? authEmail.split('@')[0] : 'ตั้งค่า & โปรไฟล์'}</span>
            </Link>

            {authEmail && (
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                title="ออกจากระบบ"
                aria-label="ออกจากระบบ"
                className="p-2 rounded-xl text-muted-foreground hover:text-error hover:bg-surface transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* =========================================================================
          MOBILE TOP APP BAR (Visible on < lg screens)
          ========================================================================= */}
      <header className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-display font-extrabold text-base text-foreground">
            English Steps
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-xs font-bold">
            <Flame className="w-3.5 h-3.5 fill-current text-accent" />
            <span>{streakDays}d</span>
          </span>

          <Link
            href={`/lessons/day-${String(currentDay).padStart(3, '0')}`}
            className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold"
          >
            วันที่ {currentDay}
          </Link>

          <button
            type="button"
            onClick={cycleTheme}
            aria-label="เปลี่ยนธีม"
            className="p-1.5 rounded-lg bg-surface text-foreground"
          >
            {resolvedTheme === 'dark' ? (
              <Moon className="w-4 h-4 text-accent" />
            ) : (
              <Sun className="w-4 h-4 text-accent" />
            )}
          </button>

          <Link
            href="/settings"
            aria-label="ตั้งค่า"
            className="p-1.5 rounded-lg bg-surface text-foreground"
          >
            <Settings className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* =========================================================================
          MAIN VIEWPORT (Expanded with left margin on desktop to accommodate sidebar)
          ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <main className="flex-1 pb-24 lg:pb-12">{children}</main>

        {/* Desktop Mini-Footer */}
        <footer className="hidden lg:block border-t border-border py-6 px-8 text-xs text-muted-foreground bg-background/50">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <span>English Steps — ภาษาอังกฤษทีละก้าว จากศูนย์สู่ความคล่องตัว (252 วัน)</span>
            <div className="flex items-center gap-4">
              <Link href="/weeks" className="hover:text-foreground">36 โมดูล</Link>
              <Link href="/vocabulary" className="hover:text-foreground">คำศัพท์ & Chunks</Link>
              <Link href="/settings" className="hover:text-foreground">ตั้งค่า</Link>
            </div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          MOBILE BOTTOM NAVIGATION BAR (Thumb zone navigation on < lg screens)
          ========================================================================= */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-background/95 backdrop-blur-md border-t border-border z-30 px-2 py-1.5 flex items-center justify-around select-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg text-[11px] font-bold transition-colors relative ${
                isActive
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label.split(' ')[0]}</span>
              {item.badge && (
                <span className="absolute top-0.5 right-2 w-2 h-2 rounded-full bg-accent" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
