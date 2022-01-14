import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule, ConfigObject } from '@nestjs/config';

import { appConfigsObjects } from './registrations/app-configs.registration';

import { validationSchema } from './validation.schema';

const load: ConfigFactory<ConfigObject>[] | undefined = [...appConfigsObjects];

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
