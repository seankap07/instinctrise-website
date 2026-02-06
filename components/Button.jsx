export default function Button({ href, children, variant="primary", className="" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition";
  const styles = {
    primary: "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90",
    secondary: "border border-white/20 text-slate-200 hover:border-white/40 hover:text-white",
    ghost: "text-slate-300 hover:text-white"
  };

  if (href) {
    return <a href={href} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
  }
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}