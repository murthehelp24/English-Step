'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';
import { ThemePreference } from '@/types/learning';
import {
  getStoredData,
  updateProfile,
  exportUserDataAsJSON,
  importUserDataFromJSON,
  resetAllUserData,
} from '@/lib/storage';
import { isSupabaseConfigured } from '@/lib/supabase/client';
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
} from 'lucide-react';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [profile, setProfile] = useState({
    name: 'ผู้เรียน',
    email: 'owner@englishsteps.local',
    targetMinutes: 60,
    timezone: 'Asia/Bangkok',
  });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  useEffect(() => {
    const data = getStoredData();
    if (data.profile) {
      setProfile({
        name: data.profile.name || 'ผู้เรียน',
        email: data.profile.email || 'owner@englishsteps.local',
        targetMinutes: data.profile.target_minutes || 60,
        timezone: data.profile.timezone || 'Asia/Bangkok',
      });
    }
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
          จัดการธีมการแสดงผล เวลาเรียนเป้าหมาย การสำรองข้อมูล และตรวจสอบสถานะการเชื่อมต่อระบบ
        </p>
      </div>

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
            รายละเอียดความพร้อมของระบบที่ใช้งานได้ทันทีและบริการเสริมบนคลาวด์
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {/* Supabase Status */}
          <div className="p-5 bg-background rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3.5">
              <Server className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <div className="text-base font-bold text-foreground">
                  ฐานข้อมูล Supabase (PostgreSQL & Auth)
                </div>
                <div className="text-sm text-muted-foreground">
                  {isSupabaseConfigured
                    ? 'เชื่อมต่อฐานข้อมูล Supabase แล้ว'
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
                  ระบบ Intelligent Curriculum Tutor ใน Server พร้อมตอบตามบทเรียนและคำศัพท์
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
