'use client';

import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Lead = {
  id: string;
  dedupe_key: string;
  parcel_id: string | null;
  situs_address: string | null;
  county: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  lead_score_100: number | null;
  priority_tier: string | null;
  hvac_15plus: boolean | null;
  roof_15plus: boolean | null;
  solar_15plus: boolean | null;
  replacement_value: number | null;
  industry: string | null;
  source_file: string | null;
  created_at: string;
  updated_at: string;
  property_type: 'Residential' | 'Commercial';
};

const CSV_FIELDS: { key: keyof Lead; label: string }[] = [
  { key: 'property_type', label: 'Property_Type' },
  { key: 'parcel_id', label: 'Parcel_ID' },
  { key: 'situs_address', label: 'Situs_Address' },
  { key: 'city', label: 'City' },
  { key: 'county', label: 'County' },
  { key: 'state', label: 'State' },
  { key: 'zip', label: 'Zip' },
  { key: 'lead_score_100', label: 'Lead_Score_100' },
  { key: 'priority_tier', label: 'Priority_Tier' },
  { key: 'hvac_15plus', label: 'HVAC_15plus' },
  { key: 'roof_15plus', label: 'Roof_15plus' },
  { key: 'solar_15plus', label: 'Solar_15plus' },
  { key: 'replacement_value', label: 'Replacement_Value' },
  { key: 'industry', label: 'Industry' },
  { key: 'source_file', label: 'Source_File' }
];

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const escapeCsv = (value: unknown) => {
  if (value === null || value === undefined) return '';
  const stringValue = String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
};

export default function TerritoryIQ() {
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [county, setCounty] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [propertyType, setPropertyType] = useState<'all' | 'residential' | 'commercial'>('all');
  const [priorityTier, setPriorityTier] = useState('');
  const [minLeadScore, setMinLeadScore] = useState('');
  const [hvac15, setHvac15] = useState(false);
  const [roof15, setRoof15] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchLeads = async () => {
      setFetching(true);
      const queries: Promise<{ data: Lead[] | null; error: { message: string } | null }>[] = [];

      const buildQuery = (table: 'residential_leads' | 'commercial_leads') => {
        let query = supabase.from(table).select('*').limit(1000);
        if (county) query = query.ilike('county', `%${county}%`);
        if (city) query = query.ilike('city', `%${city}%`);
        if (zip) query = query.eq('zip', zip);
        if (priorityTier) query = query.eq('priority_tier', priorityTier);
        if (minLeadScore) query = query.gte('lead_score_100', Number(minLeadScore));
        if (hvac15) query = query.eq('hvac_15plus', true);
        if (roof15) query = query.eq('roof_15plus', true);
        return query;
      };

      if (propertyType !== 'commercial') {
        queries.push(buildQuery('residential_leads'));
      }
      if (propertyType !== 'residential') {
        queries.push(buildQuery('commercial_leads'));
      }

      const results = await Promise.all(queries);
      const merged: Lead[] = [];

      results.forEach((result, index) => {
        if (result.error) {
          console.error(result.error.message);
          return;
        }
        const tableType =
          propertyType === 'residential'
            ? 'Residential'
            : propertyType === 'commercial'
              ? 'Commercial'
              : index === 0 && queries.length === 2
                ? 'Residential'
                : 'Commercial';

        result.data?.forEach((row) => {
          merged.push({ ...row, property_type: tableType });
        });
      });

      setLeads(merged);
      setFetching(false);
    };

    fetchLeads();
  }, [user, county, city, zip, propertyType, priorityTier, minLeadScore, hvac15, roof15]);

  const totalReplacementValue = useMemo(() => {
    return leads.reduce((sum, lead) => sum + (lead.replacement_value ?? 0), 0);
  }, [leads]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleExport = () => {
    const header = CSV_FIELDS.map((field) => field.label).join(',');
    const rows = leads.map((lead) =>
      CSV_FIELDS.map((field) => escapeCsv(lead[field.key])).join(',')
    );
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'territoryiq-export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="min-h-screen bg-black text-white p-10">Loading...</div>;
  }

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-3xl font-bold mb-6">TerritoryIQ Login</h1>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <input
            className="p-3 text-black rounded"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="p-3 text-black rounded"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleLogin} className="px-6 py-3 bg-blue-600 rounded">
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">TerritoryIQ Dashboard</h1>
          <p className="text-sm text-gray-300">Signed in as {user.email}</p>
        </div>
        <button onClick={handleLogout} className="px-4 py-2 rounded bg-gray-700">
          Sign Out
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <input
          className="p-2 rounded text-black"
          placeholder="County"
          value={county}
          onChange={(event) => setCounty(event.target.value)}
        />
        <input
          className="p-2 rounded text-black"
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          className="p-2 rounded text-black"
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        <select
          className="p-2 rounded text-black"
          value={propertyType}
          onChange={(event) => setPropertyType(event.target.value as typeof propertyType)}
        >
          <option value="all">Residential + Commercial</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <input
          className="p-2 rounded text-black"
          placeholder="Priority Tier"
          value={priorityTier}
          onChange={(event) => setPriorityTier(event.target.value)}
        />
        <input
          className="p-2 rounded text-black"
          placeholder="Min Lead Score (0-100)"
          type="number"
          value={minLeadScore}
          onChange={(event) => setMinLeadScore(event.target.value)}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hvac15}
            onChange={(event) => setHvac15(event.target.checked)}
          />
          HVAC 15+ Years
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={roof15}
            onChange={(event) => setRoof15(event.target.checked)}
          />
          Roof 15+ Years
        </label>
      </section>

      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          <p className="text-lg font-semibold">Leads: {leads.length}</p>
          <p className="text-lg">Total Replacement Value: {formatCurrency(totalReplacementValue)}</p>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 rounded"
          onClick={handleExport}
          disabled={!leads.length}
        >
          Export CSV
        </button>
      </section>

      <div className="overflow-x-auto border border-gray-800 rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-900 text-left">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Parcel ID</th>
              <th className="p-3">Situs Address</th>
              <th className="p-3">City</th>
              <th className="p-3">County</th>
              <th className="p-3">Zip</th>
              <th className="p-3">Score</th>
              <th className="p-3">Priority</th>
              <th className="p-3">HVAC 15+</th>
              <th className="p-3">Roof 15+</th>
              <th className="p-3">Replacement Value</th>
            </tr>
          </thead>
          <tbody>
            {fetching && (
              <tr>
                <td className="p-4" colSpan={11}>
                  Loading leads...
                </td>
              </tr>
            )}
            {!fetching && leads.length === 0 && (
              <tr>
                <td className="p-4" colSpan={11}>
                  No leads found for the selected filters.
                </td>
              </tr>
            )}
            {leads.map((lead) => (
              <tr key={lead.dedupe_key} className="border-t border-gray-800">
                <td className="p-3">{lead.property_type}</td>
                <td className="p-3">{lead.parcel_id ?? '-'}</td>
                <td className="p-3">{lead.situs_address ?? '-'}</td>
                <td className="p-3">{lead.city ?? '-'}</td>
                <td className="p-3">{lead.county ?? '-'}</td>
                <td className="p-3">{lead.zip ?? '-'}</td>
                <td className="p-3">{lead.lead_score_100 ?? '-'}</td>
                <td className="p-3">{lead.priority_tier ?? '-'}</td>
                <td className="p-3">{lead.hvac_15plus ? 'Yes' : 'No'}</td>
                <td className="p-3">{lead.roof_15plus ? 'Yes' : 'No'}</td>
                <td className="p-3">
                  {lead.replacement_value ? formatCurrency(lead.replacement_value) : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
