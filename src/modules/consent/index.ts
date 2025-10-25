/**
 * Consent Module
 * TCPA 2025 compliant one-to-one lender consent tracking with 7-year retention
 */

import { Module } from "@medusajs/framework/utils";
import ConsentModuleService from "./service";

export const CONSENT_MODULE = "consent";

export default Module(CONSENT_MODULE, {
  service: ConsentModuleService,
});

export * from "./models/consent-record";
