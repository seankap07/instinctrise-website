import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'InstinctRise | TerritoryIQ',
  description: 'Stop chasing leads. Own the territory. Exclusive territory intelligence for home service operators.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
