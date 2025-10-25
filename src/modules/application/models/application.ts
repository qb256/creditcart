/**
 * Application Module - Data Model
 * Stores pre-qualification applications submitted by users
 */

import { model } from "@medusajs/framework/utils";

export const Application = model.define("application", {
  id: model.id().primaryKey(),
  
  // User information
  user_id: model.text().nullable(), // Links to Replit Auth user (sub claim)
  email: model.text(),
  phone: model.text().nullable(),
  first_name: model.text(),
  last_name: model.text(),
  
  // Profile data for matching
  credit_score_range: model.text(), // CreditScoreRange enum value
  annual_income: model.number(),
  employment_status: model.text().nullable(),
  debt_to_income_ratio: model.number().nullable(),
  
  // Application metadata
  status: model.enum(["draft", "submitted", "matched", "completed", "cancelled"]).default("draft"),
  product_ids: model.array(), // Array of Medusa product IDs in cart
  
  // Financial data verification (Plaid integration - Phase 2)
  plaid_access_token: model.text().nullable(),
  plaid_item_id: model.text().nullable(),
  financial_verification_status: model.text().nullable(),
  
  // Matching results
  matched_lender_ids: model.array(),
  match_score: model.number().nullable(),
  match_confidence: model.text().nullable(), // "high", "medium", "low"
  
  // Application staging ("Apply Now, Finish Later" feature)
  is_staged: model.boolean().default(false),
  stage_resume_token: model.text().nullable(),
  stage_expires_at: model.dateTime().nullable(),
  
  // Additional timestamps (created_at and updated_at are auto-added by Medusa)
  submitted_at: model.dateTime().nullable(),
});
