/**
 * Consent Record Module - Data Model
 * TCPA 2025 compliant one-to-one consent tracking
 * Stores separate consent for each lender with 7-year retention
 */

import { model } from "@medusajs/framework/utils";

export const ConsentRecord = model.define("consent_record", {
  id: model.id().primaryKey(),
  
  // User and application linkage
  user_id: model.text().nullable(), // Replit Auth sub
  application_id: model.text(), // Links to Application
  
  // Lender-specific consent (one-to-one)
  lender_id: model.text(), // Links to Lender
  lender_name: model.text(),
  
  // Consent details
  consent_granted: model.boolean().default(false),
  consent_type: model.enum(["tcpa_call", "tcpa_sms", "tcpa_email", "data_sharing"]),
  
  // TCPA compliance
  phone_number: model.text().nullable(),
  email: model.text().nullable(),
  ip_address: model.text(),
  user_agent: model.text(),
  consent_text: model.text(), // Full disclosure text shown to user
  
  // Opt-out tracking
  opt_out_at: model.dateTime().nullable(),
  opt_out_method: model.text().nullable(), // "web", "email", "phone", "sms"
  
  // 7-year retention compliance
  retention_expires_at: model.dateTime(), // Auto-calculated as consent_date + 7 years
});
