'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { updateProfile } from '@/lib/storage';
import { ArrowRight, Mail, Key } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    // If Supabase is configured, use official Supabase Auth
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMessage(error.message);
          setIsLoading(false);
          return;
        }

        if (data.user) {
          updateProfile({ email: data.user.email || email });
          router.push('/');
        }
      } catch {
        setErrorMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ Supabase Auth');
        setIsLoading(false);
      }
      return;
    }

    // Local Developer Mode (when Supabase keys are not yet configured)
    setTimeout(() => {
      updateProfile({
        email: email.trim() || 'owner@englishsteps.local',
        name: 'เจ้าของระบบ (Local Mode)',
      });
      router.push('/');
    }, 400);
  };

  return (
    <div className="max-w-md mx-auto px-5 py-12 sm:py-16 transition-colors duration-200">
      <div className="p-7 sm:p-10 bg-surface rounded-2xl space-y-6">
        <div className="text-center space-y-2.5">
          <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground mx-auto flex items-center justify-center font-display font-extrabold text-xl leading-none">
            es
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            เข้าสู่ระบบเจ้าของ
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            พื้นที่เรียนรู้ภาษาอังกฤษส่วนตัว เฉพาะเจ้าของระบบ
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 pt-1">
          {errorMessage && (
            <div className="p-3.5 bg-error-bg rounded-xl text-sm font-medium text-error">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-foreground mb-1.5">
              อีเมลเจ้าของระบบ
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@example.com"
                required
                className="w-full bg-background border-2 border-control-border rounded-xl pl-10 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-1.5">
              รหัสผ่าน
            </label>
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-background border-2 border-control-border rounded-xl pl-10 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground font-extrabold text-base py-3.5 rounded-xl hover:brightness-105 disabled:opacity-50 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>{isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2">
          <div className="p-4 rounded-xl bg-lesson-surface text-sm text-center leading-relaxed">
            {!isSupabaseConfigured ? (
              <span className="font-semibold text-lesson-badge-fg">
                โหมดพัฒนาในเครื่อง (Local Mode): สามารถกดเข้าสู่ระบบได้ทันทีโดยไม่ต้องเชื่อมต่อ Cloud Auth
              </span>
            ) : (
              <span className="text-muted-foreground font-medium">
                ระบบตรวจสอบสิทธิ์ผ่าน Supabase Row Level Security (RLS)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
