// Enhancement #2: Application Staging Queue
'use client';

export default function ApplicationQueuePage() {
  // Mock cart items for demonstration
  const queueItems = [
    {
      id: '1',
      productName: 'Chase Sapphire Reserve®',
      lenderName: 'Chase',
      status: 'soft-match-confirmed',
      variantInfo: 'Excellent Credit (720+), $75K+ Income',
    },
    {
      id: '2',
      productName: 'Personal Loan 3.99% APR',
      lenderName: 'Discover',
      status: 'soft-match-confirmed',
      variantInfo: 'Good Credit (680-719), $50K+ Income',
    },
    {
      id: '3',
      productName: '30-Year Fixed Mortgage',
      lenderName: 'Wells Fargo',
      status: 'soft-match-confirmed',
      variantInfo: 'Excellent Credit (720+), $100K+ Income',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" className="text-3xl font-bold" style={{ color: '#1E227B' }}>
            CreditCart
          </a>
        </div>
      </header>

      {/* Application Queue */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Applications Queue</h1>
          <p className="text-gray-600">
            {queueItems.length} items ready • Apply Now, Finish Later
          </p>
        </div>

        {/* Queue Items */}
        <div className="space-y-4 mb-8">
          {queueItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{item.productName}</h3>
                    <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
                      ✅ Soft Match Confirmed
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-1">{item.lenderName}</p>
                  <p className="text-sm text-gray-600">{item.variantInfo}</p>
                </div>
                
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout CTA */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ready to Proceed?</h2>
            <p className="text-gray-600">
              Complete one simple form to start applications with all {queueItems.length} lenders
            </p>
          </div>
          
          <button
            className="w-full px-8 py-4 text-lg font-semibold text-white rounded-lg transition hover:opacity-90"
            style={{ backgroundColor: '#1E227B' }}
          >
            Proceed to Checkout ({queueItems.length} Applications)
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            One-step TCPA consent • Apply now, finish later • Track in dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
