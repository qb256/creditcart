/**
 * Revenue Event Module - Data Model
 * Tracks CPC clicks and CPL conversions for financial reporting
 */

import { model } from "@medusajs/framework/utils";

export const RevenueEvent = model.define("revenue_event", {
  id: model.id().primaryKey(),
  
  // Event classification
  event_type: model.enum(["cpc_click", "cpl_submission", "cpl_verified"]),
  
  // Linkage
  application_id: model.text(), // Links to Application
  product_id: model.text(), // Medusa product ID
  lender_id: model.text(), // Links to Lender
  user_id: model.text().nullable(), // Replit Auth sub
  
  // Revenue tracking
  revenue_amount: model.number(), // Actual $ amount earned
  revenue_rate: model.number(), // Rate at time of event (for audit)
  
  // Event metadata
  session_id: model.text().nullable(),
  ip_address: model.text().nullable(),
  user_agent: model.text().nullable(),
  referrer: model.text().nullable(),
  
  // Lender verification (for CPL)
  lender_verified: model.boolean().default(false),
  lender_verification_date: model.dateTime().nullable(),
  lender_transaction_id: model.text().nullable(),
  
  // Financial reconciliation
  billing_month: model.text(), // YYYY-MM format
  invoiced: model.boolean().default(false),
  invoice_id: model.text().nullable(),
  paid: model.boolean().default(false),
  paid_date: model.dateTime().nullable(),
});
