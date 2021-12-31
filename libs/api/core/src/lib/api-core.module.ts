import { Module } from '@nestjs/common';

import { ApiConfigAppModule } from '@wwwsolutions/api/config/app';

import { integrationConfiguration } from './configuration/integration.configuration';
import { domainsConfiguration } from './configuration/domains.configuration';
import { resolversConfiguration } from './configuration/resolvers.configuration';
import { controllersConfiguration } from './configuration/controllers.configuration';

@Module({
  imports: [
    ApiConfigAppModule,
    ...integrationConfiguration,
    ...domainsConfiguration,
  ],
  providers: resolversConfiguration,
  controllers: controllersConfiguration,
})
export class ApiCoreModule {}
