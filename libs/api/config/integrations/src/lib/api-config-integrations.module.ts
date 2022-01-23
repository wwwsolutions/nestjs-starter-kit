// https://docs.nestjs.com/techniques/configuration

import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule, ConfigObject } from '@nestjs/config';

import { apiIntegrationConfigs } from './integration-configs';

import { validationSchema } from './validation.schema';

// const load: ConfigFactory<ConfigObject>[] | undefined = [
//   ...apiIntegrationConfigs,
// ];

const load: ConfigFactory<ConfigObject>[] | undefined = apiIntegrationConfigs;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        'apps/api/.env.local',
        `apps/api/.env.${process.env['NODE' + '_ENV']}`,
      ],
      validationSchema,
      load,
    }),
  ],
})
export class ApiConfigIntegrationsModule {}