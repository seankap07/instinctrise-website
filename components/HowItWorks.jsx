import Container from "./Container";

const steps = [
  { title: "We map the territory", body: "Permits + property signals + replacement windows by ZIP." },
  { title: "We rank opportunities", body: "Omni score + primary trade focus (HVAC / Roof / Solar)." },
  { title: "We license exclusivity", body: "One client per ZIP per trade. No competitor access." },
  { title: "You deploy with certainty", body: "Use for outbound, canvass, direct mail, and paid targeting." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold">How TerritoryIQ™ Works</h2>
        <p className="mt-4 text-slate-300 max-w-3xl">
          Contractors don’t need more leads — they need deployment certainty.
          We show where high-ticket jobs will cluster so your spend goes to the right doors.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-slate-300">{s.body}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}