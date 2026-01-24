import ContactForm from '@/components/ContactForm';
import BrainLogo from '@/components/BrainLogo';

export default function FreeAnalysisPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BrainLogo className="w-20 h-20 md:w-24 md:h-24" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            INSTINCTRISE
          </h1>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Get Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">FREE</span><br />
            Territory Analysis
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See exactly how many properties, hot leads, and revenue potential exist in YOUR territory.
            Delivered in under 30 minutes.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-blue-500/30">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Property Count</h3>
              <p className="text-gray-400">
                Total properties in your county/city/ZIP with roof age breakdown
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Hot Leads</h3>
              <p className="text-gray-400">
                Number of TIER 1 properties (25+ year roofs) ready to close NOW
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-green-500/30">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">Pipeline Value</h3>
              <p className="text-gray-400">
                Total addressable market value in your territory (residential + commercial)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Report Preview */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-blue-500/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black mb-8 text-center">
            Here&apos;s What You&apos;ll Get <span className="text-blue-400">(FREE)</span>
          </h3>

          <div className="p-8 bg-black/50 rounded-2xl border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-black">
                📧
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Personalized Territory Report</h4>
                <p className="text-gray-400">
                  Custom analysis of your specific county/city/ZIP delivered via email within 30 minutes
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Total Properties</p>
                <p className="text-3xl font-black text-white">50,448</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">TIER 1 Hot Leads</p>
                <p className="text-3xl font-black text-orange-400">18,388</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Pipeline Value</p>
                <p className="text-3xl font-black text-green-400">$551M</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Avg Project Value</p>
                <p className="text-3xl font-black text-blue-400">$30,000</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-gray-300"><span className="font-semibold text-white">Top 5 Properties</span> to quote first (addresses + project values)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-gray-300"><span className="font-semibold text-white">Breakdown by urgency tier</span> (Critical/High/Medium/Low)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-gray-300"><span className="font-semibold text-white">Territory exclusivity confirmation</span> (still available or sold?)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-gray-300"><span className="font-semibold text-white">ROI calculator</span> showing how fast you&apos;ll recoup your investment</p>
              </div>
            </div>
          </div>

          <p className="text-center mt-6 text-gray-400">
            <span className="text-blue-400 font-semibold">Example:</span> Martin County analysis shown above (already sold to Josh)
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black mb-4">
              Get Your Territory Analysis <span className="text-green-400">FREE</span>
            </h3>
            <p className="text-xl text-gray-300 mb-2">
              No credit card. No obligation. Just pure data about YOUR territory.
            </p>
            <p className="text-lg text-gray-400">
              Response time: &lt;30 minutes (during business hours)
            </p>
          </div>

          <ContactForm />

          {/* Trust Badges */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <p className="font-semibold text-white mb-1">Fast Response</p>
              <p className="text-sm text-gray-400">Report delivered in 30 min or less</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🔒</div>
              <p className="font-semibold text-white mb-1">Territory Protected</p>
              <p className="text-sm text-gray-400">We won&apos;t sell to your competitors</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💯</div>
              <p className="font-semibold text-white mb-1">No Obligation</p>
              <p className="text-sm text-gray-400">Free analysis, no strings attached</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-black mb-8 text-center">Quick Questions</h3>

          <div className="space-y-4">
            <details className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <summary className="font-bold text-lg cursor-pointer">
                How fast will I get my analysis?
              </summary>
              <p className="mt-4 text-gray-400">
                Within 30 minutes during business hours (Mon-Fri 9am-6pm EST). If you submit after hours, you&apos;ll get it first thing the next morning.
              </p>
            </details>

            <details className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <summary className="font-bold text-lg cursor-pointer">
                Is this really free?
              </summary>
              <p className="mt-4 text-gray-400">
                100% free. No credit card required. We want you to see the value before you buy. If your territory has potential, we&apos;ll show you. If it doesn&apos;t, we&apos;ll tell you honestly.
              </p>
            </details>

            <details className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <summary className="font-bold text-lg cursor-pointer">
                What if my territory is already sold?
              </summary>
              <p className="mt-4 text-gray-400">
                We&apos;ll tell you immediately and suggest nearby cities or ZIP codes that are still available. Territory exclusivity is real—only ONE contractor per area.
              </p>
            </details>

            <details className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <summary className="font-bold text-lg cursor-pointer">
                Can I see data for multiple territories?
              </summary>
              <p className="mt-4 text-gray-400">
                Absolutely. Submit once for your primary territory, then email skaplan@instinctrise.com for additional areas. We can run reports for as many territories as you want.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">Questions? Email Sean directly:</p>
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
