import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { appConfigs } from './app-configs';

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
      load: appConfigs,
    }),
  ],
})
export class ApiConfigAppModule {}
