import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { NestControllers, NestProviders } from '@wwwsolutions/api/common/types';

import { ApiCoreController } from './controllers/api-core.controller';
import { ApiCoreResolver } from './resolvers/api-core.resolver';

import { domainIntegrationModules } from './integrations/domain.integration';
import { apiIntegrationModule } from './integrations/api.integration';

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
 * app base: (ApiConfigAppModule + WinstonModule) + (apiIntegrationModules + domainIntegrationModules).
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
    apiIntegrationModule,
    ...domainIntegrationModules,
  ],
  providers,
  controllers,
})
export class ApiCoreModule {}
