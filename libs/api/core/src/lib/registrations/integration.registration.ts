import { NestImportsType } from '../nest.types';

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

// export const integration: NestImportsType = ApiIntegrationGraphqlPrismaModule;
export const integration: NestImportsType = ApiIntegrationRestMongooseModule;
