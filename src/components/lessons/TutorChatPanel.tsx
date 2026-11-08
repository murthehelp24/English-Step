'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Lesson } from '@/types/curriculum';
import { ChatMessage } from '@/types/learning';
import { getChatMessages, addChatMessage } from '@/lib/storage';
import { Send, Bot, User, RefreshCw } from 'lucide-react';

interface TutorChatPanelProps {
  lesson: Lesson;
}

export function TutorChatPanel({ lesson }: TutorChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const history = getChatMessages(lesson.id);
    if (history.length === 0) {
      const initial: ChatMessage = {
        id: 'initial',
        lesson_id: lesson.id,
        role: 'assistant',
        content: `สวัสดีครับ! วันนี้เรามาเรียนเรื่อง "${lesson.title}" กันนะ มีอะไรสงสัย หรืออยากให้ครูช่วยอธิบายจุดไหน ถามได้ตลอดเวลาเลยครับ`,
        timestamp: new Date().toISOString(),
      };
      setMessages([initial]);
    } else {
      setMessages(history);
    }
  }, [lesson.id, lesson.title]);

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

      const data = await response.json();
      if (data.content) {
        const assistantMsg = addChatMessage(lesson.id, 'assistant', data.content);
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        const errMsg = addChatMessage(
          lesson.id,
          'assistant',
          'ขออภัยครับ เกิดข้อขัดข้องชั่วคราวในการตอบ แต่คุณยังสามารถเรียนบทเรียนและทำแบบฝึกหัดต่อได้ตามปกตินะครับ'
        );
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
    'อธิบายคำศัพท์บทนี้',
    'ขอคำใบ้หน่อย',
    'ใช้ในชีวิตจริงยังไง?',
  ];

  return (
    <div className="flex flex-col h-full bg-surface rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 bg-review-surface flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-review-accent text-review-accent-fg flex items-center justify-center font-display font-extrabold text-sm">
            AI
          </div>
          <div>
            <div className="font-bold text-base text-foreground">
              ครูภาษาอังกฤษของคุณ
            </div>
            <div className="text-xs font-medium text-muted-foreground">
              บทเรียน: {lesson.title}
            </div>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 min-h-[300px] max-h-[480px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 text-sm sm:text-[15px] leading-relaxed ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-background flex items-center justify-center flex-shrink-0 text-muted-foreground mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-review-accent text-review-accent-fg rounded-br-sm font-medium'
                  : 'bg-background text-foreground rounded-bl-sm'
              }`}
            >
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-full bg-review-accent/20 flex items-center justify-center flex-shrink-0 text-foreground mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground p-2">
            <RefreshCw className="w-4 h-4 animate-spin text-accent" />
            <span>ครูกำลังคิดคำตอบ...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2.5 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
        {quickPrompts.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSendMessage(p)}
            disabled={isLoading}
            className="whitespace-nowrap bg-background px-3 py-1.5 rounded-full text-foreground hover:text-accent transition-colors disabled:opacity-50"
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
        className="p-3 sm:p-4 bg-surface border-t border-border flex items-center gap-2"
      >
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="ถามครู AI หรือพิมพ์ประโยคให้ช่วยตรวจ..."
          disabled={isLoading}
          className="flex-1 bg-background border border-control-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:brightness-105 disabled:opacity-40 transition-all"
          aria-label="ส่งข้อความ"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
