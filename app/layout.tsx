import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fast Lane Fitness | Stilwell Gym',
  description: 'Fast Lane Fitness is a luxury 24-hour gym in Stilwell, Oklahoma offering premium equipment, supportive coaching, and a community-driven atmosphere.',
  metadataBase: new URL('https://www.fastlanefitnessstilwell.com'),
  openGraph: {
    title: 'Fast Lane Fitness',
    description: 'Premium 24-hour gym in Stilwell, Oklahoma with elite equipment, clean facility, and friendly staff.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
