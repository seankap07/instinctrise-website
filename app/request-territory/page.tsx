'use client';

import { useMemo, useState } from 'react';

type FormState = {
  industry: string;
  territory: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  crews: string;
  notes: string;
};

const INDUSTRIES = ['HVAC', 'Roofing', 'Plumbing', 'Electrical', 'Solar', 'Pest', 'Pool'];

export default function RequestTerritoryPage() {
  const [form, setForm] = useState<FormState>({
    industry: 'HVAC',
    territory: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    crews: '',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('TerritoryIQ — Territory Request');
    const body = encodeURIComponent(
      `Industry: ${form.industry}\n` +
      `Territory (city/area): ${form.territory}\n` +
      `Company: ${form.company}\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Crews/Trucks: ${form.crews}\n\n` +
      `Notes:\n${form.notes}\n`
    );
    return `mailto:skaplan@instinctrise.com?subject=${subject}&body=${body}`;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    // Try API route first (lets you add webhook or DB later).
    try {
      const res = await fetch('/api/request-territory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Bad response');

      setStatus('sent');

      // Always provide a guaranteed fallback: open mail client (you never lose the request)
      window.location.href = mailtoHref;
    } catch {
      setStatus('error');
      // Fallback: direct mailto
      window.location.href = mailtoHref;
    }
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_110%)] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-3xl border border-gray-800 bg-black/40 p-8">
          <h1 className="text-3xl md:text-4xl font-black">
            Request a <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Territory</span>
          </h1>
          <p className="mt-3 text-gray-300">
            One contractor per industry per territory. Territories are released selectively—lock yours before it disappears.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Industry">
                <select
                  value={form.industry}
                  onChange={(e) => update('industry', e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                >
                  {INDUSTRIES.map((x) => (
                    <option key={x} value={x}>{x}</option>
                  ))}
                </select>
              </Field>

              <Field label="Territory (city / area)">
                <input
                  value={form.territory}
                  onChange={(e) => update('territory', e.target.value)}
                  placeholder="Example: Stuart / Palm City"
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                  required
                />
              </Field>

              <Field label="Company">
                <input
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                  required
                />
              </Field>

              <Field label="Name">
                <input
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                  required
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                  required
                />
              </Field>

              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="(xxx) xxx-xxxx"
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                />
              </Field>

              <Field label="Crews / Trucks (optional)">
                <input
                  value={form.crews}
                  onChange={(e) => update('crews', e.target.value)}
                  placeholder="Example: 6 install trucks + 10 service"
                  className="w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
                />
              </Field>
            </div>

            <Field label="Notes (what you want to dominate)">
              <textarea
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="Tell me your ideal customer + service mix. Residential? Commercial? Maintenance? Replacements?"
                className="min-h-[120px] w-full rounded-xl border border-gray-700 bg-black/60 px-4 py-3 text-white outline-none focus:border-purple-500"
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-xl px-6 py-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send request →'}
            </button>

            <div className="text-xs text-gray-400">
              Prefer email?{' '}
              <a className="text-blue-400 hover:text-blue-300 font-semibold" href={mailtoHref}>
                Click here
              </a>{' '}
              to open a pre-filled message.
            </div>

            {status === 'sent' ? (
              <p className="text-sm text-green-400 font-semibold">Sent. Opening your email client now…</p>
            ) : null}
            {status === 'error' ? (
              <p className="text-sm text-yellow-400 font-semibold">Quick fallback: opening email with your details…</p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">{label}</div>
      {children}
    </label>
  );
}
