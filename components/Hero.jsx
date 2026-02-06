import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1b1f3b,_#0B0F1A_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container className="relative py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-slate-300 mb-8">
          Verified permits + property intelligence · One client per ZIP per trade
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Stop Chasing Leads.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">
            Own the Territory.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-300">
          TerritoryIQ™ identifies where high-ticket replacements will happen next using permit history,
          property value, exposure signals, and equipment lifecycle timing — so your crews deploy with certainty.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <div className="text-3xl font-bold">Martin County</div>
            <div className="text-sm text-slate-400 mt-1">Deep coverage today</div>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <div className="text-3xl font-bold">2013–2015</div>
            <div className="text-sm text-slate-400 mt-1">Prime replacement window</div>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <div className="text-3xl font-bold">Exclusive</div>
            <div className="text-sm text-slate-400 mt-1">No competitor access</div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#request" className="text-lg px-10 py-4">Request Your Territory →</Button>
          <Button href="#how" variant="secondary" className="text-lg px-10 py-4">See How It Works</Button>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          Monthly refresh · Permit-backed competitor tracking · CRM-ready delivery
        </div>
      </Container>
    </section>
  );
}