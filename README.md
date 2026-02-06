# TerritoryIQ Setup

## Supabase Setup
1. Create a new Supabase project.
2. In the SQL editor, run the schema in `supabase/territoryiq_schema.sql`.
3. Create a new Supabase user or add your buyer records in the `buyers` table.
4. (Optional) Lock territories by inserting rows in `territories` with a unique `zip` + `industry` combination.

## Environment Variables
Create a `.env.local` file for Next.js:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

For the importer script, set:
```
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
TERRITORYIQ_DATA_DIR=/path/to/csvs
```

## Importer
1. Install dependencies:
   ```
   npm install
   ```
2. Run the importer:
   ```
   python scripts/territoryiq_importer.py
   ```

The importer reads the four CSV files listed in `scripts/territoryiq_importer.py`, normalizes columns, deduplicates by Parcel ID or Situs Address, and upserts into Supabase.

## TerritoryIQ Dashboard
- Visit `/territoryiq` after logging in with Supabase auth.
- Use filters for County, City, Zip, Residential/Commercial, Priority Tier, Lead Score, HVAC 15+, and Roof 15+.
- Export the filtered results to CSV.

## Deploy
1. Set the Supabase environment variables on your hosting provider.
2. Build and deploy:
   ```
   npm run build
   npm run start
   ```
