'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAllLessons } from '@/lib/curriculum';
import { getStoredData, getDueReviewItems } from '@/lib/storage';
import { Flame, Sparkles, Home, Map, RotateCcw, BookOpen, TrendingUp, Settings } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [currentDay, setCurrentDay] = useState(1);
  const [streakDays, setStreakDays] = useState(1);
  const [xp, setXp] = useState(0);
  const [dueReviewsCount, setDueReviewsCount] = useState(0);

  useEffect(() => {
    const syncNavStats = () => {
      const data = getStoredData();
      const allLessons = getAllLessons();
      let nextDay = 1;
      let completed = 0;

      for (const l of allLessons) {
        if (data.lessons_progress[l.id]?.status === 'completed') {
          completed++;
        }
      }
      for (const l of allLessons) {
        if (data.lessons_progress[l.id]?.status !== 'completed') {
          nextDay = l.day;
          break;
        }
      }

      setCurrentDay(nextDay);
      setStreakDays(Math.max(1, completed > 0 ? completed : 1));
      setXp(completed * 10);
      setDueReviewsCount(getDueReviewItems().length);
    };

    syncNavStats();
    window.addEventListener('english_steps_storage_updated', syncNavStats);
    return () => window.removeEventListener('english_steps_storage_updated', syncNavStats);
  }, []);

  const navLinks = [
    { href: '/', label: 'หน้าแรก', icon: Home },
    { href: '/weeks', label: '36 โมดูล', icon: Map },
    {
      href: '/review',
      label: 'ทบทวน',
      badge: dueReviewsCount > 0 ? dueReviewsCount : undefined,
      icon: RotateCcw,
    },
    { href: '/vocabulary', label: 'คำศัพท์ & Chunks', icon: BookOpen },
    { href: '/progress', label: 'พัฒนาการ', icon: TrendingUp },
  ];

  const isLoginPage = pathname === '/login';

  return (
    <>
      {/* Top Header for Desktop & Tablet */}
      <header className="w-full bg-[#FFF9EE] border-b border-[#EEE6D6] sticky top-0 z-40 transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5 group shrink-0">
            <span
              className="text-2xl sm:text-[26px] font-[900] tracking-tight group-hover:scale-105 transition-transform"
              style={{ fontFamily: "'Nunito', sans-serif", color: '#6C4CF1' }}
            >
              English<span style={{ color: '#FF7AA8' }}>Steps</span> 🐾
            </span>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          {!isLoginPage && (
            <nav aria-label="เมนูหลัก" className="hidden md:flex items-center gap-1.5 text-sm font-bold">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/' || pathname === '/today'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#6C4CF1] text-white shadow-sm'
                        : 'text-[#6E6690] hover:text-[#2A1F4A] hover:bg-[#F4F0FF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge !== undefined && (
                      <span
                        className={`text-xs px-1.5 py-0.2 rounded-full font-extrabold ${
                          isActive ? 'bg-white text-[#6C4CF1]' : 'bg-[#FF7AA8] text-white'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Right Controls: Streak, XP & Settings */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {!isLoginPage && (
              <>
                {/* Current Day Badge */}
                <Link
                  href={`/lessons/day-${String(currentDay).padStart(3, '0')}`}
                  className="hidden xl:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-extrabold bg-[#F4F0FF] text-[#6C4CF1] border border-[#E8E0FF] hover:bg-[#6C4CF1] hover:text-white transition-all"
                  title="ไปยังบทเรียนปัจจุบัน"
                >
                  วันที่ {currentDay} / 252
                </Link>

                {/* Streak Badge */}
                <div
                  className="px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-extrabold"
                  style={{ background: '#FFE7C2', color: '#8A4A00' }}
                  title="เรียนต่อเนื่องทุกวัน"
                >
                  <Flame className="w-4 h-4 fill-current text-orange-500" />
                  <span>{streakDays} วันติด</span>
                </div>

                {/* XP Badge */}
                <div
                  className="px-3 py-1.5 rounded-full hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold"
                  style={{ background: '#E6F9C4', color: '#3A6B0A' }}
                  title="คะแนนประสบการณ์รวม"
                >
                  <Sparkles className="w-4 h-4 text-lime-600" />
                  <span>{xp} XP</span>
                </div>
              </>
            )}

            {/* Settings Gear */}
            <Link
              href="/settings"
              aria-label="ตั้งค่า"
              title="ตั้งค่าและโปรไฟล์"
              className={`w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-85 transition-transform active:scale-95 border border-[#EEE6D6] ${
                pathname.startsWith('/settings') ? 'ring-2 ring-[#6C4CF1]' : ''
              }`}
            >
              <Settings className="w-4 h-4 text-[#2A1F4A]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Fixed Bottom Navigation Bar */}
      {!isLoginPage && (
        <nav
          aria-label="แถบเมนูมือถือ"
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EEE6D6] px-2 py-1.5 flex items-center justify-around shadow-lg"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              link.href === '/'
                ? pathname === '/' || pathname === '/today'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl transition-all relative ${
                  isActive
                    ? 'text-[#6C4CF1] font-extrabold'
                    : 'text-[#6E6690] hover:text-[#2A1F4A] font-semibold'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                  {link.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 bg-[#FF7AA8] text-white text-[10px] font-bold px-1 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] leading-tight">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
