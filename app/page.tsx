'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_110%)] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Stop Chasing Leads.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Own the Territory.
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exclusive territory intelligence for home service contractors. One client per ZIP code or city, per industry. No competition.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-territory"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Request Your Territory →
            </Link>
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-gray-700 bg-black/40 px-8 py-4 text-lg font-bold hover:bg-black/60 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Territory exclusivity designed for dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
              <span className="text-2xl font-black">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Choose Your Territory</h3>
            <p className="text-gray-400 leading-relaxed">
              Select your target ZIP code or city. Each territory is exclusive to one contractor per industry.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-black/40 p-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 mb-6">
              <span className="text-2xl font-black">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Lock Your Exclusivity</h3>
            <p className="text-gray-400 leading-relaxed">
              Once claimed, your territory is protected. No other contractor in your industry can access the same area.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-black/40 p-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 mb-6">
              <span className="text-2xl font-black">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Dominate Your Market</h3>
            <p className="text-gray-400 leading-relaxed">
              Access territory intelligence, demographic insights, and targeting tools to maximize revenue in your exclusive zone.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Exclusive territory protection for serious operators.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl border-2 border-purple-600 bg-gradient-to-br from-black/60 to-gray-900/60 p-10">
            <div className="text-center">
              <h3 className="text-3xl font-black mb-2">Territory Exclusive</h3>
              <div className="text-5xl font-black mt-6 mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </div>
              <p className="text-gray-400 mb-8">Custom pricing based on territory size and market potential</p>

              <ul className="text-left space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Exclusive rights to one ZIP code or city per industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Full territory demographics and market intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Priority access to high-value leads in your area</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Guaranteed no competitors in your territory</span>
                </li>
              </ul>

              <Link
                href="/request-territory"
                className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                Request Territory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Own Your Territory?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Territories are released selectively. Lock yours before it's claimed.
          </p>
          <Link
            href="/request-territory"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            Request Territory Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
