import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TerritoryIQ™ by InstinctRise — Own the Territory",
  description: "Exclusive territory intelligence for home service contractors. One client per ZIP, per trade. Predictive data that tells you who needs service before they call.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F1A] text-slate-100 antialiased">
        <Navbar />
        {children}
        <footer className="border-t border-white/10 py-10 px-6 text-center text-sm text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-semibold text-slate-400">
              © {new Date().getFullYear()} InstinctRise · <span className="text-orange-400">TerritoryIQ™</span>
            </div>
            <div className="flex gap-6">
              <a href="/#how" className="hover:text-white transition-colors">How It Works</a>
              <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="/request-territory" className="hover:text-white transition-colors">Request Territory</a>
              <a href="mailto:skaplan@instinctrise.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
