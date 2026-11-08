'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateProfile } from '@/lib/storage';
import { ExperienceLevel } from '@/types/learning';
import { ArrowRight, Globe, CheckCircle2 } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [targetMinutes, setTargetMinutes] = useState(60);
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('zero');
  const [learningGoal, setLearningGoal] = useState('comprehensive');

  const handleFinish = () => {
    updateProfile({
      name: name.trim() || 'ผู้เรียน',
      target_minutes: targetMinutes,
      experience_level: experienceLevel,
      learning_goal: learningGoal,
      timezone: 'Asia/Bangkok',
      onboarding_completed: true,
      started_at: new Date().toISOString(),
    });
    router.push('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 sm:py-14 transition-colors duration-200">
      <div className="p-7 sm:p-10 bg-lesson-surface rounded-2xl space-y-7">
        {/* Step Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border">
          <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
            ขั้นตอนที่ {step} จาก 2
          </span>
          <span className="text-sm font-semibold text-muted-foreground">
            ตั้งค่าแผนเรียน Master Track 252 วัน
          </span>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                ยินดีต้อนรับสู่ English Steps
              </h1>
              <p className="text-base text-muted-foreground mt-2 leading-relaxed">
                หลักสูตรภาษาอังกฤษ 252 วัน (6 Phases · 36 Modules) เริ่มจากพื้นฐานระดับศูนย์สู่การสื่อสาร ฟัง พูด อ่าน และเขียนในชีวิตจริงอย่างมั่นใจ (ไม่เน้นติวข้อสอบ)
              </p>
            </div>

            <div className="space-y-5 pt-1">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  คุณชื่ออะไร? (สำหรับให้ครู AI เรียกทักทาย)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="เช่น มิ้นท์, กอล์ฟ, หรือชื่อเล่นของคุณ..."
                  className="w-full bg-background border-2 border-control-border rounded-xl px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  พื้นฐานภาษาอังกฤษในปัจจุบัน
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {[
                    {
                      id: 'zero' as const,
                      title: 'เริ่มจาก 0 จริงๆ',
                      desc: 'เริ่ม Phase 0 ระบบเสียง IPA & โครงสร้างฐานศูนย์',
                    },
                    {
                      id: 'beginner' as const,
                      title: 'พอรู้ศัพท์พื้นฐาน',
                      desc: 'อยากจัดระเบียบใหม่ให้ฟังพูดได้จริง',
                    },
                    {
                      id: 'intermediate' as const,
                      title: 'พออ่านได้บ้าง',
                      desc: 'อยากเสริมความคล่อง พูดทำงาน และแก้จุดพลาดไทย',
                    },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setExperienceLevel(item.id)}
                      className={`p-4 rounded-xl bg-background text-left transition-all ${
                        experienceLevel === item.id
                          ? 'ring-2 ring-accent'
                          : 'hover:opacity-90'
                      }`}
                    >
                      <div className="text-base font-extrabold text-foreground">{item.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-extrabold text-base px-7 py-3.5 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all"
              >
                <span>ถัดไป</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
                เป้าหมายและเวลาเรียนต่อวัน
              </h2>
              <p className="text-base text-muted-foreground mt-2 leading-relaxed">
                ออกแบบตามหลักสมดุล 4 แกน (Input · โครงสร้าง · Output · ความคล่อง 4/3/2) เพื่อผลลัพธ์ระยะยาว
              </p>
            </div>

            <div className="space-y-5 pt-1">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  เวลาที่ตั้งใจเรียนต่อวัน
                </label>
                <div className="grid grid-cols-3 gap-3.5">
                  {[30, 60, 90].map((mins) => (
                    <button
                      type="button"
                      key={mins}
                      onClick={() => setTargetMinutes(mins)}
                      className={`p-4 rounded-xl bg-background text-center transition-all ${
                        targetMinutes === mins
                          ? 'ring-2 ring-accent'
                          : 'hover:opacity-90'
                      }`}
                    >
                      <div className="text-xl font-display font-extrabold text-foreground">
                        {mins} นาที
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground mt-1">
                        {mins === 60
                          ? 'แนะนำตามหลักสูตร'
                          : mins === 30
                          ? 'วันที่ยุ่ง'
                          : 'เร่งสปีดความคล่อง'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  เป้าหมายหลักของการใช้ภาษา
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'comprehensive',
                      title: 'ครบทุกด้านในชีวิตจริง & งาน',
                      desc: 'คุยต่างชาติ เที่ยว ดูหนัง อ่านบทความ และสื่อสารทำงาน',
                    },
                    {
                      id: 'confidence_speaking',
                      title: 'เน้นฟังทัน พูดคล่อง ไม่กลัวผิด',
                      desc: 'ฝึก Shadowing + พูด 4/3/2 เพื่อเปลี่ยนความรู้เป็นความคล่อง',
                    },
                  ].map((g) => (
                    <button
                      type="button"
                      key={g.id}
                      onClick={() => setLearningGoal(g.id)}
                      className={`p-4 rounded-xl bg-background text-left transition-all ${
                        learningGoal === g.id ? 'ring-2 ring-accent' : 'hover:opacity-90'
                      }`}
                    >
                      <div className="text-sm font-extrabold text-foreground">{g.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {g.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-background rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-base text-foreground font-bold">
                  <Globe className="w-4 h-4 text-accent" />
                  <span>เขตเวลา: Asia/Bangkok (ประเทศไทย)</span>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  ระบบทบทวน Spaced Repetition (1/3/7/14 วัน) และประวัติการเรียนทั้งหมดจะถูกซิงก์เข้าบัญชีของคุณโดยอัตโนมัติ
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-xl bg-background text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                ← ย้อนกลับ
              </button>

              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-extrabold text-base px-7 py-3.5 rounded-xl hover:brightness-105 active:scale-[0.99] transition-all"
              >
                <span>เริ่มเรียนวันที่ 1 (Phase 0)</span>
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
