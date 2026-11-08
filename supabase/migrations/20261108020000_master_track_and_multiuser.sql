-- Idempotent Upgrade Migration: Master Track (252 Days, 6 Phases, 36 Modules) + Multi-Learner Readiness
-- Safe to run on existing Supabase databases (subsumes 20261108010000_add_saved_vocabulary.sql cleanly)

-- 1. Upgrade lessons table metadata for Phase / CEFR filtering
alter table public.lessons
  add column if not exists phase integer not null default 0,
  add column if not exists phase_title text not null default '',
  add column if not exists cefr_level text not null default 'A0',
  add column if not exists module_summary text,
  add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now()) not null;

create index if not exists idx_lessons_phase on public.lessons(phase, day);
create index if not exists idx_lessons_week on public.lessons(week, day);

-- 2. Upgrade profiles table for multi-learner tracking & cloud-persisted preferences
alter table public.profiles
  add column if not exists role text not null default 'learner' check (role in ('owner', 'learner')),
  add column if not exists experience_level text not null default 'zero' check (experience_level in ('zero', 'beginner', 'intermediate')),
  add column if not exists learning_goal text not null default 'comprehensive',
  add column if not exists saved_vocabulary jsonb not null default '[]'::jsonb,
  add column if not exists started_at timestamp with time zone;

-- 3. Upgrade review_items for cloud-persisted review history
alter table public.review_items
  add column if not exists history jsonb not null default '[]'::jsonb;

-- 4. Update auto-profile trigger so any newly registered learner gets a clean starter profile (60 min/day, level zero)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    email,
    name,
    role,
    experience_level,
    learning_goal,
    target_minutes,
    started_at
  )
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(nullif(new.raw_user_meta_data ->> 'name', ''), 'ผู้เรียน'),
    'learner',
    coalesce(nullif(new.raw_user_meta_data ->> 'experience_level', ''), 'zero'),
    coalesce(nullif(new.raw_user_meta_data ->> 'learning_goal', ''), 'comprehensive'),
    60,
    timezone('utc'::text, now())
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
