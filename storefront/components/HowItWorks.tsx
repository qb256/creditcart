// Enhancement #3: How It Works - Transaction-focused copy
export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Profile & Match',
      description: 'Select your profile (Credit Score/Income) to instantly see products that fit.',
    },
    {
      number: '2',
      title: 'Add to Cart / Bundle',
      description: 'Bundle multiple financial products into your CreditCart or select a Financial Kit.',
    },
    {
      number: '3',
      title: 'Apply & Track',
      description: 'One-step checkout captures your consent. Apply now, finish later, and track progress in your dashboard.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: '#1E227B' }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
