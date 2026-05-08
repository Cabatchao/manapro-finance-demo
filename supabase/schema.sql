-- ManaPro Finance — schema MVP Supabase

create extension if not exists "uuid-ossp";

create table if not exists public.companies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  activity text,
  island text,
  default_currency text not null default 'XPF',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.company_members (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  role text not null check (role in ('owner','admin','member','readonly')),
  created_at timestamptz default now(),
  unique(company_id, user_id)
);

create table if not exists public.customers (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade not null,
  name text not null,
  email text,
  phone text,
  island text,
  status text default 'nouveau',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.quotes (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade not null,
  customer_id uuid references public.customers(id),
  number text not null,
  status text not null default 'brouillon',
  amount_xpf integer not null default 0,
  issued_at date default current_date,
  expires_at date,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(company_id, number)
);

create table if not exists public.invoices (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade not null,
  customer_id uuid references public.customers(id),
  quote_id uuid references public.quotes(id),
  number text not null,
  status text not null default 'draft',
  amount_xpf integer not null default 0,
  issued_at date default current_date,
  due_at date,
  paid_at date,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(company_id, number)
);

create table if not exists public.expenses (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade not null,
  label text not null,
  category text,
  supplier text,
  amount_xpf integer not null default 0,
  expense_date date default current_date,
  receipt_status text default 'manquant',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.ai_conversations (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references public.companies(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete set null,
  title text,
  created_at timestamptz default now()
);

create table if not exists public.ai_messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid references public.ai_conversations(id) on delete cascade not null,
  role text not null check (role in ('user','assistant','system')),
  content text not null,
  created_at timestamptz default now()
);

alter table public.companies enable row level security;
alter table public.company_members enable row level security;
alter table public.customers enable row level security;
alter table public.quotes enable row level security;
alter table public.invoices enable row level security;
alter table public.expenses enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.ai_messages enable row level security;

create or replace function public.is_company_member(target_company uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.company_members cm
    where cm.company_id = target_company and cm.user_id = auth.uid()
  );
$$;

create policy "members read companies" on public.companies for select using (public.is_company_member(id));
create policy "members read customers" on public.customers for select using (public.is_company_member(company_id));
create policy "members manage customers" on public.customers for all using (public.is_company_member(company_id)) with check (public.is_company_member(company_id));
create policy "members read quotes" on public.quotes for select using (public.is_company_member(company_id));
create policy "members manage quotes" on public.quotes for all using (public.is_company_member(company_id)) with check (public.is_company_member(company_id));
create policy "members read invoices" on public.invoices for select using (public.is_company_member(company_id));
create policy "members manage invoices" on public.invoices for all using (public.is_company_member(company_id)) with check (public.is_company_member(company_id));
create policy "members read expenses" on public.expenses for select using (public.is_company_member(company_id));
create policy "members manage expenses" on public.expenses for all using (public.is_company_member(company_id)) with check (public.is_company_member(company_id));
