import { NestImportsType } from '../types';

/* INTEGRATION <REQUIRED>
 *
 * REGISTER SINGLE INTEGRATION MODULE DEPENDING ON
 * WHICH API IMPLEMENTATION YOU WANT TO UTILIZE
 *
 * <various integrations>
 *
 *    ApiGraphqlPrismaIntegrationModule
 *    ApiRestPrismaIntegrationModule
 *    ApiRestMongooseIntegrationModule
 *    ApiRestTypeormIntegrationModule
 *
 */

export const integrationConfiguration: NestImportsType = [];
