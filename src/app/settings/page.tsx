'use client';

import React, { useState, useEffect } from 'react';
import {
  ExperienceLevel,
  UserRole,
} from '@/types/learning';
import {
  getStoredData,
  updateProfile,
  exportUserDataAsJSON,
  importUserDataFromJSON,
  resetAllUserData,
} from '@/lib/storage';
import {
  Download,
  Upload,
  RotateCcw,
  Server,
  Sparkles,
  CheckCircle2,
  Settings,
} from 'lucide-react';

export default function SettingsPage() {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    role: UserRole;
    experienceLevel: ExperienceLevel;
    learningGoal: string;
    targetMinutes: number;
    timezone: string;
  }>({
    name: 'ผู้เรียน',
    email: 'owner@englishsteps.local',
    role: 'owner',
    experienceLevel: 'zero',
    learningGoal: 'comprehensive',
    targetMinutes: 60,
    timezone: 'Asia/Bangkok',
  });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  useEffect(() => {
    const load = () => {
      const data = getStoredData();
      if (data.profile) {
        setProfile({
          name: data.profile.name || 'ผู้เรียน',
          email: data.profile.email || 'owner@englishsteps.local',
          role: data.profile.role || 'owner',
          experienceLevel: data.profile.experience_level || 'zero',
          learningGoal: data.profile.learning_goal || 'comprehensive',
          targetMinutes: data.profile.target_minutes || 60,
          timezone: data.profile.timezone || 'Asia/Bangkok',
        });
      }
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
      experience_level: profile.experienceLevel,
      learning_goal: profile.learningGoal,
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
    <div
      className="min-h-screen py-8 sm:py-10 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header Block */}
        <div
          className="bg-white rounded-[28px] p-6 sm:p-9 space-y-3"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold"
            style={{ background: '#FFE7C2', color: '#8A4A00' }}
          >
            <Settings className="w-4 h-4 text-orange-600" />
            <span>การตั้งค่าระบบส่วนตัว</span>
          </span>
          <h1
            className="text-3xl sm:text-4xl font-[900] tracking-tight"
            style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
          >
            ตั้งค่าและข้อมูลบัญชี ⚙️
          </h1>
          <p className="text-base font-semibold max-w-xl leading-relaxed" style={{ color: '#6E6690' }}>
            จัดการโปรไฟล์ผู้เรียน ธีมการแสดงผล เป้าหมายเวลาเรียนรายวัน และการสำรองข้อมูล
          </p>
        </div>

        {/* Study Goals Settings Section */}
        <section
          className="p-6 sm:p-8 bg-white rounded-[28px] space-y-6"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div>
            <h2
              className="text-2xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              โปรไฟล์และเป้าหมายการเรียน
            </h2>
            <p className="text-sm font-semibold text-[#6E6690] mt-1">
              กำหนดชื่อ ระดับพื้นฐานเริ่มต้น และเวลาเรียนต่อวันของคุณ (ค่าแนะนำตามหลักสูตร: 60 นาที/วัน)
            </p>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-5 max-w-md">
            <div>
              <label className="block text-sm font-extrabold text-[#2A1F4A] mb-1.5">
                ชื่อที่ใช้เรียกคุณ
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-2xl px-4 py-3 text-base font-bold text-[#2A1F4A] focus:border-[#6C4CF1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold text-[#2A1F4A] mb-1.5">
                ระดับพื้นฐานเริ่มต้น
              </label>
              <select
                value={profile.experienceLevel}
                onChange={(e) =>
                  setProfile({ ...profile, experienceLevel: e.target.value as ExperienceLevel })
                }
                className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-2xl px-4 py-3 text-base font-bold text-[#2A1F4A] focus:border-[#6C4CF1] focus:outline-none"
              >
                <option value="zero">เริ่มจากศูนย์จริงๆ (Phase 0: เสียง &amp; โครงสร้างพื้นฐาน)</option>
                <option value="beginner">พอรู้คำศัพท์เบื้องต้น (ทบทวนปรับระบบใหม่)</option>
                <option value="intermediate">สื่อสารเบื้องต้นได้แล้ว (โฟกัส B1–C1 ความคล่อง)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-extrabold text-[#2A1F4A] mb-1.5">
                เวลาเรียนเป้าหมาย (นาทีต่อวัน)
              </label>
              <input
                type="number"
                min={15}
                max={180}
                value={profile.targetMinutes}
                onChange={(e) => setProfile({ ...profile, targetMinutes: Number(e.target.value) })}
                className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-2xl px-4 py-3 text-base font-bold text-[#2A1F4A] focus:border-[#6C4CF1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold text-[#2A1F4A] mb-1.5">
                เขตเวลา (Timezone)
              </label>
              <input
                type="text"
                disabled
                value={profile.timezone}
                className="w-full bg-[#FAF8F5] border border-[#EEE6D6] rounded-2xl px-4 py-3 text-base font-semibold text-[#6E6690]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-[#6C4CF1] text-white text-base font-[900] px-7 py-3 rounded-full hover:bg-[#5838DF] active:scale-95 transition-all shadow-sm"
              >
                บันทึกการตั้งค่า
              </button>
              {saveSuccess && (
                <span className="text-sm font-extrabold text-[#16A34A] inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>บันทึกสำเร็จแล้ว</span>
                </span>
              )}
            </div>
          </form>
        </section>

        {/* Data Ownership & Backup Section */}
        <section
          className="p-6 sm:p-8 bg-white rounded-[28px] space-y-5"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div>
            <h2
              className="text-2xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              ความเป็นเจ้าของข้อมูล และการสำรอง (Backup &amp; Restore)
            </h2>
            <p className="text-sm font-semibold text-[#6E6690] mt-1 leading-relaxed">
              ข้อมูลการเรียนทั้งหมดเป็นของคุณ สามารถส่งออก (Export) นำเข้า (Import) หรือล้างข้อมูลเพื่อเริ่มใหม่ได้ตลอดเวลา
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleExportData}
              className="inline-flex items-center gap-2 bg-[#FFF9EE] border-2 border-[#EEE6D6] px-5 py-3 rounded-full text-sm font-extrabold text-[#2A1F4A] hover:bg-[#F4F0FF] transition-all"
            >
              <Download className="w-4 h-4 text-[#6C4CF1]" />
              <span>ส่งออกข้อมูล (Export JSON)</span>
            </button>

            <label className="inline-flex items-center gap-2 bg-[#FFF9EE] border-2 border-[#EEE6D6] px-5 py-3 rounded-full text-sm font-extrabold text-[#2A1F4A] hover:bg-[#F4F0FF] cursor-pointer transition-all">
              <Upload className="w-4 h-4 text-[#6C4CF1]" />
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
              className="inline-flex items-center gap-2 bg-[#FFE4EE] border border-pink-200 px-5 py-3 rounded-full text-sm font-extrabold text-[#C24A6E] hover:bg-pink-100 transition-all sm:ml-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ล้างข้อมูลเพื่อเริ่มใหม่</span>
            </button>
          </div>

          {importStatus && (
            <div className="p-3.5 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] text-sm font-extrabold text-[#6C4CF1]">
              {importStatus}
            </div>
          )}
        </section>

        {/* System & Services Status */}
        <section
          className="p-6 sm:p-8 bg-white rounded-[28px] space-y-4"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div>
            <h2
              className="text-2xl font-[900] tracking-tight"
              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
            >
              สถานะการเชื่อมต่อบริการ
            </h2>
            <p className="text-sm font-semibold text-[#6E6690] mt-1">
              รายละเอียดความพร้อมของระบบที่ใช้งานได้ทันทีและบริการบนคลาวด์
            </p>
          </div>

          <div className="space-y-3 pt-1">
            <div className="p-5 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3.5">
                <Server className="w-5 h-5 text-[#6E6690] shrink-0 mt-0.5 sm:mt-0" />
                <div>
                  <div className="text-base font-extrabold text-[#2A1F4A]">
                    ระบบจัดเก็บข้อมูล (Local Storage พร้อมใช้งานทันที)
                  </div>
                  <div className="text-sm font-medium text-[#6E6690]">
                    โหมดเปิดให้เข้าเรียนได้ทันทีโดยไม่ต้องล็อกอิน บันทึกความก้าวหน้าและคะแนน XP ในเครื่องของคุณ
                  </div>
                </div>
              </div>
              <span className="text-xs sm:text-sm px-3.5 py-1 rounded-full font-extrabold bg-[#E6F9C4] text-[#3A6B0A] self-start sm:self-center shrink-0">
                พร้อมใช้งาน
              </span>
            </div>

            <div className="p-5 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3.5">
                <Sparkles className="w-5 h-5 text-[#6C4CF1] shrink-0 mt-0.5 sm:mt-0" />
                <div>
                  <div className="text-base font-extrabold text-[#2A1F4A]">
                    ครู AI ภาษาอังกฤษ (AI Tutor v2)
                  </div>
                  <div className="text-sm font-medium text-[#6E6690]">
                    รองรับ IPA, Connected Speech, แก้จุดพลาดคนไทย (Thai L1) และตรวจประโยคเขียนเบื้องต้น
                  </div>
                </div>
              </div>
              <span className="text-xs sm:text-sm px-3.5 py-1 rounded-full font-extrabold bg-[#E6F9C4] text-[#3A6B0A] self-start sm:self-center shrink-0">
                พร้อมใช้งาน
              </span>
            </div>

            <div className="p-5 bg-[#FFF9EE] rounded-2xl border border-[#EEE6D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5 sm:mt-0" />
                <div>
                  <div className="text-base font-extrabold text-[#2A1F4A]">
                    เสียงอ่าน &amp; ฝึก Shadowing (Web Speech API)
                  </div>
                  <div className="text-sm font-medium text-[#6E6690]">
                    ปรับความเร็วได้ 3 ระดับ (0.75x / 0.9x / 1.0x) พร้อมโหมด Blind Shadowing และนาฬิกา 4/3/2
                  </div>
                </div>
              </div>
              <span className="text-xs sm:text-sm px-3.5 py-1 rounded-full font-extrabold bg-[#E6F9C4] text-[#3A6B0A] self-start sm:self-center shrink-0">
                พร้อมใช้งาน
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
