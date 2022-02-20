// import { ApiIntegrationGraphqlPrismaModule } from '@wwwsolutions/api/integration/graphql-prisma';
import { ApiIntegrationGraphqlPrismaPostgresFeatureModule } from '@wwwsolutions/api/integration/graphql-prisma-postgres/feature';
import { ApiIntegrationRestMongooseModule } from '@wwwsolutions/api/integration/rest-mongoose';

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
▓    ApiIntegrationRestMongooseModule                        ▓
▓                                                            ▓
▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
*/

export const apiIntegrationModule: NestImport =
  // ApiIntegrationGraphqlPrismaModule;
  ApiIntegrationGraphqlPrismaPostgresFeatureModule;
// ApiIntegrationRestMongooseModule;
