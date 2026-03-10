'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src="/instinctrise-mark.png.png"
              alt="InstinctRise Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-black tracking-widest text-white uppercase">
              InstinctRise
            </div>
            <div className="flex items-center gap-1.5 -mt-0.5">
              <span className="text-xs font-bold text-orange-400 tracking-wide">TerritoryIQ™</span>
              <span className="hidden sm:inline text-[10px] text-slate-500 font-medium">Flagship Product</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/#how" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/#territories" className="hover:text-white transition-colors">Territories</Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/#proof" className="hover:text-white transition-colors">Results</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/request-territory"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-bold text-white hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-900/30"
          >
            Claim Your Territory →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0F1A]">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-slate-300">
            <Link href="/#how" onClick={() => setMenuOpen(false)} className="hover:text-white py-1">How It Works</Link>
            <Link href="/#territories" onClick={() => setMenuOpen(false)} className="hover:text-white py-1">Territories</Link>
            <Link href="/#pricing" onClick={() => setMenuOpen(false)} className="hover:text-white py-1">Pricing</Link>
            <Link href="/#proof" onClick={() => setMenuOpen(false)} className="hover:text-white py-1">Results</Link>
            <Link
              href="/request-territory"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-bold text-white"
            >
              Claim Your Territory →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
