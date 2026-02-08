export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="px-8 py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Own Your ZIP Code.
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          One contractor per trade. Predictive Territory Intelligence that tells you 
          who needs service before they call.
        </p>

        <button className="mt-8 px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg text-lg font-semibold">
          Check ZIP Availability
        </button>
      </section>

      {/* PROBLEM */}
      <section className="px-8 py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">The Old Way Is Broken.</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Shared leads. 2–10% close rates. Competing with 5–10 contractors. 
            $75 per lead. A race to the bottom that destroys margins and wastes time.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-8 py-20 bg-black border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">
            The TerritoryIQ Model: Precision + Exclusivity
          </h2>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li>✔ 100% ZIP exclusivity — one contractor per trade.</li>
            <li>✔ Predictive scoring based on system age + permit intelligence.</li>
            <li>✔ High-value homeowner targeting ($500k+ properties).</li>
            <li>✔ Zero competition — no shared leads, ever.</li>
            <li>✔ Reusable data asset you own forever.</li>
          </ul>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="px-8 py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Case Study: ZIP 34990</h2>

          <div className="mt-6 text-gray-300 space-y-2">
            <p>• 50 leads engaged</p>
            <p>• 21 jobs closed</p>
            <p>• 42% close rate (industry avg: 5%)</p>
            <p>• $78,000 revenue in month one</p>
            <p>• 5,100% ROI</p>
          </div>

          <blockquote className="mt-6 italic text-gray-400 border-l-4 border-orange-600 pl-4">
            “I’m not just another contractor begging for business. I’m the expert.”
          </blockquote>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-8 py-20 bg-black border-t border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Choose Your Territory Size</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold">Small</h3>
              <p className="mt-2 text-gray-400">800–1,500 properties</p>
              <p className="mt-4 text-3xl font-bold">$800/mo</p>
            </div>

            <div className="p-8 bg-neutral-900 rounded-xl border border-orange-600">
              <h3 className="text-xl font-semibold">Medium</h3>
              <p className="mt-2 text-gray-400">1,500–3,000 properties</p>
              <p className="mt-4 text-3xl font-bold">$1,500/mo</p>
            </div>

            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold">Large</h3>
              <p className="mt-2 text-gray-400">3,000+ properties</p>
              <p className="mt-4 text-3xl font-bold">$2,500/mo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-24 bg-neutral-950 border-t border-neutral-800 text-center">
        <h2 className="text-4xl font-bold">Claim Your Territory.</h2>
        <p className="mt-4 text-gray-400">
          One contractor per ZIP. Once claimed, it’s closed.
        </p>

        <button className="mt-8 px-10 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg text-lg font-semibold">
          Check ZIP Availability
        </button>
      </section>
    </main>
  );
}
