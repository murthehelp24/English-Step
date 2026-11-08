'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { syncFromCloud, updateProfile } from '@/lib/storage';
import { ArrowRight, Mail, Key, Eye, EyeOff, ShieldCheck, User } from 'lucide-react';

const ALLOW_SIGNUP =
  (process.env.NEXT_PUBLIC_ALLOW_SIGNUP || '').trim().toLowerCase() === 'true';

function mapAuthErrorToThai(rawMessage: string): string {
  const lower = rawMessage.toLowerCase();
  if (lower.includes('invalid login credentials')) {
    return 'อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบแล้วลองอีกครั้ง';
  }
  if (lower.includes('email not confirmed')) {
    return 'บัญชีนี้ยังไม่ได้ยืนยันอีเมล กรุณายืนยันอีเมลในกล่องข้อความของคุณ หรือปิด Confirm Email ใน Supabase Auth';
  }
  if (lower.includes('user already registered')) {
    return 'อีเมลนี้เคยสมัครสมาชิกแล้ว กรุณาสลับไปหน้าเข้าสู่ระบบ';
  }
  if (lower.includes('password should be at least')) {
    return 'รหัสผ่านควรมีความยาวอย่างน้อย 6 ตัวอักษร';
  }
  if (lower.includes('too many requests') || lower.includes('rate limit')) {
    return 'ลองทำรายการถี่เกินไป กรุณารอสักครู่แล้วลองใหม่ครับ';
  }
  return rawMessage;
}

function getSafeNextPath(nextParam: string | null): string {
  if (!nextParam) return '/';
  if (!nextParam.startsWith('/') || nextParam.startsWith('//') || nextParam === '/login') {
    return '/';
  }
  return nextParam;
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const errorCode = searchParams.get('error');
  const nextPath = getSafeNextPath(searchParams.get('next'));

  useEffect(() => {
    if (errorCode === 'unauthorized') {
      setErrorMessage(
        'บัญชีอีเมลนี้ไม่มีสิทธิ์เข้าใช้งานระบบ (ขณะนี้ระบบเปิดใช้งานเฉพาะบัญชีเจ้าของที่กำหนดไว้ใน OWNER_EMAIL)'
      );
      if (isSupabaseConfigured && supabase) {
        void supabase.auth.signOut();
      }
    } else if (errorCode === 'auth_callback_failed') {
      setErrorMessage('ลิงก์ยืนยันตัวตนไม่ถูกต้องหรือหมดอายุแล้ว กรุณาเข้าสู่ระบบใหม่อีกครั้ง');
    }
  }, [errorCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setInfoMessage(null);

    if (isSupabaseConfigured && supabase) {
      try {
        if (mode === 'signup' && ALLOW_SIGNUP) {
          const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
              data: {
                name: name.trim() || 'ผู้เรียน',
                experience_level: 'zero',
                learning_goal: 'comprehensive',
              },
            },
          });

          if (error) {
            setErrorMessage(mapAuthErrorToThai(error.message));
            setIsLoading(false);
            return;
          }

          if (data.session) {
            await syncFromCloud();
            router.push('/onboarding');
            router.refresh();
            return;
          }

          setInfoMessage(
            'สร้างบัญชีสำเร็จ! กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี หรือเข้าสู่ระบบทันทีหากปิดการยืนยันอีเมลไว้'
          );
          setMode('login');
          setIsLoading(false);
          return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMessage(mapAuthErrorToThai(error.message));
          setIsLoading(false);
          return;
        }

        if (data.user) {
          const syncRes = await syncFromCloud();
          if (syncRes.mode === 'unauthenticated') {
            await supabase.auth.signOut();
            await fetch('/api/auth/logout', { method: 'POST' });
            setErrorMessage(
              'บัญชีอีเมลนี้ไม่มีสิทธิ์เข้าใช้งานระบบ (อนุญาตเฉพาะบัญชีที่ได้รับอนุญาต)'
            );
            setIsLoading(false);
            return;
          }

          if (syncRes.data?.profile && !syncRes.data.profile.onboarding_completed) {
            router.push('/onboarding');
          } else {
            router.push(nextPath);
          }
          router.refresh();
          return;
        }
      } catch {
        setErrorMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ Supabase Auth กรุณาลองใหม่');
        setIsLoading(false);
      }
      return;
    }

    // Fallback when Supabase env vars are absent (offline/local preview mode)
    setTimeout(() => {
      updateProfile(
        {
          email: email.trim() || 'owner@englishsteps.local',
          name: name.trim() || 'ผู้เรียน (Local Mode)',
        },
        { skipCloudSync: true }
      );
      router.push(nextPath);
    }, 300);
  };

  return (
    <div className="max-w-md mx-auto px-5 py-12 sm:py-16 transition-colors duration-200">
      <div className="p-7 sm:p-10 bg-surface rounded-2xl space-y-6">
        <div className="text-center space-y-2.5">
          <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground mx-auto flex items-center justify-center font-display font-extrabold text-xl leading-none">
            es
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {ALLOW_SIGNUP
              ? mode === 'signup'
                ? 'สมัครเรียน English Steps'
                : 'เข้าสู่ระบบผู้เรียน'
              : 'เข้าสู่ระบบเจ้าของ'}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {ALLOW_SIGNUP
              ? 'หลักสูตร 252 วันจากศูนย์สู่การใช้จริง แยกเก็บความคืบหน้าส่วนตัวบนคลาวด์'
              : 'พื้นที่เรียนรู้ภาษาอังกฤษ 252 วันส่วนตัว ปลอดภัยสำหรับบัญชีเจ้าของระบบ'}
          </p>
        </div>

        {ALLOW_SIGNUP && (
          <div className="grid grid-cols-2 gap-1.5 bg-background p-1 rounded-xl">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage(null);
              }}
              className={`py-2 rounded-lg text-sm font-bold transition-colors ${
                mode === 'login'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              เข้าสู่ระบบ
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setErrorMessage(null);
              }}
              className={`py-2 rounded-lg text-sm font-bold transition-colors ${
                mode === 'signup'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              สมัครสมาชิกใหม่
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {errorMessage && (
            <div className="p-4 bg-error-bg rounded-xl text-sm font-semibold text-error leading-relaxed">
              {errorMessage}
            </div>
          )}

          {infoMessage && (
            <div className="p-4 bg-success-bg rounded-xl text-sm font-semibold text-success leading-relaxed">
              {infoMessage}
            </div>
          )}

          {mode === 'signup' && ALLOW_SIGNUP && (
            <div>
              <label
                htmlFor="signup-name"
                className="block text-sm font-bold text-foreground mb-1.5"
              >
                ชื่อที่ใช้เรียกคุณ
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="signup-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="เช่น มิ้นท์, กอล์ฟ..."
                  className="w-full bg-background border-2 border-control-border rounded-xl pl-10 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-bold text-foreground mb-1.5"
            >
              {ALLOW_SIGNUP ? 'อีเมล' : 'อีเมลเจ้าของระบบ'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-background border-2 border-control-border rounded-xl pl-10 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block text-sm font-bold text-foreground mb-1.5"
            >
              รหัสผ่าน
            </label>
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required={isSupabaseConfigured}
                minLength={6}
                className="w-full bg-background border-2 border-control-border rounded-xl pl-10 pr-12 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground font-extrabold text-base py-3.5 rounded-xl hover:brightness-105 disabled:opacity-50 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>
              {isLoading
                ? 'กำลังดำเนินการ...'
                : mode === 'signup' && ALLOW_SIGNUP
                ? 'สร้างบัญชีและเริ่มเรียน'
                : 'เข้าสู่ระบบ'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2">
          <div className="p-4 rounded-xl bg-lesson-surface text-sm text-center leading-relaxed flex items-center justify-center gap-2">
            {!isSupabaseConfigured ? (
              <span className="font-semibold text-lesson-badge-fg">
                โหมดพัฒนาในเครื่อง (Local Mode): สามารถกดเข้าสู่ระบบได้ทันที
              </span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-foreground font-semibold">
                  ป้องกันข้อมูลแยกตามบัญชีด้วย Supabase Auth &amp; Row Level Security (RLS)
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-md mx-auto px-5 py-16 text-center text-muted-foreground text-base">
          กำลังเตรียมหน้าเข้าสู่ระบบ...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
