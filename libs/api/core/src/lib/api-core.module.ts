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
} from './configs';

@Module({
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
