import BrainLogo from '../components/BrainLogo';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <BrainLogo className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            INSTINCTRISE
          </h1>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Stop Chasing Leads.<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Own The Territory.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-light">
            While your competitors knock on doors like it's 1995, you'll have
            <span className="text-blue-400 font-semibold"> exclusive access</span> to
            <span className="text-purple-400 font-semibold"> 50,000+ pre-scored properties</span> in your territory.
          </p>

          <div className="mb-12">
            <p className="text-sm md:text-base text-gray-400 mb-3">TRUSTED BY CONTRACTORS WHO ACTUALLY CLOSE DEALS</p>
            <div className="flex items-center justify-center gap-8 text-2xl md:text-3xl font-bold">
              <div>
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">$604M</span>
                <p className="text-xs md:text-sm text-gray-400 font-normal mt-1">Pipeline Value</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">51,058</span>
                <p className="text-xs md:text-sm text-gray-400 font-normal mt-1">Properties</p>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">42%</span>
                <p className="text-xs md:text-sm text-gray-400 font-normal mt-1">Close Rate</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:skaplan@instinctrise.com?subject=I Want My Territory"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              Claim Your Territory →
            </a>
          </div>

          <p className="mt-8 text-red-400 font-semibold text-sm md:text-base animate-pulse">
            ⚠️ Only ONE contractor per territory. Martin County already sold.
          </p>
        </div>
      </section>

      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">Ready to dominate your territory?</p>
          <a
            href="mailto:skaplan@instinctrise.com"
            className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
          >
            skaplan@instinctrise.com
          </a>
          <p className="mt-4 text-sm text-gray-500">&copy; 2025 InstinctRise. Territory Intelligence Platform.</p>
        </div>
      </footer>
    </main>
  );
}
