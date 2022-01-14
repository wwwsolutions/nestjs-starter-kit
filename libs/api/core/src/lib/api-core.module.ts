import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { controllersConfiguration } from './registrations/controllers.registration';
import { resolversConfiguration } from './registrations/resolvers.registration';
import { domainsConfiguration } from './registrations/domains.registration';
import { integrationConfiguration } from './registrations/integration.registration';

/* <DO NOT CHANGE>
 *
 * To register controllers, resolvers, domains and integration use corresponding `*.registration.ts` files.
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
