/**
 * Revenue Module
 * CPC click and CPL lead tracking for financial reporting
 */

import { Module } from "@medusajs/framework/utils";
import RevenueModuleService from "./service";

export const REVENUE_MODULE = "revenue";

export default Module(REVENUE_MODULE, {
  service: RevenueModuleService,
});

export * from "./models/revenue-event";
