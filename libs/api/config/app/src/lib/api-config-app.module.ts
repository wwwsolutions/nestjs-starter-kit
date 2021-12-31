// https://docs.nestjs.com/techniques/configuration

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environmentConfiguration } from './configs/environment.configuration';
import { appConfiguration } from './configs/app.configuration';
import { adminConfiguration } from './configs/admin.configuration';

import { validationSchema } from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        'apps/api/.env.local',
        `apps/api/.env.${process.env['NODE' + '_ENV']}`,
      ],
      validationSchema,
      load: [environmentConfiguration, appConfiguration, adminConfiguration],
    }),
  ],
})
export class ApiConfigAppModule {}
