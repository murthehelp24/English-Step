'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getAllVocabulary, getAllPhases } from '@/lib/curriculum';
import { getStoredData, toggleSaveVocabulary } from '@/lib/storage';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import { Search, Bookmark, ArrowUpRight } from 'lucide-react';

const PAGE_SIZE = 48;

export default function VocabularyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [onlySaved, setOnlySaved] = useState(false);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const allVocab = getAllVocabulary();
  const phases = getAllPhases();

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

  const filteredVocab = useMemo(() => {
    return allVocab.filter((v) => {
      if (onlySaved && !savedWords.includes(v.en)) return false;
      if (selectedPhase !== 'all' && (v.phase ?? 0) !== selectedPhase) return false;
      if (selectedWeek !== 'all' && v.week !== selectedWeek) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          v.en.toLowerCase().includes(q) ||
          v.th.includes(q) ||
          (v.chunk && v.chunk.toLowerCase().includes(q)) ||
          (v.chunk_th && v.chunk_th.includes(q))
        );
      }
      return true;
    });
  }, [allVocab, onlySaved, savedWords, selectedPhase, selectedWeek, searchQuery]);

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, selectedPhase, selectedWeek, onlySaved]);

  const pagedVocab = filteredVocab.slice(0, visibleCount);

  return (
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-8 sm:py-10 space-y-8 transition-colors duration-200">
      {/* Header & Filter Block */}
      <div className="bg-lesson-surface rounded-2xl p-7 sm:p-9 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-lesson-badge text-lesson-badge-fg text-sm font-bold">
                1,600+ คำศัพท์ & Lexical Chunks
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-background text-foreground text-xs font-bold border border-border">
                252 วัน • 6 Phases
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              คลังคำศัพท์และ Chunks
            </h1>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              จำศัพท์เป็นก้อน (Collocations) พร้อมสัญลักษณ์สัทศาสตร์ IPA และเสียงอ่าน ฟังและบันทึกคำที่ต้องการทบทวนได้ทันที
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นคำศัพท์, คำแปล หรือ Chunk..."
              className="w-full bg-background border-2 border-control-border rounded-xl pl-11 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              setSelectedPhase('all');
              setSelectedWeek('all');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              selectedPhase === 'all'
                ? 'bg-dark-chip text-dark-chip-fg shadow-sm'
                : 'bg-background text-muted-foreground hover:text-foreground'
            }`}
          >
            ทุก Phase ({allVocab.length})
          </button>
          {phases.map((p) => (
            <button
              type="button"
              key={p.phase}
              onClick={() => {
                setSelectedPhase(p.phase);
                setSelectedWeek('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedPhase === p.phase
                  ? 'bg-dark-chip text-dark-chip-fg shadow-sm'
                  : 'bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              Phase {p.phase}: {p.cefr}
            </button>
          ))}
        </div>

        {/* Saved Toggle & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-border/50">
          <button
            type="button"
            onClick={() => setOnlySaved(!onlySaved)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              onlySaved
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-foreground hover:opacity-85 border border-border'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${onlySaved ? 'fill-current' : 'text-accent'}`} />
            <span>เฉพาะคำที่บันทึก ({savedWords.length})</span>
          </button>

          <span className="text-xs sm:text-sm font-bold text-muted-foreground">
            พบ {filteredVocab.length} รายการ (แสดง {Math.min(visibleCount, filteredVocab.length)})
          </span>
        </div>
      </div>

      {/* Vocabulary Grid */}
      <section className="bg-surface rounded-2xl p-6 sm:p-8 space-y-6">
        {filteredVocab.length === 0 ? (
          <div className="p-10 bg-background rounded-xl text-center space-y-2">
            <div className="text-lg font-extrabold text-foreground">ไม่พบคำศัพท์ตามเงื่อนไขที่เลือก</div>
            <p className="text-sm text-muted-foreground">
              ลองล้างช่องค้นหา หรือเปลี่ยนตัวกรอง Phase ดูนะครับ
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4.5">
              {pagedVocab.map((item, idx) => {
                const isSaved = savedWords.includes(item.en);

                return (
                  <div
                    key={`${item.en}-${item.day}-${idx}`}
                    className="p-5 bg-background rounded-xl flex flex-col justify-between gap-4 border border-border/50 hover:border-accent/40 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-surface text-foreground">
                            วันที่ {item.day}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-lesson-badge text-lesson-badge-fg">
                            {item.cefr_level || 'Pre-A1'}
                          </span>
                        </div>
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
                      {item.ipa && (
                        <div className="text-xs font-mono text-accent font-semibold mt-0.5">
                          {item.ipa}
                        </div>
                      )}
                      <div className="text-base text-muted-foreground font-medium mt-1">
                        {item.th}
                      </div>

                      {/* Lexical Chunk Pill */}
                      {item.chunk && (
                        <div className="mt-3 p-2.5 rounded-lg bg-surface/70 border border-border/40 text-xs space-y-0.5">
                          <div className="text-muted-foreground font-semibold">ก้อนคำจำใช้จริง (Chunk):</div>
                          <div className="font-bold text-foreground font-display">
                            &ldquo;{item.chunk}&rdquo;
                          </div>
                          {item.chunk_th && (
                            <div className="text-muted-foreground">{item.chunk_th}</div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                      <AudioPlayer text={item.en} label="ฟังคำ" />
                      <Link
                        href={`/lessons/${item.lesson_id}`}
                        className="text-xs font-bold text-foreground hover:text-accent inline-flex items-center gap-1 transition-colors"
                      >
                        <span>บทที่ {item.day}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredVocab.length && (
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="px-8 py-3.5 rounded-xl bg-dark-chip text-dark-chip-fg text-sm font-bold hover:brightness-110 active:scale-[0.99] transition-all shadow-sm"
                >
                  โหลดคำศัพท์เพิ่มอีก {Math.min(PAGE_SIZE, filteredVocab.length - visibleCount)} คำ (เหลือ {filteredVocab.length - visibleCount})
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
