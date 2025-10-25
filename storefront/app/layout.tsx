import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CreditCart - Shop Smart for Financial Products',
  description: 'Compare and apply for credit cards, loans, and mortgages in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
