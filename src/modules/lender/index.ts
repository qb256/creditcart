/**
 * Lender Module
 * Master lender directory with revenue rates and service quality metrics
 */

import { Module } from "@medusajs/framework/utils";
import LenderModuleService from "./service";

export const LENDER_MODULE = "lender";

export default Module(LENDER_MODULE, {
  service: LenderModuleService,
});

export * from "./models/lender";
