-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users extension (stored in Supabase auth, extended here)
create table public.profiles (
  id                       uuid references auth.users on delete cascade primary key,
  name                     text not null,
  role                     text not null default 'owner' check (role in ('admin','owner')),
  whatsapp_number          text,
  notification_preferences jsonb default '{"low_rating_alerts": true, "weekly_digest": true}',
  created_at               timestamptz default now()
);

-- Businesses
create table public.businesses (
  id                uuid primary key default gen_random_uuid(),
  owner_id          uuid references public.profiles(id) on delete cascade not null,
  name              text not null,
  slug              text unique not null,
  location          text not null,
  logo_url          text,
  google_maps_url   text,
  whatsapp_number   text,
  is_active         boolean default true,
  subscription_tier text default 'basic' check (subscription_tier in ('basic','pro','consulting')),
  created_at        timestamptz default now()
);

-- Surveys
create table public.surveys (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade not null,
  title       text not null,
  is_active   boolean default true,
  settings    jsonb default '{
    "enabled_metrics": ["food","service","cleanliness","value","atmosphere"],
    "low_rating_threshold": 3,
    "high_rating_threshold": 4,
    "success_url": null,
    "manager_whatsapp": null,
    "send_whatsapp_alerts": false,
    "default_language": "ar"
  }',
  created_at  timestamptz default now()
);

-- Responses
create table public.responses (
  id             uuid primary key default gen_random_uuid(),
  survey_id      uuid references public.surveys(id) on delete cascade not null,
  ratings        jsonb not null,
  average_rating numeric(3,2) not null,
  comment        text,
  metadata       jsonb default '{}',
  created_at     timestamptz default now()
);

create index responses_survey_id_idx   on public.responses(survey_id);
create index responses_avg_rating_idx  on public.responses(average_rating);
create index responses_created_at_idx  on public.responses(created_at desc);

-- Alerts
create table public.alerts (
  id          uuid primary key default gen_random_uuid(),
  response_id uuid references public.responses(id) on delete cascade not null,
  business_id uuid references public.businesses(id) on delete cascade not null,
  type        text not null check (type in ('whatsapp','email')),
  status      text not null default 'pending' check (status in ('pending','sent','failed')),
  payload     jsonb,
  sent_at     timestamptz,
  created_at  timestamptz default now()
);

-- Waitlist (for landing page)
create table public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  name       text,
  business   text,
  created_at timestamptz default now()
);
