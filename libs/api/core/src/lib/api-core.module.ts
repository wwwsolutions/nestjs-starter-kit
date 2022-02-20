import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { domainModules } from './domains';
import { integrationModule } from './integration';

import { ApiCoreController } from './api-core.controller';
import { ApiCoreResolver } from './api-core.resolver';

import { NestControllers, NestProviders } from '@wwwsolutions/api/common/types';

/* <OPTIONAL>
 *
 * Register controllers.
 *
 */
const controllers: NestControllers = [ApiCoreController];

/* <OPTIONAL>
 *
 * Register resolvers.
 *
 */
const providers: NestProviders = [ApiCoreResolver];

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
