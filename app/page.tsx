import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1b2a4a,_#0B0F1A_65%)]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          {/* Logo badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-10">
            <div className="relative h-7 w-7 flex-shrink-0">
              <Image src="/instinctrise-mark.png.png" alt="InstinctRise" fill className="object-contain" />
            </div>
            <span className="text-sm font-bold text-orange-400 tracking-wide">TerritoryIQ™</span>
            <span className="text-xs text-slate-400">by InstinctRise</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Stop Chasing Leads.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400">
              Own the Territory.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            TerritoryIQ™ identifies <strong className="text-white">where high-ticket replacements will happen next</strong> using
            permit history, property value, and equipment lifecycle timing — so your crews
            deploy with certainty. <strong className="text-white">One contractor per ZIP. Per trade.</strong>
          </p>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { stat: '42%', label: 'Close Rate', sub: 'vs 5% industry avg' },
              { stat: '5,100%', label: 'ROI', sub: 'ZIP 34990 case study' },
              { stat: '100%', label: 'Exclusive', sub: 'No shared leads, ever' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-3xl font-black text-orange-400">{item.stat}</div>
                <div className="mt-1 font-semibold text-white">{item.label}</div>
                <div className="mt-0.5 text-xs text-slate-400">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-territory"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white hover:from-orange-400 hover:to-orange-500 transition-all shadow-xl shadow-orange-900/40"
            >
              Claim Your Territory →
            </Link>
            <a
              href="#how"
              className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-slate-200 hover:border-white/40 hover:text-white transition-all"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Monthly refresh · Permit-backed data · CRM-ready delivery · Martin County + Expanding
          </p>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/10 bg-[#0d1220]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest mb-6">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Old Way Is Broken.</h2>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-3xl">
            Shared leads. 2–10% close rates. Competing with 5–10 contractors for the same job.
            $75 per lead. A race to the bottom that destroys margins and burns out your crews.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '5–10×', label: 'Competitors per lead' },
              { val: '$75+', label: 'Cost per shared lead' },
              { val: '5%', label: 'Average close rate' },
              { val: '0%', label: 'Territory ownership' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-center">
                <div className="text-2xl font-black text-red-400">{item.val}</div>
                <div className="mt-1 text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="how" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
            How TerritoryIQ™ Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Contractors don&apos;t need more leads.</h2>
          <p className="mt-4 text-slate-300 text-lg max-w-3xl">
            They need <strong className="text-white">deployment certainty</strong>. We show exactly where high-ticket jobs will
            cluster so your spend goes to the right doors.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Map the Territory', body: 'Permits + property signals + replacement windows analyzed by ZIP code.' },
              { step: '02', title: 'Rank Opportunities', body: 'Omni score (0–100) + primary trade focus for HVAC, Roofing, Solar, and more.' },
              { step: '03', title: 'License Exclusivity', body: 'One contractor per ZIP per trade. Your competitor never sees your data.' },
              { step: '04', title: 'Deploy with Certainty', body: 'Use for outbound calling, door-knock canvass, direct mail, and paid targeting.' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-7 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-5 select-none">{s.step}</div>
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Step {s.step}</div>
                <div className="font-semibold text-white text-lg">{s.title}</div>
                <div className="mt-2 text-sm text-slate-300 leading-relaxed">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TERRITORIES ─────────────────────────────────────────────────── */}
      <section id="territories" className="py-20 border-t border-white/10 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest mb-6">
            Territory Packs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Claim Your Market.</h2>
          <p className="mt-4 text-slate-300 text-lg max-w-3xl">
            Start with Martin County. Expand into St. Lucie next. Each territory is a monthly
            intelligence delivery that builds into a permanent competitive moat.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-500/30 transition-colors">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Residential ZIP Pack</div>
              <div className="text-2xl font-bold text-white">Territory Intelligence</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  '100–125 ranked properties per month',
                  'Omni opportunity score (0–100)',
                  'Primary trade focus + secondary opportunities',
                  'Permit-backed equipment age signals',
                  'Optional homeowner contact add-on',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-500/30 transition-colors">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Commercial Layer</div>
              <div className="text-2xl font-bold text-white">Commercial Opportunities</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  '3–5 high-value commercial properties/month',
                  'Hotel, office, and multi-family targets',
                  'Permit-backed ownership signals',
                  'Competitor pull-count by ZIP and trade',
                  '"One job pays for the year" level ROI',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF / CASE STUDY ──────────────────────────────────────────── */}
      <section id="proof" className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 uppercase tracking-widest mb-6">
            Real Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Case Study: ZIP 34990</h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { val: '50', label: 'Leads Engaged' },
              { val: '21', label: 'Jobs Closed' },
              { val: '42%', label: 'Close Rate' },
              { val: '$78K', label: 'Month 1 Revenue' },
              { val: '5,100%', label: 'ROI' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 text-center">
                <div className="text-2xl font-black text-green-400">{item.val}</div>
                <div className="mt-1 text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8">
            <p className="text-xl text-white italic font-medium">
              &ldquo;I&apos;m not just another contractor begging for business. I&apos;m the expert in my territory.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-slate-400">— HVAC Contractor, Stuart FL</footer>
          </blockquote>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 border-t border-white/10 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Choose Your Territory Size</h2>
          <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
            Flat monthly rate. No per-lead fees. No contracts to lock you in.
            Cancel anytime — though no one ever does.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                range: '800–1,500 properties',
                price: '$800',
                per: '/mo',
                features: ['1 ZIP code', '1 trade', 'Monthly data refresh', 'Ranked property list', 'Omni score included'],
                highlight: false,
              },
              {
                name: 'Growth',
                range: '1,500–3,000 properties',
                price: '$1,500',
                per: '/mo',
                features: ['2–3 ZIP codes', '1 trade', 'Monthly data refresh', 'Ranked property list', 'Competitor permit tracking', 'Commercial add-on available'],
                highlight: true,
              },
              {
                name: 'Dominator',
                range: '3,000+ properties',
                price: '$2,500',
                per: '/mo',
                features: ['Full county coverage', 'Multi-trade available', 'Monthly data refresh', 'Full intelligence suite', 'Commercial layer included', 'Priority territory lock'],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? 'border-2 border-orange-500 bg-orange-500/5 relative'
                    : 'border border-white/10 bg-white/5'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-xs font-black text-white uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{plan.range}</div>
                <div className="mt-2 text-2xl font-black text-white">{plan.name}</div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-400 mb-1">{plan.per}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-orange-400 flex-shrink-0 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-territory"
                  className={`mt-8 inline-flex justify-center rounded-xl px-6 py-3.5 font-bold transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 shadow-lg shadow-orange-900/40'
                      : 'border border-white/20 text-slate-200 hover:border-orange-500/40 hover:text-white'
                  }`}
                >
                  Claim This Territory →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO / DON'T DO ───────────────────────────────────────── */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'What you get',
                title: 'Territory Intelligence Pack',
                body: 'Ranked properties + timing + trade focus + optional homeowner and competitor contacts. Delivered monthly.',
                color: 'blue',
              },
              {
                tag: 'What we track',
                title: 'Competitor Permits',
                body: '"Who pulled how many installs last month" by ZIP and trade — so you know exactly where to attack.',
                color: 'purple',
              },
              {
                tag: 'What we do NOT do',
                title: 'No Lead Brokering',
                body: "You're licensing a zone, not buying shared leads. Your data is yours. Your territory is locked.",
                color: 'orange',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-white/20 transition-colors">
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 text-${item.color}-400`}>{item.tag}</div>
                <div className="font-semibold text-white text-lg">{item.title}</div>
                <div className="mt-2 text-slate-300 text-sm leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/10 bg-[#0d1220] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative h-16 w-16 mx-auto mb-6">
            <Image src="/instinctrise-mark.png.png" alt="InstinctRise" fill className="object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Claim Your Territory.
          </h2>
          <p className="mt-5 text-xl text-slate-300">
            One contractor per ZIP. One contractor per trade.<br />
            <strong className="text-white">Once claimed, it&apos;s closed.</strong>
          </p>
          <Link
            href="/request-territory"
            className="mt-10 inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 text-xl font-black text-white hover:from-orange-400 hover:to-orange-500 transition-all shadow-2xl shadow-orange-900/50"
          >
            Request Your Territory →
          </Link>
          <p className="mt-5 text-sm text-slate-500">
            Reply within 24 hours · No commitment required · skaplan@instinctrise.com
          </p>
        </div>
      </section>

    </main>
  );
}
