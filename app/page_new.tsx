import BrainLogo from '@/components/BrainLogo';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <BrainLogo className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Company Name */}
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            INSTINCTRISE
          </h1>

          {/* Headline - Belfort/Hormozi Style */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Stop Chasing Leads.<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Own The Territory.
            </span>
          </h2>
