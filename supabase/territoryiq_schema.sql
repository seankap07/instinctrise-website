create extension if not exists "pgcrypto";

create table if not exists public.buyers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_email text,
  created_at timestamptz not null default now()
);

create table if not exists public.territories (
  id uuid primary key default gen_random_uuid(),
  zip text not null,
  industry text not null,
  buyer_id uuid references public.buyers(id) on delete set null,
  locked_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (zip, industry)
);

create table if not exists public.residential_leads (
  id uuid primary key default gen_random_uuid(),
  dedupe_key text not null unique,
  parcel_id text,
  situs_address text,
  county text,
  city text,
  state text,
  zip text,
  latitude numeric,
  longitude numeric,
  lead_score_100 numeric,
  priority_tier text,
  hvac_15plus boolean,
  roof_15plus boolean,
  solar_15plus boolean,
  replacement_value numeric,
  industry text,
  source_file text,
  raw jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists residential_leads_zip_idx on public.residential_leads (zip);
create index if not exists residential_leads_city_idx on public.residential_leads (city);
create index if not exists residential_leads_county_idx on public.residential_leads (county);
create index if not exists residential_leads_priority_idx on public.residential_leads (priority_tier);

create table if not exists public.commercial_leads (
  id uuid primary key default gen_random_uuid(),
  dedupe_key text not null unique,
  parcel_id text,
  situs_address text,
  county text,
  city text,
  state text,
  zip text,
  latitude numeric,
  longitude numeric,
  lead_score_100 numeric,
  priority_tier text,
  hvac_15plus boolean,
  roof_15plus boolean,
  solar_15plus boolean,
  replacement_value numeric,
  industry text,
  source_file text,
  raw jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists commercial_leads_zip_idx on public.commercial_leads (zip);
create index if not exists commercial_leads_city_idx on public.commercial_leads (city);
create index if not exists commercial_leads_county_idx on public.commercial_leads (county);
create index if not exists commercial_leads_priority_idx on public.commercial_leads (priority_tier);
