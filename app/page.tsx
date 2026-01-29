import Image from "next/image";

export default function Page() {
return (
<div className="min-h-screen bg-[#050A12] text-white">
{/* Header */}
<header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<Image
src="/instinctrise-mark.png"
alt="InstinctRise"
width={40}
height={40}
priority
/>
<div className="leading-tight">
<div className="text-base font-semibold tracking-wide">
InstinctRise
</div>
<div className="text-sm text-cyan-400 tracking-wide">
Territory IQ
</div>
</div>
</div>

<a
href="#request"
className="rounded-md bg-cyan-400 px-4 py-2 font-medium text-black hover:bg-cyan-300"
>
Request Territory
</a>
</header>

{/* Hero */}
<section className="mx-auto max-w-6xl px-6 py-20">
<h1 className="text-4xl md:text-5xl font-semibold leading-tight">
Own your territory —
<br />
<span className="text-cyan-400">exclusively.</span>
</h1>

<p className="mt-4 text-lg text-white/80 max-w-xl">
<strong>One contractor per ZIP code, per industry.</strong>
<br />
Territory IQ gives you the intelligence to focus on the right areas,
prioritize the right opportunities, and win without competing inside
your zone.
</p>

<div className="mt-8 flex gap-4">
<a
href="#request"
className="rounded-md bg-cyan-400 px-6 py-3 font-medium text-black hover:bg-cyan-300"
>
Request Your Territory
</a>
<a
href="#how"
className="rounded-md border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10"
>
How it Works
</a>
</div>
</section>

{/* How it Works */}
<section id="how" className="mx-auto max-w-6xl px-6 py-16">
<h2 className="text-2xl font-semibold">How Territory IQ Works</h2>

<div className="mt-8 grid gap-6 md:grid-cols-3">
{[
{
t: "Choose a Territory",
d: "Select a ZIP code or city you want to dominate.",
},
{
t: "Lock Exclusivity",
d: "Once approved, no other contractor in your industry can enter that territory.",
},
{
t: "Win with Intelligence",
d: "Use territory insights to focus effort where results are most likely.",
},
].map((item) => (
<div
key={item.t}
className="rounded-lg border border-white/10 bg-white/5 p-6"
>
<h3 className="font-semibold">{item.t}</h3>
<p className="mt-2 text-sm text-white/70">{item.d}</p>
</div>
))}
</div>
</section>

{/* CTA */}
<section
id="request"
className="mx-auto max-w-6xl px-6 py-20 text-center"
>
<h2 className="text-3xl font-semibold">Ready to claim your ZIP?</h2>
<p className="mt-3 text-white/70">
Territories are limited and awarded selectively.
</p>

<a
href="mailto:info@instinctrise.com"
className="inline-block mt-6 rounded-md bg-cyan-400 px-8 py-3 font-medium text-black hover:bg-cyan-300"
>
Request Territory →
</a>
</section>

{/* Footer */}
<footer className="py-10 text-center text-sm text-white/50">
© {new Date().getFullYear()} InstinctRise · Territory IQ
</footer>
</div>
);
}
