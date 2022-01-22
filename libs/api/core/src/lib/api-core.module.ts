import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  ApiConfigAppModule,
  winstonConfiguration,
  WinstonConfiguration,
} from '@wwwsolutions/api/config/app';

import { controllers } from './registrations/controllers.registration';
import { resolvers } from './registrations/resolvers.registration';
import { domains } from './registrations/domains.registration';
import { integration } from './registrations/integration.registration';

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
    integration,
    ...domains,
  ],
  providers: resolvers,
  controllers,
})
export class ApiCoreModule {}
