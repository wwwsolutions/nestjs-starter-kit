import { ApiIntegrationGraphqlPrismaModule } from '@wwwsolutions/api/integration/graphql-prisma';
import { ApiIntegrationRestMongooseModule } from '@wwwsolutions/api/integration/rest-mongoose';

import { NestImport } from '@wwwsolutions/shared/types';

/*
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
▓                                                            ▓
▓     REGISTER SINGLE INTEGRATION MODULE DEPENDING ON        ▓
▓       WHICH API IMPLEMENTATION YOU WANT TO UTILIZE         ▓
▓                                                            ▓
▓ <list of integrations>                                     ▓
▓                                                            ▓
▓    ApiIntegrationGraphqlPrismaModule                       ▓
▓    ApiIntegrationRestMongooseModule                        ▓
▓                                                            ▓
▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
*/

export const integrationModule: NestImport = ApiIntegrationGraphqlPrismaModule;
// ApiIntegrationRestMongooseModule;
