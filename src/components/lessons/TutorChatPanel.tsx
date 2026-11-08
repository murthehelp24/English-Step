'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Lesson } from '@/types/curriculum';
import { ChatMessage } from '@/types/learning';
import { getChatMessages, addChatMessage } from '@/lib/storage';
import { Send, Bot, User, RefreshCw, Sparkles } from 'lucide-react';

interface TutorChatPanelProps {
  lesson: Lesson;
}

export function TutorChatPanel({ lesson }: TutorChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadHistory = () => {
      const history = getChatMessages(lesson.id);
      if (history.length === 0) {
        const initial: ChatMessage = {
          id: 'initial',
          lesson_id: lesson.id,
          role: 'assistant',
          content: `สวัสดีครับ! วันนี้เรามาเรียนบทที่ ${lesson.day}: "${lesson.title}" กันนะ\nอยากให้ครูช่วยอธิบายคำศัพท์ & Chunks, ทริกออกเสียง IPA, จุดพลาดคนไทย หรือลองแต่งประโยคส่งมาให้ครูช่วยตรวจ ถามได้ตลอดเลยครับ`,
          timestamp: new Date().toISOString(),
        };
        setMessages([initial]);
      } else {
        setMessages(history);
      }
    };

    loadHistory();
    window.addEventListener('english_steps_storage_updated', loadHistory);
    return () => window.removeEventListener('english_steps_storage_updated', loadHistory);
  }, [lesson.id, lesson.day, lesson.title]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    setInputMessage('');
    const userMsg = addChatMessage(lesson.id, 'user', textToSend.trim());
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson_id: lesson.id,
          message: textToSend.trim(),
          history: messages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok && data.content) {
        const assistantMsg = addChatMessage(lesson.id, 'assistant', data.content);
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        const errText =
          data.error ||
          'ขออภัยครับ เกิดข้อขัดข้องชั่วคราวในการตอบ แต่คุณยังสามารถเรียนบทเรียนและทำแบบฝึกหัดต่อได้ตามปกตินะครับ';
        const errMsg = addChatMessage(lesson.id, 'assistant', errText);
        setMessages((prev) => [...prev, errMsg]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      const errMsg = addChatMessage(
        lesson.id,
        'assistant',
        'ระบบไม่สามารถติดต่อครู AI ได้ในขณะนี้ คุณสามารถเรียนจากเนื้อหาและเฉลยที่บันทึกไว้ต่อได้เลยครับ'
      );
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'อธิบายคำศัพท์ & Chunks',
    'จุดพลาดคนไทยบทนี้',
    'ทริกออกเสียง IPA',
    'ขอคำใบ้หน่อย',
  ];

  return (
    <div
      className="flex flex-col h-full bg-white rounded-[28px] overflow-hidden"
      style={{ border: '2px solid #EEE6D6' }}
    >
      {/* Header */}
      <div className="p-4 sm:p-4.5 bg-[#F4F0FF] border-b border-[#EEE6D6] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#6C4CF1] text-white flex items-center justify-center font-[900] text-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C8F04A]" />
          </div>
          <div>
            <div className="font-extrabold text-sm sm:text-base text-[#2A1F4A]">
              ครู AI ประจำบทเรียน
            </div>
            <div className="text-xs font-semibold text-[#6E6690] line-clamp-1">
              วันที่ {lesson.day}: {lesson.title}
            </div>
          </div>
        </div>
        <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-white text-[#6C4CF1] border border-[#E8E0FF]">
          ออนไลน์
        </span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 min-h-[300px] max-h-[480px] bg-white">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 text-sm sm:text-[14px] leading-relaxed ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-[#F4F0FF] flex items-center justify-center shrink-0 text-[#6C4CF1] mt-0.5 border border-[#E8E0FF]">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-[#6C4CF1] text-white rounded-br-sm font-semibold shadow-xs'
                  : 'bg-[#F4F0FF] text-[#2A1F4A] rounded-bl-sm font-medium border border-[#E8E0FF]'
              }`}
            >
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-full bg-[#FFE7C2] flex items-center justify-center shrink-0 text-[#8A4A00] mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs font-bold text-[#6E6690] p-2 bg-[#F4F0FF] rounded-xl w-fit">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#6C4CF1]" />
            <span>ครูกำลังคิดคำตอบ...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-3.5 py-2 flex items-center gap-2 overflow-x-auto text-xs font-bold bg-[#FAF8F5] border-t border-[#EEE6D6] scrollbar-none">
        {quickPrompts.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSendMessage(p)}
            disabled={isLoading}
            className="whitespace-nowrap bg-white px-3 py-1.5 rounded-full text-[#6C4CF1] border border-[#EEE6D6] hover:bg-[#6C4CF1] hover:text-white transition-all disabled:opacity-50"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white border-t border-[#EEE6D6] flex items-center gap-2"
      >
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="ถามครู AI หรือพิมพ์ประโยคให้ช่วยตรวจ..."
          disabled={isLoading}
          className="flex-1 bg-[#FFF9EE] border-2 border-[#EEE6D6] rounded-full px-4 py-2.5 text-sm font-medium text-[#2A1F4A] placeholder:text-[#6E6690] focus:border-[#6C4CF1] focus:outline-none"
        />
        <button
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="w-10 h-10 rounded-full bg-[#6C4CF1] text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-all shadow-xs active:scale-95"
          aria-label="ส่งข้อความ"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
