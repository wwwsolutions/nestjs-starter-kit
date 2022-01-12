import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { controllersConfiguration } from './controllers.registration';
import { resolversConfiguration } from './resolvers.registration';
import { domainsConfiguration } from './domains.registration';
import { integrationConfiguration } from './integration.registration';

/* <DO NOT CHANGE>
 *
 *
 *
 *
 */

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
