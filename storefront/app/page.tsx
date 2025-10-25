import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { FinancialKits } from '@/components/FinancialKits';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold" style={{ color: '#1E227B' }}>
            CreditCart
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/products" className="font-medium hover:text-navy">Browse Cards</Link>
            <Link href="/products?category=personal-loans" className="font-medium hover:text-navy">Personal Loans</Link>
            <Link href="/products?category=mortgages" className="font-medium hover:text-navy">Mortgages</Link>
            <Link href="/cart" className="relative">
              <span className="font-semibold text-trust-blue">Application Queue</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-navy/90 to-charcoal/80 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Shop Smart for Financial Products
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Compare credit cards, loans, and mortgages. Get instant eligibility matches. Apply to multiple lenders in one checkout.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Find Your Card
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Enhancement #3 */}
      <HowItWorks />

      {/* Financial Kits - Enhancement #4 */}
      <FinancialKits />

      {/* Featured Products */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8">Featured Products</h2>
        <ProductGrid limit={6} />
      </section>
    </div>
  );
}
