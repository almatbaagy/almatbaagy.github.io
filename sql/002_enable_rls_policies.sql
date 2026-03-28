-- Enable Row Level Security
alter table public.profiles   enable row level security;
alter table public.businesses enable row level security;
alter table public.surveys    enable row level security;
alter table public.responses  enable row level security;
alter table public.alerts     enable row level security;
alter table public.waitlist   enable row level security;

-- Profiles: own row only
create policy "profiles_own" on public.profiles
  using (auth.uid() = id);

-- Businesses: owner sees own, admin sees all
create policy "businesses_owner" on public.businesses
  using (owner_id = auth.uid() or
         (select role from public.profiles where id = auth.uid()) = 'admin');

-- Surveys: same as businesses (via business_id chain)
create policy "surveys_owner" on public.surveys
  using (business_id in (select id from public.businesses where
         owner_id = auth.uid() or
         (select role from public.profiles where id = auth.uid()) = 'admin'));

-- Responses: public INSERT (no auth), owner SELECT via survey→business chain
create policy "responses_insert" on public.responses
  for insert with check (true);

create policy "responses_owner_select" on public.responses
  for select using (
    survey_id in (
      select s.id from public.surveys s
      join public.businesses b on b.id = s.business_id
      where b.owner_id = auth.uid() or
            (select role from public.profiles where id = auth.uid()) = 'admin'
    )
  );

-- Alerts: owner/admin only
create policy "alerts_owner" on public.alerts
  using (business_id in (select id from public.businesses where
         owner_id = auth.uid() or
         (select role from public.profiles where id = auth.uid()) = 'admin'));

-- Waitlist: public insert, admin select
create policy "waitlist_insert" on public.waitlist
  for insert with check (true);

create policy "waitlist_admin" on public.waitlist
  for select using ((select role from public.profiles where id = auth.uid()) = 'admin');
