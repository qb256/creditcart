// Enhancement #1: PDP with Dynamic CTA based on profile selection and eligibility_match
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { medusaClient } from '@/lib/medusa-client';
import { ProfileSelector } from '@/components/ProfileSelector';

interface ProductVariant {
  id: string;
  title: string;
  sku?: string;
  metadata?: {
    credit_score_range?: string;
    income_range?: string;
    eligibility_match?: boolean;
  };
}

interface Product {
  id: string;
  title: string;
  description?: string;
  variants: ProductVariant[];
  metadata?: {
    lender_name?: string;
    apr_range_display?: string;
    lender_service_score?: string;
  };
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await medusaClient.store.product.retrieve(params.handle as string);
        setProduct(response.product as Product);
        setSelectedVariant(response.product.variants?.[0] as ProductVariant || null);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.handle]);

  const handleProfileSelect = (creditScore: string, income: string) => {
    // Find matching variant based on profile
    const matchingVariant = product?.variants.find((v) => 
      v.metadata?.credit_score_range === creditScore &&
      v.metadata?.income_range === income
    );
    
    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    
    try {
      // TODO: Add to Medusa cart
      console.log('Adding to cart:', selectedVariant.id);
      alert('Added to Application Queue!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const isEligible = selectedVariant?.metadata?.eligibility_match ?? true;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" className="text-3xl font-bold" style={{ color: '#1E227B' }}>
            CreditCart
          </a>
        </div>
      </header>

      {/* Product Detail */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {product.metadata?.lender_name}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            
            {/* Lender Service Score - for trust building */}
            {product.metadata?.lender_service_score && (
              <div className="mb-6 flex items-center gap-2">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                </div>
                <span className="text-sm font-medium">
                  {product.metadata.lender_service_score}/5.0 CC Community Score
                </span>
                <span className="text-sm text-gray-500">(Ease of Application)</span>
              </div>
            )}
            
            {product.metadata?.apr_range_display && (
              <div className="mb-6">
                <span className="text-2xl font-bold" style={{ color: '#0066CC' }}>
                  {product.metadata.apr_range_display}
                </span>
              </div>
            )}
            
            <p className="text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>
          </div>

          {/* Right: Profile Selector & CTA */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">SEE IF YOU QUALIFY (Instant)</h2>
            
            <ProfileSelector
              variants={product.variants}
              onSelect={handleProfileSelect}
            />
            
            {selectedVariant && (
              <div className="mt-8">
                {isEligible ? (
                  <>
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-green-700 font-semibold">
                        ✅ Soft Match Confirmed
                      </span>
                      <p className="text-sm text-green-600 mt-1">
                        You likely qualify for this product based on your profile
                      </p>
                    </div>
                    
                    <button
                      onClick={handleAddToCart}
                      className="w-full px-8 py-4 text-lg font-semibold text-white rounded-lg transition hover:opacity-90"
                      style={{ backgroundColor: '#1E227B' }}
                    >
                      Add to CreditCart
                    </button>
                  </>
                ) : (
                  <>
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <span className="text-red-700 font-semibold">
                        ❌ Not Eligible
                      </span>
                      <p className="text-sm text-red-600 mt-1">
                        This product may not match your current profile
                      </p>
                    </div>
                    
                    <button
                      disabled
                      className="w-full px-8 py-4 text-lg font-semibold rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed"
                    >
                      Not Eligible - See Recommended Alternatives
                    </button>
                  </>
                )}
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Apply Now, Finish Later - Save progress anytime
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
