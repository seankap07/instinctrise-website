import Logo from './Logo';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <div className="leading-tight">
            <div className="text-sm font-black tracking-wide">INSTINCTRISE</div>
            <div className="text-xs text-gray-400 -mt-0.5">TerritoryIQ</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-200">
          <Link href="/#how" className="hover:text-white">How it works</Link>
          <Link href="/#pricing" className="hover:text-white">Pricing</Link>
          <Link href="/request-territory" className="hover:text-white">Request territory</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex rounded-xl border border-gray-700 bg-black/40 px-4 py-2 text-sm font-bold hover:bg-black/60"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-bold hover:from-blue-500 hover:to-purple-500"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <div className="md:hidden border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs font-semibold text-gray-300">
          <Link href="/#how" className="hover:text-white">How</Link>
          <Link href="/#pricing" className="hover:text-white">Pricing</Link>
          <Link href="/request-territory" className="hover:text-white">Request</Link>
          <Link href="/login" className="hover:text-white">Login</Link>
        </div>
      </div>
    </header>
  );
}
