import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { NestControllersType, NestProvidersType } from './types/nest.types';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { domainModules } from './domains';
import { integrationModule } from './integration';

import { ApiCoreController } from './controllers/api-core.controller';
import { ApiCoreResolver } from './resolvers/api-core.resolver';

/* <OPTIONAL>
 *
 * Register controllers.
 *
 */
const controllers: NestControllersType = [ApiCoreController];

/* <OPTIONAL>
 *
 * Register resolvers.
 *
 */
const providers: NestProvidersType = [ApiCoreResolver];

/* <DO NOT CHANGE>
 *
 * API Core.
 *
 * app base: (ApiConfigAppModule + WinstonModule) + (integrationModule + domainModules).
 *
 */
@Module({
  imports: [
    ApiConfigAppModule,
    WinstonModule.forRootAsync({
      useFactory: async (winstonConfiguration: WinstonConfiguration) => ({
        ...winstonConfiguration.options,
      }),
      inject: [winstonConfiguration.KEY],
    }),
    integrationModule,
    ...domainModules,
  ],
  providers,
  controllers,
})
export class ApiCoreModule {}
