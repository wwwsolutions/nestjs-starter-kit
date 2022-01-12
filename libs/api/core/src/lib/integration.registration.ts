import { NestImportsType } from './nest.types';

/* <REQUIRED>
 *
 * REGISTER SINGLE INTEGRATION MODULE DEPENDING ON
 * WHICH API IMPLEMENTATION YOU WANT TO UTILIZE
 *
 * <list of integrations>
 *
 *    ApiIntegrationGraphqlPrismaModule
 *
 */

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiIntegrationGraphqlPrismaModule } from '@wwwsolutions/api/integration/graphql-prisma';

export const integrationConfiguration: NestImportsType = [
  ApiIntegrationGraphqlPrismaModule,
];
