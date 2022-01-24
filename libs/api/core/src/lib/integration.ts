import { ApiIntegrationRestMongooseModule } from '@wwwsolutions/api/integration/rest-mongoose';

import { NestImportsType } from '@wwwsolutions/shared/types';

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

export const integrationModule: NestImportsType =
  ApiIntegrationRestMongooseModule;
