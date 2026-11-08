import React from 'react';
import { notFound } from 'next/navigation';
import { getLessonNeighbors, getTotalStats } from '@/lib/curriculum';
import { getServerLessonById } from '@/lib/curriculum-server';
import { LessonWorkspace } from '@/components/lessons/LessonWorkspace';

export const dynamic = 'force-dynamic';

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = await getServerLessonById(id);

  if (!lesson) {
    notFound();
  }

  const { prevLesson, nextLesson } = getLessonNeighbors(lesson.id);
  const { totalDays } = getTotalStats();

  return (
    <LessonWorkspace
      lesson={lesson}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      totalDays={totalDays}
    />
  );
}
