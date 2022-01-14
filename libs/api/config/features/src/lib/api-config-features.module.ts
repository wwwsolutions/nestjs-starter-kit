// https://docs.nestjs.com/techniques/configuration

import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule, ConfigObject } from '@nestjs/config';

import { integrationConfigsObjects } from './registrations/integration-configs.registration';
import { businessLogicConfigsObjects } from './registrations/feature-configs.registration';

import { validationSchema } from './validation.schema';

const load: ConfigFactory<ConfigObject>[] | undefined = [
  ...integrationConfigsObjects,
  ...businessLogicConfigsObjects,
];

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
export class ApiConfigFeaturesModule {}
