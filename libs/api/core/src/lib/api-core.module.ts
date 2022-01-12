import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { controllersConfiguration } from './controllers/api-core-controllers.configuration';
import { resolversConfiguration } from './resolvers/api-core-resolvers.configuration';
import { domainsConfiguration } from './domains/api-core-domains.configuration';
import { integrationConfiguration } from './integration.configuration';

@Module({
  // CONFIG RELEVANT TO BASE STARTER KIT FUNCTIONALITY
  imports: [
    ApiConfigAppModule,
    WinstonModule.forRootAsync({
      useFactory: async (winstonConfiguration: WinstonConfiguration) => ({
        ...winstonConfiguration.options,
      }),
      inject: [winstonConfiguration.KEY],
    }),
    ...integrationConfiguration,
    ...domainsConfiguration,
  ],
  providers: resolversConfiguration,
  controllers: controllersConfiguration,
})
export class ApiCoreModule {}
