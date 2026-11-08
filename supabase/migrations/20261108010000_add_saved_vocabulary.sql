-- Optional follow-up migration for English Steps
-- Adds saved_vocabulary to profiles and review history jsonb to review_items

alter table public.profiles
  add column if not exists saved_vocabulary jsonb not null default '[]'::jsonb;

alter table public.profiles
  add column if not exists started_at timestamp with time zone;

alter table public.review_items
  add column if not exists history jsonb not null default '[]'::jsonb;
