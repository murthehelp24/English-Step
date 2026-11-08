'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllVocabulary } from '@/lib/curriculum';
import { getStoredData, toggleSaveVocabulary } from '@/lib/storage';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import { Search, Bookmark, ArrowUpRight } from 'lucide-react';

export default function VocabularyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [onlySaved, setOnlySaved] = useState(false);
  const [savedWords, setSavedWords] = useState<string[]>([]);

  const allVocab = getAllVocabulary();

  useEffect(() => {
    const load = () => {
      const data = getStoredData();
      setSavedWords(data.saved_vocabulary || []);
    };
    load();
    window.addEventListener('english_steps_storage_updated', load);
    return () => window.removeEventListener('english_steps_storage_updated', load);
  }, []);

  const handleToggle = (enWord: string) => {
    toggleSaveVocabulary(enWord);
    const data = getStoredData();
    setSavedWords(data.saved_vocabulary || []);
  };

  const filteredVocab = allVocab.filter((v) => {
    if (onlySaved && !savedWords.includes(v.en)) return false;
    if (selectedWeek !== 'all' && v.week !== selectedWeek) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return v.en.toLowerCase().includes(q) || v.th.includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Header & Filter Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
              คำศัพท์ตลอด 112 วัน
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              คลังคำศัพท์
            </h1>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              รวมคำศัพท์สำคัญพร้อมเสียงอ่านภาษาอังกฤษและความหมายภาษาไทย กดบันทึกคำที่อยากจำเพิ่มได้ทันที
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นคำศัพท์ หรือคำแปล..."
              className="w-full bg-background border-2 border-control-border rounded-xl pl-11 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setOnlySaved(!onlySaved)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              onlySaved
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-foreground hover:opacity-85'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${onlySaved ? 'fill-current' : 'text-accent'}`} />
            <span>เฉพาะคำที่บันทึก ({savedWords.length})</span>
          </button>

          {/* Week Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
            <button
              type="button"
              onClick={() => setSelectedWeek('all')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-colors whitespace-nowrap ${
                selectedWeek === 'all'
                  ? 'bg-dark-chip text-dark-chip-fg'
                  : 'bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              ทุกสัปดาห์
            </button>
            {Array.from({ length: 16 }).map((_, i) => (
              <button
                type="button"
                key={i + 1}
                onClick={() => setSelectedWeek(i + 1)}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-colors whitespace-nowrap ${
                  selectedWeek === i + 1
                    ? 'bg-dark-chip text-dark-chip-fg'
                    : 'bg-background text-muted-foreground hover:text-foreground'
                }`}
              >
                สัปดาห์ {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vocabulary Container */}
      <section className="bg-surface rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="text-sm font-bold text-muted-foreground">
          พบคำศัพท์ทั้งหมด {filteredVocab.length} คำ
        </div>

        {filteredVocab.length === 0 ? (
          <div className="p-10 bg-background rounded-xl text-center space-y-2">
            <div className="text-lg font-extrabold text-foreground">ไม่พบคำศัพท์ตามเงื่อนไขที่เลือก</div>
            <p className="text-sm text-muted-foreground">
              ลองล้างช่องค้นหา หรือเปลี่ยนตัวกรองสัปดาห์ดูนะครับ
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVocab.map((item, idx) => {
              const isSaved = savedWords.includes(item.en);

              return (
                <div
                  key={`${item.en}-${idx}`}
                  className="p-5 bg-background rounded-xl flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface text-foreground">
                        สัปดาห์ที่ {item.week}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleToggle(item.en)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSaved
                            ? 'bg-lesson-surface text-accent'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        title={isSaved ? 'ยกเลิกการบันทึก' : 'บันทึกคำนี้'}
                        aria-label={isSaved ? 'ยกเลิกการบันทึกคำศัพท์' : 'บันทึกคำศัพท์'}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="font-display font-extrabold text-2xl text-foreground">
                      {item.en}
                    </div>
                    <div className="text-base text-muted-foreground font-medium mt-1">
                      {item.th}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                    <AudioPlayer text={item.en} label="ฟัง" />
                    <Link
                      href={`/lessons/${item.lesson_id}`}
                      className="text-sm font-bold text-foreground hover:text-accent inline-flex items-center gap-1 transition-colors"
                    >
                      <span>ดูบทเรียน</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
