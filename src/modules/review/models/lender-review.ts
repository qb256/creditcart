/**
 * Lender Review Module - Data Model
 * User-generated reviews of lender service quality (not product quality)
 * This is a unique UGC feature for financial products per CC Platform spec
 */

import { model } from "@medusajs/framework/utils";

export const LenderReview = model.define("lender_review", {
  id: model.id().primaryKey(),
  
  // Linkage
  lender_id: model.text(), // Links to Lender
  user_id: model.text(), // Replit Auth sub
  application_id: model.text().nullable(), // Optional link to application
  
  // Service quality ratings (1-5 stars each)
  overall_rating: model.number(), // Required, 1-5
  ease_of_application_rating: model.number().nullable(),
  decision_speed_rating: model.number().nullable(),
  rate_accuracy_rating: model.number().nullable(), // Did quoted rate match final rate?
  customer_service_rating: model.number().nullable(),
  
  // Written feedback
  review_title: model.text().nullable(),
  review_text: model.text(),
  
  // Experience details
  decision_time_days: model.number().nullable(), // How long for lender decision?
  application_date: model.dateTime().nullable(),
  decision_date: model.dateTime().nullable(),
  final_outcome: model.enum(["approved", "denied", "withdrawn", "pending"]).nullable(),
  
  // Verification
  is_verified_applicant: model.boolean().default(false), // Did they actually apply through CC Platform?
  
  // Moderation
  is_published: model.boolean().default(true),
  is_flagged: model.boolean().default(false),
  flagged_reason: model.text().nullable(),
  moderator_notes: model.text().nullable(),
  
  // Helpfulness voting
  helpful_count: model.number().default(0),
  not_helpful_count: model.number().default(0),
});
