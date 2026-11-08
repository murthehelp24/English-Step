'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getAllVocabulary, getAllPhases } from '@/lib/curriculum';
import { getStoredData, toggleSaveVocabulary } from '@/lib/storage';
import { AudioPlayer } from '@/components/lessons/AudioPlayer';
import { Search, Bookmark, ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';

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
    <div
      className="min-h-screen py-8 sm:py-10 transition-colors duration-200"
      style={{ background: '#FFF9EE', color: '#2A1F4A', fontFamily: "Mali, 'Nunito', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Header & Filter Card */}
        <div
          className="rounded-[28px] p-6 sm:p-9 space-y-6 bg-white"
          style={{ border: '2px solid #EEE6D6' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold"
                  style={{ background: '#FFE7C2', color: '#8A4A00' }}
                >
                  <BookOpen className="w-4 h-4 text-orange-600" />
                  <span>1,600+ คำศัพท์ & Lexical Chunks</span>
                </span>
                <span
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-extrabold bg-[#F4F0FF] text-[#6C4CF1] border border-[#E8E0FF]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>252 วัน • 6 Phases</span>
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl font-[900] tracking-tight"
                style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
              >
                คลังคำศัพท์และ Chunks
              </h1>
              <p className="text-base font-semibold max-w-xl leading-relaxed" style={{ color: '#6E6690' }}>
                จำศัพท์เป็นก้อน (Collocations) พร้อมสัญลักษณ์สัทศาสตร์ IPA และเสียงอ่าน ฟังและบันทึกคำที่ต้องการทบทวนได้ทันที
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-80">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6C4CF1]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นคำศัพท์, คำแปล หรือ Chunk..."
                className="w-full bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-full pl-12 pr-4 py-3 text-base font-semibold text-[#2A1F4A] placeholder:text-[#6E6690] focus:border-[#6C4CF1] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Phase Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedPhase('all');
                setSelectedWeek('all');
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                selectedPhase === 'all'
                  ? 'bg-[#6C4CF1] text-white shadow-sm'
                  : 'bg-[#FFF9EE] text-[#6E6690] hover:text-[#2A1F4A] border border-[#EEE6D6]'
              }`}
            >
              ทุก Phase ({allVocab.length})
            </button>
            {phases.map((p) => {
              const isSelected = selectedPhase === p.phase;
              return (
                <button
                  type="button"
                  key={p.phase}
                  onClick={() => {
                    setSelectedPhase(p.phase);
                    setSelectedWeek('all');
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#6C4CF1] text-white shadow-sm'
                      : 'bg-[#FFF9EE] text-[#6E6690] hover:text-[#2A1F4A] border border-[#EEE6D6]'
                  }`}
                >
                  Phase {p.phase}: {p.cefr}
                </button>
              );
            })}
          </div>

          {/* Saved Toggle & Count Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#EEE6D6]">
            <button
              type="button"
              onClick={() => setOnlySaved(!onlySaved)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                onlySaved
                  ? 'bg-[#FF7AA8] text-white shadow-sm'
                  : 'bg-[#FFF9EE] text-[#2A1F4A] border border-[#EEE6D6] hover:bg-[#FFE4EE]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${onlySaved ? 'fill-current' : 'text-[#FF7AA8]'}`} />
              <span>เฉพาะคำที่บันทึกไว้ ({savedWords.length})</span>
            </button>

            <span className="text-xs sm:text-sm font-extrabold" style={{ color: '#6E6690' }}>
              พบ {filteredVocab.length} คำ (แสดง {Math.min(visibleCount, filteredVocab.length)} คำ)
            </span>
          </div>
        </div>

        {/* Vocabulary Grid */}
        <section className="space-y-6">
          {filteredVocab.length === 0 ? (
            <div
              className="p-12 rounded-[28px] text-center space-y-3 bg-white"
              style={{ border: '2px solid #EEE6D6' }}
            >
              <div className="text-4xl">🔍</div>
              <div className="text-xl font-extrabold" style={{ color: '#2A1F4A' }}>
                ไม่พบคำศัพท์ตามเงื่อนไขที่เลือก
              </div>
              <p className="text-sm font-semibold" style={{ color: '#6E6690' }}>
                ลองล้างคำค้นหา หรือกดเลือกดู Phase อื่นๆ ได้เลยครับ
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
                {pagedVocab.map((item, idx) => {
                  const isSaved = savedWords.includes(item.en);

                  return (
                    <div
                      key={`${item.en}-${item.day}-${idx}`}
                      className="p-5 sm:p-6 bg-white rounded-[24px] flex flex-col justify-between gap-4 transition-all hover:-translate-y-1 hover:shadow-md"
                      style={{ border: '2px solid #EEE6D6' }}
                    >
                      <div>
                        {/* Badges and Bookmark */}
                        <div className="flex items-center justify-between text-xs font-bold mb-3">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="px-2.5 py-0.5 rounded-full font-bold"
                              style={{ background: '#F4F0FF', color: '#6C4CF1' }}
                            >
                              วันที่ {item.day}
                            </span>
                            <span
                              className="px-2.5 py-0.5 rounded-full font-extrabold"
                              style={{ background: '#FFE7C2', color: '#8A4A00' }}
                            >
                              {item.cefr_level || 'Pre-A1'}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleToggle(item.en)}
                            className={`p-2 rounded-full transition-all active:scale-95 ${
                              isSaved
                                ? 'bg-[#FFE4EE] text-[#FF7AA8]'
                                : 'text-[#6E6690] hover:text-[#FF7AA8] hover:bg-[#FFE4EE]'
                            }`}
                            title={isSaved ? 'ยกเลิกการบันทึก' : 'บันทึกคำนี้'}
                            aria-label={isSaved ? 'ยกเลิกการบันทึกคำศัพท์' : 'บันทึกคำศัพท์'}
                          >
                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        {/* Word Title & IPA */}
                        <div
                          className="font-[900] text-2xl tracking-tight leading-snug"
                          style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                        >
                          {item.en}
                        </div>
                        {item.ipa && (
                          <div className="text-xs font-mono font-bold mt-0.5" style={{ color: '#FF7AA8' }}>
                            {item.ipa}
                          </div>
                        )}

                        {/* Translation in Thai */}
                        <div className="text-base font-semibold mt-1.5" style={{ color: '#4B3F72' }}>
                          {item.th}
                        </div>

                        {/* Lexical Chunk Card */}
                        {item.chunk && (
                          <div
                            className="mt-3.5 p-3 rounded-2xl space-y-1"
                            style={{ background: '#F8F6FF', border: '1px solid #E8E0FF' }}
                          >
                            <div className="text-[11px] font-extrabold uppercase tracking-wide" style={{ color: '#6C4CF1' }}>
                              ก้อนคำจำใช้จริง (Chunk)
                            </div>
                            <div
                              className="font-bold text-sm leading-snug"
                              style={{ color: '#2A1F4A', fontFamily: "'Nunito', sans-serif" }}
                            >
                              &ldquo;{item.chunk}&rdquo;
                            </div>
                            {item.chunk_th && (
                              <div className="text-xs font-medium" style={{ color: '#6E6690' }}>
                                {item.chunk_th}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Card Bottom: Audio & Link to Lesson */}
                      <div className="pt-3 border-t border-[#EEE6D6] flex items-center justify-between gap-2">
                        <AudioPlayer text={item.en} label="ฟังคำ" />
                        <Link
                          href={`/lessons/${item.lesson_id}`}
                          className="text-xs font-extrabold inline-flex items-center gap-1 transition-transform hover:translate-x-0.5"
                          style={{ color: '#6C4CF1' }}
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
                <div className="text-center pt-6">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                    className="px-8 py-3.5 rounded-full text-white text-sm font-extrabold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                    style={{ background: '#6C4CF1' }}
                  >
                    โหลดคำศัพท์เพิ่มอีก {Math.min(PAGE_SIZE, filteredVocab.length - visibleCount)} คำ (เหลือ {filteredVocab.length - visibleCount})
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
