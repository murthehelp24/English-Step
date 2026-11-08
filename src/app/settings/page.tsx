'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/theme-provider';
import { StoredAppData, ThemePreference } from '@/types/learning';
import {
  getStoredData,
  updateProfile,
  exportUserDataAsJSON,
  importUserDataFromJSON,
  resetAllUserData,
  syncFromCloud,
  getPendingLocalBackup,
  importPendingLocalBackupToCloud,
  clearPendingLocalBackup,
} from '@/lib/storage';
import { isSupabaseConfigured, supabase } from '@/lib/supabase/client';
import {
  Sun,
  Moon,
  Laptop,
  Download,
  Upload,
  RotateCcw,
  Server,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  LogOut,
  ShieldCheck,
} from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [profile, setProfile] = useState({
    name: 'ผู้เรียน',
    email: 'owner@englishsteps.local',
    targetMinutes: 60,
    timezone: 'Asia/Bangkok',
  });
  const [lastSyncAt, setLastSyncAt] = useState<string | undefined>(undefined);
  const [pendingBackup, setPendingBackup] = useState<StoredAppData | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  useEffect(() => {
    const load = () => {
      const data = getStoredData();
      if (data.profile) {
        setProfile({
          name: data.profile.name || 'ผู้เรียน',
          email: data.profile.email || 'owner@englishsteps.local',
          targetMinutes: data.profile.target_minutes || 60,
          timezone: data.profile.timezone || 'Asia/Bangkok',
        });
      }
      setLastSyncAt(data.last_sync_at);
      setPendingBackup(getPendingLocalBackup());
    };

    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: profile.name,
      target_minutes: Number(profile.targetMinutes),
      timezone: profile.timezone,
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleManualSync = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    const res = await syncFromCloud();
    setIsSyncing(false);
    setSyncMessage(
      res.ok
        ? 'ซิงก์ข้อมูลล่าสุดจาก Supabase เรียบร้อยแล้ว'
        : 'ยังไม่สามารถซิงก์จาก Supabase ได้ กรุณาตรวจสอบการเข้าสู่ระบบ'
    );
  };

  const handleImportLegacyBackup = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    const ok = await importPendingLocalBackupToCloud();
    setIsSyncing(false);
    setSyncMessage(
      ok
        ? 'นำเข้าข้อมูลเดิมจากเครื่องขึ้นบัญชี Supabase สำเร็จแล้ว'
        : 'เกิดข้อผิดพลาดในการนำเข้าข้อมูลเดิมขึ้น Supabase'
    );
  };

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    await fetch('/api/auth/logout', { method: 'POST' });
    resetAllUserData({ localOnly: true });
    router.push('/login');
    router.refresh();
  };

  const handleExportData = () => {
    const jsonStr = exportUserDataAsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `english-steps-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importUserDataFromJSON(content);
      if (success) {
        setImportStatus('นำเข้าข้อมูลสำเร็จเรียบร้อย');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        setImportStatus('ไฟล์ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบไฟล์สำรอง');
      }
    };
    reader.readAsText(file);
  };

  const handleResetData = () => {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการล้างข้อมูลการเรียนทั้งหมดเพื่อเริ่มต้นใหม่?')) {
      resetAllUserData();
      window.location.reload();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Header Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 space-y-2">
        <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
          การตั้งค่าระบบส่วนตัว
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          ตั้งค่าและข้อมูลบัญชี
        </h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          จัดการบัญชีเจ้าของ การซิงก์ฐานข้อมูล ธีมการแสดงผล เวลาเรียนเป้าหมาย และการสำรองข้อมูล
        </p>
      </div>

      {/* Owner Account & Cloud Sync Section */}
      {isSupabaseConfigured && (
        <section className="p-6 sm:p-8 bg-review-surface rounded-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-sm font-extrabold text-review-accent">
                <ShieldCheck className="w-4 h-4" />
                <span>บัญชีเจ้าของระบบ (Supabase Auth + RLS)</span>
              </div>
              <div className="text-lg font-extrabold text-foreground font-display">
                {profile.email}
              </div>
              {lastSyncAt && (
                <div className="text-xs font-medium text-muted-foreground">
                  ซิงก์ล่าสุด: {new Date(lastSyncAt).toLocaleString('th-TH')}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleManualSync}
                disabled={isSyncing}
                className="inline-flex items-center gap-2 bg-background text-foreground px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-85 disabled:opacity-50 transition-opacity"
              >
                <RefreshCw className={`w-4 h-4 text-review-accent ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'กำลังซิงก์...' : 'ซิงก์ข้อมูลล่าสุด'}</span>
              </button>

              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex items-center gap-2 bg-error-bg text-error px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-85 transition-opacity"
              >
                <LogOut className="w-4 h-4" />
                <span>ออกจากระบบ</span>
              </button>
            </div>
          </div>

          {syncMessage && (
            <div className="p-3.5 bg-background rounded-xl text-sm font-bold text-foreground">
              {syncMessage}
            </div>
          )}

          {/* Explicit user opt-in for pre-login local progress */}
          {pendingBackup && (
            <div className="p-5 bg-lesson-surface rounded-xl space-y-3">
              <div className="text-base font-extrabold text-foreground">
                พบประวัติการเรียนที่เคยบันทึกไว้ในเบราว์เซอร์นี้ก่อนเข้าสู่ระบบ
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                พบ {Object.keys(pendingBackup.lessons_progress || {}).length} บทเรียนที่มีความคืบหน้า คุณต้องการนำเข้าขึ้นบัญชี Supabase ของคุณหรือไม่?
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleImportLegacyBackup}
                  disabled={isSyncing}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-extrabold hover:brightness-105 disabled:opacity-50"
                >
                  นำเข้าข้อมูลเดิมขึ้น Supabase
                </button>
                <button
                  type="button"
                  onClick={() => clearPendingLocalBackup()}
                  className="bg-background text-muted-foreground hover:text-foreground px-4 py-2.5 rounded-xl text-sm font-bold"
                >
                  ไม่นำเข้า (ซ่อนข้อความนี้)
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Theme Settings Section */}
      <section className="p-6 sm:p-8 bg-surface rounded-2xl space-y-5">
        <div>
          <h2 className="text-xl font-extrabold text-foreground">
            ธีมการแสดงผล (Nordic Bright)
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            เลือกโทนสีที่อ่านง่ายสบายตา ทั้งสามตัวเลือกรองรับโทนอุ่นและบล็อกสีคมชัด
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: 'light', label: 'สว่าง (Light)', icon: Sun, desc: 'พื้นขาวสะอาด บล็อกสีอุ่นอ่านง่าย' },
            { id: 'dark', label: 'มืด (Dark)', icon: Moon, desc: 'พื้นถ่านนุ่มสบายตาในที่แสงน้อย' },
            { id: 'system', label: 'ตามระบบ (System)', icon: Laptop, desc: 'ปรับอัตโนมัติตามอุปกรณ์ของคุณ' },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = theme === item.id;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setTheme(item.id as ThemePreference)}
                className={`p-5 rounded-xl bg-background text-left transition-all ${
                  isSelected
                    ? 'ring-2 ring-accent'
                    : 'hover:opacity-90'
                }`}
              >
                <div className="flex items-center gap-2.5 font-extrabold text-base text-foreground mb-1.5">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-accent' : 'text-muted-foreground'}`} />
                  <span>{item.label}</span>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Study Goals Settings Section */}
      <section className="p-6 sm:p-8 bg-lesson-surface rounded-2xl space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-foreground">
            เป้าหมายการเรียน
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            กำหนดชื่อและเวลาเรียนต่อวันของคุณ
          </p>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-5 max-w-md">
          <div>
            <label className="block text-sm font-bold text-foreground mb-1.5">
              ชื่อที่ใช้เรียกคุณ
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full bg-background border-2 border-control-border rounded-xl px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-1.5">
              เวลาเรียนเป้าหมาย (นาทีต่อวัน)
            </label>
            <input
              type="number"
              min={15}
              max={180}
              value={profile.targetMinutes}
              onChange={(e) => setProfile({ ...profile, targetMinutes: Number(e.target.value) })}
              className="w-full bg-background border-2 border-control-border rounded-xl px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-1.5">
              เขตเวลา (Timezone)
            </label>
            <input
              type="text"
              disabled
              value={profile.timezone}
              className="w-full bg-background/70 border border-border rounded-xl px-4 py-3 text-base text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="submit"
              className="bg-primary text-primary-foreground text-base font-extrabold px-6 py-3 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all"
            >
              บันทึกการตั้งค่า
            </button>
            {saveSuccess && (
              <span className="text-sm font-bold text-success inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>บันทึกสำเร็จแล้ว</span>
              </span>
            )}
          </div>
        </form>
      </section>

      {/* Data Ownership & Backup Section */}
      <section className="p-6 sm:p-8 bg-review-surface rounded-2xl space-y-5">
        <div>
          <h2 className="text-xl font-extrabold text-foreground">
            ความเป็นเจ้าของข้อมูล และการสำรอง (Backup & Restore)
          </h2>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            ข้อมูลการเรียนทั้งหมดเป็นของคุณ สามารถส่งออก (Export) นำเข้า (Import) หรือล้างข้อมูลเพื่อเริ่มใหม่ได้ตลอดเวลา
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={handleExportData}
            className="inline-flex items-center gap-2 bg-background px-5 py-3 rounded-xl text-sm font-bold text-foreground hover:opacity-85 transition-opacity"
          >
            <Download className="w-4 h-4 text-review-accent" />
            <span>ส่งออกข้อมูล (Export JSON)</span>
          </button>

          <label className="inline-flex items-center gap-2 bg-background px-5 py-3 rounded-xl text-sm font-bold text-foreground hover:opacity-85 cursor-pointer transition-opacity">
            <Upload className="w-4 h-4 text-review-accent" />
            <span>นำเข้าข้อมูล (Import JSON)</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportFile}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={handleResetData}
            className="inline-flex items-center gap-2 bg-error-bg px-5 py-3 rounded-xl text-sm font-bold text-error hover:opacity-85 transition-opacity sm:ml-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ล้างข้อมูลเพื่อเริ่มใหม่</span>
          </button>
        </div>

        {importStatus && (
          <div className="p-3.5 bg-background rounded-xl text-sm font-bold text-accent">
            {importStatus}
          </div>
        )}
      </section>

      {/* System & Services Status */}
      <section className="p-6 sm:p-8 bg-surface rounded-2xl space-y-4">
        <div>
          <h2 className="text-xl font-extrabold text-foreground">
            สถานะการเชื่อมต่อบริการ
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            รายละเอียดความพร้อมของระบบที่ใช้งานได้ทันทีและบริการบนคลาวด์
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {/* Supabase Status */}
          <div className="p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3.5">
              <Server className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <div className="text-base font-bold text-foreground">
                  ฐานข้อมูล Supabase (PostgreSQL, Auth & RLS)
                </div>
                <div className="text-sm text-muted-foreground">
                  {isSupabaseConfigured
                    ? 'เชื่อมต่อฐานข้อมูล Supabase และระบบล็อกอินเจ้าของแล้ว'
                    : 'โหมดใช้งานในเครื่อง (Local Storage พร้อมใช้งานทันที)'}
                </div>
              </div>
            </div>
            <span
              className={`text-xs sm:text-sm px-3.5 py-1 rounded-full font-bold self-start sm:self-center shrink-0 ${
                isSupabaseConfigured
                  ? 'bg-success-bg text-success'
                  : 'bg-lesson-badge text-lesson-badge-fg'
              }`}
            >
              {isSupabaseConfigured ? 'เชื่อมต่อแล้ว' : 'รอใส่ Key ใน .env.local'}
            </span>
          </div>

          {/* AI Tutor Status */}
          <div className="p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3.5">
              <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <div className="text-base font-bold text-foreground">
                  ครู AI ภาษาอังกฤษ (AI Tutor)
                </div>
                <div className="text-sm text-muted-foreground">
                  ระบบ Intelligent Curriculum Tutor ใน Server พร้อมบันทึกแชตแยกตามบทและตรวจสิทธิ์เจ้าของ
                </div>
              </div>
            </div>
            <span className="text-xs sm:text-sm px-3.5 py-1 rounded-full font-bold bg-success-bg text-success self-start sm:self-center shrink-0">
              พร้อมใช้งาน
            </span>
          </div>

          {/* Browser TTS Audio Status */}
          <div className="p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <div className="text-base font-bold text-foreground">
                  เสียงอ่าน (Web Speech API)
                </div>
                <div className="text-sm text-muted-foreground">
                  อ่านออกเสียงภาษาอังกฤษได้ทันทีในเบราว์เซอร์ ไม่ต้องพึ่งพา API ภายนอก
                </div>
              </div>
            </div>
            <span className="text-xs sm:text-sm px-3.5 py-1 rounded-full font-bold bg-success-bg text-success self-start sm:self-center shrink-0">
              พร้อมใช้งาน
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
