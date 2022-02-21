import { ApiIntegrationGraphqlPrismaPostgresFeatureModule } from '@wwwsolutions/api/integration/graphql-prisma-postgres/feature';
import { ApiIntegrationRestMongooseFeatureModule } from '@wwwsolutions/api/integration/rest-mongoose/feature';

import { NestImport } from '@wwwsolutions/api/common/types';

/*
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
▓                                                            ▓
▓     REGISTER SINGLE INTEGRATION MODULE DEPENDING ON        ▓
▓       WHICH API IMPLEMENTATION YOU WANT TO UTILIZE         ▓
▓                                                            ▓
▓ <list of integrations>                                     ▓
▓                                                            ▓
▓    ApiIntegrationGraphqlPrismaPostgresFeatureModule        ▓
▓    ApiIntegrationRestMongooseFeatureModule                 ▓
▓                                                            ▓
▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
*/

export const apiIntegrationModule: NestImport =
  // ApiIntegrationGraphqlPrismaPostgresFeatureModule;
  ApiIntegrationRestMongooseFeatureModule;
