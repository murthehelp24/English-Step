-- Supabase Migration: Initial Schema for English Steps
-- Created: 2026-11-08
-- Idempotent script: safe to re-run in Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  name text,
  timezone text default 'Asia/Bangkok',
  target_minutes integer default 60,
  theme_preference text default 'system' check (theme_preference in ('light', 'dark', 'system')),
  onboarding_completed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;
drop policy if exists "Users can view their own profile." on public.profiles;
create policy "Users can view their own profile." on public.profiles for select using (auth.uid() = id);
drop policy if exists "Users can insert their own profile." on public.profiles;
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
drop policy if exists "Users can update their own profile." on public.profiles;
create policy "Users can update their own profile." on public.profiles for update using (auth.uid() = id);

-- Auto-create profile row when a user is created in Supabase Auth
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'name', 'ผู้เรียน')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Lessons Static Table (Read-only for authenticated users)
create table if not exists public.lessons (
  id text primary key, -- e.g. "day-001"
  day integer not null unique,
  week integer not null,
  week_title text not null,
  title text not null,
  type text not null default 'lesson',
  minutes integer not null default 60,
  objective text not null,
  explanation text not null,
  extra text,
  reading text not null,
  writing text not null,
  writing_sample text not null,
  data jsonb not null, -- full lesson json payload
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.lessons enable row level security;
drop policy if exists "Lessons are readable by authenticated users" on public.lessons;
create policy "Lessons are readable by authenticated users" on public.lessons for select using (auth.role() = 'authenticated');

-- 3. Lesson Progress Table
create table if not exists public.lesson_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  lesson_id text references public.lessons(id) on delete cascade not null,
  status text not null default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  writing_submission text,
  last_activity_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;
drop policy if exists "Users manage own lesson progress" on public.lesson_progress;
create policy "Users manage own lesson progress" on public.lesson_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4. Attempts Table
create table if not exists public.attempts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  lesson_id text references public.lessons(id) on delete cascade not null,
  exercise_id text not null,
  user_answer text not null,
  is_correct boolean not null,
  hint_used boolean default false,
  feedback text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.attempts enable row level security;
drop policy if exists "Users manage own attempts" on public.attempts;
create policy "Users manage own attempts" on public.attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 5. Mistakes Table
create table if not exists public.mistakes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  lesson_id text references public.lessons(id) on delete cascade not null,
  exercise_id text not null,
  prompt text not null,
  original_answer text not null,
  correct_answer text not null,
  explanation text not null,
  category text default 'general',
  resolved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.mistakes enable row level security;
drop policy if exists "Users manage own mistakes" on public.mistakes;
create policy "Users manage own mistakes" on public.mistakes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 6. Spaced Repetition Review Items Table
create table if not exists public.review_items (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  mistake_id uuid references public.mistakes(id) on delete cascade not null,
  lesson_id text references public.lessons(id) on delete cascade not null,
  prompt text not null,
  correct_answer text not null,
  explanation text not null,
  stage integer default 1 check (stage between 1 and 4),
  next_due_at timestamp with time zone not null,
  last_reviewed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.review_items enable row level security;
drop policy if exists "Users manage own review items" on public.review_items;
create policy "Users manage own review items" on public.review_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 7. Chat Messages Table
create table if not exists public.messages (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  lesson_id text references public.lessons(id) on delete cascade not null,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  model text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.messages enable row level security;
drop policy if exists "Users manage own chat messages" on public.messages;
create policy "Users manage own chat messages" on public.messages for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 8. AI Usage Events (for budget capping)
create table if not exists public.usage_events (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  provider text not null,
  model text not null,
  tokens_input integer default 0,
  tokens_output integer default 0,
  estimated_cost_usd numeric(10, 6) default 0.000000,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.usage_events enable row level security;
drop policy if exists "Users view own usage events" on public.usage_events;
create policy "Users view own usage events" on public.usage_events for select using (auth.uid() = user_id);
