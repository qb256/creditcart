'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { medusaClient } from '@/lib/medusa-client';

interface Product {
  id: string;
  handle: string;
  title: string;
  description?: string;
  thumbnail?: string;
  metadata?: {
    product_category?: string;
    lender_name?: string;
    apr_range_display?: string;
  };
}

export function ProductGrid({ limit = 10 }: { limit?: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await medusaClient.store.product.list({ limit });
        setProducts(response.products as Product[]);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [limit]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 h-80 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.handle}`}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition group"
        >
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {product.metadata?.lender_name || 'Lender'}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-navy transition">
            {product.title}
          </h3>
          
          {product.metadata?.apr_range_display && (
            <div className="mb-3">
              <span className="text-sm font-medium text-trust-blue">
                {product.metadata.apr_range_display}
              </span>
            </div>
          )}
          
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
          
          <div className="mt-4 pt-4 border-t">
            <span className="text-sm font-semibold" style={{ color: '#0066CC' }}>
              View Details →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
