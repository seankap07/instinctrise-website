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

          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            INSTINCT RISE
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
            Territory IQ
          </h2>

          <p className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Own your market before<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              your competitors do.
            </span>
          </p>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-light">
            We don't sell leads. We assign territory.
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            One contractor per industry. One buyer per territory. No overlap. No dilution. No race to the bottom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:skaplan@instinctrise.com?subject=Claim My Territory"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              CLAIM YOUR TERRITORY →
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-950/20 to-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-8 text-center">
            THE PROBLEM: <span className="text-red-400">THE LEAD-GEN TRAP</span>
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            Most companies fight for scraps on Google and Angi. Every time you buy a lead, three of your competitors are buying the exact same name. You're forced into a price war before you even pick up the phone.
          </p>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            <span className="text-blue-400 font-semibold">Territory IQ ends the war.</span> While everyone else is fighting in the digital clouds, you're owning the ground. We provide the map; you provide the trucks.
          </p>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-8 text-center">
            THE SOLUTION: <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">MARKET INTELLIGENCE</span>
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center">
            Stop guessing. Start collecting. Every city has thousands of addresses, but only a few hundred are ready to buy right now. Territory IQ identifies the "Replacement Windows"—the exact properties where assets are aging and budgets are ready.
          </p>

          <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-400">
            What you get every month:
          </h4>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h5 className="text-xl font-bold mb-3 text-purple-400">Exclusive Market Control</h5>
              <p className="text-gray-300">
                Once you lock a territory, it is off the market for your industry. Period.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h5 className="text-xl font-bold mb-3 text-purple-400">Rep-Ready Target Lists</h5>
              <p className="text-gray-300">
                No "cold" calling. These are pre-scored properties with decision-maker data.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h5 className="text-xl font-bold mb-3 text-purple-400">Opportunity Mapping</h5>
              <p className="text-gray-300">
                We show your team exactly which streets to hit and which ones to ignore.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h5 className="text-xl font-bold mb-3 text-purple-400">Priority Signals</h5>
              <p className="text-gray-300">
                Real-time data on asset age, owner types, and property size to pinpoint high-ticket jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950/20 to-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black mb-12 text-center">
            HOW IT WORKS: <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">THE 3-STEP TAKEOVER</span>
          </h3>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-black">
                1
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-blue-400">Request Your Zone</h4>
                <p className="text-xl text-gray-300">
                  Pick your industry and your target city.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-black">
                2
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-blue-400">Verify Exclusivity</h4>
                <p className="text-xl text-gray-300">
                  If the territory is open, we lock it to your name immediately.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-black">
                3
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-blue-400">Deploy Your Team</h4>
                <p className="text-xl text-gray-300">
                  Receive your monthly "Intelligence Pack" and start dominating the ground.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Buyer Per City Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-8">
            <span className="text-red-400">ONE BUYER PER CITY</span>
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            This is not for everyone. This is for the contractor with the trucks, the reps, and the hunger to be #1 in their market.
          </p>

          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            If you want to "try out" a few leads, go to Google. If you want to own the territory, stay here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:skaplan@instinctrise.com?subject=Check Territory Availability"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              CHECK AVAILABILITY →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
