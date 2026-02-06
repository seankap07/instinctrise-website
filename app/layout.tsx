import "./globals.css";

export const metadata = {
  title: "TerritoryIQ™ — Own the Territory",
  description: "Exclusive territory intelligence for home service contractors. One client per ZIP, per trade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F1A] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}