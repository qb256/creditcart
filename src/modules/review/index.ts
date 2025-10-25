/**
 * Lender Review Module
 * User-generated lender service reviews (unique UGC for financial products)
 */

import { Module } from "@medusajs/framework/utils";
import ReviewModuleService from "./service";

export const REVIEW_MODULE = "review";

export default Module(REVIEW_MODULE, {
  service: ReviewModuleService,
});

export * from "./models/lender-review";
