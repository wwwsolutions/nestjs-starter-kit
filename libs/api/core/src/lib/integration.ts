import { NestImportsType } from './types/nest.types';

import { ApiIntegrationGraphqlPrismaModule } from '@wwwsolutions/api/integration/graphql-prisma';

import { ApiIntegrationRestMongooseModule } from '@wwwsolutions/api/integration/rest-mongoose';

/* <REQUIRED>
 *
 * REGISTER SINGLE INTEGRATION MODULE DEPENDING ON
 * WHICH API IMPLEMENTATION YOU WANT TO UTILIZE
 *
 * <list of integrations>
 *
 *    ApiIntegrationGraphqlPrismaModule
 *    ApiIntegrationRestMongooseModule
 *
 */

// export const integrationModule: NestImportsType = ApiIntegrationGraphqlPrismaModule;
export const integrationModule: NestImportsType =
  ApiIntegrationRestMongooseModule;
