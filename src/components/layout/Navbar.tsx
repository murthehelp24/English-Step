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
import { Sun, Moon, Laptop, Settings, LogOut } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [currentDay, setCurrentDay] = useState(1);
  const [dueReviewsCount, setDueReviewsCount] = useState(0);
  const [authEmail, setAuthEmail] = useState<string | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const syncNavStats = () => {
      const data = getStoredData();
      const allLessons = getAllLessons();
      let nextDay = 1;
      for (const l of allLessons) {
        if (data.lessons_progress[l.id]?.status !== 'completed') {
          nextDay = l.day;
          break;
        }
      }
      setCurrentDay(nextDay);
      setDueReviewsCount(getDueReviewItems().length);
    };

    syncNavStats();
    window.addEventListener('english_steps_storage_updated', syncNavStats);
    return () => window.removeEventListener('english_steps_storage_updated', syncNavStats);
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

  const navLinks = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/weeks', label: 'บทเรียน 16 สัปดาห์' },
    {
      href: '/review',
      label: dueReviewsCount > 0 ? `ทบทวน (${dueReviewsCount})` : 'ทบทวน',
    },
    { href: '/vocabulary', label: 'คำศัพท์' },
    { href: '/progress', label: 'พัฒนาการ' },
  ];

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const isLoginPage = pathname === '/login';

  return (
    <header className="w-full border-b border-border bg-background transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between gap-4">
        {/* Brand & Main Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href={isLoginPage ? '/login' : '/'}
            className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-accent hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            English Steps
          </Link>

          {!isLoginPage && (
            <nav aria-label="เมนูหลัก" className="hidden md:flex items-center gap-6 text-[15px] font-semibold">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/' || pathname === '/today'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-1.5 transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-foreground underline decoration-accent decoration-2 underline-offset-8'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {!isLoginPage && (
            <Link
              href={`/lessons/day-${String(currentDay).padStart(3, '0')}`}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              วันที่ {currentDay} / 112
            </Link>
          )}

          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={cycleTheme}
            aria-label={`เปลี่ยนธีม (ปัจจุบัน: ${
              theme === 'system' ? 'ตามระบบ' : theme === 'dark' ? 'มืด' : 'สว่าง'
            })`}
            title={`ธีม: ${
              theme === 'system' ? 'ตามระบบ' : theme === 'dark' ? 'มืด' : 'สว่าง'
            } (คลิกเพื่อเปลี่ยน)`}
            className="w-10 h-10 rounded-xl bg-surface text-foreground hover:opacity-80 flex items-center justify-center transition-opacity"
          >
            {theme === 'system' ? (
              <Laptop className="w-4 h-4" />
            ) : resolvedTheme === 'dark' ? (
              <Moon className="w-4 h-4 text-accent" />
            ) : (
              <Sun className="w-4 h-4 text-accent" />
            )}
          </button>

          {!isLoginPage && (
            <Link
              href="/settings"
              aria-label="ตั้งค่าและโปรไฟล์"
              title="ตั้งค่าและโปรไฟล์"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-opacity ${
                pathname.startsWith('/settings')
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-surface text-foreground hover:opacity-80'
              }`}
            >
              <Settings className="w-4 h-4" />
            </Link>
          )}

          {!isLoginPage && isSupabaseConfigured && authEmail && (
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              aria-label="ออกจากระบบ"
              title={`ออกจากระบบ (${authEmail})`}
              className="w-10 h-10 rounded-xl bg-surface text-muted-foreground hover:text-error flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Strip */}
      {!isLoginPage && (
        <div className="md:hidden border-t border-border px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/' || pathname === '/today'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 px-3.5 whitespace-nowrap rounded-lg transition-colors ${
                  isActive
                    ? 'bg-lesson-surface text-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
