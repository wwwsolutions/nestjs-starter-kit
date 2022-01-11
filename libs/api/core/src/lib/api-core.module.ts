import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import {
  integrationConfiguration,
  domainsConfiguration,
  resolversConfiguration,
  controllersConfiguration,
} from './api-core-configs';

@Module({
  imports: [
    // CONFIG RELEVANT TO BASE STARTER KIT FUNCTIONALITY
    ApiConfigAppModule,
    // CONFIG RELEVANT TO BASE STARTER KIT FUNCTIONALITY
    WinstonModule.forRootAsync({
      useFactory: async (winstonConfiguration: WinstonConfiguration) => ({
        ...winstonConfiguration.options,
      }),
      inject: [winstonConfiguration.KEY],
    }),
    // INTEGRATIONS
    ...integrationConfiguration,
    // DOMAINS/FEATURES/BUSINESS LOGIC
    ...domainsConfiguration,
  ],
  providers: resolversConfiguration,
  controllers: controllersConfiguration,
})
export class ApiCoreModule {}
