/**
 * Lender Module - Data Model
 * Master lender directory with revenue rates and redirect URLs
 */

import { model } from "@medusajs/framework/utils";

export const Lender = model.define("lender", {
  id: model.id().primaryKey(),
  
  // Lender identification
  lender_key: model.text().unique(), // e.g., "chase", "amex", "sofi"
  legal_name: model.text(),
  display_name: model.text(),
  
  // Branding
  logo_url: model.text().nullable(),
  brand_color: model.text().nullable(),
  
  // Contact & URLs
  website_url: model.text(),
  application_base_url: model.text(), // Base URL for "Apply with [Lender]" redirects
  support_phone: model.text().nullable(),
  support_email: model.text().nullable(),
  
  // Revenue configuration
  default_cpl_rate: model.number(), // Default Cost Per Lead ($50-$150)
  default_cpc_rate: model.number(), // Default Cost Per Click ($5-$15)
  
  // Product-specific rate overrides stored in product metadata
  // This is just the default for new products
  
  // Compliance
  tcpa_disclosure_text: model.text(), // Standard TCPA consent text for this lender
  terms_url: model.text().nullable(),
  privacy_url: model.text().nullable(),
  
  // Status
  is_active: model.boolean().default(true),
  
  // Service quality (from user reviews)
  avg_rating: model.number().nullable(), // 1-5 stars
  total_reviews: model.number().default(0),
  avg_decision_time_hours: model.number().nullable(),
  avg_rate_accuracy_score: model.number().nullable(), // 1-100%
});
