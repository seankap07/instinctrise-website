import Container from "./Container";

export default function TerritoryPacks() {
  return (
    <section id="territories" className="py-20 border-t border-white/10">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold">Territories</h2>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Start with Martin County. Expand into St. Lucie next. Each territory is a monthly intelligence delivery.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">Example</div>
            <div className="mt-2 font-semibold text-xl">ZIP Pack (Residential)</div>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              <li>• 100–125 ranked properties per month</li>
              <li>• Omni opportunity score (0–100)</li>
              <li>• Primary trade focus + secondary opportunities</li>
              <li>• Optional homeowner contact add-on</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">Layer</div>
            <div className="mt-2 font-semibold text-xl">Commercial Opportunities</div>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              <li>• 3–5 commercial properties/month</li>
              <li>• Hotel / office / multi-family targets</li>
              <li>• Permit-backed ownership signals</li>
              <li>• “One job pays for the year” framing</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}