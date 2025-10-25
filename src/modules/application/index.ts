/**
 * Application Module
 * Pre-qualification applications with TCPA compliance and application staging
 */

import { Module } from "@medusajs/framework/utils";
import ApplicationModuleService from "./service";

export const APPLICATION_MODULE = "application";

export default Module(APPLICATION_MODULE, {
  service: ApplicationModuleService,
});

export * from "./models/application";
