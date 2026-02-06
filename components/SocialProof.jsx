import Container from "./Container";

export default function SocialProof() {
  return (
    <section className="py-16 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">What you get</div>
            <div className="mt-2 font-semibold">Territory Intelligence Pack</div>
            <div className="mt-2 text-slate-300 text-sm">
              Ranked properties + timing + trade focus + optional homeowner/contractor contacts.
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">What we track</div>
            <div className="mt-2 font-semibold">Competitor Permits</div>
            <div className="mt-2 text-slate-300 text-sm">
              “Who pulled how many installs last month” by ZIP and trade.
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">What we do NOT do</div>
            <div className="mt-2 font-semibold">Lead Brokering</div>
            <div className="mt-2 text-slate-300 text-sm">
              You’re licensing a zone, not buying shared leads.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}