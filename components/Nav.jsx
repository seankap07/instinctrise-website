import Container from "./Container";
import Button from "./Button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]/80 backdrop-blur">
      <Container className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center font-bold">
            IQ
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">INSTINCT RISE</div>
            <div className="text-xs text-slate-400">TerritoryIQ™</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how" className="text-slate-300 hover:text-white">How</a>
          <a href="#territories" className="text-slate-300 hover:text-white">Territories</a>
          <a href="#pricing" className="text-slate-300 hover:text-white">Licensing</a>
        </nav>

        <Button href="#request" className="text-sm">Request Territory</Button>
      </Container>
    </header>
  );
}