import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule, ConfigObject } from '@nestjs/config';

import { appConfigs } from './app-configs';

import { validationSchema } from './validation.schema';

const load: ConfigFactory<ConfigObject>[] | undefined = [...appConfigs];

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
export class ApiConfigAppModule {}
