import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Academic Mentor & Strategist | Professional Academic & Psychological Support',
  description: 'Expert academic mentoring and psychological counselling services. Helping students overcome challenges, achieve academic excellence, and build mental wellness. Specialized support for autism spectrum, anxiety, depression, and academic recovery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
