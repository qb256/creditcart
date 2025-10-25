// Enhancement #4: Financial Kits - Bundle presentation with A/B testing
'use client';

export function FinancialKits() {
  const kits = [
    {
      name: 'First Homeowner Kit',
      description: 'Everything you need to finance your first home',
      applications: 3,
      products: ['FHA Mortgage', 'Home Equity Line', 'Moving Expense Loan'],
      bundleId: 'first-homeowner',
    },
    {
      name: 'Credit Builder Kit',
      description: 'Build your credit score with smart products',
      applications: 2,
      products: ['Secured Credit Card', 'Credit Builder Loan'],
      bundleId: 'credit-builder',
    },
    {
      name: 'Business Starter Kit',
      description: 'Launch your business with essential financing',
      applications: 3,
      products: ['Business Credit Card', 'Small Business Loan', 'Line of Credit'],
      bundleId: 'business-starter',
    },
  ];

  const handleAddBundle = (bundleId: string, productCount: number) => {
    console.log(`Adding ${productCount} products from ${bundleId} to cart`);
    // TODO: Batch add to Medusa cart
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-4">Financial Kits</h2>
        <p className="text-gray-600 mb-8">Pre-bundled applications for common financial goals</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {kits.map((kit) => (
            <div
              key={kit.bundleId}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 text-sm font-semibold rounded-full text-white"
                  style={{ backgroundColor: '#0066CC' }}
                >
                  {kit.applications} Applications Included
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{kit.name}</h3>
              <p className="text-gray-600 mb-4">{kit.description}</p>
              
              <ul className="mb-6 space-y-2">
                {kit.products.map((product, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {product}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleAddBundle(kit.bundleId, kit.applications)}
                className="w-full px-6 py-3 font-semibold rounded-lg text-white transition hover:opacity-90"
                style={{ backgroundColor: '#1E227B' }}
              >
                Add All {kit.applications} to CreditCart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
